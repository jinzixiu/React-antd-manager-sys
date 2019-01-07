

import React from 'react'

import {HashRouter,Link,Route,Switch} from 'react-router-dom'


import Main from './main'
import About from './about'
import Topics from './topic'

export default class Home extends React.Component{

    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route exact={true} path="/" component={Main} ></Route>
                        <Route path="/about" component={About} ></Route>
                        <Route path="/topics" component={Topics} ></Route>
                    </Switch>

                </div>
            </HashRouter>
        )
    }

}