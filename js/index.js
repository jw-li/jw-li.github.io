console.log("李锦伟的个人主页（https://jw-li.github.io/）");
console.log("感谢您的浏览！");

/* 图片浮窗 */ 
function imgclick(src) { //打开图库窗口
	var imgLayer = document.getElementById("imgLayer");
	var imgBox = document.getElementById("imgBox");
	var img = document.getElementById("bigimg");
	imgLayer.style.display = "block";
	imgBox.style.display = "block";
	img.src = src;
	setTimeout("imgSg();", 1000);
}
function imgSg() {
	var img = document.getElementById("bigimg")
	var imgw = img.naturalWidth
	var imgh = img.naturalHeight //获取图片的原始宽高	 
	var userw = document.body.clientWidth
	var userh = document.body.clientHeight //获取用户游览器的宽高
	if (imgw >= (userw * 0.8) && imgh <= (userh * 0.8)) { //判断图片大小是否超过用户游览器宽高的80%，以定义图片大小
		img.style.width = "80%";
		img.style.height = "auto";
	} else if (imgw <= (userw * 0.8) && imgh >= (userh * 0.8)) {
		img.style.width = "auto";
		img.style.height = "80%";
	} else if (imgw >= (userw * 0.8) && imgh >= (userh * 0.8)) {
		img.style.width = "auto";
		img.style.height = "80%";
	} else {
		img.style.width = "auto";
		img.style.height = "auto";
	}
} //修改图片大小以避免
$(function() {
$("#imgLayer").click(function() { //关闭图库窗口
	var imgLayer = document.getElementById("imgLayer");
	var imgBox = document.getElementById("imgBox");
	imgLayer.style.display = "none";
	imgBox.style.display = "none";
})

$('img').bind("contextmenu", function(e) {
	return false;
}) //禁用图片的右键菜单
})

/* 视频浮窗 */ 
function imageLoading() {
	document.getElementsByClassName('avatar')[0].style.display = 'block';
	document.getElementsByClassName('loading')[0].style.display = 'none';
}

/* 鼠标特效 */ 
var a_idx = 0; 
jQuery(document).ready(function($) { 
	$("body").click(function(e) { 
		var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
		var $i = $("<span></span>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length; 
		var x = e.pageX, 
		y = e.pageY; 
		$i.css({ 
			"z-index": 999, 
			"top": y - 20, 
			"left": x, 
			"position": "absolute", 
			"font-weight": "bold", 
			"color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
		}); 
		$("body").append($i); 
		$i.animate({ 
			"top": y - 180, 
			"opacity": 0 
		}, 
		1500, 
		function() { 
			$i.remove(); 
		}); 
	}); 
}); 