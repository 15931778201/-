import requests
import json
import os
from pathlib import Path

def run():
    base_url = "https://pvp.qq.com/web201605/js/herolist.json"
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    }
    base_res = requests.get(base_url,headers=headers)
    base_res.encoding='utf-8'
    json_data = json.loads(base_res.text)
    for i in json_data:
        name = i['cname']
        ename = i['ename']
        title = i['title']
        skin_name = i.get('skin_name',title)
        skin_list = skin_name.split('|')
        for j in range(len(skin_list)):
            img_name = skin_list[j]
            print(f"正在下载:{name}>{img_name}")
            img = f"http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{ename}/{ename}-bigskin-{j+1}.jpg"
            file_ = f"photo/王者荣耀/{name}"
            file_path = Path(file_)
            if not file_path.is_dir():
                os.mkdir(file_)
            img_res = requests.get(img,headers=headers)
            with open(f"photo/王者荣耀/{name}/{img_name}.jpg",'wb') as f:
                f.write(img_res.content)
            print(f"{name}>{img_name} 下载完成~")

if __name__ == "__main__":
    run()
