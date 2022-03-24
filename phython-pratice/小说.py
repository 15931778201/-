import  urllib.request
from bs4 import BeautifulSoup
import re

def find():
    url= "http://book.zongheng.com/showchapter/672340.html"
    header={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"}
    request= urllib.request.Request(url=url,headers=header)
    respond =urllib.request.urlopen(request)
    content= respond.read().decode()
    soup =BeautifulSoup(content,"html.parser")
    div= soup.find('div',class_="volume-list")
    findLink= re.compile('<a href="(.*?)"')
    link =re.findall(findLink,str(div))
    findText=re.compile('title="(.*?)">')
    text =re.findall(findText,str(div))
    return  link,text


def write(all_link,text_name):

    header={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"}

    for i in range(len(all_link)):
        url =all_link[i]
        request = urllib.request.Request(url=url, headers=header)
        respond = urllib.request.urlopen(request)
        content = respond.read().decode()
        soup = BeautifulSoup(content, "html.parser")
        div = soup.find('div', class_="content")
        name_s= (str(text_name[i]).strip()[0:6]+'.txt').replace(' ','')
        print(name_s,end='')
        file= open('./a/'+name_s,'a')
        file.write(div.text)
        file.close()
        print("写入完成")
        file.close()


if __name__ == '__main__':
    link,text=find()
    print(link)

    write(link,text)


