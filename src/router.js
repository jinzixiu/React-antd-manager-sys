
import React from 'react'

import {HashRouter, Route,Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './Admin'

import Nomatch from './pages/nomatch'

import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'


import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'


import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'


export default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>

                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loading}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={FormRegister} />
                                <Route path="/admin/table/basic" component={BasicTable} />
                                <Route path="/admin/table/high" component={HighTable} />
                                <Route component={Nomatch}></Route>
                            </Switch>

                        </Admin>
                    }>
                    </Route>
                    <Route path="/order/detail" component={Login}></Route>


                </App>
            </HashRouter>
        )
    }

}