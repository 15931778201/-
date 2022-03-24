#coding=utf-8
import requests
from bs4 import BeautifulSoup


resp=requests.get('https://www.baidu.com') #请求百度首页

bsobj=BeautifulSoup(resp.content,'lxml') #将网页源码构造成BeautifulSoup对象，方便操作
a_list=bsobj.find_all('a') #获取网页中的所有a标签对象
text='' # 创建一个空字符串

for a in a_list:
    href=a.get('href')
    text+=href+'\n'
with open('url.txt', 'w') as f:
    f.write(text)
