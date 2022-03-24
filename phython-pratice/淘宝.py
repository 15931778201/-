from selenium import webdriver
import time
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import pyautogui

pyautogui.PAUSE=0.5  #设置每个动作0.2s太快来不及输入密码
options=webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-automation'])#切换到开发者模式
user_ag = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
options.add_argument('user-agent=%s' % user_ag)
options.add_experimental_option('w3c', True)

s = Service(r"/Users/wushaoxia/Downloads/chromedriver")
driver = webdriver.Chrome(service=s, options=options)
# driver.maximize_window()  #窗口最大化保证坐标正确
# 打开某宝登录页面
driver.get("https://login.taobao.com/")
# 定义js代码
script = "Object.defineProperty(navigator,'webdriver',{get: ()=> false,});"
# 执行js代码
driver.execute_script(script)
time.sleep(2)
driver.find_element(By.NAME,'fm-login-id').send_keys("19525920276")
time.sleep(2)
driver.find_element(By.NAME,'fm-login-password').send_keys("wsx841300")
time.sleep(2)
try:
    # 找到滑块
    slider = driver.find_element(By.XPATH,"//span[contains(@class, 'btn_slide')]")
    # 判断滑块是否可见
    if slider.is_displayed():
        # 点击并且不松开鼠标
        ActionChains(driver).click_and_hold(on_element=slider).perform()
        # 往右边移动258个位置
        ActionChains(driver).move_by_offset(xoffset=258, yoffset=0).perform()
        # 松开鼠标
        ActionChains(driver).pause(0.5).release().perform()
except:
    pass
time.sleep(2)
driver.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button').click()