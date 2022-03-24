#coding=utf-8
from email import header
from importlib.resources import contents
import requests
from bs4 import BeautifulSoup
headers ={
  'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Cookie':'__cfduid=dcb472bad94316522ad55151de6879acc1479632720; locale=en; _ga=GA1.2.1575445427.1479632759; _gat=1; _hjIncludedInSample=1',
  'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
}
url_path = 'https://www.pexels.com/search/'
cnt = input('请输入你要下载的图片: ')
url = url_path+cnt+'/'
wb_data = requests.get(url)
soup = BeautifulSoup(wb_data.text, 'lxml')
imgs = soup.select('a > img')
with open('pexel.txt', 'w') as f:
    f.write(wb_data.text)

list = []
for img in imgs:
  photo = img.get('src')
  list.append(photo)
  path = 'photo/pexels'
  i = 1
  for item in list:
    print(item)
    if item==None:
      pass
    elif '?' in item:
      data=requests.get(item)
      fp=open(path+cnt+str(i)+'.jpeg', 'wb')
      fp.write(data.content)
      fp.close()
      i = i + 1
    else:
      data=requests.get(item)
      fp=open(path+item[-10:], 'wb')
      fp.write(data.content)
      fp.close()

