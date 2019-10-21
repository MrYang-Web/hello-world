//1.封装一个1-num的随机整数函数
function randomInt (num) {
	var a = parseInt(Math.random()*num+1);
	return a;
}

//2.封装生成验证码函数
//输入n位就生成n位,执行函数会返回一个n位字符串，这里与案例中有区别。
function createCode (n) {
		var myCode = '';
		for (var i=0;i<n;i++) {
					myCode += parseInt(Math.random()*10);
		}
		return myCode;
}