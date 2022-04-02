import { View, Text } from '@tarojs/components'
function Child(props){
  return ( 
    <View><Text>我是子组件，父组件向我传值为:{props.userName}</Text></View>
  )
}
export default Child