import requests
import time
import pymongo

client = pymongo.MongoClient('localhost',27017) #建立连接

book_qunar = client['qunar'] #建立名为“qunar” 的数据库

sheet_qunar = book_qunar['sheet_qunar'] #在数据库中创建新表 “sheet_qunar”

url = 'https://touch.dujia.qunar.com/depCities.qunar' #出发点列表的链接
str = requests.get(url)
dep_dic = str.json()
for dep_item in dep_dic["data"]:
    for dep in dep_dic["data"][dep_item]:
        print(dep)
        url = 'https://touch.dujia.qunar.com/golfz/sight/arriveRecommend?dep={}&exclude=&extensionImg=255,175'.format(dep)
        time.sleep(1)
        str = requests.get(url)
        arrive_dic = str.json()
        arrive_city = [] #存放当前出发点能到的所有目的地
        for arr_item in arrive_dic["data"]:
            for arr_item_1 in arr_item["subModules"]:
                for query in arr_item_1["items"]:
                    if query["query"] not in arrive_city: #使得当前出发点对应的目的地不重复
                        arrive_city.append(query["query"])

        for item in arrive_city:
            url = 'https://touch.dujia.qunar.com/' \
                  'list?modules=list%2CbookingInfo%2' \
                  'CactivityDetail&dep={}&query={}&' \
                  'dappDealTrace=true&mobFunction=%E' \
                  '6%89%A9%E5%B1%95%E8%87%AA%E7%94%B1' \
                  '%E8%A1%8C&cfrom=zyx&it=dujia_hy_dest' \
                  'ination&date=&needNoResult=true&origina' \
                  'lquery={}&width=480&height' \
                  '=320&quality=90&limit=0,' \
                  '20&includeAD=true&qsact=search&' \
                  'filterTagPlatform=mobile_touch'.format(dep,item,item)

            time.sleep(1)
            str = requests.get(url)

            routeCount = int(str.json()["data"]["limit"]["routeCount"]) #取出产品数

            for limit in range(0,routeCount,20): #获取产品信息
                url = 'https://touch.dujia.qunar.com/' \
                  'list?modules=list%2CbookingInfo%2' \
                  'CactivityDetail&dep={}&query={}&' \
                  'dappDealTrace=true&mobFunction=%E' \
                  '6%89%A9%E5%B1%95%E8%87%AA%E7%94%B1' \
                  '%E8%A1%8C&cfrom=zyx&it=dujia_hy_dest' \
                  'ination&date=&needNoResult=true&origina' \
                  'lquery={}&width=480&height' \
                  '=320&quality=90&limit={},' \
                  '20&includeAD=true&qsact=search&' \
                  'filterTagPlatform=mobile_touch'.format(dep,item,item,limit)

                time.sleep(1)

                str = requests.get(url)

                #产品的数据类型
                result = {
                    'date': time.strftime('%Y-%m-%d',time.localtime(time.time())),
                    'dep': dep,
                    'arrive': item,
                    'limit': limit,
                    'result': str.json()
                }

                sheet_qunar.insert_one(result)
