(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ab57"],{bd54:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ms-page",[e("ms-container",[e("h3",[t._v("form")]),e("ms-form",{ref:"form",attrs:{model:t.formData,rules:t.rules,"label-width":"100px"}},[e("ms-form-item",{attrs:{label:"用户名",prop:"username"}},[e("ms-input",{model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("ms-form-item",{attrs:{label:"手机号",prop:"phone"}},[e("ms-input",{model:{value:t.formData.phone,callback:function(a){t.$set(t.formData,"phone",a)},expression:"formData.phone"}})],1),e("ms-form-item",{attrs:{label:"说明"}},[e("ms-input",{attrs:{type:"textarea",placeholder:"asda"},model:{value:t.formData.introduction,callback:function(a){t.$set(t.formData,"introduction",a)},expression:"formData.introduction"}})],1),e("ms-form-item",{attrs:{label:"状态",prop:"status"}},[e("ms-switch",{model:{value:t.formData.status,callback:function(a){t.$set(t.formData,"status",a)},expression:"formData.status"}})],1),e("ms-form-item",{attrs:{label:""}},[e("ms-button",{attrs:{type:"primary"},nativeOn:{click:function(a){return t.submit(a)}}},[t._v("submit")]),e("ms-button",{nativeOn:{click:function(a){return t.clear(a)}}},[t._v("clear")])],1)],1),e("br")],1)],1)},r=[],o={data:function(){return{formData:{username:"asd",phone:"",introduction:"",status:!1},rules:{username:[{pattern:/^(\d|\w){5,}$/,message:"用户名格式错误"}],phone:[{required:!0,message:"手机号不能为空"},{pattern:/^1[3456789]\d{9}$/,message:"手机号码格式错误"}],status:[{pattern:!0,message:"状态不能为false"}]}}},methods:{submit:function(){console.log("as"),this.$refs.form.validate((function(t){console.log(t)}))},clear:function(){this.$refs.form.clearValidate()}}},n=o,m=e("2877"),l=Object(m["a"])(n,s,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21ab57.caaf1cc2.js.map