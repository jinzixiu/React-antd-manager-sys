

import React from 'react'

import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './home'
import Topics from "../router01/topic";

import Main from "../router03/main";
import About from "../router01/about";

import Info from "../router03/info";
import Nomatch from "../router03/nomatch";

export default class IRouter extends React.Component{

    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={ ()=>{
                            return(
                            <Main>
                                <Route exact={true} path="/main/:value" component={Info} ></Route>
                            </Main>
                            )
                        } } ></Route>

                        <Route exact={true} path="/about" component={About} ></Route>
                        <Route exact={true} path="/topics" component={Topics} ></Route>
                        <Route  component={Nomatch} ></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }

}