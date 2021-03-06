/*
 * Created by dashan~changjiang on 2019/1/7 11:14.
 */
/*
 * Created by dashan~changjiang on 2019/1/7 11:14.
 */

import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;

class FormLogin extends React.Component{
	
	
	handleSubmit=()=>{
		
		let userInfo = this.props.form.getFieldsValue()
		this.props.form.validateFields((err,values)=>{
			
			if(!err){
				message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd} value is ${ JSON.stringify(values) }`)
			}else{
				message.error(`${userInfo.userName} 您的操作发生了错误 ${ JSON.stringify(userInfo) } value is ${ JSON.stringify(values) }`)
			}
			
		})
		
	}
	
	render(){
		
		const { getFieldDecorator } = this.props.form;
		
		return (
			<div>
				
				<Card title="登陆行内表单">
					<Form layout="inline">
						<FormItem>
							<Input placeholder ="请输入你的名字" />
						</FormItem>
						<FormItem>
							<Input placeholder ="请输入密码" />
						</FormItem>
						<FormItem>
							<Button type="primary">登陆</Button>
						</FormItem>
					</Form>
				</Card>
				
				<Card title="登录水平表单" style={ {marginTop:"10px"} }>
					<Form layout="horizontal" style={{width:300}} >
						
						<FormItem>
							{
								getFieldDecorator("userName",{
									initialValue:'',
									rules:[
										{
											required:true,
											message:'用户名不能为空'
										},
										{
											min:5,max:10,
											message:'长度不在范围内'
										},
										{
											pattern:new RegExp('^\\w+$','g'),
											message:'用户名必须为字母或者数字'
										}
									]
								})(
									<Input prefix={ <Icon type="user" />} type="primary" placeholder ="请输入你的名字" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator("userPwd",{
									initialValue:'',
									rules:[
										{
											required:true,
											message:'密码不能为空'
										},
										{
											min:5,max:16,
											message:'长度不在范围内'
										}
									]
								})(<Input prefix={ <Icon type="lock" />} type="password" placeholder ="请输入密码" />)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator("remember",{
										valuePropName:'checked',
										initialValue: false
									}
								)( <Checkbox>记住密码</Checkbox> )
							}
							<a href="baidu.com" style={{float:'right'}}>忘记密码</a>
						</FormItem>
						
						<FormItem>
							<Button type="primary" onClick={this.handleSubmit}>登录</Button>
						</FormItem>
						
					</Form>
				</Card>
				
				
				
			</div>
		)
	}
}


export default Form.create()(FormLogin);

