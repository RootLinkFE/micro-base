(window["webpackJsonp_CrmBase"]=window["webpackJsonp_CrmBase"]||[]).push([["account-login"],{"14c3":function(e,t,r){var n=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"28fd":function(e,t,r){e.exports=r.p+"img/login-logo.f0de4e6f.png"},"3e8d":function(e,t,r){},"51c1":function(e,t,r){"use strict";r("3e8d")},5319:function(e,t,r){"use strict";var n=r("d784"),o=r("825a"),a=r("7b0b"),i=r("50c4"),c=r("a691"),s=r("1d80"),u=r("8aa5"),l=r("14c3"),p=Math.max,f=Math.min,d=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(r,n){var o=s(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,o,n):t.call(String(o),r,n)},function(e,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(x)){var a=r(t,e,this,n);if(a.done)return a.value}var s=o(e),d=String(this),g="function"===typeof n;g||(n=String(n));var m=s.global;if(m){var y=s.unicode;s.lastIndex=0}var k=[];while(1){var w=l(s,d);if(null===w)break;if(k.push(w),!m)break;var _=String(w[0]);""===_&&(s.lastIndex=u(d,i(s.lastIndex),y))}for(var $="",S=0,F=0;F<k.length;F++){w=k[F];for(var C=String(w[0]),R=p(f(c(w.index),d.length),0),T=[],A=1;A<w.length;A++)T.push(v(w[A]));var P=w.groups;if(g){var U=[C].concat(T,R,d);void 0!==P&&U.push(P);var I=String(n.apply(void 0,U))}else I=E(C,d,R,T,P,n);R>=S&&($+=d.slice(S,R)+I,S=R+C.length)}return $+d.slice(S)}];function E(e,r,n,o,i,c){var s=n+e.length,u=o.length,l=m;return void 0!==i&&(i=a(i),l=g),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var p=d(l/10);return 0===p?t:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):t}c=o[l-1]}return void 0===c?"":c}))}}))},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},b6b3:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page page-login"},[n("el-card",{staticClass:"login-wrapper"},[n("img",{attrs:{src:r("28fd"),alt:""}}),"third"===e.loginType?n("div",{staticClass:"login-by-thrid"},[n("el-button",{attrs:{type:"primary",size:"large"}},[e._v(" 钉钉扫码登录 ")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.loginType="form"}}},[e._v(" 账号密码登录 ")])],1):n("div",{staticClass:"login-by-form"},[n("el-form",{ref:"loginForm",attrs:{"label-position":"top",size:"large",model:e.loginForm}},[n("el-form-item",{attrs:{label:"账号",prop:"username"}},[n("el-input",{attrs:{clearable:"","auto-complete":"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$refs.password.focus()}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{staticClass:"password-item",attrs:{label:"密码",prop:"password"}},[n("el-input",{ref:"password",attrs:{clearable:"",type:"password","auto-complete":"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmitForm(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),n("el-button",{attrs:{type:"primary",size:"large",loading:e.submiting},on:{click:e.onSubmitForm}},[e._v(" "+e._s(e.submiting?"正在提交":"登录")+" ")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.loginType="third"}}},[e._v(" 钉钉扫码登录 ")])],1)])],1)},o=[],a=(r("99af"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),i=r("5f87"),c={name:"AccountLogin",data:function(){return{loginType:"form",loginForm:{username:"",password:"",__fields:"token,uid"},submiting:!1}},methods:{getValidateErrorMessage:function(){return this.loginForm.username?this.loginForm.password?void 0:"请输入密码":"请输入用户名"},onSubmitForm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,c,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getValidateErrorMessage(),!r){t.next=3;break}return t.abrupt("return",e.$message.error(r));case 3:return e.submiting=!0,t.prev=4,t.next=7,e.$http.auth.post("/v1/auth/admin/token",e.loginForm);case 7:if(n=t.sent,o=n.code,a=n.data,c=n.info,0===o){t.next=15;break}return e.submiting=!1,c&&e.$message.error(c),t.abrupt("return");case 15:if(i["e"](a.token),s=decodeURIComponent(e.$route.query.redirect||""),!s||!/^http/.test(s)){t.next=21;break}return u=/\?/.test(s),window.location.assign("".concat(s).concat(u?"&":"?","token=").concat(a.token)),t.abrupt("return");case 21:e.$router.replace({path:"/"}),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](4),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[4,24]])})))()}}},s=c,u=(r("51c1"),r("2877")),l=Object(u["a"])(s,n,o,!1,null,"6c57ce08",null);t["default"]=l.exports},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("d039"),a=r("b622"),i=r("9263"),c=r("9112"),s=a("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=a("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var g=a(e),m=!o((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),v=m&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!m||!v||"replace"===e&&(!u||!l||f)||"split"===e&&!d){var h=/./[g],b=r(g,""[e],(function(e,t,r,n,o){return t.exec===i?m&&!o?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],E=b[1];n(String.prototype,e,x),n(RegExp.prototype,g,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}p&&c(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=account-login.138982.js.map