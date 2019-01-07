/*
 * Created by dashan~changjiang on 2019/1/4 11:21.
 */


import React from 'react'


export default class Child extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			count:0
		}
	}
	
	componentWillMount(){
		console.log(" will mount ");
	}
	
	componentDidMount(){
		console.log(" did mount ");
	}
	
	componentWillReceiveProps(props){
		console.log(" receive Props is "+JSON.stringify(props) );
	}
	
	shouldComponentUpdate(){
		return true
	}
	
	componentWillUpdate(){
		console.log("WillUpdate");
	}
	
	componentDidUpdate(){
		console.log("DidUpdate");
	}
	
	
	render() {
		return (
			<div style={   { background:"#eee" }  }>
				<p>{ this.props.name }</p>
			</div>
		);
	}
	
	
}