

import React from 'react'
import {Link} from 'react-router-dom'


export default class Main extends React.Component{

    render(){
        return(
            <div>
                <li>
                    sdfasfdasdfasfd
                    <Link to="/main/aaa">嵌套路由</Link></li>

                <br/>

                {this.props.children}
            </div>
        )
    }


}