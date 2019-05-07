//获取样式
function getStyle(obj, name) {
  //兼容IE8
    if(window.getComputedStyle){
      return  getComputedStyle(obj, null)[name];

    }else {
      return currentStyle[name];
    }
};

//动画函数
function move (obj , attr , target , speed , callback){
	clearInterval(obj.timer);
	var current =  parseInt(getStyle(obj , attr));
	if (current > target) {
		speed = - speed;
	};
	obj.timer =	setInterval(function(){
	var oldVlue =  parseInt(getStyle(obj , attr));
	var newValue = oldVlue + speed;
	if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
		newValue = target;
	}
	obj.style[attr] = newValue+"px";
	if (newValue == target) {
	clearInterval(obj.timer);
	callback && callback(); 
	}
	},30);

}

//定义一个函数,用来向一个元素中添加指定的class属性值
function addClass(obj , classN){
	// 参数: obj  要添加class的元素,
	// classN 要添加的class值,
	
	//检查obj中是否含有cn
	if (!hasClass(obj , classN)) {
		obj.className += "" + classN; 
	};
}

//判断一个元素中是否含有指定的class属性值
//如果有则返回ture
//如果没有则返回false
function hasClass(obj , classN){
	//判断obj中有没有cn class
	//创建一个正则表达式
	// var reg = /\bb2\b/;
	var reg = new RegExp("\\b"+classN+"\\b");
	return reg.test(obj.className);
};

//删除一个指定元素的class属性
function removeClass(obj , classN){
	// 创建一个正则表达式
	var reg = new RegExp("\\b"+classN+"\\b");
	//删除一个样式
	obj.className = obj.className.replace(reg,"");
};

//toggleClass可以用来切换一个类
//如果元素中具有该类,则删除
//如果元素中没有该类,则添加
function toggleClass(obj , classN){
	if (hasClass(obj , classN)) {
		// 如果有,则删除
		removeClass(obj , classN);
	}else {
		// 如果没有,则添加
		addClass(obj , classN);
	}
};