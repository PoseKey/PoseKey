(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],o[i]&&m.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),o=n.n(a);o.a},1:function(t,e){},1356:function(t,e,n){},2:function(t,e){},"285b":function(t,e,n){"use strict";var a=n("8398"),o=n.n(a);o.a},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("bf40");a["a"].use(o["a"],{iconfont:"md",theme:{primary:"#1D3557",secondary:"#457B9D",accent:"#F45353",button:"FFEBEE"}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("PoseKey")]),n("v-spacer"),n("v-btn",{attrs:{dark:"",flat:"",icon:""},on:{click:function(e){return t.switched()}}},[n("v-icon",[t._v("power_settings_new")])],1),n("v-tabs",{attrs:{slot:"extension",color:"primary",dark:"","slider-color":"accent",grow:"","fixed-tabs":""},slot:"extension"},[n("v-tab",{attrs:{to:"/"}},[n("v-icon",[t._v("gesture")])],1),n("v-tab",{attrs:{to:"/mirror"}},[n("v-icon",[t._v("face")])],1),n("v-tab",{attrs:{to:"/setting"}},[n("v-icon",[t._v("settings")])],1)],1)],1),n("v-container",{staticClass:"scroll-y"},[n("router-view")],1)],1)},i=[],s={name:"App",components:{},data:function(){return{boolean:!1}},methods:{switched:function(){chrome.runtime.sendMessage({data:"trigger"})}},mounted:function(){var t=this;chrome.runtime.sendMessage({data:"?"},function(e){1==e.data?t.boolean=!0:t.boolean=!1})}},c=s,l=(n("034f"),n("2877")),u=n("6544"),d=n.n(u),m=n("7496"),p=n("8336"),v=n("a523"),h=n("132d"),f=n("9910"),g=n("71a3"),b=n("fe57"),w=n("71d9"),y=n("2a7f"),x=Object(l["a"])(c,r,i,!1,null,null,null),_=x.exports;d()(x,{VApp:m["a"],VBtn:p["a"],VContainer:v["a"],VIcon:h["a"],VSpacer:f["a"],VTab:g["a"],VTabs:b["a"],VToolbar:w["a"],VToolbarTitle:y["a"]});var k=n("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("v-card",[n("v-card-title",[n("h2",[t._v("Signed in as")])]),n("v-card-text",[n("v-list-tile",[n("v-list-tile-avatar",{attrs:{size:"30px"}},[n("img",{attrs:{src:this.user.photoURL,alt:"avatar"}})]),n("v-list-tile-content",[n("h3",[t._v(" "+t._s(t.displayName)+" ")])]),n("v-list-tile-action",[n("v-btn",{attrs:{color:"secondary",round:"",flat:"",outline:""},on:{click:t.logout}},[t._v("Sign Out")])],1)],1)],1)],1),n("v-divider"),n("v-card",[n("v-card-title",[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[n("h2",t._g({},e.on),[t._v("Setting")])]}}])},[n("span",[t._v("Recommended \n            posenet model: 0.75\n            image scale: 0.4\n            frequency: 0.5\n            accuracy: 0.6\n          ")])])],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"posenet model","tick-labels":t.ticksLabels,max:3,step:"1",ticks:"always","tick-size":"2","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this will also increase the delay of loading websites."},on:{change:function(e){return t.change()}},model:{value:t.pm,callback:function(e){t.pm=e},expression:"pm"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"image scale",step:"0.01",min:"0.2",max:"1.0","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this may cause the computer to lag"},on:{change:function(e){return t.change()}},model:{value:t.sc,callback:function(e){t.sc=e},expression:"sc"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"frequency",step:"100",min:"100",max:"1000","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose faster, but this might cause the computer to lag."},on:{change:function(e){return t.change()}},model:{value:t.fq,callback:function(e){t.fq=e},expression:"fq"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"Accuracy",min:"50",max:"100",ticks:"always","tick-size":"2",step:"10","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will decrease mis-recognition, but in trade off, it will require the user to show accurate poses."},on:{change:function(e){return t.change()}},model:{value:t.ac,callback:function(e){t.ac=e},expression:"ac"}})],1)],1),n("v-divider"),n("v-card",[n("v-card-title",[n("h2",[t._v("Credits")])]),n("v-card-text",[n("div",[t._v("All Icons are made by "),n("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])])],1)],1)},O=[],j=(n("a481"),n("cebc")),P=n("2f62");a["a"].use(P["a"]);var C={user:null},q={updateUser:function(t,e){var n=e.user;a["a"].set(t,"user",n)}},D={},S={user:function(t){return t.user}},T=new P["a"].Store({state:C,mutations:q,actions:D,getters:S}),M=T,R={computed:Object(j["a"])({},Object(P["c"])(["user"]),{displayName:function(){return this.user?this.user.displayName:""}}),data:function(){return{value:0,ticksLabels:["0.5","0.75","1.0","1.01"],pm:1,sc:.4,fq:500,ac:70}},methods:{change:function(){var t=this.$db.requireDB(),e=M.state.user.uid;t.collection("users").doc(e).collection("model").doc("setting").update({pm:this.pm,sc:this.sc,fq:this.fq,ac:this.ac}),chrome.runtime.sendMessage({data:"setting",pmm:this.pm,scm:this.sc,fqm:this.fq,acm:this.ac})},logout:function(){this.$auth.logout(),this.$router.replace({name:"login"}),chrome.runtime.sendMessage({data:"logout"})}},mounted:function(){var t=this,e=this.$db.requireDB(),n=M.state.user.uid;e.collection("users").doc(n).collection("model").doc("setting").get().then(function(a){a.exists?(t.pm=a.data().pm,t.sc=a.data().sc,t.fq=a.data().fq,t.ac=a.data().ac):e.collection("users").doc(n).collection("model").doc("setting").set({pm:t.pm,sc:t.sc,fq:t.fq,ac:t.ac}),chrome.runtime.sendMessage({data:"setting",pmm:t.pm,scm:t.sc,fqm:t.fq,acm:t.ac})}),chrome.runtime.sendMessage({data:"login",uidm:n})}},B=R,$=(n("285b"),n("b0af")),E=n("99d9"),I=n("12b2"),L=n("ce7e"),A=n("ba95"),F=n("40fe"),z=n("c954"),U=n("5d23"),N=n("ba0d"),G=n("3a2f"),W=Object(l["a"])(B,V,O,!1,null,"5f9d475e",null),Y=W.exports;d()(W,{VBtn:p["a"],VCard:$["a"],VCardText:E["a"],VCardTitle:I["a"],VDivider:L["a"],VListTile:A["a"],VListTileAction:F["a"],VListTileAvatar:z["a"],VListTileContent:U["a"],VSlider:N["a"],VTooltip:G["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"360px","align-center":""}},[n("v-card-title",[n("h2",[t._v("Please Sign in to Proceed")])]),n("v-card-text",[n("v-list",[n("v-btn",{attrs:{color:"accent",outline:"",round:""},on:{click:t.loginG}},[t._v("\n                Sign in with Google\n            ")])],1)],1),n("v-card-title",[n("h2",[t._v("Credits")])]),n("v-card-text",[n("div",[t._v("All Icons are made by "),n("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])])],1)},K=[],X=(n("96cf"),n("3b8d")),H={name:"Login",computed:Object(j["a"])({},Object(P["b"])(["user"]),{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{user:function(t){t&&this.$router.replace(this.nextRoute)}},methods:{loginG:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.loginG();case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){chrome.runtime.sendMessage({data:"logout"})}},Q=H,Z=n("8860"),tt=Object(l["a"])(Q,J,K,!1,null,"620614f2",null),et=tt.exports;d()(tt,{VBtn:p["a"],VCard:$["a"],VCardText:E["a"],VCardTitle:I["a"],VList:Z["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[n("h2",[t._v("Customize")])]),n("v-card-text",[n("v-list",[n("v-list-tile",{attrs:{ripple:""}},[n("v-list-tile-title",[t._v("\n                        Custom model\n                    ")]),n("v-list-tile-action",[n("v-switch",{model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}})],1)],1)],1)],1)],1),n("v-divider"),n("v-card",[n("v-window",{model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}},[n("v-window-item",{attrs:{value:!1}},[n("v-card-title",[n("h2",[t._v("Default Model Setting")])]),n("v-card-text",[n("v-list",t._l(t.details,function(e){return n("v-list-tile",{key:e.name,staticStyle:{"margin-top":"12px"}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.image}})]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.Description)}})],1),n("v-list-tile-action",[n("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:t.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(n){return t.switchd(e.id-1)}},model:{value:t.defaults[e.id-1],callback:function(n){t.$set(t.defaults,e.id-1,n)},expression:"defaults[item.id - 1]"}})],1)],1)}),1)],1)],1),n("v-window-item",{attrs:{value:!0}},[n("v-card-title",[n("h2",[t._v("Custom Model Setting")])]),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.local,expression:"local"}]},[n("v-list",t._l(t.customd,function(e){return n("v-list-tile",{key:e.id,staticStyle:{"margin-top":"12px"}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.Description)}})],1),n("v-list-tile-action",[n("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:t.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(n){return t.switchc(e.id-1)}},model:{value:t.customs[e.id-1],callback:function(n){t.$set(t.customs,e.id-1,n)},expression:"customs[item.id - 1]"}})],1)],1)}),1)],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.local,expression:"!local"}]},[t._v("\n                    You have not created "),n("strong",[t._v("your own model")]),t._v('! PoseKey supports users to make their own unique poses that could be mapped with each functions! Go to the "Options Page" to create your own poses!!\n                    '),n("v-divider"),n("v-btn",{attrs:{color:"secondary",target:"_blank"},on:{click:function(e){return t.optionPage()}}},[t._v("Option Page")])],1)],1)],1)],1)],1)},at=[],ot=(n("ac6a"),{computed:Object(j["a"])({},Object(P["c"])(["user"]),{displayName:function(){return this.user?this.user.displayName:""}}),data:function(){return{details:[],options:["volume down","volume up","stop video","forward 10sec","backward 10sec","next video","scroll up","scroll down","previous slide","next slide","go to top","go to bottom","close tab","move tab left","move tab right","close window","zoom-in","zoom-out","zoom-reset","back","forward","reload"],custom:!1,step:1,defaults:[],customs:[],local:!1}},methods:{logout:function(){this.$auth.logout(),this.$router.replace({name:"login"})},switchd:function(t){void 0==this.defaults[t]&&(this.defaults[t]=null);var e=this.$db.requireDB(),n=M.state.user.uid;e.collection("users").doc(n).collection("model").doc("map").update({defaults:this.defaults}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},switchc:function(t){void 0==this.customs[t]&&(this.customs[t]=null);var e=this.$db.requireDB(),n=M.state.user.uid;e.collection("users").doc(n).collection("model").doc("map").update({customs:this.customs,customd:this.customd}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},optionPage:function(){chrome.runtime.openOptionsPage()}},created:function(){var t=this,e=this.$db.requireDB(),n=M.state.user.uid;e.collection("poses").onSnapshot(function(e){var n=e.docChanges();n.forEach(function(e){"added"===e.type&&t.details.push(Object(j["a"])({},e.doc.data(),{id:e.doc.id}))})}),e.collection("users").doc(n).collection("model").doc("map").get().then(function(a){a.exists?(t.defaults=a.data().defaults,t.customs=a.data().customs,t.customd=a.data().customd,t.custom=a.data().custom):(e.collection("users").doc(n).collection("model").doc("map").set({custom:!1,defaults:[null,null,null,null,null,null],customs:[null,null,null,null,null,null],customd:[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}]}),t.defaults=[null,null,null,null,null,null],t.customs=[null,null,null,null,null,null],t.customd=[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}],t.custom=!1),chrome.runtime.sendMessage({data:"poses",customm:t.custom,defaultsm:t.defaults,customsm:t.customs})}),chrome.runtime.sendMessage({data:"login",uidm:n},function(e){t.local=e.localm,t.custom=e.customm})}}),rt=ot,it=n("de8e"),st=n("b73d"),ct=n("f665"),lt=n("1e6c"),ut=Object(l["a"])(rt,nt,at,!1,null,"9daa57d4",null),dt=ut.exports;d()(ut,{VBtn:p["a"],VCard:$["a"],VCardText:E["a"],VCardTitle:I["a"],VDivider:L["a"],VList:Z["a"],VListTile:A["a"],VListTileAction:F["a"],VListTileAvatar:z["a"],VListTileContent:U["a"],VListTileTitle:U["b"],VOverflowBtn:it["a"],VSwitch:st["a"],VWindow:ct["a"],VWindowItem:lt["a"]});var mt,pt,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"360"}},[n("canvas",{attrs:{id:"output",width:"610",height:"360"}}),n("v-card-text",{staticStyle:{display:"none"},attrs:{id:"ifErr"}},[n("p",{attrs:{id:"info"}},[t._v(" Camera access has been denied. If you have camera, you can allow access\n        "),n("a",{attrs:{href:"chrome-extension://pifojknhlbglpfoehbppiddjlgebooom/options.html",target:"_blank"}},[t._v("here")]),t._v("\n        .")])])],1)},ht=[],ft=n("8726"),gt=n("768b"),bt=(n("6c7b"),n("0b53"),"aqua"),wt=2;function yt(t){var e=t.y,n=t.x;return[e,n]}function xt(t,e,n,a,o){t.beginPath(),t.arc(n,e,a,0,2*Math.PI),t.fillStyle=o,t.fill()}function _t(t,e,n,a,o){var r=Object(gt["a"])(t,2),i=r[0],s=r[1],c=Object(gt["a"])(e,2),l=c[0],u=c[1];o.beginPath(),o.moveTo(s*a,i*a),o.lineTo(u*a,l*a),o.lineWidth=wt,o.strokeStyle=n,o.stroke()}function kt(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=ft["a"](t,e);o.forEach(function(t){_t(yt(t[0].position),yt(t[1].position),bt,a,n)})}function Vt(t,e,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=0;o<t.length;o++){var r=t[o];if(!(r.score<e)){var i=r.position,s=i.y,c=i.x;xt(n,s*a,c*a,3,bt)}}}var Ot,jt=640,Pt=480,Ct={name:"Mirror",data:function(){return{msg:"Welcome to Your Vue.js App",loading:!0}},methods:{},mounted:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ft["c"](1.01);case 2:return mt=t.sent,t.prev=3,t.next=6,qt();case 6:pt=t.sent,t.next=16;break;case 9:throw t.prev=9,t.t0=t["catch"](3),e=document.getElementById("ifErr"),e.style.display="block",n=document.getElementById("ifNErr"),n.style.display="none",t.t0;case 16:St(pt,mt);case 17:case"end":return t.stop()}},t,this,[[3,9]])}));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){mt.dispose(),pt.pause(),pt.srcObject=null,Ot.getTracks().forEach(function(t){t.stop()})}};function qt(){return Dt.apply(this,arguments)}function Dt(){return Dt=Object(X["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return t.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:return Ot=t.sent,e=document.createElement("video"),e.height=Pt,e.width=jt,e.srcObject=Ot,e.play(),t.abrupt("return",e);case 11:case"end":return t.stop()}},t,this)})),Dt.apply(this,arguments)}function St(t,e){var n=document.getElementById("output"),a=n.getContext("2d");function o(){return r.apply(this,arguments)}function r(){return r=Object(X["a"])(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.estimateSinglePose(t,.3,!0,16);case 2:r=n.sent,a.clearRect(0,0,jt,Pt),a.save(),a.scale(-1,1),a.translate(-jt,0),a.drawImage(t,0,0,jt,Pt),a.restore(),r.score>=.1&&(Vt(r.keypoints,.3,a),kt(r.keypoints,.3,a)),requestAnimationFrame(o);case 11:case"end":return n.stop()}},n,this)})),r.apply(this,arguments)}o()}var Tt=Ct,Mt=Object(l["a"])(Tt,vt,ht,!1,null,"6191c574",null),Rt=Mt.exports;d()(Mt,{VCard:$["a"],VCardText:E["a"]}),a["a"].use(k["a"]);var Bt=new k["a"]({routes:[{path:"/setting",name:"setting",component:Y,meta:{authRequired:!0}},{path:"/login",name:"login",component:et},{path:"/Mirror",name:"Mirror",component:Rt},{path:"/",name:"main",component:dt,meta:{authRequired:!0}}]});Bt.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.authRequired})?M.state.user?n():n({path:"/login",query:{redirect:t.fullPath}}):n()});var $t=Bt,Et=n("31bd"),It=(n("6b54"),n("8aa5")),Lt=n.n(It),At=(n("e71f"),{apiKey:"AIzaSyAeizSulUyLs6RoVa82vOW99hw0ldFJqX8",authDomain:"capstone-67677.firebaseapp.com",databaseURL:"https://capstone-67677.firebaseio.com",projectId:"capstone-67677",storageBucket:"capstone-67677.appspot.com",messagingSenderId:"719697691522"}),Ft={install:function(t,e){var n=Lt.a.initializeApp(At),a=n.auth(),o=n.firestore();t.prototype.$db={requireDB:function(){return o}},t.prototype.$auth={loginG:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new Lt.a.auth.GoogleAuthProvider,t.next=3,a.signInWithPopup(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.signOut();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},a.onAuthStateChanged(function(t){M.commit("updateUser",{user:t}),t&&o.collection("users").doc(t.uid.toString()).set({uid:t.uid,name:t.displayName,email:t.email,photoURL:t.photoURL})})}};n.d(e,"app",function(){return app}),n.d(e,"router",function(){return $t}),n.d(e,"store",function(){return M}),a["a"].use(Ft),a["a"].config.productionTip=!1,Object(Et["sync"])(M,$t),new a["a"]({router:$t,store:M,render:function(t){return t(_)}}).$mount("#app")},8398:function(t,e,n){}});
//# sourceMappingURL=app.44a5277c.js.map