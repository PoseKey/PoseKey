(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4cb5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md",theme:{primary:"#1D3557",secondary:"#457B9D",accent:"#F45353",button:"FFEBEE"}});n("6b54"),n("96cf");var o=n("3b8d"),s=n("2f62");a["a"].use(s["a"]);var i=new s["a"].Store({state:{user:null},mutations:{updateUser:function(e,t){var n=t.user;a["a"].set(e,"user",n)}},actions:{},getters:{user:function(e){return e.user}}}),c=n("8aa5"),u=n.n(c),l=(n("e71f"),{apiKey:"AIzaSyAeizSulUyLs6RoVa82vOW99hw0ldFJqX8",authDomain:"capstone-67677.firebaseapp.com",databaseURL:"https://capstone-67677.firebaseio.com",projectId:"capstone-67677",storageBucket:"capstone-67677.appspot.com",messagingSenderId:"719697691522"}),d={install:function(e,t){var n=u.a.initializeApp(l),a=n.auth(),r=n.firestore();e.prototype.$db={requireDB:function(){return r}},e.prototype.$auth={loginG:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new u.a.auth.GoogleAuthProvider,e.next=3,a.signInWithPopup(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.signOut();case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},a.onAuthStateChanged(function(e){i.commit("updateUser",{user:e}),e&&r.collection("users").doc(e.uid.toString()).set({uid:e.uid,name:e.displayName,email:e.email,photoURL:e.photoURL})})}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[n("v-toolbar-title",[n("span",[e._v("PoseKey")])]),n("v-spacer"),n("v-btn",{attrs:{flat:""}},[n("span",{staticClass:"font-weight-light subheading"},[e._v("Options Page")])]),n("v-tabs",{attrs:{slot:"extension",color:"primary","slider-color":"accent",centered:""},slot:"extension"},[n("v-tab",{attrs:{to:"/"}},[e._v("\n        Model\n      ")]),n("v-tab",{attrs:{to:"/function"}},[e._v("\n        Functions\n      ")]),n("v-tab",{attrs:{to:"/setting"}},[e._v("\n        Settings\n      ")])],1)],1),n("v-container",{staticStyle:{"margin-top":"120px"}},[n("router-view")],1)],1)},m=[],v={name:"App",components:{},data:function(){return{}}},f=v,h=(n("cbc7"),n("2877")),b=n("6544"),g=n.n(b),w=n("7496"),y=n("8336"),x=n("a523"),_=n("9910"),k=n("71a3"),C=n("fe57"),D=n("71d9"),V=n("2a7f"),O=Object(h["a"])(f,p,m,!1,null,"0b179ce9",null),P=O.exports;g()(O,{VApp:w["a"],VBtn:y["a"],VContainer:x["a"],VSpacer:_["a"],VTab:k["a"],VTabs:C["a"],VToolbar:D["a"],VToolbarTitle:V["a"]});var j=n("8c4f"),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("Logout"),n("v-flex",[n("v-card",{attrs:{"min-width":"640"}},[n("v-card-title",[n("h2",[e._v("Mirror")])]),n("v-divider"),n("v-card-media",[n("canvas",{attrs:{id:"output",width:"640",height:"480"}})])],1)],1),n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{"min-width":"640"}},[n("v-card-title",[n("h2",[e._v("Custom Model")])]),n("v-divider"),n("v-window",{model:{value:e.local,callback:function(t){e.local=t},expression:"local"}},[n("v-window-item",{attrs:{value:!1}},[n("v-card-text",[e._v("\n          PoseKey encourages users to use Posekey in creative ways!"),n("br"),e._v("\n          Therefore users can change default poses into their own unique poses by using a custom AI model."),n("br"),e._v("\n          Don't Worry, you only need to press few buttons to train your own AI model."),n("br"),e._v("\n          To create a "),n("strong",[e._v("custom model")]),e._v(", please click the button below!"),n("br"),e._v("\n          Default model can still be used that you can change the setting in popup page."),n("br"),n("br"),n("v-btn",{attrs:{round:"",color:"secondary"},on:{click:function(t){return e.createModel()}}},[e._v("Custom Model")])],1)],1),n("v-window-item",{attrs:{value:!0}},[n("br"),n("v-list",{attrs:{subheader:""}},e._l(e.customd,function(t){return n("v-list-tile",{key:t.id,attrs:{avatar:""}},[n("v-list-tile-content",[n("v-form",{ref:"form",refInFor:!0},[n("v-text-field",{attrs:{label:"Describe your pose please"},model:{value:t.Description,callback:function(n){e.$set(t,"Description",n)},expression:"item.Description"}})],1)],1),n("v-btn",{attrs:{flat:"",color:"accent"},on:{click:function(n){e.clearClass(n,t.id)}}},[e._v("Clear")]),n("v-btn",{attrs:{flat:"",color:"secondary"},on:{mousedown:function(n){e.trainClass(n,t.id)},mouseup:function(t){e.trainClass(t,-1)}}},[e._v("Train")])],1)}),1),n("v-card-actions",{staticStyle:{"justify-content":"flex-end"}},[n("div",[n("v-btn",{staticStyle:{"margin-right":"18px"},attrs:{round:"",outline:"",dark:"",color:"accent"},on:{click:e.save}},[e._v("Save")])],1)])],1)],1)],1)],1)],1)},S=[],q=(n("7f7f"),n("cebc")),M=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{xs12:""}},[n("div",{staticStyle:{"text-align":"end"}},[n("v-avatar",{attrs:{size:"30"}},[n("img",{attrs:{src:this.user.photoURL,alt:"avatar"}})]),e._v("\n    "+e._s(e.displayName)+"\n    "),n("v-btn",{attrs:{round:"",outline:"",color:"accent"},on:{click:e.logout}},[e._v("Log out")])],1)])}),T=[],L=(n("a481"),{computed:Object(q["a"])({},Object(s["c"])(["user"]),{displayName:function(){return this.user?this.user.displayName:""}}),methods:{logout:function(){this.$auth.logout(),this.$router.replace({name:"login"})}}}),E=L,$=n("8212"),B=n("0e8f"),F=Object(h["a"])(E,M,T,!1,null,"4d02c07a",null),I=F.exports;g()(F,{VAvatar:$["a"],VBtn:y["a"],VFlex:B["a"]});var A=n("8726"),U=n("768b"),z=(n("6c7b"),n("0b53")),W="aqua",N=2;function G(e){var t=e.y,n=e.x;return[t,n]}function Y(e,t,n,a,r){e.beginPath(),e.arc(n,t,a,0,2*Math.PI),e.fillStyle=r,e.fill()}function K(e,t,n,a,r){var o=Object(U["a"])(e,2),s=o[0],i=o[1],c=Object(U["a"])(t,2),u=c[0],l=c[1];r.beginPath(),r.moveTo(i*a,s*a),r.lineTo(l*a,u*a),r.lineWidth=N,r.strokeStyle=n,r.stroke()}function J(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=A["a"](e,t);r.forEach(function(e){K(G(e[0].position),G(e[1].position),W,a,n)})}function H(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<e.length;r++){var o=e[r];if(!(o.score<t)){var s=o.position,i=s.y,c=s.x;Y(n,i*a,c*a,3,W)}}}var X,Q,Z,ee,te,ne,ae,re=n("837b"),oe=n("be50"),se=640,ie=480,ce=[],ue=[],le=-1,de={components:{Logout:I},data:function(){return{customd:[],details:[],step:1,local:!1}},methods:{clearClass:function(e,t){Q.clearClass(t);var n=Q.getClassExampleCount();console.log(n[t])},trainClass:function(e,t){le=t},save:function(){var e=this.$db.requireDB(),t=i.state.user.uid;be(t),e.collection("users").doc(t).collection("model").doc("map").update({customd:this.customd}),chrome.runtime.sendMessage({data:"saveModel",uidm:t})},createModel:function(){this.local=!0}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.$db.requireDB(),n=i.state.user.uid,t.collection("users").doc(n).collection("model").doc("map").get().then(function(e){e.exists?a.customd=e.data().customd:(t.collection("users").doc(n).collection("model").doc("map").set({custom:!1,defaults:[null,null,null,null,null,null],customs:[null,null,null,null,null,null],customd:[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}]}),a.customd=[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}])}),t.collection("poses").onSnapshot(function(e){var t=e.docChanges();t.forEach(function(e){"added"===e.type&&a.details.push(Object(q["a"])({},e.doc.data(),{id:e.doc.id}))})}),chrome.runtime.sendMessage({data:"login",uidm:n},function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.local=t.localm,e.prev=1,e.next=4,pe();case 4:ee=e.sent,e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](1),e.t0;case 10:return ne=document.getElementById("output"),ae=ne.getContext("2d"),e.next=14,A["b"](1.01);case 14:return X=e.sent,Q=oe["a"](),e.next=18,re["a"]();case 18:if(Z=e.sent,!this.local){e.next=24;break}return e.next=22,xe(n);case 22:e.next=26;break;case 24:return e.next=26,we();case 26:ve(ee,X);case 27:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),beforeDestroy:function(){X.dispose(),Q.dispose(),ee.pause(),ee.srcObject=null,te.getTracks().forEach(function(e){e.stop()})}};function pe(){return me.apply(this,arguments)}function me(){return me=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return e.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:return te=e.sent,t=document.createElement("video"),t.height=ie,t.width=se,t.srcObject=te,t.play(),e.abrupt("return",t);case 11:case"end":return e.stop()}},e)})),me.apply(this,arguments)}function ve(e,t){function n(){return a.apply(this,arguments)}function a(){return a=Object(o["a"])(regeneratorRuntime.mark(function a(){var r,o,s,i,c;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.estimateSinglePose(e,.3,!0,16);case 2:r=a.sent,ae.clearRect(0,0,se,ie),ae.save(),ae.scale(-1,1),ae.translate(-se,0),ae.drawImage(e,0,0,se,ie),ae.restore(),r.score>=.1&&(H(r.keypoints,.3,ae),J(r.keypoints,.3,ae)),o=z["fromPixels"](ne),z["disableDeprecationWarnings"](),i=function(){return Z.infer(o,"conv_preds")},-1!=le&&(s=i(),Q.addExample(s,le),c=Q.getClassExampleCount(),console.log(c[le])),o.dispose(),null!=s&&s.dispose(),requestAnimationFrame(n);case 17:case"end":return a.stop()}},a)})),a.apply(this,arguments)}n()}function fe(e){return he.apply(this,arguments)}function he(){return he=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,a,r,o,s,i,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(n=[],n[0]=[],n[1]=[],n[2]=[],n[3]=[],a=t.getNumClasses(),r=0;r<a;r++)n[0][r]="myInput"+r,n[1][r]=z["input"]({shape:t.getClassifierDataset()[r].shape[0],name:n[1][r]}),n[2][r]="myInput"+r+"Dense1",n[3][r]=z["layers"].dense({units:1e3,name:ue[r]}).apply(n[1][r]);o=z["layers"].concatenate({axis:1,name:"myConcatenate1"}).apply(n[3]),s=z["layers"].dense({units:1,name:"myConcatenate1Dense4"}).apply(o),i=z["model"]({inputs:n[1],outputs:s}),i.summary(),t.getClassifierDataset()[0].print(!0),c=0;case 13:if(!(c<a)){e.next=21;break}return e.next=16,t.getClassifierDataset()[c];case 16:u=e.sent,i.layers[c+a].setWeights([u,z["ones"]([1e3])]);case 18:c++,e.next=13;break;case 21:return e.abrupt("return",i);case 22:case"end":return e.stop()}},e)})),he.apply(this,arguments)}function be(e){return ge.apply(this,arguments)}function ge(){return ge=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe(Q);case 2:n=e.sent,n.save("indexeddb://"+t),console.log("Classifier saved");case 5:case"end":return e.stop()}},e)})),ge.apply(this,arguments)}function we(){return ye.apply(this,arguments)}function ye(){return ye=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z["loadModel"]("https://ujoy7851.github.io/Capstone/model/model.json");case 2:for(t=e.sent,n=t.layers.length,a=n-2,r=a/2,o=r;o<a;o++)ce[o-r]=t.layers[o].getWeights()[0],ue[o-r]=t.layers[o].name;Q.dispose(),Q.setClassifierDataset(ce);case 9:case"end":return e.stop()}},e)})),ye.apply(this,arguments)}function xe(e){return _e.apply(this,arguments)}function _e(){return _e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,a,r,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z["loadModel"]("indexeddb://"+t);case 2:for(n=e.sent,a=n.layers.length,r=a-2,o=r/2,s=o;s<r;s++)ce[s-o]=n.layers[s].getWeights()[0],ue[s-o]=n.layers[s].name;Q.dispose(),Q.setClassifierDataset(ce);case 9:case"end":return e.stop()}},e)})),_e.apply(this,arguments)}var ke=de,Ce=n("b0af"),De=n("99d9"),Ve=n("b901"),Oe=n("12b2"),Pe=n("ce7e"),je=n("4bd4"),Re=n("a722"),Se=n("8860"),qe=n("ba95"),Me=n("5d23"),Te=n("2677"),Le=n("f665"),Ee=n("1e6c"),$e=Object(h["a"])(ke,R,S,!1,null,"ccbc80a2",null),Be=$e.exports;g()($e,{VBtn:y["a"],VCard:Ce["a"],VCardActions:De["a"],VCardMedia:Ve["a"],VCardText:De["b"],VCardTitle:Oe["a"],VDivider:Pe["a"],VFlex:B["a"],VForm:je["a"],VLayout:Re["a"],VList:Se["a"],VListTile:qe["a"],VListTileContent:Me["a"],VTextField:Te["a"],VWindow:Le["a"],VWindowItem:Ee["a"]});var Fe,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",[n("v-card",[n("canvas",{attrs:{id:"output",width:"640",height:"480"}})])],1),n("v-flex",{attrs:{"d-flex":""}},[n("LoginCard")],1)],1)},Ae=[],Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("h2",[e._v("Please Sign in to Proceed")])]),n("v-card-text",[n("v-list",[n("v-btn",{attrs:{color:"accent",outline:"",round:""},on:{click:e.loginG}},[e._v("\n                Sign in with Google\n            ")])],1)],1),n("v-card-title",[n("h2",[e._v("Credits")])]),n("v-card-text",[n("div",[e._v("All Icons are made by "),n("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")])])])],1)},ze=[],We={name:"Login",computed:Object(q["a"])({},Object(s["b"])(["user"]),{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{user:function(e){e&&this.$router.replace(this.nextRoute)}},methods:{loginG:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.loginG();case 2:e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){}},Ne=We,Ge=Object(h["a"])(Ne,Ue,ze,!1,null,"22d042b5",null),Ye=Ge.exports;g()(Ge,{VBtn:y["a"],VCard:Ce["a"],VCardText:De["b"],VCardTitle:Oe["a"],VList:Se["a"]});var Ke,Je,He,Xe=640,Qe=480,Ze={components:{LoginCard:Ye},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,et();case 3:Fe=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:Je=document.getElementById("output"),He=Je.getContext("2d"),nt(Fe),chrome.runtime.sendMessage({data:"logout"});case 13:case"end":return e.stop()}},e,null,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}(),destroyed:function(){net.dispose(),Fe.pause(),Fe.srcObject=null,Ke.getTracks().forEach(function(e){e.stop()})}};function et(){return tt.apply(this,arguments)}function tt(){return tt=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return e.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 4:return Ke=e.sent,t=document.createElement("video"),t.height=Qe,t.width=Xe,t.srcObject=Ke,t.play(),e.abrupt("return",t);case 11:case"end":return e.stop()}},e)})),tt.apply(this,arguments)}function nt(e){function t(){return n.apply(this,arguments)}function n(){return n=Object(o["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:He.clearRect(0,0,Xe,Qe),He.save(),He.scale(-1,1),He.translate(-Xe,0),He.drawImage(e,0,0,Xe,Qe),He.restore(),requestAnimationFrame(t);case 7:case"end":return n.stop()}},n)})),n.apply(this,arguments)}t()}var at=Ze,rt=Object(h["a"])(at,Ie,Ae,!1,null,"2bc5e698",null),ot=rt.exports;g()(rt,{VCard:Ce["a"],VFlex:B["a"],VLayout:Re["a"]});var st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("Logout"),n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-title",[n("h2",[e._v("Customize")])]),n("v-card-text",[n("v-list",[n("v-list-tile",{attrs:{ripple:""}},[n("v-list-tile-title",[e._v("\n                            Activate Custom Model\n                        ")]),n("v-list-tile-action",[n("v-switch",{nativeOn:{click:function(t){return e.toggle(t)}},model:{value:e.custom,callback:function(t){e.custom=t},expression:"custom"}})],1)],1)],1)],1)],1)],1),n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{"min-width":"640"}},[n("v-card-title",[n("h2",[e._v("Default Model Setting")])]),n("v-card-text",[n("v-list",e._l(e.details,function(t){return n("v-list-tile",{key:t.name,staticStyle:{"margin-top":"12px"}},[n("v-list-tile-avatar",[n("img",{attrs:{src:t.image}})]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:e._s(t.Description)}})],1),n("v-list-tile-action",[n("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:e.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(n){return e.switchd(t.id-1)}},model:{value:e.defaults[t.id-1],callback:function(n){e.$set(e.defaults,t.id-1,n)},expression:"defaults[item.id - 1]"}})],1)],1)}),1)],1)],1)],1),n("v-flex",{attrs:{"d-flex":""}},[n("v-card",[n("v-card-title",[n("h2",[e._v("Custom Model Setting")])]),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.local,expression:"local"}]},[n("v-list",e._l(e.customd,function(t){return n("v-list-tile",{key:t.id,staticStyle:{"margin-top":"12px"}},[n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{width:"200px"},domProps:{textContent:e._s(t.Description)}})],1),n("v-list-tile-action",[n("v-overflow-btn",{staticStyle:{width:"250px"},attrs:{"background-color":"button",color:"accent",items:e.options,label:"Functions","item-value":"text","single-line":"",clearable:"",dense:"","return-object":""},on:{change:function(n){return e.switchc(t.id-1)}},model:{value:e.customs[t.id-1],callback:function(n){e.$set(e.customs,t.id-1,n)},expression:"customs[item.id - 1]"}})],1)],1)}),1)],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.local,expression:"!local"}]},[e._v("\n                You have not created your own "),n("strong",[e._v("Custom model")]),e._v("!"),n("br"),e._v("\n                PoseKey supports users to make their own unique poses that could be mapped with each functions! "),n("br"),e._v("\n                You can define your own poses in the "),n("strong",[e._v("Custom Model")]),e._v(" settings. "),n("br"),e._v("\n                After you create your own model, you can than connect your poses to trigger web browsing functions."),n("br"),e._v("\n                However, you can change the mapped functions anytime at popup page!\n                "),n("br"),e._v("\n                Click the "),n("strong",[e._v("CUSTOM MODEL")]),e._v(" button in custom model card!\n            ")])],1)],1)],1)},it=[],ct={components:{Logout:I},data:function(){return{customd:[],details:[],options:["volume down","volume up","stop video","forward 10sec","backward 10sec","next video","scroll up","scroll down","previous slide","next slide","go to top","go to bottom","close tab","move tab left","move tab right","close window","zoom-in","zoom-out","zoom-reset","back","forward","reload"],custom:!1,defaults:[],customs:[],local:!1}},methods:{switchd:function(e){void 0==this.defaults[e]&&(this.defaults[e]=null);var t=this.$db.requireDB(),n=i.state.user.uid;t.collection("users").doc(n).collection("model").doc("map").update({defaults:this.defaults}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},switchc:function(e){void 0==this.customs[e]&&(this.customs[e]=null);var t=this.$db.requireDB(),n=i.state.user.uid;t.collection("users").doc(n).collection("model").doc("map").update({customs:this.customs,customd:this.customd}),chrome.runtime.sendMessage({data:"poses",customm:this.custom,defaultsm:this.defaults,customsm:this.customs})},toggle:function(){var e=this.$db.requireDB(),t=i.state.user.uid;this.custom?e.collection("users").doc(t).collection("model").doc("map").update({custom:!0}):e.collection("users").doc(t).collection("model").doc("map").update({custom:!1})}},mounted:function(){var e=this,t=this.$db.requireDB(),n=i.state.user.uid;t.collection("poses").onSnapshot(function(t){var n=t.docChanges();n.forEach(function(t){"added"===t.type&&e.details.push(Object(q["a"])({},t.doc.data(),{id:t.doc.id}))})}),t.collection("users").doc(n).collection("model").doc("map").get().then(function(a){a.exists?(e.defaults=a.data().defaults,e.customs=a.data().customs,e.customd=a.data().customd,e.custom=a.data().custom):(t.collection("users").doc(n).collection("model").doc("map").set({custom:!1,defaults:[null,null,null,null,null,null],customs:[null,null,null,null,null,null],customd:[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}]}),e.defaults=[null,null,null,null,null,null],e.customs=[null,null,null,null,null,null],e.customd=[{Description:"Pose 1",id:1},{Description:"Pose 2",id:2},{Description:"Pose 3",id:3},{Description:"Pose 4",id:4},{Description:"Pose 5",id:5},{Description:"Pose 6",id:6}],e.custom=!1)}),chrome.runtime.sendMessage({data:"login",uidm:n},function(t){e.local=t.localm,e.custom=t.customm})}},ut=ct,lt=n("40fe"),dt=n("c954"),pt=n("de8e"),mt=n("b73d"),vt=Object(h["a"])(ut,st,it,!1,null,"17cc1266",null),ft=vt.exports;g()(vt,{VCard:Ce["a"],VCardText:De["b"],VCardTitle:Oe["a"],VFlex:B["a"],VLayout:Re["a"],VList:Se["a"],VListTile:qe["a"],VListTileAction:lt["a"],VListTileAvatar:dt["a"],VListTileContent:Me["a"],VListTileTitle:Me["b"],VOverflowBtn:pt["a"],VSwitch:mt["a"]});var ht=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("Logout"),n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{"min-width":"640"}},[n("v-card-title",[n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){return[n("h2",e._g({},t.on),[e._v("Setting")])]}}])},[n("span",[e._v("Recommended Settings "),n("br"),e._v("\n                    posenet model: 0.75 "),n("br"),e._v("\n                    image scale: 0.4 "),n("br"),e._v("\n                    frequency: 0.5 "),n("br"),e._v("\n                    accuracy: 0.6\n                ")])])],1),n("v-divider"),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"posenet model","tick-labels":e.ticksLabels,max:3,step:"1",ticks:"always","tick-size":"2","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this will also increase the delay of loading websites."},on:{change:function(t){return e.change()}},model:{value:e.pm,callback:function(t){e.pm=t},expression:"pm"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"image scale",step:"0.01",min:"0.2",max:"1.0","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose better, but this may cause the computer to lag"},on:{change:function(t){return e.change()}},model:{value:e.sc,callback:function(t){e.sc=t},expression:"sc"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"frequency",step:"100",min:"100",max:"1000","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will detect your pose faster, but this might cause the computer to lag."},on:{change:function(t){return e.change()}},model:{value:e.fq,callback:function(t){e.fq=t},expression:"fq"}})],1),n("v-card-text",[n("v-slider",{attrs:{color:"secondary","thumb-color":"accent",label:"Accuracy",min:"50",max:"100",ticks:"always","tick-size":"2",step:"10","thumb-label":"always","persistent-hint":"",hint:"Increasing this value will decrease mis-recognition, but in trade off, it will require the user to show accurate poses."},on:{change:function(t){return e.change()}},model:{value:e.ac,callback:function(t){e.ac=t},expression:"ac"}})],1)],1)],1),n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{"min-width":"640"}},[n("v-card-title",[n("h2",[e._v("Credits")])]),n("v-divider"),n("v-card-text",[n("div",[e._v("All Icons are made by "),n("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")])])])],1)],1)],1)},bt=[],gt={components:{Logout:I},data:function(){return{value:0,ticksLabels:["0.5","0.75","1.0","1.01"],pm:1,sc:.4,fq:500,ac:70}},methods:{change:function(){var e=this.$db.requireDB(),t=i.state.user.uid;e.collection("users").doc(t).collection("model").doc("setting").update({pm:this.pm,sc:this.sc,fq:this.fq,ac:this.ac}),chrome.runtime.sendMessage({data:"setting",pmm:this.pm,scm:this.sc,fqm:this.fq,acm:this.ac})}},mounted:function(){var e=this,t=this.$db.requireDB(),n=i.state.user.uid;t.collection("users").doc(n).collection("model").doc("setting").get().then(function(a){a.exists?(e.pm=a.data().pm,e.sc=a.data().sc,e.fq=a.data().fq,e.ac=a.data().ac):t.collection("users").doc(n).collection("model").doc("setting").set({pm:e.pm,sc:e.sc,fq:e.fq,ac:e.ac})})}},wt=gt,yt=n("ba0d"),xt=n("3a2f"),_t=Object(h["a"])(wt,ht,bt,!1,null,"3836aba0",null),kt=_t.exports;g()(_t,{VCard:Ce["a"],VCardText:De["b"],VCardTitle:Oe["a"],VDivider:Pe["a"],VFlex:B["a"],VLayout:Re["a"],VSlider:yt["a"],VTooltip:xt["a"]}),a["a"].use(j["a"]);var Ct=new j["a"]({routes:[{path:"/login",name:"login",component:ot},{path:"/",name:"train",component:Be,meta:{authRequired:!0}},{path:"/function",name:"function",component:ft,meta:{authRequired:!0}},{path:"/setting",name:"setting",component:kt,meta:{authRequired:!0}}]});Ct.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.authRequired})?i.state.user?n():n({path:"/login",query:{redirect:e.fullPath}}):n()});var Dt=Ct,Vt=n("31bd");n.d(t,"app",function(){return app}),n.d(t,"router",function(){return Dt}),n.d(t,"store",function(){return i}),a["a"].use(d),a["a"].config.productionTip=!1,Object(Vt["sync"])(i,Dt),new a["a"]({router:Dt,store:i,render:function(e){return e(P)}}).$mount("#app")},cbc7:function(e,t,n){"use strict";var a=n("4cb5"),r=n.n(a);r.a}});
//# sourceMappingURL=app.57a729ee.js.map