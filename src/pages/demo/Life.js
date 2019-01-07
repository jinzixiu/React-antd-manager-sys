/*
 * Created by dashan~changjiang on 2019/1/4 10:46.
 */

import React from 'react'
import Child from './Child'

import {Button} from 'antd'




export default class Life extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state={
			count:0
		}
		
	}
	
	
	addcount = ()=>{
		this.setState({
			count:this.state.count+1
		})
	}
	
	
	addcount2(){
		this.setState({
			count:this.state.count+1
		})
	}
	
	
	render() {
		return (
			<div  style={ {padding:30} }>
				
				<p>生命周期介绍</p>
				<Button onClick={ ()=>{ this.addcount() } }> 点击 </Button>
				<button onClick={ ()=>{ this.addcount2() } }> 点击 </button>
				<button onClick={ ()=>{ this.addcount() } }> 点击2 </button>
				<p>{ this.state.count }</p>
				
				<Child name={this.state.count}/>
				
			</div>
		);
	}
	
	// function addcount () {
	// 	this.setState({
	// 		count:this.state.count+1
	// 	})
	// }
	
	
}
