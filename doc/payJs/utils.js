// 定义服务地址
var oHttp = 'www.baidu.com'
// 获取url参数
function getUrlParams() {
	var url = window.location.href;
	var paramsUrl = url.substring(url.indexOf('?')+1)
	var arr = paramsUrl.split('&')
	var obj = {}
	for(var i = 0; i<arr.length; i++) {
		var itemArr = arr[i].split('=')
		obj[itemArr[0]] = itemArr[1]
	}
	return obj
}


// 提示弹窗
function tipWin(content) {
	var str = '<div class="tip-dim">'+
						'	<div class="tip-wrapper">'+
						'		<div class="content">'+content+'</div>'+
						'		<div class="close-btn">关闭</div>'+
						'	</div>'+
						'</div>'
	$('body').append(str)
	$('.close-btn').click(function() {
		$('.tip-dim').remove()
	})
}

// 生成二维码
function createQrcode(ele, text) {
	new QRCode(ele, {
    text: text,
    width: 240,
    height: 240,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
	});
}

// 倒计时函数
function countDown(endTime) {
	var countDownEle = $('.count-down');
	var timer_1 = setInterval(clock, 1000); // 开启定时器
	function clock() {
		var nowTime = new Date(); // 一定是要获取最新的时间
		// console.log(nowTime.getTime()); 获得自己的毫秒
		var second = parseInt((endTime - nowTime.getTime()) / 1000);
		if(second <= 0) {
			clearInterval(timer_1)
			countDownEle.html("倒计时: 0分钟0秒");
			$('.all-wrapper').hide()
			$('.expire-wrapper').show()
			return
		}
		// 用将来的时间毫秒 - 现在的毫秒 / 1000 得到的 还剩下的秒 可能处不断 取整
		// console.log(second);
		var m = parseInt(second / 60);
		//console.log(m);
		var s = parseInt(second%60); // 当前的秒
		m < 10 ? m = "0" + m : m;
		s < 10 ? s = "0" + s : s;
		countDownEle.html("倒计时: " + m + "分钟 " + s + "秒");
	}
}
