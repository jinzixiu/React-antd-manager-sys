/*
 * Created by dashan~changjiang on 2019/1/7 11:14.
 */

import React from "react";
import { Card,Form,Input,Button,message,Icon,Checkbox,Radio,InputNumber,Select,Switch,DatePicker ,TimePicker,Upload } from "antd";



import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const RangePicker = DatePicker.RangePicker;


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option
const TextArea = Input.TextArea;
const Dragger =  Upload.Dragger

class FormRegister extends React.Component{
	
	state={}
	
	
	
	handleSubmit = () =>{
		let userInfo = this.props.form.getFieldsValue();
		
		console.log( JSON.stringify(userInfo) );
		
		message.success( JSON.stringify(userInfo) )
		
	}
	
	
	
	onChange = (dates, dateStrings)=>{
		console.log('From: ', dates[0], ', to: ', dates[1]);
		console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
	}
	
	
	
	
	
	
	
	
	getBase64 = (img, callback)=>{
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}
	
	
	handleChange = ( info ) =>{
		
		
		if (info.file.status === 'uploading') {
			this.setState({ loading: true });
			return;
		}
		
		if (info.file.status === 'done') {
			
			// Get this url from response in real world.
			
			this.getBase64(info.file.originFileObj, (imageUrl) => {
				this.setState({
					userImg:imageUrl,
					loading: false,
				})
			});
			
		}
		
	}
	
	
	handleChange2222 = (info)=> {
		
		const status = info.file.status;
		
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		
		
		if (status === 'done') {
			
			
			message.success(`${info.file.name} file uploaded successfully.`);
			
			this.getBase64(info.file.originFileObj, (imageUrl) => {
				this.setState({
					userImg2:imageUrl,
					loading: false,
				})
			})
			
			
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
		
		
		
		
		
		
	}
	
	
	
	
	render(){
		
		
		const getFieldDecorator  = this.props.form.getFieldDecorator
		
		
		
		const formItemLayout = {
			colon:true,
			extra:"这里是extra的设置",
			// required:true,
			labelCol:{
				xs:24,
				sm:4
			},
			wrapperCol:{
				xs:24,
				sm:12
			}
		}
		
		
		const offsetLayout = {
			wrapperCol:{
				xs:24,
				sm:{
					span:12,
					offset:4
				}
			}
		}
		
		
		return (
			<LocaleProvider locale={zh_CN} >
				
				<Card title="登陆行内表单">
					<Form layout="horizontal">
						
						{/*用户名输入框*/}
						<FormItem label="用户名" {...formItemLayout} >
							{
								getFieldDecorator('userName', {
									initialValue: '',
									rules: [
										{
											required: true,
											message: '用户名不能为空'
										}
									]
								})(
									<Input placeholder="请输入用户名" />
								)
							}
						</FormItem>
						
						{/*密码输入框*/}
						<FormItem label="密码" {...formItemLayout} >
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
						
						{/*性别录入*/}
						<FormItem label="性别" {...formItemLayout}>
							{
								getFieldDecorator('sex', {
									initialValue: '1',
									rules: [
										{
											required: true
										}
									]
								})(<RadioGroup>
									<Radio value="1">男</Radio>
									<Radio value="2">女</Radio>
								</RadioGroup>)
							}
						</FormItem>
						
						{/* 年龄 录入 age*/}
						<FormItem label="年龄" {...formItemLayout}>
							{
								getFieldDecorator('age', {
									initialValue: '18',
									rules: [
										{
											required: true
										}
									]
								})( <InputNumber min={0} max={100} defaultValue={12} /> )
							}
						</FormItem>
						
						{/* 当前状态 state*/}
						<FormItem label="当前状态" {...formItemLayout}>
							{
								getFieldDecorator('state',{
									initialValue: ' ',
									rules: [
										{
											required: true
										}
									]
								})( <Select>
									<Option value="1">咸鱼一条</Option>
									<Option value="2">风华浪子</Option>
									<Option value="3">北大才子一枚</Option>
									<Option value="4">百度FE</Option>
									<Option value="5">创业者</Option>
								</Select> )
							}
						</FormItem>
						
						{/* 爱好 interest*/}
						<FormItem label="爱好" {...formItemLayout}>
							{
								getFieldDecorator('interest',{
									initialValue: ['2','5']
								})(<Select mode="multiple">
									<Option value="1">游泳</Option>
									<Option value="2">打篮球</Option>
									<Option value="3">踢足球</Option>
									<Option value="4">跑步</Option>
									<Option value="5">爬山</Option>
									<Option value="6">骑行</Option>
									<Option value="7">桌球</Option>
									<Option value="8">麦霸</Option>
								</Select>)
							}
						</FormItem>
						
						{/* 是否已婚 isMarried*/}
						<FormItem label="是否已婚" {...formItemLayout}>
							{
								getFieldDecorator('isMarried', {
									valuePropName:'checked',
									initialValue: true
								})(
									<Switch/>
								)
							}
						</FormItem>
						
						{/* 日期范围 birthday */}
						<FormItem label="生日" {...formItemLayout}>
							{
								getFieldDecorator('birthday',{
								
								})(
									<RangePicker
										ranges={{
											'今天': [moment(), moment()],
											'这个星期': [moment().startOf('week'), moment().endOf('week')],
											'这个月': [moment().startOf('month'), moment().endOf('month')]
										}}
										format="YYYY-MM-DD"
										onChange={this.onChange}
									/>
								)
							}
						</FormItem>
						
						
						{/* 地址 address */}
						<FormItem label="联系地址" {...formItemLayout}>
							{
								getFieldDecorator('address',{
									initialValue:'北京市海淀区奥林匹克公园'
								})(
									<TextArea
										autosize={ { minRows:4,maxRows:6 } }
									/>
								)
							}
						</FormItem>
						
						
						{/* 时间 time*/}
						<FormItem label="早起时间" {...formItemLayout}>
							{
								getFieldDecorator('time',{
									initialValue: moment('00:00:00', 'HH:mm:ss')
								})(
									<TimePicker/>
								)
							}
						</FormItem>
						
						
						{/* 头像  userImg1 */}
						<FormItem label="头像" {...formItemLayout}>
							{
								getFieldDecorator('userImg1',{
									initialValue: ""
								})(
									<Upload
										listType="picture-card"
										showUploadList={false}
										action="//jsonplaceholder.typicode.com/posts/"
										onChange={this.handleChange}
									>
										{this.state.userImg?<img alt="" src={this.state.userImg}/>:<Icon type="plus"/>}
									</Upload>
								)
							}
						</FormItem>
						
						{/* 头像  userImg2 */}
						<FormItem label="头像" {...formItemLayout}>
							{
								getFieldDecorator('userImg2',{
									initialValue: ""
								})(
									<Dragger
										
										name='file'
										listType="picture-card"
										showUploadList={false}
										multiple = {true}
										action="//jsonplaceholder.typicode.com/posts/"
										onChange={this.handleChange2222}
									>
										
												<p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
												<p className="ant-upload-text">Click or drag file to this area to upload</p>
												<p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
										
										{this.state.userImg2?<img alt="" src={this.state.userImg2}/>:<Icon type="plus"/>}
									</Dragger>
								)
							}
							
						</FormItem>
						
						
						{/* 是否同意协议 userIfAgree */}
						<FormItem {...offsetLayout}>
							{
								getFieldDecorator('userIfAgree',{
									initialValue: true
								})(
									<Checkbox  checked={true} disabled={true}> 我已阅读过<a href="baidu.com">慕课协议</a> </Checkbox>
								)
							}
						</FormItem>
						
						{/* 爱好 */}
						<FormItem {...offsetLayout}>
							<Button type="primary" onClick={this.handleSubmit}>注册</Button>
						</FormItem>
						
					</Form>
					
				</Card>
			</LocaleProvider>
		)
	}
}

export default Form.create()(FormRegister);



