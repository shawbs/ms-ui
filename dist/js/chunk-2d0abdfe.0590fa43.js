(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abdfe"],{"16ad":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ms-page",[n("ms-container",[n("h3",[t._v("message box")]),n("ms-button",{nativeOn:{click:function(e){return t.$msgbox.alert("alert",{title:"标题"})}}},[t._v("alert")]),n("ms-button",{nativeOn:{click:function(e){return t.$msgbox.alert("alert",{isClickOtherClose:!1})}}},[t._v("不允许点击蒙层关闭")]),n("ms-button",{nativeOn:{click:function(e){return t.$msgbox.confirm("confirm",{title:"标题"})}}},[t._v("confirm")]),n("ms-button",{nativeOn:{click:function(e){return t.$msgbox.prompt("prompt",{title:"标题"})}}},[t._v("prompt")]),n("ms-button",{nativeOn:{click:function(e){return t.beforeClose(e)}}},[t._v("before close handle")])],1)],1)},r=[],i=(n("d3b7"),{methods:{beforeClose:function(){this.$msgbox.prompt("prompt",{title:"标题",beforeClose:function(t){return new Promise((function(t,e){console.log("before close"),setTimeout((function(){t()}),3e3)}))}})}}}),c=i,s=n("2877"),l=Object(s["a"])(c,o,r,!1,null,"5dee9ca8",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0abdfe.0590fa43.js.map