# -*- coding: UTF-8 -*-

from bs4 import BeautifulSoup
import requests
import re

# web爬虫学习 -- 分析
# 获取页面信息

# 输入：url
# 处理：request库函数获取页面信息，并将网页内容转换成为人能看懂的编码格式
# 输出：爬取到的内容


def getHTMLText(url):
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()  # 如果状态码不是200，产生异常
        r.encoding = 'utf-8'  # 字符编码格式改成 utf-8
        return r.text
    except:
        # 异常处理
        return " error "


def findHTMLText(text):
    soup = BeautifulSoup(text, "html.parser")
    return soup.find_all(string=re.compile('百度'))


url = "http://www.baidu.com"
text = getHTMLText(url)
res = findHTMLText(text)
print(res)
