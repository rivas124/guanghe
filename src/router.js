// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import App from './pages/homePage/App'
// import Member from './pages/memberHome/member'

// export default function MyRouter() {
//     <Router>
//         <Switch>
//             <Route exact path='/' component={App}></Route>
//             <Route path='/memeberPage' component={Member}></Route>
//         </Switch>
//     </Router>
// }

import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './pages/homePage/App'
import Member from './pages/memberHome/member'

export default class MyRoute extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/member" component={Member}/>
            </Router>
        )
    }
}