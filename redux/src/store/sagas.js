import { takeEvery } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    console.log('jspang')
}

export default mySaga;