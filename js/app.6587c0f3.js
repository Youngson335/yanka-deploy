(function(){"use strict";var e={1037:function(e,t,n){var r=n(5130),s=n(6768),c=n.p+"img/back5.0d1c3efb.jpeg";const i={key:0,class:"app__description"};function o(e,t,n,o,a,u){const l=(0,s.g2)("Description"),p=(0,s.g2)("HomePage"),m=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(r.eB,{name:"bounce"},{default:(0,s.k6)((()=>[a.showDescription?((0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(l)])):(0,s.Q3)("",!0)])),_:1}),a.showDescription?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(p,{key:0})),t[0]||(t[0]=(0,s.Lk)("div",{class:"movie__back"},[(0,s.Lk)("img",{src:c,alt:""})],-1)),(0,s.bF)(m)],64)}const a={class:"home container"};function u(e,t,n,r,c,i){const o=(0,s.g2)("Welcome"),u=(0,s.g2)("EntryText");return(0,s.uX)(),(0,s.CE)("main",a,[(0,s.bF)(o),(0,s.bF)(u)])}var l=n(4232);const p={class:"welcome"},m={key:0,ref:"welcomeTrue",class:"welcome__title"},d={ref:"welcomeTitle"},f={key:1,class:"welcome__stop"};function g(e,t,n,r,c,i){return(0,s.uX)(),(0,s.CE)("div",p,[!1===c.stopGame?((0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("h1",d,[(0,s.eW)((0,l.v_)(i.getGreeting)+", ",1),(0,s.Lk)("span",null,(0,l.v_)(e.getUserName),1)],512)],512)):((0,s.uX)(),(0,s.CE)("div",f,[(0,s.Lk)("h2",null,(0,l.v_)(e.getUserName)+", спокойной ночи! Возвращайся завтра😴",1)]))])}var h=n(782),k={data(){return{welcomeText:"",stopGame:!1}},computed:{...(0,h.L8)(["getUserName"]),getGreeting(){const e=(new Date).getHours();return e>=6&&e<12?"Доброе утро":e>=12&&e<17?"Добрый день":e>=17&&e<23?"Добрый вечер":(this.stopGame=!0,"Спокойной ночи")}},methods:{...(0,h.i0)(["initUserTg"]),getGreeting(){const e=(new Date).getHours();return e>=6&&e<12?"Доброе утро":e>=12&&e<17?"Добрый день":e>=17&&e<23?"Добрый вечер":"Спокойной ночи"},addDefaultClass(){setTimeout((()=>{this.$refs.welcomeTitle.classList.add("default-state")}),800)}},mounted(){this.$refs.welcomeTrue&&this.addDefaultClass(),this.getGreeting,this.initUserTg()}},v=n(1241);const L=(0,v.A)(k,[["render",g]]);var _=L;const A={key:0,class:"description"},C={class:"description__form"},U={class:"description__button"},b={key:1,class:"description"};function w(e,t,n,r,c,i){const o=(0,s.g2)("AcceptAgreement"),a=(0,s.g2)("ConfirmBtn");return!0===e.getConfirmUser?((0,s.uX)(),(0,s.CE)("div",A,[t[0]||(t[0]=(0,s.Lk)("div",{class:"description__text"},[(0,s.Lk)("p",null,[(0,s.eW)(" Данное приложение доступно не всем и то, что вы сейчас можете им пользоваться - это "),(0,s.Lk)("span",null,"большая честь"),(0,s.eW)(" в первую очередь для автора! ")]),(0,s.Lk)("p",null,[(0,s.eW)(" Если вы попытаетесь поделиться данным приложением со своими "),(0,s.Lk)("span",null,"близкими людьми"),(0,s.eW)(" или "),(0,s.Lk)("span",null,"подругами"),(0,s.eW)(", то увы, данные лица не смогут им полноценно воспользоваться! ")]),(0,s.Lk)("p",null," Автору так же хочется убедиться в том, что вы готовы уделять свое внимание, пользуясь данным приложением! "),(0,s.Lk)("p",null,"Будет прекрасно, если вы это подтвердите чуть ниже!)")],-1)),(0,s.Lk)("div",C,[(0,s.bF)(o)]),(0,s.Lk)("div",U,[(0,s.bF)(a)])])):((0,s.uX)(),(0,s.CE)("div",b,t[1]||(t[1]=[(0,s.Lk)("div",{class:"description__text"},[(0,s.Lk)("p",null,[(0,s.eW)(" Данное приложение предназначено только для "),(0,s.Lk)("span",null,"особой девушки"),(0,s.eW)(". Если вы сейчас читаете этот текст, значит, вы не являетесь таковой. ")]),(0,s.Lk)("p",null,[(0,s.eW)(" Если у вас возникли какие-то притензции к разработчику (ето я) - мне вас жаль, так как мне "),(0,s.Lk)("span",null,"лучше не писать!"),(0,s.eW)(" (мне есть с кем пообщаться!) ")])],-1)])))}const y={class:"button__confirm"},D=["disabled"];function T(e,t,n,r,c,i){return(0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.saveStateModalDescription&&i.saveStateModalDescription(...e)),disabled:i.checkAccept}," Подтвердить ",8,D)])}var E={computed:{...(0,h.L8)(["getAccept"]),checkAccept(){return!this.getAccept}},methods:{saveStateModalDescription(){localStorage.setItem("modalState",this.getAccept),this.$store.commit("setConfirmAccept",JSON.stringify(!0))}}};const I=(0,v.A)(E,[["render",T]]);var O=I;const W={class:"accept__form"},x={class:"accept__input"};function N(e,t,n,c,i,o){return(0,s.uX)(),(0,s.CE)("div",W,[t[2]||(t[2]=(0,s.Lk)("div",{class:"accept__text"},[(0,s.Lk)("strong",null,"Принимаю и осознаю работу автора")],-1)),(0,s.Lk)("div",x,[(0,s.bo)((0,s.Lk)("input",{onClick:t[0]||(t[0]=e=>o.setAccept(i.checkAccept)),"onUpdate:modelValue":t[1]||(t[1]=e=>i.checkAccept=e),type:"checkbox"},null,512),[[r.lH,i.checkAccept]])])])}var S={data(){return{checkAccept:!1}},methods:{setAccept(e){this.$store.commit("setAcceptCheck",!e)}}};const X=(0,v.A)(S,[["render",N]]);var F=X,j={components:{ConfirmBtn:O,AcceptAgreement:F},computed:{...(0,h.L8)(["getConfirmUser"])},methods:{...(0,h.i0)(["initUserTg"])},mounted(){this.initUserTg()}};const P=(0,v.A)(j,[["render",w]]);var G=P;const $={class:"entry"},H={ref:"lastChild"},B={class:"entry__two",ref:"entryTwo"};function M(e,t,n,r,c,i){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",$,[t[0]||(t[0]=(0,s.Lk)("p",null,"Утро начинается не",-1)),t[1]||(t[1]=(0,s.Lk)("br",null,null,-1)),(0,s.Lk)("p",H,"с кофе...",512)]),(0,s.Lk)("div",B,t[2]||(t[2]=[(0,s.Lk)("p",null,"...а с пожеланий на",-1),(0,s.Lk)("p",null,"этот день!",-1)]),512)],64)}var J={mounted(){setTimeout((()=>{this.$refs.lastChild.classList.add("active__child")}),800),setTimeout((()=>{this.$refs.entryTwo.classList.add("first__active")}),1100)}};const K=(0,v.A)(J,[["render",M]]);var Q=K,V={components:{Welcome:_,Description:G,EntryText:Q}};const q=(0,v.A)(V,[["render",u]]);var z=q,R={components:{HomePage:z,Description:G},data(){return{showDescription:!0}},computed:{...(0,h.L8)(["getConfirmAccept"])},watch:{getConfirmAccept:{immediate:!0,handler(e){this.checkConfirmAccept(e)}}},methods:{checkConfirmAccept(e){this.showDescription=!e}},mounted(){this.checkConfirmAccept(this.getConfirmAccept)}};const Y=(0,v.A)(R,[["render",o]]);var Z=Y,ee=n(1387);const te=[],ne=(0,ee.aE)({history:(0,ee.Bt)(),routes:te});var re=ne;let se=window.Telegram.WebApp;se.expand();var ce=se,ie=(0,h.y$)({state:{permissionUser:null,userName:"Владислав",userId:1805077298,userData:"",yankaId:1805077298,myId:1491570929,featuredId:[1805077298,1491570929],accept:localStorage.getItem("modalState")||!1,confirmAccept:JSON.parse(localStorage.getItem("modalState"))||!1,confirmUser:!1},mutations:{setUserName(e,t){e.userName=t},setUserID(e,t){e.userId=t},setUserData(e,t){e.userData=t},setPermissionUser(e,t){e.permissionUser=t},setAcceptCheck(e,t){e.accept=t},setConfirmAccept(e,t){e.confirmAccept=t},setConfirmUser(e,t){e.confirmUser=t}},actions:{initUserTg({commit:e,dispatch:t}){ce.initDataUnsafe&&ce.initDataUnsafe.user&&(e("setUserName",ce.initDataUnsafe.user.first_name),e("setUserID",ce.initDataUnsafe.user.id),e("setUserData",JSON.stringify(ce.initDataUnsafe)),t("setUserPermission",e)),t("setUserPermission",e)},setUserPermission({commit:e,state:t}){const n=t.userId,r=t.featuredId;r.find((t=>t===n?(e("setConfirmUser",!0),!0):(e("setConfirmUser",!1),!1)))}},getters:{getUserId(e){return e.userId},getUserName(e){return e.userName},getAccept(e){return e.accept},getConfirmAccept(e){return e.confirmAccept},getConfirmUser(e){return e.confirmUser}},modules:{}});const oe=(0,r.Ef)(Z);oe.use(ie).use(re).use(ce).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var c=t[r]={exports:{}};return e[r].call(c.exports,c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,c){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],c=e[l][2];for(var o=!0,a=0;a<r.length;a++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(o=!1,c<i&&(i=c));if(o){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[r,s,c]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,c,i=r[0],o=r[1],a=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(a)var l=a(n)}for(t&&t(r);u<i.length;u++)c=i[u],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(l)},r=self["webpackChunkyanka_project"]=self["webpackChunkyanka_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1037)}));r=n.O(r)})();
//# sourceMappingURL=app.6587c0f3.js.map