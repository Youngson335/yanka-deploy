(function(){"use strict";var e={8824:function(e,t,r){var n=r(5130),c=r(6768),s=r.p+"media/back2.1b18ae41.mp4";const o={key:0,class:"app__description"};function i(e,t,r,i,a,u){const l=(0,c.g2)("Description"),p=(0,c.g2)("HomePage"),d=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.bF)(n.eB,{name:"bounce"},{default:(0,c.k6)((()=>[a.showDescription?((0,c.uX)(),(0,c.CE)("div",o,[(0,c.bF)(l)])):(0,c.Q3)("",!0)])),_:1}),a.showDescription?(0,c.Q3)("",!0):((0,c.uX)(),(0,c.Wv)(p,{key:0})),t[0]||(t[0]=(0,c.Lk)("div",{class:"movie__back"},[(0,c.Lk)("video",{src:s,autoplay:"",muted:"",loop:""})],-1)),(0,c.bF)(d)],64)}const a={class:"home container"};function u(e,t,r,n,s,o){const i=(0,c.g2)("Welcome");return(0,c.uX)(),(0,c.CE)("main",a,[(0,c.bF)(i)])}var l=r(4232);const p={class:"user"},d={class:"user__name"},m={class:"user__id"};function f(e,t,r,n,s,o){return(0,c.uX)(),(0,c.CE)("section",p,[(0,c.Lk)("div",d,[(0,c.Lk)("p",null,[t[0]||(t[0]=(0,c.eW)(" Ваше имя: ")),(0,c.Lk)("strong",null,(0,l.v_)(e.getUserName),1)])]),(0,c.Lk)("div",m,[(0,c.Lk)("p",null,[t[1]||(t[1]=(0,c.eW)(" Ваш telegramID: ")),(0,c.Lk)("strong",null,(0,l.v_)(e.getUserId),1)])])])}var g=r(782),v={data(){return{userName:"Влад",userId:"19"}},computed:{...(0,g.L8)(["getUserId","getUserName"])},methods:{...(0,g.i0)(["initUserTg"])},mounted(){this.initUserTg()}},h=r(1241);const k=(0,h.A)(v,[["render",f]]);var A=k;const _={class:"welcome"},b={key:0,ref:"welcomeTrue",class:"welcome__title"},C={key:1,class:"welcome__stop"};function w(e,t,r,n,s,o){return(0,c.uX)(),(0,c.CE)("div",_,[!1===s.stopGame?((0,c.uX)(),(0,c.CE)("div",b,[(0,c.Lk)("h1",{ref:"welcomeTitle"},(0,l.v_)(o.getGreeting)+", "+(0,l.v_)(e.getUserName),513)],512)):((0,c.uX)(),(0,c.CE)("div",C,[(0,c.Lk)("h2",null,(0,l.v_)(e.getUserName)+", спокойной ночи! Возвращайся завтра😴",1)]))])}var L={data(){return{welcomeText:"",stopGame:!1}},computed:{...(0,g.L8)(["getUserName"]),getGreeting(){const e=(new Date).getHours();return e>=6&&e<12?"Доброе утро":e>=12&&e<17?"Добрый день":e>=17&&e<23?"Добрый вечер":(this.stopGame=!0,"Спокойной ночи")}},methods:{getGreeting(){const e=(new Date).getHours();return e>=6&&e<12?"Доброе утро":e>=12&&e<17?"Добрый день":e>=17&&e<23?"Добрый вечер":"Спокойной ночи"},addDefaultClass(){setTimeout((()=>{this.$refs.welcomeTitle.classList.add("default-state")}),800)}},mounted(){this.$refs.welcomeTrue&&this.addDefaultClass(),this.getGreeting}};const U=(0,h.A)(L,[["render",w]]);var y=U;const D={class:"description"},I={class:"description__form"},E={class:"description__button"};function N(e,t,r,n,s,o){const i=(0,c.g2)("AcceptAgreement"),a=(0,c.g2)("ConfirmBtn");return(0,c.uX)(),(0,c.CE)("div",D,[t[0]||(t[0]=(0,c.Lk)("div",{class:"description__text"},[(0,c.Lk)("p",null," Данное приложение доступно не всем и то, что вы сейчас можете им пользоваться - это большая честь в первую очередь для автора! "),(0,c.Lk)("p",null," И ему так же хочется убедиться в том, что вы готовы уделять свое внимание, пользуясь данным приложением! "),(0,c.Lk)("p",null,"Будет прекрасно, если вы это подтвердите чуть ниже!)")],-1)),(0,c.Lk)("div",I,[(0,c.bF)(i)]),(0,c.Lk)("div",E,[(0,c.bF)(a)])])}const O={class:"button__confirm"},T=["disabled"];function X(e,t,r,n,s,o){return(0,c.uX)(),(0,c.CE)("div",O,[(0,c.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.saveStateModalDescription&&o.saveStateModalDescription(...e)),disabled:o.checkAccept}," Подтвердить ",8,T)])}var x={computed:{...(0,g.L8)(["getAccept"]),checkAccept(){return!this.getAccept}},methods:{saveStateModalDescription(){localStorage.setItem("stateModal",this.getAccept),this.$store.commit("setConfirmAccept",JSON.stringify(!0))}}};const P=(0,h.A)(x,[["render",X]]);var j=P;const F={class:"accept__form"},S={class:"accept__input"};function G(e,t,r,s,o,i){return(0,c.uX)(),(0,c.CE)("div",F,[t[2]||(t[2]=(0,c.Lk)("div",{class:"accept__text"},[(0,c.Lk)("strong",null,"Принимаю и осознаю работу автора")],-1)),(0,c.Lk)("div",S,[(0,c.bo)((0,c.Lk)("input",{onClick:t[0]||(t[0]=e=>i.setAccept(o.checkAccept)),"onUpdate:modelValue":t[1]||(t[1]=e=>o.checkAccept=e),type:"checkbox"},null,512),[[n.lH,o.checkAccept]])])])}var M={data(){return{checkAccept:!1}},methods:{setAccept(e){this.$store.commit("setAcceptCheck",!e)}}};const W=(0,h.A)(M,[["render",G]]);var H=W,$={components:{ConfirmBtn:j,AcceptAgreement:H}};const B=(0,h.A)($,[["render",N]]);var J=B,Q={components:{UserTgInfo:A,Welcome:y,Description:J}};const K=(0,h.A)(Q,[["render",u]]);var V=K,q={components:{HomePage:V,Description:J},data(){return{showDescription:!0}},computed:{...(0,g.L8)(["getConfirmAccept"])},watch:{getConfirmAccept:{immediate:!0,handler(e){this.checkConfirmAccept(e)}}},methods:{checkConfirmAccept(e){this.showDescription=!e}},mounted(){this.checkConfirmAccept(this.getConfirmAccept)}};const z=(0,h.A)(q,[["render",i]]);var R=z,Y=r(1387);const Z=[],ee=(0,Y.aE)({history:(0,Y.Bt)(),routes:Z});var te=ee;let re=window.Telegram.WebApp;re.expand();var ne=re,ce=(0,g.y$)({state:{permissionUser:null,userName:"Владислав",userId:1805077298,userData:"",yankaId:1805077298,myId:1491570929,featuredId:[1805077298,1491570929],accept:localStorage.getItem("stateModal")||!1,confirmAccept:JSON.parse(localStorage.getItem("stateModal"))||!1},mutations:{setUserName(e,t){e.userName=t},setUserID(e,t){e.userId=t},setUserData(e,t){e.userData=t},setPermissionUser(e,t){e.permissionUser=t},setAcceptCheck(e,t){e.accept=t},setConfirmAccept(e,t){e.confirmAccept=t}},actions:{initUserTg({commit:e,dispatch:t}){t("setUserPermission",e)},setUserPermission({commit:e,state:t}){const r=t.userId,n=t.featuredId;n.find((t=>t===r?(e("setPermissionUser",!0),!0):(e("setPermissionUser",!1),!1)))}},getters:{getUserId(e){return e.userId},getUserName(e){return e.userName},getAccept(e){return e.accept},getConfirmAccept(e){return e.confirmAccept}},modules:{}});const se=(0,n.Ef)(R);se.use(ce).use(te).use(ne).mount("#app")}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,c,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],c=e[l][1],s=e[l][2];for(var i=!0,a=0;a<n.length;a++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var u=c();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,c,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,s,o=n[0],i=n[1],a=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(c in i)r.o(i,c)&&(r.m[c]=i[c]);if(a)var l=a(r)}for(t&&t(n);u<o.length;u++)s=o[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self["webpackChunkyanka_project"]=self["webpackChunkyanka_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(8824)}));n=r.O(n)})();
//# sourceMappingURL=app.10a78539.js.map