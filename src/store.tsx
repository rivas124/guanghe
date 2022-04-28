import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga' // 引入createSagaMiddleware
import Sagas from './Sagas'
const initalLogin = {
    isLogin: false, // 是否登陆
    loading: false, // 登陆状态
    name: '',
    error: ''
}
const sagaMiddleware = createSagaMiddleware() // 创建中间件
function loginReducer(state = {...initalLogin}, action) {
    switch (action.type) {
        case 'requestLogin':
            return {...state, loading: true}
        case 'requestSuccess':
            return {...state,isLogin: true, loading: false}
        case 'requestFailure':
            return {...state,isLogin: false, loading: false, error: action.error.name}
        default:
            return  state
    }
}
const store = createStore(
    combineReducers({user: loginReducer}),
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware) // 将中间件放入applyMiddleware
)
sagaMiddleware.run(Sagas) // 此处必须执行run()
export default store