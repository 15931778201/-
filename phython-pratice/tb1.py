    #coding=UTF-8
    ###
    # 脚本依赖：
    # python 2.7 以上，3.0 一以下 https://www.python.org/ftp/python/2.7.9/
    # selenium 2.5
    #
    ###
    # __author__ = 'Kevin'
    import urllib
    import urllib2
    import cookielib
    import re
    import webbrowser
    import json
    import sys
    import time
    import os
    from selenium.webdriver.common.proxy import *
    from selenium import webdriver
    from selenium.webdriver.common.action_chains import ActionChains
    from selenium.webdriver.common.keys import Keys
    #模拟登录淘宝类
    class Taobao:

        #初始化方法
        def __init__(self):
            #登录的URL
            self.loginURL = "https://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&css_style=alimama&from=alimama&redirectURL=http%3A%2F%2Fwww.alimama.com&full_redirect=true&disableQuickLogin=true"
            #检查是否需要滑块解锁的URL
            self.needCodeURL = "https://login.taobao.com/member/request_nick_check.do?_input_charset=utf-8"
            #用户消息中心
            self.accountInfoURL = "http://ad.alimama.com/earned/settle/getAccountInfo.json"
            self.TPL_username = '841694874@qq.com'
            self.TPL_password = 'your taobao account password'
            self.service_args = [
                #'--proxy=218.241.30.187:8123',
                #'--proxy-type=http',
            ]
            self.driver = webdriver.PhantomJS(executable_path = "D:\\python\\phantomjs\\bin\\phantomjs.exe", service_args=self.service_args)
            self.driver.set_window_size(1920,1080)
            #代理IP地址，防止自己的IP被封禁
            #self.proxyURL = 'http://120.193.146.97:843'
            #登录POST数据时发送的头部信息
            self.loginHeaders =  {
                'Host':'login.taobao.com',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0',
                'Referer' : 'https://login.taobao.com/member/login.jhtml',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Connection' : 'Keep-Alive'
            },
            #保存一个 taobao 全局 token
            self._tb_token_ = ''

        #获取用户消息
        def getAccountInfo(self, cookiestr):
            postData = urllib.urlencode({
                'startTime':'2016-11-09',
                'endTime':'2016-11-16',
                '_tb_token_':self._tb_token_
            })
            print (u'登录时候的Token:',self._tb_token_)
            headers = {'cookie':cookiestr}
            req = urllib2.Request(self.accountInfoURL, postData, headers = headers)
            try:  
                response = urllib2.urlopen(req)  
                content = response.read()  
                filename = './userMessage.html'
                self.saveFile(content, filename)
                print (u'已经获取到账户内容:',content)
            except:  
                print (u'获取用户消息失败!')

        #登录获取cookie
        def login(self):
            self.driver.get(self.loginURL)
            time.sleep(3)
            self.switchFromLogin()
            self.inputUserName()
            self.inputPassword()
            self.driver.find_element_by_id("J_SubmitStatic").click()
            time.sleep(1)
            cookie = self.driver.get_cookies()
            cookiefilepath = './userCookie.txt'
            cookiestr = self.saveCookie(cookie, cookiefilepath)
            self.driver.close()
            return cookiestr

        #监测是否需要滑动解锁 todo
        def needCode(self):
            return False

        #切换普通表单登陆
        def switchFromLogin(self):
            self.driver.find_element_by_id("J_Quick2Static").click()

        def inputUserName(self):
            user_name = self.driver.find_element_by_id("TPL_username_1")
            user_name.clear()
            user_name.send_keys(self.TPL_username)

        def inputPassword(self):
            password = self.driver.find_element_by_id("TPL_password_1")
            password.clear()
            password.send_keys(self.TPL_password)

        #cookie 写入本地，利于查看,且可返回cookies string  
        def saveCookie(self, cookies, cookfilepath):
            cookie = []
            for item in cookies:
                if(item["name"] == '_tb_token_'):
                    self._tb_token_ = item["value"]

            cookie = [item["name"] + "=" + item["value"] for item in cookies]  
            cookiestr = ';'.join(item for item in cookie)
            f = open(cookfilepath, "a+")
            f.write(cookiestr)
            f.close()
            return cookiestr

        #临时写入文件 利于调试    
        def saveFile(self, content, filepath):
            f = open(filepath, "a+")
            f.write(content)
            f.close()

        def main(self):
            reload(sys)
            sys.setdefaultencoding('utf-8')
            cookfilepath = self.login()
            self.getAccountInfo(cookfilepath)
        taobao = Taobao()
        taobao.main()
