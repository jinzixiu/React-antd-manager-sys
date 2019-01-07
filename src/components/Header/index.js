
/*
 * Created by dashan~changjiang on 2019/1/4 14:16.
 */


import React from 'react'
import {Row ,Col} from 'antd'

import './index.less'
import Utiles from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state={
			username:"叫我圊圊小哥"
		}
		
	}
	
	componentWillMount(){

		this.setState({
			userName:'叫我圊圊小哥22'
		})
		setInterval(()=>{
			let sysTime = Utiles.formateDate(new Date().getTime());
			this.setState({
				sysTime
			})
		},1000)
		this.getWeatherAPIData();
	}
	
	
	
	getWeatherAPIData = ()=>{
		let city = '北京';
		axios.jsonp({
			url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
		}).then((res)=>{
			
			
			if(res.status === "success"){
				let data = res.results[0].weather_data[0];
				this.setState({
					dayPictureUrl:data.dayPictureUrl,
					weather:data.weather
				})
			}
			
		})
	}
	
	
	render(){
		return(
			<div className="header">
				
				{/*第一行的名字和登出*/}
				<Row className="header-top">
					<Col span={24}>
						<span>{this.state.username}</span>
						<a href="baidu.com">退出</a>
					</Col>
				</Row>
				
				{/*第二行的 面包屑 和 天气*/}
				<Row className="breadcrumb" >
					<Col span={4} className="breadcrumb-title">
						首页
					</Col>
					<Col span={20} className="weather">
						<span className="date">{this.state.sysTime}</span>
						<span className="weather-img">
								<img src={this.state.dayPictureUrl} alt="" />
						</span>
						<span className="weather-detail">{this.state.weather}</span>
					</Col>
				</Row>
				
			</div>
		)
	}
}

