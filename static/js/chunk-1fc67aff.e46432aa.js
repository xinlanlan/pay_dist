(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc67aff"],{5714:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"className"},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("二维码过期时间")])]),r("el-form",{ref:"baseSetForm",staticClass:"form-center-wrapper",attrs:{rules:e.rules,model:e.ruleForm}},[r("el-form-item",{attrs:{label:"二维码过期时间(建议保持不变为300s)",prop:"expiresTime"}},[r("el-input",{attrs:{placeholder:"请输入二维码过期时间"},model:{value:e.ruleForm.expiresTime,callback:function(t){e.$set(e.ruleForm,"expiresTime",t)},expression:"ruleForm.expiresTime"}})],1),r("el-form-item",{staticClass:"save-btn-item"},[r("el-button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:function(t){return e.vaildBaseSet("baseSetForm")}}},[e._v("保存修改")])],1)],1)],1)],1)},i=[],o=r("61f7"),s=r("8564"),a={data:function(){return{ruleForm:{expiresTime:300},rules:{expiresTime:[{required:!0,validator:o["b"],trigger:"blur",minVal:120}]}}},mounted:function(){var e=this;Object(s["g"])().then(function(t){0===t.code&&(e.ruleForm.expiresTime=t.expiresTime)})},methods:{vaildBaseSet:function(e){var t=this;this.$refs[e].validate(function(e){e&&t._shapeCodeExpiresTime(t.ruleForm)})},_shapeCodeExpiresTime:function(e){var t=this;console.log(e),Object(s["i"])(e).then(function(e){0===e.code&&t.$notify({title:"成功",message:"重置成功",type:"success"})})}}},u=a,c=r("2877"),l=Object(c["a"])(u,n,i,!1,null,null,null);t["default"]=l.exports},8564:function(e,t,r){"use strict";r.d(t,"g",function(){return i}),r.d(t,"i",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return a}),r.d(t,"h",function(){return u}),r.d(t,"e",function(){return c}),r.d(t,"c",function(){return l}),r.d(t,"f",function(){return p}),r.d(t,"b",function(){return d}),r.d(t,"j",function(){return f});var n=r("365c");function i(){var e="/getshapeCodeExpiresTime";return n["a"].get(e)}function o(e){var t="/shapeCodeExpiresTime";return n["a"].post(t,e)}function s(e){var t="/addShapeCode";return n["a"].post(t,e)}function a(){var e="/editShapeCodeInfo";return n["a"].post(e,data)}function u(e){var t="/getshapeCodeList";return n["a"].post(t,e)}function c(e){var t="/forbiddenShapeCode";return n["a"].post(t,e)}function l(e){var t="/delShapeCode";return n["a"].post(t,e)}function p(e){var t="/getUserChannelList";return n["a"].post(t,e)}function d(e){var t="/customerDepositList";return n["a"].post(t,e)}function f(e){var t="/updatecustomerDepositState";return n["a"].post(t,e)}}}]);