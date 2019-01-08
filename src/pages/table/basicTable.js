/*
 * Created by dashan~changjiang on 2019/1/8 18:52.
 */

import React from 'react'
import {Card,Table} from 'antd'

export default class BasicTable extends React.Component{
	
	
	state={dataSource:2}
	
	render(){
		
		const columns = [
			{
				title:'id',
				key:'id',
				dataIndex:'id'
			},
			{
				title: '用户名',
				key: 'userName',
				dataIndex: 'userName'
			},
			{
				title: '性别',
				key: 'sex',
				dataIndex: 'sex',
				render(sex){
					return sex ===1 ?'男':'女'
				}
			},
			{
				title: '状态',
				key: 'state',
				dataIndex: 'state',
				render(state){
					let config  = {
						'1':'咸鱼一条',
						'2':'风华浪子',
						'3':'北大才子',
						'4':'百度FE',
						'5':'创业者'
					}
					return config[state];
				}
			},
			{
				title: '爱好',
				key: 'interest',
				dataIndex: 'interest',
				render(abc) {
					let config = {
						'1': '游泳',
						'2': '打篮球',
						'3': '踢足球',
						'4': '跑步',
						'5': '爬山',
						'6': '骑行',
						'7': '桌球',
						'8': '麦霸'
					}
					return config[abc];
				}
			},
			{
				title: '生日',
				key: 'birthday',
				dataIndex: 'birthday'
			},
			{
				title: '地址',
				key: 'address',
				dataIndex: 'address'
			},
			{
				title: '早起时间',
				key: 'time',
				dataIndex: 'time'
			}
		]
		
		return(
			<div>
				<Card title="基础表格">
					{/*<Table*/}
						{/*bordered*/}
						{/*columns={columns}*/}
						{/*dataSource={this.state.dataSource}*/}
						{/*pagination={false}*/}
					{/*/>*/}
				</Card>
			</div>
		)
		
		
	}
	
}