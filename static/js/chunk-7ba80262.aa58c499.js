(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba80262"],{"06c1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"className"},[a("el-card",{staticClass:"anoCard"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("订单列表")])]),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入客户UID"},model:{value:e.sch_uid,callback:function(t){e.sch_uid=t},expression:"sch_uid"}})],1),a("el-col",{attrs:{span:12}},[a("el-date-picker",{staticClass:"sch-picker",attrs:{"value-format":"timestamp",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.sch_date,callback:function(t){e.sch_date=t},expression:"sch_date"}})],1),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.searchTab()}}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.refresh()}}},[e._v("刷新")])],1)],1),a("el-row",{staticClass:"info-bar",staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:4}},[a("span",[e._v("手机号码："+e._s(e.sch_nickname))])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("总订单数："+e._s(e.totalOrder))])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("总订单金额："+e._s(e.totalOrderMoney))])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("总实际收入金额："+e._s(e.totalOrderFactMoney))])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("客户费率："+e._s(e.rate)+"‰")])]),a("el-col",{attrs:{span:4}},[a("span",[e._v("总手续费："+e._s(e.serverFee))])])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.tablePage,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"id",label:"平台订单号"}}),a("el-table-column",{attrs:{prop:"outId",label:"下游订单号"}}),a("el-table-column",{attrs:{prop:"channel",label:"收款通道",width:"120"}}),a("el-table-column",{attrs:{prop:"initPrice",label:"发起金额",width:"100"}}),a("el-table-column",{attrs:{prop:"price",label:"实收金额",width:"100"}}),a("el-table-column",{attrs:{prop:"serviceFee",label:"手续费",width:"80"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"complateTime",label:"完成时间"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("pay-state-tag",{attrs:{status:e.row.status}})]}}])})],1),a("el-pagination",{staticClass:"f-pagination",attrs:{background:"",layout:"total, prev, pager, next","page-size":e.pageSize,"current-page":e.currentPage,total:e.total},on:{"current-change":e.handlePage}})],1)],1)},n=[],i=(a("a481"),a("b39f"),a("e437")),s={data:function(){return{sch_uid:"",sch_date:null,sch_nickname:"",totalOrder:100,totalOrderMoney:1e3,totalOrderFactMoney:900,rate:5,serverFee:10,currentPage:1,pageSize:10,total:100,tablePage:[{id:"820000199906018332",outId:"510000197101084728",channel:"微信个码",initPrice:2410,price:6247,serviceFee:10,createTime:"1981-10-10 14:19:47",complateTime:"2018-04-04 11:13:15",status:1},{id:"330000201505164789",outId:"610000197701312046",channel:"微信个码",initPrice:2384,price:1658,serviceFee:10,createTime:"1982-01-28 04:29:55",complateTime:"1990-09-21 16:51:33",status:2},{id:"31000020070715680X",outId:"640000198403195777",channel:"微信个码",initPrice:1166,price:2180,serviceFee:10,createTime:"2019-08-10 21:35:24",complateTime:"2001-04-06 04:44:59",status:2},{id:"360000197907260569",outId:"440000197406025763",channel:"微信个码",initPrice:7032,price:1289,serviceFee:10,createTime:"2018-06-20 21:21:28",complateTime:"1984-02-03 11:54:44",status:0},{id:"820000201703059679",outId:"33000019901213176X",channel:"微信个码",initPrice:1546,price:8512,serviceFee:10,createTime:"1983-02-04 06:50:45",complateTime:"1987-07-25 07:47:44",status:2},{id:"350000200003202473",outId:"140000198407312442",channel:"微信个码",initPrice:2328,price:3500,serviceFee:10,createTime:"1996-10-15 08:56:33",complateTime:"1976-10-10 18:37:30",status:0},{id:"420000199909065885",outId:"220000199512292636",channel:"微信个码",initPrice:7907,price:5907,serviceFee:10,createTime:"1971-08-10 19:04:21",complateTime:"2009-08-16 02:35:52",status:1},{id:"350000198011283031",outId:"460000197401038323",channel:"微信个码",initPrice:7594,price:5227,serviceFee:10,createTime:"2002-01-14 00:05:01",complateTime:"1977-09-17 17:33:31",status:1},{id:"36000020000914427X",outId:"71000019701121707X",channel:"微信个码",initPrice:2400,price:7507,serviceFee:10,createTime:"1984-10-07 16:20:50",complateTime:"1972-03-18 22:00:23",status:1},{id:"120000199802063811",outId:"15000020030730317X",channel:"微信个码",initPrice:3147,price:8348,serviceFee:10,createTime:"1981-08-20 21:10:09",complateTime:"2004-10-10 18:35:32",status:1}]}},mounted:function(){this._getOrderList(1,10)},methods:{searchTab:function(){console.log(this.sch_uid),console.log(this.sch_date)},refresh:function(){this.$router.replace({path:"/refresh",query:{t:Date.now()}})},handlePage:function(e){this.currentPage=e,this._getOrderList(e,this.pageSize)},_getOrderList:function(e,t){}},components:{PayStateTag:i["a"]}},c=s,l=a("2877"),o=Object(l["a"])(c,r,n,!1,null,null,null);t["default"]=o.exports},aa77:function(e,t,a){var r=a("5ca1"),n=a("be13"),i=a("79e5"),s=a("fdef"),c="["+s+"]",l="​",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(e,t,a){var n={},c=i(function(){return!!s[e]()||l[e]()!=l}),o=n[e]=c?t(d):s[e];a&&(n[a]=o),r(r.P+r.F*c,"String",n)},d=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},b39f:function(e,t,a){"use strict";a.d(t,"g",function(){return n}),a.d(t,"f",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"e",function(){return c}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return o}),a.d(t,"d",function(){return u});var r=a("365c");function n(){var e="/getUserChannelList";return r["a"].get(e)}function i(){var e="/getBankCardList";return r["a"].get(e)}function s(e){var t="/addBankCard";return r["a"].post(t,e)}function c(e){var t="/editBankCard";return r["a"].post(t,e)}function l(e){var t="/delBankCard";return r["a"].post(t,e)}function o(e){var t="/depositApply";return r["a"].post(t,e)}function u(e){var t="/depositReordList";return r["a"].post(t,e)}},c5f6:function(e,t,a){"use strict";var r=a("7726"),n=a("69a8"),i=a("2d95"),s=a("5dbc"),c=a("6a99"),l=a("79e5"),o=a("9093").f,u=a("11e9").f,p=a("86cc").f,d=a("aa77").trim,f="Number",h=r[f],m=h,g=h.prototype,v=i(a("2aeb")(g))==f,b="trim"in String.prototype,_=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var a,r,n,i=t.charCodeAt(0);if(43===i||45===i){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var s,l=t.slice(2),o=0,u=l.length;o<u;o++)if(s=l.charCodeAt(o),s<48||s>n)return NaN;return parseInt(l,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(v?l(function(){g.valueOf.call(a)}):i(a)!=f)?s(new m(_(t)),a,h):_(t)};for(var T,I=a("9e1e")?o(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;I.length>y;y++)n(m,T=I[y])&&!n(h,T)&&p(h,T,u(m,T));h.prototype=g,g.constructor=h,a("2aba")(r,f,h)}},e437:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tag",{attrs:{type:e._f("tagClass")(e.status)}},[e._v("\n  "+e._s(e._f("statusText")(e.status))+"\n")])},n=[],i=(a("c5f6"),{props:{status:{type:Number}},filters:{statusText:function(e){if(void 0!==e)return 0===e?"支付中":1===e?"已完成":2===e?"已手动回调":"异常"},tagClass:function(e){if(void 0!==e)return 0===e?"warning":1===e?"success":2===e?"success":"danger"}}}),s=i,c=a("2877"),l=Object(c["a"])(s,r,n,!1,null,null,null);t["a"]=l.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);