from cProfile import label
from email import header
from pydoc import describe
from urllib import response
import requests
import re
import os
import pandas as pd
from bs4 import BeautifulSoup
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib
plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']

url = 'https://tophub.today/n/mproPpoq6O'
headers = {'user-agent': '4545454'}
response = requests.get(url, headers = headers, timeout=30)
html = response.text
title = re.findall('<a href=.*? target="_blank" .*?>(.*?)</a>', html)[2:52]
redu=re.findall('<td>(.*?)</td>',html)[0:50]
# print(title)
# print(redu)

# 创建字典
dict= {'内容': title, '阅读数量': redu}
x = pd.DataFrame(dict)
# print(x)
# x.to_csv('./知乎热榜数据.csv')

dict = []
for i in range(20):
  dict.append([i+1, title[i], redu[i][:-3]])

#建立一个有关文件夹
file = pd.DataFrame(dict, columns=['排名','知乎今日热榜','热度（单位：万）'])
# print(file)
file.to_csv('./知乎热榜数据.csv')

#读取csv文件
df = pd.DataFrame(pd.read_csv('./知乎热榜数据.csv'))
df.head()

#进行清洗，去除无效数据
df.drop('知乎今日热榜', axis=1, inplace=True)
df.head()
df.isnull().sum()

#缺失值
df[df.isnull().values==True]
#显示描述性统计指标
df.describe()
#相关系数问题
df.corr()
#排名和热度之间的线性关系
sns.lmplot(x='排名',y='热度（单位：万）',data=df)
#绘制条形统计图
def build():
  x = df['排名']
  y = df['热度（单位：万）']
  plt.xlabel('排名')
  plt.ylabel('热度（单位：万）')
  plt.bar(x,y)
  plt.title('绘制排名与热度条形图')
  plt.show()
build()

#绘制散点图
def sandian():
  x = df['排名']
  y = df['热度（单位：万）']
  plt.xlabel('排名')
  plt.ylabel('热度（单位：万）')
  plt.scatter(x,y, color="red", label=u"热度分布数据", linewidths=2)
  plt.title('绘制排名与热度散点图')
  plt.legend()
  plt.show()
sandian()

#画折线图
def zhexian():
  x = df['排名']
  y = df['热度（单位：万）']
  plt.xlabel('排名')
  plt.ylabel('热度（单位：万）') 
  plt.plot(x,y)
  plt.scatter(x,y)
  plt.title("排名与热度折线图")
  plt.show()
zhexian()