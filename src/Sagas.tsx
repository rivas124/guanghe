import {call, put, takeEvery} from 'redux-saga/effects'
// 模拟登陆接口
const UserService = {
    login(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(name === '小明') {
                    resolve({name: '小明'})
                } else {
                    reject({name: '用户名或密码错误'})
                }
            }, 1000)
        })
    }
}
function* loginHandle(action) { // generator将异步操作改为同步
    try{
        const res = yield call(UserService.login, action.name) //call执行UserService.login，并且将action.name当参数传递过去
        yield put({type: 'requestSuccess', res}) // put和dispatch类似，执行reducer
    } catch (error) {
        yield put({type: 'requestFailure', error})
    }
}

function* Sagas() {
    yield takeEvery('login', loginHandle) // 类似于将函数重命名，调用login则会执行loginHandle，并且将login得参数传递过去
}
export  default Sagas