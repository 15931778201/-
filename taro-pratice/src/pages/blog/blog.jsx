import {View , Text, Button, Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useState, useEffect } from 'react'
import {xiedajiao,liuying} from '../../tools'
import logo from '../../assets/logo.jpg'
function Blog(){
  const [blogTitle, setBlogTitle] = useState('Windy Blog')
  const [introduce, setIntroduce] = useState('111111')
  const [articleList,setArticleList] = useState([])

  const gotoIndex = () => {
    Taro.navigateTo({url: 'pages/index/index?blogTitle='+blogTitle+'&introduce='+introduce})
  }
  const testHandler = () => {
    Taro.request({url: 'https://www.showdoc.cc/server/index.php?s=/mock-path/1749325883876022&path=/getArticleList'}).then(res => {
      setArticleList(res.data)
      console.log(res.data);
    })
  }
  useEffect(() => {
    xiedajiao()
    liuying()
  })
  return (
      <View>
          <Text>Blog Page</Text>
          <Button onClick={gotoIndex}>我要去Index页面</Button>
          <Button onClick={testHandler}>显示文章</Button>
          {
              articleList.map((item,index)=>{
                  return (<View key={index}>- {item.title} </View>)
              })
          }          
          <View>
            <Image src={logo} width="100px" height="100px"></Image>
          </View>
      </View>
  )
}
export default Blog