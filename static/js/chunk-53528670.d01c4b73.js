(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53528670"],{e606:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"className"},[a("el-card",{staticClass:"anoCard"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("充值记录")])]),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入客户充值单号"},model:{value:e.sch_orderid,callback:function(t){e.sch_orderid=t},expression:"sch_orderid"}})],1),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入客户UID"},model:{value:e.sch_uid,callback:function(t){e.sch_uid=t},expression:"sch_uid"}})],1),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary"},on:{click:e.seachList}},[e._v("搜索")])],1)],1),a("el-table",{staticStyle:{"margin-top":"30px"},attrs:{data:e.tablePage,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"orderId",label:"充值单号"}}),a("el-table-column",{attrs:{prop:"uid",label:"用户id"}}),a("el-table-column",{attrs:{prop:"nickname",label:"用户姓名"}}),a("el-table-column",{attrs:{prop:"username",label:"用户电话"}}),a("el-table-column",{attrs:{prop:"rechargeMoney",label:"充值金额"}}),a("el-table-column",{attrs:{prop:"createTime",label:"充值时间"}})],1),a("el-pagination",{staticClass:"f-pagination",attrs:{background:"",layout:"total, prev, pager, next","page-size":e.pageSize,"current-page":e.pageNo,total:e.total},on:{"current-change":e.handlePage}})],1)],1)},n=[],o=a("f6b0"),c={data:function(){return{sch_orderid:"",sch_uid:"",tablePage:[{orderId:23232323,uid:3232,nickname:"fei123",username:1343454343,rechargeMoney:1200,createTime:"2019-03-10"},{orderId:23232323,uid:3232,nickname:"fei123",username:1343454343,rechargeMoney:1200,createTime:"2019-03-10"},{orderId:23232323,uid:3232,nickname:"fei123",username:1343454343,rechargeMoney:1200,createTime:"2019-03-10"}],pageNo:1,pageSize:10,total:0}},mounted:function(){this._rechargeRecordList({pageNo:1})},methods:{_rechargeRecordList:function(e){var t=this;Object(o["e"])(e).then(function(e){0===e.code&&(t.tablePage=e.data.recordList,t.total=e.totalCount)})},seachList:function(){var e={};this.pageNo=1,e.pageNo=1,this.sch_uid&&(e.uid=this.sch_uid),this.sch_orderid&&e.orderId,console.log(e),this._rechargeRecordList(e)},handlePage:function(e){var t={pageNo:e};this.sch_uid&&(t.uid=this.sch_uid),this.sch_orderid&&t.orderId,console.log(t),this._rechargeRecordList(t)}}},s=c,i=a("2877"),l=Object(i["a"])(s,r,n,!1,null,null,null);t["default"]=l.exports},f6b0:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"e",function(){return i});var r=a("365c");function n(e){var t="/addCustomer";return r["a"].post(t,e)}function o(e){var t="/getCustomerList";return r["a"].get(t,e)}function c(e){var t="/editCustomer";return r["a"].post(t,e)}function s(e){var t="/changeCustomerState";return r["a"].post(t,e)}function i(e){var t="/rechargeRecordList";return r["a"].post(t,e)}}}]);