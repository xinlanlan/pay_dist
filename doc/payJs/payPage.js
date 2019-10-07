$(function() {
	// 首先获取订单号
	var urlInfo = getUrlParams()
	var orderId = urlInfo.orderId
	console.log(orderId)
	
	// 根据订单号获取二维码信息
	//getCodeInfo(orderId)
	function getCodeInfo(orderId) {
		$.ajax({
			url: oHttp+"/pay/pages/getCodeInfo",
			type:"get",
			data: {
				orderId: orderId
			},
			success: function(data) {
				console.log(data)
				if(data.code != 0) {
					tipWin('关闭，刷新重试')
					return
				}
				// 判断时间如果过期
				if(data.code == 20) {
					$('.expire-wrapper').show();
					return
				}
			},
			error: function() {
				tipWin('请检查网络是否连接！！')
			}
		});
	}

	// 根据类型展示不同的二维码
	showCode({
		channel: 'unionpay',
		createTime: 15701297013550,
		money: '10.00',
		codeInfo: {
			codeString: 'www.baidu.com'
		}
	})
	function showCode(codeInfo) {
		if(codeInfo.channel === 'alipay' || codeInfo.channel === 'wechat' || codeInfo.channel === 'unionpay' || codeInfo.channel === 'buybalpay') {
			if(codeInfo.channel === 'alipay') {
				$('.code-btn').show()
				alipayCode(codeInfo.codeInfo.codeString)
			}
			if(codeInfo.channel === 'wechat') {
				$('.code-wrapper .icon').addClass('wechat-icon')
				$('.support-wechat').show()
			}else if(codeInfo.channel === 'alipay') {
				$('.code-wrapper .icon').addClass('alipay-icon')
				$('.support-alipay').show()
			}else if(codeInfo.channel === 'unionpay'){
				$('.code-wrapper .icon').addClass('unionpay-icon')
				$('.support-unionpay,.unionpay-explain').show()
			}else{
				$('.code-wrapper .icon').addClass('skt-icon')
				$('.support-buybalpay').show()
			}
			$('.ordinary-wrapper').show()
			$('.pay-money').text('￥'+codeInfo.money)
			createQrcode(document.getElementById('code-canvas'), codeInfo.codeInfo.codeString)
			countDown(codeInfo.createTime + 1000*300, orderId)
			return
		}
		if(codeInfo.channel === 'alipay-bank') {
			$('.bank-wrapper').show()
			$('.pay-money').text('￥'+codeInfo.money)
			countDown(codeInfo.createTime + 1000*300, orderId)
			bankFunc(orderId)
			return
		}
		
		if(codeInfo.channel === 'alipay-transfer') {
			$('.transfer-wrapper').show()
			$('.pay-money').text('￥'+codeInfo.money)
			countDown(codeInfo.createTime + 1000*300, orderId)
			transferFunc(codeInfo.codeInfo.userid, codeInfo.money)
			return
		}
	}
	
	// 倒计时并开始查询订单的状态
	function countDown(endTime, orderId) {
		var countDownEle = $('.count-down');
		var timer_1 = setInterval(clock, 1000); // 开启定时器
		//var timer_2  = setInterval(getOrderStatus, 1500)
		function clock() {
			var nowTime = new Date(); // 一定是要获取最新的时间
			// console.log(nowTime.getTime()); 获得自己的毫秒
			var second = parseInt((endTime - nowTime.getTime()) / 1000);
			if(second <= 0) {
				clearInterval(timer_1)
				//clearInterval(timer_2)
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
		function getOrderStatus() {
			$.ajax({
				url: oHttp+'/pay/getOrderResult',
				type:"post",
				data: {
					orderId: orderId
				},
				success: function(data) {
					if(data.code == 0) {
						clearInterval(timer_2)
						window.location.replace('./successPage.html')
					}
				}
			});
		}
	}
	
	// 支付宝个人码
	function alipayCode(codeString) {
		$('.code-btn').click(function() {
			window.location.href = 'alipays://platformapi/startapp?appId=20000067&url='+codeString;
		})
	}
	
	// 点击启动支付宝
	function bankFunc(orderId) {
		$('.bank-btn').click(function() {
			window.location.href = 'alipays://platformapi/startapp?appId=20000160&url='+encodeURIComponent(oHttp+'/payPage/alipayBank.html?orderId='+orderId)
		})
	}
	
	
	// 点击进行转账
	function transferFunc(userid, money) {
		$('.transfer-btn').click(function() {
			var transfer = $('.transfer-val').val();
			if(!transfer) {
				alert('请输入您的支付宝昵称')
				return
			}
			$.ajax({
				url: oHttp+'/pay/pages/postAlipayName',
				type: 'post',
				data: {
					orderId: orderId,
					transfer: transfer
				},
				success: function(data) {
					if(data.code == 0) {
						var qrcodeurl = window.encodeURIComponent('alipays://platformapi/startapp?appId=20000123&actionType=scan&biz_data={"s":"money", "u":"'+userid+'", "a":"'+money+'", "m":"支付宝转账"}')
						window.location.href="alipays://platformapi/startapp?appId=20000067&url="+qrcodeurl;
					}else{
						alert(data.message)
					}
				}
			})
		})
	}
})
