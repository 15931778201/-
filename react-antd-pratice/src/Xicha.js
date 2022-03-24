import React,{Component,Fragment } from 'react'
import XichaItem from './XichaItem'
import Saler from './Saler'
import axios from 'axios'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

class Xicha extends Component{
    //js的构造函数，由于其他任何函数执行
    constructor(props){
      super(props) //调用父类的构造函数，固定写法
      this.state={
          inputValue:'柠檬红茶' , // input中的值
          list:['茉莉花茶', '蜜桃乌龙']    //服务列表
      }
    }
    render(){
        return  (
            <Fragment>
              {/* flex */}
               <div>
                   <label htmlFor="drink">加入服务：</label>
                   <input id="drink" value={this.state.inputValue} onChange={this.inputChange.bind(this)} ref={(input) => {this.input=input}} /> 
                   <button onClick={this.addList.bind(this)}> 增加饮品 </button>
               </div>
               <ul ref={(ul)=>{this.ul=ul}}>
                 <TransitionGroup>
                    {
                      this.state.list.map((item, index)=>{
                        return (
                          <CSSTransition
                            timeout={1000}
                            classNames='boss-text'
                            unmountOnExit
                            appear={true}
                            key={index+item}  
                          >
                            <XichaItem
                              key={index+item} 
                              index={index} 
                              content={item}
                              
                              deleteItem={this.deleteItem.bind(this)}
                            />
                          </CSSTransition>
                        )
                      })
                    }
                 </TransitionGroup>
               </ul> 
               <Saler></Saler>
            </Fragment>
        )
    }
    componentDidMount(){
      axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res) => {
          console.log('axios success' + JSON.stringify(res))
        })
        .catch((error) => {
          console.log('axios fail' + error)
        })
    }
    // 输入框传值
    inputChange(e){
      this.setState({inputValue:this.input.value})
    }
    // 列表-增加
    addList(){
      this.setState({
        list: [...this.state.list,this.state.inputValue],
        inputValue: ''
      }, () => {
        console.log(this.ul.querySelectorAll('div').length)
      })
    }
    // 列表-删除
    deleteItem(index){
      let list = this.state.list
      list.splice(index, 1)
      this.setState({list: list})
    }
}
export default Xicha 