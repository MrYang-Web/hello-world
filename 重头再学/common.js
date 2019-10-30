//1.封装一个1-num的随机整数函数
function randomInt (num) {
	var a = parseInt(Math.random()*num+1);
	return a;
}

//2.【任意位数随机验证码】
//@param {number} n 【随机验证码的位数】
//@return {String}	【返回的验证码】
//输入n位就生成n位,执行函数会返回一个n位字符串，这里与案例中有区别。
function createCode (n) {
	var myCode = '';
	for (var i=0;i<n;i++) {
				myCode += parseInt(Math.random()*10);
	}
	return myCode;
}




//3.【生成一个随机颜色]
//@return {String} [rgb(random,random,random)]  //返回随机颜色;
function randomColor () {
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	var a = Math.random();
	return 'rgba('+r+','+g+','+b+','+a+')';
}

//任意范围内的随机整数
//@param {number} mix [最小值]
//@param {number} max [最大值]
//@return {number}    [min-max间的随机整数]
function randomNumber (min,max) {
	/* 
	 Math.random();  res    //0-1不包括1的数
	 0               0
	 1				max
	 */
	
	var res = parseInt(Math.random()*(max-min+1))+min;  //如果Math.random()=0,那么前面的结果为0，加上最小值，结果就是最小值
											  //如果Math.random()=1,那么前面的结果就为max-min的差值，最后结果就是max
											  //这样，最后的结果就是在min--->max之间了。因为方法不包括1，所以需要+1；
	return res;
}