(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{334:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));n(132);var a=n(0);function c(){const e=Object(a.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function r(){const e=Object(a.h)(!1);return Object(a.e)(()=>{e.value=!0}),Object(a.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},353:function(e,t,n){},368:function(e,t,n){"use strict";n(353)},372:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(41),r=n(334),s=Object(a.c)({props:{currentTag:{type:String,default:""}},setup(e,t){const n=Object(r.a)();return{tags:Object(a.a)(()=>[{name:n.$recoLocales.all,path:"/tag/"},...n.$tagesList]),tagClick:e=>{t.emit("getCurrentTag",e)},getOneColor:c.b}}}),o=(n(368),n(1)),u=Object(o.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"tags"},e._l(e.tags,(function(n,a){return t("span",{directives:[{name:"show",rawName:"v-show",value:!n.pages||n.pages&&n.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:a,class:{active:n.name==e.currentTag},style:{backgroundColor:e.getOneColor()},on:{click:function(t){return e.tagClick(n)}}},[e._v(e._s(n.name))])})),0)}),[],!1,null,"cbf58c6c",null);t.default=u.exports}}]);