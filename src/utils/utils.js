/*
 * Created by dashan~changjiang on 2019/1/4 17:18.
 */


export default {

	formateDate(time){
		if(!time) return '';
		let date = new Date(time);
		return `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
	}
}