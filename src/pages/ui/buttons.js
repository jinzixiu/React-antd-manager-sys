

import React from 'react'

import {Card,Button,Radio} from 'antd'

import './ui.less'


export default class Buttons extends React.Component{
	
	state={
		loading:true,
		size:"large"
	}
	
	handleCloseLoading=(flag)=>{
		this.setState({
			loading:flag
		})
		
	}
	
	handleChange=(e) =>{
		this.setState({
			size:e.target.value
		})
	}
	
    render(){
        return(
            <div>
							<Card title="基础按钮" className="card-wrap">
								<Button type="primary">Imooc</Button>
								<Button >Imooc</Button>
								<Button type="dashed">Imooc</Button>
								<Button type="danger">Imooc</Button>
								<Button disabled>Imooc</Button>
							</Card>
							
							<Card title="图形按钮" className="card-wrap">
								<Button icon="plus">创建</Button>
								<Button icon="edit">编辑</Button>
								<Button icon="edit">删除</Button>
								<Button shape="circle" icon="search"></Button>
								<Button type="primary" icon="search">搜索</Button>
								<Button type="primary" icon="download">下载</Button>
							</Card>
	
							
							<Card title="Loading按钮" className="card-wrap">
								<Button type="primary" loading={this.state.loading}>加载....</Button>
								<Button shape="circle" type="primary" loading={this.state.loading}></Button>
								<Button loading={this.state.loading}>点击加载....</Button>
								<Button shape="circle" loading={this.state.loading}></Button>
								<Button type="primary" onClick={ ()=>{ this.handleCloseLoading(false) } }> 关闭</Button>
								<Button type="primary" onClick={ ()=>{ this.handleCloseLoading(true) } }> 打开</Button>
							</Card>
	
	
							<Card title="按钮组" style={{marginBottom:10}}>
								<Button.Group>
									<Button type="primary" icon="left">返回</Button>
									<Button type="primary" icon="right">前进</Button>
								</Button.Group>
							</Card>
	
							<Card title="按钮尺寸" className="card-wrap">
								
								<Radio.Group value={this.state.size}   onChange={this.handleChange}>
									
									<Radio value="small">小</Radio>
									<Radio value="default">中</Radio>
									<Radio value="large">大</Radio>
									
									<Button size={this.state.size} icon="search">圊圊</Button>
									<Button size={this.state.size} icon="search">圊圊</Button>
									<Button size={this.state.size} icon="search">圊圊</Button>
									
									<Button type="primary" size={this.state.size}>Imooc</Button>
									<Button size={this.state.size}>Imooc</Button>
									<Button type="dashed" size={this.state.size}>Imooc</Button>
									<Button type="danger" size={this.state.size}>Imooc</Button>
									
								</Radio.Group>
								
							</Card>
							
							
            </div>
        )
    }


}