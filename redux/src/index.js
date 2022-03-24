import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './TodoList'
// import TodoList1 from './TodoList'
// import { Provider } from 'react-redux'
// import store from './store'
import AppRouter from './AppRouter'

//声明一个App组件，然后这个组件用Provider进行包裹。
// const App = (
//   <Provider store={store}>
//     <TodoList />
//     <TodoList1 />
//   </Provider>
// )
ReactDOM.render(<AppRouter/>, document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals