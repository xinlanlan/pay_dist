(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dd0f49be"],{"1a90":function(t,e,a){"use strict";function r(t){if(!t)return"";var e=new Date(t);return e.getFullYear()+"-"+(9<e.getMonth()+1?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(9<e.getDate()?e.getDate():"0"+e.getDate())+" "+(9<e.getHours()?e.getHours():"0"+e.getHours())+":"+(9<e.getMinutes()?e.getMinutes():"0"+e.getMinutes())+":"+(9<e.getSeconds()?e.getSeconds():"0"+e.getSeconds())}function n(){return{startTime:new Date((new Date).setHours(0,0,0,0)).getTime(),endTime:(new Date).getTime()}}a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},4304:function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("c5f6");var r=a("bd86"),n=a("1a90"),s=a("f8b7"),o=a("5fd4"),c=a("e437"),i=a("d95c"),l=a("9817"),u=a("5880");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}var d={data:function(){return{sch_uid:"",sch_date:null,schRow:{username:"",todayTotalNum:0,todayComplateNum:0,totalOrderMoney:0,totalOrderFee:0},pageNo:1,pageSize:10,total:0,tablePage:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach(function(e){Object(r.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},Object(u.mapGetters)(["selfUid"])),mounted:function(){this._getOrderList({pageNo:1})},methods:{_channelTag:function(t,e){return Object(i.a)(t[e.property])},_GMTToStr:function(t,e){return Object(n.a)(Number(t[e.property]))},searchTab:function(){this.selfUid!==this.sch_uid?(this.pageNo=1,this._getOrderList(this.searchParams()),this.sch_uid&&this._dashboardDetail({uid:this.sch_uid})):this.$message.error("本uid为您自身uid，刷新页面即可查询自己")},refresh:function(){this.$router.replace({path:"/refresh",query:{t:Date.now()}})},handlePage:function(t){this.pageNo=t,this.selfUid!==this.sch_uid?this._getOrderList(this.searchParams()):this.$message.error("本uid为您自身uid，刷新页面即可查询自己")},_dashboardDetail:function(t){var e=this;Object(o.a)(t).then(function(t){0===t.code?e.schRow=Object.assign({},t.data):e.$message.error(t.message)})},_getOrderList:function(t){var e=this;Object(s.a)(t).then(function(t){0===t.code?(e.total=t.data.totalCount,e.tablePage=t.data.payOrderList):e.$message.error(t.message)}).catch(function(t){e.$message.error("获取列表失败")})},searchParams:function(){var t={pageNo:this.pageNo};return this.sch_uid&&(t.uid=this.sch_uid),this.sch_date&&(t.startTime=this.sch_date[0],t.endTime=this.sch_date[1]),t},_excelDow:function(){Object(l.a)({tHeader:["平台订单号","下游订单号","收款通道","发起金额","实收金额","佣金","创建时间","完成时间","状态"],filterVal:["orderId","outOrderId","channel","initPrice","price","serviceFee","createTime","complateTime","state"],tablePage:this.tablePage,filename:"代理-pageNo-".concat(this.pageNo)})}},components:{PayStateTag:c.a}},f=a("2877"),h=Object(f.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"className"},[a("el-card",{staticClass:"anoCard"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("订单列表")]),a("el-button",{staticClass:"header-title-btn",attrs:{icon:"el-icon-download",type:"primary"},on:{click:t._excelDow}},[t._v("导出")])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入客户UID"},model:{value:t.sch_uid,callback:function(e){t.sch_uid=e},expression:"sch_uid"}})],1),a("el-col",{attrs:{span:12}},[a("el-date-picker",{staticClass:"sch-picker",attrs:{"value-format":"timestamp",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.sch_date,callback:function(e){t.sch_date=e},expression:"sch_date"}})],1),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchTab()}}},[t._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.refresh()}}},[t._v("刷新")])],1)],1),a("el-row",{staticClass:"info-bar",staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:5}},[a("span",[t._v("账号："+t._s(t.schRow.username))])]),a("el-col",{attrs:{span:5}},[a("span",[t._v("今日订单总数："+t._s(t.schRow.todayTotalNum))])]),a("el-col",{attrs:{span:5}},[a("span",[t._v("今日订单成交数："+t._s(t.schRow.todayComplateNum))])]),a("el-col",{attrs:{span:5}},[a("span",[t._v("今日订单成交金额："+t._s(t.schRow.totalOrderMoney))])]),a("el-col",{attrs:{span:4}},[a("span",[t._v("今日平台服务费："+t._s(t.schRow.totalOrderFee))])])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tablePage,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"orderId",label:"平台订单号"}}),a("el-table-column",{attrs:{prop:"outOrderId",label:"下游订单号"}}),a("el-table-column",{attrs:{prop:"channel",formatter:t._channelTag,label:"收款通道",width:"120"}}),a("el-table-column",{attrs:{prop:"initPrice",label:"发起金额",width:"100"}}),a("el-table-column",{attrs:{prop:"price",label:"实收金额",width:"100"}}),a("el-table-column",{attrs:{prop:"serviceFee",label:"佣金",width:"80"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:t._GMTToStr}}),a("el-table-column",{attrs:{prop:"complateTime",label:"完成时间",formatter:t._GMTToStr}}),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("pay-state-tag",{attrs:{status:t.row.state}})]}}])})],1),a("el-pagination",{staticClass:"f-pagination",attrs:{background:"",layout:"total, prev, pager, next","page-size":t.pageSize,"current-page":t.pageNo,total:t.total},on:{"current-change":t.handlePage}})],1)],1)},[],!1,null,null,null);e.default=h.exports},"5fd4":function(t,e,a){"use strict";a.d(e,"a",function(){return n});var r=a("365c");function n(t){return r.a.get("/dashboardDetail",t)}},9817:function(t,e,a){"use strict";a("ac6a");var r=a("d95c"),n=a("1a90");function s(t){Promise.all([a.e("chunk-21462306"),a.e("chunk-748b566e")]).then(a.bind(null,"4bf8d")).then(function(e){var a=t.tHeader,s=t.filterVal,o=t.tablePage,c=[];o.forEach(function(t,e){var a=Object.assign({},t);Object.assign(a,{channel:Object(r.a)(a.channel),createTime:Object(n.a)(a.createTime),complateTime:Object(n.a)(a.complateTime),state:function(t){return{0:"未支付",1:"已支付",2:"已手动回调"}[t]}(a.state)}),c.push(a)});var i=function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}(s,c);e.export_json_to_excel({header:a,data:i,filename:""===t.filename?"filename":t.filename,autoWidth:!0,bookType:"xlsx"})})}a.d(e,"a",function(){return s})},aa77:function(t,e,a){function r(t,e,a){var r={},s=o(function(){return!!c[t]()||"​"!="​"[t]()}),i=r[t]=s?e(p):c[t];a&&(r[a]=i),n(n.P+n.F*s,"String",r)}var n=a("5ca1"),s=a("be13"),o=a("79e5"),c=a("fdef"),i="["+c+"]",l=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),p=r.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=r},c5f6:function(t,e,a){"use strict";function r(t){var e=i(t,!1);if("string"==typeof e&&2<e.length){var a,r,n,s=(e=v?e.trim():f(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if((o=c.charCodeAt(l))<48||n<o)return NaN;return parseInt(c,r)}}return+e}var n=a("7726"),s=a("69a8"),o=a("2d95"),c=a("5dbc"),i=a("6a99"),l=a("79e5"),u=a("9093").f,p=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,h="Number",g=n[h],b=g,m=g.prototype,_=o(a("2aeb")(m))==h,v="trim"in String.prototype;if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(_?l(function(){m.valueOf.call(a)}):o(a)!=h)?c(new b(r(e)),a,g):r(e)};for(var y,O=a("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;O.length>w;w++)s(b,y=O[w])&&!s(g,y)&&d(g,y,p(b,y));(g.prototype=m).constructor=g,a("2aba")(n,h,g)}},d95c:function(t,e,a){"use strict";function r(t){return{alipay:"支付宝个码","alipay-transfer":"支付宝转账",wechat:"微信个码","alipay-bank":"支付宝转卡",unionpay:"云闪付",buybalpay:"农信易扫(聚合)"}[t]}a.d(e,"a",function(){return r})},e437:function(t,e,a){"use strict";a("c5f6");var r={props:{status:{type:Number}},filters:{statusText:function(t){if(void 0!==t)return 0===t?"未支付":1===t?"已支付":2===t?"已手动回调":"异常"},tagClass:function(t){if(void 0!==t)return 0===t?"warning":1===t?"success":2===t?"success":"danger"}}},n=a("2877"),s=Object(n.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-tag",{attrs:{type:t._f("tagClass")(t.status)}},[t._v("\n  "+t._s(t._f("statusText")(t.status))+"\n")])},[],!1,null,null,null);e.a=s.exports},f8b7:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var r=a("365c");function n(t){return r.a.post("/getOrderList",t)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);