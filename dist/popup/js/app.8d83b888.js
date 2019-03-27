(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)r=s[d],a[r]&&m.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("1356"),a=i.n(n);a.a},1:function(t,e){},1356:function(t,e,i){},2:function(t,e){},3:function(t,e){},"3cae":function(t,e,i){"use strict";var n=i("91ec"),a=i.n(n);a.a},4:function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("bb71");i("bf40");n["a"].use(a["a"],{iconfont:"md",theme:{primary:"#1D3557",secondary:"#457B9D",accent:"#F45353",button:"FFEBEE"}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-toolbar-title",[t._v("PoseKey")]),i("v-spacer"),i("v-btn",{attrs:{dark:"",flat:"",icon:""},on:{click:function(e){return t.switched()}}},[i("v-icon",[t._v("power_settings_new")])],1),i("v-tabs",{attrs:{slot:"extension",color:"primary",dark:"","slider-color":"accent",grow:"","fixed-tabs":""},slot:"extension"},[i("v-tab",{attrs:{to:"/"}},[i("v-icon",[t._v("gesture")])],1),i("v-tab",{attrs:{to:"/mirror"}},[i("v-icon",[t._v("face")])],1),i("v-tab",{attrs:{to:"/setting"}},[i("v-icon",[t._v("settings")])],1)],1)],1),i("v-container",{staticClass:"scroll-y"},[i("router-view")],1)],1)},r=[],s={name:"App",components:{},data:function(){return{boolean:!1}},methods:{switched:function(){chrome.runtime.sendMessage({data:"trigger"})}},mounted:function(){var t=this;chrome.runtime.sendMessage({data:"?"},function(e){1==e.data?t.boolean=!0:t.boolean=!1})}},c=s,l=(i("034f"),i("2877")),u=i("6544"),d=i.n(u),m=i("7496"),h=i("8336"),p=i("a523"),v=i("132d"),f=i("9910"),g=i("71a3"),b=i("fe57"),w=i("71d9"),y=i("2a7f"),x=Object(l["a"])(c,o,r,!1,null,null,null),k=x.exports;d()(x,{VApp:m["a"],VBtn:h["a"],VContainer:p["a"],VIcon:v["a"],VSpacer:f["a"],VTab:g["a"],VTabs:b["a"],VToolbar:w["a"],VToolbarTitle:y["a"]});var _=i("8c4f"),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("v-card",[i("v-card-title",[i("h2",[t._v("Signed in as")])]),i("v-card-text",[i("v-list-tile",[i("v-list-tile-avatar",{attrs:{size:"30px"}},[i("img",{attrs:{src:this.user.photoURL,alt:"avatar"}})]),i("v-list-tile-content",[i("h3",[t._v(" "+t._s(t.displayName)+" ")])]),i("v-list-tile-action",[i("v-btn",{attrs:{color:"secondary",round:"",flat:"",outline:""},on:{click:t.logout}},[t._v("Sign Out")])],1)],1)],1)],1),i("v-divider"),i("v-card",[i("v-card-title",[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[i("h2",t._g({},e.on),[t._v("Model Setting")])]}}])},[i("span",[t._v("Recommended \n            posenet model: 0.75\n            image scale: 0.4\n            frequency: 0.5\n            accuracy: 0.6\n          ")])])],1),i("v-card-text",[i("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"posenet model","tick-labels":t.ticksLabels,max:3,step:"1",ticks:"always","tick-size":"2","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this will also increase the delay of loading websites."},on:{change:function(e){return t.change()}},model:{value:t.pm,callback:function(e){t.pm=e},expression:"pm"}})],1),i("v-card-text",[i("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"image scale",step:"0.01",min:"0.2",max:"1.0","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this may cause the computer to lag"},on:{change:function(e){return t.change()}},model:{value:t.sc,callback:function(e){t.sc=e},expression:"sc"}})],1),i("v-card-text",[i("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"frequency",step:"100",min:"100",max:"1000","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose faster, but this might cause the computer to lag."},on:{change:function(e){return t.change()}},model:{value:t.fq,callback:function(e){t.fq=e},expression:"fq"}})],1),i("v-card-text",[i("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"Accuracy",min:"50",max:"100",ticks:"always","tick-size":"2",step:"10","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will decrease mis-recognition, but in trade off, it will require the user to show accurate poses."},on:{change:function(e){return t.change()}},model:{value:t.ac,callback:function(e){t.ac=e},expression:"ac"}})],1)],1),i("v-divider"),i("v-card",[i("v-card-title",[i("h2",[t._v("Interface Setting")])]),i("v-card-text",[i("div",{staticStyle:{display:"flex"}},[i("v-container",{staticStyle:{width:"279px"}},[i("v-slider",{attrs:{color:"red","thumb-color":"accent",label:"Red",min:"0",max:"255","thumb-label":"always"},on:{change:function(e){return t.fill()}},model:{value:t.ri,callback:function(e){t.ri=e},expression:"ri"}}),i("v-slider",{attrs:{color:"green","thumb-color":"accent",label:"Green",min:"0",max:"255","thumb-label":"always"},on:{change:function(e){return t.fill()}},model:{value:t.gi,callback:function(e){t.gi=e},expression:"gi"}}),i("v-slider",{attrs:{color:"blue","thumb-color":"accent",label:"Blue",min:"0",max:"255","thumb-label":"always"},on:{change:function(e){return t.fill()}},model:{value:t.bi,callback:function(e){t.bi=e},expression:"bi"}}),i("v-slider",{attrs:{color:"grey","thumb-color":"accent",label:"Transparency",min:"0",max:"1",step:"0.1","thumb-label":"always"},on:{change:function(e){return t.opacity()}},model:{value:t.ti,callback:function(e){t.ti=e},expression:"ti"}})],1),i("v-container",{staticStyle:{width:"279px","align-item":"center"}},[i("v-checkbox",{attrs:{label:"Top"},on:{change:function(e){return t.interfaceIO()}},model:{value:t.vi,callback:function(e){t.vi=e},expression:"vi"}}),i("v-checkbox",{attrs:{label:"Left"},on:{change:function(e){return t.interfaceIO()}},model:{value:t.hi,callback:function(e){t.hi=e},expression:"hi"}}),i("v-checkbox",{attrs:{label:"Interface ON/OFF"},on:{change:function(e){return t.interfaceIO()}},model:{value:t.isDialog,callback:function(e){t.isDialog=e},expression:"isDialog"}}),i("canvas",{staticStyle:{width:"250px"},attrs:{id:"cvs"}})],1)],1)])],1),i("v-divider"),i("v-card",[i("v-card-title",[i("h2",[t._v("Credits")])]),i("v-card-text",[i("div",[t._v("All Icons are made by "),i("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),i("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),i("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])])],1)],1)},V=[],D=(i("a481"),i("6c7b"),i("6b54"),i("cebc")),S=i("2f62");n["a"].use(S["a"]);var j={user:null},C={updateUser:function(t,e){var i=e.user;n["a"].set(t,"user",i)}},P={},q={user:function(t){return t.user}},T=new S["a"].Store({state:j,mutations:C,actions:P,getters:q}),I=T,B={computed:Object(D["a"])({},Object(S["c"])(["user"]),{displayName:function(){return this.user?this.user.displayName:""}}),data:function(){return{value:0,ticksLabels:["0.5","0.75","1.0","1.01"],pm:1,sc:.4,fq:500,ac:70,ri:0,gi:0,bi:0,ti:.3,hi:!0,vi:!0,isDialog:!0}},methods:{change:function(){var t=this.$db.requireDB(),e=I.state.user.uid;t.collection("users").doc(e).collection("model").doc("setting").update({pm:this.pm,sc:this.sc,fq:this.fq,ac:this.ac}),chrome.runtime.sendMessage({data:"setting",pmm:this.pm,scm:this.sc,fqm:this.fq,acm:this.ac})},fill:function(){var t=document.getElementById("cvs"),e=t.getContext("2d"),i="#"+this.pad(this.ri.toString(16),2)+this.pad(this.gi.toString(16),2)+this.pad(this.bi.toString(16),2);e.fillStyle=i,e.fillRect(0,0,390,163);var n=this.$db.requireDB(),a=I.state.user.uid;n.collection("users").doc(a).collection("model").doc("setting").update({ri:this.ri,gi:this.gi,bi:this.bi,ti:this.ti}),chrome.runtime.sendMessage({data:"interface",rim:this.ri,gim:this.gi,bim:this.bi,tim:this.ti})},opacity:function(){var t=document.getElementById("cvs");t.style="width:250px;opacity:"+this.ti.toString(),this.fill()},interfaceIO:function(){var t=this.$db.requireDB(),e=I.state.user.uid;t.collection("users").doc(e).collection("model").doc("setting").update({isDialog:this.isDialog,vi:this.vi,hi:this.hi}),chrome.runtime.sendMessage({data:"interfaceIO",isDialogm:this.isDialog,vim:this.vi,him:this.hi})},logout:function(){this.$auth.logout(),this.$router.replace({name:"login"}),chrome.runtime.sendMessage({data:"logout"})},pad:function(t,e){return t+="",t.length>=e?t:new Array(e-t.length+1).join("0")+t}},mounted:function(){var t=this,e=this.$db.requireDB(),i=I.state.user.uid;e.collection("users").doc(i).collection("model").doc("setting").get().then(function(n){n.exists?(t.pm=n.data().pm,t.sc=n.data().sc,t.fq=n.data().fq,t.ac=n.data().ac,t.ri=n.data().ri,t.gi=n.data().gi,t.bi=n.data().bi,t.ti=n.data().ti,t.vi=n.data().vi,t.hi=n.data().hi,t.isDialog=n.data().isDialog):e.collection("users").doc(i).collection("model").doc("setting").set({pm:t.pm,sc:t.sc,fq:t.fq,ac:t.ac,ri:t.ri,gi:t.gi,bi:t.bi,ti:t.ti,vi:t.vi,hi:t.hi,isDialog:t.isDialog}),t.opacity(),chrome.runtime.sendMessage({data:"setting",pmm:t.pm,scm:t.sc,fqm:t.fq,acm:t.ac})}),chrome.runtime.sendMessage({data:"login",uidm:i})}},M=B,R=(i("3cae"),i("b0af")),$=i("99d9"),E=i("12b2"),L=i("ac7c"),A=i("ce7e"),F=i("ba95"),z=i("40fe"),N=i("c954"),U=i("5d23"),G=i("ba0d"),W=i("3a2f"),Y=Object(l["a"])(M,O,V,!1,null,"ee5cfc22",null),J=Y.exports;d()(Y,{VBtn:h["a"],VCard:R["a"],VCardText:$["a"],VCardTitle:E["a"],VCheckbox:L["a"],VContainer:p["a"],VDivider:A["a"],VListTile:F["a"],VListTileAction:z["a"],VListTileAvatar:N["a"],VListTileContent:U["a"],VSlider:G["a"],VTooltip:W["a"]});var K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{height:"360px","align-center":""}},[i("v-card-title",[i("h2",[t._v("Please Sign in to Proceed")])]),i("v-card-text",[i("v-list",[i("v-btn",{attrs:{color:"accent",outline:"",round:""},on:{click:t.loginG}},[t._v("\n                Sign in with Google\n            ")])],1)],1),i("v-card-title",[i("h2",[t._v("Credits")])]),i("v-card-text",[i("div",[t._v("All Icons are made by "),i("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),i("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),i("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])])],1)},X=[],H=(i("96cf"),i("3b8d")),Q={name:"Login",computed:Object(D["a"])({},Object(S["b"])(["user"]),{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{user:function(t){t&&this.$router.replace(this.nextRoute)}},methods:{loginG:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.loginG();case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){chrome.runtime.sendMessage({data:"logout"})}},Z=Q,tt=i("8860"),et=Object(l["a"])(Z,K,X,!1,null,"620614f2",null),it=et.exports;d()(et,{VBtn:h["a"],VCard:R["a"],VCardText:$["a"],VCardTitle:E["a"],VList:tt["a"]});var nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",[i("v-card-title",[i("h2",[t._v("Customize")])]),i("v-card-text",[i("v-list",[i("v-list-tile",{attrs:{ripple:""}},[i("v-list-tile-title",[t._v("\n                        Custom model\n                    ")]),i("v-list-tile-action",[i("v-switch",{on:{change:t.toggle},model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}})],1)],1)],1)],1)],1),i("v-divider"),i("v-card",[i("v-window",{model:{value:t.custom,callback:function(e){t.custom=e},expression:"custom"}},[i("v-window-item",{attrs:{value:!1}},[i("v-card-title",[i("h2",[t._v("Default Model Setting")])]),i("v-card-text",[i("v-list",t._l(t.details,function(e){return i("v-list-tile",{key:e.name,staticStyle:{"margin-top":"12px"}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.image}})]),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{textContent:t._s(e.Description)}})],1),i("v-list-tile-action",[i("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:t.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(i){return t.switchd(e.id-1)}},model:{value:t.defaults[e.id-1],callback:function(i){t.$set(t.defaults,e.id-1,i)},expression:"defaults[item.id - 1]"}})],1)],1)}),1)],1)],1),i("v-window-item",{attrs:{value:!0}},[i("v-card-title",[i("h2",[t._v("Custom Model Setting")])]),i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.local,expression:"local"}]},[i("v-list",t._l(t.customd,function(e){return i("v-list-tile",{key:e.id,staticStyle:{"margin-top":"12px"}},[i("v-list-tile-content",[i("v-list-tile-title",{domProps:{textContent:t._s(e.Description)}})],1),i("v-list-tile-action",[i("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:t.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(i){return t.switchc(e.id-1)}},model:{value:t.customs[e.id-1],callback:function(i){t.$set(t.customs,e.id-1,i)},expression:"customs[item.id - 1]"}})],1)],1)}),1)],1),i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.local,expression:"!local"}]},[t._v("\n                    You have not created "),i("strong",[t._v("your own model")]),t._v('! PoseKey supports users to make their own unique poses that could be mapped with each functions! Go to the "Options Page" to create your own poses!!\n                    '),i("v-divider"),i("v-btn",{attrs:{color:"secondary",target:"_blank"},on:{click:function(e){return t.optionPage()}}},[t._v("Option Page")])],1)],1)],1)],1)],1)},at=[],ot=(i("ac6a"),{computed:Object(D["a"])({},Object(S["c"])(["user"]),{displayName:function(){return this.user?this.user.displayName:""}}),data:function(){return{details:[],options:["volume down","volume up","stop video","forward 10sec","backward 10sec","next video","scroll up","scroll down","previous slide","next slide","go to top","go to bottom","close tab","move tab left","move tab right","close window","zoom-in","zoom-out","zoom-reset","back","forward","reload"],custom:!1,step:1,defaults:[],customs:[],local:!1}},methods:{logout:function(){this.$auth.logout(),this.$router.replace({name:"login"})},toggle:function(){db.collection("users").doc(uid).collection("model").doc("map").update({custom:this.custom})},switchd:function(t){void 0==this.defaults[t]&&(this.defaults[t]=null);var e=this.$db.requireDB(),i=I.state.user.uid;e.collection("users").doc(i).collection("model").doc("map").update({defaults:this.defaults,custom:this.custom}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},switchc:function(t){void 0==this.customs[t]&&(this.customs[t]=null);var e=this.$db.requireDB(),i=I.state.user.uid;e.collection("users").doc(i).collection("model").doc("map").update({custom:this.custom,customs:this.customs,customd:this.customd}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},optionPage:function(){chrome.runtime.openOptionsPage()}},created:function(){var t=this,e=this.$db.requireDB(),i=I.state.user.uid;e.collection("poses").onSnapshot(function(e){var i=e.docChanges();i.forEach(function(e){"added"===e.type&&t.details.push(Object(D["a"])({},e.doc.data(),{id:e.doc.id}))})}),e.collection("users").doc(i).collection("model").doc("map").get().then(function(n){n.exists?(t.defaults=n.data().defaults,t.customs=n.data().customs,t.customd=n.data().customd,t.custom=n.data().custom):(e.collection("users").doc(i).collection("model").doc("map").set({custom:!1,defaults:[null,null,null,null,null,null],customs:[null,null,null,null,null,null],customd:[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}]}),t.defaults=[null,null,null,null,null,null],t.customs=[null,null,null,null,null,null],t.customd=[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}],t.custom=!1),chrome.runtime.sendMessage({data:"poses",customm:t.custom,defaultsm:t.defaults,customsm:t.customs})}),chrome.runtime.sendMessage({data:"login",uidm:i},function(e){t.local=e.localm,t.custom=e.customm})}}),rt=ot,st=i("de8e"),ct=i("b73d"),lt=i("f665"),ut=i("1e6c"),dt=Object(l["a"])(rt,nt,at,!1,null,"4d3c98cd",null),mt=dt.exports;d()(dt,{VBtn:h["a"],VCard:R["a"],VCardText:$["a"],VCardTitle:E["a"],VDivider:A["a"],VList:tt["a"],VListTile:F["a"],VListTileAction:z["a"],VListTileAvatar:N["a"],VListTileContent:U["a"],VListTileTitle:U["b"],VOverflowBtn:st["a"],VSwitch:ct["a"],VWindow:lt["a"],VWindowItem:ut["a"]});var ht,pt,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{height:"360"}},[i("canvas",{attrs:{id:"output",width:"610",height:"360"}}),i("v-card-text",{staticStyle:{display:"none"},attrs:{id:"ifErr"}},[i("p",{attrs:{id:"info"}},[t._v(" Camera access has been denied. If you have camera, you can allow access\n        "),i("a",{attrs:{href:"chrome-extension://pifojknhlbglpfoehbppiddjlgebooom/options.html",target:"_blank"}},[t._v("here")]),t._v("\n        .")])])],1)},ft=[],gt=i("8726"),bt=i("768b"),wt=(i("0b53"),"aqua"),yt=2;function xt(t){var e=t.y,i=t.x;return[e,i]}function kt(t,e,i,n,a){t.beginPath(),t.arc(i,e,n,0,2*Math.PI),t.fillStyle=a,t.fill()}function _t(t,e,i,n,a){var o=Object(bt["a"])(t,2),r=o[0],s=o[1],c=Object(bt["a"])(e,2),l=c[0],u=c[1];a.beginPath(),a.moveTo(s*n,r*n),a.lineTo(u*n,l*n),a.lineWidth=yt,a.strokeStyle=i,a.stroke()}function Ot(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=gt["a"](t,e);a.forEach(function(t){_t(xt(t[0].position),xt(t[1].position),wt,n,i)})}function Vt(t,e,i){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=0;a<t.length;a++){var o=t[a];if(!(o.score<e)){var r=o.position,s=r.y,c=r.x;kt(i,s*n,c*n,3,wt)}}}var Dt,St=640,jt=480,Ct={name:"Mirror",data:function(){return{msg:"Welcome to Your Vue.js App",loading:!0}},methods:{},mounted:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt["c"](1.01);case 2:return ht=t.sent,t.prev=3,t.next=6,Pt();case 6:pt=t.sent,t.next=16;break;case 9:throw t.prev=9,t.t0=t["catch"](3),e=document.getElementById("ifErr"),e.style.display="block",i=document.getElementById("ifNErr"),i.style.display="none",t.t0;case 16:Tt(pt,ht);case 17:case"end":return t.stop()}},t,this,[[3,9]])}));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){ht.dispose(),pt.pause(),pt.srcObject=null,Dt.getTracks().forEach(function(t){t.stop()})}};function Pt(){return qt.apply(this,arguments)}function qt(){return qt=Object(H["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return t.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:return Dt=t.sent,e=document.createElement("video"),e.height=jt,e.width=St,e.srcObject=Dt,e.play(),t.abrupt("return",e);case 11:case"end":return t.stop()}},t,this)})),qt.apply(this,arguments)}function Tt(t,e){var i=document.getElementById("output"),n=i.getContext("2d");function a(){return o.apply(this,arguments)}function o(){return o=Object(H["a"])(regeneratorRuntime.mark(function i(){var o;return regeneratorRuntime.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.estimateSinglePose(t,.3,!0,16);case 2:o=i.sent,n.clearRect(0,0,St,jt),n.save(),n.scale(-1,1),n.translate(-St,0),n.drawImage(t,0,0,St,jt),n.restore(),o.score>=.1&&(Vt(o.keypoints,.3,n),Ot(o.keypoints,.3,n)),requestAnimationFrame(a);case 11:case"end":return i.stop()}},i,this)})),o.apply(this,arguments)}a()}var It=Ct,Bt=Object(l["a"])(It,vt,ft,!1,null,"6191c574",null),Mt=Bt.exports;d()(Bt,{VCard:R["a"],VCardText:$["a"]}),n["a"].use(_["a"]);var Rt=new _["a"]({routes:[{path:"/setting",name:"setting",component:J,meta:{authRequired:!0}},{path:"/login",name:"login",component:it},{path:"/Mirror",name:"Mirror",component:Mt},{path:"/",name:"main",component:mt,meta:{authRequired:!0}}]});Rt.beforeEach(function(t,e,i){t.matched.some(function(t){return t.meta.authRequired})?I.state.user?i():i({path:"/login",query:{redirect:t.fullPath}}):i()});var $t=Rt,Et=i("31bd"),Lt=i("8aa5"),At=i.n(Lt),Ft=(i("e71f"),{apiKey:"AIzaSyAeizSulUyLs6RoVa82vOW99hw0ldFJqX8",authDomain:"capstone-67677.firebaseapp.com",databaseURL:"https://capstone-67677.firebaseio.com",projectId:"capstone-67677",storageBucket:"capstone-67677.appspot.com",messagingSenderId:"719697691522"}),zt={install:function(t,e){var i=At.a.initializeApp(Ft),n=i.auth(),a=i.firestore();t.prototype.$db={requireDB:function(){return a}},t.prototype.$auth={loginG:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new At.a.auth.GoogleAuthProvider,t.next=3,n.signInWithPopup(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.signOut();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},n.onAuthStateChanged(function(t){I.commit("updateUser",{user:t}),t&&a.collection("users").doc(t.uid.toString()).set({uid:t.uid,name:t.displayName,email:t.email,photoURL:t.photoURL})})}};i.d(e,"app",function(){return app}),i.d(e,"router",function(){return $t}),i.d(e,"store",function(){return I}),n["a"].use(zt),n["a"].config.productionTip=!1,Object(Et["sync"])(I,$t),new n["a"]({router:$t,store:I,render:function(t){return t(k)}}).$mount("#app")},"91ec":function(t,e,i){}});
//# sourceMappingURL=app.8d83b888.js.map