
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
						'		<div class="title">提示</div>'+
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
	ele.qrcode({
	  render : "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
	  text : text,    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
	  width : "200",               //二维码的宽度
	  height : "200",              //二维码的高度
	  background : "#ffffff",       //二维码的后景色
	  foreground : "#000000",        //二维码的前景色
	});
}
