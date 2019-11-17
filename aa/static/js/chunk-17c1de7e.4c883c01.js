(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17c1de7e"],{"4dd0":function(a,e,t){"use strict";t.r(e);var n={data:function(){return{tablePage1:[{param:"uid",type:"int",explain:"【必填】您的商户唯一标识，可以从商户后台看到"},{param:"money",type:"double",explain:"【必填】要充值的金额"},{param:"outOrderId",type:"string",explain:"【必填】这是您自己平台的订单号，且一定要保证该单号唯一。在回调时，会带上这个参数。不同的订单，订单号不能重复"},{param:"channel",type:"string",explain:"【必填】微信个码：wechat,支付宝个码：alipay,支付宝转账：alipay-transfer(支付宝转账暂不可用),支付宝转银行卡：alipay-bank,云闪付：unionpay,农信易扫：buybalpay(农信易扫渠道支持微信和支付宝支付),不同支付方式填写不同参数"},{param:"sign",type:"string",explain:"【必填】uid+outOrderId+channel+token拼接后进行md5加密"}]}}},r=(t("5c51"),t("2877")),s=Object(r.a)(n,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"className"},[t("el-card",{staticClass:"anoCard"},[t("div",{attrs:{slot:"header"},slot:"header"},[a._v("商户对接文档")]),t("div",{staticClass:"par"},[a._v("1.跳转到支付页接口的"),t("span",{staticClass:"red"},[a._v(" url: http://47.254.241.243/pay/pages/getPayUrl ")])]),t("el-table",{attrs:{data:a.tablePage1,stripe:"",border:""}},[t("el-table-column",{attrs:{type:"index",width:"50"}}),t("el-table-column",{attrs:{prop:"param",width:"100",label:"参数名"}}),t("el-table-column",{attrs:{prop:"type",width:"100",label:"类型"}}),t("el-table-column",{attrs:{prop:"explain",label:"说明"}})],1),t("div",{staticClass:"par red"},[a._v("计算【sign】时(token从后台查看)，先在服务端计算好，把计算出来的【sign】传出来。严禁在客户端计算【sign】，严禁在客户端存储【token】")]),t("div",[t("div",[a._v("返回结果：")]),t("pre",[a._v("        {\n          code: 0,\n          data: {\n            url: 支付页地址\n          }\n        }\n      ")])]),t("div",{staticClass:"par"},[a._v("2.付款成功回调通知")]),t("div",{staticClass:"par"},[a._v('用户付款成功后，我们会向您设置的回调网址发送通知。您的服务器接收到后请回复{code:0, message:"ok"}，就表示回调已收到。如果返回状态不是{code:0, message:"ok"}，我们会再尝试回调1次。')]),t("div",[t("div",[a._v("返回结果(即请求你们回调地址的参数):")]),t("pre",[a._v("        {\n          state:1,    //表示已收款\n          outOrderId: 你们平台的订单号,\n          orderId: 我们平台的订单号,\n          money: 实际的收款金额,\n          sign:签名  //签名算法: outOrderId+ orderId+商户token（注意是商户token，不是码商token），这三项拼接后，MD5(32位)加密；\n        }\n      ")])])],1)],1)},[],!1,null,"722005b4",null);e.default=s.exports},"5c51":function(a,e,t){"use strict";var n=t("f4f3");t.n(n).a},f4f3:function(a,e,t){}}]);