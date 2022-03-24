import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button } from 'antd'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div style={{margin:'10px'}}>
        <div>
          <Input placeholder='Write something' style={{ width:'250px', marginRight:'10px'}}/>
          <Button type="primary">增加</Button>
        </div>
      </div>  
    );
  }
}
 
export default TodoList;