

import React from 'react'

export default class About extends React.Component{

    render(){
        return(
            <div>
                this is info
                这里是测试路由功能,动态路由的值是：
                {this.props.match.params.value}
            </div>
        )
    }


}