/*
 * Created by dashan~changjiang on 2019/1/4 17:59.
 */


import JsonP from 'jsonp'

// import Axios from 'axios'
// import { Modal } from 'antd'

export default class axios {

	static jsonp(options){
		return new Promise((resolve, reject) => {
			JsonP(options.url,{param:'callback'},function (err,response) {
				
				console.log( response.status );
				
				
				if(response.status === 'success'){
					resolve(response);
				}else{
					reject(response.message)
				}
			})
		})
	}
	
}