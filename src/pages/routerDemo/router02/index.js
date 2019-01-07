

import React from 'react'

import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './home'
import Topics from "../router01/topic";
import Main from "../router02/main";

import About from "../router01/about";
import About2 from "../router02/about2";

export default class IRouter extends React.Component{

    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={ ()=>{
                            return(
                            <Main>
                                <Route path="/main/aaa" component={About2} ></Route>
                            </Main>
                            )
                        } } ></Route>

                        <Route path="/about" component={About} ></Route>
                        <Route path="/topics" component={Topics} ></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }

}