import requests, csv, re
from lxml import etree

#设置浏览器代理,它是一个字典
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

# 创建文件夹并打开
fp = open("./豆瓣top250.csv", 'a', newline='', encoding = 'utf-8-sig')
writer = csv.writer(fp) #我要写入
# 写入内容
writer.writerow(('排名', '名称', '链接', '星级', '评分', '评价人数'))

for page in range(0, 226, 25): #226
    print ("正在获取第%s页"%page)
    url = 'https://movie.douban.com/top250?start=%s&filter='%page
    
    #请求源代码，向服务器发出请求,200代表成功，回退对其，Ctrl+]
    reponse = requests.get(url = url, headers = headers).text
    # 快捷键运行，Ctrl+Enter
    html_etree = etree.HTML(reponse) # 看成一个筛子，树状
    # 过滤
    li = html_etree.xpath('//*[@id="content"]/div/div[1]/ol/li')
    for item in li:
        #排名
        rank = item.xpath('./div/div[1]/em/text()')[0]
        #电影名称
        name = item.xpath('./div/div[2]/div[1]/a/span[1]/text()')[0]
        #链接
        dy_url = item.xpath('./div/div[2]/div[1]/a/@href')[0]
        #评分
        rating = item.xpath('./div/div[2]/div[2]/div/span[1]/@class')[0]
        rating = re.findall('rating(.*?)-t', rating)[0]
        if len(rating) == 2:
            star = int(rating) / 10  #int()转化为数字
        else:
            star = rating
    #     注释ctrl+?

        rating_num = item.xpath('./div/div[2]/div[2]/div/span[2]/text()')[0]
        content = item.xpath('./div/div[2]/div[2]/div/span[4]/text()')[0]
        content = re.sub(r'\D', "", content)
#         print (rank, name, dy_url, star, rating_num, content)
        # 写入内容
        writer.writerow((rank, name, dy_url, star, rating_num, content))
fp.close()

