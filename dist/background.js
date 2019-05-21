// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"background.js":[function(require,module,exports) {
console.log('background running');

let is = null;
let lastTab;
let lastWindow;
let first = false;
let secondImage = "standing-up-man-.png";
let firstImage = "man-celebrating1.png";

//setting values initialized by message from background
//pm = posenet model
//sc = image scale
//fq = frequency
//ac = accuracy
let pm, sc, fq, ac;
/*
 * defaults = 사용자의 기본 모델 기능 맵핑 리스트 
 * customs = 사용자의 커스텀 모델 기능 매핑 리스트
 * custom = 커스텀 모델로 설정 여부
 */
let defaults, customs, custom;

/*
 * login = 로그인 여부, true or false
 * uid = 로그인한 사용자의 uid
 * local = custom 모델 생성 여부
 */

let login,
    uid,
    local = false;

/*
 *
 *
 */
let isDialog = true,
    ri,
    gi,
    bi,
    ti,
    hi,
    vi;

let msg, msg2;

load();
loadS();
//power
function save() {
    if (is == true) chrome.storage.sync.set({
        power: true,
        first: false,
        sets: {
            pm: pm,
            sc: sc,
            fq: fq,
            ac: ac,
            custom: custom, defaults: defaults, customs: customs,
            local: local
        }
    });else chrome.storage.sync.set({
        power: false,
        first: false,
        sets: {
            pmm: pm,
            scm: sc,
            fqm: fq,
            acm: ac,
            custom: custom, defaults: defaults, customs: customs,
            local: local
        } });
}
function load() {
    chrome.storage.sync.get('power', function (data) {
        is = data.power;
        console.log(data.power);
        if (is) chrome.browserAction.setIcon({ path: firstImage });else chrome.browserAction.setIcon({ path: secondImage });
    });
    chrome.storage.sync.get('first', data => {
        if (data.first) first = data.first;else first = true;
    });
    if (first) chrome.tabs.create({ url: "/option/index.html" });
}

function loadS() {
    chrome.storage.sync.get('sets', function (data) {
        // console.log(data);
        if (data.pm) pm = data.pm;else pm = 1;
        if (data.sc) sc = data.sc;else sc = 0.3;
        if (data.fq) fq = data.fq;else fq = 500;
        if (data.ac) ac = data.ac;else ac = 60;
        if (data.custom) custom = data.custom;else custom = false;
        if (data.defaults) defaults = data.defaults;else defaults = [null, null, null, null, null, null];
        if (data.customs) customs = data.customs;else customs = [null, null, null, null, null, null];
        if (data.local) local = data.local;else local = false;
        if (data.isDialog == false) isDialog = data.isDialog;else isDialog = true;
        if (data.ri) ri = data.ri;else ri = 56;
        if (data.gi) gi = data.gi;else gi = 104;
        if (data.bi) bi = data.bi;else bi = 188;
        if (data.ti) ti = data.ti;else ti = 0.3;
        if (data.hi == false) hi = data.hi;else hi = true;
        if (data.vi == false) vi = data.vi;else vi = true;
    });
}
function updateMsg() {
    msg = {
        data: "ON", pmm: pm, scm: sc, fqm: fq, acm: ac, customm: custom, defaultsm: defaults, customsm: customs, uidm: uid,
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi
    };
    msg2 = {
        data: "OFF", pmm: pm, scm: sc, fqm: fq, acm: ac, customm: custom, defaultsm: defaults, customsm: customs, uidm: uid,
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi
    };
}
function updateCurrent() {
    if (is) chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var current = tabs[0].id;
        chrome.tabs.sendMessage(current, msg);
    });else chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var current = tabs[0].id;
        chrome.tabs.sendMessage(current, msg2);
    });
}
// chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.tabs.onUpdated.addListener(onLoad);
chrome.tabs.onCreated.addListener(onLoad);
chrome.tabs.onActivated.addListener(active); //active는 하나밖에 없음
chrome.windows.onFocusChanged.addListener(window);
chrome.runtime.onMessage.addListener(gotMessage);
// chrome.tabs.onHighlighted.addListener(highlight);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
    updateMsg();
    if (message.data == "trigger") {
        if (is === true) {
            is = false;
            updateMsg();
            chrome.browserAction.setIcon({ path: secondImage });
            /* 모든 탭에 OFF하라고 보냄*/
            chrome.tabs.query({}, function (tabs) {
                for (let i = 0; i < tabs.length; i++) {
                    chrome.tabs.sendMessage(tabs[i].id, msg2);
                }
            });
        } else {
            is = true;
            updateMsg();
            chrome.browserAction.setIcon({ path: firstImage });
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var current = tabs[0].id;
                chrome.tabs.sendMessage(current, msg);
            }); // 현재 탭에만 ON하라고 보냄
        }
    } else if (message.data == "?") {}
    // console.log("?");

    // else if(message.data =="ON"){
    //     is = true;
    //     updateMsg();
    //     chrome.browserAction.setIcon({path: firstImage});
    //     chrome.tabs.query({active:true,currentWindow: true},function(tabs){
    //         var current = tabs[0].id;
    //         chrome.tabs.sendMessage(current, msg);
    //     });
    // }
    // else if(message.data =="OFF"){
    //     is = false;
    //     updateMsg();
    //     chrome.browserAction.setIcon({path: secondImage});
    //     /* 모든 탭에 OFF하라고 보냄*/
    //     chrome.tabs.query({}, function(tabs) {
    //         for (let i=0; i<tabs.length; i++) {
    //             chrome.tabs.sendMessage(tabs[i].id, msg);
    //         }
    //     });
    // }
    else if (message.data == "setting") {
            pm = message.pmm;
            sc = message.scm;
            fq = message.fqm;
            ac = message.acm;
            updateMsg();
            updateCurrent();
        } else if (message.data == "poses") {
            custom = message.customm;
            defaults = message.defaultsm;
            customs = message.customsm;
            updateMsg();
            updateCurrent();
        } else if (message.data == "interface") {
            ri = message.rim;
            gi = message.gim;
            bi = message.bim;
            ti = message.tim;
            updateMsg();
            updateCurrent();
        } else if (message.data == "interfaceIO") {
            isDialog = message.isDialogm;
            hi = message.him;
            vi = message.vim;
            updateMsg();
            updateCurrent();
        } else if (message.data == "login") {
            uid = message.uidm;
            updateMsg();
            updateCurrent();
        } else if (message.data == "logout") {
            login = false;
            uid = undefined;
            local = false;
            custom = false;
            updateMsg();
            updateCurrent();
        } else if (message.data == "saveModel") {
            local = true;
            updateMsg();
            updateCurrent();
        }

        //function mapped to poses
        else if (message.data == "close tab") {
                chrome.tabs.query({ currentWindow: true, active: true }, tab => {
                    chrome.tabs.remove(tab[0].id);
                });
            } else if (message.data == "move tab left") {
                chrome.tabs.query({ currentWindow: true, active: true }, tab => {
                    if (tab[0].index > 0) {
                        chrome.tabs.move(tab[0].id, { 'index': tab[0].index - 1 });
                    }
                });
            } else if (message.data == "move tab right") {
                chrome.tabs.query({ currentWindow: true, active: true }, tab => {
                    chrome.tabs.move(tab[0].id, { 'index': tab[0].index + 1 });
                });
            } else if (message.data == "close window") {
                chrome.tabs.query({ currentWindow: true, active: true }, tab => {
                    chrome.windows.remove(tab[0].windowId);
                });
            }
    // else if(message.data == "zoom-in"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.getZoom(tab[0].id, (zoomFactor) => {
    //             // console.log(zoomFactor)
    //             chrome.tabs.setZoom(tab[0].id, zoomFactor + 0.1)
    //         })
    //     })
    // }
    // else if(message.data == "zoom-out"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.getZoom(tab[0].id, (zoomFactor) => {
    //             chrome.tabs.setZoom(tab[0].id, zoomFactor - 0.1)
    //         })
    //     })
    // }
    // else if(message.data == "zoom-reset"){
    //     chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
    //         chrome.tabs.setZoom(tab[0].id, 0)
    //     })     
    // }
    // else if(message.data == "back"){
    //     chrome.tabs.executeScript(null, {'code': 'window.history.back()'})
    // }
    // else if(message.data == "forward"){
    //     chrome.tabs.executeScript(null, {'code': 'window.history.forward()'})    
    // }
    // else if(message.data == "reload"){
    //     chrome.tabs.executeScript(null, {'code': 'window.location.reload()'})   
    // }

    save();
    sendResponse({
        data: is,
        pmm: pm,
        scm: sc,
        fqm: fq,
        acm: ac,
        customm: custom,
        defaultsm: defaults,
        customsm: customs,
        localm: local,
        isDialogm: isDialog,
        rim: ri,
        gim: gi,
        bim: bi,
        tim: ti,
        him: hi,
        vim: vi
    });
}

function onLoad(id) {
    console.log("onLoad!");
    // console.log(id);
    updateMsg();
    if (is == false) {
        msg.data = "OFF";
    }
    save();
    chrome.tabs.sendMessage(id, msg);
}

function active(tab) {
    // console.log("tab changed!");
    // console.log(tab.tabId);
    updateMsg();
    if (is === false) {
        msg.data = "OFF";
    }
    chrome.tabs.query({ active: false }, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, msg2);
        }
    });
    chrome.tabs.sendMessage(tab.tabId, msg);
    save();
}

function window(windowId) {
    updateMsg();
    if (is === false) {
        msg.data = "OFF";
    }
    chrome.tabs.query({ active: false }, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, msg2);
        }
    });

    // console.log("window changed!");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var current = tabs[0].id;
        // console.log(windowId + ", " + current);
        chrome.tabs.sendMessage(current, msg);
        // chrome.tabs.sendMessage(lastTab, msg2);
        lastTab = current;
        // lastWindow=windowId;
    });
    save();
}
},{}],"C:\\Users\\y_jos\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '56295' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\y_jos\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","background.js"], null)
//# sourceMappingURL=/background.map