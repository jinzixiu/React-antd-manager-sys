

import React from 'react'
import {Link} from 'react-router-dom'


export default class Main extends React.Component{

    render(){
        return(
            <div>

                this is main page
                <ul>
                    <li>第一行<Link to="/main/test_id">嵌套路由111</Link></li>
                    <li>第二行<Link to="/main/34564">嵌套路由2222</Link></li>
                </ul>

                <br/>

                {this.props.children}
            </div>
        )
    }


}