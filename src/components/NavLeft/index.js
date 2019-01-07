/*
 * Created by dashan~changjiang on 2019/1/4 14:15.
 */

import React from 'react'
import { Menu } from 'antd';
// import { Icon } from 'antd';

import MenuConfig from '../../config/menuConfig'


import {NavLink} from 'react-router-dom'


import './index.less'




const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


export default class NavLeft extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state={
		
		}
		
	}
	
	
	
	componentWillMount(){
		const MenuTreeNode = this.renderMenu(MenuConfig)
		this.setState({
			MenuTreeNode
		})
		
	}
	
	
	// 菜单渲染
	renderMenu=(data)=>{
		return data.map( (item)=>{
				
				if(item.children){
					return (
						<SubMenu key={item.key} title={item.title} >
							{this.renderMenu(item.children)}
						</SubMenu>
					)
				}
				return (<Menu.Item key={item.key} title={item.title}>
                    <NavLink to={"/admin"+item.key}></NavLink>{item.title}
				</Menu.Item>)
		})
	}
	
	
	
	render(){
		return(
			<div>
				{/*<NavLink to="/home" onClick={this.homeHandleClick}>*/}
					<div className="logo">
						<img src="/assets/logo-ant.svg" alt=""/>
						<h1>测试测试</h1>
					</div>
				{/*</NavLink>*/}
				
			<Menu onClick={null} style={{ width: 256 }}  mode="vertical" theme="dark">
				{this.state.MenuTreeNode}
			</Menu>
			
			</div>
		)
	}
	
	
	
	
}