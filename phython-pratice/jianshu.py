# _*_ coding:utf-8 _*_

import requests
import lxml
from bs4 import BeautifulSoup

URL = 'http://www.jianshu.com'


def simple_crawel():
    html = requests.get(URL).content
    soup = BeautifulSoup(html, lxml)
    titles = soup.find_all('a', class_="title")
    for t in titles:
        print (t.text+' -->>> '+'https://www.jianshu.com'+t['href'])


if __name__ == '__main__':
    simple_crawel()
