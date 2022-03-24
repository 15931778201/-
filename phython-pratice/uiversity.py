# -*- coding: UTF-8 -*-
import re
from bs4 import BeautifulSoup
import requests
allUniv = []

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


def fillUnivList(soup):
    root = soup.find('tbody')
    data = root.find_all('tr')
    # print(data)
    # ltd = data[2].find_all('td')
    # print(ltd)
    for tr in data:
        ltd = tr.find_all('td')
        if len(ltd) == 0:
            continue
        singleUniv = []
        for td in ltd:
            print(td)
            singleUniv.append(td.get_text().strip())
        allUniv.append(singleUniv)


def printUniv(num):
    print("{:^4}{:^10}{:^5}{:^8}{:^10}".format(
        "排名", "学校名称", "省市", "类型", "总分"))
    for i in range(num):
        u = allUniv[i]
        # print(u)
        print("{:^4}{:^10}{:^5}{:^8}{:^10}".format(
            u[0], u[1], u[2], u[3], u[4]))


url = "https://www.shanghairanking.cn/rankings/bcur/202011"
text = getHTMLText(url)
soup = BeautifulSoup(text, "html.parser")
# print(text)
fillUnivList(soup)
printUniv(100)
