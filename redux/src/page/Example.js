// import React, { Component } from 'react';
import React, { useState } from 'react';

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
function Example(){
  const [ count , setCount ] = useState(0);
  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={()=>{setCount(count+1)}}>click me</button>
      </div>
  )
}

export default Example;
// useState是react自带的一个hook函数，它的作用是用来声明状态变量。分别是声明、读取、使用（修改）