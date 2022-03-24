import { createStore, applyMiddleware, compose } from 'redux'  // 引入createStore方法
// import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './sagas' 

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer) // 创建数据存储仓库
sagaMiddleware.run(mySagas)

export default store                 //暴露出去

// 三个React新手最容易范的错误。
// store必须是唯一的，多个store是坚决不允许，只能有一个store空间
// 只有store能改变自己的内容，Reducer不能改变
// Reducer必须是纯函数