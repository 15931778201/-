import { View, Text } from '@tarojs/components'
import './index.scss'
import React, { useState, useEffect } from 'react'
import Child from './child.jsx'
import './index.scss'
import Taro, {getCurrentInstance}  from '@tarojs/taro'

function Index() {
  const [userName ,setUserName] = useState('Windy')
  const [blogTitle,setBlogTitle] = useState('')
  const [introduce,setIntroduce]=useState('')
  useEffect(()=>{
    setBlogTitle(getCurrentInstance().router.params.blogTitle)
    setIntroduce(getCurrentInstance().router.params.introduce)
  },[])  
  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
      <View>{blogTitle}</View>
      <View>{introduce}</View>
    </View>
  )
}
export default Index
// class Index extends Component {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }
