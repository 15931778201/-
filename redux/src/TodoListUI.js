import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUI = (props)=> {
  return ( 
    <div style={{margin:'10px'}}>
      <div>
        <Input 
            style={{ width:'250px', marginRight:'10px'}}
            onChange={props.changeInputValue}
            value={props.inputValue} 
        />
        <Button type="primary" onClick={props.clickBtn}>增加</Button>
      </div>
      <div style={{margin:'10px', width:'300px'}}>
        <div>
          <List
              bordered
              dataSource={props.list}
              renderItem={(item, index)=>(<List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>)}
          />   
        </div>
      </div>  
    </div>  
  )
}
 
export default TodoListUI;

// 把UI组件改成无状态组件可以提高程序性能，具体来看一下如何编写。

// 首先我们不在需要引入React中的{ Component }，删除就好。
// 然后些一个TodoListUI函数,里边只返回JSX的部分就好，这步可以复制。
// 函数传递一个props参数，之后修改里边的所有props，去掉this。