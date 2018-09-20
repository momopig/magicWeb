webpackJsonp([19],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(42)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(66);
var toPrimitive = __webpack_require__(44);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(134);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(118);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(94);

var _typeof3 = _interopRequireDefault(_typeof2);

var _axios = __webpack_require__(53);

var _axios2 = _interopRequireDefault(_axios);

var _env = __webpack_require__(173);

var _env2 = _interopRequireDefault(_env);

var _semver = __webpack_require__(192);

var _semver2 = _interopRequireDefault(_semver);

var _package = __webpack_require__(205);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {};
util.title = function (title) {
    title = title || '金融知识智能平台';
    window.document.title = title;
};

var ajaxUrl = _env2.default === 'development' ? 'http://127.0.0.1:8888' : _env2.default === 'production' ? 'https://www.url.com' : 'https://debug.url.com';

util.ajax = _axios2.default.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

util.inOf = function (arr, targetArr) {
    var res = true;
    arr.forEach(function (item) {
        if (targetArr.indexOf(item) < 0) {
            res = false;
        }
    });
    return res;
};

util.oneOf = function (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};

util.showThisRoute = function (itAccess, currentAccess) {
    if ((typeof itAccess === 'undefined' ? 'undefined' : (0, _typeof3.default)(itAccess)) === 'object' && Array.isArray(itAccess)) {
        return util.oneOf(currentAccess, itAccess);
    } else {
        return itAccess === currentAccess;
    }
};

util.getRouterObjByName = function (routers, name) {
    if (!name || !routers || !routers.length) {
        return null;
    }
    var routerObj = null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(routers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.name === name) {
                return item;
            }
            routerObj = util.getRouterObjByName(item.children, name);
            if (routerObj) {
                return routerObj;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
};

util.handleTitle = function (vm, item) {
    if ((0, _typeof3.default)(item.title) === 'object') {
        return vm.$t(item.title.i18n);
    } else {
        return item.title;
    }
};

util.setCurrentPath = function (vm, name) {
    var title = '';
    var isOtherRouter = false;
    vm.$store.state.app.routers.forEach(function (item) {
        if (item.children.length === 1) {
            if (item.children[0].name === name) {
                title = util.handleTitle(vm, item);
                if (item.name === 'otherRouter') {
                    isOtherRouter = true;
                }
            }
        } else {
            item.children.forEach(function (child) {
                if (child.name === name) {
                    title = util.handleTitle(vm, child);
                    if (item.name === 'otherRouter') {
                        isOtherRouter = true;
                    }
                }
            });
        }
    });
    var currentPathArr = [];
    if (name === 'home_index') {
        currentPathArr = [{
            title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
            path: '',
            name: 'home_index'
        }];
    } else if ((name.indexOf('_index') >= 0 || isOtherRouter) && name !== 'home_index') {
        currentPathArr = [{
            title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
            path: '/home',
            name: 'home_index'
        }, {
            title: title,
            path: '',
            name: name
        }];
    } else {
        var currentPathObj = vm.$store.state.app.routers.filter(function (item) {
            if (item.children.length <= 1) {
                return item.children[0].name === name;
            } else {
                var i = 0;
                var childArr = item.children;
                var len = childArr.length;
                while (i < len) {
                    if (childArr[i].name === name) {
                        return true;
                    }
                    i++;
                }
                return false;
            }
        })[0];
        if (currentPathObj.children.length <= 1 && currentPathObj.name === 'home') {
            currentPathArr = [{
                title: '首页',
                path: '',
                name: 'home_index'
            }];
        } else if (currentPathObj.children.length <= 1 && currentPathObj.name !== 'home') {
            currentPathArr = [{
                title: '首页',
                path: '/home',
                name: 'home_index'
            }, {
                title: currentPathObj.title,
                path: '',
                name: name
            }];
        } else {
            var childObj = currentPathObj.children.filter(function (child) {
                return child.name === name;
            })[0];
            currentPathArr = [{
                title: '首页',
                path: '/home',
                name: 'home_index'
            }, {
                title: currentPathObj.title,
                path: '',
                name: currentPathObj.name
            }, {
                title: childObj.title,
                path: currentPathObj.path + '/' + childObj.path,
                name: name
            }];
        }
    }
    vm.$store.commit('setCurrentPath', currentPathArr);

    return currentPathArr;
};

util.openNewPage = function (vm, name, argu, query) {};

util.toDefaultPage = function (routers, name, route, next) {
    var len = routers.length;
    var i = 0;
    var notHandle = true;
    while (i < len) {
        if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            });
            notHandle = false;
            next();
            break;
        }
        i++;
    }
    if (notHandle) {
        next();
    }
};

util.fullscreenEvent = function (vm) {
    vm.$store.commit('initCachepage');

    vm.$store.commit('updateMenulist');
};

util.checkUpdate = function (vm) {
    _axios2.default.get('https://api.github.com/repos/iview/iview-admin/releases/latest').then(function (res) {
        var version = res.data.tag_name;
        vm.$Notice.config({
            duration: 0
        });
        if (_semver2.default.lt(_package2.default.version, version)) {
            vm.$Notice.info({
                title: 'iview-admin更新啦',
                desc: '<p>iView-admin更新到了' + version + '了，去看看有哪些变化吧</p><a style="font-size:13px;" href="https://github.com/iview/iview-admin/releases" target="_blank">前往github查看</a>'
            });
        }
    });
};

exports.default = util;

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(117);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routers = exports.appRouter = exports.otherRouter = exports.locking = exports.preview = exports.page500 = exports.page403 = exports.page404 = exports.loginRouter = undefined;

var _index = __webpack_require__(197);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRouter = exports.loginRouter = {
    path: '/login',
    name: 'login',
    redirect: '/intelligence/nav',
    meta: {
        title: 'Login - 登录'
    },
    component: function component() {
        return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 214));
    }
};

var page404 = exports.page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: function component() {
        return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 207));
    }
};

var page403 = exports.page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: function component() {
        return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 206));
    }
};

var page500 = exports.page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: function component() {
        return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 208));
    }
};

var preview = exports.preview = {
    path: '/preview',
    name: 'preview',
    component: function component() {
        return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 212));
    }
};

var locking = exports.locking = {
    path: '/locking',
    name: 'locking',
    component: function component() {
        return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 217));
    }
};

var otherRouter = exports.otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/intelligence/nav',
    component: _index2.default,
    children: [{ path: 'home', title: { i18n: 'home' }, name: 'home_index', component: function component() {
            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 213));
        } }, { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: function component() {
            return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 224));
        } }, { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: function component() {
            return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 209));
        } }, { path: 'shopping', title: '购物详情', name: 'shopping', component: function component() {
            return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 210));
        } }, { path: 'message', title: '消息中心', name: 'message_index', component: function component() {
            return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 223));
        } }]
};

var appRouter = exports.appRouter = [{
    path: '/magic',
    icon: 'android-checkbox',
    name: 'magic',
    title: '魔法页面',
    component: _index2.default,
    children: [{ path: 'template-list', title: '移动端-首页模版列表', name: 'list', icon: 'compose', component: function component() {
            return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 216));
        } }, { path: 'template-create-edit', title: '移动端-首页模版设置', name: 'create-edit', icon: 'compose', component: function component() {
            return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 215));
        } }]
}, {
    path: '/intelligence',
    icon: '',
    name: 'intelligence',
    title: 'intelligence',
    component: _index2.default,
    children: [{ path: 'nav', title: '导航页', name: 'nav', component: function component() {
            return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 220));
        } }, { path: 'search', title: '搜索页', name: 'search', component: function component() {
            return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 222));
        } }, { path: 'result', title: '结果页', name: 'result', component: function component() {
            return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 221));
        } }, { path: 'detail', title: '详情页', name: 'detail', component: function component() {
            return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 218));
        } }, { path: 'forecast', title: '预测页', name: 'forecast', component: function component() {
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 219));
        } }]
}, {
    path: '/error-page',
    icon: 'android-sad',
    title: '错误页面',
    name: 'errorpage',
    component: _index2.default,
    children: [{ path: 'index', title: '错误页面', name: 'errorpage_index', component: function component() {
            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 211));
        } }]
}];

var routers = exports.routers = [loginRouter, otherRouter, preview, locking].concat(appRouter, [page500, page403, page404]);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(201)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(6);
var ctx = __webpack_require__(64);
var hide = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(71);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(37);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(145)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(67)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(5)))

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            theme: this.$store.state.app.themeColor
        };
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    methods: {}
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'commonHeader',
    data: function data() {
        return {
            imgUrl: ""
        };
    },

    computed: {},
    methods: {},
    watch: {},
    mounted: function mounted() {},
    created: function created() {
        this.imgUrl = __webpack_require__(195);
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(196);

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__(18);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        commonHeader: _index2.default
    }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(127);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(65)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(72);
var hide = __webpack_require__(11);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(138);
var setToStringTag = __webpack_require__(40);
var getPrototypeOf = __webpack_require__(144);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(96);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(65)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(133).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(71);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(129)(false);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(43);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(130);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var global = __webpack_require__(3);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.router = undefined;

var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _iview = __webpack_require__(19);

var _iview2 = _interopRequireDefault(_iview);

var _util = __webpack_require__(18);

var _util2 = _interopRequireDefault(_util);

var _vueRouter = __webpack_require__(54);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _jsCookie = __webpack_require__(14);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _router = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var RouterConfig = {
    routes: _router.routers
};

var router = exports.router = new _vueRouter2.default(RouterConfig);

router.beforeEach(function (to, from, next) {
    _util2.default.toDefaultPage([].concat((0, _toConsumableArray3.default)(_router.routers)), to.name, router, next);
});

router.afterEach(function (to) {});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(55);

var _vuex2 = _interopRequireDefault(_vuex);

var _app = __webpack_require__(175);

var _app2 = _interopRequireDefault(_app);

var _user = __webpack_require__(176);

var _user2 = _interopRequireDefault(_user);

var _es6Promise = __webpack_require__(51);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();
_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        app: _app2.default,
        user: _user2.default
    }
});

exports.default = store;

/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(203);
module.exports = self.fetch.bind(self);


/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueECharts=e()}(this,function(){"use strict";function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function e(t){if(null==t||"object"!=typeof t)return t;var i=t,n=eu.call(t);if("[object Array]"===n){if(!h(t)){i=[];for(var a=0,r=t.length;a<r;a++)i[a]=e(t[a])}}else if(tu[n]){if(!h(t)){var o=t.constructor;if(t.constructor.from)i=o.from(t);else{i=new o(t.length);for(var a=0,r=t.length;a<r;a++)i[a]=e(t[a])}}}else if(!Ql[n]&&!h(t)&&!u(t)){i={};for(var s in t)t.hasOwnProperty(s)&&(i[s]=e(t[s]))}return i}function i(t,n,a){if(!s(n)||!s(t))return a?e(n):t;for(var r in n)if(n.hasOwnProperty(r)){var c=t[r],d=n[r];!s(d)||!s(c)||o(d)||o(c)||u(d)||u(c)||l(d)||l(c)||h(d)||h(c)?!a&&r in t||(t[r]=e(n[r])):i(c,d,a)}return t}function n(t,e,i){for(var n in e)e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function a(t,e,i){if(t&&e)if(t.forEach&&t.forEach===nu)t.forEach(e,i);else if(t.length===+t.length)for(var n=0,a=t.length;n<a;n++)e.call(i,t[n],n,t);else for(var r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function r(t,e){var i=ru.call(arguments,2);return function(){return t.apply(e,i.concat(ru.call(arguments)))}}function o(t){return"[object Array]"===eu.call(t)}function s(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function l(t){return!!Ql[eu.call(t)]}function u(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function h(t){return t[cu]}function c(t){function e(t,e){i?n.set(t,e):n.set(e,t)}var i=o(t),n=this;t instanceof c?t.each(e):t&&a(t,e)}function d(t){return Math.sqrt(f(t))}function f(t){return t[0]*t[0]+t[1]*t[1]}function p(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function g(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function m(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function v(t,e){return{target:t,topTarget:e&&e.topTarget}}function y(){}function x(){var t=new Su(6);return _(t),t}function _(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function b(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function w(t){return t>Au||t<-Au}function S(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function M(t){return(t=Math.round(t))<0?0:t>255?255:t}function I(t){return t<0?0:t>1?1:t}function A(t){return M(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function T(t){return I(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function D(t,e,i){return i<0?i+=1:i>1&&(i-=1),6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}function C(t,e,i){return t+(e-t)*i}function L(t,e,i,n,a){return t[0]=e,t[1]=i,t[2]=n,t[3]=a,t}function P(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function k(t,e){Fu&&P(Fu,e),Fu=Hu.put(t,Fu||e.slice())}function O(t,e){if(t){e=e||[];var i=Hu.get(t);if(i)return P(e,i);var n=(t+="").replace(/ /g,"").toLowerCase();if(n in Gu)return P(e,Gu[n]),k(t,e),e;if("#"!==n.charAt(0)){var a=n.indexOf("("),r=n.indexOf(")");if(-1!==a&&r+1===n.length){var o=n.substr(0,a),s=n.substr(a+1,r-(a+1)).split(","),l=1;switch(o){case"rgba":if(4!==s.length)return void L(e,0,0,0,1);l=T(s.pop());case"rgb":return 3!==s.length?void L(e,0,0,0,1):(L(e,A(s[0]),A(s[1]),A(s[2]),l),k(t,e),e);case"hsla":return 4!==s.length?void L(e,0,0,0,1):(s[3]=T(s[3]),R(s,e),k(t,e),e);case"hsl":return 3!==s.length?void L(e,0,0,0,1):(R(s,e),k(t,e),e);default:return}}L(e,0,0,0,1)}else{if(4===n.length){return(u=parseInt(n.substr(1),16))>=0&&u<=4095?(L(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),k(t,e),e):void L(e,0,0,0,1)}if(7===n.length){var u=parseInt(n.substr(1),16);return u>=0&&u<=16777215?(L(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),k(t,e),e):void L(e,0,0,0,1)}}}}function R(t,e){var i=(parseFloat(t[0])%360+360)%360/360,n=T(t[1]),a=T(t[2]),r=a<=.5?a*(n+1):a+n-a*n,o=2*a-r;return e=e||[],L(e,M(255*D(o,r,i+1/3)),M(255*D(o,r,i)),M(255*D(o,r,i-1/3)),1),4===t.length&&(e[3]=t[3]),e}function N(t,e,i){if(e&&e.length&&t>=0&&t<=1){i=i||[];var n=t*(e.length-1),a=Math.floor(n),r=Math.ceil(n),o=e[a],s=e[r],l=n-a;return i[0]=M(C(o[0],s[0],l)),i[1]=M(C(o[1],s[1],l)),i[2]=M(C(o[2],s[2],l)),i[3]=I(C(o[3],s[3],l)),i}}function E(t,e,i){if(e&&e.length&&t>=0&&t<=1){var n=t*(e.length-1),a=Math.floor(n),r=Math.ceil(n),o=O(e[a]),s=O(e[r]),l=n-a,u=z([M(C(o[0],s[0],l)),M(C(o[1],s[1],l)),M(C(o[2],s[2],l)),I(C(o[3],s[3],l))],"rgba");return i?{color:u,leftIndex:a,rightIndex:r,value:n}:u}}function z(t,e){if(t&&t.length){var i=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(i+=","+t[3]),e+"("+i+")"}}function V(t,e,i){return(e-t)*i+t}function B(t,e,i){return i>.5?e:t}function G(t,e,i,n,a){var r=t.length;if(1==a)for(s=0;s<r;s++)n[s]=V(t[s],e[s],i);else for(var o=r&&t[0].length,s=0;s<r;s++)for(var l=0;l<o;l++)n[s][l]=V(t[s][l],e[s][l],i)}function H(t,e,i){var n=t.length,a=e.length;if(n!==a){if(n>a)t.length=a;else for(o=n;o<a;o++)t.push(1===i?e[o]:Zu.call(e[o]))}for(var r=t[0]&&t[0].length,o=0;o<t.length;o++)if(1===i)isNaN(t[o])&&(t[o]=e[o]);else for(var s=0;s<r;s++)isNaN(t[o][s])&&(t[o][s]=e[o][s])}function F(t,e,i,n,a,r,o,s,l){var u=t.length;if(1==l)for(c=0;c<u;c++)s[c]=W(t[c],e[c],i[c],n[c],a,r,o);else for(var h=t[0].length,c=0;c<u;c++)for(var d=0;d<h;d++)s[c][d]=W(t[c][d],e[c][d],i[c][d],n[c][d],a,r,o)}function W(t,e,i,n,a,r,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*r+s*a+e}function U(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Z(t,e,i,n){i<0&&(t+=i,i=-i),n<0&&(e+=n,n=-n),this.x=t,this.y=e,this.width=i,this.height=n}function j(t,e,i,n){var a=e+1;if(a===i)return 1;if(n(t[a++],t[e])<0){for(;a<i&&n(t[a],t[a-1])<0;)a++;!function(t,e,i){i--;for(;e<i;){var n=t[e];t[e++]=t[i],t[i--]=n}}(t,e,a)}else for(;a<i&&n(t[a],t[a-1])>=0;)a++;return a-e}function Y(t,e,i,n,a){for(n===e&&n++;n<i;n++){for(var r,o=t[n],s=e,l=n;s<l;)a(o,t[r=s+l>>>1])<0?l=r:s=r+1;var u=n-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function X(t,e,i,n,a,r){var o=0,s=0,l=1;if(r(t,e[i+a])>0){for(s=n-a;l<s&&r(t,e[i+a+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=a,l+=a}else{for(s=a+1;l<s&&r(t,e[i+a-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=a-l,l=a-u}for(o++;o<l;){var h=o+(l-o>>>1);r(t,e[i+h])>0?o=h+1:l=h}return l}function q(t,e,i,n,a,r){var o=0,s=0,l=1;if(r(t,e[i+a])<0){for(s=a+1;l<s&&r(t,e[i+a-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=a-l,l=a-u}else{for(s=n-a;l<s&&r(t,e[i+a+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=a,l+=a}for(o++;o<l;){var h=o+(l-o>>>1);r(t,e[i+h])<0?l=h:o=h+1}return l}function $(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function K(t,e,i){var n=du.createCanvas(),a=e.getWidth(),r=e.getHeight(),o=n.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=a+"px",o.height=r+"px",n.setAttribute("data-zr-dom-id",t)),n.width=a*i,n.height=r*i,n}function J(t){return t&&t.width&&t.height}function Q(t,e){var i=t+":"+(e=e||Uh);if(Gh[i])return Gh[i];for(var n=(t+"").split("\n"),a=0,r=0,o=n.length;r<o;r++)a=Math.max(ot(n[r],e).width,a);return Hh>Fh&&(Hh=0,Gh={}),Hh++,Gh[i]=a,a}function tt(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function et(t,e,i){return"middle"===i?t-=e/2:"bottom"===i&&(t-=e),t}function it(t,e,i,n,a){if(!e)return"";var r=(t+"").split("\n");a=nt(e,i,n,a);for(var o=0,s=r.length;o<s;o++)r[o]=at(r[o],a);return r.join("\n")}function nt(t,e,i,n){(n=Eh({},n)).font=e;i=zh(i,"...");n.maxIterations=zh(n.maxIterations,2);var a=n.minChar=zh(n.minChar,0);n.cnCharWidth=Q("国",e);var r=n.ascCharWidth=Q("a",e);n.placeholder=zh(n.placeholder,"");for(var o=t=Math.max(0,t-1),s=0;s<a&&o>=r;s++)o-=r;var l=Q(i);return l>o&&(i="",l=0),o=t-l,n.ellipsis=i,n.ellipsisWidth=l,n.contentWidth=o,n.containerWidth=t,n}function at(t,e){var i=e.containerWidth,n=e.font,a=e.contentWidth;if(!i)return"";var r=Q(t,n);if(r<=i)return t;for(var o=0;;o++){if(r<=a||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?function(t,e,i,n){for(var a=0,r=0,o=t.length;r<o&&a<e;r++){var s=t.charCodeAt(r);a+=0<=s&&s<=127?i:n}return r}(t,a,e.ascCharWidth,e.cnCharWidth):r>0?Math.floor(t.length*a/r):0;r=Q(t=t.substr(0,s),n)}return""===t&&(t=e.placeholder),t}function rt(t){return Q("国",t)}function ot(t,e){return Zh.measureText(t,e)}function st(t,e,i,n){null!=t&&(t+="");var a=rt(e),r=t?t.split("\n"):[],o=r.length*a,s=o;if(i&&(s+=i[0]+i[2]),t&&n){var l=n.outerHeight,u=n.outerWidth;if(null!=l&&s>l)t="",r=[];else if(null!=u)for(var h=nt(u-(i?i[1]+i[3]:0),e,n.ellipsis,{minChar:n.minChar,placeholder:n.placeholder}),c=0,d=r.length;c<d;c++)r[c]=at(r[c],h)}return{lines:r,height:o,outerHeight:s,lineHeight:a}}function lt(t,e){var i={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return i;for(var n,a=Wh.lastIndex=0;null!=(n=Wh.exec(t));){var r=n.index;r>a&&ut(i,t.substring(a,r)),ut(i,n[2],n[1]),a=Wh.lastIndex}a<t.length&&ut(i,t.substring(a,t.length));var o=i.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;h&&(null!=d&&(d-=h[1]+h[3]),null!=f&&(f-=h[0]+h[2]));for(D=0;D<o.length;D++){for(var p=o[D],g=0,m=0,v=0;v<p.tokens.length;v++){var y=(C=p.tokens[v]).styleName&&e.rich[C.styleName]||{},x=C.textPadding=y.textPadding,_=C.font=y.font||e.font,b=C.textHeight=zh(y.textHeight,rt(_));if(x&&(b+=x[0]+x[2]),C.height=b,C.lineHeight=Vh(y.textLineHeight,e.textLineHeight,b),C.textAlign=y&&y.textAlign||e.textAlign,C.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+C.lineHeight>f)return{lines:[],width:0,height:0};C.textWidth=Q(C.text,_);var w=y.textWidth,S=null==w||"auto"===w;if("string"==typeof w&&"%"===w.charAt(w.length-1))C.percentWidth=w,u.push(C),w=0;else{if(S){w=C.textWidth;var M=y.textBackgroundColor,I=M&&M.image;I&&(I=Rh.findExistImage(I),Rh.isImageReady(I)&&(w=Math.max(w,I.width*b/I.height)))}var A=x?x[1]+x[3]:0;w+=A;var T=null!=d?d-m:null;null!=T&&T<w&&(!S||T<A?(C.text="",C.textWidth=w=0):(C.text=it(C.text,T-A,_,c.ellipsis,{minChar:c.minChar}),C.textWidth=Q(C.text,_),w=C.textWidth+A))}m+=C.width=w,y&&(g=Math.max(g,C.lineHeight))}p.width=m,p.lineHeight=g,s+=g,l=Math.max(l,m)}i.outerWidth=i.width=zh(e.textWidth,l),i.outerHeight=i.height=zh(e.textHeight,s),h&&(i.outerWidth+=h[1]+h[3],i.outerHeight+=h[0]+h[2]);for(var D=0;D<u.length;D++){var C=u[D],L=C.percentWidth;C.width=parseInt(L,10)/100*l}return i}function ut(t,e,i){for(var n=""===e,a=e.split("\n"),r=t.lines,o=0;o<a.length;o++){var s=a[o],l={styleName:i,text:s,isLineHolder:!s&&!n};if(o)r.push({tokens:[l]});else{var u=(r[r.length-1]||(r[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||n)&&u.push(l)}}}function ht(t){if(t){t.font=jh.makeFont(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||tc[e]?e:"left";var i=t.textVerticalAlign||t.textBaseline;"center"===i&&(i="middle"),t.textVerticalAlign=null==i||ec[i]?i:"top";t.textPadding&&(t.textPadding=Kh(t.textPadding))}}function ct(t,e,i,n,a){if(i&&e.textRotation){var r=e.textOrigin;"center"===r?(n=i.width/2+i.x,a=i.height/2+i.y):r&&(n=r[0]+i.x,a=r[1]+i.y),t.translate(n,a),t.rotate(-e.textRotation),t.translate(-n,-a)}}function dt(t,e,i,n,a,r,o,s){var l=n.rich[i.styleName]||{},u=i.textVerticalAlign,h=r+a/2;"top"===u?h=r+i.height/2:"bottom"===u&&(h=r+a-i.height/2),!i.isLineHolder&&ft(l)&&pt(t,e,l,"right"===s?o-i.width:"center"===s?o-i.width/2:o,h-i.height/2,i.width,i.height);var c=i.textPadding;c&&(o=_t(o,s,c),h-=i.height/2-c[2]-i.textHeight/2),mt(e,"shadowBlur",qh(l.textShadowBlur,n.textShadowBlur,0)),mt(e,"shadowColor",l.textShadowColor||n.textShadowColor||"transparent"),mt(e,"shadowOffsetX",qh(l.textShadowOffsetX,n.textShadowOffsetX,0)),mt(e,"shadowOffsetY",qh(l.textShadowOffsetY,n.textShadowOffsetY,0)),mt(e,"textAlign",s),mt(e,"textBaseline","middle"),mt(e,"font",i.font||jh.DEFAULT_FONT);var d=vt(l.textStroke||n.textStroke,p),f=yt(l.textFill||n.textFill),p=Xh(l.textStrokeWidth,n.textStrokeWidth);d&&(mt(e,"lineWidth",p),mt(e,"strokeStyle",d),e.strokeText(i.text,o,h)),f&&(mt(e,"fillStyle",f),e.fillText(i.text,o,h))}function ft(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function pt(t,e,i,n,a,r,o){var s=i.textBackgroundColor,l=i.textBorderWidth,u=i.textBorderColor,h=Jh(s);if(mt(e,"shadowBlur",i.textBoxShadowBlur||0),mt(e,"shadowColor",i.textBoxShadowColor||"transparent"),mt(e,"shadowOffsetX",i.textBoxShadowOffsetX||0),mt(e,"shadowOffsetY",i.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=i.textBorderRadius;c?Yh.buildPath(e,{x:n,y:a,width:r,height:o,r:c}):e.rect(n,a,r,o),e.closePath()}if(h)mt(e,"fillStyle",s),e.fill();else if(Qh(s)){var d=s.image;(d=Rh.createOrUpdateImage(d,null,t,function(t,e){e.image=t},s))&&Rh.isImageReady(d)&&e.drawImage(d,n,a,r,o)}l&&u&&(mt(e,"lineWidth",l),mt(e,"strokeStyle",u),e.stroke())}function gt(t,e,i){var n=e.x||0,a=e.y||0,r=e.textAlign,o=e.textVerticalAlign;if(i){var s=e.textPosition;if(s instanceof Array)n=i.x+xt(s[0],i.width),a=i.y+xt(s[1],i.height);else{var l=jh.adjustTextPositionOnRect(s,i,e.textDistance);n=l.x,a=l.y,r=r||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset;u&&(n+=u[0],a+=u[1])}return{baseX:n,baseY:a,textAlign:r,textVerticalAlign:o}}function mt(t,e,i){return t[e]=_h(t,e,i),t[e]}function vt(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function yt(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function xt(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function _t(t,e,i){return"right"===e?t-i[1]:"center"===e?t+i[3]/2-i[1]/2:t+i[3]}function bt(t){t=t||{},sh.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new Ah(t.style,this),this._rect=null,this.__clipPaths=[]}function wt(t){oc.call(this,t)}function St(t){return parseInt(t,10)}function Mt(t,e,i,n){return i=i||{},n||!Jl.canvasSupported?It(t,e,i):Jl.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(i.zrX=e.layerX,i.zrY=e.layerY):null!=e.offsetX?(i.zrX=e.offsetX,i.zrY=e.offsetY):It(t,e,i),i}function It(t,e,i){var n=function(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}(t);i.zrX=e.clientX-n.left,i.zrY=e.clientY-n.top}function At(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i)}function Tt(t){return"mousewheel"===t&&Jl.browser.firefox?"DOMMouseScroll":t}function Dt(t,e,i){var n=t._gestureMgr;"start"===i&&n.clear();var a=n.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===i&&n.clear(),a){var r=a.type;e.gestureEvent=r,t.handler.dispatchToElement({target:a.target},r,a.event)}}function Ct(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function Lt(t){var e=t.pointerType;return"pen"===e||"touch"===e}function Pt(t){function e(e,i){du.each(e,function(e){Sc(t,Tt(e),i._handlers[e])},i)}yu.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new wc,this._handlers={},function(t){du.each(Tc,function(e){t._handlers[e]=du.bind(Lc[e],t)}),du.each(Cc,function(e){t._handlers[e]=du.bind(Lc[e],t)}),du.each(Ac,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(Lc[e],t)})}(this),Jl.pointerEventsSupported?e(Cc,this):(Jl.touchEventsSupported&&e(Tc,this),e(Ac,this))}function kt(t){return t instanceof Array?t:null==t?[]:[t]}function Ot(t){return Bc(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Rt(t,e){return t&&t.hasOwnProperty(e)}function Nt(t){var e={main:"",sub:""};return t&&(t=t.split(Uc),e.main=t[0]||"",e.sub=t[1]||""),e}function Et(t){return t>-nd&&t<nd}function zt(t){return t>nd||t<-nd}function Vt(t,e,i,n,a){var r=1-a;return r*r*(r*t+3*a*e)+a*a*(a*n+3*r*i)}function Bt(t,e,i,n){var a=1-n;return a*(a*t+2*n*e)+n*n*i}function Gt(t,e,i,n,a){for(var r=0,o=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===Xd.M&&h>1&&(i||(r+=jd(o,s,l,u,n,a))),1==h&&(l=o=t[h],u=s=t[h+1]),c){case Xd.M:o=l=t[h++],s=u=t[h++];break;case Xd.L:if(i){if(zd.containStroke(o,s,t[h],t[h+1],e,n,a))return!0}else r+=jd(o,s,t[h],t[h+1],n,a)||0;o=t[h++],s=t[h++];break;case Xd.C:if(i){if(Vd.containStroke(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,n,a))return!0}else r+=function(t,e,i,n,a,r,o,s,l,u){if(u>e&&u>n&&u>r&&u>s||u<e&&u<n&&u<r&&u<s)return 0;var h=hd.cubicRootAt(e,n,r,s,u,Kd);if(0===h)return 0;for(var c,d,f=0,p=-1,g=0;g<h;g++){var m=Kd[g],v=0===m||1===m?.5:1;hd.cubicAt(t,i,a,o,m)<l||(p<0&&(p=hd.cubicExtrema(e,n,r,s,Jd),Jd[1]<Jd[0]&&p>1&&function(){var t=Jd[0];Jd[0]=Jd[1],Jd[1]=t}(),c=hd.cubicAt(e,n,r,s,Jd[0]),p>1&&(d=hd.cubicAt(e,n,r,s,Jd[1]))),2==p?m<Jd[0]?f+=c<e?v:-v:m<Jd[1]?f+=d<c?v:-v:f+=s<d?v:-v:m<Jd[0]?f+=c<e?v:-v:f+=s<c?v:-v)}return f}(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],n,a)||0;o=t[h++],s=t[h++];break;case Xd.Q:if(i){if(Gd.containStroke(o,s,t[h++],t[h++],t[h],t[h+1],e,n,a))return!0}else r+=function(t,e,i,n,a,r,o,s){if(s>e&&s>n&&s>r||s<e&&s<n&&s<r)return 0;var l=hd.quadraticRootAt(e,n,r,s,Kd);if(0===l)return 0;var u=hd.quadraticExtremum(e,n,r);if(u>=0&&u<=1){for(var h=0,c=hd.quadraticAt(e,n,r,u),d=0;d<l;d++)f=0===Kd[d]||1===Kd[d]?.5:1,(p=hd.quadraticAt(t,i,a,Kd[d]))<o||(Kd[d]<u?h+=c<e?f:-f:h+=r<c?f:-f);return h}var f=0===Kd[0]||1===Kd[0]?.5:1,p=hd.quadraticAt(t,i,a,Kd[0]);return p<o?0:r<e?f:-f}(o,s,t[h++],t[h++],t[h],t[h+1],n,a)||0;o=t[h++],s=t[h++];break;case Xd.A:var d=t[h++],f=t[h++],p=t[h++],g=t[h++],m=t[h++],v=t[h++],y=(t[h++],1-t[h++]),x=Math.cos(m)*p+d,_=Math.sin(m)*g+f;h>1?r+=jd(o,s,x,_,n,a):(l=x,u=_);var b=(n-d)*g/p+d;if(i){if(Zd.containStroke(d,f,g,m,m+v,y,e,b,a))return!0}else r+=function(t,e,i,n,a,r,o,s){if((s-=e)>i||s<-i)return 0;u=Math.sqrt(i*i-s*s),Kd[0]=-u,Kd[1]=u;var l=Math.abs(n-a);if(l<1e-4)return 0;if(l%qd<1e-4)return n=0,a=qd,p=r?1:-1,o>=Kd[0]+t&&o<=Kd[1]+t?p:0;if(r){var u=n;n=Yd(a),a=Yd(u)}else n=Yd(n),a=Yd(a);n>a&&(a+=qd);for(var h=0,c=0;c<2;c++){var d=Kd[c];if(d+t>o){var f=Math.atan2(s,d),p=r?1:-1;f<0&&(f=qd+f),(f>=n&&f<=a||f+qd>=n&&f+qd<=a)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),h+=p)}}return h}(d,f,g,m,m+v,y,b,a);o=Math.cos(m+v)*p+d,s=Math.sin(m+v)*g+f;break;case Xd.R:l=o=t[h++],u=s=t[h++];var x=l+t[h++],_=u+t[h++];if(i){if(zd.containStroke(l,u,x,u,e,n,a)||zd.containStroke(x,u,x,_,e,n,a)||zd.containStroke(x,_,l,_,e,n,a)||zd.containStroke(l,_,l,u,e,n,a))return!0}else r+=jd(x,u,x,_,n,a),r+=jd(l,_,l,u,n,a);break;case Xd.Z:if(i){if(zd.containStroke(o,s,l,u,e,n,a))return!0}else r+=jd(o,s,l,u,n,a);o=l,s=u}}return i||function(t,e){return Math.abs(t-e)<$d}(s,u)||(r+=jd(o,s,l,u,n,a)||0),0!==r}function Ht(t){oc.call(this,t),this.path=null}function Ft(t,e,i,n,a,r,o,s,l,u,h){var c=l*(gf/180),d=pf(c)*(t-i)/2+ff(c)*(e-n)/2,f=-1*ff(c)*(t-i)/2+pf(c)*(e-n)/2,p=d*d/(o*o)+f*f/(s*s);p>1&&(o*=df(p),s*=df(p));var g=(a===r?-1:1)*df((o*o*(s*s)-o*o*(f*f)-s*s*(d*d))/(o*o*(f*f)+s*s*(d*d)))||0,m=g*o*f/s,v=g*-s*d/o,y=(t+i)/2+pf(c)*m-ff(c)*v,x=(e+n)/2+ff(c)*m+pf(c)*v,_=yf([1,0],[(d-m)/o,(f-v)/s]),b=[(d-m)/o,(f-v)/s],w=[(-1*d-m)/o,(-1*f-v)/s],S=yf(b,w);vf(b,w)<=-1&&(S=gf),vf(b,w)>=1&&(S=0),0===r&&S>0&&(S-=2*gf),1===r&&S<0&&(S+=2*gf),h.addData(u,y,x,o,s,_,S,c,r)}function Wt(t,e){var i=function(t){if(!t)return[];var e,i=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<cf.length;e++)i=i.replace(new RegExp(cf[e],"g"),"|"+cf[e]);var n,a=i.split("|"),r=0,o=0,s=new Ed,l=Ed.CMD;for(e=1;e<a.length;e++){var u,h=a[e],c=h.charAt(0),d=0,f=h.slice(1).replace(/e,-/g,"e-").split(",");f.length>0&&""===f[0]&&f.shift();for(var p=0;p<f.length;p++)f[p]=parseFloat(f[p]);for(;d<f.length&&!isNaN(f[d])&&!isNaN(f[0]);){var g,m,v,y,x,_,b,w=r,S=o;switch(c){case"l":r+=f[d++],o+=f[d++],u=l.L,s.addData(u,r,o);break;case"L":r=f[d++],o=f[d++],u=l.L,s.addData(u,r,o);break;case"m":r+=f[d++],o+=f[d++],u=l.M,s.addData(u,r,o),c="l";break;case"M":r=f[d++],o=f[d++],u=l.M,s.addData(u,r,o),c="L";break;case"h":r+=f[d++],u=l.L,s.addData(u,r,o);break;case"H":r=f[d++],u=l.L,s.addData(u,r,o);break;case"v":o+=f[d++],u=l.L,s.addData(u,r,o);break;case"V":o=f[d++],u=l.L,s.addData(u,r,o);break;case"C":u=l.C,s.addData(u,f[d++],f[d++],f[d++],f[d++],f[d++],f[d++]),r=f[d-2],o=f[d-1];break;case"c":u=l.C,s.addData(u,f[d++]+r,f[d++]+o,f[d++]+r,f[d++]+o,f[d++]+r,f[d++]+o),r+=f[d-2],o+=f[d-1];break;case"S":g=r,m=o;var M=s.len(),I=s.data;n===l.C&&(g+=r-I[M-4],m+=o-I[M-3]),u=l.C,w=f[d++],S=f[d++],r=f[d++],o=f[d++],s.addData(u,g,m,w,S,r,o);break;case"s":g=r,m=o;var M=s.len(),I=s.data;n===l.C&&(g+=r-I[M-4],m+=o-I[M-3]),u=l.C,w=r+f[d++],S=o+f[d++],r+=f[d++],o+=f[d++],s.addData(u,g,m,w,S,r,o);break;case"Q":w=f[d++],S=f[d++],r=f[d++],o=f[d++],u=l.Q,s.addData(u,w,S,r,o);break;case"q":w=f[d++]+r,S=f[d++]+o,r+=f[d++],o+=f[d++],u=l.Q,s.addData(u,w,S,r,o);break;case"T":g=r,m=o;var M=s.len(),I=s.data;n===l.Q&&(g+=r-I[M-4],m+=o-I[M-3]),r=f[d++],o=f[d++],u=l.Q,s.addData(u,g,m,r,o);break;case"t":g=r,m=o;var M=s.len(),I=s.data;n===l.Q&&(g+=r-I[M-4],m+=o-I[M-3]),r+=f[d++],o+=f[d++],u=l.Q,s.addData(u,g,m,r,o);break;case"A":v=f[d++],y=f[d++],x=f[d++],_=f[d++],b=f[d++],Ft(w=r,S=o,r=f[d++],o=f[d++],_,b,v,y,x,u=l.A,s);break;case"a":v=f[d++],y=f[d++],x=f[d++],_=f[d++],b=f[d++],Ft(w=r,S=o,r+=f[d++],o+=f[d++],_,b,v,y,x,u=l.A,s)}}"z"!==c&&"Z"!==c||(u=l.Z,s.addData(u)),n=u}return s.toStatic(),s}(t);return e=e||{},e.buildPath=function(t){if(t.setData){t.setData(i.data);(e=t.getContext())&&t.rebuildPath(e)}else{var e=t;i.rebuildPath(e)}},e.applyTransform=function(t){hf(i,t),this.dirty(!0)},e}function Ut(t,e,i,n,a,r,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*r+s*a+e}function Zt(t,e,i){var n=t.cpx2,a=t.cpy2;return null===n||null===a?[(i?Yf:Zf)(t.x1,t.cpx1,t.cpx2,t.x2,e),(i?Yf:Zf)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(i?jf:Uf)(t.x1,t.cpx1,t.x2,e),(i?jf:Uf)(t.y1,t.cpy1,t.y2,e)]}function jt(t){oc.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function Yt(t,e,i,n){var a=xf.createFromString(t,e),r=a.getBoundingRect();return i&&("center"===n&&(i=Xt(i,r)),qt(a,i)),a}function Xt(t,e){var i,n=e.width/e.height,a=t.height*n;i=a<=t.width?t.height:(a=t.width)/n;return{x:t.x+t.width/2-a/2,y:t.y+t.height/2-i/2,width:a,height:i}}function qt(t,e){if(t.applyTransform){var i=t.getBoundingRect().calculateTransform(e);t.applyTransform(i)}}function $t(t,e,i){var n=Mp(2*t);return(n+Mp(e))%2==0?n/2:(n+(i?1:-1))/2}function Kt(t){return null!=t&&"none"!=t}function Jt(t){return"string"==typeof t?Wu.lift(t,-.1):t}function Qt(t){if(t.__hoverStlDirty){var e=t.style.stroke,i=t.style.fill,n=t.__hoverStl;n.fill=n.fill||(Kt(i)?Jt(i):null),n.stroke=n.stroke||(Kt(e)?Jt(e):null);var a={};for(var r in n)null!=n[r]&&(a[r]=t.style[r]);t.__normalStl=a,t.__hoverStlDirty=!1}}function te(t){if(!t.__isHover){if(Qt(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,i=e.insideRollbackOpt;i&&function(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}(e),e.extendFrom(t.__hoverStl),i&&(ue(e,e.insideOriginalTextPosition,i),null==e.textFill&&(e.textFill=i.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function ee(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function ie(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&te(t)}):te(t)}function ne(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&ee(t)}):ee(t)}function ae(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&Qt(t)}function re(t,e,i,n,a){return oe(t,e,n,a),i&&du.extend(t,i),t.host&&t.host.dirty&&t.host.dirty(!1),t}function oe(t,e,i,n){if((i=i||Tp).isRectText){var a=e.getShallow("position")||(n?null:"inside");"outside"===a&&(a="top"),t.textPosition=a,t.textOffset=e.getShallow("offset");var r=e.getShallow("rotate");null!=r&&(r*=Math.PI/180),t.textRotation=r,t.textDistance=du.retrieve2(e.getShallow("distance"),n?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,u=function(t){var e;for(;t&&t!==t.ecModel;){var i=(t.option||Tp).rich;if(i){e=e||{};for(var n in i)i.hasOwnProperty(n)&&(e[n]=1)}t=t.parentModel}return e}(e);if(u){o={};for(var h in u)if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);se(o[h]={},c,l,i,n)}}return t.rich=o,se(t,e,l,i,n,!0),i.forceRich&&!i.textStyle&&(i.textStyle={}),t}function se(t,e,i,n,a,r){if(i=!a&&i||Tp,t.textFill=le(e.getShallow("color"),n)||i.color,t.textStroke=le(e.getShallow("textBorderColor"),n)||i.textBorderColor,t.textStrokeWidth=du.retrieve2(e.getShallow("textBorderWidth"),i.textBorderWidth),!a){if(r){var o=t.textPosition;t.insideRollback=ue(t,o,n),t.insideOriginalTextPosition=o,t.insideRollbackOpt=n}null==t.textFill&&(t.textFill=n.autoColor)}t.fontStyle=e.getShallow("fontStyle")||i.fontStyle,t.fontWeight=e.getShallow("fontWeight")||i.fontWeight,t.fontSize=e.getShallow("fontSize")||i.fontSize,t.fontFamily=e.getShallow("fontFamily")||i.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),r&&n.disableBox||(t.textBackgroundColor=le(e.getShallow("backgroundColor"),n),t.textPadding=e.getShallow("padding"),t.textBorderColor=le(e.getShallow("borderColor"),n),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||i.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||i.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||i.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||i.textShadowOffsetY}function le(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function ue(t,e,i){var n,a=i.useInsideStyle;return null==t.textFill&&!1!==a&&(!0===a||i.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(n={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=i.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),n}function he(t,e,i,n,a,r){"function"==typeof a&&(r=a,a=null);if(n&&n.isAnimationEnabled()){var o=t?"Update":"",s=n.getShallow("animationDuration"+o),l=n.getShallow("animationEasing"+o),u=n.getShallow("animationDelay"+o);"function"==typeof u&&(u=u(a,n.getAnimationDelayParams?n.getAnimationDelayParams(e,a):null)),"function"==typeof s&&(s=s(a)),s>0?e.animateTo(i,s,u||0,l,r,!!r):(e.stopAnimation(),e.attr(i),r&&r())}else e.stopAnimation(),e.attr(i),r&&r()}function ce(t,e,i,n,a){he(!0,t,e,i,n,a)}function de(t,e,i){return e&&!du.isArrayLike(e)&&(e=Lu.getLocalTransform(e)),i&&(e=Mu.invert([],e)),pu.applyTransform([],t,e)}function fe(t,e,i){this.parentModel=e,this.ecModel=i,this.option=t}function pe(t,e,i){for(var n=0;n<e.length&&(!e[n]||null!=(t=t&&"object"==typeof t?t[e[n]]:null));n++);return null==t&&i&&(t=i.get(e)),t}function ge(t,e){var i=zp(t).getParent;return i?i.call(t,e):t.parentModel}function me(t){return Math.floor(Math.log(t)/Math.LN10)}function ve(t){return null==t?"":(t+"").replace(Zp,function(t,e){return jp[e]})}function ye(t,e){return t+="","0000".substr(0,e-t.length)+t}function xe(t,e,i,n,a){var r=0,o=0;null==n&&(n=1/0),null==a&&(a=1/0);var s=0;e.eachChild(function(l,u){var h,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);(h=r+m)>n||l.newline?(r=0,h=m,o+=s+i,s=f.height):s=Math.max(s,f.height)}else{var v=f.height+(g?-g.y+f.y:0);(c=o+v)>a||l.newline?(r+=s+i,o=0,c=v,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=r,d[1]=o,"horizontal"===t?r=h+i:o=c+i)})}function _e(t,e,i){i=qp.normalizeCssArray(i||0);var n=e.width,a=e.height,r=$p(t.left,n),o=$p(t.top,a),s=$p(t.right,n),l=$p(t.bottom,a),u=$p(t.width,n),h=$p(t.height,a),c=i[2]+i[0],d=i[1]+i[3],f=t.aspect;switch(isNaN(u)&&(u=n-s-d-r),isNaN(h)&&(h=a-l-c-o),null!=f&&(isNaN(u)&&isNaN(h)&&(f>n/a?u=.8*n:h=.8*a),isNaN(u)&&(u=f*h),isNaN(h)&&(h=u/f)),isNaN(r)&&(r=n-s-u-d),isNaN(o)&&(o=a-l-h-c),t.left||t.right){case"center":r=n/2-u/2-i[3];break;case"right":r=n-u-d}switch(t.top||t.bottom){case"middle":case"center":o=a/2-h/2-i[0];break;case"bottom":o=a-h-c}r=r||0,o=o||0,isNaN(u)&&(u=n-d-r-(s||0)),isNaN(h)&&(h=a-c-o-(l||0));var p=new ch(r+i[3],o+i[0],u,h);return p.margin=i,p}function be(t,e){return e&&t&&Kp(Jp,function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t}function we(t){return"category"===t.get("type")}function Se(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===Dg?{}:[]),this.sourceFormat=t.sourceFormat||Ag,this.seriesLayoutBy=t.seriesLayoutBy||Ig,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&bg(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Me(t){if(t){var e=Og();return Ng(t,function(t,i){if(null==(t=Hg({},Vg(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t})}}function Ie(t,e,i,n){if(null==n&&(n=1/0),e===Xg)for(r=0;r<i.length&&r<n;r++)t(i[r]?i[r][0]:null,r);else for(var a=i[0]||[],r=0;r<a.length&&r<n;r++)t(a[r],r)}function Ae(t,e,i,n,a,r){function o(t){return(null==t||!isFinite(t)||""===t)&&(!(!zg(t)||"-"===t)||void 0)}var s;if(Bg(t))return!1;var l;if(n&&(l=n[r],l=Vg(l)?l.name:l),e===Wg)if(i===Xg){for(var u=t[r],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=o(u[a+h])))return s}else for(h=0;h<t.length&&h<5;h++){var c=t[a+h];if(c&&null!=(s=o(c[r])))return s}else if(e===Ug){if(!l)return;for(h=0;h<t.length&&h<5;h++){if((d=t[h])&&null!=(s=o(d[l])))return s}}else if(e===Zg){if(!l)return;if(!(u=t[l])||Bg(u))return!1;for(h=0;h<u.length&&h<5;h++)if(null!=(s=o(u[h])))return s}else if(e===Fg)for(h=0;h<t.length&&h<5;h++){var d=t[h],f=Pg(d);if(!Eg(f))return!1;if(null!=(s=o(f[r])))return s}return!1}function Te(t,e){t._seriesIndicesMap=am(t._seriesIndices=Qg(e,function(t){return t.componentIndex})||[])}function De(t,e){return e.hasOwnProperty("subType")?Jg(t,function(t){return t.subType===e.subType}):t}function Ce(t){}function Le(){this._coordinateSystems=[]}function Pe(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function ke(t){var e=t&&t.itemStyle;if(e)for(var i=0,n=Am.length;i<n;i++){var a=Am[i],r=e.normal,o=e.emphasis;r&&r[a]&&(t[a]=t[a]||{},t[a].normal?du.merge(t[a].normal,r[a]):t[a].normal=r[a],r[a]=null),o&&o[a]&&(t[a]=t[a]||{},t[a].emphasis?du.merge(t[a].emphasis,o[a]):t[a].emphasis=o[a],o[a]=null)}}function Oe(t,e,i){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var n=t[e].normal,a=t[e].emphasis;n&&(i?(t[e].normal=t[e].emphasis=null,du.defaults(t[e],n)):t[e]=n),a&&(t.emphasis=t.emphasis||{},t.emphasis[e]=a)}}function Re(t){Oe(t,"itemStyle"),Oe(t,"lineStyle"),Oe(t,"areaStyle"),Oe(t,"label"),Oe(t,"labelLine"),Oe(t,"upperLabel"),Oe(t,"edgeLabel")}function Ne(t,e){var i=Im(t)&&t[e],n=Im(i)&&i.textStyle;if(n)for(var a=0,r=Wc.TEXT_STYLE_OPTIONS.length;a<r;a++){e=Wc.TEXT_STYLE_OPTIONS[a];n.hasOwnProperty(e)&&(i[e]=n[e])}}function Ee(t){t&&(Re(t),Ne(t,"label"),t.emphasis&&Ne(t.emphasis,"label"))}function ze(t){return du.isArray(t)?t:t?[t]:[]}function Ve(t){return(du.isArray(t)?t[0]:t)||{}}function Be(t){Dm(km,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function Ge(t,e){Cg.isInstance(t)||(t=Cg.seriesDataToSource(t)),this._source=t;var i=this._data=t.data,n=t.sourceFormat;n===Um&&(this._offset=0,this._dimSize=e,this._data=i);var a=qm[n===Zm?n+"_"+t.seriesLayoutBy:n];Vm(this,a)}function He(){return this._data.length}function Fe(t){return this._data[t]}function We(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function Ue(t,e,i,n){return null!=i?t[i]:t}function Ze(t,e,i,n){return je(t[n],this._dimensionInfos[e])}function je(t,e){var i=e&&e.type;if("ordinal"===i){var n=e&&e.ordinalMeta;return n?n.parseAndCollect(t):t}return"time"===i&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+Wm(t)),null==t||""===t?NaN:+t}function Ye(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Xe(t,e,i,n,a,r){rv.reset(i,n,a,r),t._callingProgress=e,t._callingProgress({start:i,end:n,count:n-i,next:rv.next},t.context)}function qe(t){var e=t.name;Wc.isNameSpecified(t)||(t.name=function(t){var e=t.getRawData(),i=e.mapDimension("seriesName",!0),n=[];return du.each(i,function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}(t)||e)}function $e(t,e){du.each(t.CHANGABLE_METHODS,function(i){t.wrapMethod(i,du.curry(function(t){var e=Ke(t);e&&e.setOutputEnd(this.count())},e))})}function Ke(t){var e=(t.ecModel||{}).scheduler,i=e&&e.getPipeline(t.uid);if(i){var n=i.currentTask;if(n){var a=n.agentStubMap;a&&(n=a.get(t.uid))}return n}}function Je(){this.group=new fh,this.uid=Hp.getUID("viewChart"),this.renderTask=Av({plan:function(t){return Dv(t.model)},reset:function(t){var e=t.model,i=t.ecModel,n=t.api,a=t.payload,r=e.pipelineContext.progressiveRender,o=t.view,s=a&&Tv(a).updateMethod,l=r?"incrementalPrepareRender":s&&o[s]?s:"render";"render"!==l&&o[l](e,i,n,a);return Lv[l]}}),this.renderTask.context={view:this}}function Qe(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var i=0;i<t.childCount();i++)Qe(t.childAt(i),e)}function ti(t,e,i){var n=Wc.queryDataIndex(t,e);null!=n?Iv(Wc.normalizeToArray(n),function(e){Qe(t.getItemGraphicEl(e),i)}):t.eachItemGraphicEl(function(t){Qe(t,i)})}function ei(t,e,i){function n(){h=(new Date).getTime(),c=null,t.apply(o,s||[])}var a,r,o,s,l,u=0,h=0,c=null;e=e||0;var d=function(){a=(new Date).getTime(),o=this,s=arguments;var t=l||e,d=l||i;l=null,r=a-(d?u:h)-t,clearTimeout(c),d?c=setTimeout(n,t):r>=0?n():c=setTimeout(n,-r),u=a};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d}function ii(t,e,i,n){this.ecInstance=t,this.api=e,this.unfinished;var i=this._dataProcessorHandlers=i.slice(),n=this._visualHandlers=n.slice();this._allHandlers=i.concat(n),this._stageTaskMap=Zv()}function ni(t,e,i,n,a){function r(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}a=a||{};var o;Fv(e,function(e,s){if(!a.visualType||a.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,d=h.agentStubMap;d.each(function(t){r(a,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),Kv(h,n);var f=t.getPerformArgs(h,a.block);d.each(function(t){t.perform(f)}),o|=h.perform(f)}else u&&u.each(function(s,l){r(a,s)&&s.dirty();var u=t.getPerformArgs(s,a.block);u.skip=!e.performRawSeries&&i.isSeriesFiltered(s.context.model),Kv(s,n),o|=s.perform(u)})}}),t.unfinished|=o}function ai(t){return function(e,i){var n=i.data,a=i.resetDefines[t];if(a&&a.dataEach)for(var r=e.start;r<e.end;r++)a.dataEach(n,r);else a&&a.progress&&a.progress(e,n)}}function ri(t,e,i){var n=e.uid,a=t._pipelineMap.get(n);!a.head&&(a.head=i),a.tail&&a.tail.pipe(i),a.tail=i,i.__idxInPipeline=a.count++,i.__pipeline=a}function oi(t,e){for(var i in e.prototype)t[i]=jv}function si(t){return t}function li(t,e,i,n,a){this._old=t,this._new=e,this._oldKeyGetter=i||si,this._newKeyGetter=n||si,this.context=a}function ui(t,e,i,n,a){for(var r=0;r<t.length;r++){var o="_ec_"+a[n](t[r],r),s=e[o];null==s?(i.push(o),e[o]=r):(s.length||(e[o]=s=[s]),s.push(r))}}function hi(t){return t._rawCount>65535?by:wy}function ci(t,e){du.each(Sy.concat(e.__wrappedMethods||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t.__wrappedMethods=e.__wrappedMethods,du.each(My,function(i){t[i]=du.clone(e[i])}),t._calculationInfo=du.extend(e._calculationInfo)}function di(t,e,i){var n;if(null!=e){var a=t._chunkSize,r=Math.floor(i/a),o=i%a,s=t.dimensions[e],l=t._storage[s][r];if(l){n=l[o];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(n=u.categories[n])}}return n}function fi(t){return t}function pi(t){return t<this._count&&t>=0?this._indices[t]:-1}function gi(t,e){var i=t._idList[e];return null==i&&(i=di(t,t._idDimIdx,e)),null==i&&(i=xy+e),i}function mi(t){return du.isArray(t)||(t=[t]),t}function vi(t,e){var i=t.dimensions,n=new Iy(du.map(i,t.getDimensionInfo,t),t.hostModel);ci(n,t);for(var a=n._storage={},r=t._storage,o=0;o<i.length;o++){var s=i[o];r[s]&&(du.indexOf(e,s)>=0?(a[s]=function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=function(t){var e=t.constructor;return e===Array?t.slice():new e(t)}(t[i]);return e}(r[s]),n._rawExtent[s]=yi(),n._extent[s]=null):a[s]=r[s])}return n}function yi(){return[1/0,-1/0]}function xi(t,e,i){if(i||null!=e.get(t)){for(var n=0;null!=e.get(t+n);)n++;t+=n}return e.set(t,!0),t}function _i(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function bi(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function wi(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Si(t){return t._map||(t._map=$y(t.categories))}function Mi(t){return Up.getPrecisionSafe(t)+2}function Ii(t,e,i){t[e]=Math.max(Math.min(t[e],i[1]),i[0])}function Ai(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ii(t,0,e),Ii(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Ti(t){return t.get("stack")||cx+t.seriesIndex}function Di(t){return t.dim+t.index}function Ci(t,e){var i=[];return e.eachSeriesByType(t,function(t){Oi(t)&&!Ri(t)&&i.push(t)}),i}function Li(t){var e=[];return du.each(t,function(t){var i=t.getData(),n=t.coordinateSystem.getBaseAxis(),a=n.getExtent(),r="category"===n.type?n.getBandWidth():Math.abs(a[1]-a[0])/i.count(),o=ux(t.get("barWidth"),r),s=ux(t.get("barMaxWidth"),r),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:r,barWidth:o,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Di(n),stackId:Ti(t)})}),Pi(e)}function Pi(t){var e={};du.each(t,function(t,i){var n=t.axisKey,a=t.bandWidth,r=e[n]||{bandWidth:a,remainedWidth:a,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=r.stacks;e[n]=r;var s=t.stackId;o[s]||r.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!o[s].width&&(o[s].width=l,l=Math.min(r.remainedWidth,l),r.remainedWidth-=l);var u=t.barMaxWidth;u&&(o[s].maxWidth=u);var h=t.barGap;null!=h&&(r.gap=h);var c=t.barCategoryGap;null!=c&&(r.categoryGap=c)});var i={};return du.each(e,function(t,e){i[e]={};var n=t.stacks,a=t.bandWidth,r=ux(t.categoryGap,a),o=ux(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-r)/(l+(l-1)*o);u=Math.max(u,0),du.each(n,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),u=(s-r)/(l+(l-1)*o),u=Math.max(u,0);var h,c=0;du.each(n,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+o)}),h&&(c-=h.width*o);var d=-c/2;du.each(n,function(t,n){i[e][n]=i[e][n]||{offset:d,width:t.width},d+=t.width*(1+o)})}),i}function ki(t,e,i){if(t&&e){var n=t[Di(e)];return null!=n&&null!=i&&(n=n[Ti(i)]),n}}function Oi(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function Ri(t){return t.pipelineContext&&t.pipelineContext.large}function Ni(t,e,i){return du.indexOf(t.getAxesOnZeroOf(),e)>=0||i?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function Ei(t,e){return Sx(t,bx(e))}function zi(t,e){var i,n,a,r=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,u=null!=s,h=t.getExtent();"ordinal"===r?i=e.getCategories().length:(n=e.get("boundaryGap"),du.isArray(n)||(n=[n||0,n||0]),"boolean"==typeof n[0]&&(n=[0,0]),n[0]=Up.parsePercent(n[0],1),n[1]=Up.parsePercent(n[1],1),a=h[1]-h[0]||Math.abs(h[0])),null==o&&(o="ordinal"===r?i?0:NaN:h[0]-n[0]*a),null==s&&(s="ordinal"===r?i?i-1:NaN:h[1]+n[1]*a),"dataMin"===o?o=h[0]:"function"==typeof o&&(o=o({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==o||!isFinite(o))&&(o=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(du.eqNaN(o)||du.eqNaN(s)||"ordinal"===r&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(o>0&&s>0&&!l&&(o=0),o<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===r){var d,f=Cx("bar",c);if(du.each(f,function(t){d|=t.getBaseAxis()===e.axis}),d){var p=Lx(f),g=function(t,e,i,n){var a=i.axis.getExtent(),r=a[1]-a[0],o=Px(n,i.axis);if(void 0===o)return{min:t,max:e};var s=1/0;du.each(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;du.each(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/r)-h;return e+=c*(l/u),t-=c*(s/u),{min:t,max:e}}(o,s,e,p);o=g.min,s=g.max}}return[o,s]}function Vi(t){var e=t.getLabelModel().get("formatter"),i="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(n,a){return null!=i&&(a=n-i),e(Bi(t,n),a)}:function(e){return t.scale.getLabel(e)}}function Bi(t,e){return"category"===t.type?t.scale.getLabel(e):e}function Gi(t,e){return Math.abs(t-e)<Xx}function Hi(t,e,i){if(this.name=t,this.geometries=e,i)i=[i[0],i[1]];else{var n=this.getBoundingRect();i=[n.x+n.width/2,n.y+n.height/2]}this.center=i}function Fi(t,e,i){for(var n=[],a=e[0],r=e[1],o=0;o<t.length;o+=2){var s=t.charCodeAt(o)-64,l=t.charCodeAt(o+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),a=s+=a,r=l+=r,n.push([s/i,l/i])}return n}function Wi(t,e){var i=Ui(t,"labels"),n=qi(e),a=Zi(i,n);if(a)return a;var r,o;return r=du.isFunction(n)?Xi(t,n):Yi(t,o="auto"===n?function(t){var e=t_(t).autoInterval;return null!=e?e:t_(t).autoInterval=t.calculateCategoryInterval()}(t):n),ji(i,n,{labels:r,labelCategoryInterval:o})}function Ui(t,e){return t_(t)[e]||(t_(t)[e]=[])}function Zi(t,e){for(var i=0;i<t.length;i++)if(t[i].key===e)return t[i].value}function ji(t,e,i){return t.push({key:e,value:i}),i}function Yi(t,e,i){function n(t){l.push(i?t:{formattedLabel:a(t),rawLabel:r.getLabel(t),tickValue:t})}var a=Qx(t),r=t.scale,o=r.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=o[0],c=r.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var d={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};d.min&&h!==o[0]&&n(o[0]);for(var f=h;f<=o[1];f+=u)n(f);return d.max&&f!==o[1]&&n(o[1]),l}function Xi(t,e,i){var n=t.scale,a=Qx(t),r=[];return du.each(n.getTicks(),function(t){var o=n.getLabel(t);e(t,o)&&r.push(i?t:{formattedLabel:a(t),rawLabel:o,tickValue:t})}),r}function qi(t){var e=t.get("interval");return null==e?"auto":e}function $i(t,e){var i=(t[1]-t[0])/e/2;t[0]+=i,t[1]-=i}function Ki(t,e,i){Dp.Group.call(this),this.updateData(t,e,i)}function Ji(t){return[t[0]/2,t[1]/2]}function Qi(t){this.group=new Dp.Group,this._symbolCtor=t||H_}function tn(t,e,i,n){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(n.isIgnore&&n.isIgnore(i))&&!(n.clipShape&&!n.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(i,"symbol")}function en(t){return null==t||F_(t)||(t={isIgnore:t}),t||{}}function nn(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function an(t){return isNaN(t[0])||isNaN(t[1])}function rn(t,e,i,n,a,r,o,s,l,u,h){return"none"!==u&&u?function(t,e,i,n,a,r,o,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=a||d<0)break;if(an(p)){if(h){d+=r;continue}break}if(d===i)t[r>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],m="y"===u?1:0,v=(p[m]-g[m])*l;tb(ib,g),ib[m]=g[m]+v,tb(nb,p),nb[m]=p[m]-v,t.bezierCurveTo(ib[0],ib[1],nb[0],nb[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=d,d+=r}return f}.apply(this,arguments):function(t,e,i,n,a,r,o,s,l,u,h){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=a||d<0)break;if(an(p)){if(h){d+=r;continue}break}if(d===i)t[r>0?"moveTo":"lineTo"](p[0],p[1]),tb(ib,p);else if(l>0){var g=d+r,m=e[g];if(h)for(;m&&an(e[g]);)m=e[g+=r];var v=.5,y=e[c];if(!(m=e[g])||an(m))tb(nb,p);else{an(m)&&!h&&(m=p),pu.sub(eb,m,y);var x,_;if("x"===u||"y"===u){var b="x"===u?0:1;x=Math.abs(p[b]-y[b]),_=Math.abs(p[b]-m[b])}else x=pu.dist(p,y),_=pu.dist(p,m);Q_(nb,p,eb,-l*(1-(v=_/(_+x))))}K_(ib,ib,s),J_(ib,ib,o),K_(nb,nb,s),J_(nb,nb,o),t.bezierCurveTo(ib[0],ib[1],nb[0],nb[1],p[0],p[1]),Q_(ib,p,eb,l*v)}else t.lineTo(p[0],p[1]);c=d,d+=r}return f}.apply(this,arguments)}function on(t,e){var i=[1/0,1/0],n=[-1/0,-1/0];if(e)for(var a=0;a<t.length;a++){var r=t[a];r[0]<i[0]&&(i[0]=r[0]),r[1]<i[1]&&(i[1]=r[1]),r[0]>n[0]&&(n[0]=r[0]),r[1]>n[1]&&(n[1]=r[1])}return{min:e?i:n,max:e?n:i}}function sn(t,e){if(t.length===e.length){for(var i=0;i<t.length;i++){var n=t[i],a=e[i];if(n[0]!==a[0]||n[1]!==a[1])return}return!0}}function ln(t){return"number"==typeof t?t:t?.5:0}function un(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i}return e}function hn(t,e,i,n){return"polar"===t.type?function(t,e,i,n){var a=t.getAngleAxis(),r=t.getRadiusAxis().getExtent().slice();r[0]>r[1]&&r.reverse();var o=a.getExtent(),s=Math.PI/180;i&&(r[0]-=.5,r[1]+=.5);var l=new Dp.Sector({shape:{cx:sb(t.cx,1),cy:sb(t.cy,1),r0:sb(r[0],1),r:sb(r[1],1),startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:a.inverse}});return e&&(l.shape.endAngle=-o[0]*s,Dp.initProps(l,{shape:{endAngle:-o[1]*s}},n)),l}(t,e,i,n):function(t,e,i,n){var a=un(t.getAxis("x")),r=un(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),s=Math.min(a[0],a[1]),l=Math.min(r[0],r[1]),u=Math.max(a[0],a[1])-s,h=Math.max(r[0],r[1])-l;if(i)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=n.get("lineStyle.width")||2,d=n.get("clipOverflow")?c/2:Math.max(u,h);o?(l-=d,h+=2*d):(s-=d,u+=2*d)}var f=new Dp.Rect({shape:{x:s,y:l,width:u,height:h}});return e&&(f.shape[o?"width":"height"]=0,Dp.initProps(f,{shape:{width:u,height:h}},n)),f}(t,e,i,n)}function cn(t,e,i){for(var n=e.getBaseAxis(),a="x"===n.dim||"radius"===n.dim?0:1,r=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];r.push(l);var u=[];switch(i){case"end":u[a]=s[a],u[1-a]=l[1-a],r.push(u);break;case"middle":var h=(l[a]+s[a])/2,c=[];u[a]=c[a]=h,u[1-a]=l[1-a],c[1-a]=s[1-a],r.push(u),r.push(c);break;default:u[a]=l[a],u[1-a]=s[1-a],r.push(u)}}return t[o]&&r.push(t[o]),r}function dn(t){yb.call(this,t)}function fn(t,e){return e.type||(e.data?"category":"value")}function pn(t,e,i){return t.getCoordSysModel()===e}function gn(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}function mn(t,e,i){i.getAxesOnZeroOf=function(){return n?[n]:[]};var n,a=t[e],r=i.model,o=r.get("axisLine.onZero"),s=r.get("axisLine.onZeroAxisIndex");if(o)if(null==s){for(var l in a)if(a.hasOwnProperty(l)&&vn(a[l])){n=a[l];break}}else vn(a[s])&&(n=a[s])}function vn(t){return t&&"category"!==t.type&&"time"!==t.type&&zb(t)}function yn(t,e){return Ob(Fb,function(e){return t.getReferringComponents(e)[0]})}function xn(t){return"cartesian2d"===t.get("coordinateSystem")}function _n(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function bn(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function wn(t){t&&(t.ignore=!0)}function Sn(t,e,i){var n=t&&t.getBoundingRect().clone(),a=e&&e.getBoundingRect().clone();if(n&&a){var r=Mu.identity([]);return Mu.rotate(r,r,-t.rotation),n.applyTransform(Mu.mul([],r,t.getLocalTransform())),a.applyTransform(Mu.mul([],r,e.getLocalTransform())),n.intersect(a)}}function Mn(t){return"middle"===t||"center"===t}function In(t,e){return"all"===t||du.isArray(t)&&du.indexOf(t,e)>=0||t===e}function An(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Dn(t)]}function Tn(t){return!!t.get("handle.show")}function Dn(t){return t.type+"||"+t.id}function Cn(t,e,i,n,a,r){var o=rw.getAxisPointerClass(t.axisPointerClass);if(o){var s=aw.getAxisPointerModel(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,n,r):Ln(t,n)}}function Ln(t,e,i){var n=t._axisPointer;n&&n.dispose(e,i),t._axisPointer=null}function Pn(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function kn(t,e,i){i.style.text=null,Dp.updateProps(i,{shape:{width:0}},e,t,function(){i.parent&&i.parent.remove(i)})}function On(t,e,i){i.style.text=null,Dp.updateProps(i,{shape:{r:i.shape.r0}},e,t,function(){i.parent&&i.parent.remove(i)})}function Rn(t,e,i,n,a,r,o,s){var l=e.getItemVisual(i,"color"),u=e.getItemVisual(i,"opacity"),h=n.getModel("itemStyle"),c=n.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(du.defaults({fill:l,opacity:u},h.getBarItemStyle()));var d=n.getShallow("cursor");d&&t.attr("cursor",d);var f=o?a.height>0?"bottom":"top":a.width>0?"left":"right";s||vw(t.style,c,n,l,r,i,f),Dp.setHoverStyle(t,c)}function Nn(t,e,i){var n=t.getData(),a=[],r=n.getLayout("valueAxisHorizontal")?1:0;a[1-r]=n.getLayout("valueAxisStart");var o=new bw({shape:{points:n.getLayout("largePoints")},incremental:!!i,__startPoint:a,__valueIdx:r});e.add(o),function(t,e,i){var n=i.getVisual("borderColor")||i.getVisual("color"),a=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(a),t.style.fill=null,t.style.stroke=n,t.style.lineWidth=i.getLayout("barWidth")}(o,t,n)}function En(t,e,i,n,a){var r=(e.startAngle+e.endAngle)/2,o=Math.cos(r),s=Math.sin(r),l=i?n:0,u=[o*l,s*l];a?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function zn(t,e){function i(){r.ignore=r.hoverIgnore,o.ignore=o.hoverIgnore}function n(){r.ignore=r.normalIgnore,o.ignore=o.normalIgnore}Dp.Group.call(this);var a=new Dp.Sector({z2:2}),r=new Dp.Polyline,o=new Dp.Text;this.add(a),this.add(r),this.add(o),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function Vn(t,e,i,n,a,r,o){function s(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1].height));n--);}function l(t,e,i,n,a,r){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-n),h=t[s].len,c=t[s].len2,d=u<a+h?Math.sqrt((a+h+c)*(a+h+c)-u*u):Math.abs(t[s].x-i);e&&d>=o&&(d=o-10),!e&&d<=o&&(d=o+10),t[s].x=i+d*r,o=d}}t.sort(function(t,e){return t.y-e.y});for(var u,h=0,c=t.length,d=[],f=[],p=0;p<c;p++)(u=t[p].y-h)<0&&function(e,i,n,a){for(var r=e;r<i;r++)if(t[r].y+=n,r>e&&r+1<i&&t[r+1].y>t[r].y+t[r].height)return void s(r,n/2);s(i-1,n/2)}(p,c,-u),h=t[p].y+t[p].height;o-h<0&&s(c-1,h-o);for(p=0;p<c;p++)t[p].y>=i?f.push(t[p]):d.push(t[p]);l(d,!1,e,i,n,a),l(f,!0,e,i,n,a)}function Bn(){this.group=new Dp.Group}function Gn(t,e,i){c_.call(this,t,e,i),this.type="value",this.angle=0,this.name="",this.model}function Hn(t,e,i){this._model=t,this.dimensions=[],this._indicatorAxes=du.map(t.getIndicatorModels(),function(t,e){var i="indicator_"+e,n=new jw(i,new lx);return n.name=t.get("name"),n.model=t,t.axis=n,this.dimensions.push(i),n},this),this.resize(t,i),this.cx,this.cy,this.r,this.startAngle}function Fn(t,e){return du.defaults({show:e},t)}function Wn(){Lu.call(this)}function Un(t){this.name=t,this.zoomLimit,Lu.call(this),this._roamTransformable=new Wn,this._rawTransformable=new Wn,this._center,this._zoom}function Zn(t,e,i,n){var a=i.seriesModel,r=a?a.coordinateSystem:null;return r===this?r[t](n):null}function jn(t,e,i,n,a){iS.call(this,t),this.map=e,this._nameCoordMap=du.createHashMap(),this.loadGeoJson(i,n,a)}function Yn(t,e,i,n){var a=i.geoModel,r=i.seriesModel,o=a?a.coordinateSystem:r?r.coordinateSystem||(r.getReferringComponents("geo")[0]||{}).coordinateSystem:null;return o===this?o[t](n):null}function Xn(t,e){var i=t.get("boundingCoords");if(null!=i){var n=i[0],a=i[1];isNaN(n[0])||isNaN(n[1])||isNaN(a[0])||isNaN(a[1])||this.setBoundingRect(n[0],n[1],a[0]-n[0],a[1]-n[1])}var r,o=this.getBoundingRect(),s=t.get("layoutCenter"),l=t.get("layoutSize"),u=e.getWidth(),h=e.getHeight(),c=t.get("aspectScale")||.75,d=o.width/o.height*c,f=!1;s&&l&&(s=[Up.parsePercent(s[0],u),Up.parsePercent(s[1],h)],l=Up.parsePercent(l,Math.min(u,h)),isNaN(s[0])||isNaN(s[1])||isNaN(l)||(f=!0));if(f){var p={};d>1?(p.width=l,p.height=l/d):(p.height=l,p.width=l*d),p.y=s[1]-p.height/2,p.x=s[0]-p.width/2}else(r=t.getBoxLayoutParams()).aspect=d,p=ng.getLayoutRect(r,{width:u,height:h});this.setViewRect(p.x,p.y,p.width,p.height),this.setCenter(t.get("center")),this.setZoom(t.get("zoom"))}function qn(t,e){du.each(e.get("geoCoord"),function(e,i){t.addGeoCoord(i,e)})}function $n(t){return t[yS]||(t[yS]={})}function Kn(t){this.pointerChecker,this._zr=t,this._opt={};var e=du.bind,i=e(function(t){if(mc.notLeftMouse(t)||t.target&&t.target.draggable)return;var e=t.offsetX,i=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,i)&&(this._x=e,this._y=i,this._dragging=!0)},this),n=e(function(t){if(mc.notLeftMouse(t)||!Qn(this,"moveOnMouseMove",t)||!this._dragging||"pinch"===t.gestureEvent||xS.isTaken(this._zr,"globalPan"))return;var e=t.offsetX,i=t.offsetY,n=this._x,a=this._y,r=e-n,o=i-a;this._x=e,this._y=i,this._opt.preventDefaultMouseMove&&mc.stop(t.event),this.trigger("pan",r,o,n,a,e,i)},this),a=e(function(t){mc.notLeftMouse(t)||(this._dragging=!1)},this),r=e(function(t){if(!Qn(this,"zoomOnMouseWheel",t)||0===t.wheelDelta)return;var e=t.wheelDelta>0?1.1:1/1.1;Jn.call(this,t,e,t.offsetX,t.offsetY)},this),o=e(function(t){if(xS.isTaken(this._zr,"globalPan"))return;var e=t.pinchScale>1?1.1:1/1.1;Jn.call(this,t,e,t.pinchX,t.pinchY)},this);yu.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,s){this.disable(),this._opt=du.defaults(du.clone(s)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}),null==e&&(e=!0),!0!==e&&"move"!==e&&"pan"!==e||(t.on("mousedown",i),t.on("mousemove",n),t.on("mouseup",a)),!0!==e&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",r),t.on("pinch",o))},this.disable=function(){t.off("mousedown",i),t.off("mousemove",n),t.off("mouseup",a),t.off("mousewheel",r),t.off("pinch",o)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function Jn(t,e,i,n){this.pointerChecker&&this.pointerChecker(t,i,n)&&(mc.stop(t.event),this.trigger("zoom",e,i,n))}function Qn(t,e,i){var n=t._opt[e];return n&&(!du.isString(n)||i.event[n+"Key"])}function ta(t,e){var i=t.getItemStyle(),n=t.get("areaColor");return null!=n&&(i.fill=n),i}function ea(t,e){e.eachChild(function(e){du.each(e.__regions,function(i){e.trigger(t.isSelected(i.name)?"emphasis":"normal")})})}function ia(t,e){var i=new Dp.Group;this._controller=new _S(t.getZr()),this._controllerHost={target:e?i:null},this.group=i,this._updateGroup=e,this._mouseDownFlag}function na(t,e,i){t[OS]={},kS(e,function(e,n){aa(e,n,t,i)})}function aa(t,e,i,n){i[OS][e]=t,t[RS]=i,t.dataType=e,n.struct&&(t[n.structAttr]=n.struct,n.struct[n.datasAttr[e]]=t),t.getLinkedData=function(t){var e=this[RS];return null==t||null==e?e:e[OS][t]}}function ra(t,e,i){this.root,this.data,this._nodes=[],this.hostModel=t,this.levelModels=du.map(e||[],function(e){return new Vp(e,t,t.ecModel)}),this.leavesModel=new Vp(i||{},t,t.ecModel)}function oa(t){var e=t.children;return e.length&&t.isExpand?e[e.length-1]:t.hierNode.thread}function sa(t){var e=t.children;return e.length&&t.isExpand?e[0]:t.hierNode.thread}function la(t,e){var i=t.getItemLayout(e);return i&&!isNaN(i.x)&&!isNaN(i.y)&&"none"!==t.getItemVisual(e,"symbol")}function ua(t,e,i){return i.itemModel=e,i.itemStyle=e.getModel("itemStyle").getItemStyle(),i.hoverItemStyle=e.getModel("emphasis.itemStyle").getItemStyle(),i.lineStyle=e.getModel("lineStyle").getLineStyle(),i.labelModel=e.getModel("label"),i.hoverLabelModel=e.getModel("emphasis.label"),!1===t.isExpand&&0!==t.children.length?i.symbolInnerColor=i.itemStyle.fill:i.symbolInnerColor="#fff",i}function ha(t,e,i,n,a,r){var o=!i,s=t.tree.getNodeByDataIndex(e),r=ua(s,s.getModel(),r),l=t.tree.root,u=s.parentNode===l?s:s.parentNode||s,h=t.getItemGraphicEl(u.dataIndex),c=u.getLayout(),d=h?{x:h.position[0],y:h.position[1],rawX:h.__radialOldRawX,rawY:h.__radialOldRawY}:c,f=s.getLayout();o?(i=new H_(t,e,r)).attr("position",[d.x,d.y]):i.updateData(t,e,r),i.__radialOldRawX=i.__radialRawX,i.__radialOldRawY=i.__radialRawY,i.__radialRawX=f.rawX,i.__radialRawY=f.rawY,n.add(i),t.setItemGraphicEl(e,i),Dp.updateProps(i,{position:[f.x,f.y]},a);var p=i.getSymbolPath();if("radial"===r.layout){var g,m,v=l.children[0],y=v.getLayout(),x=v.children.length;if(f.x===y.x&&!0===s.isExpand){var _={};_.x=(v.children[0].getLayout().x+v.children[x-1].getLayout().x)/2,_.y=(v.children[0].getLayout().y+v.children[x-1].getLayout().y)/2,(g=Math.atan2(_.y-y.y,_.x-y.x))<0&&(g=2*Math.PI+g),(m=_.x<y.x)&&(g-=Math.PI)}else(g=Math.atan2(f.y-y.y,f.x-y.x))<0&&(g=2*Math.PI+g),0===s.children.length||0!==s.children.length&&!1===s.isExpand?(m=f.x<y.x)&&(g-=Math.PI):(m=f.x>y.x)||(g-=Math.PI);var b=m?"left":"right";p.setStyle({textPosition:b,textRotation:-g,textOrigin:"center",verticalAlign:"middle"})}if(s.parentNode&&s.parentNode!==l){var w=i.__edge;w||(w=i.__edge=new Dp.BezierCurve({shape:da(r,d,d),style:du.defaults({opacity:0},r.lineStyle)})),Dp.updateProps(w,{shape:da(r,c,f),style:{opacity:1}},a),n.add(w)}}function ca(t,e,i,n,a,r){for(var o,s=t.tree.getNodeByDataIndex(e),l=t.tree.root,r=ua(s,s.getModel(),r),u=s.parentNode===l?s:s.parentNode||s;null==(o=u.getLayout());)u=u.parentNode===l?u:u.parentNode||u;Dp.updateProps(i,{position:[o.x+1,o.y+1]},a,function(){n.remove(i),t.setItemGraphicEl(e,null)}),i.fadeOut(null,{keepLabel:!0});var h=i.__edge;h&&Dp.updateProps(h,{shape:da(r,o,o),style:{opacity:0}},a,function(){n.remove(h)})}function da(t,e,i){var n,a,r,o,s=t.orient;if("radial"===t.layout){var l=e.rawX,u=e.rawY,h=i.rawX,c=i.rawY,d=GS(l,u),f=GS(l,u+(c-u)*t.curvature),p=GS(h,c+(u-c)*t.curvature),g=GS(h,c);return{x1:d.x,y1:d.y,x2:g.x,y2:g.y,cpx1:f.x,cpy1:f.y,cpx2:p.x,cpy2:p.y}}var l=e.x,u=e.y,h=i.x,c=i.y;return"LR"!==s&&"RL"!==s||(n=l+(h-l)*t.curvature,a=u,r=h+(l-h)*t.curvature,o=c),"TB"!==s&&"BT"!==s||(n=l,a=u+(c-u)*t.curvature,r=h,o=c+(u-c)*t.curvature),{x1:l,y1:u,x2:h,y2:c,cpx1:n,cpy1:a,cpx2:r,cpy2:o}}function fa(t){for(var e=[];t;)(t=t.parentNode)&&e.push(t);return e.reverse()}function pa(t){var e=0;du.each(t.children,function(t){pa(t);var i=t.value;du.isArray(i)&&(i=i[0]),e+=i});var i=t.value;du.isArray(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),du.isArray(t.value)?t.value[0]=i:t.value=i}function ga(t){this.group=new Dp.Group,t.add(this.group)}function ma(t,e){var i=t.visual,n=[];du.isObject(i)?bM(i,function(t){n.push(t)}):null!=i&&n.push(i);e||1!==n.length||{color:1,symbol:1}.hasOwnProperty(t.type)||(n[1]=n[0]),Ma(t,n)}function va(t){return{applyVisual:function(e,i,n){e=this.mapValueToVisual(e),n("color",t(i("color"),e))},_doMap:wa([0,1])}}function ya(t){var e=this.option.visual;return e[Math.round(_M(t,[0,1],[0,e.length-1],!0))]||{}}function xa(t){return function(e,i,n){n(t,this.mapValueToVisual(e))}}function _a(t){var e=this.option.visual;return e[this.option.loop&&t!==SM?t%e.length:t]}function ba(){return this.option.visual[0]}function wa(t){return{linear:function(e){return _M(e,t,this.option.visual,!0)},category:_a,piecewise:function(e,i){var n=Sa.call(this,i);return null==n&&(n=_M(e,t,this.option.visual,!0)),n},fixed:ba}}function Sa(t){var e=this.option,i=e.pieceList;if(e.hasSpecialVisual){var n=i[MM.findPieceIndex(t,i)];if(n&&n.visual)return n.visual[this.type]}}function Ma(t,e){return t.visual=e,"color"===t.type&&(t.parsedVisual=du.map(e,function(t){return Wu.parse(t)})),e}function Ia(t,e,i){return t?e<=i:e<i}function Aa(t,e,i,n,a,r){var o=t.getModel(),s=t.getLayout();if(s&&!s.invisible&&s.isInView){var l,u=t.getModel(CM),h=function(t,e,i,n){var a=du.extend({},e);return du.each(["color","colorAlpha","colorSaturation"],function(r){var o=t.get(r,!0);null==o&&i&&(o=i[r]),null==o&&(o=e[r]),null==o&&(o=n.get(r)),null!=o&&(a[r]=o)}),a}(u,e,i[t.depth],n),c=u.get("borderColor"),d=u.get("borderColorSaturation");null!=d&&(c=function(t,e){return null!=e?Wu.modifyHSL(e,null,null,t):null}(d,l=Ta(h))),t.setVisual("borderColor",c);var f=t.viewChildren;if(f&&f.length){var p=function(t,e,i,n,a,r){if(!r||!r.length)return;var o=Ca(e,"color")||null!=a.color&&"none"!==a.color&&(Ca(e,"colorAlpha")||Ca(e,"colorSaturation"));if(!o)return;var s=e.get("visualMin"),l=e.get("visualMax"),u=i.dataExtent.slice();null!=s&&s<u[0]&&(u[0]=s),null!=l&&l>u[1]&&(u[1]=l);var h=e.get("colorMappingBy"),c={type:o.name,dataExtent:u,visual:o.range};"color"!==c.type||"index"!==h&&"id"!==h?c.mappingMethod="linear":(c.mappingMethod="category",c.loop=!0);var d=new TM(c);return d.__drColorMappingBy=h,d}(0,o,s,0,h,f);du.each(f,function(t,e){if(t.depth>=a.length||t===a[t.depth]){Aa(t,function(t,e,i,n,a,r){var o=du.extend({},e);if(a){var s=a.type,l="color"===s&&a.__drColorMappingBy,u="index"===l?n:"id"===l?r.mapIdToIndex(i.getId()):i.getValue(t.get("visualDimension"));o[s]=a.mapValueToVisual(u)}return o}(o,h,t,e,p,r),i,n,a,r)}})}else l=Ta(h),t.setVisual("color",l)}}function Ta(t){var e=Da(t,"color");if(e){var i=Da(t,"colorAlpha"),n=Da(t,"colorSaturation");return n&&(e=Wu.modifyHSL(e,null,null,n)),i&&(e=Wu.modifyAlpha(e,i)),e}}function Da(t,e){var i=t[e];if(null!=i&&"none"!==i)return i}function Ca(t,e){var i=t.get(e);return DM(i)&&i.length?{name:e,range:i}:null}function La(t,e,i,n){var a,r;if(!t.isRemoved()){var o=t.getLayout();a=o.width,r=o.height;var s=(f=t.getModel()).get(zM),l=f.get(VM)/2,u=Oa(f),h=Math.max(s,u),c=s-l,d=h-l,f=t.getModel();t.setLayout({borderWidth:s,upperHeight:h,upperLabelHeight:u},!0);var p=(a=OM(a-2*c,0))*(r=OM(r-c-d,0)),g=function(t,e,i,n,a,r){var o=t.children||[],s=n.sort;"asc"!==s&&"desc"!==s&&(s=null);var l=null!=n.leafDepth&&n.leafDepth<=r;if(a&&!l)return t.viewChildren=[];!function(t,e){e&&t.sort(function(t,i){var n="asc"===e?t.getValue()-i.getValue():i.getValue()-t.getValue();return 0===n?"asc"===e?t.dataIndex-i.dataIndex:i.dataIndex-t.dataIndex:n})}(o=du.filter(o,function(t){return!t.isRemoved()}),s);var u=function(t,e,i){for(var n=0,a=0,r=e.length;a<r;a++)n+=e[a].getValue();var o=t.get("visualDimension");if(e&&e.length)if("value"===o&&i)s=[e[e.length-1].getValue(),e[0].getValue()],"asc"===i&&s.reverse();else{var s=[1/0,-1/0];EM(e,function(t){var e=t.getValue(o);e<s[0]&&(s[0]=e),e>s[1]&&(s[1]=e)})}else s=[NaN,NaN];return{sum:n,dataExtent:s}}(e,o,s);if(0===u.sum)return t.viewChildren=[];if(u.sum=function(t,e,i,n,a){if(!n)return i;for(var r=t.get("visibleMin"),o=a.length,s=o,l=o-1;l>=0;l--){var u=a["asc"===n?o-l-1:l].getValue();u/i*e<r&&(s=l,i-=u)}return"asc"===n?a.splice(0,o-s):a.splice(s,o-s),i}(e,i,u.sum,s,o),0===u.sum)return t.viewChildren=[];for(var h=0,c=o.length;h<c;h++){var d=o[h].getValue()/u.sum*i;o[h].setLayout({area:d})}l&&(o.length&&t.setLayout({isLeafRoot:!0},!0),o.length=0);return t.viewChildren=o,t.setLayout({dataExtent:u.dataExtent},!0),o}(t,f,p,e,i,n);if(g.length){var m={x:c,y:d,width:a,height:r},v=RM(a,r),y=1/0,x=[];x.area=0;for(var _=0,b=g.length;_<b;){var w=g[_];x.push(w),x.area+=w.getLayout().area;var S=function(t,e,i){for(var n,a=0,r=1/0,o=0,s=t.length;o<s;o++)(n=t[o].getLayout().area)&&(n<r&&(r=n),n>a&&(a=n));var l=t.area*t.area,u=e*e*i;return l?OM(u*a/l,l/(u*r)):1/0}(x,v,e.squareRatio);S<=y?(_++,y=S):(x.area-=x.pop().getLayout().area,Pa(x,v,m,l,!1),v=RM(m.width,m.height),x.length=x.area=0,y=1/0)}if(x.length&&Pa(x,v,m,l,!0),!i){var M=f.get("childrenVisibleMin");null!=M&&p<M&&(i=!0)}for(var _=0,b=g.length;_<b;_++)La(g[_],e,i,n+1)}}}function Pa(t,e,i,n,a){var r=e===i.width?0:1,o=1-r,s=["x","y"],l=["width","height"],u=i[s[r]],h=e?t.area/e:0;(a||h>i[l[o]])&&(h=i[l[o]]);for(var c=0,d=t.length;c<d;c++){var f=t[c],p={},g=h?f.getLayout().area/h:0,m=p[l[o]]=OM(h-2*n,0),v=i[s[r]]+i[l[r]]-u,y=c===d-1||v<g?v:g,x=p[l[r]]=OM(y-2*n,0);p[s[o]]=i[s[o]]+RM(n,m/2),p[s[r]]=u+RM(n,x/2),u+=y,f.setLayout(p,!0)}i[s[o]]+=h,i[l[o]]-=h}function ka(t,e,i,n,a){var r=t.getLayout(),o=i[a],s=o&&o===t;if(!(o&&!s||a===i.length&&t!==n)){t.setLayout({isInView:!0,invisible:!s&&!e.intersect(r),isAboveViewRoot:s},!0);var l=new ch(e.x-r.x,e.y-r.y,e.width,e.height);EM(t.viewChildren||[],function(t){ka(t,l,i,n,a+1)})}}function Oa(t){return t.get(BM)?t.get(GM):0}function Ra(t){return"_EC_"+t}function Na(t,e){this.id=null==t?"":t,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this.dataIndex=null==e?-1:e}function Ea(t,e,i){this.node1=t,this.node2=e,this.dataIndex=null==i?-1:i}function za(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1)}function Va(t){return"_"+t+"Type"}function Ba(t,e,i){var n=e.getItemVisual(i,"color"),a=e.getItemVisual(i,t),r=e.getItemVisual(i,t+"Size");if(a&&"none"!==a){du.isArray(r)||(r=[r,r]);var o=Fx.createSymbol(a,-r[0]/2,-r[1]/2,r[0],r[1],n);return o.name=t,o}}function Ga(t,e){var i=e[0],n=e[1],a=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,a?(t.cpx1=a[0],t.cpy1=a[1]):(t.cpx1=NaN,t.cpy1=NaN)}function Ha(t,e,i){Dp.Group.call(this),this._createLine(t,e,i)}function Fa(t){this._ctor=t||nI,this.group=new Dp.Group}function Wa(t){var e=t.hostModel;return{lineStyle:e.getModel("lineStyle").getLineStyle(),hoverLineStyle:e.getModel("emphasis.lineStyle").getLineStyle(),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label")}}function Ua(t){return isNaN(t[0])||isNaN(t[1])}function Za(t){return!Ua(t[0])&&!Ua(t[1])}function ja(t,e,i){for(var n,a=t[0],r=t[1],o=t[2],s=1/0,l=i*i,u=.1,h=.1;h<=.9;h+=.1){oI[0]=uI(a[0],r[0],o[0],h),oI[1]=uI(a[1],r[1],o[1],h);(f=cI(hI(oI,e)-l))<s&&(s=f,n=h)}for(var c=0;c<32;c++){var d=n+u;sI[0]=uI(a[0],r[0],o[0],n),sI[1]=uI(a[1],r[1],o[1],n),lI[0]=uI(a[0],r[0],o[0],d),lI[1]=uI(a[1],r[1],o[1],d);var f=hI(sI,e)-l;if(cI(f)<.01)break;var p=hI(lI,e)-l;u/=2,f<0?p>=0?n+=u:n-=u:p>=0?n-=u:n+=u}return n}function Ya(t,e){return t.getVisual("opacity")||t.getModel().get(e)}function Xa(t,e,i){var n=t.getGraphicEl(),a=Ya(t,e);null!=i&&(null==a&&(a=1),a*=i),n.downplay&&n.downplay(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",a)})}function qa(t,e){var i=Ya(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i)})}function $a(t){return t instanceof Array||(t=[t,t]),t}function Ka(t){t.eachEdge(function(t){var e=t.getModel().get("lineStyle.curveness")||0,i=pu.clone(t.node1.getLayout()),n=pu.clone(t.node2.getLayout()),a=[i,n];+e&&a.push([(i[0]+n[0])/2-(i[1]-n[1])*e,(i[1]+n[1])/2-(n[0]-i[0])*e]),t.setLayout(a)})}function Ja(t,e){return e&&("string"==typeof e?t=e.replace("{value}",null!=t?t:""):"function"==typeof e&&(t=e(t))),t}function Qa(t,e){function i(){r.ignore=r.hoverIgnore,o.ignore=o.hoverIgnore}function n(){r.ignore=r.normalIgnore,o.ignore=o.normalIgnore}Dp.Group.call(this);var a=new Dp.Polygon,r=new Dp.Polyline,o=new Dp.Text;this.add(a),this.add(r),this.add(o),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function tr(t,e){var i=t[e]-t[1-e];return{span:Math.abs(i),sign:i>0?-1:i<0?1:e?-1:1}}function er(t,e){return Math.min(e[1],Math.max(e[0],t))}function ir(t,e,i){this._axesMap=du.createHashMap(),this._axesLayout={},this.dimensions=t.dimensions,this._rect,this._model=t,this._init(t,e,i)}function nr(t,e){return QI(tA(t,e[0]),e[1])}function ar(t){yu.call(this),this._zr=t,this.group=new Dp.Group,this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+_A++,this._handlers={},lA(bA,function(t,e){this._handlers[e]=du.bind(t,this)},this)}function rr(t,e){var i=wA[e.brushType].createCover(t,e);return i.__brushOption=e,lr(i,e),t.group.add(i),i}function or(t,e){var i=hr(e);return i.endCreating&&(i.endCreating(t,e),lr(e,e.__brushOption)),e}function sr(t,e){var i=e.__brushOption;hr(e).updateCoverShape(t,e,i.range,i)}function lr(t,e){var i=e.z;null==i&&(i=fA),t.traverse(function(t){t.z=i,t.z2=i})}function ur(t,e){hr(e).updateCommon(t,e),sr(t,e)}function hr(t){return wA[t.__brushOption.brushType]}function cr(t,e,i){var n=t._panels;if(!n)return!0;var a,r=t._transform;return lA(n,function(t){t.isTargetByCursor(e,i,r)&&(a=t)}),a}function dr(t,e){var i=t._panels;if(!i)return!0;var n=e.__brushOption.panelId;return null==n||i[n]}function fr(t){var e=t._covers,i=e.length;return lA(e,function(e){t.group.remove(e)},t),e.length=0,!!i}function pr(t,e){var i=uA(t._covers,function(t){var e=t.__brushOption,i=du.clone(e.range);return{brushType:e.brushType,panelId:e.panelId,range:i}});t.trigger("brush",i,{isEnd:!!e.isEnd,removeOnClick:!!e.removeOnClick})}function gr(t){var e=t.length-1;return e<0&&(e=0),[t[0],t[e]]}function mr(t,e,i,n){var a=new Dp.Group;return a.add(new Dp.Rect({name:"main",style:_r(i),silent:!0,draggable:!0,cursor:"move",drift:sA(t,e,a,"nswe"),ondragend:sA(pr,e,{isEnd:!0})})),lA(n,function(i){a.add(new Dp.Rect({name:i,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:sA(t,e,a,i),ondragend:sA(pr,e,{isEnd:!0})}))}),a}function vr(t,e,i,n){var a=n.brushStyle.lineWidth||0,r=cA(a,gA),o=i[0][0],s=i[1][0],l=o-a/2,u=s-a/2,h=i[0][1],c=i[1][1],d=h-r+a/2,f=c-r+a/2,p=h-o,g=c-s,m=p+a,v=g+a;xr(t,e,"main",o,s,p,g),n.transformable&&(xr(t,e,"w",l,u,r,v),xr(t,e,"e",d,u,r,v),xr(t,e,"n",l,u,m,r),xr(t,e,"s",l,f,m,r),xr(t,e,"nw",l,u,r,r),xr(t,e,"ne",d,u,r,r),xr(t,e,"sw",l,f,r,r),xr(t,e,"se",d,f,r,r))}function yr(t,e){var i=e.__brushOption,n=i.transformable,a=e.childAt(0);a.useStyle(_r(i)),a.attr({silent:!n,cursor:n?"move":"default"}),lA(["w","e","n","s","se","sw","ne","nw"],function(i){var a=e.childOfName(i),r=wr(t,i);a&&a.attr({silent:!n,invisible:!n,cursor:n?yA[r]+"-resize":null})})}function xr(t,e,i,n,a,r,o){var s=e.childOfName(i);s&&s.setShape(function(t){var e=hA(t[0][0],t[1][0]),i=hA(t[0][1],t[1][1]),n=cA(t[0][0],t[1][0]),a=cA(t[0][1],t[1][1]);return{x:e,y:i,width:n-e,height:a-i}}(Ir(t,e,[[n,a],[n+r,a+o]])))}function _r(t){return du.defaults({strokeNoScale:!0},t.brushStyle)}function br(t,e,i,n){var a=[hA(t,i),hA(e,n)],r=[cA(t,i),cA(e,n)];return[[a[0],r[0]],[a[1],r[1]]]}function wr(t,e){if(e.length>1){return("e"===(i=[wr(t,(e=e.split(""))[0]),wr(t,e[1])])[0]||"w"===i[0])&&i.reverse(),i.join("")}var i=Dp.transformDirection({w:"left",e:"right",n:"top",s:"bottom"}[e],function(t){return Dp.getTransform(t.group)}(t));return{left:"w",right:"e",top:"n",bottom:"s"}[i]}function Sr(t,e,i,n,a,r,o,s){var l=n.__brushOption,u=t(l.range),h=Mr(i,r,o);lA(a.split(""),function(t){var e=vA[t];u[e[0]][e[1]]+=h[e[0]]}),l.range=e(br(u[0][0],u[1][0],u[0][1],u[1][1])),ur(i,n),pr(i,{isEnd:!1})}function Mr(t,e,i){var n=t.group,a=n.transformCoordToLocal(e,i),r=n.transformCoordToLocal(0,0);return[a[0]-r[0],a[1]-r[1]]}function Ir(t,e,i){var n=dr(t,e);return n&&!0!==n?n.clipPath(i,t._transform):du.clone(i)}function Ar(t){var e=t.event;e.preventDefault&&e.preventDefault()}function Tr(t,e,i){return t.childOfName("main").contain(e,i)}function Dr(t,e,i,n){var a,r=t._creatingCover,o=t._creatingPanel,s=t._brushOption;if(t._track.push(i.slice()),function(t){var e=t._track;if(!e.length)return!1;var i=e[e.length-1],n=e[0],a=i[0]-n[0],r=i[1]-n[1];return dA(a*a+r*r,.5)>pA}(t)||r){if(o&&!r){"single"===s.brushMode&&fr(t);var l=du.clone(s);l.brushType=Cr(l.brushType,o),l.panelId=!0===o?null:o.panelId,r=t._creatingCover=rr(t,l),t._covers.push(r)}if(r){var u=wA[Cr(t._brushType,o)];r.__brushOption.range=u.getCreatingRange(Ir(t,r,t._track)),n&&(or(t,r),u.updateCommon(t,r)),sr(t,r),a={isEnd:n}}}else n&&"single"===s.brushMode&&s.removeOnClick&&cr(t,e,i)&&fr(t)&&(a={isEnd:n,removeOnClick:!0});return a}function Cr(t,e){return"auto"===t?e.defaultBrushType:t}function Lr(t){if(this._dragging){Ar(t);var e=Dr(this,t,this.group.transformCoordToLocal(t.offsetX,t.offsetY),!0);this._dragging=!1,this._track=[],this._creatingCover=null,e&&pr(this,e)}}function Pr(t){return{createCover:function(e,i){return mr(sA(Sr,function(e){var i=[e,[0,100]];return t&&i.reverse(),i},function(e){return e[t]}),e,i,[["w","e"],["n","s"]][t])},getCreatingRange:function(e){var i=gr(e);return[hA(i[0][t],i[1][t]),cA(i[0][t],i[1][t])]},updateCoverShape:function(e,i,n,a){var r,o=dr(e,i);if(!0!==o&&o.getLinearBrushOtherExtent)r=o.getLinearBrushOtherExtent(t,e._transform);else{var s=e._zr;r=[0,[s.getWidth(),s.getHeight()][1-t]]}var l=[n,r];t&&l.reverse(),vr(e,i,l,a)},updateCommon:yr,contain:Tr}}function kr(t){return ch.create(t)}function Or(t,e){var i=t._model;return i.get("axisExpandable")&&i.get("axisExpandTriggerOn")===e}function Rr(t,e,i,n){for(var a=[],r=0;r<i.length;r++){var o=i[r],s=t.get(t.mapDimension(o),e);(function(t,e){return"category"===e?null==t:null==t||isNaN(t)})(s,n.getAxis(o).type)||a.push(n.dataToPoint(s,o))}return a}function Nr(t,e,i,n,a){var r=Rr(t,i,n,a),o=new Dp.Polyline({shape:{points:r},silent:!0,z2:10});return e.add(o),t.setItemGraphicEl(i,o),o}function Er(t){var e=t.get("smooth",!0);return!0===e&&(e=PA),{lineStyle:t.getModel("lineStyle").getLineStyle(),smooth:null!=e?e:PA}}function zr(t,e,i,n){var a=n.lineStyle;if(e.hasItemOption){a=e.getItemModel(i).getModel("lineStyle").getLineStyle()}t.useStyle(a);var r=t.style;r.fill=null,r.stroke=e.getItemVisual(i,"color"),r.opacity=e.getItemVisual(i,"opacity"),n.smooth&&(t.shape.smooth=n.smooth)}function Vr(t,e,i){du.each(t,function(t){var n,a,r,o=0,s=t.length;for(t.sort(function(t,e){return t.getLayout().y-e.getLayout().y}),r=0;r<s;r++){if(n=t[r],(a=o-n.getLayout().y)>0){l=n.getLayout().y+a;n.setLayout({y:l},!0)}o=n.getLayout().y+n.getLayout().dy+e}if((a=o-e-i)>0){var l=n.getLayout().y-a;for(n.setLayout({y:l},!0),o=n.getLayout().y,r=s-2;r>=0;--r)(a=(n=t[r]).getLayout().y+n.getLayout().dy+e-o)>0&&(l=n.getLayout().y-a,n.setLayout({y:l},!0)),o=n.getLayout().y}})}function Br(t,e){for(var i=0,n=t.length,a=-1;++a<n;){var r=+e.call(t,t[a],a);isNaN(r)||(i+=r)}return i}function Gr(t){return t.getLayout().y+t.getLayout().dy/2}function Hr(t){return t.getValue()}function Fr(t,e,i,n,a){var r=t.ends,o=new jA({shape:{points:a?function(t,e,i){return du.map(t,function(t){return t=t.slice(),t[e]=i.initBaseline,t})}(r,n,t):r}});return Wr(t,o,e,i,a),o}function Wr(t,e,i,n,a){var r=i.hostModel;(0,Dp[a?"initProps":"updateProps"])(e,{shape:{points:t.ends}},r,n);var o=i.getItemModel(n),s=o.getModel(UA),l=i.getItemVisual(n,"color"),u=s.getItemStyle(["borderColor"]);u.stroke=l,u.strokeNoScale=!0,e.useStyle(u),e.z2=100;var h=o.getModel(ZA).getItemStyle();Dp.setHoverStyle(e,h)}function Ur(t,e,i){var n=t.ends;return new nT({shape:{points:i?function(t,e){return du.map(t,function(t){return t=t.slice(),t[1]=e.initBaseline,t})}(n,t):n},z2:100})}function Zr(t,e,i,n){var a=e.getItemModel(i),r=a.getModel(tT),o=e.getItemVisual(i,"color"),s=e.getItemVisual(i,"borderColor")||o,l=r.getItemStyle(iT);t.useStyle(l),t.style.strokeNoScale=!0,t.style.fill=o,t.style.stroke=s,t.__simpleBox=n;var u=a.getModel(eT).getItemStyle();Dp.setHoverStyle(t,u)}function jr(t,e,i){var n=t.getData(),a=n.getLayout("largePoints"),r=new aT({shape:{points:a},__sign:1});e.add(r);var o=new aT({shape:{points:a},__sign:-1});e.add(o),Yr(1,r,t,n),Yr(-1,o,t,n),i&&(r.incremental=!0,o.incremental=!0)}function Yr(t,e,i,n){var a=t>0?"P":"N",r=n.getVisual("borderColor"+a)||n.getVisual("color"+a),o=i.getModel(tT).getItemStyle(iT);e.useStyle(o),e.style.fill=null,e.style.stroke=r}function Xr(t,e,i,n,a){return i>n?-1:i<n?1:e>0?t.get(a,e-1)<=n?1:-1:1}function qr(t,e){t.eachChild(function(t){t.attr({z:e.z,zlevel:e.zlevel,style:{stroke:"stroke"===e.brushType?e.color:null,fill:"fill"===e.brushType?e.color:null}})})}function $r(t,e){vT.call(this);var i=new H_(t,e),n=new vT;this.add(i),this.add(n),n.beforeUpdate=function(){this.attr(i.getScale())},this.updateData(t,e)}function Kr(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=ST(e,function(t){var e={coords:[t[0].coord,t[1].coord]};return t[0].name&&(e.fromName=t[0].name),t[1].name&&(e.toName=t[1].name),wT([e,t[0],t[1]])}))}function Jr(t,e,i){Dp.Group.call(this),this.add(this.createLine(t,e,i)),this._updateEffectSymbol(t,e)}function Qr(t,e,i){Dp.Group.call(this),this._createPolyline(t,e,i)}function to(t,e,i){LT.call(this,t,e,i),this._lastFrame=0,this._lastFramePercent=0}function eo(){this.group=new Dp.Group}function io(t){return t instanceof Array||(t=[t,t]),t}function no(){var t=du.createCanvas();this.canvas=t,this.blurSize=30,this.pointSize=20,this.maxOpacity=1,this.minOpacity=0,this._gradientPixels={}}function ao(t,e,i,n){var a=t.getItemLayout(e),r=i.get("symbolRepeat"),o=i.get("symbolClip"),s=i.get("symbolPosition")||"start",l=(i.get("symbolRotate")||0)*Math.PI/180||0,u=i.get("symbolPatternSize")||2,h=i.isAnimationEnabled(),c={dataIndex:e,layout:a,itemModel:i,symbolType:t.getItemVisual(e,"symbol")||"circle",color:t.getItemVisual(e,"color"),symbolClip:o,symbolRepeat:r,symbolRepeatDirection:i.get("symbolRepeatDirection"),symbolPatternSize:u,rotation:l,animationModel:h?i:null,hoverAnimation:h&&i.get("hoverAnimation"),z2:i.getShallow("z",!0)||0};!function(t,e,i,n,a){var r,o=n.valueDim,s=t.get("symbolBoundingData"),l=n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),u=l.toGlobalCoord(l.dataToCoord(0)),h=1-+(i[o.wh]<=0);if(du.isArray(s)){var c=[ro(l,s[0])-u,ro(l,s[1])-u];c[1]<c[0]&&c.reverse(),r=c[h]}else r=null!=s?ro(l,s)-u:e?n.coordSysExtent[o.index][h]-u:i[o.wh];a.boundingLength=r,e&&(a.repeatCutLength=i[o.wh]);a.pxSign=r>0?1:r<0?-1:0}(i,r,a,n,c),function(t,e,i,n,a,r,o,s,l,u){var h=l.valueDim,c=l.categoryDim,d=Math.abs(i[c.wh]),f=t.getItemVisual(e,"symbolSize");du.isArray(f)?f=f.slice():(null==f&&(f="100%"),f=[f,f]);f[c.index]=UT(f[c.index],d),f[h.index]=UT(f[h.index],n?d:Math.abs(r)),u.symbolSize=f;(u.symbolScale=[f[0]/s,f[1]/s])[h.index]*=(l.isHorizontal?-1:1)*o}(t,e,a,r,0,c.boundingLength,c.pxSign,u,n,c),function(t,e,i,n,a){var r=t.get(YT)||0;r&&(qT.attr({scale:e.slice(),rotation:i}),qT.updateTransform(),r/=qT.getLineScale(),r*=e[n.valueDim.index]);a.valueLineWidth=r}(i,c.symbolScale,l,n,c);var d=c.symbolSize,f=i.get("symbolOffset");return du.isArray(f)&&(f=[UT(f[0],d[0]),UT(f[1],d[1])]),function(t,e,i,n,a,r,o,s,l,u,h,c){var d=h.categoryDim,f=h.valueDim,p=c.pxSign,g=Math.max(e[f.index]+s,0),m=g;if(n){var v=Math.abs(l),y=du.retrieve(t.get("symbolMargin"),"15%")+"",x=!1;y.lastIndexOf("!")===y.length-1&&(x=!0,y=y.slice(0,y.length-1)),y=UT(y,e[f.index]);var _=Math.max(g+2*y,0),b=x?0:2*y,w=ZT(n),S=w?n:_o((v+b)/_);_=g+2*(y=(v-S*g)/2/(x?S:S-1)),b=x?0:2*y,w||"fixed"===n||(S=u?_o((Math.abs(u)+b)/_):0),m=S*_-b,c.repeatTimes=S,c.symbolMargin=y}var M=p*(m/2),I=c.pathPosition=[];I[d.index]=i[d.wh]/2,I[f.index]="start"===o?M:"end"===o?l-M:l/2,r&&(I[0]+=r[0],I[1]+=r[1]);var A=c.bundlePosition=[];A[d.index]=i[d.xy],A[f.index]=i[f.xy];var T=c.barRectShape=du.extend({},i);T[f.wh]=p*Math.max(Math.abs(i[f.wh]),Math.abs(I[f.index]+M)),T[d.wh]=i[d.wh];var D=c.clipShape={};D[d.xy]=-i[d.xy],D[d.wh]=h.ecSize[d.wh],D[f.xy]=0,D[f.wh]=i[f.wh]}(i,d,a,r,0,f,s,c.valueLineWidth,c.boundingLength,c.repeatCutLength,n,c),c}function ro(t,e){return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))}function oo(t){var e=t.symbolPatternSize,i=WT(t.symbolType,-e/2,-e/2,e,e,t.color);return i.attr({culling:!0}),"image"!==i.type&&i.setStyle({strokeNoScale:!0}),i}function so(t,e,i,n){function a(t){var e=l.slice(),n=i.pxSign,a=t;return("start"===i.symbolRepeatDirection?n>0:n<0)&&(a=h-1-t),e[u.index]=d*(a-h/2+.5)+l[u.index],{position:e,scale:i.symbolScale.slice(),rotation:i.rotation}}var r=t.__pictorialBundle,o=i.symbolSize,s=i.valueLineWidth,l=i.pathPosition,u=e.valueDim,h=i.repeatTimes||0,c=0,d=o[e.valueDim.index]+s+2*i.symbolMargin;for(vo(t,function(t){t.__pictorialAnimationIndex=c,t.__pictorialRepeatTimes=h,c<h?yo(t,null,a(c),i,n):yo(t,null,{scale:[0,0]},i,n,function(){r.remove(t)}),fo(t,i),c++});c<h;c++){var f=oo(i);f.__pictorialAnimationIndex=c,f.__pictorialRepeatTimes=h,r.add(f);var p=a(c);yo(f,{position:p.position,scale:[0,0]},{scale:p.scale,rotation:p.rotation},i,n),f.on("mouseover",function(){vo(t,function(t){t.trigger("emphasis")})}).on("mouseout",function(){vo(t,function(t){t.trigger("normal")})}),fo(f,i)}}function lo(t,e,i,n){var a=t.__pictorialBundle,r=t.__pictorialMainPath;r?yo(r,null,{position:i.pathPosition.slice(),scale:i.symbolScale.slice(),rotation:i.rotation},i,n):(r=t.__pictorialMainPath=oo(i),a.add(r),yo(r,{position:i.pathPosition.slice(),scale:[0,0],rotation:i.rotation},{scale:i.symbolScale.slice()},i,n),r.on("mouseover",function(){this.trigger("emphasis")}).on("mouseout",function(){this.trigger("normal")})),fo(r,i)}function uo(t,e,i){var n=du.extend({},e.barRectShape),a=t.__pictorialBarRect;a?yo(a,null,{shape:n},e,i):(a=t.__pictorialBarRect=new Dp.Rect({z2:2,shape:n,silent:!0,style:{stroke:"transparent",fill:"transparent",lineWidth:0}}),t.add(a))}function ho(t,e,i,n){if(i.symbolClip){var a=t.__pictorialClipPath,r=du.extend({},i.clipShape),o=e.valueDim,s=i.animationModel,l=i.dataIndex;if(a)Dp.updateProps(a,{shape:r},s,l);else{r[o.wh]=0,a=new Dp.Rect({shape:r}),t.__pictorialBundle.setClipPath(a),t.__pictorialClipPath=a;var u={};u[o.wh]=i.clipShape[o.wh],Dp[n?"updateProps":"initProps"](a,{shape:u},s,l)}}}function co(t,e){var i=t.getItemModel(e);return i.getAnimationDelayParams=function(t){return{index:t.__pictorialAnimationIndex,count:t.__pictorialRepeatTimes}},i.isAnimationEnabled=function(){return this.parentModel.isAnimationEnabled()&&!!this.getShallow("animation")},i}function fo(t,e){t.off("emphasis").off("normal");var i=e.symbolScale.slice();e.hoverAnimation&&t.on("emphasis",function(){this.animateTo({scale:[1.1*i[0],1.1*i[1]]},400,"elasticOut")}).on("normal",function(){this.animateTo({scale:i.slice()},400,"elasticOut")})}function po(t,e,i,n){var a=new Dp.Group,r=new Dp.Group;return a.add(r),a.__pictorialBundle=r,r.attr("position",i.bundlePosition.slice()),i.symbolRepeat?so(a,e,i):lo(a,0,i),uo(a,i,n),ho(a,e,i,n),a.__pictorialShapeStr=mo(t,i),a.__pictorialSymbolMeta=i,a}function go(t,e,i,n){var a=n.__pictorialBarRect;a&&(a.style.text=null);var r=[];vo(n,function(t){r.push(t)}),n.__pictorialMainPath&&r.push(n.__pictorialMainPath),n.__pictorialClipPath&&(i=null),du.each(r,function(t){Dp.updateProps(t,{scale:[0,0]},i,e,function(){n.parent&&n.parent.remove(n)})}),t.setItemGraphicEl(e,null)}function mo(t,e){return[t.getItemVisual(e.dataIndex,"symbol")||"none",!!e.symbolRepeat,!!e.symbolClip].join(":")}function vo(t,e,i){du.each(t.__pictorialBundle.children(),function(n){n!==t.__pictorialBarRect&&e.call(i,n)})}function yo(t,e,i,n,a,r){e&&t.attr(e),n.symbolClip&&!a?i&&t.attr(i):i&&Dp[a?"updateProps":"initProps"](t,i,n.animationModel,n.dataIndex,r)}function xo(t,e,i){var n=i.color,a=i.dataIndex,r=i.itemModel,o=r.getModel("itemStyle").getItemStyle(["color"]),s=r.getModel("emphasis.itemStyle").getItemStyle(),l=r.getShallow("cursor");vo(t,function(t){t.setColor(n),t.setStyle(du.defaults({fill:n,opacity:i.opacity},o)),Dp.setHoverStyle(t,s),l&&(t.cursor=l),t.z2=i.z2});var u={},h=e.valueDim.posDesc[+(i.boundingLength>0)],c=t.__pictorialBarRect;jT(c.style,u,r,n,e.seriesModel,a,h),Dp.setHoverStyle(c,u)}function _o(t){var e=Math.round(t);return Math.abs(t-e)<1e-4?e:Math.ceil(t)}function bo(t,e,i){this.dimension="single",this.dimensions=["single"],this._axis=null,this._rect,this._init(t,e,i),this.model=t}function wo(t,e,i,n,a){var r=t.axis;if(!r.scale.isBlank()&&r.containData(e))if(t.involveSeries){var o=function(t,e){var i=e.axis,n=i.dim,a=t,r=[],o=Number.MAX_VALUE,s=-1;return lD(e.seriesModels,function(e,l){var u,h,c=e.getData().mapDimension(n,!0);if(e.getAxisTooltipData){var d=e.getAxisTooltipData(c,t,i);h=d.dataIndices,u=d.nestestValue}else{if(!(h=e.getData().indicesOfNearest(c[0],t,"category"===i.type?.5:null)).length)return;u=e.getData().get(c[0],h[0])}if(null!=u&&isFinite(u)){var f=t-u,p=Math.abs(f);p<=o&&((p<o||f>=0&&s<0)&&(o=p,s=f,a=u,r.length=0),lD(h,function(t){r.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:r,snapToValue:a}}(e,t),s=o.payloadBatch,l=o.snapToValue;s[0]&&null==a.seriesIndex&&du.extend(a,s[0]),!n&&t.snap&&r.containData(l)&&null!=l&&(e=l),i.showPointer(t,e,s,a),i.showTooltip(t,o,l)}else i.showPointer(t,e)}function So(t){var e=t.axis.model,i={},n=i.axisDim=t.axis.dim;return i.axisIndex=i[n+"AxisIndex"]=e.componentIndex,i.axisName=i[n+"AxisName"]=e.name,i.axisId=i[n+"AxisId"]=e.id,i}function Mo(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function Io(t,e,i,n){e.handler(t,i,n)}function Ao(){}function To(t,e,i,n){Do(mD(i).lastProp,n)||(mD(i).lastProp=n,e?Dp.updateProps(i,n,t):(i.stopAnimation(),i.attr(n)))}function Do(t,e){if(du.isObject(t)&&du.isObject(e)){var i=!0;return du.each(e,function(e,n){i=i&&Do(t[n],e)}),!!i}return t===e}function Co(t,e){t[e.get("label.show")?"show":"hide"]()}function Lo(t){return{position:t.position.slice(),rotation:t.rotation||0}}function Po(t,e,i){var n=e.get("z"),a=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=a&&(t.zlevel=a),t.silent=i)})}function ko(t,e,i,n,a){var r=Oo(i.get("value"),e.axis,e.ecModel,i.get("seriesDataIndices"),{precision:i.get("label.precision"),formatter:i.get("label.formatter")}),o=i.getModel("label"),s=qp.normalizeCssArray(o.get("padding")||0),l=o.getFont(),u=jh.getBoundingRect(r,l),h=a.position,c=u.width+s[1]+s[3],d=u.height+s[0]+s[2],f=a.align;"right"===f&&(h[0]-=c),"center"===f&&(h[0]-=c/2);var p=a.verticalAlign;"bottom"===p&&(h[1]-=d),"middle"===p&&(h[1]-=d/2),function(t,e,i,n){var a=n.getWidth(),r=n.getHeight();t[0]=Math.min(t[0]+e,a)-e,t[1]=Math.min(t[1]+i,r)-i,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}(h,c,d,n);var g=o.get("backgroundColor");g&&"auto"!==g||(g=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:c,height:d,r:o.get("borderRadius")},position:h.slice(),style:{text:r,textFont:l,textFill:o.getTextColor(),textPosition:"inside",fill:g,stroke:o.get("borderColor")||"transparent",lineWidth:o.get("borderWidth")||0,shadowBlur:o.get("shadowBlur"),shadowColor:o.get("shadowColor"),shadowOffsetX:o.get("shadowOffsetX"),shadowOffsetY:o.get("shadowOffsetY")},z2:10}}function Oo(t,e,i,n,a){t=e.scale.parse(t);var r=e.scale.getLabel(t,{precision:a.precision}),o=a.formatter;if(o){var s={value:kx.getAxisRawValue(e,t),seriesData:[]};du.each(n,function(t){var e=i.getSeriesByIndex(t.seriesIndex),n=t.dataIndexInside,a=e&&e.getDataParams(n);a&&s.seriesData.push(a)}),du.isString(o)?r=o.replace("{value}",r):du.isFunction(o)&&(r=o(s))}return r}function Ro(t,e,i){var n=Mu.create();return Mu.rotate(n,n,i.rotation),Mu.translate(n,n,i.position),Dp.applyTransform([t.dataToCoord(e),(i.labelOffset||0)+(i.labelDirection||1)*(i.labelMargin||0)],n)}function No(t,e){var i={};return i[e.dim+"AxisIndex"]=e.index,t.getCartesian(i)}function Eo(t){return"x"===t.dim?0:1}function zo(t){return t.isHorizontal()?0:1}function Vo(t,e){var i=t.getRect();return[i[SD[e]],i[SD[e]]+i[MD[e]]]}function Bo(t,e,i){if(t.count())for(var n,a=e.coordinateSystem,r=e.getLayerSeries(),o=t.mapDimension("single"),s=t.mapDimension("value"),l=du.map(r,function(e){return du.map(e.indices,function(e){var i=a.dataToPoint(t.get(o,e));return i[1]=t.get(s,e),i})}),u=function(t){for(var e=t.length,i=t[0].length,n=[],a=[],r=0,o={},s=0;s<i;++s){for(var l=0,u=0;l<e;++l)u+=t[l][s][1];u>r&&(r=u),n.push(u)}for(var h=0;h<i;++h)a[h]=(r-n[h])/2;r=0;for(var c=0;c<i;++c){var d=n[c]+a[c];d>r&&(r=d)}return o.y0=a,o.max=r,o}(l),h=u.y0,c=i/u.max,d=r.length,f=r[0].indices.length,p=0;p<f;++p){n=h[p]*c,t.setItemLayout(r[0].indices[p],{layerIndex:0,x:l[0][p][0],y0:n,y:l[0][p][1]*c});for(var g=1;g<d;++g)n+=l[g-1][p][1]*c,t.setItemLayout(r[g].indices[p],{layerIndex:g,x:l[g][p][0],y0:n,y:l[g][p][1]*c})}}function Go(t){var e=0;du.each(t.children,function(t){Go(t);var i=t.value;du.isArray(i)&&(i=i[0]),e+=i});var i=t.value;du.isArray(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),du.isArray(t.value)?t.value[0]=i:t.value=i}function Ho(t,e,i){function n(){o.ignore=o.hoverIgnore}function a(){o.ignore=o.normalIgnore}Dp.Group.call(this);var r=new Dp.Sector({z2:VD});r.seriesIndex=e.seriesIndex;var o=new Dp.Text({z2:BD,silent:t.getModel("label").get("silent")});this.add(r),this.add(o),this.updateData(!0,t,"normal",e,i),this.on("emphasis",n).on("normal",a).on("mouseover",n).on("mouseout",a)}function Fo(t,e){var i=t.children||[];t.children=function(t,e){{if("function"==typeof e)return t.sort(e);var i="asc"===e;return t.sort(function(t,e){var n=(t.getValue()-e.getValue())*(i?1:-1);return 0===n?(t.dataIndex-e.dataIndex)*(i?-1:1):n})}}(i,e),i.length&&du.each(t.children,function(t){Fo(t,e)})}function Wo(t,e,i,n,a){null==i[t]||a||(e[t]=i[t],i[t]=n[t])}function Uo(t,e,i,n){function a(t){null==t&&(t=l),g&&(u=e.getItemModel(t),h=u.getModel(JD),c=u.getModel(QD),d=e.getItemVisual(t,"color"),g=!1)}var r=t.get("renderItem"),o=t.coordinateSystem,s={};o&&(s=o.prepareCustoms?o.prepareCustoms():eC[o.type](o));var l,u,h,c,d,f=du.defaults({getWidth:n.getWidth,getHeight:n.getHeight,getZr:n.getZr,getDevicePixelRatio:n.getDevicePixelRatio,value:function(t,i){return null==i&&(i=l),e.get(e.getDimension(t||0),i)},style:function(i,n){null==n&&(n=l),a(n);var r=u.getModel($D).getItemStyle();null!=d&&(r.fill=d);var o=e.getItemVisual(n,"opacity");return null!=o&&(r.opacity=o),Dp.setTextStyle(r,h,null,{autoColor:d,isRectText:!0}),r.text=h.getShallow("show")?du.retrieve2(t.getFormattedLabel(n,"normal"),XD(e,n)):null,i&&du.extend(r,i),r},styleEmphasis:function(i,n){null==n&&(n=l),a(n);var r=u.getModel(KD).getItemStyle();return Dp.setTextStyle(r,c,null,{isRectText:!0},!0),r.text=c.getShallow("show")?du.retrieve3(t.getFormattedLabel(n,"emphasis"),t.getFormattedLabel(n,"normal"),XD(e,n)):null,i&&du.extend(r,i),r},visual:function(t,i){return null==i&&(i=l),e.getItemVisual(i,t)},barLayout:function(t){if(o.getBaseAxis){var e=o.getBaseAxis();return qD(du.defaults({axis:e},t),n)}},currentSeriesIndices:function(){return i.getCurrentSeriesIndices()},font:function(t){return Dp.getFont(t,i)}},s.api||{}),p={context:{},seriesId:t.id,seriesName:t.name,seriesIndex:t.seriesIndex,coordSys:s.coordSys,dataInsideLength:e.count(),encode:function(t){var e={};return du.each(t.dimensions,function(i,n){var a=t.getDimensionInfo(i);if(!a.isExtraCoord){var r=a.coordDim;(e[r]=e[r]||[])[a.coordDimIndex]=n}}),e}(t.getData())},g=!0;return function(t){return l=t,g=!0,r&&r(du.defaults({dataIndexInside:t,dataIndex:e.getRawIndex(t)},p),f)||{}}}function Zo(t,e,i,n,a,r){return(t=jo(t,e,i,n,a,r))&&r.setItemGraphicEl(e,t),t}function jo(t,e,i,n,a,r){var o=i.type;if(!t||o===t.__customGraphicType||"path"===o&&i.pathData===t.__customPathData||"image"===o&&i.style.image===t.__customImagePath||"text"===o&&i.style.text===t.__customText||(a.remove(t),t=null),null!=o){var s=!t;if(!t&&(t=function(t){var e,i=t.type;if("path"===i){var n=t.shape;(e=Dp.makePath(n.pathData,null,{x:n.x||0,y:n.y||0,width:n.width||0,height:n.height||0},"center")).__customPathData=t.pathData}else"image"===i?(e=new Dp.Image({})).__customImagePath=t.style.image:"text"===i?(e=new Dp.Text({})).__customText=t.style.text:e=new(0,Dp[i.charAt(0).toUpperCase()+i.slice(1)]);return e.__customGraphicType=i,e.name=t.name,e}(i)),function(t,e,i,n,a,r){var o={},s=i.style||{};i.shape&&(o.shape=du.clone(i.shape)),i.position&&(o.position=i.position.slice()),i.scale&&(o.scale=i.scale.slice()),i.origin&&(o.origin=i.origin.slice()),i.rotation&&(o.rotation=i.rotation),"image"===t.type&&i.style&&(l=o.style={},du.each(["x","y","width","height"],function(e){Wo(e,l,s,t.style,r)}));if("text"===t.type&&i.style){var l=o.style={};du.each(["x","y"],function(e){Wo(e,l,s,t.style,r)}),!s.hasOwnProperty("textFill")&&s.fill&&(s.textFill=s.fill),!s.hasOwnProperty("textStroke")&&s.stroke&&(s.textStroke=s.stroke)}if("group"!==t.type&&(t.useStyle(s),r)){t.style.opacity=0;var u=s.opacity;null==u&&(u=1),Dp.initProps(t,{style:{opacity:u}},n,e)}r?t.attr(o):Dp.updateProps(t,o,n,e),t.attr({z2:i.z2||0,silent:i.silent}),!1!==i.styleEmphasis&&Dp.setHoverStyle(t,i.styleEmphasis)}(t,e,i,n,0,s),"group"===o){var l=t.children()||[],u=i.children||[];if(i.diffChildrenByName)!function(t){new hy(t.oldChildren,t.newChildren,Yo,Yo,t).add(Xo).update(Xo).remove(function(t){var e=this.context,i=e.oldChildren[t];i&&e.group.remove(i)}).execute()}({oldChildren:l,newChildren:u,dataIndex:e,animatableModel:n,group:t,data:r});else{for(var h=0;h<u.length;h++)jo(t.childAt(h),e,u[h],n,t,r);for(;h<l.length;h++)l[h]&&t.remove(l[h])}}return a.add(t),t}}function Yo(t,e){var i=t&&t.name;return null!=i?i:tC+e}function Xo(t,e){var i=this.context,n=null!=t?i.newChildren[t]:null;jo(null!=e?i.oldChildren[e]:null,i.dataIndex,n,i.animatableModel,i.group,i.data)}function qo(t,e,i,n){var a=i.type,r=new(0,Dp[a.charAt(0).toUpperCase()+a.slice(1)])(i);e.add(r),n.set(t,r),r.__ecGraphicId=t}function $o(t,e){var i=t&&t.parent;i&&("group"===t.type&&t.traverse(function(t){$o(t,e)}),e.removeKey(t.__ecGraphicId),i.remove(t))}function Ko(t,e){var i;return du.each(e,function(e){null!=t[e]&&"auto"!==t[e]&&(i=!0)}),i}function Jo(t,e,i){var n,a={},r="toggleSelected"===t;return i.eachComponent("legend",function(i){r&&null!=n?i[n?"select":"unSelect"](e.name):(i[t](e.name),n=i.isSelected(e.name));var o=i.getData();du.each(o,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);a.hasOwnProperty(e)?a[e]=a[e]&&n:a[e]=n}})}),{name:e.name,selected:a}}function Qo(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function ts(t,e,i,n){var a=i.getZr().storage.getDisplayList()[0];a&&a.useHoverLayer||i.dispatchAction({type:"highlight",seriesName:t.name,name:e,excludeSeriesId:n})}function es(t,e,i,n){var a=i.getZr().storage.getDisplayList()[0];a&&a.useHoverLayer||i.dispatchAction({type:"downplay",seriesName:t.name,name:e,excludeSeriesId:n})}function is(t,e,i){var n=[1,1];n[t.getOrient().index]=0,vC(e,i,{type:"box",ignoreSize:n})}function ns(t,e){if(Jl.wxa)return null;var i=document.createElement("div"),n=this._zr=e.getZr();this.el=i,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var a=this;i.onmouseenter=function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0},i.onmousemove=function(e){if(e=e||window.event,!a._enterable){var i=n.handler;mc.normalizeEvent(t,e,!0),i.dispatch("mousemove",e)}},i.onmouseleave=function(){a._enterable&&a._show&&a.hideLater(a._hideDelay),a._inContent=!1}}function as(t){for(var e=t.pop();t.length;){var i=t.pop();i&&(Vp.isInstance(i)&&(i=i.get("tooltip",!0)),"string"==typeof i&&(i={formatter:i}),e=new Vp(i,e,e.ecModel))}return e}function rs(t,e){return t.dispatchAction||du.bind(e.dispatchAction,e)}function os(t){var e=t.clientWidth,i=t.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var n=document.defaultView.getComputedStyle(t);n&&(e+=parseInt(n.paddingLeft,10)+parseInt(n.paddingRight,10)+parseInt(n.borderLeftWidth,10)+parseInt(n.borderRightWidth,10),i+=parseInt(n.paddingTop,10)+parseInt(n.paddingBottom,10)+parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10))}return{width:e,height:i}}function ss(t){return"center"===t||"middle"===t}function ls(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function us(t){return t.dim}function hs(t,e){c_.call(this,"radius",t,e),this.type="category"}function cs(t,e){e=e||[0,360],c_.call(this,"angle",t,e),this.type="category"}function ds(t,e){return e.type||(e.data?"category":"value")}function fs(t,e){if(t.type=e.get("type"),t.scale=FC(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),"angleAxis"===e.mainType){t.inverse^=e.get("clockwise");var i=e.get("startAngle");t.setExtent(i,i+(t.inverse?-360:360))}e.axis=t,t.model=e}function ps(t,e,i){e[1]>e[0]&&(e=e.slice().reverse());var n=t.coordToPoint([e[0],i]),a=t.coordToPoint([e[1],i]);return{x1:n[0],y1:n[1],x2:a[0],y2:a[1]}}function gs(t){return t.getRadiusAxis().inverse?0:1}function ms(t){var e=t[0],i=t[t.length-1];e&&i&&Math.abs(Math.abs(e.coord-i.coord)-360)<1e-4&&t.pop()}function vs(t,e){e.update="updateView",C_.registerAction(e,function(e,i){var n={};return i.eachComponent({mainType:"geo",query:e},function(i){i[t](e.name);var a=i.coordinateSystem;du.each(a.regions,function(t){n[t.name]=i.isSelected(t.name)||!1})}),{selected:n,name:e.name}})}function ys(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!0}function xs(t){var e=["x","y"],i=["width","height"];return{point:function(e,i,n){if(e){var a=n.range;return _s(e[t],a)}},rect:function(n,a,r){if(n){var o=r.range,s=[n[e[t]],n[e[t]]+n[i[t]]];return s[1]<s[0]&&s.reverse(),_s(s[0],o)||_s(s[1],o)||_s(o[0],s)||_s(o[1],s)}}}}function _s(t,e){return e[0]<=t&&t<=e[1]}function bs(t,e,i,n,a){for(var r=0,o=a[a.length-1];r<a.length;r++){var s=a[r];if(function(t,e,i,n,a,r,o,s){var l=ws(i-t,a-o,n-e,r-s);if(function(t){return t<=1e-6&&t>=-1e-6}(l))return!1;var u=ws(a-t,a-o,r-e,r-s)/l;if(u<0||u>1)return!1;var h=ws(i-t,a-t,n-e,r-e)/l;if(h<0||h>1)return!1;return!0}(t,e,i,n,s[0],s[1],o[0],o[1]))return!0;o=s}}function ws(t,e,i,n){return t*n-e*i}function Ss(t,e,i){var n=this._targetInfoList=[],a={},r=Is(e,t);nL(uL,function(t,e){(!i||!i.include||aL(i.include,e)>=0)&&t(r,n,a)})}function Ms(t){return t[0]>t[1]&&t.reverse(),t}function Is(t,e){return Wc.parseFinder(t,e,{includeMainTypes:sL})}function As(t,e,i,n){var a=i.getAxis(["x","y"][t]),r=Ms(du.map([0,1],function(t){return e?a.coordToData(a.toLocalCoord(n[t])):a.toGlobalCoord(a.dataToCoord(n[t]))})),o=[];return o[t]=r,o[1-t]=[NaN,NaN],{values:r,xyMinMax:o}}function Ts(t,e,i,n){return[e[0]-n[t]*i[0],e[1]-n[t]*i[1]]}function Ds(t){return t?[t[0][1]-t[0][0],t[1][1]-t[1][0]]:[NaN,NaN]}function Cs(t,e,i,n){for(var a=0,r=e.length;a<r;a++){var o=e[a];if(t[o.brushType](n,i,o.selectors,o))return!0}}function Ls(t){var e=t.brushSelector;if(du.isString(e)){var i=[];return du.each(iL,function(t,n){i[n]=function(i,n,a,r){var o=n.getItemLayout(i);return t[e](o,a,r)}}),i}if(du.isFunction(e)){var n={};return du.each(iL,function(t,i){n[i]=e}),n}return e}function Ps(t){return new ch(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0])}function ks(t,e){return du.merge({brushType:t.brushType,brushMode:t.brushMode,transformable:t.transformable,brushStyle:new Vp(t.brushStyle).getItemStyle(),removeOnClick:t.removeOnClick,z:t.z},e,!0)}function Os(t,e,i,n){(!n||n.$from!==t.id)&&this._brushController.setPanels(t.brushTargetManager.makePanelOpts(i)).enableBrush(t.brushOption).updateCovers(t.areas.slice())}function Rs(t,e,i){this.model=t,this.ecModel=e,this.api=i,this._brushType,this._brushMode}function Ns(t,e,i){this._model=t}function Es(t,e,i,n){var a=i.calendarModel,r=i.seriesModel,o=a?a.coordinateSystem:r?r.coordinateSystem:null;return o===this?o[t](n):null}function zs(t,e){var i=t.cellSize;du.isArray(i)?1===i.length&&(i[1]=i[0]):i=t.cellSize=[i,i];var n=du.map([0,1],function(t){return AL(e,t)&&(i[t]="auto"),null!=i[t]&&"auto"!==i[t]});TL(t,e,{type:"box",ignoreSize:n})}function Vs(t,e){t=t.slice();var i=du.map(t,qp.capitalFirst);e=(e||[]).slice();var n=du.map(e,qp.capitalFirst);return function(a,r){du.each(t,function(t,o){for(var s={name:t,capital:i[o]},l=0;l<e.length;l++)s[e[l]]=t+n[l];a.call(r,s)})}}function Bs(t,e){var i=t.getAxisModel(),n=t._percentWindow,a=t._valueWindow;if(n){var r=Up.getPixelPrecision(a,[0,500]);r=Math.min(r,20);var o=e||0===n[0]&&100===n[1];i.setRange(o?null:+a[0].toFixed(r),o?null:+a[1].toFixed(r))}}function Gs(t){var e={};return VL(["start","end","startValue","endValue","throttle"],function(i){t.hasOwnProperty(i)&&(e[i]=t[i])}),e}function Hs(t,e){var i=t._rangePropMode,n=t.get("rangeMode");VL([["start","startValue"],["end","endValue"]],function(t,a){var r=null!=e[t[0]],o=null!=e[t[1]];r&&!o?i[a]="percent":!r&&o?i[a]="value":n?i[a]=n[a]:r&&(i[a]="percent")})}function Fs(t){return"vertical"===t?"ns-resize":"ew-resize"}function Ws(t){var e=t.getZr();return e[JL]||(e[JL]={})}function Us(t){du.each(t,function(e,i){e.count||(e.controller.dispose(),delete t[i])})}function Zs(t,e){var i=[];du.each(t.dataZoomInfos,function(t){var n=e(t);!t.disabled&&n&&i.push({dataZoomId:t.dataZoomId,start:n[0],end:n[1]})}),i.length&&t.dispatchAction(i)}function js(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}function Ys(t,e,i){if(i[0]===i[1])return i.slice();for(var n=(i[1]-i[0])/200,a=i[0],r=[],o=0;o<=200&&a<i[1];o++)r.push(a),a+=n;return r.push(i[1]),r}function Xs(t,e,i,n){return new Dp.Polygon({shape:{points:t},draggable:!!i,cursor:e,drift:i,onmousemove:function(t){mc.stop(t.event)},ondragend:n})}function qs(t){var e=t.get("hoverLinkOnHandle");return!!(null==e?t.get("realtime"):e)}function $s(t){return"vertical"===t?"ns-resize":"ew-resize"}function Ks(t,e){var i=t.inverse;("vertical"===t.orient?!i:i)&&e.reverse()}function Js(t){Wc.defaultEmphasis(t,"label",["show"])}function Qs(t,e,i,n,a,r){var o=[],s=BP(e,n)?e.getCalculationInfo("stackResultDimension"):n,l=el(e,s,t),u=e.indicesOfNearest(s,l)[0];o[a]=e.get(i,u),o[r]=e.get(n,u);var h=Up.getPrecision(e.get(n,u));return(h=Math.min(h,20))>=0&&(o[r]=+o[r].toFixed(h)),o}function tl(t,e,i,n){var a={};return null!=t.valueIndex||null!=t.valueDim?(a.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,a.valueAxis=i.getAxis(function(t,e){var i=t.getData(),n=i.dimensions;e=i.getDimension(e);for(var a=0;a<n.length;a++){var r=i.getDimensionInfo(n[a]);if(r.name===e)return r.coordDim}}(n,a.valueDataDim)),a.baseAxis=i.getOtherAxis(a.valueAxis),a.baseDataDim=e.mapDimension(a.baseAxis.dim)):(a.baseAxis=n.getBaseAxis(),a.valueAxis=i.getOtherAxis(a.baseAxis),a.baseDataDim=e.mapDimension(a.baseAxis.dim),a.valueDataDim=e.mapDimension(a.valueAxis.dim)),a}function el(t,e,i){if("average"===i){var n=0,a=0;return t.each(e,function(t,e){isNaN(t)||(n+=t,a++)}),n/a}return"median"===i?t.getMedian(e):t.getDataExtent(e,!0)["max"===i?1:0]}function il(t,e,i){var n=e.coordinateSystem;t.each(function(a){var r,o=t.getItemModel(a),s=Up.parsePercent(o.get("x"),i.getWidth()),l=Up.parsePercent(o.get("y"),i.getHeight());if(isNaN(s)||isNaN(l)){if(e.getMarkerPosition)r=e.getMarkerPosition(t.getValues(t.dimensions,a));else if(n){var u=t.get(n.dimensions[0],a),h=t.get(n.dimensions[1],a);r=n.dataToPoint([u,h])}}else r=[s,l];isNaN(s)||(r[0]=s),isNaN(l)||(r[1]=l),t.setItemLayout(a,r)})}function nl(t){return!isNaN(t)&&!isFinite(t)}function al(t,e,i,n){var a=1-t,r=n.dimensions[t];return nl(e[a])&&nl(i[a])&&e[t]===i[t]&&n.getAxis(r).containData(e[t])}function rl(t,e,i,n,a){var r,o=n.coordinateSystem,s=t.getItemModel(e),l=Up.parsePercent(s.get("x"),a.getWidth()),u=Up.parsePercent(s.get("y"),a.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)r=n.getMarkerPosition(t.getValues(t.dimensions,e));else{var h=o.dimensions,c=t.get(h[0],e),d=t.get(h[1],e);r=o.dataToPoint([c,d])}if("cartesian2d"===o.type){var f=o.getAxis("x"),p=o.getAxis("y"),h=o.dimensions;nl(t.get(h[0],e))?r[0]=f.toGlobalCoord(f.getExtent()[i?0:1]):nl(t.get(h[1],e))&&(r[1]=p.toGlobalCoord(p.getExtent()[i?0:1]))}isNaN(l)||(r[0]=l),isNaN(u)||(r[1]=u)}else r=[l,u];t.setItemLayout(e,r)}function ol(t){return!isNaN(t)&&!isFinite(t)}function sl(t,e,i,n){var a=1-t;return ol(e[a])&&ol(i[a])}function ll(t,e,i,n,a){var r,o=n.coordinateSystem,s=t.getItemModel(e),l=Up.parsePercent(s.get(i[0]),a.getWidth()),u=Up.parsePercent(s.get(i[1]),a.getHeight());if(isNaN(l)||isNaN(u)){if(n.getMarkerPosition)r=n.getMarkerPosition(t.getValues(i,e));else{var h=[f=t.get(i[0],e),p=t.get(i[1],e)];o.clampData&&o.clampData(h,h),r=o.dataToPoint(h,!0)}if("cartesian2d"===o.type){var c=o.getAxis("x"),d=o.getAxis("y"),f=t.get(i[0],e),p=t.get(i[1],e);ol(f)?r[0]=c.toGlobalCoord(c.getExtent()["x0"===i[0]?0:1]):ol(p)&&(r[1]=d.toGlobalCoord(d.getExtent()["y0"===i[1]?0:1]))}isNaN(l)||(r[0]=l),isNaN(u)||(r[1]=u)}else r=[l,u];return r}function ul(t){var e=t.itemStyle||(t.itemStyle={}),i=e.emphasis||(e.emphasis={}),n=t.label||t.label||{},a=n.normal||(n.normal={}),r={normal:1,emphasis:1};du.each(n,function(t,e){r[e]||hl(a,e)||(a[e]=t)}),i.label&&!hl(n,"emphasis")&&(n.emphasis=i.label,delete i.label)}function hl(t,e){return t.hasOwnProperty(e)}function cl(t,e,i,n,a,r){var o=e.get("color");if(a)a.setColor(o),i.add(a),r&&r.onUpdate(a);else{var s=t.get("symbol");(a=tk(s,-1,-1,2,2,o)).setStyle("strokeNoScale",!0),i.add(a),r&&r.onCreate(a)}var l=e.getItemStyle(["color","symbol","symbolSize"]);a.setStyle(l),n=du.merge({rectHover:!0,z2:100},n,!0);var u=t.get("symbolSize");(u=u instanceof Array?u.slice():[+u,+u])[0]/=2,u[1]/=2,n.scale=u;var h=t.get("symbolOffset");if(h){var c=n.position=n.position||[0,0];c[0]+=Up.parsePercent(h[0],u[0]),c[1]+=Up.parsePercent(h[1],u[1])}var d=t.get("symbolRotate");return n.rotation=(d||0)*Math.PI/180||0,a.attr(n),a.updateTransform(),a}function dl(t,e,i,n,a){if(!t.dragging){var r=n.getModel("checkpointStyle"),o=i.dataToCoord(n.getData().get(["value"],e));a||!r.get("animation",!0)?t.attr({position:[o,0]}):(t.stopAnimation(!0),t.animateTo({position:[o,0]},r.get("animationDuration",!0),r.get("animationEasing",!0)))}}function fl(t){this.model=t}function pl(t){this.model=t}function gl(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function ml(t){this._dom=null,this.model=t}function vl(t){var e=t[mk];return e||(e=t[mk]=[{}]),e}function yl(t,e,i){(this._brushController=new SA(i.getZr())).on("brush",du.bind(this._onBrush,this)).mount(),this._isZoomActive}function xl(t){var e={};return du.each(["xAxisIndex","yAxisIndex"],function(i){e[i]=t[i],null==e[i]&&(e[i]="all"),(!1===e[i]||"none"===e[i])&&(e[i]=[])}),e}function _l(t){this.model=t}function bl(t){return parseInt(t,10)}function wl(t,e){Ck.initVML(),this.root=t,this.storage=e;var i=document.createElement("div"),n=document.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this.resize();var a=e.delFromStorage,r=e.addToStorage;e.delFromStorage=function(t){a.call(e,t),t&&t.onRemove&&t.onRemove(n)},e.addToStorage=function(t){t.onAdd&&t.onAdd(n),r.call(e,t)},this._firstPaint=!0}function Sl(t){return cO(1e4*t)/1e4}function Ml(t){return t<vO&&t>-vO}function Il(t,e){e&&Al(t,"transform","matrix("+uO.call(e,",")+")")}function Al(t,e,i){(!i||"linear"!==i.type&&"radial"!==i.type)&&("string"==typeof i&&i.indexOf("NaN")>-1&&console.log(i),t.setAttribute(e,i))}function Tl(t,e,i){if(function(t,e){var i=e?t.textFill:t.fill;return null!=i&&i!==hO}(e,i)){var n=i?e.textFill:e.fill;n="transparent"===n?hO:n,"none"!==t.getAttribute("clip-path")&&n===hO&&(n="rgba(0, 0, 0, 0.002)"),Al(t,"fill",n),Al(t,"fill-opacity",e.opacity)}else Al(t,"fill",hO);if(function(t,e){var i=e?t.textStroke:t.stroke;return null!=i&&i!==hO}(e,i)){var a=i?e.textStroke:e.stroke;Al(t,"stroke",a="transparent"===a?hO:a);Al(t,"stroke-width",(i?e.textStrokeWidth:e.lineWidth)/(!i&&e.strokeNoScale?e.host.getLineScale():1)),Al(t,"paint-order",i?"stroke":"fill"),Al(t,"stroke-opacity",e.opacity);e.lineDash?(Al(t,"stroke-dasharray",e.lineDash.join(",")),Al(t,"stroke-dashoffset",cO(e.lineDashOffset||0))):Al(t,"stroke-dasharray",""),e.lineCap&&Al(t,"stroke-linecap",e.lineCap),e.lineJoin&&Al(t,"stroke-linejoin",e.lineJoin),e.miterLimit&&Al(t,"stroke-miterlimit",e.miterLimit)}else Al(t,"stroke",hO)}function Dl(t){return"middle"===t?"middle":"bottom"===t?"baseline":"hanging"}function Cl(){}function Ll(t,e,i,n,a){this._zrId=t,this._svgRoot=e,this._tagNames="string"==typeof i?[i]:i,this._markLabel=n,this._domName=a||"_dom",this.nextId=0}function Pl(t,e){LO.call(this,t,e,["linearGradient","radialGradient"],"__gradient_in_use__")}function kl(t,e){LO.call(this,t,e,"clipPath","__clippath_in_use__")}function Ol(t,e){LO.call(this,t,e,["filter"],"__filter_in_use__","_shadowDom")}function Rl(t){return t&&(t.shadowBlur||t.shadowOffsetX||t.shadowOffsetY||t.textShadowBlur||t.textShadowOffsetX||t.textShadowOffsetY)}function Nl(t){return parseInt(t,10)}function El(t,e){return e&&t&&e.parentNode!==t}function zl(t,e,i){if(El(t,e)&&i){var n=i.nextSibling;n?t.insertBefore(e,n):t.appendChild(e)}}function Vl(t,e){if(El(t,e)){var i=t.firstChild;i?t.insertBefore(e,i):t.appendChild(e)}}function Bl(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)}function Gl(t){return t.__textSvgEl}function Hl(t){return t.__svgEl}function Fl(t,e){void 0===e&&(e={});var i=document.createElement(t);return Object.keys(e).forEach(function(t){i[t]=e[t]}),i}function Wl(t){if(!document.documentElement.contains(t))return{detached:!0,rendered:!1};for(var e=t;e!==document;){if("none"===getComputedStyle(e).display)return{detached:!1,rendered:!1};e=e.parentNode}return{detached:!1,rendered:!0}}function Ul(){var t=this;jl(this),this.__resize_raf__&&function(t){xR||(xR=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),xR(t)}(this.__resize_raf__),this.__resize_raf__=function(t){return yR||(yR=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),yR(t)}(function(){var e=function(t){var e=t.__resize_last__,i=e.width,n=e.height,a=t.offsetWidth,r=t.offsetHeight;return a!==i||r!==n?{width:a,height:r}:null}(t);e&&(t.__resize_last__=e,Zl(t))})}function Zl(t){t.__resize_listeners__.forEach(function(e){e.call(t)})}function jl(t){var e=t.__resize_triggers__,i=e.expand,n=e.expandChild,a=e.contract,r=a.scrollWidth,o=a.scrollHeight,s=i.offsetWidth,l=i.offsetHeight,u=i.scrollWidth,h=i.scrollHeight;a.scrollLeft=r,a.scrollTop=o,n.style.width=s+1+"px",n.style.height=l+1+"px",i.scrollLeft=u,i.scrollTop=h}var Yl,Xl="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};"undefined"!=typeof window?Yl=window.__DEV__:void 0!==Xl&&(Yl=Xl),void 0===Yl&&(Yl=!0);var ql=2311,$l=function(){return ql++},Kl={},Jl=Kl="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var e={},i=t.match(/Firefox\/([\d.]+)/),n=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),a=t.match(/Edge\/([\d.]+)/),r=/micromessenger/i.test(t);return i&&(e.firefox=!0,e.version=i[1]),n&&(e.ie=!0,e.version=n[1]),a&&(e.edge=!0,e.version=a[1]),r&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11)}}(navigator.userAgent),Ql={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},tu={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},eu=Object.prototype.toString,iu=Array.prototype,nu=iu.forEach,au=iu.filter,ru=iu.slice,ou=iu.map,su=iu.reduce,lu={},uu=function(){return lu.createCanvas()};lu.createCanvas=function(){return document.createElement("canvas")};var hu,cu="__ec_primitive__";c.prototype={constructor:c,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){void 0!==e&&(t=r(t,e));for(var i in this)this.hasOwnProperty(i)&&t(this[i],i)},removeKey:function(t){delete this[t]}};var du={$override:function(t,e){"createCanvas"===t&&(hu=null),lu[t]=e},clone:e,merge:i,mergeAll:function(t,e){for(var n=t[0],a=1,r=t.length;a<r;a++)n=i(n,t[a],e);return n},extend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},defaults:n,createCanvas:uu,getContext:function(){return hu||(hu=uu().getContext("2d")),hu},indexOf:function(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i}return-1},inherits:function(t,e){function i(){}var n=t.prototype;i.prototype=e.prototype,t.prototype=new i;for(var a in n)t.prototype[a]=n[a];t.prototype.constructor=t,t.superClass=e},mixin:function(t,e,i){n(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,i)},isArrayLike:function(t){if(t)return"string"!=typeof t&&"number"==typeof t.length},each:a,map:function(t,e,i){if(t&&e){if(t.map&&t.map===ou)return t.map(e,i);for(var n=[],a=0,r=t.length;a<r;a++)n.push(e.call(i,t[a],a,t));return n}},reduce:function(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===su)return t.reduce(e,i,n);for(var a=0,r=t.length;a<r;a++)i=e.call(n,i,t[a],a,t);return i}},filter:function(t,e,i){if(t&&e){if(t.filter&&t.filter===au)return t.filter(e,i);for(var n=[],a=0,r=t.length;a<r;a++)e.call(i,t[a],a,t)&&n.push(t[a]);return n}},find:function(t,e,i){if(t&&e)for(var n=0,a=t.length;n<a;n++)if(e.call(i,t[n],n,t))return t[n]},bind:r,curry:function(t){var e=ru.call(arguments,1);return function(){return t.apply(this,e.concat(ru.call(arguments)))}},isArray:o,isFunction:function(t){return"function"==typeof t},isString:function(t){return"[object String]"===eu.call(t)},isObject:s,isBuiltInObject:l,isTypedArray:function(t){return!!tu[eu.call(t)]},isDom:u,eqNaN:function(t){return t!=t},retrieve:function(t){for(var e=arguments,i=0,n=arguments.length;i<n;i++)if(null!=e[i])return e[i]},retrieve2:function(t,e){return null!=t?t:e},retrieve3:function(t,e,i){return null!=t?t:null!=e?e:i},slice:function(){return Function.call.apply(ru,arguments)},normalizeCssArray:function(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t},assert:function(t,e){if(!t)throw new Error(e)},trim:function(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},setAsPrimitive:function(t){t[cu]=!0},isPrimitive:h,createHashMap:function(t){return new c(t)},concatArray:function(t,e){for(var i=new t.constructor(t.length+e.length),n=0;n<t.length;n++)i[n]=t[n];var a=t.length;for(n=0;n<e.length;n++)i[n+a]=e[n];return i},noop:function(){}},fu="undefined"==typeof Float32Array?Array:Float32Array,pu={create:function(t,e){var i=new fu(2);return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},clone:function(t){var e=new fu(2);return e[0]=t[0],e[1]=t[1],e},set:function(t,e,i){return t[0]=e,t[1]=i,t},add:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},scaleAndAdd:function(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t},sub:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},len:d,length:d,lenSquare:f,lengthSquare:f,mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},normalize:function(t,e){var i=d(e);return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t},distance:p,dist:p,distanceSquare:g,distSquare:g,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t},applyTransform:function(t,e,i){var n=e[0],a=e[1];return t[0]=i[0]*n+i[2]*a+i[4],t[1]=i[1]*n+i[3]*a+i[5],t},min:function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},max:function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}};m.prototype={constructor:m,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(v(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,a=i-this._x,r=n-this._y;this._x=i,this._y=n,e.drift(a,r,t),this.dispatchToElement(v(e,t),"drag",t.event);var o=this.findHover(i,n,e).target,s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(v(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(v(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(v(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(v(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var gu=m,mu=Array.prototype.slice,vu=function(){this._$handlers={}};vu.prototype={constructor:vu,one:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var a=0;a<n[t].length;a++)if(n[t][a].h===e)return this;return n[t].push({h:e,one:!0,ctx:i||this}),this},on:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var a=0;a<n[t].length;a++)if(n[t][a].h===e)return this;return n[t].push({h:e,one:!1,ctx:i||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],a=0,r=i[t].length;a<r;a++)i[t][a].h!=e&&n.push(i[t][a]);i[t]=n}i[t]&&0===i[t].length&&delete i[t]}else delete i[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>3&&(e=mu.call(e,1));for(var n=this._$handlers[t],a=n.length,r=0;r<a;){switch(i){case 1:n[r].h.call(n[r].ctx);break;case 2:n[r].h.call(n[r].ctx,e[1]);break;case 3:n[r].h.call(n[r].ctx,e[1],e[2]);break;default:n[r].h.apply(n[r].ctx,e)}n[r].one?(n.splice(r,1),a--):r++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>4&&(e=mu.call(e,1,e.length-1));for(var n=e[e.length-1],a=this._$handlers[t],r=a.length,o=0;o<r;){switch(i){case 1:a[o].h.call(n);break;case 2:a[o].h.call(n,e[1]);break;case 3:a[o].h.call(n,e[1],e[2]);break;default:a[o].h.apply(n,e)}a[o].one?(a.splice(o,1),r--):o++}}return this}};var yu=vu,xu="silent";y.prototype.dispose=function(){};var _u=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],bu=function(t,e,i,n){yu.call(this),this.storage=t,this.painter=e,this.painterRoot=n,i=i||new y,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,gu.call(this),this.setHandlerProxy(i)};bu.prototype={constructor:bu,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(du.each(_u,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,i=t.zrY,n=this._hovered,a=n.target;a&&!a.__zr&&(a=(n=this.findHover(n.x,n.y)).target);var r=this._hovered=this.findHover(e,i),o=r.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),a&&o!==a&&this.dispatchToElement(n,"mouseout",t),this.dispatchToElement(r,"mousemove",t),o&&o!==a&&this.dispatchToElement(r,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,i=t.toElement||t.relatedTarget;do{i=i&&i.parentNode}while(i&&9!=i.nodeType&&!(e=i===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var i=this[t];i&&i.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,i){var n=(t=t||{}).target;if(!n||!n.silent){for(var a="on"+e,r=function(t,e,i){return{type:t,event:i,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta,zrByTouch:i.zrByTouch,which:i.which}}(e,t,i);n&&(n[a]&&(r.cancelBubble=n[a].call(n,r)),n.trigger(e,r),n=n.parent,!r.cancelBubble););r.cancelBubble||(this.trigger(e,r),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[a]&&t[a].call(t,r),t.trigger&&t.trigger(e,r)}))}},findHover:function(t,e,i){for(var n=this.storage.getDisplayList(),a={x:t,y:e},r=n.length-1;r>=0;r--){var o;if(n[r]!==i&&!n[r].ignore&&(o=function(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var n,a=t;a;){if(a.clipPath&&!a.clipPath.contain(e,i))return!1;a.silent&&(n=!0),a=a.parent}return!n||xu}return!1}(n[r],t,e))&&(!a.topTarget&&(a.topTarget=n[r]),o!==xu)){a.target=n[r];break}}return a}},du.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){bu.prototype[t]=function(e){var i=this.findHover(e.zrX,e.zrY),n=i.target;if("mousedown"===t)this._downEl=n,this._downPoint=[e.zrX,e.zrY],this._upEl=n;else if("mouseup"===t)this._upEl=n;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||pu.dist(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(i,t,e)}}),du.mixin(bu,yu),du.mixin(bu,gu);var wu=bu,Su="undefined"==typeof Float32Array?Array:Float32Array,Mu={create:x,identity:_,copy:b,mul:function(t,e,i){var n=e[0]*i[0]+e[2]*i[1],a=e[1]*i[0]+e[3]*i[1],r=e[0]*i[2]+e[2]*i[3],o=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=s,t[5]=l,t},translate:function(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t},rotate:function(t,e,i){var n=e[0],a=e[2],r=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(i),h=Math.cos(i);return t[0]=n*h+o*u,t[1]=-n*u+o*h,t[2]=a*h+s*u,t[3]=-a*u+h*s,t[4]=h*r+u*l,t[5]=h*l-u*r,t},scale:function(t,e,i){var n=i[0],a=i[1];return t[0]=e[0]*n,t[1]=e[1]*a,t[2]=e[2]*n,t[3]=e[3]*a,t[4]=e[4]*n,t[5]=e[5]*a,t},invert:function(t,e){var i=e[0],n=e[2],a=e[4],r=e[1],o=e[3],s=e[5],l=i*o-r*n;return l?(l=1/l,t[0]=o*l,t[1]=-r*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-o*a)*l,t[5]=(r*a-i*s)*l,t):null},clone:function(t){var e=x();return b(e,t),e}},Iu=Mu.identity,Au=5e-5,Tu=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Du=Tu.prototype;Du.transform=null,Du.needLocalTransform=function(){return w(this.rotation)||w(this.position[0])||w(this.position[1])||w(this.scale[0]-1)||w(this.scale[1]-1)},Du.updateTransform=function(){var t=this.parent,e=t&&t.transform,i=this.needLocalTransform(),n=this.transform;i||e?(n=n||Mu.create(),i?this.getLocalTransform(n):Iu(n),e&&(i?Mu.mul(n,t.transform,n):Mu.copy(n,t.transform)),this.transform=n,this.invTransform=this.invTransform||Mu.create(),Mu.invert(this.invTransform,n)):n&&Iu(n)},Du.getLocalTransform=function(t){return Tu.getLocalTransform(this,t)},Du.setTransform=function(t){var e=this.transform,i=t.dpr||1;e?t.setTransform(i*e[0],i*e[1],i*e[2],i*e[3],i*e[4],i*e[5]):t.setTransform(i,0,0,i,0,0)},Du.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Cu=[];Du.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(Mu.mul(Cu,t.invTransform,e),e=Cu);var i=e[0]*e[0]+e[1]*e[1],n=e[2]*e[2]+e[3]*e[3],a=this.position,r=this.scale;w(i-1)&&(i=Math.sqrt(i)),w(n-1)&&(n=Math.sqrt(n)),e[0]<0&&(i=-i),e[3]<0&&(n=-n),a[0]=e[4],a[1]=e[5],r[0]=i,r[1]=n,this.rotation=Math.atan2(-e[1]/n,e[0]/i)}},Du.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),i=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(i=-i),[e,i]},Du.transformCoordToLocal=function(t,e){var i=[t,e],n=this.invTransform;return n&&pu.applyTransform(i,i,n),i},Du.transformCoordToGlobal=function(t,e){var i=[t,e],n=this.transform;return n&&pu.applyTransform(i,i,n),i},Tu.getLocalTransform=function(t,e){Iu(e=e||[]);var i=t.origin,n=t.scale||[1,1],a=t.rotation||0,r=t.position||[0,0];return i&&(e[4]-=i[0],e[5]-=i[1]),Mu.scale(e,e,n),a&&Mu.rotate(e,e,a),i&&(e[4]+=i[0],e[5]+=i[1]),e[4]+=r[0],e[5]+=r[1],e};var Lu=Tu,Pu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Pu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Pu.bounceIn(2*t):.5*Pu.bounceOut(2*t-1)+.5}},ku=Pu;S.prototype={constructor:S,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var i=(t-this._startTime-this._pausedTime)/this._life;if(!(i<0)){i=Math.min(i,1);var n=this.easing,a="string"==typeof n?ku[n]:n,r="function"==typeof a?a(i):i;return this.fire("frame",r),1==i?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Ou=S,Ru=function(){this.head=null,this.tail=null,this._len=0},Nu=Ru.prototype;Nu.insert=function(t){var e=new Eu(t);return this.insertEntry(e),e},Nu.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Nu.remove=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Nu.len=function(){return this._len},Nu.clear=function(){this.head=this.tail=null,this._len=0};var Eu=function(t){this.value=t,this.next,this.prev},zu=function(t){this._list=new Ru,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Vu=zu.prototype;Vu.put=function(t,e){var i=this._list,n=this._map,a=null;if(null==n[t]){var r=i.len(),o=this._lastRemovedEntry;if(r>=this._maxSize&&r>0){var s=i.head;i.remove(s),delete n[s.key],a=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new Eu(e),o.key=t,i.insertEntry(o),n[t]=o}return a},Vu.get=function(t){var e=this._map[t],i=this._list;if(null!=e)return e!==i.tail&&(i.remove(e),i.insertEntry(e)),e.value},Vu.clear=function(){this._list.clear(),this._map={}};var Bu=zu,Gu={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Hu=new Bu(20),Fu=null,Wu={parse:O,lift:function(t,e){var i=O(t);if(i){for(var n=0;n<3;n++)i[n]=e<0?i[n]*(1-e)|0:(255-i[n])*e+i[n]|0,i[n]>255?i[n]=255:t[n]<0&&(i[n]=0);return z(i,4===i.length?"rgba":"rgb")}},toHex:function(t){var e=O(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)},fastLerp:N,fastMapToColor:N,lerp:E,mapToColor:E,modifyHSL:function(t,e,i,n){if(t=O(t))return t=function(t){if(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o,u=(s+o)/2;if(0===l)e=0,i=0;else{i=u<.5?l/(s+o):l/(2-s-o);var h=((s-n)/6+l/2)/l,c=((s-a)/6+l/2)/l,d=((s-r)/6+l/2)/l;n===s?e=d-c:a===s?e=1/3+h-d:r===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1)}var f=[360*e,i,u];return null!=t[3]&&f.push(t[3]),f}}(t),null!=e&&(t[0]=function(t){return(t=Math.round(t))<0?0:t>360?360:t}(e)),null!=i&&(t[1]=T(i)),null!=n&&(t[2]=T(n)),z(R(t),"rgba")},modifyAlpha:function(t,e){if((t=O(t))&&null!=e)return t[3]=I(e),z(t,"rgba")},stringify:z},Uu=du.isArrayLike,Zu=Array.prototype.slice,ju=function(t,e,i,n){this._tracks={},this._target=t,this._loop=e||!1,this._getter=i||function(t,e){return t[e]},this._setter=n||function(t,e,i){t[e]=i},this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};ju.prototype={when:function(t,e){var i=this._tracks;for(var n in e)if(e.hasOwnProperty(n)){if(!i[n]){i[n]=[];var a=this._getter(this._target,n);if(null==a)continue;0!==t&&i[n].push({time:0,value:function(t){if(Uu(t)){var e=t.length;if(Uu(t[0])){for(var i=[],n=0;n<e;n++)i.push(Zu.call(t[n]));return i}return Zu.call(t)}return t}(a)})}i[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,i=0;i<e;i++)t[i].call(this)},start:function(t,e){var i,n=this,a=0;for(var r in this._tracks)if(this._tracks.hasOwnProperty(r)){var o=function(t,e,i,n,a,r){var o=t._getter,s=t._setter,l="spline"===e,u=n.length;if(u){var h,c=n[0].value,d=Uu(c),f=!1,p=!1,g=d?function(t){var e=t[t.length-1].value;return Uu(e&&e[0])?2:1}(n):0;n.sort(function(t,e){return t.time-e.time}),h=n[u-1].time;for(var m=[],v=[],y=n[0].value,x=!0,_=0;_<u;_++){m.push(n[_].time/h);var b=n[_].value;if(d&&function(t,e,i){if(t===e)return!0;var n=t.length;if(n!==e.length)return!1;if(1===i){for(r=0;r<n;r++)if(t[r]!==e[r])return!1}else for(var a=t[0].length,r=0;r<n;r++)for(var o=0;o<a;o++)if(t[r][o]!==e[r][o])return!1;return!0}(b,y,g)||!d&&b===y||(x=!1),y=b,"string"==typeof b){var w=Wu.parse(b);w?(b=w,f=!0):p=!0}v.push(b)}if(r||!x){for(var S=v[u-1],_=0;_<u-1;_++)d?H(v[_],S,g):!isNaN(v[_])||isNaN(S)||p||f||(v[_]=S);d&&H(o(t._target,a),S,g);var M,I,A,T,D,C,L=0,P=0;if(f)var k=[0,0,0,0];var O=new Ou({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var i;if(e<0)i=0;else if(e<P){for(i=M=Math.min(L+1,u-1);i>=0&&!(m[i]<=e);i--);i=Math.min(i,u-2)}else{for(i=L;i<u&&!(m[i]>e);i++);i=Math.min(i-1,u-2)}L=i,P=e;var n=m[i+1]-m[i];if(0!==n)if(I=(e-m[i])/n,l)if(T=v[i],A=v[0===i?i:i-1],D=v[i>u-2?u-1:i+1],C=v[i>u-3?u-1:i+2],d)F(A,T,D,C,I,I*I,I*I*I,o(t,a),g);else{if(f)r=F(A,T,D,C,I,I*I,I*I*I,k,1),r=U(k);else{if(p)return B(T,D,I);r=W(A,T,D,C,I,I*I,I*I*I)}s(t,a,r)}else if(d)G(v[i],v[i+1],I,o(t,a),g);else{var r;if(f)G(v[i],v[i+1],I,k,1),r=U(k);else{if(p)return B(v[i],v[i+1],I);r=V(v[i],v[i+1],I)}s(t,a,r)}},ondestroy:i});return e&&"spline"!==e&&(O.easing=e),O}}}(this,t,function(){--a||n._doneCallback()},this._tracks[r],r,e);o&&(this._clipList.push(o),a++,this.animation&&this.animation.addClip(o),i=o)}if(i){var s=i.onframe;i.onframe=function(t,e){s(t,e);for(var i=0;i<n._onframeList.length;i++)n._onframeList[i](t,e)}}return a||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,i=this.animation,n=0;n<e.length;n++){var a=e[n];t&&a.onframe(this._target,1),i&&i.removeClip(a)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Yu=ju,Xu=1;"undefined"!=typeof window&&(Xu=Math.max(window.devicePixelRatio||1,1));var qu={debugMode:0,devicePixelRatio:Xu},$u=qu.debugMode,Ku=function(){};1===$u?Ku=function(){var t=arguments;for(var e in arguments)throw new Error(t[e])}:$u>1&&(Ku=function(){var t=arguments;for(var e in arguments)console.log(t[e])});var Ju=Ku,Qu=du.isString,th=du.isFunction,eh=du.isObject,ih=du.isArrayLike,nh=du.indexOf,ah=function(){this.animators=[]};ah.prototype={constructor:ah,animate:function(t,e){var i,n=!1,a=this,r=this.__zr;if(t){var o=t.split("."),s=a;n="shape"===o[0];for(var l=0,u=o.length;l<u;l++)s&&(s=s[o[l]]);s&&(i=s)}else i=a;if(i){var h=a.animators,c=new Yu(i,e);return c.during(function(t){a.dirty(n)}).done(function(){h.splice(nh(h,c),1)}),h.push(c),r&&r.animation.addAnimator(c),c}Ju('Property "'+t+'" is not existed in element '+a.id)},stopAnimation:function(t){for(var e=this.animators,i=e.length,n=0;n<i;n++)e[n].stop(t);return e.length=0,this},animateTo:function(t,e,i,n,a,r){Qu(i)?(a=n,n=i,i=0):th(n)?(a=n,n="linear",i=0):th(i)?(a=i,i=0):th(e)?(a=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,i);var o=this.animators.slice(),s=o.length;s||a&&a();for(var l=0;l<o.length;l++)o[l].done(function(){--s||a&&a()}).start(n,r)},_animateToShallow:function(t,e,i,n,a){var r={},o=0;for(var s in i)if(i.hasOwnProperty(s))if(null!=e[s])eh(i[s])&&!ih(i[s])?this._animateToShallow(t?t+"."+s:s,e[s],i[s],n,a):(r[s]=i[s],o++);else if(null!=i[s])if(t){var l={};l[t]={},l[t][s]=i[s],this.attr(l)}else this.attr(s,i[s]);return o>0&&this.animate(t,!1).when(null==n?500:n,r).delay(a||0),this}};var rh=ah,oh=function(t){Lu.call(this,t),yu.call(this,t),rh.call(this,t),this.id=t.id||$l()};oh.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var i=this.transform;i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(du.isObject(t))for(var i in t)t.hasOwnProperty(i)&&this.attrKV(i,t[i]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.addAnimator(e[i]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.removeAnimator(e[i]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},du.mixin(oh,rh),du.mixin(oh,Lu),du.mixin(oh,yu);var sh=oh,lh=pu.applyTransform,uh=Math.min,hh=Math.max;Z.prototype={constructor:Z,union:function(t){var e=uh(t.x,this.x),i=uh(t.y,this.y);this.width=hh(t.x+t.width,this.x+this.width)-e,this.height=hh(t.y+t.height,this.y+this.height)-i,this.x=e,this.y=i},applyTransform:function(){var t=[],e=[],i=[],n=[];return function(a){if(a){t[0]=i[0]=this.x,t[1]=n[1]=this.y,e[0]=n[0]=this.x+this.width,e[1]=i[1]=this.y+this.height,lh(t,t,a),lh(e,e,a),lh(i,i,a),lh(n,n,a),this.x=uh(t[0],e[0],i[0],n[0]),this.y=uh(t[1],e[1],i[1],n[1]);var r=hh(t[0],e[0],i[0],n[0]),o=hh(t[1],e[1],i[1],n[1]);this.width=r-this.x,this.height=o-this.y}}}(),calculateTransform:function(t){var e=this,i=t.width/e.width,n=t.height/e.height,a=Mu.create();return Mu.translate(a,a,[-e.x,-e.y]),Mu.scale(a,a,[i,n]),Mu.translate(a,a,[t.x,t.y]),a},intersect:function(t){if(!t)return!1;t instanceof Z||(t=Z.create(t));var e=this,i=e.x,n=e.x+e.width,a=e.y,r=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(n<o||s<i||r<l||u<a)},contain:function(t,e){return t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height},clone:function(){return new Z(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Z.create=function(t){return new Z(t.x,t.y,t.width,t.height)};var ch=Z,dh=function(t){t=t||{},sh.call(this,t);for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};dh.prototype={constructor:dh,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,i=0;i<e.length;i++)if(e[i].name===t)return e[i]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i.indexOf(e);n>=0&&(i.splice(n,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof dh&&t.addChildrenToStorage(e)),i&&i.refresh()},remove:function(t){var e=this.__zr,i=this.__storage,n=this._children,a=du.indexOf(n,t);return a<0?this:(n.splice(a,1),t.parent=null,i&&(i.delFromStorage(t),t instanceof dh&&t.delChildrenFromStorage(i)),e&&e.refresh(),this)},removeAll:function(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i.length;e++)t=i[e],n&&(n.delFromStorage(t),t instanceof dh&&t.delChildrenFromStorage(n)),t.parent=null;return i.length=0,this},eachChild:function(t,e){for(var i=this._children,n=0;n<i.length;n++){var a=i[n];t.call(e,a,n)}return this},traverse:function(t,e){for(var i=0;i<this._children.length;i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.addToStorage(i),i instanceof dh&&i.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.delFromStorage(i),i instanceof dh&&i.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,i=new ch(0,0,0,0),n=t||this._children,a=[],r=0;r<n.length;r++){var o=n[r];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(a);l?(i.copy(s),i.applyTransform(l),(e=e||i.clone()).union(i)):(e=e||s.clone()).union(s)}}return e||i}},du.inherits(dh,sh);var fh=dh,ph=32,gh=7,mh=function(t,e,i,n){i||(i=0),n||(n=t.length);var a=n-i;if(!(a<2)){var r=0;if(a<ph)return r=j(t,i,n,e),void Y(t,i,n,i+r,e);var o=new function(t,e){function i(i){var l=n[i],u=a[i],h=n[i+1],c=a[i+1];a[i]=u+c,i===o-3&&(n[i+1]=n[i+2],a[i+1]=a[i+2]),o--;var d=q(t[h],t,l,u,0,e);l+=d,0!=(u-=d)&&0!==(c=X(t[l+u-1],t,h,c,c-1,e))&&(u<=c?function(i,n,a,o){var l=0;for(l=0;l<n;l++)s[l]=t[i+l];var u=0,h=a,c=i;if(t[c++]=t[h++],0!=--o)if(1!==n){for(var d,f,p,g=r;;){d=0,f=0,p=!1;do{if(e(t[h],s[u])<0){if(t[c++]=t[h++],f++,d=0,0==--o){p=!0;break}}else if(t[c++]=s[u++],d++,f=0,1==--n){p=!0;break}}while((d|f)<g);if(p)break;do{if(0!==(d=q(t[h],s,u,n,0,e))){for(l=0;l<d;l++)t[c+l]=s[u+l];if(c+=d,u+=d,(n-=d)<=1){p=!0;break}}if(t[c++]=t[h++],0==--o){p=!0;break}if(0!==(f=X(s[u],t,h,o,0,e))){for(l=0;l<f;l++)t[c+l]=t[h+l];if(c+=f,h+=f,0==(o-=f)){p=!0;break}}if(t[c++]=s[u++],1==--n){p=!0;break}g--}while(d>=gh||f>=gh);if(p)break;g<0&&(g=0),g+=2}if((r=g)<1&&(r=1),1===n){for(l=0;l<o;l++)t[c+l]=t[h+l];t[c+o]=s[u]}else{if(0===n)throw new Error;for(l=0;l<n;l++)t[c+l]=s[u+l]}}else{for(l=0;l<o;l++)t[c+l]=t[h+l];t[c+o]=s[u]}else for(l=0;l<n;l++)t[c+l]=s[u+l]}(l,u,h,c):function(i,n,a,o){var l=0;for(l=0;l<o;l++)s[l]=t[a+l];var u=i+n-1,h=o-1,c=a+o-1,d=0,f=0;if(t[c--]=t[u--],0!=--n)if(1!==o){for(var p=r;;){var g=0,m=0,v=!1;do{if(e(s[h],t[u])<0){if(t[c--]=t[u--],g++,m=0,0==--n){v=!0;break}}else if(t[c--]=s[h--],m++,g=0,1==--o){v=!0;break}}while((g|m)<p);if(v)break;do{if(0!=(g=n-q(s[h],t,i,n,n-1,e))){for(n-=g,f=1+(c-=g),d=1+(u-=g),l=g-1;l>=0;l--)t[f+l]=t[d+l];if(0===n){v=!0;break}}if(t[c--]=s[h--],1==--o){v=!0;break}if(0!=(m=o-X(t[u],s,0,o,o-1,e))){for(o-=m,f=1+(c-=m),d=1+(h-=m),l=0;l<m;l++)t[f+l]=s[d+l];if(o<=1){v=!0;break}}if(t[c--]=t[u--],0==--n){v=!0;break}p--}while(g>=gh||m>=gh);if(v)break;p<0&&(p=0),p+=2}if((r=p)<1&&(r=1),1===o){for(f=1+(c-=n),d=1+(u-=n),l=n-1;l>=0;l--)t[f+l]=t[d+l];t[c]=s[h]}else{if(0===o)throw new Error;for(d=c-(o-1),l=0;l<o;l++)t[d+l]=s[l]}}else{for(f=1+(c-=n),d=1+(u-=n),l=n-1;l>=0;l--)t[f+l]=t[d+l];t[c]=s[h]}else for(d=c-(o-1),l=0;l<o;l++)t[d+l]=s[l]}(l,u,h,c))}var n,a,r=gh,o=0;t.length;var s=[];n=[],a=[],this.mergeRuns=function(){for(;o>1;){var t=o-2;if(t>=1&&a[t-1]<=a[t]+a[t+1]||t>=2&&a[t-2]<=a[t]+a[t-1])a[t-1]<a[t+1]&&t--;else if(a[t]>a[t+1])break;i(t)}},this.forceMergeRuns=function(){for(;o>1;){var t=o-2;t>0&&a[t-1]<a[t+1]&&t--,i(t)}},this.pushRun=function(t,e){n[o]=t,a[o]=e,o+=1}}(t,e),s=function(t){for(var e=0;t>=ph;)e|=1&t,t>>=1;return t+e}(a);do{if((r=j(t,i,n,e))<s){var l=a;l>s&&(l=s),Y(t,i,i+l,i+r,e),r=l}o.pushRun(i,r),o.mergeRuns(),a-=r,i+=r}while(0!==a);o.forceMergeRuns()}},vh=function(){this._roots=[],this._displayList=[],this._displayListLen=0};vh.prototype={constructor:vh,traverse:function(t,e){for(var i=0;i<this._roots.length;i++)this._roots[i].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,n=0,a=e.length;n<a;n++)this._updateAndAddDisplayable(e[n],null,t);i.length=this._displayListLen,Jl.canvasSupported&&mh(i,$)},_updateAndAddDisplayable:function(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var n=t.clipPath;if(n){e=e?e.slice():[];for(var a=n,r=t;a;)a.parent=r,a.updateTransform(),e.push(a),r=a,a=a.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,i)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof fh&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(i=0;i<this._roots.length;i++){var e=this._roots[i];e instanceof fh&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var i=0,n=t.length;i<n;i++)this.delRoot(t[i]);else{var a=du.indexOf(this._roots,t);a>=0&&(this.delFromStorage(t),this._roots.splice(a,1),t instanceof fh&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:$};for(var yh=vh,xh={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},_h=function(t,e,i){return xh.hasOwnProperty(e)?i*=t.dpr:i},bh=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],wh=function(t,e){this.extendFrom(t,!1),this.host=e},Sh=wh.prototype={constructor:wh,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,i){for(var n=i&&i.style,a=!n,r=0;r<bh.length;r++){var o=bh[r],s=o[0];(a||this[s]!==n[s])&&(t[s]=_h(t,s,this[s]||o[1]))}if((a||this.fill!==n.fill)&&(t.fillStyle=this.fill),(a||this.stroke!==n.stroke)&&(t.strokeStyle=this.stroke),(a||this.opacity!==n.opacity)&&(t.globalAlpha=null==this.opacity?1:this.opacity),(a||this.blend!==n.blend)&&(t.globalCompositeOperation=this.blend||"source-over"),this.hasStroke()){var l=this.lineWidth;t.lineWidth=l/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var i in t)!t.hasOwnProperty(i)||!0!==e&&(!1===e?this.hasOwnProperty(i):null==t[i])||(this[i]=t[i])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,i){for(var n=("radial"===e.type?function(t,e,i){var n=i.width,a=i.height,r=Math.min(n,a),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*n+i.x,s=s*a+i.y,l*=r),t.createRadialGradient(o,s,0,o,s,l)}:function(t,e,i){var n=null==e.x?0:e.x,a=null==e.x2?1:e.x2,r=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(n=n*i.width+i.x,a=a*i.width+i.x,r=r*i.height+i.y,o=o*i.height+i.y),n=isNaN(n)?0:n,a=isNaN(a)?1:a,r=isNaN(r)?0:r,o=isNaN(o)?0:o,t.createLinearGradient(n,r,a,o)})(t,e,i),a=e.colorStops,r=0;r<a.length;r++)n.addColorStop(a[r].offset,a[r].color);return n}},Mh=0;Mh<bh.length;Mh++){var Ih=bh[Mh];Ih[0]in Sh||(Sh[Ih[0]]=Ih[1])}wh.getGradient=Sh.getGradient;var Ah=wh,Th=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Th.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Dh=Th,Ch=qu.devicePixelRatio,Lh=function(t,e,i){var n;i=i||Ch,"string"==typeof t?n=K(t,e,i):du.isObject(t)&&(t=(n=t).id),this.id=t,this.dom=n;var a=n.style;a&&(n.onselectstart=function(){return!1},a["-webkit-user-select"]="none",a["user-select"]="none",a["-webkit-touch-callout"]="none",a["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",a.padding=0,a.margin=0,a["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=i};Lh.prototype={constructor:Lh,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=K("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var i=this.dpr,n=this.dom,a=n.style,r=this.domBack;a&&(a.width=t+"px",a.height=e+"px"),n.width=t*i,n.height=e*i,r&&(r.width=t*i,r.height=e*i,1!=i&&this.ctxBack.scale(i,i))},clear:function(t,e){var i=this.dom,n=this.ctx,a=i.width,r=i.height,e=e||this.clearColor,o=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(o&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/l,r/l)),n.clearRect(0,0,a,r),e&&"transparent"!==e){var u;e.colorStops?(u=e.__canvasGradient||Ah.getGradient(n,e,{x:0,y:0,width:a,height:r}),e.__canvasGradient=u):e.image&&(u=Dh.prototype.getCanvasPattern.call(e,n)),n.save(),n.fillStyle=u||e,n.fillRect(0,0,a,r),n.restore()}if(o){var h=this.domBack;n.save(),n.globalAlpha=s,n.drawImage(h,0,0,a,r),n.restore()}}};var Ph=Lh,kh="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Oh=new Bu(50),Rh={findExistImage:function(t){if("string"==typeof t){var e=Oh.get(t);return e&&e.image}return t},createOrUpdateImage:function(t,e,i,n,a){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!i)return e;var r=Oh.get(t),o={hostEl:i,cb:n,cbPayload:a};return r?!J(e=r.image)&&r.pending.push(o):(!e&&(e=new Image),e.onload=function(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var i=t.pending[e],n=i.cb;n&&n(this,i.cbPayload),i.hostEl.dirty()}t.pending.length=0},Oh.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return t}return e},isImageReady:J},Nh=du.getContext,Eh=du.extend,zh=du.retrieve2,Vh=du.retrieve3,Bh=du.trim,Gh={},Hh=0,Fh=5e3,Wh=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Uh="12px sans-serif",Zh={};Zh.measureText=function(t,e){var i=Nh();return i.font=e||Uh,i.measureText(t)};var jh={DEFAULT_FONT:Uh,$override:function(t,e){Zh[t]=e},getWidth:Q,getBoundingRect:function(t,e,i,n,a,r,o){return r?function(t,e,i,n,a,r,o){var s=lt(t,{rich:r,truncate:o,font:e,textAlign:i,textPadding:a}),l=s.outerWidth,u=s.outerHeight,h=tt(0,l,i),c=et(0,u,n);return new ch(h,c,l,u)}(t,e,i,n,a,r,o):function(t,e,i,n,a,r){var o=st(t,e,a,r),s=Q(t,e);a&&(s+=a[1]+a[3]);var l=o.outerHeight,u=tt(0,s,i),h=et(0,l,n),c=new ch(u,h,s,l);return c.lineHeight=o.lineHeight,c}(t,e,i,n,a,o)},adjustTextX:tt,adjustTextY:et,adjustTextPositionOnRect:function(t,e,i){var n=e.x,a=e.y,r=e.height,o=e.width,s=r/2,l="left",u="top";switch(t){case"left":n-=i,a+=s,l="right",u="middle";break;case"right":n+=i+o,a+=s,u="middle";break;case"top":n+=o/2,a-=i,l="center",u="bottom";break;case"bottom":n+=o/2,a+=r+i,l="center";break;case"inside":n+=o/2,a+=s,l="center",u="middle";break;case"insideLeft":n+=i,a+=s,u="middle";break;case"insideRight":n+=o-i,a+=s,l="right",u="middle";break;case"insideTop":n+=o/2,a+=i,l="center";break;case"insideBottom":n+=o/2,a+=r-i,l="center",u="bottom";break;case"insideTopLeft":n+=i,a+=i;break;case"insideTopRight":n+=o-i,a+=i,l="right";break;case"insideBottomLeft":n+=i,a+=r-i,u="bottom";break;case"insideBottomRight":n+=o-i,a+=r-i,l="right",u="bottom"}return{x:n,y:a,textAlign:l,textVerticalAlign:u}},truncateText:it,getLineHeight:rt,measureText:ot,parsePlainText:st,parseRichText:lt,makeFont:function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&Bh(e)||t.textFont||t.font}},Yh={buildPath:function(t,e){var i,n,a,r,o=e.x,s=e.y,l=e.width,u=e.height,h=e.r;l<0&&(o+=l,l=-l),u<0&&(s+=u,u=-u),"number"==typeof h?i=n=a=r=h:h instanceof Array?1===h.length?i=n=a=r=h[0]:2===h.length?(i=a=h[0],n=r=h[1]):3===h.length?(i=h[0],n=r=h[1],a=h[2]):(i=h[0],n=h[1],a=h[2],r=h[3]):i=n=a=r=0;var c;i+n>l&&(i*=l/(c=i+n),n*=l/c),a+r>l&&(a*=l/(c=a+r),r*=l/c),n+a>u&&(n*=u/(c=n+a),a*=u/c),i+r>u&&(i*=u/(c=i+r),r*=u/c),t.moveTo(o+i,s),t.lineTo(o+l-n,s),0!==n&&t.arc(o+l-n,s+n,n,-Math.PI/2,0),t.lineTo(o+l,s+u-a),0!==a&&t.arc(o+l-a,s+u-a,a,0,Math.PI/2),t.lineTo(o+r,s+u),0!==r&&t.arc(o+r,s+u-r,r,Math.PI/2,Math.PI),t.lineTo(o,s+i),0!==i&&t.arc(o+i,s+i,i,Math.PI,1.5*Math.PI)}},Xh=du.retrieve2,qh=du.retrieve3,$h=du.each,Kh=du.normalizeCssArray,Jh=du.isString,Qh=du.isObject,tc={left:1,right:1,center:1},ec={top:1,bottom:1,middle:1},ic={normalizeTextStyle:function(t){return ht(t),$h(t.rich,ht),t},renderText:function(t,e,i,n,a){n.rich?function(t,e,i,n,a){var r=t.__textCotentBlock;r&&!t.__dirty||(r=t.__textCotentBlock=jh.parseRichText(i,n)),function(t,e,i,n,a){var r=i.width,o=i.outerWidth,s=i.outerHeight,l=n.textPadding,u=gt(0,n,a),h=u.baseX,c=u.baseY,d=u.textAlign,f=u.textVerticalAlign;ct(e,n,a,h,c);var p=jh.adjustTextX(h,o,d),g=jh.adjustTextY(c,s,f),m=p,v=g;l&&(m+=l[3],v+=l[0]);var y=m+r;ft(n)&&pt(t,e,n,p,g,o,s);for(var x=0;x<i.lines.length;x++){for(var _,b=i.lines[x],w=b.tokens,S=w.length,M=b.lineHeight,I=b.width,A=0,T=m,D=y,C=S-1;A<S&&(!(_=w[A]).textAlign||"left"===_.textAlign);)dt(t,e,_,n,M,v,T,"left"),I-=_.width,T+=_.width,A++;for(;C>=0&&"right"===(_=w[C]).textAlign;)dt(t,e,_,n,M,v,D,"right"),I-=_.width,D-=_.width,C--;for(T+=(r-(T-m)-(y-D)-I)/2;A<=C;)_=w[A],dt(t,e,_,n,M,v,T+_.width/2,"center"),T+=_.width,A++;v+=M}}(t,e,r,n,a)}(t,e,i,n,a):function(t,e,i,n,a){var r=mt(e,"font",n.font||jh.DEFAULT_FONT),o=n.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=jh.parsePlainText(i,r,o,n.truncate));var l=s.outerHeight,u=s.lines,h=s.lineHeight,c=gt(0,n,a),d=c.baseX,f=c.baseY,p=c.textAlign,g=c.textVerticalAlign;ct(e,n,a,d,f);var m=jh.adjustTextY(f,l,g),v=d,y=m,x=ft(n);if(x||o){var _=jh.getWidth(i,r);o&&(_+=o[1]+o[3]);var b=jh.adjustTextX(d,_,p);x&&pt(t,e,n,b,m,_,l),o&&(v=_t(d,p,o),y+=o[0])}mt(e,"textAlign",p||"left"),mt(e,"textBaseline","middle"),mt(e,"shadowBlur",n.textShadowBlur||0),mt(e,"shadowColor",n.textShadowColor||"transparent"),mt(e,"shadowOffsetX",n.textShadowOffsetX||0),mt(e,"shadowOffsetY",n.textShadowOffsetY||0),y+=h/2;var w=n.textStrokeWidth,S=vt(n.textStroke,w),M=yt(n.textFill);S&&(mt(e,"lineWidth",w),mt(e,"strokeStyle",S)),M&&mt(e,"fillStyle",M);for(var I=0;I<u.length;I++)S&&e.strokeText(u[I],v,y),M&&e.fillText(u[I],v,y),y+=h}(t,e,i,n,a)},getStroke:vt,getFill:yt,needDrawText:function(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}},nc=new ch,ac=function(){};ac.prototype={constructor:ac,drawRectText:function(t,e){var i=this.style;e=i.textRect||e,this.__dirty&&ic.normalizeTextStyle(i,!0);var n=i.text;if(null!=n&&(n+=""),ic.needDrawText(n,i)){t.save();var a=this.transform;i.transformText?this.setTransform(t):a&&(nc.copy(e),nc.applyTransform(a),e=nc),ic.renderText(this,t,n,i,e),t.restore()}}};var rc=ac;bt.prototype={constructor:bt,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var i=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(i[0],i[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?sh.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new Ah(t,this),this.dirty(!1),this}},du.inherits(bt,sh),du.mixin(bt,rc);var oc=bt;wt.prototype={constructor:wt,type:"image",brush:function(t,e){var i=this.style,n=i.image;i.bind(t,this,e);var a=this._image=Rh.createOrUpdateImage(n,this._image,this,this.onload);if(a&&Rh.isImageReady(a)){var r=i.x||0,o=i.y||0,s=i.width,l=i.height,u=a.width/a.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=a.width,l=a.height),this.setTransform(t),i.sWidth&&i.sHeight){var h=i.sx||0,c=i.sy||0;t.drawImage(a,h,c,i.sWidth,i.sHeight,r,o,s,l)}else if(i.sx&&i.sy){var d=s-(h=i.sx),f=l-(c=i.sy);t.drawImage(a,h,c,d,f,r,o,s,l)}else t.drawImage(a,r,o,s,l);null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new ch(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},du.inherits(wt,oc);var sc=wt,lc=qu.devicePixelRatio,uc=new ch(0,0,0,0),hc=new ch(0,0,0,0),cc=function(t,e,i){this.type="canvas";var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=du.extend({},i||{}),this.dpr=i.devicePixelRatio||lc,this._singleCanvas=n,this.root=t;var a=t.style;a&&(a["-webkit-tap-highlight-color"]="transparent",a["-webkit-user-select"]=a["user-select"]=a["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var r=this._zlevelList=[],o=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,n){var s=t.width,l=t.height;null!=i.width&&(s=i.width),null!=i.height&&(l=i.height),this.dpr=i.devicePixelRatio||1,t.width=s*this.dpr,t.height=l*this.dpr,this._width=s,this._height=l;var u=new Ph(t,this,this.dpr);u.__builtin__=!0,u.initContext(),o[314159]=u,u.zlevel=314159,r.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=function(t,e){var i=document.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};cc.prototype={constructor:cc,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),i=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var n=0;n<i.length;n++){var a=i[n],r=this._layers[a];if(!r.__builtin__&&r.refresh){var o=0===n?this._backgroundColor:null;r.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var i=new t.constructor({style:t.style,shape:t.shape});i.__from=t,t.__hoverMir=i,i.setStyle(e),this._hoverElements.push(i)}},removeHover:function(t){var e=t.__hoverMir,i=this._hoverElements,n=du.indexOf(i,e);n>=0&&i.splice(n,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,i=0;i<e.length;i++){var n=e[i].__from;n&&(n.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,i=this._hoverlayer;if(i&&i.clear(),e){mh(t,this.storage.displayableSortFunc),i||(i=this._hoverlayer=this.getLayer(1e5));var n={};i.ctx.save();for(var a=0;a<e;){var r=t[a],o=r.__from;o&&o.__zr?(a++,o.invisible||(r.transform=o.transform,r.invTransform=o.invTransform,r.__clipPaths=o.__clipPaths,this._doPaintEl(r,i,!0,n))):(t.splice(a,1),o.__hoverMir=null,e--)}i.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,i){if(this._redrawId===i){e=e||!1,this._updateLayerStatus(t);var n=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!n){var a=this;kh(function(){a._paintList(t,e,i)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,e,i),this.eachBuiltinLayer(function(n){n.virtual&&t.drawImage(n.dom,0,0,e,i)})},_doPaintList:function(t,e){for(var i=[],n=0;n<this._zlevelList.length;n++){var a=this._zlevelList[n];(s=this._layers[a]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&i.push(s)}for(var r=!0,o=0;o<i.length;o++){var s=i[o],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,d=c&&Date.now(),f=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,f);else if(h===s.__startIndex){var p=t[h];p.incremental&&p.notClear&&!e||s.clear(!1,f)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var g=h;g<s.__endIndex;g++){var m=t[g];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,c){if(Date.now()-d>15)break}}s.__drawIndex=g,s.__drawIndex<s.__endIndex&&(r=!1),u.prevElClipPaths&&l.restore(),l.restore()}return Jl.wxa&&du.each(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),r},_doPaintEl:function(t,e,i,n){var a=e.ctx,r=t.transform;if((e.__dirty||i)&&!t.invisible&&0!==t.style.opacity&&(!r||r[0]||r[3])&&(!t.culling||!function(t,e,i){return uc.copy(t.getBoundingRect()),t.transform&&uc.applyTransform(t.transform),hc.width=e,hc.height=i,!uc.intersect(hc)}(t,this._width,this._height))){var o=t.__clipPaths;n.prevElClipPaths&&!function(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!0}(o,n.prevElClipPaths)||(n.prevElClipPaths&&(e.ctx.restore(),n.prevElClipPaths=null,n.prevEl=null),o&&(a.save(),function(t,e){for(var i=0;i<t.length;i++){var n=t[i];n.setTransform(e),e.beginPath(),n.buildPath(e,n.shape),e.clip(),n.restoreTransform(e)}}(o,a),n.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(a),t.brush(a,n.prevEl||null),n.prevEl=t,t.afterBrush&&t.afterBrush(a)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var i=this._layers[t];return i||((i=new Ph("zr_"+t,this,this.dpr)).zlevel=t,i.__builtin__=!0,this._layerConfig[t]&&du.merge(i,this._layerConfig[t],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i},insertLayer:function(t,e){var i=this._layers,n=this._zlevelList,a=n.length,r=null,o=-1,s=this._domRoot;if(i[t])Ju("ZLevel "+t+" has been used already");else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(a>0&&t>n[0]){for(o=0;o<a-1&&!(n[o]<t&&n[o+1]>t);o++);r=i[n[o]]}if(n.splice(o+1,0,t),i[t]=e,!e.virtual)if(r){var l=r.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Ju("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var i,n,a=this._zlevelList;for(n=0;n<a.length;n++)i=a[n],t.call(e,this._layers[i],i)},eachBuiltinLayer:function(t,e){var i,n,a,r=this._zlevelList;for(a=0;a<r.length;a++)n=r[a],(i=this._layers[n]).__builtin__&&t.call(e,i,n)},eachOtherLayer:function(t,e){var i,n,a,r=this._zlevelList;for(a=0;a<r.length;a++)n=r[a],(i=this._layers[n]).__builtin__||t.call(e,i,n)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(a=1;a<t.length;a++){if((o=t[a]).zlevel!==t[a-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}}for(var i=null,n=0,a=0;a<t.length;a++){var r,o=t[a],s=o.zlevel;o.incremental?((r=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,n=1):r=this.getLayer(s+(n>0?.01:0),this._needsManuallyCompositing),r.__builtin__||Ju("ZLevel "+s+" has been used by unkown layer "+r.id),r!==i&&(r.__used=!0,r.__startIndex!==a&&(r.__dirty=!0),r.__startIndex=a,r.incremental?r.__drawIndex=-1:r.__drawIndex=a,e(a),i=r),o.__dirty&&(r.__dirty=!0,r.incremental&&r.__drawIndex<0&&(r.__drawIndex=a))}e(a),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?du.merge(i[t],e,!0):i[t]=e;for(var n=0;n<this._zlevelList.length;n++){var a=this._zlevelList[n];if(a===t||a===t+.01){var r=this._layers[a];du.merge(r,i[t],!0)}}}},delLayer:function(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i.splice(du.indexOf(i,t),1))},resize:function(t,e){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!=t||e!=this._height){i.style.width=t+"px",i.style.height=e+"px";for(var a in this._layers)this._layers.hasOwnProperty(a)&&this._layers[a].resize(t,e);du.each(this._progressiveLayers,function(i){i.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new Ph("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var i=e.dom.width,n=e.dom.height,a=e.ctx;this.eachLayer(function(t){t.__builtin__?a.drawImage(t.dom,0,0,i,n):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var r={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,r)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],a=["paddingLeft","paddingTop"][t],r=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var o=this.root,s=document.defaultView.getComputedStyle(o);return(o[n]||St(s[i])||St(o.style[i]))-(St(s[a])||0)-(St(s[r])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t.getBoundingRect(),r=t.style,o=r.shadowBlur*e,s=r.shadowOffsetX*e,l=r.shadowOffsetY*e,u=r.hasStroke()?r.lineWidth:0,h=Math.max(u/2,-s+o),c=Math.max(u/2,s+o),d=Math.max(u/2,-l+o),f=Math.max(u/2,l+o),p=a.width+h+c,g=a.height+d+f;i.width=p*e,i.height=g*e,n.scale(e,e),n.clearRect(0,0,p,g),n.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-a.x,d-a.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(n);var v=new sc({style:{x:0,y:0,image:i}});return null!=m.position&&(v.position=t.position=m.position),null!=m.rotation&&(v.rotation=t.rotation=m.rotation),null!=m.scale&&(v.scale=t.scale=m.scale),v}};var dc=cc,fc=yu,pc="undefined"!=typeof window&&!!window.addEventListener,gc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,mc={Dispatcher:fc,clientToLocal:Mt,normalizeEvent:function(t,e,i){if(null!=(e=e||window.event).zrX)return e;var n=e.type;if(n&&n.indexOf("touch")>=0){var a="touchend"!=n?e.targetTouches[0]:e.changedTouches[0];a&&Mt(t,a,e,i)}else Mt(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var r=e.button;return null==e.which&&void 0!==r&&gc.test(e.type)&&(e.which=1&r?1:2&r?3:4&r?2:0),e},addEventListener:function(t,e,i){pc?t.addEventListener(e,i):t.attachEvent("on"+e,i)},removeEventListener:function(t,e,i){pc?t.removeEventListener(e,i):t.detachEvent("on"+e,i)},stop:pc?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},notLeftMouse:function(t){return t.which>1}},vc=mc.Dispatcher,yc=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,vc.call(this)};yc.prototype={constructor:yc,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),i=0;i<e.length;i++)this.addClip(e[i])},removeClip:function(t){var e=du.indexOf(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),i=0;i<e.length;i++)this.removeClip(e[i]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,i=this._clips,n=i.length,a=[],r=[],o=0;o<n;o++){var s=i[o],l=s.step(t,e);l&&(a.push(l),r.push(s))}for(o=0;o<n;)i[o]._needsRemove?(i[o]=i[n-1],i.pop(),n--):o++;n=a.length;for(o=0;o<n;o++)r[o].fire(a[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(kh(t),!e._paused&&e._update())}var e=this;this._running=!0,kh(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var i=new Yu(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(i),i}},du.mixin(yc,vc);var xc=yc,_c=function(){this._track=[]};_c.prototype={constructor:_c,recognize:function(t,e,i){return this._doTrack(t,e,i),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,i){var n=t.touches;if(n){for(var a={points:[],touches:[],target:e,event:t},r=0,o=n.length;r<o;r++){var s=n[r],l=mc.clientToLocal(i,s,{});a.points.push([l.zrX,l.zrY]),a.touches.push(s)}this._track.push(a)}},_recognize:function(t){for(var e in bc)if(bc.hasOwnProperty(e)){var i=bc[e](this._track,t);if(i)return i}}};var bc={pinch:function(t,e){var i=t.length;if(i){var n=(t[i-1]||{}).points,a=(t[i-2]||{}).points||n;if(a&&a.length>1&&n&&n.length>1){var r=At(n)/At(a);!isFinite(r)&&(r=1),e.pinchScale=r;var o=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(n);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},wc=_c,Sc=mc.addEventListener,Mc=mc.removeEventListener,Ic=mc.normalizeEvent,Ac=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Tc=["touchstart","touchend","touchmove"],Dc={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Cc=du.map(Ac,function(t){var e=t.replace("mouse","pointer");return Dc[e]?e:t}),Lc={mousemove:function(t){t=Ic(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ic(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ic(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,Dt(this,t,"start"),Lc.mousemove.call(this,t),Lc.mousedown.call(this,t),Ct(this)},touchmove:function(t){(t=Ic(this.dom,t)).zrByTouch=!0,Dt(this,t,"change"),Lc.mousemove.call(this,t),Ct(this)},touchend:function(t){(t=Ic(this.dom,t)).zrByTouch=!0,Dt(this,t,"end"),Lc.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Lc.click.call(this,t),Ct(this)},pointerdown:function(t){Lc.mousedown.call(this,t)},pointermove:function(t){Lt(t)||Lc.mousemove.call(this,t)},pointerup:function(t){Lc.mouseup.call(this,t)},pointerout:function(t){Lt(t)||Lc.mouseout.call(this,t)}};du.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Lc[t]=function(e){e=Ic(this.dom,e),this.trigger(t,e)}});var Pc=Pt.prototype;Pc.dispose=function(){for(var t=Ac.concat(Tc),e=0;e<t.length;e++){var i=t[e];Mc(this.dom,Tt(i),this._handlers[i])}},Pc.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},du.mixin(Pt,yu);var kc=Pt,Oc=!Jl.canvasSupported,Rc={canvas:dc},Nc={},Ec=function(t,e,i){i=i||{},this.dom=e,this.id=t;var n=this,a=new yh,r=i.renderer;if(Oc){if(!Rc.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");r="vml"}else r&&Rc[r]||(r="canvas");var o=new Rc[r](e,a,i,t);this.storage=a,this.painter=o;var s=Jl.node||Jl.worker?null:new kc(o.getViewportRoot());this.handler=new wu(a,o,s,o.root),this.animation=new xc({stage:{update:du.bind(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=a.delFromStorage,u=a.addToStorage;a.delFromStorage=function(t){l.call(a,t),t&&t.removeSelfFromZr(n)},a.addToStorage=function(t){u.call(a,t),t.addSelfToZr(n)}};Ec.prototype={constructor:Ec,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,i){this.handler.on(t,e,i)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,function(t){delete Nc[t]}(this.id)}};var zc={version:"4.0.4",init:function(t,e){var i=new Ec($l(),t,e);return Nc[i.id]=i,i},dispose:function(t){if(t)t.dispose();else{for(var e in Nc)Nc.hasOwnProperty(e)&&Nc[e].dispose();Nc={}}return this},getInstance:function(t){return Nc[t]},registerPainter:function(t,e){Rc[t]=e}},Vc=du.each,Bc=du.isObject,Gc=du.isArray,Hc="series\0",Fc=0,Wc={normalizeToArray:kt,defaultEmphasis:function(t,e,i){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var n=0,a=i.length;n<a;n++){var r=i[n];!t.emphasis[e].hasOwnProperty(r)&&t[e].hasOwnProperty(r)&&(t.emphasis[e][r]=t[e][r])}}},TEXT_STYLE_OPTIONS:["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],getDataItemValue:function(t){return!Bc(t)||Gc(t)||t instanceof Date?t:t.value},isDataItemOption:function(t){return Bc(t)&&!(t instanceof Array)},mappingToExists:function(t,e){e=(e||[]).slice();var i=du.map(t||[],function(t,e){return{exist:t}});return Vc(e,function(t,n){if(Bc(t)){for(a=0;a<i.length;a++)if(!i[a].option&&null!=t.id&&i[a].exist.id===t.id+"")return i[a].option=t,void(e[n]=null);for(var a=0;a<i.length;a++){var r=i[a].exist;if(!(i[a].option||null!=r.id&&null!=t.id||null==t.name||Ot(t)||Ot(r)||r.name!==t.name+""))return i[a].option=t,void(e[n]=null)}}}),Vc(e,function(t,e){if(Bc(t)){for(var n=0;n<i.length;n++){var a=i[n].exist;if(!i[n].option&&!Ot(a)&&null==t.id){i[n].option=t;break}}n>=i.length&&i.push({option:t})}}),i},makeIdAndName:function(t){var e=du.createHashMap();Vc(t,function(t,i){var n=t.exist;n&&e.set(n.id,t)}),Vc(t,function(t,i){var n=t.option;du.assert(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),Vc(t,function(t,i){var n=t.exist,a=t.option,r=t.keyInfo;if(Bc(a)){if(r.name=null!=a.name?a.name+"":n?n.name:Hc+i,n)r.id=n.id;else if(null!=a.id)r.id=a.id+"";else{var o=0;do{r.id="\0"+r.name+"\0"+o++}while(e.get(r.id))}e.set(r.id,t)}})},isNameSpecified:function(t){var e=t.name;return!(!e||!e.indexOf(Hc))},isIdInner:Ot,compressBatches:function(t,e){function i(t,e,i){for(var n=0,a=t.length;n<a;n++)for(var r=t[n].seriesId,o=kt(t[n].dataIndex),s=i&&i[r],l=0,u=o.length;l<u;l++){var h=o[l];s&&s[h]?s[h]=null:(e[r]||(e[r]={}))[h]=1}}function n(t,e){var i=[];for(var a in t)if(t.hasOwnProperty(a)&&null!=t[a])if(e)i.push(+a);else{var r=n(t[a],!0);r.length&&i.push({seriesId:a,dataIndex:r})}return i}var a={},r={};return i(t||[],a),i(e||[],r,a),[n(a),n(r)]},queryDataIndex:function(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?du.isArray(e.dataIndex)?du.map(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?du.isArray(e.name)?du.map(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0},makeInner:function(){var t="__\0ec_inner_"+Fc+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}},parseFinder:function(t,e,i){if(du.isString(e)){var n={};n[e+"Index"]=0,e=n}var a=i&&i.defaultMainType;!a||Rt(e,a+"Index")||Rt(e,a+"Id")||Rt(e,a+"Name")||(e[a+"Index"]=0);var r={};return Vc(e,function(n,a){if(n=e[a],"dataIndex"!==a&&"dataIndexInside"!==a){var o=a.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],l=(o[2]||"").toLowerCase();if(!(!s||!l||null==n||"index"===l&&"none"===n||i&&i.includeMainTypes&&du.indexOf(i.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===n||(u[l]=n);var h=t.queryComponents(u);r[s+"Models"]=h,r[s+"Model"]=h[0]}}else r[a]=n}),r},setAttribute:function(t,e,i){t.setAttribute?t.setAttribute(e,i):t[e]=i},getAttribute:function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}},Uc=".",Zc="___EC__COMPONENT__CONTAINER___",jc=0,Yc={parseClassType:Nt,enableClassExtend:function(t,e){t.$constructor=t,t.extend=function(t){var e=this,i=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return du.extend(i.prototype,t),i.extend=this.extend,i.superCall=function(t,e){var i=du.slice(arguments,2);return this.superClass.prototype[e].apply(t,i)},i.superApply=function(t,e,i){return this.superClass.prototype[e].apply(t,i)},du.inherits(i,this),i.superClass=e,i}},enableClassCheck:function(t){var e=["__\0is_clz",jc++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}},enableClassManagement:function(t,e){e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(function(t){du.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=Nt(e)).sub?e.sub!==Zc&&((function(t){var e=i[t.main];return e&&e[Zc]||((e=i[t.main]={})[Zc]=!0),e}(e))[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var a=i[t];if(a&&a[Zc]&&(a=e?a[e]:null),n&&!a)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return a},t.getClassesByMainType=function(t){t=Nt(t);var e=[],n=i[t.main];return n&&n[Zc]?du.each(n,function(t,i){i!==Zc&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=Nt(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return du.each(i,function(e,i){t.push(i)}),t},t.hasSubTypes=function(t){t=Nt(t);var e=i[t.main];return e&&e[Zc]},t.parseClassType=Nt,e.registerWhenExtend){var n=t.extend;n&&(t.extend=function(e){var i=n.call(this,e);return t.registerClass(i,e.type)})}return t},setReadOnly:function(t,e){}},Xc=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,i,n){for(var a={},r=0;r<t.length;r++){var o=t[r][1];if(!(i&&du.indexOf(i,o)>=0||n&&du.indexOf(n,o)<0)){var s=e.getShallow(o);null!=s&&(a[t[r][0]]=s)}}return a}},qc=Xc([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),$c={getLineStyle:function(t){var e=qc(this,t),i=this.getLineDash(e.lineWidth);return i&&(e.lineDash=i),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),i=Math.max(t,2),n=4*t;return"solid"===e||null==e?null:"dashed"===e?[n,n]:[i,i]}},Kc=Xc([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),Jc={getAreaStyle:function(t,e){return Kc(this,t,e)}},Qc=pu.create,td=pu.distSquare,ed=Math.pow,id=Math.sqrt,nd=1e-8,ad=1e-4,rd=id(3),od=1/3,sd=Qc(),ld=Qc(),ud=Qc(),hd={cubicAt:Vt,cubicDerivativeAt:function(t,e,i,n,a){var r=1-a;return 3*(((e-t)*r+2*(i-e)*a)*r+(n-i)*a*a)},cubicRootAt:function(t,e,i,n,a,r){var o=n+3*(e-i)-t,s=3*(i-2*e+t),l=3*(e-t),u=t-a,h=s*s-3*o*l,c=s*l-9*o*u,d=l*l-3*s*u,f=0;if(Et(h)&&Et(c))Et(s)?r[0]=0:(M=-l/s)>=0&&M<=1&&(r[f++]=M);else{var p=c*c-4*h*d;if(Et(p)){var g=c/h,m=-g/2;(M=-s/o+g)>=0&&M<=1&&(r[f++]=M),m>=0&&m<=1&&(r[f++]=m)}else if(p>0){var v=id(p),y=h*s+1.5*o*(-c+v),x=h*s+1.5*o*(-c-v);(M=(-s-((y=y<0?-ed(-y,od):ed(y,od))+(x=x<0?-ed(-x,od):ed(x,od))))/(3*o))>=0&&M<=1&&(r[f++]=M)}else{var _=(2*h*s-3*o*c)/(2*id(h*h*h)),b=Math.acos(_)/3,w=id(h),S=Math.cos(b),M=(-s-2*w*S)/(3*o),m=(-s+w*(S+rd*Math.sin(b)))/(3*o),I=(-s+w*(S-rd*Math.sin(b)))/(3*o);M>=0&&M<=1&&(r[f++]=M),m>=0&&m<=1&&(r[f++]=m),I>=0&&I<=1&&(r[f++]=I)}}return f},cubicExtrema:function(t,e,i,n,a){var r=6*i-12*e+6*t,o=9*e+3*n-3*t-9*i,s=3*e-3*t,l=0;if(Et(o))zt(r)&&(c=-s/r)>=0&&c<=1&&(a[l++]=c);else{var u=r*r-4*o*s;if(Et(u))a[0]=-r/(2*o);else if(u>0){var h=id(u),c=(-r+h)/(2*o),d=(-r-h)/(2*o);c>=0&&c<=1&&(a[l++]=c),d>=0&&d<=1&&(a[l++]=d)}}return l},cubicSubdivide:function(t,e,i,n,a,r){var o=(e-t)*a+t,s=(i-e)*a+e,l=(n-i)*a+i,u=(s-o)*a+o,h=(l-s)*a+s,c=(h-u)*a+u;r[0]=t,r[1]=o,r[2]=u,r[3]=c,r[4]=c,r[5]=h,r[6]=l,r[7]=n},cubicProjectPoint:function(t,e,i,n,a,r,o,s,l,u,h){var c,d,f,p,g,m=.005,v=1/0;sd[0]=l,sd[1]=u;for(var y=0;y<1;y+=.05)ld[0]=Vt(t,i,a,o,y),ld[1]=Vt(e,n,r,s,y),(p=td(sd,ld))<v&&(c=y,v=p);v=1/0;for(var x=0;x<32&&!(m<ad);x++)d=c-m,f=c+m,ld[0]=Vt(t,i,a,o,d),ld[1]=Vt(e,n,r,s,d),p=td(ld,sd),d>=0&&p<v?(c=d,v=p):(ud[0]=Vt(t,i,a,o,f),ud[1]=Vt(e,n,r,s,f),g=td(ud,sd),f<=1&&g<v?(c=f,v=g):m*=.5);return h&&(h[0]=Vt(t,i,a,o,c),h[1]=Vt(e,n,r,s,c)),id(v)},quadraticAt:Bt,quadraticDerivativeAt:function(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e))},quadraticRootAt:function(t,e,i,n,a){var r=t-2*e+i,o=2*(e-t),s=t-n,l=0;if(Et(r))zt(o)&&(c=-s/o)>=0&&c<=1&&(a[l++]=c);else{var u=o*o-4*r*s;if(Et(u))(c=-o/(2*r))>=0&&c<=1&&(a[l++]=c);else if(u>0){var h=id(u),c=(-o+h)/(2*r),d=(-o-h)/(2*r);c>=0&&c<=1&&(a[l++]=c),d>=0&&d<=1&&(a[l++]=d)}}return l},quadraticExtremum:function(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n},quadraticSubdivide:function(t,e,i,n,a){var r=(e-t)*n+t,o=(i-e)*n+e,s=(o-r)*n+r;a[0]=t,a[1]=r,a[2]=s,a[3]=s,a[4]=o,a[5]=i},quadraticProjectPoint:function(t,e,i,n,a,r,o,s,l){var u,h=.005,c=1/0;sd[0]=o,sd[1]=s;for(var d=0;d<1;d+=.05)ld[0]=Bt(t,i,a,d),ld[1]=Bt(e,n,r,d),(m=td(sd,ld))<c&&(u=d,c=m);c=1/0;for(var f=0;f<32&&!(h<ad);f++){var p=u-h,g=u+h;ld[0]=Bt(t,i,a,p),ld[1]=Bt(e,n,r,p);var m=td(ld,sd);if(p>=0&&m<c)u=p,c=m;else{ud[0]=Bt(t,i,a,g),ud[1]=Bt(e,n,r,g);var v=td(ud,sd);g<=1&&v<c?(u=g,c=v):h*=.5}}return l&&(l[0]=Bt(t,i,a,u),l[1]=Bt(e,n,r,u)),id(c)}},cd=Math.min,dd=Math.max,fd=Math.sin,pd=Math.cos,gd=2*Math.PI,md=pu.create(),vd=pu.create(),yd=pu.create(),xd=[],_d=[],bd={fromPoints:function(t,e,i){if(0!==t.length){var n,a=t[0],r=a[0],o=a[0],s=a[1],l=a[1];for(n=1;n<t.length;n++)a=t[n],r=cd(r,a[0]),o=dd(o,a[0]),s=cd(s,a[1]),l=dd(l,a[1]);e[0]=r,e[1]=s,i[0]=o,i[1]=l}},fromLine:function(t,e,i,n,a,r){a[0]=cd(t,i),a[1]=cd(e,n),r[0]=dd(t,i),r[1]=dd(e,n)},fromCubic:function(t,e,i,n,a,r,o,s,l,u){var h,c=hd.cubicExtrema,d=hd.cubicAt,f=c(t,i,a,o,xd);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<f;h++){var p=d(t,i,a,o,xd[h]);l[0]=cd(p,l[0]),u[0]=dd(p,u[0])}for(f=c(e,n,r,s,_d),h=0;h<f;h++){var g=d(e,n,r,s,_d[h]);l[1]=cd(g,l[1]),u[1]=dd(g,u[1])}l[0]=cd(t,l[0]),u[0]=dd(t,u[0]),l[0]=cd(o,l[0]),u[0]=dd(o,u[0]),l[1]=cd(e,l[1]),u[1]=dd(e,u[1]),l[1]=cd(s,l[1]),u[1]=dd(s,u[1])},fromQuadratic:function(t,e,i,n,a,r,o,s){var l=hd.quadraticExtremum,u=hd.quadraticAt,h=dd(cd(l(t,i,a),1),0),c=dd(cd(l(e,n,r),1),0),d=u(t,i,a,h),f=u(e,n,r,c);o[0]=cd(t,a,d),o[1]=cd(e,r,f),s[0]=dd(t,a,d),s[1]=dd(e,r,f)},fromArc:function(t,e,i,n,a,r,o,s,l){var u=pu.min,h=pu.max,c=Math.abs(a-r);if(c%gd<1e-4&&c>1e-4)return s[0]=t-i,s[1]=e-n,l[0]=t+i,void(l[1]=e+n);if(md[0]=pd(a)*i+t,md[1]=fd(a)*n+e,vd[0]=pd(r)*i+t,vd[1]=fd(r)*n+e,u(s,md,vd),h(l,md,vd),(a%=gd)<0&&(a+=gd),(r%=gd)<0&&(r+=gd),a>r&&!o?r+=gd:a<r&&o&&(a+=gd),o){var d=r;r=a,a=d}for(var f=0;f<r;f+=Math.PI/2)f>a&&(yd[0]=pd(f)*i+t,yd[1]=fd(f)*n+e,u(s,yd,s),h(l,yd,l))}},wd=qu.devicePixelRatio,Sd={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Md=[],Id=[],Ad=[],Td=[],Dd=Math.min,Cd=Math.max,Ld=Math.cos,Pd=Math.sin,kd=Math.sqrt,Od=Math.abs,Rd="undefined"!=typeof Float32Array,Nd=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Nd.prototype={constructor:Nd,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Od(1/wd/t)||0,this._uy=Od(1/wd/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Sd.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var i=Od(t-this._xi)>this._ux||Od(e-this._yi)>this._uy||this._len<5;return this.addData(Sd.L,t,e),this._ctx&&i&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),i&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,i,n,a,r){return this.addData(Sd.C,t,e,i,n,a,r),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,a,r):this._ctx.bezierCurveTo(t,e,i,n,a,r)),this._xi=a,this._yi=r,this},quadraticCurveTo:function(t,e,i,n){return this.addData(Sd.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this},arc:function(t,e,i,n,a,r){return this.addData(Sd.A,t,e,i,i,n,a-n,0,r?0:1),this._ctx&&this._ctx.arc(t,e,i,n,a,r),this._xi=Ld(a)*i+t,this._yi=Pd(a)*i+t,this},arcTo:function(t,e,i,n,a){return this._ctx&&this._ctx.arcTo(t,e,i,n,a),this},rect:function(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(Sd.R,t,e,i,n),this},closePath:function(){this.addData(Sd.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t.length;i++)e+=t[i];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Rd||(this.data=new Float32Array(e));for(var i=0;i<e;i++)this.data[i]=t[i];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,i=0,n=this._len,a=0;a<e;a++)i+=t[a].len();Rd&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(a=0;a<e;a++)for(var r=t[a].data,o=0;o<r.length;o++)this.data[n++]=r[o];this._len=n},addData:function(t){var e=arguments;if(this._saveData){var i=this.data;this._len+arguments.length>i.length&&(this._expandData(),i=this.data);for(var n=0;n<arguments.length;n++)i[this._len++]=e[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var i,n,a=this._dashSum,r=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,d=kd(h*h+c*c),f=l,p=u,g=o.length;for(h/=d,c/=d,r<0&&(r=a+r),f-=(r%=a)*h,p-=r*c;h>0&&f<=t||h<0&&f>=t||0==h&&(c>0&&p<=e||c<0&&p>=e);)f+=h*(i=o[n=this._dashIdx]),p+=c*i,this._dashIdx=(n+1)%g,h>0&&f<l||h<0&&f>l||c>0&&p<u||c<0&&p>u||s[n%2?"moveTo":"lineTo"](h>=0?Dd(f,t):Cd(f,t),c>=0?Dd(p,e):Cd(p,e));h=f-t,c=p-e,this._dashOffset=-kd(h*h+c*c)},_dashedBezierTo:function(t,e,i,n,a,r){var o,s,l,u,h,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,m=this._yi,v=hd.cubicAt,y=0,x=this._dashIdx,_=f.length,b=0;for(d<0&&(d=c+d),d%=c,o=0;o<1;o+=.1)s=v(g,t,i,a,o+.1)-v(g,t,i,a,o),l=v(m,e,n,r,o+.1)-v(m,e,n,r,o),y+=kd(s*s+l*l);for(;x<_&&!((b+=f[x])>d);x++);for(o=(b-d)/y;o<=1;)u=v(g,t,i,a,o),h=v(m,e,n,r,o),x%2?p.moveTo(u,h):p.lineTo(u,h),o+=f[x]/y,x=(x+1)%_;x%2!=0&&p.lineTo(a,r),s=a-u,l=r-h,this._dashOffset=-kd(s*s+l*l)},_dashedQuadraticTo:function(t,e,i,n){var a=i,r=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,a,r)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Rd&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Md[0]=Md[1]=Ad[0]=Ad[1]=Number.MAX_VALUE,Id[0]=Id[1]=Td[0]=Td[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,n=0,a=0,r=0;r<t.length;){var o=t[r++];switch(1==r&&(n=e=t[r],a=i=t[r+1]),o){case Sd.M:e=n=t[r++],i=a=t[r++],Ad[0]=n,Ad[1]=a,Td[0]=n,Td[1]=a;break;case Sd.L:bd.fromLine(e,i,t[r],t[r+1],Ad,Td),e=t[r++],i=t[r++];break;case Sd.C:bd.fromCubic(e,i,t[r++],t[r++],t[r++],t[r++],t[r],t[r+1],Ad,Td),e=t[r++],i=t[r++];break;case Sd.Q:bd.fromQuadratic(e,i,t[r++],t[r++],t[r],t[r+1],Ad,Td),e=t[r++],i=t[r++];break;case Sd.A:var s=t[r++],l=t[r++],u=t[r++],h=t[r++],c=t[r++],d=t[r++]+c,f=(t[r++],1-t[r++]);1==r&&(n=Ld(c)*u+s,a=Pd(c)*h+l),bd.fromArc(s,l,u,h,c,d,f,Ad,Td),e=Ld(d)*u+s,i=Pd(d)*h+l;break;case Sd.R:n=e=t[r++],a=i=t[r++];var p=t[r++],g=t[r++];bd.fromLine(n,a,n+p,a+g,Ad,Td);break;case Sd.Z:e=n,i=a}pu.min(Md,Md,Ad),pu.max(Id,Id,Td)}return 0===r&&(Md[0]=Md[1]=Id[0]=Id[1]=0),new ch(Md[0],Md[1],Id[0]-Md[0],Id[1]-Md[1])},rebuildPath:function(t){for(var e,i,n,a,r,o,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var d=s[c++];switch(1==c&&(e=n=s[c],i=a=s[c+1]),d){case Sd.M:e=n=s[c++],i=a=s[c++],t.moveTo(n,a);break;case Sd.L:r=s[c++],o=s[c++],(Od(r-n)>l||Od(o-a)>u||c===h-1)&&(t.lineTo(r,o),n=r,a=o);break;case Sd.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),n=s[c-2],a=s[c-1];break;case Sd.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),n=s[c-2],a=s[c-1];break;case Sd.A:var f=s[c++],p=s[c++],g=s[c++],m=s[c++],v=s[c++],y=s[c++],x=s[c++],_=s[c++],b=g>m?g:m,w=g>m?1:g/m,S=g>m?m/g:1,M=v+y;Math.abs(g-m)>.001?(t.translate(f,p),t.rotate(x),t.scale(w,S),t.arc(0,0,b,v,M,1-_),t.scale(1/w,1/S),t.rotate(-x),t.translate(-f,-p)):t.arc(f,p,b,v,M,1-_),1==c&&(e=Ld(v)*g+f,i=Pd(v)*m+p),n=Ld(M)*g+f,a=Pd(M)*m+p;break;case Sd.R:e=n=s[c],i=a=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case Sd.Z:t.closePath(),n=e,a=i}}}},Nd.CMD=Sd;var Ed=Nd,zd={containStroke:function(t,e,i,n,a,r,o){if(0===a)return!1;var s=a,l=0,u=t;if(o>e+s&&o>n+s||o<e-s&&o<n-s||r>t+s&&r>i+s||r<t-s&&r<i-s)return!1;if(t===i)return Math.abs(r-t)<=s/2;var h=(l=(e-n)/(t-i))*r-o+(u=(t*n-i*e)/(t-i));return h*h/(l*l+1)<=s/2*s/2}},Vd={containStroke:function(t,e,i,n,a,r,o,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>n+c&&h>r+c&&h>s+c||h<e-c&&h<n-c&&h<r-c&&h<s-c||u>t+c&&u>i+c&&u>a+c&&u>o+c||u<t-c&&u<i-c&&u<a-c&&u<o-c)&&hd.cubicProjectPoint(t,e,i,n,a,r,o,s,u,h,null)<=c/2}},Bd=hd.quadraticProjectPoint,Gd={containStroke:function(t,e,i,n,a,r,o,s,l){if(0===o)return!1;var u=o;return!(l>e+u&&l>n+u&&l>r+u||l<e-u&&l<n-u&&l<r-u||s>t+u&&s>i+u&&s>a+u||s<t-u&&s<i-u&&s<a-u)&&Bd(t,e,i,n,a,r,s,l,null)<=u/2}},Hd=2*Math.PI,Fd={normalizeRadian:function(t){return(t%=Hd)<0&&(t+=Hd),t}},Wd=Fd.normalizeRadian,Ud=2*Math.PI,Zd={containStroke:function(t,e,i,n,a,r,o,s,l){if(0===o)return!1;var u=o;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>i||h+u<i)return!1;if(Math.abs(n-a)%Ud<1e-4)return!0;if(r){var c=n;n=Wd(a),a=Wd(c)}else n=Wd(n),a=Wd(a);n>a&&(a+=Ud);var d=Math.atan2(l,s);return d<0&&(d+=Ud),d>=n&&d<=a||d+Ud>=n&&d+Ud<=a}},jd=function(t,e,i,n,a,r){if(r>e&&r>n||r<e&&r<n)return 0;if(n===e)return 0;var o=n<e?1:-1,s=(r-e)/(n-e);1!==s&&0!==s||(o=n<e?.5:-.5);var l=s*(i-t)+t;return l===a?1/0:l>a?o:0},Yd=Fd.normalizeRadian,Xd=Ed.CMD,qd=2*Math.PI,$d=1e-4,Kd=[-1,-1,-1],Jd=[-1,-1],Qd={contain:function(t,e,i){return Gt(t,0,!1,e,i)},containStroke:function(t,e,i,n){return Gt(t,e,!0,i,n)}},tf=Dh.prototype.getCanvasPattern,ef=Math.abs,nf=new Ed(!0);Ht.prototype={constructor:Ht,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var i=this.style,n=this.path||nf,a=i.hasStroke(),r=i.hasFill(),o=i.fill,s=i.stroke,l=r&&!!o.colorStops,u=a&&!!s.colorStops,h=r&&!!o.image,c=a&&!!s.image;if(i.bind(t,this,e),this.setTransform(t),this.__dirty){var d;l&&(d=d||this.getBoundingRect(),this._fillGradient=i.getGradient(t,o,d)),u&&(d=d||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,s,d))}l?t.fillStyle=this._fillGradient:h&&(t.fillStyle=tf.call(o,t)),u?t.strokeStyle=this._strokeGradient:c&&(t.strokeStyle=tf.call(s,t));var f=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,m=this.getGlobalScale();n.setScale(m[0],m[1]),this.__dirtyPath||f&&!g&&a?(n.beginPath(t),f&&!g&&(n.setLineDash(f),n.setLineDashOffset(p)),this.buildPath(n,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),r&&n.fill(t),f&&g&&(t.setLineDash(f),t.lineDashOffset=p),a&&n.stroke(t),f&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,i){},createPathProxy:function(){this.path=new Ed},getBoundingRect:function(){var t=this._rect,e=this.style,i=!t;if(i){var n=this.path;n||(n=this.path=new Ed),this.__dirtyPath&&(n.beginPath(),this.buildPath(n,this.shape,!1)),t=n.getBoundingRect()}if(this._rect=t,e.hasStroke()){var a=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||i){a.copy(t);var r=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(r=Math.max(r,this.strokeContainThreshold||4)),o>1e-10&&(a.width+=r/o,a.height+=r/o,a.x-=r/o/2,a.y-=r/o/2)}return a}return t},contain:function(t,e){var i=this.transformCoordToLocal(t,e),n=this.getBoundingRect(),a=this.style;if(t=i[0],e=i[1],n.contain(t,e)){var r=this.path.data;if(a.hasStroke()){var o=a.lineWidth,s=a.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(a.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),Qd.containStroke(r,o/s,t,e)))return!0}if(a.hasFill())return Qd.contain(r,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):oc.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var i=this.shape;if(i){if(du.isObject(t))for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);else i[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&ef(t[0]-1)>1e-10&&ef(t[3]-1)>1e-10?Math.sqrt(ef(t[0]*t[3]-t[2]*t[1])):1}},Ht.extend=function(t){var e=function(e){Ht.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var n=this.shape;for(var a in i)!n.hasOwnProperty(a)&&i.hasOwnProperty(a)&&(n[a]=i[a])}t.init&&t.init.call(this,e)};du.inherits(e,Ht);for(var i in t)"style"!==i&&"shape"!==i&&(e.prototype[i]=t[i]);return e},du.inherits(Ht,oc);var af=Ht,rf=pu.applyTransform,of=Ed.CMD,sf=[[],[],[]],lf=Math.sqrt,uf=Math.atan2,hf=function(t,e){var i,n,a,r,o,s=t.data,l=of.M,u=of.C,h=of.L,c=of.R,d=of.A,f=of.Q;for(a=0,r=0;a<s.length;){switch(i=s[a++],r=a,n=0,i){case l:case h:n=1;break;case u:n=3;break;case f:n=2;break;case d:var p=e[4],g=e[5],m=lf(e[0]*e[0]+e[1]*e[1]),v=lf(e[2]*e[2]+e[3]*e[3]),y=uf(-e[1]/v,e[0]/m);s[a]*=m,s[a++]+=p,s[a]*=v,s[a++]+=g,s[a++]*=m,s[a++]*=v,s[a++]+=y,s[a++]+=y,r=a+=2;break;case c:x[0]=s[a++],x[1]=s[a++],rf(x,x,e),s[r++]=x[0],s[r++]=x[1],x[0]+=s[a++],x[1]+=s[a++],rf(x,x,e),s[r++]=x[0],s[r++]=x[1]}for(o=0;o<n;o++){var x;(x=sf[o])[0]=s[a++],x[1]=s[a++],rf(x,x,e),s[r++]=x[0],s[r++]=x[1]}}},cf=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],df=Math.sqrt,ff=Math.sin,pf=Math.cos,gf=Math.PI,mf=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},vf=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(mf(t)*mf(e))},yf=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(vf(t,e))},xf={createFromString:function(t,e){return new af(Wt(t,e))},extendFromString:function(t,e){return af.extend(Wt(t,e))},mergePath:function(t,e){for(var i=[],n=t.length,a=0;a<n;a++){var r=t[a];r.path||r.createPathProxy(),r.__dirtyPath&&r.buildPath(r.path,r.shape,!0),i.push(r.path)}var o=new af(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(i);var e=t.getContext();e&&t.rebuildPath(e)},o}},_f=function(t){oc.call(this,t)};_f.prototype={constructor:_f,type:"text",brush:function(t,e){var i=this.style;this.__dirty&&ic.normalizeTextStyle(i,!0),i.fill=i.stroke=i.shadowBlur=i.shadowColor=i.shadowOffsetX=i.shadowOffsetY=null;var n=i.text;null!=n&&(n+=""),i.bind(t,this,e),ic.needDrawText(n,i)&&(this.setTransform(t),ic.renderText(this,t,n,i),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&ic.normalizeTextStyle(t,!0),!this._rect){var e=t.text;null!=e?e+="":e="";var i=jh.getBoundingRect(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(i.x+=t.x||0,i.y+=t.y||0,ic.getStroke(t.textStroke,t.textStrokeWidth)){var n=t.textStrokeWidth;i.x-=n/2,i.y-=n/2,i.width+=n,i.height+=n}this._rect=i}return this._rect}},du.inherits(_f,oc);var bf=_f,wf=af.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,i){i&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),Sf=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],Mf=function(t){return Jl.browser.ie&&Jl.browser.version>=11?function(){var e,i=this.__clipPaths,n=this.style;if(i)for(var a=0;a<i.length;a++){var r=i[a],o=r&&r.shape,s=r&&r.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(l=0;l<Sf.length;l++)Sf[l][2]=n[Sf[l][0]],n[Sf[l][0]]=Sf[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<Sf.length;l++)n[Sf[l][0]]=Sf[l][2]}:t},If=af.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:Mf(af.prototype.brush),buildPath:function(t,e){var i=e.cx,n=e.cy,a=Math.max(e.r0||0,0),r=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o);t.moveTo(u*a+i,h*a+n),t.lineTo(u*r+i,h*r+n),t.arc(i,n,r,o,s,!l),t.lineTo(Math.cos(s)*a+i,Math.sin(s)*a+n),0!==a&&t.arc(i,n,a,s,o,l),t.closePath()}}),Af=af.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var i=e.cx,n=e.cy,a=2*Math.PI;t.moveTo(i+e.r,n),t.arc(i,n,e.r,0,a,!1),t.moveTo(i+e.r0,n),t.arc(i,n,e.r0,0,a,!0)}}),Tf=pu.distance,Df=function(t,e){for(var i=t.length,n=[],a=0,r=1;r<i;r++)a+=Tf(t[r-1],t[r]);var o=a/2;for(o=o<i?i:o,r=0;r<o;r++){var s,l,u,h=r/(o-1)*(e?i:i-1),c=Math.floor(h),d=h-c,f=t[c%i];e?(s=t[(c-1+i)%i],l=t[(c+1)%i],u=t[(c+2)%i]):(s=t[0===c?c:c-1],l=t[c>i-2?i-1:c+1],u=t[c>i-3?i-1:c+2]);var p=d*d,g=d*p;n.push([Ut(s[0],f[0],l[0],u[0],d,p,g),Ut(s[1],f[1],l[1],u[1],d,p,g)])}return n},Cf=pu.min,Lf=pu.max,Pf=pu.scale,kf=pu.distance,Of=pu.add,Rf=pu.clone,Nf=pu.sub,Ef=function(t,e,i,n){var a,r,o,s,l=[],u=[],h=[],c=[];if(n){o=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;d<f;d++)Cf(o,o,t[d]),Lf(s,s,t[d]);Cf(o,o,n[0]),Lf(s,s,n[1])}for(var d=0,f=t.length;d<f;d++){var p=t[d];if(i)a=t[d?d-1:f-1],r=t[(d+1)%f];else{if(0===d||d===f-1){l.push(Rf(t[d]));continue}a=t[d-1],r=t[d+1]}Nf(u,r,a),Pf(u,u,e);var g=kf(p,a),m=kf(p,r),v=g+m;0!==v&&(g/=v,m/=v),Pf(h,u,-g),Pf(c,u,m);var y=Of([],p,h),x=Of([],p,c);n&&(Lf(y,y,o),Cf(y,y,s),Lf(x,x,o),Cf(x,x,s)),l.push(y),l.push(x)}return i&&l.push(l.shift()),l},zf={buildPath:function(t,e,i){var n=e.points,a=e.smooth;if(n&&n.length>=2){if(a&&"spline"!==a){var r=Ef(n,a,i,e.smoothConstraint);t.moveTo(n[0][0],n[0][1]);for(var o=n.length,s=0;s<(i?o:o-1);s++){var l=r[2*s],u=r[2*s+1],h=n[(s+1)%o];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1])}}else{"spline"===a&&(n=Df(n,i)),t.moveTo(n[0][0],n[0][1]);for(var s=1,c=n.length;s<c;s++)t.lineTo(n[s][0],n[s][1])}i&&t.closePath()}}},Vf=af.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){zf.buildPath(t,e,!0)}}),Bf=af.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){zf.buildPath(t,e,!1)}}),Gf=af.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,a=e.width,r=e.height;e.r?Yh.buildPath(t,e):t.rect(i,n,a,r),t.closePath()}}),Hf=af.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,a=e.x2,r=e.y2,o=e.percent;0!==o&&(t.moveTo(i,n),o<1&&(a=i*(1-o)+a*o,r=n*(1-o)+r*o),t.lineTo(a,r))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Ff=hd.quadraticSubdivide,Wf=hd.cubicSubdivide,Uf=hd.quadraticAt,Zf=hd.cubicAt,jf=hd.quadraticDerivativeAt,Yf=hd.cubicDerivativeAt,Xf=[],qf=af.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,a=e.x2,r=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(i,n),null==l||null==u?(h<1&&(Ff(i,o,a,h,Xf),o=Xf[1],a=Xf[2],Ff(n,s,r,h,Xf),s=Xf[1],r=Xf[2]),t.quadraticCurveTo(o,s,a,r)):(h<1&&(Wf(i,o,l,a,h,Xf),o=Xf[1],l=Xf[2],a=Xf[3],Wf(n,s,u,r,h,Xf),s=Xf[1],u=Xf[2],r=Xf[3]),t.bezierCurveTo(o,s,l,u,a,r)))},pointAt:function(t){return Zt(this.shape,t,!1)},tangentAt:function(t){var e=Zt(this.shape,t,!0);return pu.normalize(e,e)}}),$f=af.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.cx,n=e.cy,a=Math.max(e.r,0),r=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(r),u=Math.sin(r);t.moveTo(l*a+i,u*a+n),t.arc(i,n,a,r,o,!s)}}),Kf=af.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e.length;i++)t=t||e[i].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t.length;i++)t[i].path||t[i].createPathProxy(),t[i].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var i=e.paths||[],n=0;n<i.length;n++)i[n].buildPath(t,i[n].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),af.prototype.getBoundingRect.call(this)}}),Jf=function(t){this.colorStops=t||[]};Jf.prototype={constructor:Jf,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Qf=Jf,tp=function(t,e,i,n,a,r){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==i?1:i,this.y2=null==n?0:n,this.type="linear",this.global=r||!1,Qf.call(this,a)};tp.prototype={constructor:tp},du.inherits(tp,Qf);var ep=tp,ip=function(t,e,i,n,a){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==i?.5:i,this.type="radial",this.global=a||!1,Qf.call(this,n)};ip.prototype={constructor:ip},du.inherits(ip,Qf);var np=ip,ap=du.inherits;jt.prototype.incremental=!0,jt.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},jt.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},jt.prototype.addDisplayables=function(t,e){e=e||!1;for(var i=0;i<t.length;i++)this.addDisplayable(t[i],e)},jt.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},jt.prototype.update=function(){this.updateTransform();for(t=this._cursor;t<this._displayables.length;t++){(e=this._displayables[t]).parent=this,e.update(),e.parent=null}for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},jt.prototype.brush=function(t,e){for(i=this._cursor;i<this._displayables.length;i++){(n=this._displayables[i]).beforeBrush&&n.beforeBrush(t),n.brush(t,i===this._cursor?null:this._displayables[i-1]),n.afterBrush&&n.afterBrush(t)}this._cursor=i;for(var i=0;i<this._temporaryDisplayables.length;i++){var n=this._temporaryDisplayables[i];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===i?null:this._temporaryDisplayables[i-1]),n.afterBrush&&n.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var rp=[];jt.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new ch(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var i=this._displayables[e],n=i.getBoundingRect().clone();i.needLocalTransform()&&n.applyTransform(i.getLocalTransform(rp)),t.union(n)}this._rect=t}return this._rect},jt.prototype.contain=function(t,e){var i=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(i[0],i[1]))for(var n=0;n<this._displayables.length;n++){if(this._displayables[n].contain(t,e))return!0}return!1},ap(jt,oc);var op=jt,sp=sc,lp=fh,up=bf,hp=wf,cp=If,dp=Af,fp=Vf,pp=Bf,gp=Gf,mp=Hf,vp=qf,yp=$f,xp=Kf,_p=ep,bp=np,wp=ch,Sp=op,Mp=Math.round,Ip=Math.max,Ap=Math.min,Tp={},Dp={Image:sp,Group:lp,Text:up,Circle:hp,Sector:cp,Ring:dp,Polygon:fp,Polyline:pp,Rect:gp,Line:mp,BezierCurve:vp,Arc:yp,CompoundPath:xp,LinearGradient:_p,RadialGradient:bp,BoundingRect:wp,IncrementalDisplayable:Sp,extendShape:function(t){return af.extend(t)},extendPath:function(t,e){return xf.extendFromString(t,e)},makePath:Yt,makeImage:function(t,e,i){var n=new sc({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===i){var a={width:t.width,height:t.height};n.setStyle(Xt(e,a))}}});return n},mergePath:xf.mergePath,resizePath:qt,subPixelOptimizeLine:function(t){var e=t.shape,i=t.style.lineWidth;return Mp(2*e.x1)===Mp(2*e.x2)&&(e.x1=e.x2=$t(e.x1,i,!0)),Mp(2*e.y1)===Mp(2*e.y2)&&(e.y1=e.y2=$t(e.y1,i,!0)),t},subPixelOptimizeRect:function(t){var e=t.shape,i=t.style.lineWidth,n=e.x,a=e.y,r=e.width,o=e.height;return e.x=$t(e.x,i,!0),e.y=$t(e.y,i,!0),e.width=Math.max($t(n+r,i,!1)-e.x,0===r?0:1),e.height=Math.max($t(a+o,i,!1)-e.y,0===o?0:1),t},subPixelOptimize:$t,setHoverStyle:function(t,e,i){t.__hoverSilentOnTouch=i&&i.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&ae(t,e)}):ae(t,e),t.on("mouseover",function(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&ie(this)}).on("mouseout",function(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&ne(this)}),t.on("emphasis",function(){this.__isEmphasis=!0,ie(this)}).on("normal",function(){this.__isEmphasis=!1,ne(this)})},setLabelStyle:function(t,e,i,n,a,r,o){var s,l=(a=a||Tp).labelFetcher,u=a.labelDataIndex,h=a.labelDimIndex,c=i.getShallow("show"),d=n.getShallow("show");(c||d)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=du.isFunction(a.defaultText)?a.defaultText(u,a):a.defaultText));var f=c?s:null,p=d?du.retrieve2(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==f&&null==p||(re(t,i,r,a),re(e,n,o,a,!0)),t.text=f,e.text=p},setTextStyle:re,setText:function(t,e,i){var n,a={isRectText:!0};!1===i?n=!0:a.autoColor=i,oe(t,e,a,n),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:function(t,e){var i=e||e.getModel("textStyle");return du.trim([t.fontStyle||i&&i.getShallow("fontStyle")||"",t.fontWeight||i&&i.getShallow("fontWeight")||"",(t.fontSize||i&&i.getShallow("fontSize")||12)+"px",t.fontFamily||i&&i.getShallow("fontFamily")||"sans-serif"].join(" "))},updateProps:ce,initProps:function(t,e,i,n,a){he(!1,t,e,i,n,a)},getTransform:function(t,e){for(var i=Mu.identity([]);t&&t!==e;)Mu.mul(i,t.getLocalTransform(),i),t=t.parent;return i},applyTransform:de,transformDirection:function(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),a=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),r=["left"===t?-n:"right"===t?n:0,"top"===t?-a:"bottom"===t?a:0];return r=de(r,e,i),Math.abs(r[0])>Math.abs(r[1])?r[0]>0?"right":"left":r[1]>0?"bottom":"top"},groupTransition:function(t,e,i,n){function a(t){var e={position:pu.clone(t.position),rotation:t.rotation};return t.shape&&(e.shape=du.extend({},t.shape)),e}if(t&&e){var r=function(e){var i={};return t.traverse(function(t){!t.isGroup&&t.anid&&(i[t.anid]=t)}),i}();e.traverse(function(t){if(!t.isGroup&&t.anid){var e=r[t.anid];if(e){var n=a(t);t.attr(a(e)),ce(t,n,i,t.dataIndex)}}})}},clipPointsByRect:function(t,e){return du.map(t,function(t){var i=t[0];i=Ip(i,e.x),i=Ap(i,e.x+e.width);var n=t[1];return n=Ip(n,e.y),n=Ap(n,e.y+e.height),[i,n]})},clipRectByRect:function(t,e){var i=Ip(t.x,e.x),n=Ap(t.x+t.width,e.x+e.width),a=Ip(t.y,e.y),r=Ap(t.y+t.height,e.y+e.height);if(n>=i&&r>=a)return{x:i,y:a,width:n-i,height:r-a}},createIcon:function(t,e,i){var n=(e=du.extend({rectHover:!0},e)).style={strokeNoScale:!0};if(i=i||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(n.image=t.slice(8),du.defaults(n,i),new sc(e)):Yt(t.replace("path://",""),e,i,"center")}},Cp=["textStyle","color"],Lp={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Cp):null)},getFont:function(){return Dp.getFont({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return jh.getBoundingRect(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},Pp=Xc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),kp={getItemStyle:function(t,e){var i=Pp(this,t,e),n=this.getBorderLineDash();return n&&(i.lineDash=n),i},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Op=Wc.makeInner,Rp=Yc.enableClassExtend,Np=Yc.enableClassCheck,Ep=du.mixin,zp=Op();fe.prototype={constructor:fe,init:null,mergeOption:function(t){du.merge(this.option,t,!0)},get:function(t,e){return null==t?this.option:pe(this.option,this.parsePath(t),!e&&ge(this,t))},getShallow:function(t,e){var i=this.option,n=null==i?i:i[t],a=!e&&ge(this,t);return null==n&&a&&(n=a.getShallow(t)),n},getModel:function(t,e){var i,n=null==t?this.option:pe(this.option,t=this.parsePath(t));return e=e||(i=ge(this,t))&&i.getModel(t),new fe(n,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(du.clone(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){zp(this).getParent=t},isAnimationEnabled:function(){if(!Jl.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Rp(fe),Np(fe),Ep(fe,$c),Ep(fe,Jc),Ep(fe,Lp),Ep(fe,kp);var Vp=fe,Bp=Yc.parseClassType,Gp=0,Hp={getUID:function(t){return[t||"",Gp++,Math.random().toFixed(5)].join("_")},enableSubTypeDefaulter:function(t){var e={};return t.registerSubTypeDefaulter=function(t,i){t=Bp(t),e[t.main]=i},t.determineSubType=function(i,n){var a=n.type;if(!a){var r=Bp(i).main;t.hasSubTypes(i)&&e[r]&&(a=e[r](n))}return a},t},enableTopologicalTravel:function(t,e){function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}t.topologicalTravel=function(t,n,a,r){function o(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}if(t.length){var s=function(t){var n={},a=[];return du.each(t,function(r){var o=i(n,r),s=function(t,e){var i=[];return du.each(t,function(t){du.indexOf(e,t)>=0&&i.push(t)}),i}(o.originalDeps=e(r),t);o.entryCount=s.length,0===o.entryCount&&a.push(r),du.each(s,function(t){du.indexOf(o.predecessor,t)<0&&o.predecessor.push(t);var e=i(n,t);du.indexOf(e.successor,t)<0&&e.successor.push(r)})}),{graph:n,noEntryList:a}}(n),l=s.graph,u=s.noEntryList,h={};for(du.each(t,function(t){h[t]=!0});u.length;){var c=u.pop(),d=l[c],f=!!h[c];f&&(a.call(r,c,d.originalDeps.slice()),delete h[c]),du.each(d.successor,f?function(t){h[t]=!0,o(t)}:o)}du.each(h,function(){throw new Error("Circle dependency may exists")})}}}},Fp=1e-4,Wp=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Up={linearMap:function(t,e,i,n){var a=e[1]-e[0],r=i[1]-i[0];if(0===a)return 0===r?i[0]:(i[0]+i[1])/2;if(n)if(a>0){if(t<=e[0])return i[0];if(t>=e[1])return i[1]}else{if(t>=e[0])return i[0];if(t<=e[1])return i[1]}else{if(t===e[0])return i[0];if(t===e[1])return i[1]}return(t-e[0])/a*r+i[0]},parsePercent:function(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?t.replace(/^\s+/,"").replace(/\s+$/,"").match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t},round:function(t,e,i){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),i?t:+t},asc:function(t){return t.sort(function(t,e){return t-e}),t},getPrecision:function(t){if(t=+t,isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i},getPrecisionSafe:function(t){var e=t.toString(),i=e.indexOf("e");if(i>0){var n=+e.slice(i+1);return n<0?-n:0}var a=e.indexOf(".");return a<0?0:e.length-1-a},getPixelPrecision:function(t,e){var i=Math.log,n=Math.LN10,a=Math.floor(i(t[1]-t[0])/n),r=Math.round(i(Math.abs(e[1]-e[0]))/n),o=Math.min(Math.max(-a+r,0),20);return isFinite(o)?o:20},getPercentWithPrecision:function(t,e,i){if(!t[e])return 0;var n=du.reduce(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===n)return 0;for(var a=Math.pow(10,i),r=du.map(t,function(t){return(isNaN(t)?0:t)/n*a*100}),o=100*a,s=du.map(r,function(t){return Math.floor(t)}),l=du.reduce(s,function(t,e){return t+e},0),u=du.map(r,function(t,e){return t-s[e]});l<o;){for(var h=Number.NEGATIVE_INFINITY,c=null,d=0,f=u.length;d<f;++d)u[d]>h&&(h=u[d],c=d);++s[c],u[c]=0,++l}return s[e]/a},MAX_SAFE_INTEGER:9007199254740991,remRadian:function(t){var e=2*Math.PI;return(t%e+e)%e},isRadianAroundZero:function(t){return t>-Fp&&t<Fp},parseDate:function(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Wp.exec(t);if(!e)return new Date(NaN);if(e[8]){var i=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(i-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,i,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))},quantity:function(t){return Math.pow(10,me(t))},nice:function(t,e){var i,n=me(t),a=Math.pow(10,n),r=t/a;return i=e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10,t=i*a,n>=-20?+t.toFixed(n<0?-n:0):t},reformIntervals:function(t){function e(t,i,n){return t.interval[n]<i.interval[n]||t.interval[n]===i.interval[n]&&(t.close[n]-i.close[n]==(n?-1:1)||!n&&e(t,i,1))}t.sort(function(t,i){return e(t,i,0)?-1:1});for(var i=-1/0,n=1,a=0;a<t.length;){for(var r=t[a].interval,o=t[a].close,s=0;s<2;s++)r[s]<=i&&(r[s]=i,o[s]=s?1:1-n),i=r[s],n=o[s];r[0]===r[1]&&o[0]*o[1]!=1?t.splice(a,1):a++}return t},isNumeric:function(t){return t-parseFloat(t)>=0}},Zp=/([&<>"'])/g,jp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yp=["a","b","c","d","e","f","g"],Xp=function(t,e){return"{"+t+(null==e?"":e)+"}"},qp={addCommas:function(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")},toCamelCase:function(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t},normalizeCssArray:du.normalizeCssArray,encodeHTML:ve,formatTpl:function(t,e,i){du.isArray(e)||(e=[e]);var n=e.length;if(!n)return"";for(var a=e[0].$vars||[],r=0;r<a.length;r++){var o=Yp[r];t=t.replace(Xp(o),Xp(o,0))}for(var s=0;s<n;s++)for(var l=0;l<a.length;l++){var u=e[s][a[l]];t=t.replace(Xp(Yp[l],s),i?ve(u):u)}return t},formatTplSimple:function(t,e,i){return du.each(e,function(e,n){t=t.replace("{"+n+"}",i?ve(e):e)}),t},getTooltipMarker:function(t,e){var i=(t=du.isString(t)?{color:t,extraCssText:e}:t||{}).color,n=t.type,e=t.extraCssText;return i?"subItem"===n?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+ve(i)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ve(i)+";"+(e||"")+'"></span>':""},formatTime:function(t,e,i){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var n=Up.parseDate(e),a=i?"UTC":"",r=n["get"+a+"FullYear"](),o=n["get"+a+"Month"]()+1,s=n["get"+a+"Date"](),l=n["get"+a+"Hours"](),u=n["get"+a+"Minutes"](),h=n["get"+a+"Seconds"](),c=n["get"+a+"Milliseconds"]();return t=t.replace("MM",ye(o,2)).replace("M",o).replace("yyyy",r).replace("yy",r%100).replace("dd",ye(s,2)).replace("d",s).replace("hh",ye(l,2)).replace("h",l).replace("mm",ye(u,2)).replace("m",u).replace("ss",ye(h,2)).replace("s",h).replace("SSS",ye(c,3))},capitalFirst:function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t},truncateText:jh.truncateText,getTextRect:jh.getBoundingRect},$p=Up.parsePercent,Kp=du.each,Jp=["left","right","top","bottom","width","height"],Qp=[["width","left","right"],["height","top","bottom"]],tg=xe,eg=du.curry(xe,"vertical"),ig=du.curry(xe,"horizontal"),ng={LOCATION_PARAMS:Jp,HV_NAMES:Qp,box:tg,vbox:eg,hbox:ig,getAvailableSize:function(t,e,i){var n=e.width,a=e.height,r=$p(t.x,n),o=$p(t.y,a),s=$p(t.x2,n),l=$p(t.y2,a);return(isNaN(r)||isNaN(parseFloat(t.x)))&&(r=0),(isNaN(s)||isNaN(parseFloat(t.x2)))&&(s=n),(isNaN(o)||isNaN(parseFloat(t.y)))&&(o=0),(isNaN(l)||isNaN(parseFloat(t.y2)))&&(l=a),i=qp.normalizeCssArray(i||0),{width:Math.max(s-r-i[1]-i[3],0),height:Math.max(l-o-i[0]-i[2],0)}},getLayoutRect:_e,positionElement:function(t,e,i,n,a){var r=!a||!a.hv||a.hv[0],o=!a||!a.hv||a.hv[1],s=a&&a.boundingMode||"all";if(r||o){var l;if("raw"===s)l="group"===t.type?new ch(0,0,+e.width||0,+e.height||0):t.getBoundingRect();else if(l=t.getBoundingRect(),t.needLocalTransform()){var u=t.getLocalTransform();(l=l.clone()).applyTransform(u)}e=_e(du.defaults({width:l.width,height:l.height},e),i,n);var h=t.position,c=r?e.x-l.x:0,d=o?e.y-l.y:0;t.attr("position","raw"===s?[c,d]:[h[0]+c,h[1]+d])}},sizeCalculable:function(t,e){return null!=t[Qp[e][0]]||null!=t[Qp[e][1]]&&null!=t[Qp[e][2]]},mergeLayoutParam:function(t,e,i){function n(i,n){var o={},l=0,u={},h=0;if(Kp(i,function(e){u[e]=t[e]}),Kp(i,function(t){a(e,t)&&(o[t]=u[t]=e[t]),r(o,t)&&l++,r(u,t)&&h++}),s[n])return r(e,i[1])?u[i[2]]=null:r(e,i[2])&&(u[i[1]]=null),u;if(2!==h&&l){if(l>=2)return o;for(var c=0;c<i.length;c++){var d=i[c];if(!a(o,d)&&a(t,d)){o[d]=t[d];break}}return o}return u}function a(t,e){return t.hasOwnProperty(e)}function r(t,e){return null!=t[e]&&"auto"!==t[e]}function o(t,e,i){Kp(t,function(t){e[t]=i[t]})}!du.isObject(i)&&(i={});var s=i.ignoreSize;!du.isArray(s)&&(s=[s,s]);var l=n(Qp[0],0),u=n(Qp[1],1);o(Qp[0],t,l),o(Qp[1],t,u)},getLayoutParams:function(t){return be({},t)},copyLayoutParams:be},ag={getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}},rg=Yc.enableClassManagement,og=Yc.parseClassType,sg=(0,Wc.makeInner)(),lg=Vp.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,i,n){Vp.call(this,t,e,i,n),this.uid=Hp.getUID("ec_cpt_model")},init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,n=i?ng.getLayoutParams(t):{},a=e.getTheme();du.merge(t,a.get(this.mainType)),du.merge(t,this.getDefaultOption()),i&&ng.mergeLayoutParam(t,n,i)},mergeOption:function(t,e){du.merge(this.option,t,!0);var i=this.layoutMode;i&&ng.mergeLayoutParam(this.option,t,i)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=sg(this);if(!t.defaultOption){for(var e=[],i=this.constructor;i;){var n=i.prototype.defaultOption;n&&e.push(n),i=i.superClass}for(var a={},r=e.length-1;r>=0;r--)a=du.merge(a,e[r],!0);t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});rg(lg,{registerWhenExtend:!0}),Hp.enableSubTypeDefaulter(lg),Hp.enableTopologicalTravel(lg,function(t){var e=[];return du.each(lg.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=du.map(e,function(t){return og(t).main}),"dataset"!==t&&du.indexOf(e,"dataset")<=0&&e.unshift("dataset"),e}),du.mixin(lg,ag);var ug=lg,hg="";"undefined"!=typeof navigator&&(hg=navigator.platform||"");var cg={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:hg.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},dg=Wc.makeInner,fg=Wc.normalizeToArray,pg=dg(),gg={clearColorPalette:function(){pg(this).colorIdx=0,pg(this).colorNameMap={}},getColorFromPalette:function(t,e,i){var n=pg(e=e||this),a=n.colorIdx||0,r=n.colorNameMap=n.colorNameMap||{};if(r.hasOwnProperty(t))return r[t];var o=fg(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=i&&s?function(t,e){for(var i=t.length,n=0;n<i;n++)if(t[n].length>e)return t[n];return t[i-1]}(s,i):o;if((l=l||o)&&l.length){var u=l[a];return t&&(r[t]=u),n.colorIdx=(a+1)%l.length,u}}},mg=du.createHashMap,vg=(du.retrieve,du.each),yg={cartesian2d:function(t,e,i,n){var a=t.getReferringComponents("xAxis")[0],r=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],i.set("x",a),i.set("y",r),we(a)&&(n.set("x",a),e.firstCategoryDimIndex=0),we(r)&&(n.set("y",r),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,i,n){var a=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],i.set("single",a),we(a)&&(n.set("single",a),e.firstCategoryDimIndex=0)},polar:function(t,e,i,n){var a=t.getReferringComponents("polar")[0],r=a.findAxisModel("radiusAxis"),o=a.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],i.set("radius",r),i.set("angle",o),we(r)&&(n.set("radius",r),e.firstCategoryDimIndex=0),we(o)&&(n.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,i,n){e.coordSysDims=["lng","lat"]},parallel:function(t,e,i,n){var a=t.ecModel,r=a.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=r.dimensions.slice();vg(r.parallelAxisIndex,function(t,r){var s=a.getComponent("parallelAxis",t),l=o[r];i.set(l,s),we(s)&&null==e.firstCategoryDimIndex&&(n.set(l,s),e.firstCategoryDimIndex=r)})}},xg={getCoordSysDefineBySeries:function(t){var e=t.get("coordinateSystem"),i={coordSysName:e,coordSysDims:[],axisMap:mg(),categoryAxisMap:mg()},n=yg[e];if(n)return n(t,i,i.axisMap,i.categoryAxisMap),i}},_g={SOURCE_FORMAT_ORIGINAL:"original",SOURCE_FORMAT_ARRAY_ROWS:"arrayRows",SOURCE_FORMAT_OBJECT_ROWS:"objectRows",SOURCE_FORMAT_KEYED_COLUMNS:"keyedColumns",SOURCE_FORMAT_UNKNOWN:"unknown",SOURCE_FORMAT_TYPED_ARRAY:"typedArray",SERIES_LAYOUT_BY_COLUMN:"column",SERIES_LAYOUT_BY_ROW:"row"},bg=du.createHashMap,wg=du.isTypedArray,Sg=Yc.enableClassCheck,Mg=_g.SOURCE_FORMAT_ORIGINAL,Ig=_g.SERIES_LAYOUT_BY_COLUMN,Ag=_g.SOURCE_FORMAT_UNKNOWN,Tg=_g.SOURCE_FORMAT_TYPED_ARRAY,Dg=_g.SOURCE_FORMAT_KEYED_COLUMNS;Se.seriesDataToSource=function(t){return new Se({data:t,sourceFormat:wg(t)?Tg:Mg,fromDataset:!1})},Sg(Se);var Cg=Se,Lg=Wc.makeInner,Pg=Wc.getDataItemValue,kg=xg.getCoordSysDefineBySeries,Og=du.createHashMap,Rg=du.each,Ng=du.map,Eg=du.isArray,zg=du.isString,Vg=du.isObject,Bg=du.isTypedArray,Gg=du.isArrayLike,Hg=du.extend,Fg=(du.assert,_g.SOURCE_FORMAT_ORIGINAL),Wg=_g.SOURCE_FORMAT_ARRAY_ROWS,Ug=_g.SOURCE_FORMAT_OBJECT_ROWS,Zg=_g.SOURCE_FORMAT_KEYED_COLUMNS,jg=_g.SOURCE_FORMAT_UNKNOWN,Yg=_g.SOURCE_FORMAT_TYPED_ARRAY,Xg=_g.SERIES_LAYOUT_BY_ROW,qg=Lg(),$g={detectSourceFormat:function(t){var e=t.option.source,i=jg;if(Bg(e))i=Yg;else if(Eg(e))for(var n=0,a=e.length;n<a;n++){var r=e[n];if(null!=r){if(Eg(r)){i=Wg;break}if(Vg(r)){i=Ug;break}}}else if(Vg(e)){for(var o in e)if(e.hasOwnProperty(o)&&Gg(e[o])){i=Zg;break}}else if(null!=e)throw new Error("Invalid data");qg(t).sourceFormat=i},getSource:function(t){return qg(t).source},resetSourceDefaulter:function(t){qg(t).datasetMap=Og()},prepareSource:function(t){var e=t.option,i=e.data,n=Bg(i)?Yg:Fg,a=!1,r=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=function(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t);if(l){var u=l.option;i=u.source,n=qg(l).sourceFormat,a=!0,r=r||u.seriesLayoutBy,null==o&&(o=u.sourceHeader),s=s||u.dimensions}var h=function(t,e,i,n,a){if(!t)return{dimensionsDefine:Me(a)};var r,o,s;if(e===Wg)"auto"===n||null==n?Ie(function(t){null!=t&&"-"!==t&&(zg(t)?null==o&&(o=1):o=0)},i,t,10):o=n?1:0,a||1!==o||(a=[],Ie(function(t,e){a[e]=null!=t?t:""},i,t)),r=a?a.length:i===Xg?t.length:t[0]?t[0].length:null;else if(e===Ug)a||(a=function(t){for(var e,i=0;i<t.length&&!(e=t[i++]););if(e){var n=[];return Rg(e,function(t,e){n.push(e)}),n}}(t),s=!0);else if(e===Zg)a||(a=[],s=!0,Rg(t,function(t,e){a.push(e)}));else if(e===Fg){var l=Pg(t[0]);r=Eg(l)&&l.length||1}var u;return s&&Rg(a,function(t,e){"name"===(Vg(t)?t.name:t)&&(u=e)}),{startIndex:o,dimensionsDefine:Me(a),dimensionsDetectCount:r,potentialNameDimIndex:u}}(i,n,r,o,s),c=e.encode;!c&&l&&(c=function(t,e,i,n,a,r){var o=kg(t),s={},l=[],u=[],h=t.subType,c=Og(["pie","map","funnel"]),d=Og(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=d.get(h)){var f=t.ecModel,p=qg(f).datasetMap,g=e.uid+"_"+a,m=p.get(g)||p.set(g,{categoryWayDim:1,valueWayDim:0});Rg(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(o.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=c.get(h)){for(var v,y=0;y<5&&null==v;y++)Ae(i,n,a,r.dimensionsDefine,r.startIndex,y)||(v=y);if(null!=v){s.value=v;var x=r.potentialNameDimIndex||Math.max(v-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}(t,l,i,n,r,h)),qg(t).source=new Cg({data:i,fromDataset:a,seriesLayoutBy:r,sourceFormat:n,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c})},guessOrdinal:function(t,e){return Ae(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}},Kg=du.each,Jg=du.filter,Qg=du.map,tm=du.isArray,em=du.indexOf,im=du.isObject,nm=du.isString,am=du.createHashMap,rm=du.assert,om=du.clone,sm=du.merge,lm=du.extend,um=du.mixin,hm=$g.resetSourceDefaulter,cm="\0_ec_inner",dm=Vp.extend({init:function(t,e,i,n){i=i||{},this.option=null,this._theme=new Vp(i),this._optionManager=n},setOption:function(t,e){rm(!(cm in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,i=this._optionManager;if(!t||"recreate"===t){var n=i.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(n)):function(t){t=t,this.option={},this.option[cm]=1,this._componentsMap=am({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,e){var i=t.color&&!t.colorLayer;Kg(e,function(e,n){"colorLayer"===n&&i||ug.hasClass(n)||("object"==typeof e?t[n]=t[n]?sm(t[n],e,!1):om(e):null==t[n]&&(t[n]=e))})}(t,this._theme.option),sm(t,cg,!1),this.mergeOption(t)}.call(this,n),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var a=i.getTimelineOption(this);a&&(this.mergeOption(a),e=!0)}if(!t||"recreate"===t||"media"===t){var r=i.getMediaOption(this,this._api);r.length&&Kg(r,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,i=this._componentsMap,n=[];hm(this),Kg(t,function(t,i){null!=t&&(ug.hasClass(i)?i&&n.push(i):e[i]=null==e[i]?om(t):sm(e[i],t,!0))}),ug.topologicalTravel(n,ug.getAllClassMainTypes(),function(n,a){var r=Wc.normalizeToArray(t[n]),o=Wc.mappingToExists(i.get(n),r);Wc.makeIdAndName(o),Kg(o,function(t,e){var i=t.option;im(i)&&(t.keyInfo.mainType=n,t.keyInfo.subType=function(t,e,i){return e.type?e.type:i?i.subType:ug.determineSubType(t,e)}(n,i,t.exist))});var s=function(t,e){tm(e)||(e=e?[e]:[]);var i={};return Kg(e,function(e){i[e]=(t.get(e)||[]).slice()}),i}(i,a);e[n]=[],i.set(n,[]),Kg(o,function(t,a){var r=t.exist,o=t.option;if(rm(im(o)||r,"Empty component definition"),o){var l=ug.getClass(n,t.keyInfo.subType,!0);if(r&&r instanceof l)r.name=t.keyInfo.name,r.mergeOption(o,this),r.optionUpdated(o,!1);else{var u=lm({dependentModels:s,componentIndex:a},t.keyInfo);r=new l(o,this,this,u),lm(r,u),r.init(o,this,this,u),r.optionUpdated(null,!0)}}else r.mergeOption({},this),r.optionUpdated({},!1);i.get(n)[a]=r,e[n][a]=r.option},this),"series"===n&&Te(this,i.get("series"))},this),this._seriesIndicesMap=am(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=om(this.option);return Kg(t,function(e,i){if(ug.hasClass(i)){for(var n=(e=Wc.normalizeToArray(e)).length-1;n>=0;n--)Wc.isIdInner(e[n])&&e.splice(n,1);t[i]=e}}),delete t[cm],t},getTheme:function(){return this._theme},getComponent:function(t,e){var i=this._componentsMap.get(t);if(i)return i[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,a=t.name,r=this._componentsMap.get(e);if(!r||!r.length)return[];var o;if(null!=i)tm(i)||(i=[i]),o=Jg(Qg(i,function(t){return r[t]}),function(t){return!!t});else if(null!=n){var s=tm(n);o=Jg(r,function(t){return s&&em(n,t.id)>=0||!s&&t.id===n})}else if(null!=a){var l=tm(a);o=Jg(r,function(t){return l&&em(a,t.name)>=0||!l&&t.name===a})}else o=r.slice();return De(o,t)},findComponents:function(t){var e=t.query,i=t.mainType,n=function(t){var e=i+"Index",n=i+"Id",a=i+"Name";return!t||null==t[e]&&null==t[n]&&null==t[a]?null:{mainType:i,index:t[e],id:t[n],name:t[a]}}(e);return function(e){return t.filter?Jg(e,t.filter):e}(De(n?this.queryComponents(n):this._componentsMap.get(i),t))},eachComponent:function(t,e,i){var n=this._componentsMap;if("function"==typeof t)i=e,e=t,n.each(function(t,n){Kg(t,function(t,a){e.call(i,n,t,a)})});else if(nm(t))Kg(n.get(t),e,i);else if(im(t)){var a=this.findComponents(t);Kg(a,e,i)}},getSeriesByName:function(t){var e=this._componentsMap.get("series");return Jg(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series");return Jg(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){Ce(),Kg(this._seriesIndices,function(i){var n=this._componentsMap.get("series")[i];t.call(e,n,i)},this)},eachRawSeries:function(t,e){Kg(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,i){Ce(),Kg(this._seriesIndices,function(n){var a=this._componentsMap.get("series")[n];a.subType===t&&e.call(i,a,n)},this)},eachRawSeriesByType:function(t,e,i){return Kg(this.getSeriesByType(t),e,i)},isSeriesFiltered:function(t){return Ce(),null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Ce();Te(this,Jg(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Te(this,e.get("series"));var i=[];e.each(function(t,e){i.push(e)}),ug.topologicalTravel(i,ug.getAllClassMainTypes(),function(i,n){Kg(e.get(i),function(e){("series"!==i||!function(t,e){if(e){var i=e.seiresIndex,n=e.seriesId,a=e.seriesName;return null!=i&&t.componentIndex!==i||null!=n&&t.id!==n||null!=a&&t.name!==a}}(e,t))&&e.restoreData()})})}});um(dm,gg);var fm=dm,pm=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],gm=function(t){du.each(pm,function(e){this[e]=du.bind(t[e],t)},this)},mm={};Le.prototype={constructor:Le,create:function(t,e){var i=[];du.each(mm,function(n,a){var r=n.create(t,e);i=i.concat(r||[])}),this._coordinateSystems=i},update:function(t,e){du.each(this._coordinateSystems,function(i){i.update&&i.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Le.register=function(t,e){mm[t]=e},Le.get=function(t){return mm[t]};var vm=Le,ym=du.each,xm=du.clone,_m=du.map,bm=du.merge,wm=/^(min|max)?(.+)$/;Pe.prototype={constructor:Pe,setOption:function(t,e){t&&du.each(Wc.normalizeToArray(t.series),function(t){t&&t.data&&du.isTypedArray(t.data)&&du.setAsPrimitive(t.data)}),t=xm(t,!0);var i=this._optionBackup,n=function(t,e,i){var n,a,r=[],o=[],s=t.timeline;if(t.baseOption&&(a=t.baseOption),(s||t.options)&&(a=a||{},r=(t.options||[]).slice()),t.media){a=a||{};var l=t.media;ym(l,function(t){t&&t.option&&(t.query?o.push(t):n||(n=t))})}return a||(a=t),a.timeline||(a.timeline=s),ym([a].concat(r).concat(du.map(o,function(t){return t.option})),function(t){ym(e,function(e){e(t,i)})}),{baseOption:a,timelineOptions:r,mediaDefault:n,mediaList:o}}.call(this,t,e,!i);this._newBaseOption=n.baseOption,i?(!function(t,e){ym(e=e||{},function(e,i){if(null!=e){var n=t[i];if(ug.hasClass(i)){e=Wc.normalizeToArray(e),n=Wc.normalizeToArray(n);var a=Wc.mappingToExists(n,e);t[i]=_m(a,function(t){return t.option&&t.exist?bm(t.exist,t.option,!0):t.exist||t.option})}else t[i]=bm(n,e,!0)}})}(i.baseOption,n.baseOption),n.timelineOptions.length&&(i.timelineOptions=n.timelineOptions),n.mediaList.length&&(i.mediaList=n.mediaList),n.mediaDefault&&(i.mediaDefault=n.mediaDefault)):this._optionBackup=n},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=_m(e.timelineOptions,xm),this._mediaList=_m(e.mediaList,xm),this._mediaDefault=xm(e.mediaDefault),this._currentMediaIndices=[],xm(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,i=this._timelineOptions;if(i.length){var n=t.getComponent("timeline");n&&(e=xm(i[n.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),i=this._api.getHeight(),n=this._mediaList,a=this._mediaDefault,r=[],o=[];if(!n.length&&!a)return o;for(var s=0,l=n.length;s<l;s++)(function(t,e,i){var n={width:e,height:i,aspectratio:e/i},a=!0;return du.each(t,function(t,e){var i=e.match(wm);if(i&&i[1]&&i[2]){var r=i[1],o=i[2].toLowerCase();(function(t,e,i){return"min"===i?t>=e:"max"===i?t<=e:t===e})(n[o],t,r)||(a=!1)}}),a})(n[s].query,e,i)&&r.push(s);return!r.length&&a&&(r=[-1]),r.length&&!function(t,e){return t.join(",")===e.join(",")}(r,this._currentMediaIndices)&&(o=_m(r,function(t){return xm(-1===t?a.option:n[t].option)})),this._currentMediaIndices=r,o}};var Sm=Pe,Mm=du.each,Im=du.isObject,Am=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Tm=function(t,e){Mm(ze(t.series),function(t){Im(t)&&function(t){if(Im(t)){ke(t),Re(t),Ne(t,"label"),Ne(t,"upperLabel"),Ne(t,"edgeLabel"),t.emphasis&&(Ne(t.emphasis,"label"),Ne(t.emphasis,"upperLabel"),Ne(t.emphasis,"edgeLabel")),(a=t.markPoint)&&(ke(a),Ee(a)),(s=t.markLine)&&(ke(s),Ee(s));var e=t.markArea;e&&Ee(e);var i=t.data;if("graph"===t.type){i=i||t.nodes;var n=t.links||t.edges;if(n&&!du.isTypedArray(n))for(o=0;o<n.length;o++)Ee(n[o]);du.each(t.categories,function(t){Re(t)})}if(i&&!du.isTypedArray(i))for(o=0;o<i.length;o++)Ee(i[o]);var a;if((a=t.markPoint)&&a.data)for(var r=a.data,o=0;o<r.length;o++)Ee(r[o]);var s;if((s=t.markLine)&&s.data)for(var l=s.data,o=0;o<l.length;o++)du.isArray(l[o])?(Ee(l[o][0]),Ee(l[o][1])):Ee(l[o]);"gauge"===t.type?(Ne(t,"axisLabel"),Ne(t,"title"),Ne(t,"detail")):"treemap"===t.type?(Oe(t.breadcrumb,"itemStyle"),du.each(t.levels,function(t){Re(t)})):"tree"===t.type&&Re(t.leaves)}}(t)});var i=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&i.push("valueAxis","categoryAxis","logAxis","timeAxis"),Mm(i,function(e){Mm(ze(t[e]),function(t){t&&(Ne(t,"axisLabel"),Ne(t.axisPointer,"label"))})}),Mm(ze(t.parallel),function(t){var e=t&&t.parallelAxisDefault;Ne(e,"axisLabel"),Ne(e&&e.axisPointer,"label")}),Mm(ze(t.calendar),function(t){Oe(t,"itemStyle"),Ne(t,"dayLabel"),Ne(t,"monthLabel"),Ne(t,"yearLabel")}),Mm(ze(t.radar),function(t){Ne(t,"name")}),Mm(ze(t.geo),function(t){Im(t)&&(Ee(t),Mm(ze(t.regions),function(t){Ee(t)}))}),Mm(ze(t.timeline),function(t){Ee(t),Oe(t,"label"),Oe(t,"itemStyle"),Oe(t,"controlStyle",!0);var e=t.data;du.isArray(e)&&du.each(e,function(t){du.isObject(t)&&(Oe(t,"label"),Oe(t,"itemStyle"))})}),Mm(ze(t.toolbox),function(t){Oe(t,"iconStyle"),Mm(t.feature,function(t){Oe(t,"iconStyle")})}),Ne(Ve(t.axisPointer),"label"),Ne(Ve(t.tooltip).axisPointer,"label")},Dm=du.each,Cm=du.isArray,Lm=du.isObject,Pm=Wc.normalizeToArray,km=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Om=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],Rm=function(t,e){Tm(t,e),t.series=Pm(t.series),Dm(t.series,function(t){if(Lm(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var i=function(t,e){e=e.split(",");for(var i=t,n=0;n<e.length&&null!=(i=i&&i[e[n]]);n++);return i}(t,"pointer.color");null!=i&&function(t,e,i,n){e=e.split(",");for(var a,r=t,o=0;o<e.length-1;o++)null==r[a=e[o]]&&(r[a]={}),r=r[a];(n||null==r[e[o]])&&(r[e[o]]=i)}(t,"itemStyle.normal.color",i)}Be(t)}}),t.dataRange&&(t.visualMap=t.dataRange),Dm(Om,function(e){var i=t[e];i&&(Cm(i)||(i=[i]),Dm(i,function(t){Be(t)}))})},Nm=du.createHashMap,Em=du.each,zm=function(t){var e=Nm();t.eachSeries(function(t){var i=t.get("stack");if(i){var n=e.get(i)||e.set(i,[]),a=t.getData(),r={stackResultDimension:a.getCalculationInfo("stackResultDimension"),stackedOverDimension:a.getCalculationInfo("stackedOverDimension"),stackedDimension:a.getCalculationInfo("stackedDimension"),stackedByDimension:a.getCalculationInfo("stackedByDimension"),isStackedByIndex:a.getCalculationInfo("isStackedByIndex"),data:a,seriesModel:t};if(!r.stackedDimension||!r.isStackedByIndex&&!r.stackedByDimension)return;n.length&&a.setCalculationInfo("stackedOnSeries",n[n.length-1].seriesModel),n.push(r)}}),e.each(function(t){Em(t,function(e,i){var n=[],a=[NaN,NaN],r=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(r,function(r,l,u){var h=o.get(e.stackedDimension,u);if(isNaN(h))return a;var c,d;s?d=o.getRawIndex(u):c=o.get(e.stackedByDimension,u);for(var f=NaN,p=i-1;p>=0;p--){var g=t[p];if(s||(d=g.data.rawIndexOf(g.stackedByDimension,c)),d>=0){var m=g.data.getByRawIndex(g.stackResultDimension,d);if(h>=0&&m>0||h<=0&&m<0){h+=m,f=m;break}}}return n[0]=h,n[1]=f,n});o.hostModel.setData(l),e.data=l})})},Vm=(du.isTypedArray,du.extend),Bm=(du.assert,du.each),Gm=du.isObject,Hm=Wc.getDataItemValue,Fm=Wc.isDataItemOption,Wm=Up.parseDate,Um=_g.SOURCE_FORMAT_TYPED_ARRAY,Zm=_g.SOURCE_FORMAT_ARRAY_ROWS,jm=_g.SOURCE_FORMAT_ORIGINAL,Ym=_g.SOURCE_FORMAT_OBJECT_ROWS,Xm=Ge.prototype;Xm.pure=!1,Xm.persistent=!0,Xm.getSource=function(){return this._source};var qm={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:We},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],i=this._data,n=0;n<i.length;n++){var a=i[n];e.push(a?a[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:He,getItem:Fe,appendData:We},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],i=this._source.dimensionsDefine,n=0;n<i.length;n++){var a=this._data[i[n].name];e.push(a?a[t]:null)}return e},appendData:function(t){var e=this._data;Bm(t,function(t,i){for(var n=e[i]||(e[i]=[]),a=0;a<(t||[]).length;a++)n.push(t[a])})}},original:{count:He,getItem:Fe,appendData:We},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var i=this._dimSize*t,n=0;n<this._dimSize;n++)e[n]=this._data[i+n];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},$m={arrayRows:Ue,objectRows:function(t,e,i,n){return null!=i?t[n]:t},keyedColumns:Ue,original:function(t,e,i,n){var a=Hm(t);return null!=i&&a instanceof Array?a[i]:a},typedArray:Ue},Km={DefaultDataProvider:Ge,defaultDimValueGetters:{arrayRows:Ze,objectRows:function(t,e,i,n){return je(t[e],this._dimensionInfos[e])},keyedColumns:Ze,original:function(t,e,i,n){var a=t&&(null==t.value?t:t.value);return!this._rawData.pure&&Fm(t)&&(this.hasItemOption=!0),je(a instanceof Array?a[n]:a,this._dimensionInfos[e])},typedArray:function(t,e,i,n){return t[n]}},retrieveRawValue:function(t,e,i){if(t){var n=t.getRawDataItem(e);if(null!=n){var a,r,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(i);return s&&(a=s.name,r=s.index),$m[o](n,e,r,a)}}},retrieveRawAttr:function(t,e,i){if(t){var n=t.getProvider().getSource().sourceFormat;if(n===jm||n===Ym){var a=t.getRawDataItem(e);return n!==jm||Gm(a)||(a=null),a?a[i]:void 0}}}},Jm=Km.retrieveRawValue,Qm=qp.getTooltipMarker,tv=qp.formatTpl,ev=/\{@(.+?)\}/g,iv={getDataParams:function(t,e){var i=this.getData(e),n=this.getRawValue(t,e),a=i.getRawIndex(t),r=i.getName(t),o=i.getRawDataItem(t),s=i.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:r,dataIndex:a,data:o,dataType:e,value:n,color:s,marker:Qm(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,i,n,a){e=e||"normal";var r=this.getData(i),o=r.getItemModel(t),s=this.getDataParams(t,i);null!=n&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get("normal"===e?[a||"label","formatter"]:[e,a||"label","formatter"]);if("function"==typeof l)return s.status=e,l(s);if("string"==typeof l){return tv(l,s).replace(ev,function(e,i){var n=i.length;return"["===i.charAt(0)&&"]"===i.charAt(n-1)&&(i=+i.slice(1,n-1)),Jm(r,t,i)})}},getRawValue:function(t,e){return Jm(this.getData(e),t)},formatTooltip:function(){}},nv=(du.assert,du.isArray),av=Ye.prototype;av.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var i=this._upstream,n=t&&t.skip;if(this._dirty&&i){var a=this.context;a.data=a.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this);var r;this._plan&&!n&&(r=this._plan(this.context));var o=e(this._modBy),s=this._modDataCount||0,l=e(t&&t.modBy),u=t&&t.modDataCount||0;o===l&&s===u||(r="reset");var h;(this._dirty||"reset"===r)&&(this._dirty=!1,h=function(t,e){t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null;var i,n;!e&&t._reset&&((i=t._reset(t.context))&&i.progress&&(n=i.forceFirstProgress,i=i.progress),nv(i)&&!i.length&&(i=null)),t._progress=i,t._modBy=t._modDataCount=null;var a=t._downstream;return a&&a.dirty(),n}(this,n)),this._modBy=l,this._modDataCount=u;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var d=this._dueIndex,f=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!n&&(h||d<f)){var p=this._progress;if(nv(p))for(var g=0;g<p.length;g++)Xe(this,p[g],d,f,l,u);else Xe(this,p,d,f,l,u)}this._dueIndex=f;var m=null!=this._settedOutputEnd?this._settedOutputEnd:f;this._outputDueEnd=m}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var rv=function(){var t,e,i,n,a,r={reset:function(o,s,l,u){e=o,t=s,i=l,n=u,a=Math.ceil(n/i),r.next=i>1&&n>0?function(){var r=e%a*i+Math.ceil(e/a),o=e>=t?null:r<n?r:e;return e++,o}:function(){return e<t?e++:null}}};return r}();av.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},av.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},av.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},av.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},av.getUpstream=function(){return this._upstream},av.getDownstream=function(){return this._downstream},av.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var ov={createTask:function(t){return new Ye(t)}},sv=qp.formatTime,lv=qp.encodeHTML,uv=qp.addCommas,hv=qp.getTooltipMarker,cv=ng.getLayoutParams,dv=ng.mergeLayoutParam,fv=ov.createTask,pv=$g.prepareSource,gv=$g.getSource,mv=Km.retrieveRawValue,vv=Wc.makeInner(),yv=ug.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,i,n){this.seriesIndex=this.componentIndex,this.dataTask=fv({count:function(t){return t.model.getRawData().count()},reset:function(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),function(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}}}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,i),pv(this);var a=this.getInitialData(t,i);$e(a,this),this.dataTask.context.data=a,vv(this).dataBeforeProcessed=a,qe(this)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,n=i?cv(t):{},a=this.subType;ug.hasClass(a)&&(a+="Series"),du.merge(t,e.getTheme().get(this.subType)),du.merge(t,this.getDefaultOption()),Wc.defaultEmphasis(t,"label",["show"]),this.fillDataTextStyle(t.data),i&&dv(t,n,i)},mergeOption:function(t,e){t=du.merge(this.option,t,!0),this.fillDataTextStyle(t.data);var i=this.layoutMode;i&&dv(this.option,t,i),pv(this);var n=this.getInitialData(t,e);$e(n,this),this.dataTask.dirty(),this.dataTask.context.data=n,vv(this).dataBeforeProcessed=n,qe(this)},fillDataTextStyle:function(t){if(t&&!du.isTypedArray(t))for(var e=["show"],i=0;i<t.length;i++)t[i]&&t[i].label&&Wc.defaultEmphasis(t[i],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Ke(this);if(e){var i=e.context.data;return null==t?i:i.getLinkedData(t)}return vv(this).data},setData:function(t){var e=Ke(this);if(e){var i=e.context;i.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),i.outputData=t,e!==this.dataTask&&(i.data=t)}vv(this).data=t},getSource:function(){return gv(this)},getRawData:function(){return vv(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,i){function n(t){return lv(uv(t))}var a=this.getData(),r=a.mapDimension("defaultedTooltip",!0),o=r.length,s=this.getRawValue(t),l=du.isArray(s),u=a.getItemVisual(t,"color");du.isObject(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var h=o>1||l&&!o?function(i){function n(t,i){var n=a.getDimensionInfo(i);if(n&&!1!==n.otherDims.tooltip){var r=n.type,l=hv({color:u,type:"subItem"}),h=(o?l+lv(n.displayName||"-")+": ":"")+lv("ordinal"===r?t+"":"time"===r?e?"":sv("yyyy/MM/dd hh:mm:ss",t):uv(t));h&&s.push(h)}}var o=du.reduce(i,function(t,e,i){var n=a.getDimensionInfo(i);return t|=n&&!1!==n.tooltip&&null!=n.displayName},0),s=[];return r.length?du.each(r,function(e){n(mv(a,t,e),e)}):du.each(i,n),(o?"<br/>":"")+s.join(o?"<br/>":", ")}(s):n(o?mv(a,t,r[0]):l?s[0]:s),c=hv(u),d=a.getName(t),f=this.name;return Wc.isNameSpecified(this)||(f=""),f=f?lv(f)+(e?": ":"<br/>"):"",e?c+f+h:f+c+(d?lv(d)+": "+h:h)},isAnimationEnabled:function(){if(Jl.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,i){var n=this.ecModel,a=gg.getColorFromPalette.call(this,t,e,i);return a||(a=n.getColorFromPalette(t,e,i)),a},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});du.mixin(yv,iv),du.mixin(yv,gg);var xv=yv,_v=function(){this.group=new fh,this.uid=Hp.getUID("viewComponent")},bv=_v.prototype={constructor:_v,init:function(t,e){},render:function(t,e,i,n){},dispose:function(){}};bv.updateView=bv.updateLayout=bv.updateVisual=function(t,e,i,n){},Yc.enableClassExtend(_v),Yc.enableClassManagement(_v,{registerWhenExtend:!0});var wv=_v,Sv=Wc.makeInner,Mv=function(){var t=Sv();return function(e){var i=t(e),n=e.pipelineContext,a=i.large,r=i.progressiveRender,o=i.large=n.large,s=i.progressiveRender=n.progressiveRender;return!!(a^o||r^s)&&"reset"}},Iv=du.each,Av=ov.createTask,Tv=Wc.makeInner(),Dv=Mv(),Cv=Je.prototype={type:"chart",init:function(t,e){},render:function(t,e,i,n){},highlight:function(t,e,i,n){ti(t.getData(),n,"emphasis")},downplay:function(t,e,i,n){ti(t.getData(),n,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};Cv.updateView=Cv.updateLayout=Cv.updateVisual=function(t,e,i,n){this.render(t,e,i,n)},Yc.enableClassExtend(Je,["dispose"]),Yc.enableClassManagement(Je,{registerWhenExtend:!0}),Je.markUpdateMethod=function(t,e){Tv(t).updateMethod=e};var Lv={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},Pv=Je,kv="\0__throttleOriginMethod",Ov="\0__throttleRate",Rv="\0__throttleType",Nv={throttle:ei,createOrUpdate:function(t,e,i,n){var a=t[e];if(a){var r=a[kv]||a,o=a[Rv];if(a[Ov]!==i||o!==n){if(null==i||!n)return t[e]=r;(a=t[e]=ei(r,i,"debounce"===n))[kv]=r,a[Rv]=n,a[Ov]=i}return a}},clear:function(t,e){var i=t[e];i&&i[kv]&&(t[e]=i[kv])}},Ev={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var i=t.getData(),n=(t.visualColorAccessPath||"itemStyle.color").split("."),a=t.get(n)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(i.setVisual("color",a),!e.isSeriesFiltered(t)){"function"!=typeof a||a instanceof Qf||i.each(function(e){i.setItemVisual(e,"color",a(t.getDataParams(e)))});return{dataEach:i.hasItemOption?function(t,e){var i=t.getItemModel(e).get(n,!0);null!=i&&t.setItemVisual(e,"color",i)}:null}}}},zv={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},Vv=Km.retrieveRawValue,Bv=function(t,e){function i(t,e){if("string"!=typeof t)return t;var i=t;return du.each(e,function(t,e){i=i.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),i}function n(t){var e=a.get(t);if(null==e){for(var i=t.split("."),n=zv.aria,r=0;r<i.length;++r)n=n[i[r]];return n}return e}var a=e.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var r=0;e.eachSeries(function(t,e){++r},this);var o,s=a.get("data.maxCount")||10,l=a.get("series.maxCount")||10,u=Math.min(r,l);if(!(r<1)){var h=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();o=h?i(n("general.withTitle"),{title:h}):n("general.withoutTitle");var c=[];o+=i(n(r>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:r}),e.eachSeries(function(t,e){if(e<u){var a,o=t.get("name"),l="series."+(r>1?"multiple":"single")+".";a=i(a=n(o?l+"withName":l+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return zv.series.typeNames[t]||"自定义图"}(t.subType)});var h=t.getData();window.data=h,h.count()>s?a+=i(n("data.partialData"),{displayCnt:s}):a+=n("data.allData");for(var d=[],f=0;f<h.count();f++)if(f<s){var p=h.getName(f),g=Vv(h,f);d.push(i(n(p?"data.withName":"data.withoutName"),{name:p,value:g}))}a+=d.join(n("data.separator.middle"))+n("data.separator.end"),c.push(a)}}),o+=c.join(n("series.multiple.separator.middle"))+n("series.multiple.separator.end"),t.setAttribute("aria-label",o)}}},Gv=Math.PI,Hv=function(t,e){e=e||{},du.defaults(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var i=new Dp.Rect({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),n=new Dp.Arc({shape:{startAngle:-Gv/2,endAngle:-Gv/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),a=new Dp.Rect({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});n.animateShape(!0).when(1e3,{endAngle:3*Gv/2}).start("circularInOut"),n.animateShape(!0).when(1e3,{startAngle:3*Gv/2}).delay(300).start("circularInOut");var r=new Dp.Group;return r.add(n),r.add(a),r.add(i),r.resize=function(){var e=t.getWidth()/2,r=t.getHeight()/2;n.setShape({cx:e,cy:r});var o=n.shape.r;a.setShape({x:e-o,y:r-o,width:2*o,height:2*o}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},r.resize(),r},Fv=du.each,Wv=du.map,Uv=(du.isArray,du.isFunction),Zv=du.createHashMap,jv=du.noop,Yv=ov.createTask,Xv=Hp.getUID,qv=Wc.normalizeToArray,$v=ii.prototype;$v.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},$v.getPerformArgs=function(t,e){if(t.__pipeline){var i=this._pipelineMap.get(t.__pipeline.id),n=i.context,a=!e&&i.progressiveEnabled&&(!n||n.progressiveRender)&&t.__idxInPipeline>i.blockIndex?i.step:null,r=n&&n.modDataCount;return{step:a,modBy:null!=r?Math.ceil(r/a):null,modDataCount:r}}},$v.getPipeline=function(t){return this._pipelineMap.get(t)},$v.updateStreamModes=function(t,e){var i=this._pipelineMap.get(t.uid),n=t.getData().count(),a=i.progressiveEnabled&&e.incrementalPrepareRender&&n>=i.threshold,r=t.get("large")&&n>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?n:null;t.pipelineContext=i.context={progressiveRender:a,modDataCount:o,large:r}},$v.restorePipelines=function(t){var e=this,i=e._pipelineMap=Zv();t.eachSeries(function(t){var n=t.getProgressive(),a=t.uid;i.set(a,{id:a,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:n&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(n||700),count:0}),ri(e,t,t.dataTask)})},$v.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),i=this.api;Fv(this._allHandlers,function(n){var a=t.get(n.uid)||t.set(n.uid,[]);n.reset&&function(t,e,i,n,a){function r(i){var r=i.uid,s=o.get(r)||o.set(r,Yv({plan:function(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)},reset:function(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=qv(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?Wv(e,function(t,e){return ai(e)}):Jv},count:function(t){return t.data.count()}}));s.context={model:i,ecModel:n,api:a,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ri(t,i,s)}var o=i.seriesTaskMap||(i.seriesTaskMap=Zv()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?n.eachRawSeries(r):s?n.eachRawSeriesByType(s,r):l&&l(n,a).each(r);var u=t._pipelineMap;o.each(function(t,e){u.get(e)||(t.dispose(),o.removeKey(e))})}(this,n,a,e,i),n.overallReset&&function(t,e,i,n,a){function r(e){var i=e.uid,n=s.get(i);n||(n=s.set(i,Yv({reset:function(t,e){return t.overallProgress&&function(){this.agent.dirty(),this.getDownstream().dirty()}},onDirty:function(){this.agent&&this.agent.dirty()}})),o.dirty()),n.context={model:e,overallProgress:h,modifyOutputEnd:c},n.agent=o,n.__block=h,ri(t,e,n)}var o=i.overallTask=i.overallTask||Yv({reset:function(t){t.overallReset(t.ecModel,t.api,t.payload)}});o.context={ecModel:n,api:a,overallReset:e.overallReset,scheduler:t};var s=o.agentStubMap=o.agentStubMap||Zv(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?n.eachRawSeriesByType(l,r):u?u(n,a).each(r):(h=!1,Fv(n.getSeries(),r));var d=t._pipelineMap;s.each(function(t,e){d.get(e)||(t.dispose(),o.dirty(),s.removeKey(e))})}(this,n,a,e,i)},this)},$v.prepareView=function(t,e,i,n){var a=t.renderTask,r=a.context;r.model=e,r.ecModel=i,r.api=n,a.__block=!t.incrementalPrepareRender,ri(this,e,a)},$v.performDataProcessorTasks=function(t,e){ni(this,this._dataProcessorHandlers,t,e,{block:!0})},$v.performVisualTasks=function(t,e,i){ni(this,this._visualHandlers,t,e,i)},$v.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},$v.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var Kv=$v.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},Jv=ai(0);ii.wrapStageHandler=function(t,e){return Uv(t)&&(t={overallReset:t,seriesType:function(t){Qv=null;try{t(ty,ey)}catch(t){}return Qv}(t)}),t.uid=Xv("stageHandler"),e&&(t.visualType=e),t};var Qv,ty={},ey={};oi(ty,fm),oi(ey,gm),ty.eachSeriesByType=ty.eachRawSeriesByType=function(t){Qv=t},ty.eachComponent=function(t){"series"===t.mainType&&t.subType&&(Qv=t.subType)};var iy=ii,ny=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],ay={color:ny,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],ny]},ry=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],oy={color:ry,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:ry[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:ry},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};oy.categoryAxis.splitLine.show=!1;var sy=oy,ly=$g.detectSourceFormat,uy=_g.SERIES_LAYOUT_BY_COLUMN;ug.extend({type:"dataset",defaultOption:{seriesLayoutBy:uy,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){ly(this)}}),wv.extend({type:"dataset"}),li.prototype={constructor:li,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,i={},n=[],a=[];for(ui(t,{},n,"_oldKeyGetter",this),ui(e,i,a,"_newKeyGetter",this),r=0;r<t.length;r++){if(null!=(s=i[o=n[r]])){(u=s.length)?(1===u&&(i[o]=null),s=s.unshift()):i[o]=null,this._update&&this._update(s,r)}else this._remove&&this._remove(r)}for(var r=0;r<a.length;r++){var o=a[r];if(i.hasOwnProperty(o)){var s=i[o];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var hy=li,cy=du.each,dy=du.createHashMap,fy=(du.assert,dy(["tooltip","label","itemName","itemId","seriesName"])),py={OTHER_DIMENSIONS:fy,summarizeDimensions:function(t){var e={},i=e.encode={},n=dy(),a=[],r=[];cy(t.dimensions,function(e){var o=t.getDimensionInfo(e),s=o.coordDim;if(s){var l=i[s];i.hasOwnProperty(s)||(l=i[s]=[]),l[o.coordDimIndex]=e,o.isExtraCoord||(n.set(s,1),function(t){return!("ordinal"===t||"time"===t)}(o.type)&&(a[0]=e)),o.defaultTooltip&&r.push(e)}fy.each(function(t,e){var n=i[e];i.hasOwnProperty(e)||(n=i[e]=[]);var a=o.otherDims[e];null!=a&&!1!==a&&(n[a]=o.name)})});var o=[],s={};n.each(function(t,e){var n=i[e];s[e]=n[0],o=o.concat(n)}),e.dataDimsOnCoord=o,e.encodeFirstDimNotExtra=s;var l=i.label;l&&l.length&&(a=l.slice());var u=i.tooltip;return u&&u.length?r=u.slice():r.length||(r=a.slice()),i.defaultedLabel=a,i.defaultedTooltip=r,e},getDimensionTypeByAxis:function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}},gy=Km.defaultDimValueGetters,my=Km.DefaultDataProvider,vy=py.summarizeDimensions,yy=du.isObject,xy="e\0\0",_y={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},by="undefined"==typeof Uint32Array?Array:Uint32Array,wy="undefined"==typeof Uint16Array?Array:Uint16Array,Sy=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],My=["_extent","_approximateExtent","_rawExtent"],Iy=function(t,e){t=t||["x","y"];for(var i={},n=[],a={},r=0;r<t.length;r++){var o=t[r];du.isString(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},n.push(s),i[s]=o,o.index=r,o.createInvertedIndices&&(a[s]=[])}this.dimensions=n,this._dimensionInfos=i,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=vy(this),this._invertedIndicesMap=a,this._calculationInfo={}},Ay=Iy.prototype;Ay.type="list",Ay.hasItemOption=!0,Ay.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},Ay.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},Ay.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},Ay.mapDimension=function(t,e){var i=this._dimensionsSummary;if(null==e)return i.encodeFirstDimNotExtra[t];var n=i.encode[t];return!0===e?(n||[]).slice():n&&n[e]},Ay.initData=function(t,e,i){(Cg.isInstance(t)||du.isArrayLike(t))&&(t=new my(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},i||(this.hasItemOption=!1),this.defaultDimValueGetter=gy[this._rawData.getSource().sourceFormat],this._dimValueGetter=i=i||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},Ay.getProvider=function(){return this._rawData},Ay.appendData=function(t){var e=this._rawData,i=this.count();e.appendData(t);var n=e.count();e.persistent||(n+=i),this._initDataFromProvider(i,n)},Ay._initDataFromProvider=function(t,e){if(!(t>=e)){for(var i,n=this._chunkSize,a=this._rawData,r=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,d=this._nameRepeatCount={},f=this._chunkCount,p=f-1,g=0;g<s;g++){c[A=o[g]]||(c[A]=[1/0,-1/0]);var m=l[A];0===m.otherDims.itemName&&(i=this._nameDimIdx=g),0===m.otherDims.itemId&&(this._idDimIdx=g);var v=_y[m.type];r[A]||(r[A]=[]);var y=r[A][p];if(y&&y.length<n){for(var x=new v(Math.min(e-p*n,n)),_=0;_<y.length;_++)x[_]=y[_];r[A][p]=x}for(I=f*n;I<e;I+=n)r[A].push(new v(Math.min(e-I,n)));this._chunkCount=r[A].length}for(var b=new Array(s),w=t;w<e;w++){b=a.getItem(w,b);for(var S=Math.floor(w/n),M=w%n,I=0;I<s;I++){var A=o[I],T=r[A][S],D=this._dimValueGetter(b,A,w,I);T[M]=D;var C=c[A];D<C[0]&&(C[0]=D),D>C[1]&&(C[1]=D)}if(!a.pure){var L=u[w];if(b&&null==L)if(null!=b.name)u[w]=L=b.name;else if(null!=i){var P=o[i],k=r[P][S];if(k){L=k[M];var O=l[P].ordinalMeta;O&&O.categories.length&&(L=O.categories[L])}}var R=null==b?null:b.id;null==R&&null!=L&&(d[L]=d[L]||0,R=L,d[L]>0&&(R+="__ec__"+d[L]),d[L]++),null!=R&&(h[w]=R)}}!a.persistent&&a.clean&&a.clean(),this._rawCount=this._count=e,this._extent={},function(t){var e=t._invertedIndicesMap;du.each(e,function(i,n){var a=t._dimensionInfos[n].ordinalMeta;if(a){for(i=e[n]=new by(a.categories.length),r=0;r<i.length;r++)i[r]=NaN;for(var r=0;r<t._count;r++)i[t.get(n,r)]=r}})}(this)}},Ay.count=function(){return this._count},Ay.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,i=this._count;if(e===Array){n=new e(i);for(a=0;a<i;a++)n[a]=t[a]}else n=new e(t.buffer,0,i)}else for(var n=new(e=hi(this))(this.count()),a=0;a<n.length;a++)n[a]=a;return n},Ay.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var i=this._storage;if(!i[t])return NaN;e=this.getRawIndex(e);var n=Math.floor(e/this._chunkSize),a=e%this._chunkSize;return i[t][n][a]},Ay.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var i=this._storage[t];if(!i)return NaN;var n=Math.floor(e/this._chunkSize),a=e%this._chunkSize;return i[n][a]},Ay._getFast=function(t,e){var i=Math.floor(e/this._chunkSize),n=e%this._chunkSize;return this._storage[t][i][n]},Ay.getValues=function(t,e){var i=[];du.isArray(t)||(e=t,t=this.dimensions);for(var n=0,a=t.length;n<a;n++)i.push(this.get(t[n],e));return i},Ay.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,i=this._dimensionInfos,n=0,a=e.length;n<a;n++)if("ordinal"!==i[e[n]].type&&isNaN(this.get(e[n],t)))return!1;return!0},Ay.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var i,n=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var a=(i=e)[0],r=i[1],o=0;o<n;o++){var s=this._getFast(t,this.getRawIndex(o));s<a&&(a=s),s>r&&(r=s)}return i=[a,r],this._extent[t]=i,i},Ay.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},Ay.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},Ay.getCalculationInfo=function(t){return this._calculationInfo[t]},Ay.setCalculationInfo=function(t,e){yy(t)?du.extend(this._calculationInfo,t):this._calculationInfo[t]=e},Ay.getSum=function(t){var e=0;if(this._storage[t])for(var i=0,n=this.count();i<n;i++){var a=this.get(t,i);isNaN(a)||(e+=a)}return e},Ay.getMedian=function(t){var e=[];this.each(t,function(t,i){isNaN(t)||e.push(t)});var i=[].concat(e).sort(function(t,e){return t-e}),n=this.count();return 0===n?0:n%2==1?i[(n-1)/2]:(i[n/2]+i[n/2-1])/2},Ay.rawIndexOf=function(t,e){var i=(t&&this._invertedIndicesMap[t])[e];return null==i||isNaN(i)?-1:i},Ay.indexOfName=function(t){for(var e=0,i=this.count();e<i;e++)if(this.getName(e)===t)return e;return-1},Ay.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,i=e[t];if(null!=i&&i<this._count&&i===t)return t;for(var n=0,a=this._count-1;n<=a;){var r=(n+a)/2|0;if(e[r]<t)n=r+1;else{if(!(e[r]>t))return r;a=r-1}}return-1},Ay.indicesOfNearest=function(t,e,i){var n=[];if(!this._storage[t])return n;null==i&&(i=1/0);for(var a=Number.MAX_VALUE,r=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l);l<=i&&u<=a&&((u<a||l>=0&&r<0)&&(a=u,r=l,n.length=0),n.push(o))}return n},Ay.getRawIndex=fi,Ay.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],i=0;i<this.dimensions.length;i++){var n=this.dimensions[i];e.push(this.get(n,t))}return e},Ay.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||di(this,this._nameDimIdx,e)||""},Ay.getId=function(t){return gi(this,this.getRawIndex(t))},Ay.each=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;for(var a=(t=du.map(mi(t),this.getDimension,this)).length,r=0;r<this.count();r++)switch(a){case 0:e.call(i,r);break;case 1:e.call(i,this.get(t[0],r),r);break;case 2:e.call(i,this.get(t[0],r),this.get(t[1],r),r);break;default:for(var o=0,s=[];o<a;o++)s[o]=this.get(t[o],r);s[o]=r,e.apply(i,s)}}},Ay.filterSelf=function(t,e,i,n){if(this._count){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this,t=du.map(mi(t),this.getDimension,this);for(var a=this.count(),r=new(hi(this))(a),o=[],s=t.length,l=0,u=t[0],h=0;h<a;h++){var c,d=this.getRawIndex(h);if(0===s)c=e.call(i,h);else if(1===s){var f=this._getFast(u,d);c=e.call(i,f,h)}else{for(var p=0;p<s;p++)o[p]=this._getFast(u,d);o[p]=h,c=e.apply(i,o)}c&&(r[l++]=d)}return l<a&&(this._indices=r),this._count=l,this._extent={},this.getRawIndex=this._indices?pi:fi,this}},Ay.selectRange=function(t){if(this._count){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(i);var n=e.length;if(n){var a=this.count(),r=new(hi(this))(a),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===n){for(var d=this._storage[e[0]],f=0;f<this._chunkCount;f++)for(var p=d[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++){((b=p[m])>=l&&b<=u||isNaN(b))&&(r[o++]=c),c++}h=!0}else if(2===n){for(var d=this._storage[s],v=this._storage[e[1]],y=t[e[1]][0],x=t[e[1]][1],f=0;f<this._chunkCount;f++)for(var p=d[f],_=v[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),m=0;m<g;m++){var b=p[m],w=_[m];(b>=l&&b<=u||isNaN(b))&&(w>=y&&w<=x||isNaN(w))&&(r[o++]=c),c++}h=!0}}if(!h)if(1===n)for(m=0;m<a;m++){M=this.getRawIndex(m);((b=this._getFast(s,M))>=l&&b<=u||isNaN(b))&&(r[o++]=M)}else for(m=0;m<a;m++){for(var S=!0,M=this.getRawIndex(m),f=0;f<n;f++){var I=e[f];((b=this._getFast(i,M))<t[I][0]||b>t[I][1])&&(S=!1)}S&&(r[o++]=this.getRawIndex(m))}return o<a&&(this._indices=r),this._count=o,this._extent={},this.getRawIndex=this._indices?pi:fi,this}}},Ay.mapArray=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]),i=i||n||this;var a=[];return this.each(t,function(){a.push(e&&e.apply(this,arguments))},i),a},Ay.map=function(t,e,i,n){i=i||n||this;var a=vi(this,t=du.map(mi(t),this.getDimension,this));a._indices=this._indices,a.getRawIndex=a._indices?pi:fi;for(var r=a._storage,o=[],s=this._chunkSize,l=t.length,u=this.count(),h=[],c=a._rawExtent,d=0;d<u;d++){for(var f=0;f<l;f++)h[f]=this.get(t[f],d);h[l]=d;var p=e&&e.apply(i,h);if(null!=p){"object"!=typeof p&&(o[0]=p,p=o);for(var g=this.getRawIndex(d),m=Math.floor(g/s),v=g%s,y=0;y<p.length;y++){var x=t[y],_=p[y],b=c[x],w=r[x];w&&(w[m][v]=_),_<b[0]&&(b[0]=_),_>b[1]&&(b[1]=_)}}}return a},Ay.downSample=function(t,e,i,n){for(var a=vi(this,[t]),r=a._storage,o=[],s=Math.floor(1/e),l=r[t],u=this.count(),h=this._chunkSize,c=a._rawExtent[t],d=new(hi(this))(u),f=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s);for(var g=0;g<s;g++){var m=this.getRawIndex(p+g),v=Math.floor(m/h),y=m%h;o[g]=l[v][y]}var x=i(o),_=this.getRawIndex(Math.min(p+n(o,x)||0,u-1)),b=_%h;l[Math.floor(_/h)][b]=x,x<c[0]&&(c[0]=x),x>c[1]&&(c[1]=x),d[f++]=_}return a._count=f,a._indices=d,a.getRawIndex=pi,a},Ay.getItemModel=function(t){var e=this.hostModel;return new Vp(this.getRawDataItem(t),e,e&&e.ecModel)},Ay.diff=function(t){var e=this;return new hy(t?t.getIndices():[],this.getIndices(),function(e){return gi(t,e)},function(t){return gi(e,t)})},Ay.getVisual=function(t){var e=this._visual;return e&&e[t]},Ay.setVisual=function(t,e){if(yy(t))for(var i in t)t.hasOwnProperty(i)&&this.setVisual(i,t[i]);else this._visual=this._visual||{},this._visual[t]=e},Ay.setLayout=function(t,e){if(yy(t))for(var i in t)t.hasOwnProperty(i)&&this.setLayout(i,t[i]);else this._layout[t]=e},Ay.getLayout=function(t){return this._layout[t]},Ay.getItemLayout=function(t){return this._itemLayouts[t]},Ay.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?du.extend(this._itemLayouts[t]||{},e):e},Ay.clearItemLayouts=function(){this._itemLayouts.length=0},Ay.getItemVisual=function(t,e,i){var n=this._itemVisuals[t],a=n&&n[e];return null!=a||i?a:this.getVisual(e)},Ay.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{},a=this.hasItemVisual;if(this._itemVisuals[t]=n,yy(e))for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r],a[r]=!0);else n[e]=i,a[e]=!0},Ay.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};Ay.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e.traverse(function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType},e)),this._graphicEls[t]=e},Ay.getItemGraphicEl=function(t){return this._graphicEls[t]},Ay.eachItemGraphicEl=function(t,e){du.each(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n)})},Ay.cloneShallow=function(t){if(!t){var e=du.map(this.dimensions,this.getDimensionInfo,this);t=new Iy(e,this.hostModel)}if(t._storage=this._storage,ci(t,this),this._indices){var i=this._indices.constructor;t._indices=new i(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?pi:fi,t},Ay.wrapMethod=function(t,e){var i=this[t];"function"==typeof i&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.apply(this,[t].concat(du.slice(arguments)))})},Ay.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],Ay.CHANGABLE_METHODS=["filterSelf","selectRange"];var Ty=Iy,Dy=du.createHashMap,Cy=du.each,Ly=du.isString,Py=du.defaults,ky=du.extend,Oy=du.isObject,Ry=du.clone,Ny=Wc.normalizeToArray,Ey=$g.guessOrdinal,zy=py.OTHER_DIMENSIONS,Vy=function(t,e,i){function n(t,e,i){null!=zy.get(e)?t.otherDims[e]=i:(t.coordDim=e,t.coordDimIndex=i,s.set(e,!0))}Cg.isInstance(e)||(e=Cg.seriesDataToSource(e)),i=i||{},t=(t||[]).slice();for(var a=(i.dimsDef||[]).slice(),r=Dy(i.encodeDef),o=Dy(),s=Dy(),l=[],u=function(t,e,i,n){var a=Math.max(t.dimensionsDetectCount||1,e.length,i.length,n||0);return Cy(e,function(t){var e=t.dimsDef;e&&(a=Math.max(a,e.length))}),a}(e,t,a,i.dimCount),h=0;h<u;h++){var c=a[h]=ky({},Oy(a[h])?a[h]:{name:a[h]}),d=c.name,f=l[h]={otherDims:{}};null!=d&&null==o.get(d)&&(f.name=f.displayName=d,o.set(d,h)),null!=c.type&&(f.type=c.type),null!=c.displayName&&(f.displayName=c.displayName)}r.each(function(t,e){t=Ny(t).slice();var i=r.set(e,[]);Cy(t,function(t,a){Ly(t)&&(t=o.get(t)),null!=t&&t<u&&(i[a]=t,n(l[t],e,a))})});var p=0;Cy(t,function(t,e){var i,a,o;if(Ly(t))i=t,t={};else{i=t.name;var s=t.ordinalMeta;t.ordinalMeta=null,(t=Ry(t)).ordinalMeta=s,a=t.dimsDef,o=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var u=Ny(r.get(i));if(!u.length)for(var h=0;h<(a&&a.length||1);h++){for(;p<l.length&&null!=l[p].coordDim;)p++;p<l.length&&u.push(p++)}Cy(u,function(e,r){var s=l[e];if(n(Py(s,t),i,r),null==s.name&&a){var u=a[r];!Oy(u)&&(u={name:u}),s.name=s.displayName=u.name,s.defaultTooltip=u.defaultTooltip}o&&Py(s.otherDims,o)})});var g=i.generateCoord,m=i.generateCoordCount,v=null!=m;m=g?m||1:0;for(var y=g||"value",x=0;x<u;x++)null==(f=l[x]=l[x]||{}).coordDim&&(f.coordDim=xi(y,s,v),f.coordDimIndex=0,(!g||m<=0)&&(f.isExtraCoord=!0),m--),null==f.name&&(f.name=xi(f.coordDim,o)),null==f.type&&Ey(e,x,f.name)&&(f.type="ordinal");return l},By=function(t,e){return e=e||{},Vy(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})},Gy=du.each,Hy=du.isString,Fy={enableDataStack:function(t,e,i){var n,a,r,o,s=(i=i||{}).byIndex,l=i.stackedCoordDimension,u=!(!t||!t.get("stack"));if(Gy(e,function(t,i){Hy(t)&&(e[i]=t={name:t}),u&&!t.isExtraCoord&&(s||n||!t.ordinalMeta||(n=t),a||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(a=t))}),!a||s||n||(s=!0),a){r="__\0ecstackresult",o="__\0ecstackedover",n&&(n.createInvertedIndices=!0);var h=a.coordDim,c=a.type,d=0;Gy(e,function(t){t.coordDim===h&&d++}),e.push({name:r,coordDim:h,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0}),d++,e.push({name:o,coordDim:o,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:a&&a.name,stackedByDimension:n&&n.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:r}},isDimensionStacked:_i,getStackedDimension:function(t,e){return _i(t,e)?t.getCalculationInfo("stackResultDimension"):e}},Wy=_g.SOURCE_FORMAT_ORIGINAL,Uy=py.getDimensionTypeByAxis,Zy=Wc.getDataItemValue,jy=xg.getCoordSysDefineBySeries,Yy=Fy.enableDataStack,Xy=function(t,e,i){i=i||{},Cg.isInstance(t)||(t=Cg.seriesDataToSource(t));var n,a=e.get("coordinateSystem"),r=vm.get(a),o=jy(e);o&&(n=du.map(o.coordSysDims,function(t){var e={name:t},i=o.axisMap.get(t);if(i){var n=i.get("type");e.type=Uy(n)}return e})),n||(n=r&&(r.getDimensionsInfo?r.getDimensionsInfo():r.dimensions.slice())||["x","y"]);var s,l,u=By(t,{coordDimensions:n,generateCoord:i.generateCoord});o&&du.each(u,function(t,e){var i=t.coordDim,n=o.categoryAxisMap.get(i);n&&(null==s&&(s=e),t.ordinalMeta=n.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var h=Yy(e,u),c=new Ty(u,e);c.setCalculationInfo(h);var d=null!=s&&function(t){if(t.sourceFormat===Wy){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}(t.data||[]);return null!=e&&!du.isArray(Zy(e))}}(t)?function(t,e,i,n){return n===s?i:this.defaultDimValueGetter(t,e,i,n)}:null;return c.hasItemOption=!1,c.initData(t,null,d),c};bi.prototype.parse=function(t){return t},bi.prototype.getSetting=function(t){return this._setting[t]},bi.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},bi.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},bi.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},bi.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},bi.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},bi.prototype.getExtent=function(){return this._extent.slice()},bi.prototype.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e)},bi.prototype.isBlank=function(){return this._isBlank},bi.prototype.setBlank=function(t){this._isBlank=t},bi.prototype.getLabel=null,Yc.enableClassExtend(bi),Yc.enableClassManagement(bi,{registerWhenExtend:!0});var qy=bi,$y=du.createHashMap,Ky=du.isObject,Jy=du.map;wi.createByAxisModel=function(t){var e=t.option,i=e.data,n=i&&Jy(i,function(t){return Ky(t)&&null!=t.value?t.value:t+""});return new wi({categories:n,needCollect:!n,deduplication:!1!==e.dedplication})};var Qy=wi.prototype;Qy.getOrdinal=function(t){return Si(this).get(t)},Qy.parseAndCollect=function(t){var e,i=this._needCollect;if("string"!=typeof t&&!i)return t;if(i&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var n=Si(this);return null==(e=n.get(t))&&(i?(e=this.categories.length,this.categories[e]=t,n.set(t,e)):e=NaN),e};var tx=wi,ex=qy.prototype,ix=qy.extend({type:"ordinal",init:function(t,e){t&&!du.isArray(t)||(t=new tx({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),ex.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return ex.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(ex.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,i=e[0];i<=e[1];)t.push(i),i++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:du.noop,niceExtent:du.noop});ix.create=function(){return new ix};var nx=ix,ax=Up.round,rx={intervalScaleNiceTicks:function(t,e,i,n){var a={},r=t[1]-t[0],o=a.interval=Up.nice(r/e,!0);null!=i&&o<i&&(o=a.interval=i),null!=n&&o>n&&(o=a.interval=n);var s=a.intervalPrecision=Mi(o);return Ai(a.niceTickExtent=[ax(Math.ceil(t[0]/o)*o,s),ax(Math.floor(t[1]/o)*o,s)],t),a},getIntervalPrecision:Mi,fixExtent:Ai,intervalScaleGetTicks:function(t,e,i,n){var a=[];if(!t)return a;e[0]<i[0]&&a.push(e[0]);for(var r=i[0];r<=i[1]&&(a.push(r),(r=ax(r+t,n))!==a[a.length-1]);)if(a.length>1e4)return[];return e[1]>(a.length?a[a.length-1]:i[1])&&a.push(e[1]),a}},ox=Up.round,sx=qy.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),sx.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=rx.getIntervalPrecision(t)},getTicks:function(){return rx.intervalScaleGetTicks(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var i=e&&e.precision;return null==i?i=Up.getPrecisionSafe(t)||0:"auto"===i&&(i=this._intervalPrecision),t=ox(t,i,!0),qp.addCommas(t)},niceTicks:function(t,e,i){t=t||5;var n=this._extent,a=n[1]-n[0];if(isFinite(a)){a<0&&(a=-a,n.reverse());var r=rx.intervalScaleNiceTicks(n,t,e,i);this._intervalPrecision=r.intervalPrecision,this._interval=r.interval,this._niceExtent=r.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var i=e[0];t.fixMax?e[0]-=i/2:(e[1]+=i/2,e[0]-=i/2)}else e[1]=1;var n=e[1]-e[0];isFinite(n)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var a=this._interval;t.fixMin||(e[0]=ox(Math.floor(e[0]/a)*a)),t.fixMax||(e[1]=ox(Math.ceil(e[1]/a)*a))}});sx.create=function(){return new sx};var lx=sx,ux=Up.parsePercent,hx=Fy.isDimensionStacked,cx="__ec_stack_",dx="undefined"!=typeof Float32Array?Float32Array:Array,fx={getLayoutOnAxis:function(t){var e=[],i=t.axis;if("category"===i.type){for(var n=i.getBandWidth(),a=0;a<t.count;a++)e.push(du.defaults({bandWidth:n,axisKey:"axis0",stackId:cx+a},t));for(var r=Pi(e),o=[],a=0;a<t.count;a++){var s=r.axis0[cx+a];s.offsetCenter=s.offset+s.width/2,o.push(s)}return o}},prepareLayoutBarSeries:Ci,makeColumnLayout:Li,retrieveColumnLayout:ki,layout:function(t,e){var i=Ci(t,e),n=Li(i),a={},r={};du.each(i,function(t){var e=t.getData(),i=t.coordinateSystem,o=i.getBaseAxis(),s=Ti(t),l=n[Di(o)][s],u=l.offset,h=l.width,c=i.getOtherAxis(o),d=t.get("barMinHeight")||0;a[s]=a[s]||[],r[s]=r[s]||[],e.setLayout({offset:u,size:h});for(var f=e.mapDimension(c.dim),p=e.mapDimension(o.dim),g=hx(e,f),m=c.isHorizontal(),v=Ni(o,c,g),y=0,x=e.count();y<x;y++){var _=e.get(f,y),b=e.get(p,y);if(!isNaN(_)){var w=_>=0?"p":"n",S=v;g&&(a[s][b]||(a[s][b]={p:v,n:v}),S=a[s][b][w]);var M,I,A,T;if(m)M=S,I=(D=i.dataToPoint([_,b]))[1]+u,A=D[0]-v,T=h,Math.abs(A)<d&&(A=(A<0?-1:1)*d),g&&(a[s][b][w]+=A);else{var D=i.dataToPoint([b,_]);M=D[0]+u,I=S,A=h,T=D[1]-v,Math.abs(T)<d&&(T=(T<=0?-1:1)*d),g&&(a[s][b][w]+=T)}e.setItemLayout(y,{x:M,y:I,width:A,height:T})}}},this)},largeLayout:{seriesType:"bar",plan:Mv(),reset:function(t){if(Oi(t)&&Ri(t)){var e=t.getData(),i=t.coordinateSystem,n=i.getBaseAxis(),a=i.getOtherAxis(n),r=e.mapDimension(a.dim),o=e.mapDimension(n.dim),s=a.isHorizontal(),l=s?0:1,u=ki(Li([t]),n,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var h,c=new dx(2*t.count),d=[],f=[],p=0;null!=(h=t.next());)f[l]=e.get(r,h),f[1-l]=e.get(o,h),d=i.dataToPoint(f,null,d),c[p++]=d[0],c[p++]=d[1];e.setLayout({largePoints:c,barWidth:u,valueAxisStart:Ni(n,a,!1),valueAxisHorizontal:s})}}}}}},px=lx.prototype,gx=Math.ceil,mx=Math.floor,vx=lx.extend({type:"time",getLabel:function(t){var e=this._stepLvl,i=new Date(t);return qp.formatTime(e[0],i,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var i=new Date;e[1]=+new Date(i.getFullYear(),i.getMonth(),i.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var n=this._interval;t.fixMin||(e[0]=Up.round(mx(e[0]/n)*n)),t.fixMax||(e[1]=Up.round(gx(e[1]/n)*n))},niceTicks:function(t,e,i){t=t||10;var n=this._extent,a=n[1]-n[0],r=a/t;null!=e&&r<e&&(r=e),null!=i&&r>i&&(r=i);var o=yx.length,s=function(t,e,i,n){for(;i<n;){var a=i+n>>>1;t[a][1]<e?i=a+1:n=a}return i}(yx,r,0,o),l=yx[Math.min(s,o-1)],u=l[1];if("year"===l[0]){var h=a/u;u*=Up.nice(h/t,!0)}var c=this.getSetting("useUTC")?0:60*new Date(+n[0]||+n[1]).getTimezoneOffset()*1e3,d=[Math.round(gx((n[0]-c)/u)*u+c),Math.round(mx((n[1]-c)/u)*u+c)];rx.fixExtent(d,n),this._stepLvl=l,this._interval=u,this._niceExtent=d},parse:function(t){return+Up.parseDate(t)}});du.each(["contain","normalize"],function(t){vx.prototype[t]=function(e){return px[t].call(this,this.parse(e))}});var yx=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];vx.create=function(t){return new vx({useUTC:t.ecModel.get("useUTC")})};var xx=qy.prototype,_x=lx.prototype,bx=Up.getPrecisionSafe,Sx=Up.round,Mx=Math.floor,Ix=Math.ceil,Ax=Math.pow,Tx=Math.log,Dx=qy.extend({type:"log",base:10,$constructor:function(){qy.apply(this,arguments),this._originalScale=new lx},getTicks:function(){var t=this._originalScale,e=this._extent,i=t.getExtent();return du.map(_x.getTicks.call(this),function(n){var a=Up.round(Ax(this.base,n));return a=n===e[0]&&t.__fixMin?Ei(a,i[0]):a,a=n===e[1]&&t.__fixMax?Ei(a,i[1]):a},this)},getLabel:_x.getLabel,scale:function(t){return t=xx.scale.call(this,t),Ax(this.base,t)},setExtent:function(t,e){var i=this.base;t=Tx(t)/Tx(i),e=Tx(e)/Tx(i),_x.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=xx.getExtent.call(this);e[0]=Ax(t,e[0]),e[1]=Ax(t,e[1]);var i=this._originalScale,n=i.getExtent();return i.__fixMin&&(e[0]=Ei(e[0],n[0])),i.__fixMax&&(e[1]=Ei(e[1],n[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=Tx(t[0])/Tx(e),t[1]=Tx(t[1])/Tx(e),xx.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||i<=0)){var n=Up.quantity(i);for(t/i*n<=.5&&(n*=10);!isNaN(n)&&Math.abs(n)<1&&Math.abs(n)>0;)n*=10;var a=[Up.round(Ix(e[0]/n)*n),Up.round(Mx(e[1]/n)*n)];this._interval=n,this._niceExtent=a}},niceExtent:function(t){_x.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});du.each(["contain","normalize"],function(t){Dx.prototype[t]=function(e){return e=Tx(e)/Tx(this.base),xx[t].call(this,e)}}),Dx.create=function(){return new Dx};var Cx=fx.prepareLayoutBarSeries,Lx=fx.makeColumnLayout,Px=fx.retrieveColumnLayout,kx={getScaleExtent:zi,niceScaleExtent:function(t,e){var i=zi(t,e),n=null!=e.getMin(),a=null!=e.getMax(),r=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(i[0],i[1]),t.niceExtent({splitNumber:r,fixMin:n,fixMax:a,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)},createScaleByModel:function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new nx(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new lx;default:return(qy.getClass(e)||lx).create(t)}},ifAxisCrossZero:function(t){var e=t.scale.getExtent(),i=e[0],n=e[1];return!(i>0&&n>0||i<0&&n<0)},makeLabelFormatter:Vi,getAxisRawValue:Bi,estimateLabelUnionRect:function(t){var e=t.model,i=t.scale;if(e.get("axisLabel.show")&&!i.isBlank()){var n,a,r="category"===t.type,o=i.getExtent();a=r?i.count():(n=i.getTicks()).length;var s,l=t.getLabelModel(),u=Vi(t),h=1;a>40&&(h=Math.ceil(a/40));for(var c=0;c<a;c+=h){var d=u(n?n[c]:o[0]+c),f=function(t,e){var i=(l.get("rotate")||0)*Math.PI/180,n=t.plain(),a=n.width,r=n.height,o=a*Math.cos(i)+r*Math.sin(i),s=a*Math.sin(i)+r*Math.cos(i);return new ch(n.x,n.y,o,s)}(l.getTextRect(d));s?s.union(f):s=f}return s}}},Ox={getMin:function(t){var e=this.option,i=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=i&&"dataMin"!==i&&"function"!=typeof i&&!du.eqNaN(i)&&(i=this.axis.scale.parse(i)),i},getMax:function(t){var e=this.option,i=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=i&&"dataMax"!==i&&"function"!=typeof i&&!du.eqNaN(i)&&(i=this.axis.scale.parse(i)),i},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:du.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},Rx=Dp.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,a=e.width/2,r=e.height/2;t.moveTo(i,n-r),t.lineTo(i+a,n+r),t.lineTo(i-a,n+r),t.closePath()}}),Nx=Dp.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,a=e.width/2,r=e.height/2;t.moveTo(i,n-r),t.lineTo(i+a,n),t.lineTo(i,n+r),t.lineTo(i-a,n),t.closePath()}}),Ex=Dp.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,a=e.width/5*3,r=Math.max(a,e.height),o=a/2,s=o*o/(r-o),l=n-r+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),d=Math.cos(u),f=.6*o,p=.7*o;t.moveTo(i-h,l+s),t.arc(i,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(i+h-c*f,l+s+d*f,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-h+c*f,l+s+d*f,i-h,l+s),t.closePath()}}),zx=Dp.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.height,n=e.width,a=e.x,r=e.y,o=n/3*2;t.moveTo(a,r),t.lineTo(a+o,r+i),t.lineTo(a,r+i/4*3),t.lineTo(a-o,r+i),t.lineTo(a,r),t.closePath()}}),Vx={line:Dp.Line,rect:Dp.Rect,roundRect:Dp.Rect,square:Dp.Rect,circle:Dp.Circle,diamond:Nx,pin:Ex,arrow:zx,triangle:Rx},Bx={line:function(t,e,i,n,a){a.x1=t,a.y1=e+n/2,a.x2=t+i,a.y2=e+n/2},rect:function(t,e,i,n,a){a.x=t,a.y=e,a.width=i,a.height=n},roundRect:function(t,e,i,n,a){a.x=t,a.y=e,a.width=i,a.height=n,a.r=Math.min(i,n)/4},square:function(t,e,i,n,a){var r=Math.min(i,n);a.x=t,a.y=e,a.width=r,a.height=r},circle:function(t,e,i,n,a){a.cx=t+i/2,a.cy=e+n/2,a.r=Math.min(i,n)/2},diamond:function(t,e,i,n,a){a.cx=t+i/2,a.cy=e+n/2,a.width=i,a.height=n},pin:function(t,e,i,n,a){a.x=t+i/2,a.y=e+n/2,a.width=i,a.height=n},arrow:function(t,e,i,n,a){a.x=t+i/2,a.y=e+n/2,a.width=i,a.height=n},triangle:function(t,e,i,n,a){a.cx=t+i/2,a.cy=e+n/2,a.width=i,a.height=n}},Gx={};du.each(Vx,function(t,e){Gx[e]=new t});var Hx=Dp.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,i){var n=e.symbolType,a=Gx[n];"none"!==e.symbolType&&(a||(a=Gx[n="rect"]),Bx[n](e.x,e.y,e.width,e.height,a.shape),a.buildPath(t,a.shape,i))}}),Fx={createSymbol:function(t,e,i,n,a,r,o){var s=0===t.indexOf("empty");s&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var l;return l=0===t.indexOf("image://")?Dp.makeImage(t.slice(8),new ch(e,i,n,a),o?"center":"cover"):0===t.indexOf("path://")?Dp.makePath(t.slice(7),{},new ch(e,i,n,a),o?"center":"cover"):new Hx({shape:{symbolType:t,x:e,y:i,width:n,height:a}}),l.__isEmptyBrush=s,l.setColor=function(t,e){if("image"!==this.type){var i=this.style,n=this.shape;n&&"line"===n.symbolType?i.stroke=t:this.__isEmptyBrush?(i.stroke=t,i.fill=e||"#fff"):(i.fill&&(i.fill=t),i.stroke&&(i.stroke=t)),this.dirty(!1)}},l.setColor(r),l}},Wx=(ng.getLayoutRect,ng.getLayoutRect),Ux=Fy.enableDataStack,Zx=Fy.isDimensionStacked,jx=Fy.getStackedDimension,Yx={getLayoutRect:Wx,completeDimensions:Vy,createDimensions:By,createSymbol:Fx.createSymbol,createList:function(t){return Xy(t.getSource(),t)},dataStack:{isDimensionStacked:Zx,enableDataStack:Ux,getStackedDimension:jx},createScale:function(t,e){var i=e;Vp.isInstance(e)||(i=new Vp(e),du.mixin(i,Ox));var n=kx.createScaleByModel(i);return n.setExtent(t[0],t[1]),kx.niceScaleExtent(n,i),n},mixinAxisModelCommonMethods:function(t){du.mixin(t,Ox)}},Xx=1e-8,qx={contain:function(t,e,i){var n=0,a=t[0];if(!a)return!1;for(var r=1;r<t.length;r++){var o=t[r];n+=jd(a[0],a[1],o[0],o[1],e,i),a=o}var s=t[0];return Gi(a[0],s[0])&&Gi(a[1],s[1])||(n+=jd(a[0],a[1],s[0],s[1],e,i)),0!==n}};Hi.prototype={constructor:Hi,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,i=[e,e],n=[-e,-e],a=[],r=[],o=this.geometries,s=0;s<o.length;s++)if("polygon"===o[s].type){var l=o[s].exterior;bd.fromPoints(l,a,r),pu.min(i,i,a),pu.max(n,n,r)}return 0===s&&(i[0]=i[1]=n[0]=n[1]=0),this._rect=new ch(i[0],i[1],n[0]-i[0],n[1]-i[1])},contain:function(t){var e=this.getBoundingRect(),i=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var n=0,a=i.length;n<a;n++)if("polygon"===i[n].type){var r=i[n].exterior,o=i[n].interiors;if(qx.contain(r,t[0],t[1])){for(var s=0;s<(o?o.length:0);s++)if(qx.contain(o[s]))continue t;return!0}}return!1},transformTo:function(t,e,i,n){var a=this.getBoundingRect(),r=a.width/a.height;i?n||(n=i/r):i=r*n;for(var o=new ch(t,e,i,n),s=a.calculateTransform(o),l=this.geometries,u=0;u<l.length;u++)if("polygon"===l[u].type){for(var h=l[u].exterior,c=l[u].interiors,d=0;d<h.length;d++)pu.applyTransform(h[d],h[d],s);for(var f=0;f<(c?c.length:0);f++)for(d=0;d<c[f].length;d++)pu.applyTransform(c[f][d],c[f][d],s)}(a=this._rect).copy(o),this.center=[a.x+a.width/2,a.y+a.height/2]}};var $x=Hi,Kx=function(t){return function(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var i=t.features,n=0;n<i.length;n++)for(var a=i[n].geometry,r=a.coordinates,o=a.encodeOffsets,s=0;s<r.length;s++){var l=r[s];if("Polygon"===a.type)r[s]=Fi(l,o[s],e);else if("MultiPolygon"===a.type)for(var u=0;u<l.length;u++){var h=l[u];l[u]=Fi(h,o[s][u],e)}}t.UTF8Encoding=!1}(t),du.map(du.filter(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,i=t.geometry,n=i.coordinates,a=[];"Polygon"===i.type&&a.push({type:"polygon",exterior:n[0],interiors:n.slice(1)}),"MultiPolygon"===i.type&&du.each(n,function(t){t[0]&&a.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var r=new $x(e.name,a,e.cp);return r.properties=e,r})},Jx=Wc.makeInner,Qx=kx.makeLabelFormatter,t_=Jx(),e_={createAxisLabels:function(t){return"category"===t.type?function(t){var e=t.getLabelModel(),i=Wi(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:i.labelCategoryInterval}:i}(t):function(t){var e=t.scale.getTicks(),i=Qx(t);return{labels:du.map(e,function(e,n){return{formattedLabel:i(e,n),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)},createAxisTicks:function(t,e){return"category"===t.type?function(t,e){var i=Ui(t,"ticks"),n=qi(e),a=Zi(i,n);if(a)return a;var r,o;if(e.get("show")&&!t.scale.isBlank()||(r=[]),du.isFunction(n))r=Xi(t,n,!0);else if("auto"===n){var s=Wi(t,t.getLabelModel());o=s.labelCategoryInterval,r=du.map(s.labels,function(t){return t.tickValue})}else r=Yi(t,o=n,!0);return ji(i,n,{ticks:r,tickCategoryInterval:o})}(t,e):{ticks:t.scale.getTicks()}},calculateCategoryInterval:function(t){var e=function(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),i=Qx(t),n=(e.axisRotate-e.labelRotate)/180*Math.PI,a=t.scale,r=a.getExtent(),o=a.count();if(r[1]-r[0]<1)return 0;var s=1;o>40&&(s=Math.max(1,Math.floor(o/40)));for(var l=r[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(n)),c=Math.abs(u*Math.sin(n)),d=0,f=0;l<=r[1];l+=s){var p=0,g=0,m=jh.getBoundingRect(i(l),e.font,"center","top");p=1.3*m.width,g=1.3*m.height,d=Math.max(d,p,7),f=Math.max(f,g,7)}var v=d/h,y=f/c;isNaN(v)&&(v=1/0),isNaN(y)&&(y=1/0);var x=Math.max(0,Math.floor(Math.min(v,y))),_=t_(t.model),b=_.lastAutoInterval,w=_.lastTickCount;return null!=b&&null!=w&&Math.abs(b-x)<=1&&Math.abs(w-o)<=1&&b>x?x=b:(_.lastTickCount=o,_.lastAutoInterval=x),x}},i_=du.each,n_=du.map,a_=Up.linearMap,r_=Up.getPixelPrecision,o_=e_.createAxisTicks,s_=e_.createAxisLabels,l_=e_.calculateCategoryInterval,u_=[0,1],h_=function(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1};h_.prototype={constructor:h_,contain:function(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&t<=n},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return r_(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var i=this._extent;i[0]=t,i[1]=e},dataToCoord:function(t,e){var i=this._extent,n=this.scale;return t=n.normalize(t),this.onBand&&"ordinal"===n.type&&$i(i=i.slice(),n.count()),a_(t,u_,i,e)},coordToData:function(t,e){var i=this._extent,n=this.scale;this.onBand&&"ordinal"===n.type&&$i(i=i.slice(),n.count());var a=a_(t,i,u_,e);return this.scale.scale(a)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),i=o_(this,e),n=i.ticks,a=n_(n,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return function(t,e,i,n,a){function r(t,e){return h?t>e:t<e}var o=e.length;if(t.onBand&&!n&&o){var s,l=t.getExtent();if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;i_(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1];r(e[0].coord,l[0])&&(a?e[0].coord=l[0]:e.shift()),a&&r(l[0],e[0].coord)&&e.unshift({coord:l[0]}),r(l[1],s.coord)&&(a?s.coord=l[1]:e.pop()),a&&r(s.coord,l[1])&&e.push({coord:l[1]})}}(this,a,i.tickCategoryInterval,r,t.clamp),a},getViewLabels:function(){return s_(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return l_(this)}};var c_=h_,d_=zc,f_=Mu,p_=pu,g_=Wu,m_=Dp,v_=Up,y_=qp,x_=(Nv.throttle,Nv.throttle),__=Yx,b_=Kx,w_=Ty,S_=Vp,M_=c_,I_=Jl,A_=Kx,T_={};du.each(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){T_[t]=du[t]});var D_={zrender:d_,matrix:f_,vector:p_,color:g_,graphic:m_,number:v_,format:y_,throttle:x_,helper:__,parseGeoJSON:b_,List:w_,Model:S_,Axis:M_,env:I_,parseGeoJson:A_,util:T_},C_=t(function(t,e){function i(t){return function(e,i,n){e=e&&e.toLowerCase(),yu.prototype[t].call(this,e,i,n)}}function n(){yu.call(this)}function a(t,e,i){function a(t,e){return t.__prio-e.__prio}i=i||{},"string"==typeof e&&(e=q[e]),this.id,this.group,this._dom=t;var r=this._zr=zc.init(t,{renderer:i.renderer||"canvas",devicePixelRatio:i.devicePixelRatio,width:i.width,height:i.height});this._throttledZrFlush=T(du.bind(r.flush,r),17);(e=du.clone(e))&&Rm(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new vm;var o=this._api=function(t){var e=t._coordSysMgr;return du.extend(new gm(t),{getCoordinateSystems:du.bind(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var i=e.__ecComponentInfo;if(null!=i)return t._model.getComponent(i.mainType,i.index);e=e.parent}}})}(this);mh(X,a),mh(Z,a),this._scheduler=new iy(this,o,Z,X),yu.call(this),this._messageCenter=new n,this._initEvents(),this.resize=du.bind(this.resize,this),this._pendingActions=[],r.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[V]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(r,this),du.setAsPrimitive(this)}function r(t,e,i){var n,a=this._model,r=this._coordSysMgr.getCoordinateSystems();e=Wc.parseFinder(a,e);for(var o=0;o<r.length;o++){var s=r[o];if(s[t]&&null!=(n=s[t](a,e,i)))return n}}function o(t){var e=t._model,i=t._scheduler;i.restorePipelines(e),i.prepareStageTasks(),d(t,"component",e,i),d(t,"chart",e,i),i.plan()}function s(t,e,i,n,a){function r(n){n&&n.__alive&&n[e]&&n[e](n.__model,o,t._api,i)}var o=t._model;if(n){var s={};s[n+"Id"]=i[n+"Id"],s[n+"Index"]=i[n+"Index"],s[n+"Name"]=i[n+"Name"];var l={mainType:n,query:s};a&&(l.subType=a);var u=i.excludeSeriesId;null!=u&&(u=du.createHashMap(Wc.normalizeToArray(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||r(t["series"===n?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else C(t._componentsViews.concat(t._chartsViews),r)}function l(t,e){var i=t._chartsMap,n=t._scheduler;e.eachSeries(function(t){n.updateStreamModes(t,i[t.__viewId])})}function u(t,e){var i=t.type,n=t.escapeConnect,a=W[i],r=a.actionInfo,l=(r.update||"update").split(":"),u=l.pop();l=null!=l[0]&&k(l[0]),this[z]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=du.map(t.batch,function(e){return e=du.defaults(du.extend({},e),t),e.batch=null,e}));var d,f=[],p="highlight"===i||"downplay"===i;C(h,function(t){d=a.action(t,this._model,this._api),(d=d||du.extend({},t)).type=r.event||d.type,f.push(d),p?s(this,u,t,"series"):l&&s(this,u,t,l.main,l.sub)},this),"none"===u||p||l||(this[V]?(o(this),H.update.call(this,t),this[V]=!1):H[u].call(this,t)),d=c?{type:r.event||i,escapeConnect:n,batch:f}:f[0],this[z]=!1,!e&&this._messageCenter.trigger(d.type,d)}function h(t){for(var e=this._pendingActions;e.length;){var i=e.shift();u.call(this,i,t)}}function c(t){!t&&this.trigger("updated")}function d(t,e,i,n){function a(t){var e="_ec_"+t.id+"_"+t.type,a=s[e];if(!a){var h=k(t.type);(a=new(r?wv.getClass(h.main,h.sub):Pv.getClass(h.sub))).init(i,u),s[e]=a,o.push(a),l.add(a.group)}t.__viewId=a.__id=e,a.__alive=!0,a.__model=t,a.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!r&&n.prepareView(a,t,i,u)}for(var r="component"===e,o=r?t._componentsViews:t._chartsViews,s=r?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<o.length;h++)o[h].__alive=!1;r?i.eachComponent(function(t,e){"series"!==t&&a(e)}):i.eachSeries(a);for(h=0;h<o.length;){var c=o[h];c.__alive?h++:(!r&&c.renderTask.dispose(),l.remove(c.group),c.dispose(i,u),o.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function f(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function p(t,e,i,n){!function(t,e,i,n,a){C(a||t._componentsViews,function(t){var a=t.__model;t.render(a,e,i,n),v(a,t)})}(t,e,i,n),C(t._chartsViews,function(t){t.__alive=!1}),g(t,e,i,n),C(t._chartsViews,function(t){t.__alive||t.remove(e,i)})}function g(t,e,i,n,a){var r,o=t._scheduler;e.eachSeries(function(e){var i=t._chartsMap[e.__viewId];i.__alive=!0;var s=i.renderTask;o.updatePayload(s,n),a&&a.get(e.uid)&&s.dirty(),r|=s.perform(o.getPerformArgs(s)),i.group.silent=!!e.get("silent"),v(e,i),function(t,e){var i=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==i&&t.setStyle("blend",i),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",i)})})}(e,i)}),o.unfinished|=r,function(t,e){var i=t.storage,n=0;i.traverse(function(t){t.isGroup||n++}),n>e.get("hoverLayerThreshold")&&!Jl.node&&i.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}(t._zr,e),Bv(t._zr.dom,e)}function m(t,e){C(Y,function(i){i(t,e)})}function v(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t.zlevel=n))})}function y(t){J[t]=!1}function x(t){return K[Wc.getAttribute(t,et)]}function _(t,e){q[t]=e}function b(t){j.push(t)}function w(t,e){I(Z,t,e,O)}function S(t,e,i){"function"==typeof e&&(i=e,e="");var n=P(t)?t.type:[t,t={event:e}][0];t.event=(t.event||n).toLowerCase(),e=t.event,D(B.test(n)&&B.test(e)),W[n]||(W[n]={action:i,actionInfo:t}),U[e]=n}function M(t,e){I(X,t,e,N,"visual")}function I(t,e,i,n,a){(L(e)||P(e))&&(i=e,e=n);var r=iy.wrapStageHandler(i,a);return r.__prio=e,r.__raw=i,t.push(r),r}function A(t,e){$[t]=e}var T=Nv.throttle,D=du.assert,C=du.each,L=du.isFunction,P=du.isObject,k=ug.parseClassType,O=1e3,R=1e3,N=3e3,E={PROCESSOR:{FILTER:O,STATISTIC:5e3},VISUAL:{LAYOUT:R,GLOBAL:2e3,CHART:N,COMPONENT:4e3,BRUSH:5e3}},z="__flagInMainProcess",V="__optionUpdated",B=/^[a-zA-Z0-9_]+$/;n.prototype.on=i("on"),n.prototype.off=i("off"),n.prototype.one=i("one"),du.mixin(n,yu);var G=a.prototype;G._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[V]){var e=this[V].silent;this[z]=!0,o(this),H.update.call(this),this[z]=!1,this[V]=!1,h.call(this,e),c.call(this,e)}else if(t.unfinished){var i=1,n=this._model;this._api;t.unfinished=!1;do{var a=+new Date;t.performSeriesTasks(n),t.performDataProcessorTasks(n),l(this,n),t.performVisualTasks(n),g(this,this._model,0,"remain"),i-=+new Date-a}while(i>0&&t.unfinished);t.unfinished||this._zr.flush()}}},G.getDom=function(){return this._dom},G.getZr=function(){return this._zr},G.setOption=function(t,e,i){var n;if(P(e)&&(i=e.lazyUpdate,n=e.silent,e=e.notMerge),this[z]=!0,!this._model||e){var a=new Sm(this._api),r=this._theme,s=this._model=new fm(null,null,r,a);s.scheduler=this._scheduler,s.init(null,null,r,a)}this._model.setOption(t,j),i?(this[V]={silent:n},this[z]=!1):(o(this),H.update.call(this),this._zr.flush(),this[V]=!1,this[z]=!1,h.call(this,n),c.call(this,n))},G.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},G.getModel=function(){return this._model},G.getOption=function(){return this._model&&this._model.getOption()},G.getWidth=function(){return this._zr.getWidth()},G.getHeight=function(){return this._zr.getHeight()},G.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},G.getRenderedCanvas=function(t){if(Jl.canvasSupported){(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");return this._zr.painter.getRenderedCanvas(t)}},G.getSvgDataUrl=function(){if(Jl.svgSupported){var t=this._zr,e=t.storage.getDisplayList();return du.each(e,function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},G.getDataURL=function(t){var e=(t=t||{}).excludeComponents,i=this._model,n=[],a=this;C(e,function(t){i.eachComponent({mainType:t},function(t){var e=a._componentsMap[t.__viewId];e.group.ignore||(n.push(e),e.group.ignore=!0)})});var r="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return C(n,function(t){t.group.ignore=!1}),r},G.getConnectedDataURL=function(t){if(Jl.canvasSupported){var e=this.group,i=Math.min,n=Math.max;if(J[e]){var a=1/0,r=1/0,o=-1/0,s=-1/0,l=[],u=t&&t.pixelRatio||1;du.each(K,function(u,h){if(u.group===e){var c=u.getRenderedCanvas(du.clone(t)),d=u.getDom().getBoundingClientRect();a=i(d.left,a),r=i(d.top,r),o=n(d.right,o),s=n(d.bottom,s),l.push({dom:c,left:d.left,top:d.top})}});var h=(o*=u)-(a*=u),c=(s*=u)-(r*=u),d=du.createCanvas();d.width=h,d.height=c;var f=zc.init(d);return C(l,function(t){var e=new Dp.Image({style:{x:t.left*u-a,y:t.top*u-r,image:t.dom}});f.add(e)}),f.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},G.convertToPixel=du.curry(r,"convertToPixel"),G.convertFromPixel=du.curry(r,"convertFromPixel"),G.containPixel=function(t,e){var i,n=this._model;return t=Wc.parseFinder(n,t),du.each(t,function(t,n){n.indexOf("Models")>=0&&du.each(t,function(t){var a=t.coordinateSystem;if(a&&a.containPoint)i|=!!a.containPoint(e);else if("seriesModels"===n){var r=this._chartsMap[t.__viewId];r&&r.containPoint&&(i|=r.containPoint(e,t))}},this)},this),!!i},G.getVisual=function(t,e){var i=this._model,n=(t=Wc.parseFinder(i,t,{defaultMainType:"series"})).seriesModel.getData(),a=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=a?n.getItemVisual(a,e):n.getVisual(e)},G.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},G.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var H={prepareAndUpdate:function(t){o(this),H.update.call(this,t)},update:function(t){var e=this._model,i=this._api,n=this._zr,a=this._coordSysMgr,r=this._scheduler;if(e){r.restoreData(e,t),r.performSeriesTasks(e),a.create(e,i),r.performDataProcessorTasks(e,t),l(this,e),a.update(e,i),f(e),r.performVisualTasks(e,t),p(this,e,i,t);var o=e.get("backgroundColor")||"transparent";if(Jl.canvasSupported)n.setBackgroundColor(o);else{var s=Wu.parse(o);o=Wu.stringify(s,"rgb"),0===s[3]&&(o="transparent")}m(e,i)}},updateTransform:function(t){var e=this._model,i=this,n=this._api;if(e){var a=[];e.eachComponent(function(r,o){var s=i.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,n,t);l&&l.update&&a.push(s)}else a.push(s)});var r=du.createHashMap();e.eachSeries(function(a){var o=i._chartsMap[a.__viewId];if(o.updateTransform){var s=o.updateTransform(a,e,n,t);s&&s.update&&r.set(a.uid,1)}else r.set(a.uid,1)}),f(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:r}),g(i,e,0,t,r),m(e,this._api)}},updateView:function(t){var e=this._model;e&&(Pv.markUpdateMethod(t,"updateView"),f(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),p(this,this._model,this._api,t),m(e,this._api))},updateVisual:function(t){H.update.call(this,t)},updateLayout:function(t){H.update.call(this,t)}};G.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var i=e.resetOption("media"),n=t&&t.silent;this[z]=!0,i&&o(this),H.update.call(this),this[z]=!1,h.call(this,n),c.call(this,n)}},G.showLoading=function(t,e){if(P(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),$[t]){var i=$[t](this._api,e),n=this._zr;this._loadingFX=i,n.add(i)}},G.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},G.makeActionFromEvent=function(t){var e=du.extend({},t);return e.type=U[t.type],e},G.dispatchAction=function(t,e){P(e)||(e={silent:!!e}),W[t.type]&&this._model&&(this[z]?this._pendingActions.push(t):(u.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&Jl.browser.weChat&&this._throttledZrFlush(),h.call(this,e.silent),c.call(this,e.silent)))},G.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},G.on=i("on"),G.off=i("off"),G.one=i("one");var F=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];G._initEvents=function(){C(F,function(t){this._zr.on(t,function(e){var i,n=this.getModel(),a=e.target;if("globalout"===t)i={};else if(a&&null!=a.dataIndex){var r=a.dataModel||n.getSeriesByIndex(a.seriesIndex);i=r&&r.getDataParams(a.dataIndex,a.dataType)||{}}else a&&a.eventData&&(i=du.extend({},a.eventData));i&&(i.event=e,i.type=t,this.trigger(t,i))},this)},this),C(U,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},G.isDisposed=function(){return this._disposed},G.clear=function(){this.setOption({series:[]},!0)},G.dispose=function(){if(!this._disposed){this._disposed=!0,Wc.setAttribute(this.getDom(),et,"");var t=this._api,e=this._model;C(this._componentsViews,function(i){i.dispose(e,t)}),C(this._chartsViews,function(i){i.dispose(e,t)}),this._zr.dispose(),delete K[this.id]}},du.mixin(a,yu);var W={},U={},Z=[],j=[],Y=[],X=[],q={},$={},K={},J={},Q=new Date-0,tt=new Date-0,et="_echarts_instance_",it={},nt=y;M(2e3,Ev),b(Rm),w(5e3,zm),A("default",Hv),S({type:"highlight",event:"highlight",update:"highlight"},du.noop),S({type:"downplay",event:"downplay",update:"downplay"},du.noop),_("light",ay),_("dark",sy);e.version="4.1.0",e.dependencies={zrender:"4.0.4"},e.PRIORITY=E,e.init=function(t,e,i){var n=x(t);if(n)return n;var r=new a(t,e,i);return r.id="ec_"+Q++,K[r.id]=r,Wc.setAttribute(t,et,r.id),function(t){function e(t,e){for(var n=0;n<t.length;n++)t[n][i]=e}var i="__connectUpdateStatus";C(U,function(n,a){t._messageCenter.on(a,function(n){if(J[t.group]&&0!==t[i]){if(n&&n.escapeConnect)return;var a=t.makeActionFromEvent(n),r=[];C(K,function(e){e!==t&&e.group===t.group&&r.push(e)}),e(r,0),C(r,function(t){1!==t[i]&&t.dispatchAction(a)}),e(r,2)}})})}(r),r},e.connect=function(t){if(du.isArray(t)){var e=t;t=null,C(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+tt++,C(e,function(e){e.group=t})}return J[t]=!0,t},e.disConnect=y,e.disconnect=nt,e.dispose=function(t){"string"==typeof t?t=K[t]:t instanceof a||(t=x(t)),t instanceof a&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=x,e.getInstanceById=function(t){return K[t]},e.registerTheme=_,e.registerPreprocessor=b,e.registerProcessor=w,e.registerPostUpdate=function(t){Y.push(t)},e.registerAction=S,e.registerCoordinateSystem=function(t,e){vm.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=vm.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},e.registerLayout=function(t,e){I(X,t,e,R,"layout")},e.registerVisual=M,e.registerLoading=A,e.extendComponentModel=function(t){return ug.extend(t)},e.extendComponentView=function(t){return wv.extend(t)},e.extendSeriesModel=function(t){return xv.extend(t)},e.extendChartView=function(t){return Pv.extend(t)},e.setCanvasCreator=function(t){du.$override("createCanvas",t)},e.registerMap=function(t,e,i){e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),it[t]={geoJson:e,specialAreas:i}},e.getMap=function(t){return it[t]},e.dataTool={},function(){for(var t in D_)D_.hasOwnProperty(t)&&(e[t]=D_[t])}()}),L_=(C_.version,C_.dependencies,C_.PRIORITY,C_.init,C_.connect,C_.disConnect,C_.disconnect,C_.dispose,C_.getInstanceByDom,C_.getInstanceById,C_.registerTheme,C_.registerPreprocessor,C_.registerProcessor,C_.registerPostUpdate,C_.registerAction,C_.registerCoordinateSystem,C_.getCoordinateSystemDimensions,C_.registerLayout,C_.registerVisual,C_.registerLoading,C_.extendComponentModel,C_.extendComponentView,C_.extendSeriesModel,C_.extendChartView,C_.setCanvasCreator,C_.registerMap,C_.getMap,C_.dataTool,xv.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return Xy(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}}),Km.retrieveRawValue),P_={getDefaultLabel:function(t,e){var i=t.mapDimension("defaultedLabel",!0),n=i.length;if(1===n)return L_(t,e,i[0]);if(n){for(var a=[],r=0;r<i.length;r++){var o=L_(t,e,i[r]);a.push(o)}return a.join(" ")}}},k_=Fx.createSymbol,O_=Up.parsePercent,R_=P_.getDefaultLabel,N_=Ki.prototype,E_=Ki.getSymbolSize=function(t,e){var i=t.getItemVisual(e,"symbolSize");return i instanceof Array?i.slice():[+i,+i]};N_._createSymbol=function(t,e,i,n,a){this.removeAll();var r=e.getItemVisual(i,"color"),o=k_(t,-1,-1,2,2,r,a);o.attr({z2:100,culling:!0,scale:Ji(n)}),o.drift=function(t,e){this.parent.drift(t,e)},this._symbolType=t,this.add(o)},N_.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},N_.getSymbolPath=function(){return this.childAt(0)},N_.getScale=function(){return this.childAt(0).scale},N_.highlight=function(){this.childAt(0).trigger("emphasis")},N_.downplay=function(){this.childAt(0).trigger("normal")},N_.setZ=function(t,e){var i=this.childAt(0);i.zlevel=t,i.z=e},N_.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},N_.updateData=function(t,e,i){this.silent=!1;var n=t.getItemVisual(e,"symbol")||"circle",a=t.hostModel,r=E_(t,e),o=n!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(n,t,e,r,s)}else{(l=this.childAt(0)).silent=!1,Dp.updateProps(l,{scale:Ji(r)},a,e)}if(this._updateCommon(t,e,r,i),o){var l=this.childAt(0),u=i&&i.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Dp.initProps(l,h,a,e)}this._seriesModel=a};var z_=["itemStyle"],V_=["emphasis","itemStyle"],B_=["label"],G_=["emphasis","label"];N_._updateCommon=function(t,e,i,n){var a=this.childAt(0),r=t.hostModel,o=t.getItemVisual(e,"color");"image"!==a.type&&a.useStyle({strokeNoScale:!0});var s=n&&n.itemStyle,l=n&&n.hoverItemStyle,u=n&&n.symbolRotate,h=n&&n.symbolOffset,c=n&&n.labelModel,d=n&&n.hoverLabelModel,f=n&&n.hoverAnimation,p=n&&n.cursorStyle;if(!n||t.hasItemOption){var g=n&&n.itemModel?n.itemModel:t.getItemModel(e);s=g.getModel(z_).getItemStyle(["color"]),l=g.getModel(V_).getItemStyle(),u=g.getShallow("symbolRotate"),h=g.getShallow("symbolOffset"),c=g.getModel(B_),d=g.getModel(G_),f=g.getShallow("hoverAnimation"),p=g.getShallow("cursor")}else l=du.extend({},l);var m=a.style;a.attr("rotation",(u||0)*Math.PI/180||0),h&&a.attr("position",[O_(h[0],i[0]),O_(h[1],i[1])]),p&&a.attr("cursor",p),a.setColor(o,n&&n.symbolInnerColor),a.setStyle(s);var v=t.getItemVisual(e,"opacity");null!=v&&(m.opacity=v);var y=t.getItemVisual(e,"liftZ"),x=a.__z2Origin;null!=y?null==x&&(a.__z2Origin=a.z2,a.z2+=y):null!=x&&(a.z2=x,a.__z2Origin=null);var _=n&&n.useNameLabel;Dp.setLabelStyle(m,l,c,d,{labelFetcher:r,labelDataIndex:e,defaultText:function(e,i){return _?t.getName(e):R_(t,e)},isRectText:!0,autoColor:o}),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),a.hoverStyle=l,Dp.setHoverStyle(a);var b=Ji(i);if(f&&r.isAnimationEnabled()){var w=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},S=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};a.on("mouseover",w).on("mouseout",S).on("emphasis",w).on("normal",S)}},N_.fadeOut=function(t,e){var i=this.childAt(0);this.silent=i.silent=!0,!(e&&e.keepLabel)&&(i.style.text=null),Dp.updateProps(i,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},du.inherits(Ki,Dp.Group);var H_=Ki,F_=du.isObject,W_=Qi.prototype;W_.updateData=function(t,e){e=en(e);var i=this.group,n=t.hostModel,a=this._data,r=this._symbolCtor,o=nn(t);a||i.removeAll(),t.diff(a).add(function(n){var a=t.getItemLayout(n);if(tn(t,a,n,e)){var s=new r(t,n,o);s.attr("position",a),t.setItemGraphicEl(n,s),i.add(s)}}).update(function(s,l){var u=a.getItemGraphicEl(l),h=t.getItemLayout(s);tn(t,h,s,e)?(u?(u.updateData(t,s,o),Dp.updateProps(u,{position:h},n)):(u=new r(t,s)).attr("position",h),i.add(u),t.setItemGraphicEl(s,u)):i.remove(u)}).remove(function(t){var e=a.getItemGraphicEl(t);e&&e.fadeOut(function(){i.remove(e)})}).execute(),this._data=t},W_.isPersistent=function(){return!0},W_.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){var n=t.getItemLayout(i);e.attr("position",n)})},W_.incrementalPrepareUpdate=function(t){this._seriesScope=nn(t),this._data=null,this.group.removeAll()},W_.incrementalUpdate=function(t,e,i){i=en(i);for(var n=t.start;n<t.end;n++){var a=e.getItemLayout(n);if(tn(e,a,n,i)){var r=new this._symbolCtor(e,n,this._seriesScope);r.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),r.attr("position",a),this.group.add(r),e.setItemGraphicEl(n,r)}}},W_.remove=function(t){var e=this.group,i=this._data;i&&t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var U_=Qi,Z_=Fy.isDimensionStacked,j_=du.map,Y_={prepareDataCoordInfo:function(t,e,i){var n,a=t.getBaseAxis(),r=t.getOtherAxis(a),o=function(t,e){var i=0,n=t.scale.getExtent();return"start"===e?i=n[0]:"end"===e?i=n[1]:n[0]>0?i=n[0]:n[1]<0&&(i=n[1]),i}(r,i),s=a.dim,l=r.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,d=j_(t.dimensions,function(t){return e.mapDimension(t)}),f=e.getCalculationInfo("stackResultDimension");return(n|=Z_(e,d[0]))&&(d[0]=f),(n|=Z_(e,d[1]))&&(d[1]=f),{dataDimsForPoint:d,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!n,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}},getStackedOnPoint:function(t,e,i,n){var a=NaN;t.stacked&&(a=i.get(i.getCalculationInfo("stackedOverDimension"),n)),isNaN(a)&&(a=t.valueStart);var r=t.baseDataOffset,o=[];return o[r]=i.get(t.baseDim,n),o[1-r]=a,e.dataToPoint(o)}},X_=Y_.prepareDataCoordInfo,q_=Y_.getStackedOnPoint,$_=function(t,e,i,n,a,r,o,s){for(var l=function(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t})}).update(function(t,e){i.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){i.push({cmd:"-",idx:t})}).execute(),i}(t,e),u=[],h=[],c=[],d=[],f=[],p=[],g=[],m=X_(a,e,o),v=X_(r,t,s),y=0;y<l.length;y++){var x=l[y],_=!0;switch(x.cmd){case"=":var b=t.getItemLayout(x.idx),w=e.getItemLayout(x.idx1);(isNaN(b[0])||isNaN(b[1]))&&(b=w.slice()),u.push(b),h.push(w),c.push(i[x.idx]),d.push(n[x.idx1]),g.push(e.getRawIndex(x.idx1));break;case"+":S=x.idx,u.push(a.dataToPoint([e.get(m.dataDimsForPoint[0],S),e.get(m.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(q_(m,a,e,S)),d.push(n[S]),g.push(e.getRawIndex(S));break;case"-":var S=x.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(r.dataToPoint([t.get(v.dataDimsForPoint[0],S),t.get(v.dataDimsForPoint[1],S)])),c.push(i[S]),d.push(q_(v,r,t,S)),g.push(M)):_=!1}_&&(f.push(x),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});for(var I=[],A=[],T=[],D=[],C=[],y=0;y<p.length;y++)S=p[y],I[y]=u[S],A[y]=h[S],T[y]=c[S],D[y]=d[S],C[y]=f[S];return{current:I,next:A,stackedOnCurrent:T,stackedOnNext:D,status:C}},K_=pu.min,J_=pu.max,Q_=pu.scaleAndAdd,tb=pu.copy,eb=[],ib=[],nb=[],ab={Polyline:af.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:Mf(af.prototype.brush),buildPath:function(t,e){var i=e.points,n=0,a=i.length,r=on(i,e.smoothConstraint);if(e.connectNulls){for(;a>0&&an(i[a-1]);a--);for(;n<a&&an(i[n]);n++);}for(;n<a;)n+=rn(t,i,n,a,a,1,r.min,r.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Polygon:af.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:Mf(af.prototype.brush),buildPath:function(t,e){var i=e.points,n=e.stackedOnPoints,a=0,r=i.length,o=e.smoothMonotone,s=on(i,e.smoothConstraint),l=on(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&an(i[r-1]);r--);for(;a<r&&an(i[a]);a++);}for(;a<r;){var u=rn(t,i,a,r,r,1,s.min,s.max,e.smooth,o,e.connectNulls);rn(t,n,a+u-1,u,r,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),a+=u+1,t.closePath()}}})},rb=ab.Polyline,ob=ab.Polygon,sb=Up.round,lb=Y_.prepareDataCoordInfo,ub=Y_.getStackedOnPoint,hb=(Pv.extend({type:"line",init:function(){var t=new Dp.Group,e=new U_;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,i){var n=t.coordinateSystem,a=this.group,r=t.getData(),o=t.getModel("lineStyle"),s=t.getModel("areaStyle"),l=r.mapArray(r.getItemLayout),u="polar"===n.type,h=this._coordSys,c=this._symbolDraw,d=this._polyline,f=this._polygon,p=this._lineGroup,g=t.get("animation"),m=!s.isEmpty(),v=s.get("origin"),y=function(t,e,i){if(!i.valueDim)return[];for(var n=[],a=0,r=e.count();a<r;a++)n.push(ub(i,t,e,a));return n}(n,r,lb(n,r,v)),x=t.get("showSymbol"),_=x&&!u&&function(t,e,i){var n=t.get("showAllSymbol"),a="auto"===n;if(!n||a){var r=i.getAxesByScale("ordinal")[0];if(r&&(!a||!function(t,e){var i=t.getExtent(),n=Math.abs(i[1]-i[0])/t.scale.count();isNaN(n)&&(n=0);for(var a=e.count(),r=Math.max(1,Math.round(a/5)),o=0;o<a;o+=r)if(1.5*H_.getSymbolSize(e,o)[t.isHorizontal()?1:0]>n)return!1;return!0}(r,e))){var o=e.mapDimension(r.dim),s={};return du.each(r.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}(t,r,n),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(a.remove(t),b.setItemGraphicEl(e,null))}),x||c.remove(),a.add(p);var w=!u&&t.get("step");d&&h.type===n.type&&w===this._step?(m&&!f?f=this._newPolygon(l,y,n,g):f&&!m&&(p.remove(f),f=this._polygon=null),p.setClipPath(hn(n,!1,!1,t)),x&&c.updateData(r,{isIgnore:_,clipShape:hn(n,!1,!0,t)}),r.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),sn(this._stackedOnPoints,y)&&sn(this._points,l)||(g?this._updateAnimation(r,y,n,i,w,v):(w&&(l=cn(l,n,w),y=cn(y,n,w)),d.setShape({points:l}),f&&f.setShape({points:l,stackedOnPoints:y})))):(x&&c.updateData(r,{isIgnore:_,clipShape:hn(n,!1,!0,t)}),w&&(l=cn(l,n,w),y=cn(y,n,w)),d=this._newPolyline(l,n,g),m&&(f=this._newPolygon(l,y,n,g)),p.setClipPath(hn(n,!0,!1,t)));var S=function(t,e){var i=t.getVisual("visualMeta");if(i&&i.length&&t.count()&&"cartesian2d"===e.type){for(var n,a,r=i.length-1;r>=0;r--){var o=i[r].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(n=l&&l.coordDim)||"y"===n){a=i[r];break}}if(a){var u=e.getAxis(n),h=du.map(a.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),c=h.length,d=a.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),d.reverse());var f=h[0].coord-10,p=h[c-1].coord+10,g=p-f;if(g<.001)return"transparent";du.each(h,function(t){t.offset=(t.coord-f)/g}),h.push({offset:c?h[c-1].offset:.5,color:d[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:d[0]||"transparent"});var m=new Dp.LinearGradient(0,0,0,0,h,!0);return m[n]=f,m[n+"2"]=p,m}}}(r,n)||r.getVisual("color");d.useStyle(du.defaults(o.getLineStyle(),{fill:"none",stroke:S,lineJoin:"bevel"}));var M=t.get("smooth");if(M=ln(t.get("smooth")),d.setShape({smooth:M,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),f){var I=r.getCalculationInfo("stackedOnSeries"),A=0;f.useStyle(du.defaults(s.getAreaStyle(),{fill:S,opacity:.7,lineJoin:"bevel"})),I&&(A=ln(I.get("smooth"))),f.setShape({smooth:M,stackedOnSmooth:A,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=r,this._coordSys=n,this._stackedOnPoints=y,this._points=l,this._step=w,this._valueOrigin=v},dispose:function(){},highlight:function(t,e,i,n){var a=t.getData(),r=Wc.queryDataIndex(a,n);if(!(r instanceof Array)&&null!=r&&r>=0){var o=a.getItemGraphicEl(r);if(!o){var s=a.getItemLayout(r);if(!s)return;(o=new H_(a,r)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,a.setItemGraphicEl(r,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else Pv.prototype.highlight.call(this,t,e,i,n)},downplay:function(t,e,i,n){var a=t.getData(),r=Wc.queryDataIndex(a,n);if(null!=r&&r>=0){var o=a.getItemGraphicEl(r);o&&(o.__temp?(a.setItemGraphicEl(r,null),this.group.remove(o)):o.downplay())}else Pv.prototype.downplay.call(this,t,e,i,n)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new rb({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new ob({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i},_updateAnimation:function(t,e,i,n,a,r){var o=this._polyline,s=this._polygon,l=t.hostModel,u=$_(this._data,t,this._stackedOnPoints,e,this._coordSys,i,this._valueOrigin,r),h=u.current,c=u.stackedOnCurrent,d=u.next,f=u.stackedOnNext;a&&(h=cn(u.current,i,a),c=cn(u.stackedOnCurrent,i,a),d=cn(u.next,i,a),f=cn(u.stackedOnNext,i,a)),o.shape.__points=u.current,o.shape.points=h,Dp.updateProps(o,{shape:{points:d}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),Dp.updateProps(s,{shape:{points:d,stackedOnPoints:f}},l));for(var p=[],g=u.status,m=0;m<g.length;m++){if("="===g[m].cmd){var v=t.getItemGraphicEl(g[m].idx1);v&&p.push({el:v,ptIdx:m})}}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++){p[t].el.attr("position",o.shape.__points[p[t].ptIdx])}})},remove:function(t){var e=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(t,n){t.__temp&&(e.remove(t),i.setItemGraphicEl(n,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}}),function(t,e,i){return{seriesType:t,performRawSeries:!0,reset:function(t,n,a){var r=t.getData(),o=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(r.setVisual({legendSymbol:i||o,symbol:o,symbolSize:s,symbolKeepAspect:l}),!n.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:r.hasItemOption||u?function(e,i){if("function"==typeof s){var n=t.getRawValue(i),a=t.getDataParams(i);e.setItemVisual(i,"symbolSize",s(n,a))}if(e.hasItemOption){var r=e.getItemModel(i),o=r.getShallow("symbol",!0),l=r.getShallow("symbolSize",!0),u=r.getShallow("symbolKeepAspect",!0);null!=o&&e.setItemVisual(i,"symbol",o),null!=l&&e.setItemVisual(i,"symbolSize",l),null!=u&&e.setItemVisual(i,"symbolKeepAspect",u)}}:null}}}}}),cb=du.map,db=Fy.isDimensionStacked,fb=function(t){return{seriesType:t,plan:Mv(),reset:function(t){var e=t.getData(),i=t.coordinateSystem,n=t.pipelineContext.large;if(i){var a=cb(i.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),r=a.length,o=e.getCalculationInfo("stackResultDimension");return db(e,a[0])&&(a[0]=o),db(e,a[1])&&(a[1]=o),r&&{progress:function(t,e){for(var o=t.end-t.start,s=n&&new Float32Array(o*r),l=t.start,u=0,h=[],c=[];l<t.end;l++){var d;if(1===r)f=e.get(a[0],l),d=!isNaN(f)&&i.dataToPoint(f,null,c);else{var f=h[0]=e.get(a[0],l),p=h[1]=e.get(a[1],l);d=!isNaN(f)&&!isNaN(p)&&i.dataToPoint(h,null,c)}n?(s[u++]=d?d[0]:NaN,s[u++]=d?d[1]:NaN):e.setItemLayout(l,d&&d.slice()||[NaN,NaN])}n&&e.setLayout("symbolPoints",s)}}}}}},pb={average:function(t){for(var e=0,i=0,n=0;n<t.length;n++)isNaN(t[n])||(e+=t[n],i++);return 0===i?NaN:e/i},sum:function(t){for(var e=0,i=0;i<t.length;i++)e+=t[i]||0;return e},max:function(t){for(var e=-1/0,i=0;i<t.length;i++)t[i]>e&&(e=t[i]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,i=0;i<t.length;i++)t[i]<e&&(e=t[i]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},gb=function(t,e){return Math.round(t.length/2)},mb=function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,i){var n=t.getData(),a=t.get("sampling"),r=t.coordinateSystem;if("cartesian2d"===r.type&&a){var o=r.getBaseAxis(),s=r.getOtherAxis(o),l=o.getExtent(),u=l[1]-l[0],h=Math.round(n.count()/u);if(h>1){var c;"string"==typeof a?c=pb[a]:"function"==typeof a&&(c=a),c&&t.setData(n.downSample(n.mapDimension(s.dim),1/h,c,gb))}}}}},vb=function(t){this._axes={},this._dimList=[],this.name=t||""};vb.prototype={constructor:vb,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return du.map(this._dimList,function(t){return this._axes[t]},this)},getAxesByScale:function(t){return t=t.toLowerCase(),du.filter(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},a=0;a<i.length;a++){var r=i[a],o=this._axes[r];n[r]=o[e](t[r])}return n}};var yb=vb;dn.prototype={constructor:dn,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,i){var n=this.getAxis("x"),a=this.getAxis("y");return i=i||[],i[0]=n.toGlobalCoord(n.dataToCoord(t[0])),i[1]=a.toGlobalCoord(a.dataToCoord(t[1])),i},clampData:function(t,e){var i=this.getAxis("x").scale,n=this.getAxis("y").scale,a=i.getExtent(),r=n.getExtent(),o=i.parse(t[0]),s=n.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(a[0],a[1]),o),Math.max(a[0],a[1])),e[1]=Math.min(Math.max(Math.min(r[0],r[1]),s),Math.max(r[0],r[1])),e},pointToData:function(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return e=e||[],e[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=n.coordToData(n.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},du.inherits(dn,yb);var xb=dn,_b=function(t,e,i,n,a){c_.call(this,t,e,i),this.type=n||"value",this.position=a||"bottom"};_b.prototype={constructor:_b,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},du.inherits(_b,c_);var bb=_b,wb={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Sb={};Sb.categoryAxis=du.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},wb),Sb.valueAxis=du.merge({boundaryGap:[0,0],splitNumber:5},wb),Sb.timeAxis=du.defaults({scale:!0,min:"dataMin",max:"dataMax"},Sb.valueAxis),Sb.logAxis=du.defaults({scale:!0,logBase:10},Sb.valueAxis);var Mb=Sb,Ib=ng.getLayoutParams,Ab=ng.mergeLayoutParam,Tb=["value","category","time","log"],Db=function(t,e,i,n){du.each(Tb,function(a){e.extend({type:t+"Axis."+a,mergeDefaultAndTheme:function(e,n){var r=this.layoutMode,o=r?Ib(e):{},s=n.getTheme();du.merge(e,s.get(a+"Axis")),du.merge(e,this.getDefaultOption()),e.type=i(t,e),r&&Ab(e,o,r)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=tx.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:du.mergeAll([{},Mb[a+"Axis"],n],!0)})}),ug.registerSubTypeDefaulter(t+"Axis",du.curry(i,t))},Cb=ug.extend({type:"cartesian2dAxis",axis:null,init:function(){Cb.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){Cb.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){Cb.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});du.merge(Cb.prototype,Ox);var Lb={offset:0};Db("x",Cb,fn,Lb),Db("y",Cb,fn,Lb);ug.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var Pb=du.isObject,kb=du.each,Ob=du.map,Rb=du.indexOf,Nb=(du.retrieve,ng.getLayoutRect),Eb=kx.createScaleByModel,zb=kx.ifAxisCrossZero,Vb=kx.niceScaleExtent,Bb=kx.estimateLabelUnionRect,Gb=Fy.getStackedDimension,Hb=gn.prototype;Hb.type="grid",Hb.axisPointerEnabled=!0,Hb.getRect=function(){return this._rect},Hb.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),kb(i.x,function(t){Vb(t.scale,t.model)}),kb(i.y,function(t){Vb(t.scale,t.model)}),kb(i.x,function(t){mn(i,"y",t)}),kb(i.y,function(t){mn(i,"x",t)}),this.resize(this.model,e)},Hb.resize=function(t,e,i){function n(){kb(r,function(t){var e=t.isHorizontal(),i=e?[0,a.width]:[0,a.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),function(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}(t,e?a.x:a.y)})}var a=Nb(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=a;var r=this._axesList;n(),!i&&t.get("containLabel")&&(kb(r,function(t){if(!t.model.get("axisLabel.inside")){var e=Bb(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");a[i]-=e[i]+n,"top"===t.position?a.y+=e.height+n:"left"===t.position&&(a.x+=e.width+n)}}}),n())},Hb.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i)if(i.hasOwnProperty(n))return i[n];return i[e]}},Hb.getAxes=function(){return this._axesList.slice()},Hb.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}Pb(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var n=0,a=this._coordsList;n<a.length;n++)if(a[n].getAxis("x").index===t||a[n].getAxis("y").index===e)return a[n]},Hb.getCartesians=function(){return this._coordsList.slice()},Hb.convertToPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.dataToPoint(i):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(i)):null},Hb.convertFromPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.pointToData(i):n.axis?n.axis.coordToData(n.axis.toLocalCoord(i)):null},Hb._findConvertTarget=function(t,e){var i,n,a=e.seriesModel,r=e.xAxisModel||a&&a.getReferringComponents("xAxis")[0],o=e.yAxisModel||a&&a.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;if(a)i=a.coordinateSystem,Rb(l,i)<0&&(i=null);else if(r&&o)i=this.getCartesian(r.componentIndex,o.componentIndex);else if(r)n=this.getAxis("x",r.componentIndex);else if(o)n=this.getAxis("y",o.componentIndex);else if(s){s.coordinateSystem===this&&(i=this._coordsList[0])}return{cartesian:i,axis:n}},Hb.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},Hb._initCartesian=function(t,e,i){function n(e){return function(i,n){if(pn(i,t)){var s=i.get("position");"x"===e?"top"!==s&&"bottom"!==s&&a[s="bottom"]&&(s="top"===s?"bottom":"top"):"left"!==s&&"right"!==s&&a[s="left"]&&(s="left"===s?"right":"left"),a[s]=!0;var l=new bb(e,Eb(i),[0,0],i.get("type"),s),u="category"===l.type;l.onBand=u&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.grid=this,l.index=n,this._axesList.push(l),r[e][n]=l,o[e]++}}}var a={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=r,kb(r.x,function(e,i){kb(r.y,function(n,a){var r="x"+i+"y"+a,o=new xb(r);o.grid=this,o.model=t,this._coordsMap[r]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(n)},this)},this)},Hb._updateScale=function(t,e){function i(t,e,i){kb(t.mapDimension(e.dim,!0),function(i){e.scale.unionExtentFromData(t,Gb(t,i))})}kb(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(t){if(xn(t)){var n=yn(t),a=n[0],r=n[1];if(!pn(a,e)||!pn(r,e))return;var o=this.getCartesian(a.componentIndex,r.componentIndex),s=t.getData(),l=o.getAxis("x"),u=o.getAxis("y");"list"===s.type&&(i(s,l),i(s,u))}},this)},Hb.getTooltipAxes=function(t){var e=[],i=[];return kb(this.getCartesians(),function(n){var a=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),r=n.getOtherAxis(a);Rb(e,a)<0&&e.push(a),Rb(i,r)<0&&i.push(r)}),{baseAxes:e,otherAxes:i}};var Fb=["xAxis","yAxis"];gn.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,a){var r=new gn(n,t,e);r.name="grid_"+a,r.resize(n,e,!0),n.coordinateSystem=r,i.push(r)}),t.eachSeries(function(t){if(xn(t)){var e=yn(t),i=e[0],n=e[1],a=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=a.getCartesian(i.componentIndex,n.componentIndex)}}),i},gn.dimensions=gn.prototype.dimensions=xb.prototype.dimensions,vm.register("cartesian2d",gn);var Wb=du.retrieve,Ub=du.defaults,Zb=du.extend,jb=du.each,Yb=Up.isRadianAroundZero,Xb=Up.remRadian,qb=Fx.createSymbol,$b=pu.applyTransform,Kb=Math.PI,Jb=function(t,e){this.opt=e,this.axisModel=t,Ub(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new Dp.Group;var i=new Dp.Group({position:e.position.slice(),rotation:e.rotation});i.updateTransform(),this._transform=i.transform,this._dumbGroup=i};Jb.prototype={constructor:Jb,hasBuilder:function(t){return!!Qb[t]},add:function(t){Qb[t].call(this)},getGroup:function(){return this.group}};var Qb={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis.getExtent(),n=this._transform,a=[i[0],0],r=[i[1],0];n&&($b(a,a,n),$b(r,r,n));var o=Zb({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Dp.Line(Dp.subPixelOptimizeLine({anid:"line",shape:{x1:a[0],y1:a[1],x2:r[0],y2:r[1]},style:o,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var s=e.get("axisLine.symbol"),l=e.get("axisLine.symbolSize"),u=e.get("axisLine.symbolOffset")||0;if("number"==typeof u&&(u=[u,u]),null!=s){"string"==typeof s&&(s=[s,s]),"string"!=typeof l&&"number"!=typeof l||(l=[l,l]);var h=l[0],c=l[1];jb([{rotate:t.rotation+Math.PI/2,offset:u[0],r:0},{rotate:t.rotation-Math.PI/2,offset:u[1],r:Math.sqrt((a[0]-r[0])*(a[0]-r[0])+(a[1]-r[1])*(a[1]-r[1]))}],function(e,i){if("none"!==s[i]&&null!=s[i]){var n=qb(s[i],-h/2,-c/2,h,c,o.stroke,!0),r=e.r+e.offset,l=[a[0]+r*Math.cos(t.rotation),a[1]-r*Math.sin(t.rotation)];n.attr({rotation:e.rotate,position:l,silent:!0}),this.group.add(n)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,i=function(t,e,i){var n=e.axis;if(e.get("axisTick.show")&&!n.scale.isBlank()){for(var a=e.getModel("axisTick"),r=a.getModel("lineStyle"),o=a.get("length"),s=n.getTicksCoords(),l=[],u=[],h=t._transform,c=[],d=0;d<s.length;d++){var f=s[d].coord;l[0]=f,l[1]=0,u[0]=f,u[1]=i.tickDirection*o,h&&($b(l,l,h),$b(u,u,h));var p=new Dp.Line(Dp.subPixelOptimizeLine({anid:"tick_"+s[d].tickValue,shape:{x1:l[0],y1:l[1],x2:u[0],y2:u[1]},style:Ub(r.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(p),c.push(p)}return c}}(this,t,e);!function(t,e,i){var n=t.get("axisLabel.showMinLabel"),a=t.get("axisLabel.showMaxLabel");e=e||[],i=i||[];var r=e[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=i[0],h=i[1],c=i[i.length-1],d=i[i.length-2];!1===n?(wn(r),wn(u)):Sn(r,o)&&(n?(wn(o),wn(h)):(wn(r),wn(u))),!1===a?(wn(s),wn(c)):Sn(l,s)&&(a?(wn(l),wn(d)):(wn(s),wn(c)))}(t,function(t,e,i){var n=e.axis;if(Wb(i.axisLabelShow,e.get("axisLabel.show"))&&!n.scale.isBlank()){var a=e.getModel("axisLabel"),r=a.get("margin"),o=n.getViewLabels(),s=(Wb(i.labelRotate,a.get("rotate"))||0)*Kb/180,l=tw(i.rotation,s,i.labelDirection),u=e.getCategories(!0),h=[],c=bn(e),d=e.get("triggerEvent");return jb(o,function(o,s){var f=o.tickValue,p=o.formattedLabel,g=o.rawLabel,m=a;u&&u[f]&&u[f].textStyle&&(m=new Vp(u[f].textStyle,a,e.ecModel));var v=m.getTextColor()||e.get("axisLine.lineStyle.color"),y=[n.dataToCoord(f),i.labelOffset+i.labelDirection*r],x=new Dp.Text({anid:"label_"+f,position:y,rotation:l.rotation,silent:c,z2:10});Dp.setTextStyle(x.style,m,{text:p,textAlign:m.getShallow("align",!0)||l.textAlign,textVerticalAlign:m.getShallow("verticalAlign",!0)||m.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof v?v("category"===n.type?g:"value"===n.type?f+"":f,s):v}),d&&(x.eventData=_n(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),h.push(x),t.group.add(x),x.decomposeTransform()}),h}}(this,t,e),i)},axisName:function(){var t=this.opt,e=this.axisModel,i=Wb(t.axisName,e.get("name"));if(i){var n,a=e.get("nameLocation"),r=t.nameDirection,o=e.getModel("nameTextStyle"),s=e.get("nameGap")||0,l=this.axisModel.axis.getExtent(),u=l[0]>l[1]?-1:1,h=["start"===a?l[0]-u*s:"end"===a?l[1]+u*s:(l[0]+l[1])/2,Mn(a)?t.labelOffset+r*s:0],c=e.get("nameRotate");null!=c&&(c=c*Kb/180);var d;Mn(a)?n=tw(t.rotation,null!=c?c:t.rotation,r):(n=function(t,e,i,n){var a,r,o=Xb(i-t.rotation),s=n[0]>n[1],l="start"===e&&!s||"start"!==e&&s;return Yb(o-Kb/2)?(r=l?"bottom":"top",a="center"):Yb(o-1.5*Kb)?(r=l?"top":"bottom",a="center"):(r="middle",a=o<1.5*Kb&&o>Kb/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:a,textVerticalAlign:r}}(t,a,c||0,l),null!=(d=t.axisNameAvailableWidth)&&(d=Math.abs(d/Math.sin(n.rotation)),!isFinite(d)&&(d=null)));var f=o.getFont(),p=e.get("nameTruncate",!0)||{},g=p.ellipsis,m=Wb(t.nameTruncateMaxWidth,p.maxWidth,d),v=null!=g&&null!=m?qp.truncateText(i,m,f,g,{minChar:2,placeholder:p.placeholder}):i,y=e.get("tooltip",!0),x=e.mainType,_={componentType:x,name:i,$vars:["name"]};_[x+"Index"]=e.componentIndex;var b=new Dp.Text({anid:"name",__fullText:i,__truncatedText:v,position:h,rotation:n.rotation,silent:bn(e),z2:1,tooltip:y&&y.show?Zb({content:i,formatter:function(){return i},formatterParams:_},y):null});Dp.setTextStyle(b.style,o,{text:v,textFont:f,textFill:o.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:n.textAlign,textVerticalAlign:n.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=_n(e),b.eventData.targetType="axisName",b.eventData.name=i),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},tw=Jb.innerTextLayout=function(t,e,i){var n,a,r=Xb(e-t);return Yb(r)?(a=i>0?"top":"bottom",n="center"):Yb(r-Kb)?(a=i>0?"bottom":"top",n="center"):(a="middle",n=r>0&&r<Kb?i>0?"right":"left":i>0?"left":"right"),{rotation:r,textAlign:n,textVerticalAlign:a}},ew=Jb,iw=du.each,nw=du.curry,aw={collect:function(t,e){var i={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return function(t,e,i){var n=e.getComponent("tooltip"),a=e.getComponent("axisPointer"),r=a.get("link",!0)||[],o=[];iw(i.getCoordinateSystems(),function(i){function s(n,s,l){var c=l.model.getModel("axisPointer",a),d=c.get("show");if(d&&("auto"!==d||n||Tn(c))){null==s&&(s=c.get("triggerTooltip"));var f=(c=n?function(t,e,i,n,a,r){var o=e.getModel("axisPointer"),s={};iw(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){s[t]=du.clone(o.get(t))}),s.snap="category"!==t.type&&!!r,"cross"===o.get("type")&&(s.type="line");var l=s.label||(s.label={});if(null==l.show&&(l.show=!1),"cross"===a){var u=o.get("label.show");if(l.show=null==u||u,!r){var h=s.lineStyle=o.get("crossStyle");h&&du.defaults(l,h.textStyle)}}return t.model.getModel("axisPointer",new Vp(s,i,n))}(l,h,a,e,n,s):c).get("snap"),p=Dn(l.model),g=s||f||"category"===l.type,m=t.axesInfo[p]={key:p,axis:l,coordSys:i,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:f,useHandle:Tn(c),seriesModels:[]};u[p]=m,t.seriesInvolved|=g;var v=function(t,e){for(var i=e.model,n=e.dim,a=0;a<t.length;a++){var r=t[a]||{};if(In(r[n+"AxisId"],i.id)||In(r[n+"AxisIndex"],i.componentIndex)||In(r[n+"AxisName"],i.name))return a}}(r,l);if(null!=v){var y=o[v]||(o[v]={axesInfo:{}});y.axesInfo[p]=m,y.mapper=r[v].mapper,m.linkGroup=y}}}if(i.axisPointerEnabled){var l=Dn(i.model),u=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=i;var h=i.model.getModel("tooltip",n);if(iw(i.getAxes(),nw(s,!1,null)),i.getTooltipAxes&&n&&h.get("show")){var c="axis"===h.get("trigger"),d="cross"===h.get("axisPointer.type"),f=i.getTooltipAxes(h.get("axisPointer.axis"));(c||d)&&iw(f.baseAxes,nw(s,!d||"cross",c)),d&&iw(f.otherAxes,nw(s,"cross",!1))}}})}(i,t,e),i.seriesInvolved&&function(t,e){e.eachSeries(function(e){var i=e.coordinateSystem,n=e.get("tooltip.trigger",!0),a=e.get("tooltip.show",!0);i&&"none"!==n&&!1!==n&&"item"!==n&&!1!==a&&!1!==e.get("axisPointer.show",!0)&&iw(t.coordSysAxesInfo[Dn(i.model)],function(t){var n=t.axis;i.getAxis(n.dim)===n&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}(i,t),i},fixValue:function(t){var e=An(t);if(e){var i=e.axisPointerModel,n=e.axis.scale,a=i.option,r=i.get("status"),o=i.get("value");null!=o&&(o=n.parse(o));var s=Tn(i);null==r&&(a.status=s?"show":"hide");var l=n.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),a.value=o,s&&(a.status=e.axis.scale.isBlank()?"hide":"show")}},getAxisInfo:An,getAxisPointerModel:function(t){var e=An(t);return e&&e.axisPointerModel},makeKey:Dn},rw=C_.extendComponentView({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,i,n){this.axisPointerClass&&aw.fixValue(t),rw.superApply(this,"render",arguments),Cn(this,t,0,i,0,!0)},updateAxisPointer:function(t,e,i,n,a){Cn(this,t,0,i,0,!1)},remove:function(t,e){var i=this._axisPointer;i&&i.remove(e),rw.superApply(this,"remove",arguments)},dispose:function(t,e){Ln(this,e),rw.superApply(this,"dispose",arguments)}}),ow=[];rw.registerAxisPointerClass=function(t,e){ow[t]=e},rw.getAxisPointerClass=function(t){return t&&ow[t]};var sw=rw,lw={layout:function(t,e,i){i=i||{};var n=t.coordinateSystem,a=e.axis,r={},o=a.getAxesOnZeroOf()[0],s=a.position,l=o?"onZero":s,u=a.dim,h=n.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],d={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,p="x"===u?[c[2]-f,c[3]+f]:[c[0]-f,c[1]+f];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[d.onZero]=Math.max(Math.min(g,p[1]),p[0])}r.position=["y"===u?p[d[l]]:c[0],"x"===u?p[d[l]]:c[3]],r.rotation=Math.PI/2*("x"===u?0:1),r.labelDirection=r.tickDirection=r.nameDirection={top:-1,bottom:1,left:-1,right:1}[s],r.labelOffset=o?p[d[s]]-p[d.onZero]:0,e.get("axisTick.inside")&&(r.tickDirection=-r.tickDirection),du.retrieve(i.labelInside,e.get("axisLabel.inside"))&&(r.labelDirection=-r.labelDirection);var m=e.get("axisLabel.rotate");return r.labelRotate="top"===l?-m:m,r.z2=1,r}},uw=["axisLine","axisTickLabel","axisName"],hw=["splitArea","splitLine"],cw=sw.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,n){this.group.removeAll();var a=this._axisGroup;if(this._axisGroup=new Dp.Group,this.group.add(this._axisGroup),t.get("show")){var r=t.getCoordSysModel(),o=lw.layout(r,t),s=new ew(t,o);du.each(uw,s.add,s),this._axisGroup.add(s.getGroup()),du.each(hw,function(e){t.get(e+".show")&&this["_"+e](t,r)},this),Dp.groupTransition(a,this._axisGroup,t),cw.superCall(this,"render",t,e,i,n)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitLine"),a=n.getModel("lineStyle"),r=a.get("color");r=du.isArray(r)?r:[r];for(var o=e.coordinateSystem.getRect(),s=i.isHorizontal(),l=0,u=i.getTicksCoords({tickModel:n}),h=[],c=[],d=a.getLineStyle(),f=0;f<u.length;f++){var p=i.toGlobalCoord(u[f].coord);s?(h[0]=p,h[1]=o.y,c[0]=p,c[1]=o.y+o.height):(h[0]=o.x,h[1]=p,c[0]=o.x+o.width,c[1]=p);var g=l++%r.length,m=u[f].tickValue;this._axisGroup.add(new Dp.Line(Dp.subPixelOptimizeLine({anid:null!=m?"line_"+u[f].tickValue:null,shape:{x1:h[0],y1:h[1],x2:c[0],y2:c[1]},style:du.defaults({stroke:r[g]},d),silent:!0})))}}},_splitArea:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitArea"),a=n.getModel("areaStyle"),r=a.get("color"),o=e.coordinateSystem.getRect(),s=i.getTicksCoords({tickModel:n,clamp:!0});if(s.length){var l=r.length,u=this._splitAreaColors,h=du.createHashMap(),c=0;if(u)for(g=0;g<s.length;g++){var d=u.get(s[g].tickValue);if(null!=d){c=(d+(l-1)*g)%l;break}}var f=i.toGlobalCoord(s[0].coord),p=a.getAreaStyle();r=du.isArray(r)?r:[r];for(var g=1;g<s.length;g++){var m,v,y,x,_=i.toGlobalCoord(s[g].coord);i.isHorizontal()?(m=f,v=o.y,y=_-m,x=o.height,f=m+y):(m=o.x,v=f,y=o.width,f=v+(x=_-v));var b=s[g-1].tickValue;null!=b&&h.set(b,c),this._axisGroup.add(new Dp.Rect({anid:null!=b?"area_"+b:null,shape:{x:m,y:v,width:y,height:x},style:du.defaults({fill:r[c]},p),silent:!0})),c=(c+1)%l}this._splitAreaColors=h}}}});cw.extend({type:"xAxis"}),cw.extend({type:"yAxis"}),C_.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new Dp.Rect({shape:t.coordinateSystem.getRect(),style:du.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),C_.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),C_.registerVisual(hb("line","circle","line")),C_.registerLayout(fb("line")),C_.registerProcessor(C_.PRIORITY.PROCESSOR.STATISTIC,mb("line"));var dw=xv.extend({type:"series.__base_bar__",getInitialData:function(t,e){return Xy(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var i=e.dataToPoint(e.clampData(t)),n=this.getData(),a=n.getLayout("offset"),r=n.getLayout("size");return i[e.getBaseAxis().isHorizontal()?0:1]+=a+r/2,i}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:5e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}),fw=(dw.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}}),P_.getDefaultLabel),pw={setLabel:function(t,e,i,n,a,r,o){var s=i.getModel("label"),l=i.getModel("emphasis.label");Dp.setLabelStyle(t,e,s,l,{labelFetcher:a,labelDataIndex:r,defaultText:fw(a.getData(),r),isRectText:!0,autoColor:n}),Pn(t),Pn(e)}},gw=Xc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),mw={getBarItemStyle:function(t){var e=gw(this,t);if(this.getBorderLineDash){var i=this.getBorderLineDash();i&&(e.lineDash=i)}return e}},vw=pw.setLabel,yw=["itemStyle","barBorderWidth"];du.extend(Vp.prototype,mw);C_.extendChartView({type:"bar",render:function(t,e,i){this._updateDrawMode(t);var n=t.get("coordinateSystem");return"cartesian2d"!==n&&"polar"!==n||(this._isLargeDraw?this._renderLarge(t,e,i):this._renderNormal(t,e,i)),this.group},incrementalPrepareRender:function(t,e,i){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,i,n){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,i){var n,a=this.group,r=t.getData(),o=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?n=l.isHorizontal():"polar"===s.type&&(n="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;r.diff(o).add(function(e){if(r.hasValue(e)){var i=r.getItemModel(e),o=_w[s.type](r,e,i),l=xw[s.type](r,e,i,o,n,u);r.setItemGraphicEl(e,l),a.add(l),Rn(l,r,e,i,o,t,n,"polar"===s.type)}}).update(function(e,i){var l=o.getItemGraphicEl(i);if(r.hasValue(e)){var h=r.getItemModel(e),c=_w[s.type](r,e,h);l?Dp.updateProps(l,{shape:c},u,e):l=xw[s.type](r,e,h,c,n,u,!0),r.setItemGraphicEl(e,l),a.add(l),Rn(l,r,e,h,c,t,n,"polar"===s.type)}else a.remove(l)}).remove(function(t){var e=o.getItemGraphicEl(t);"cartesian2d"===s.type?e&&kn(t,u,e):e&&On(t,u,e)}).execute(),this._data=r},_renderLarge:function(t,e,i){this._clear(),Nn(t,this.group)},_incrementalRenderLarge:function(t,e){Nn(e,this.group,!0)},dispose:du.noop,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,i=this._data;t&&t.get("animation")&&i&&!this._isLargeDraw?i.eachItemGraphicEl(function(e){"sector"===e.type?On(e.dataIndex,t,e):kn(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var xw={cartesian2d:function(t,e,i,n,a,r,o){var s=new Dp.Rect({shape:du.extend({},n)});if(r){var l=s.shape,u=a?"height":"width",h={};l[u]=0,h[u]=n[u],Dp[o?"updateProps":"initProps"](s,{shape:h},r,e)}return s},polar:function(t,e,i,n,a,r,o){var s=n.startAngle<n.endAngle,l=new Dp.Sector({shape:du.defaults({clockwise:s},n)});if(r){var u=l.shape,h=a?"r":"endAngle",c={};u[h]=a?0:n.startAngle,c[h]=n[h],Dp[o?"updateProps":"initProps"](l,{shape:c},r,e)}return l}},_w={cartesian2d:function(t,e,i){var n=t.getItemLayout(e),a=function(t,e){var i=t.get(yw)||0;return Math.min(i,Math.abs(e.width),Math.abs(e.height))}(i,n),r=n.width>0?1:-1,o=n.height>0?1:-1;return{x:n.x+r*a/2,y:n.y+o*a/2,width:n.width-r*a,height:n.height-o*a}},polar:function(t,e,i){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}},bw=af.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var i=e.points,n=this.__startPoint,a=this.__valueIdx,r=0;r<i.length;r+=2)n[this.__valueIdx]=i[r+a],t.moveTo(n[0],n[1]),t.lineTo(i[r],i[r+1])}}),ww=fx.layout,Sw=fx.largeLayout;C_.registerLayout(du.curry(ww,"bar")),C_.registerLayout(Sw),C_.registerVisual({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Mw=du.extend,Iw=du.isArray,Aw=function(t,e,i){e=Iw(e)&&{coordDimensions:e}||Mw({},e);var n=t.getSource(),a=By(n,e),r=new Ty(a,t);return r.initData(n,i),r},Tw={updateSelectedMap:function(t){this._targetList=du.isArray(t)?t.slice():[],this._selectTargetMap=du.reduce(t||[],function(t,e){return t.set(e.name,e),t},du.createHashMap())},select:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),i&&(i.selected=!0)},unSelect:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);i&&(i.selected=!1)},toggleSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=i)return this[i.selected?"unSelect":"select"](t,e),i.selected},isSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return i&&i.selected}},Dw=Up.getPercentWithPrecision,Cw=Km.retrieveRawAttr,Lw=C_.extendSeriesModel({type:"series.pie",init:function(t){Lw.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Lw.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Aw(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),i=[],n=0,a=t.count();n<a;n++)i.push({name:t.getName(n),value:t.get(e,n),selected:Cw(t,n,"selected")});return i},getDataParams:function(t){var e=this.getData(),i=Lw.superCall(this,"getDataParams",t),n=[];return e.each(e.mapDimension("value"),function(t){n.push(t)}),i.percent=Dw(n,t,e.hostModel.get("percentPrecision")),i.$vars.push("percent"),i},_defaultLabelLine:function(t){Wc.defaultEmphasis(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});du.mixin(Lw,Tw);var Pw=zn.prototype;Pw.updateData=function(t,e,i){function n(){r.stopAnimation(!0),r.animateTo({shape:{r:l.r+o.get("hoverOffset")}},300,"elasticOut")}function a(){r.stopAnimation(!0),r.animateTo({shape:{r:l.r}},300,"elasticOut")}var r=this.childAt(0),o=t.hostModel,s=t.getItemModel(e),l=t.getItemLayout(e),u=du.extend({},l);if(u.label=null,i){r.setShape(u);"scale"===o.getShallow("animationType")?(r.shape.r=l.r0,Dp.initProps(r,{shape:{r:l.r}},o,e)):(r.shape.endAngle=l.startAngle,Dp.updateProps(r,{shape:{endAngle:l.endAngle}},o,e))}else Dp.updateProps(r,{shape:u},o,e);var h=t.getItemVisual(e,"color");r.useStyle(du.defaults({lineJoin:"bevel",fill:h},s.getModel("itemStyle").getItemStyle())),r.hoverStyle=s.getModel("emphasis.itemStyle").getItemStyle();var c=s.getShallow("cursor");c&&r.attr("cursor",c),En(this,t.getItemLayout(e),o.isSelected(null,e),o.get("selectedOffset"),o.get("animation")),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),s.get("hoverAnimation")&&o.isAnimationEnabled()&&r.on("mouseover",n).on("mouseout",a).on("emphasis",n).on("normal",a),this._updateLabel(t,e),Dp.setHoverStyle(this)},Pw._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),a=t.hostModel,r=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Dp.updateProps(i,{shape:{points:o.linePoints||[[o.x,o.y],[o.x,o.y],[o.x,o.y]]}},a,e),Dp.updateProps(n,{style:{x:o.x,y:o.y}},a,e),n.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=r.getModel("label"),u=r.getModel("emphasis.label"),h=r.getModel("labelLine"),c=r.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");Dp.setLabelStyle(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),i.setShape({smooth:d})},du.inherits(zn,Dp.Group);Pv.extend({type:"pie",init:function(){var t=new Dp.Group;this._sectorGroup=t},render:function(t,e,i,n){if(!n||n.from!==this.uid){var a=t.getData(),r=this._data,o=this.group,s=e.get("animation"),l=!r,u=t.get("animationType"),h=du.curry(function(t,e,i,n){var a=e.getData(),r=this.dataIndex,o=a.getName(r),s=e.get("selectedOffset");n.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),a.each(function(t){En(a.getItemGraphicEl(t),a.getItemLayout(t),e.isSelected(a.getName(t)),s,i)})},this.uid,t,s,i),c=t.get("selectedMode");if(a.diff(r).add(function(t){var e=new zn(a,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",h),a.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var i=r.getItemGraphicEl(e);i.updateData(a,t),i.off("click"),c&&i.on("click",h),o.add(i),a.setItemGraphicEl(t,i)}).remove(function(t){var e=r.getItemGraphicEl(t);o.remove(e)}).execute(),s&&l&&a.count()>0&&"scale"!==u){var d=a.getItemLayout(0),f=Math.max(i.getWidth(),i.getHeight())/2,p=du.bind(o.removeClipPath,o);o.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t))}this._data=a}},dispose:function(){},_createClipPath:function(t,e,i,n,a,r,o){var s=new Dp.Sector({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:a}});return Dp.initProps(s,{shape:{endAngle:n+(a?1:-1)*Math.PI*2}},o,r),s},containPoint:function(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,a=t[1]-i.cy,r=Math.sqrt(n*n+a*a);return r<=i.r&&r>=i.r0}}});var kw=function(t,e){du.each(e,function(e){e.update="updateView",C_.registerAction(e,function(i,n){var a={};return n.eachComponent({mainType:"series",subType:t,query:i},function(t){t[e.method]&&t[e.method](i.name,i.dataIndex);var n=t.getData();n.each(function(e){var i=n.getName(e);a[i]=t.isSelected(i)||!1})}),{name:i.name,selected:a}})})},Ow=du.createHashMap,Rw=function(t){return{getTargetSeries:function(e){var i={},n=Ow();return e.eachSeriesByType(t,function(t){t.__paletteScope=i,n.set(t.uid,t)}),n},reset:function(t,e){var i=t.getRawData(),n={},a=t.getData();a.each(function(t){var e=a.getRawIndex(t);n[e]=t}),i.each(function(e){var r=n[e],o=null!=r&&a.getItemVisual(r,"color",!0);if(o)i.setItemVisual(e,"color",o);else{var s=i.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(i.getName(e)||e+"",t.__paletteScope,i.count());i.setItemVisual(e,"color",s),null!=r&&a.setItemVisual(r,"color",s)}})}}},Nw=function(t,e,i,n){var a,r,o=t.getData(),s=[],l=!1;o.each(function(i){var n,u,h,c,d=o.getItemLayout(i),f=o.getItemModel(i),p=f.getModel("label"),g=p.get("position")||f.get("emphasis.label.position"),m=f.getModel("labelLine"),v=m.get("length"),y=m.get("length2"),x=(d.startAngle+d.endAngle)/2,_=Math.cos(x),b=Math.sin(x);a=d.cx,r=d.cy;var w="inside"===g||"inner"===g;if("center"===g)n=d.cx,u=d.cy,c="center";else{var S=(w?(d.r+d.r0)/2*_:d.r*_)+a,M=(w?(d.r+d.r0)/2*b:d.r*b)+r;if(n=S+3*_,u=M+3*b,!w){var I=S+_*(v+e-d.r),A=M+b*(v+e-d.r),T=I+(_<0?-1:1)*y,D=A;n=T+(_<0?-5:5),u=D,h=[[S,M],[I,A],[T,D]]}c=w?"center":_>0?"left":"right"}var C=p.getFont(),L=p.get("rotate")?_<0?-x+Math.PI:-x:0,P=t.getFormattedLabel(i,"normal")||o.getName(i),k=jh.getBoundingRect(P,C,c,"top");l=!!L,d.label={x:n,y:u,position:g,height:k.height,len:v,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:L,inside:w},w||s.push(d.label)}),!l&&t.get("avoidLabelOverlap")&&function(t,e,i,n,a,r){for(var o=[],s=[],l=0;l<t.length;l++)t[l].x<e?o.push(t[l]):s.push(t[l]);for(Vn(s,e,i,n,1,0,r),Vn(o,e,i,n,-1,0,r),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h}}}(s,a,r,e,0,n)},Ew=Up.parsePercent,zw=Up.linearMap,Vw=2*Math.PI,Bw=Math.PI/180,Gw=function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.getData(),n=e.mapDimension("value"),a=t.get("center"),r=t.get("radius");du.isArray(r)||(r=[0,r]),du.isArray(a)||(a=[a,a]);var o=i.getWidth(),s=i.getHeight(),l=Math.min(o,s),u=Ew(a[0],o),h=Ew(a[1],s),c=Ew(r[0],l/2),d=Ew(r[1],l/2),f=-t.get("startAngle")*Bw,p=t.get("minAngle")*Bw,g=0;e.each(n,function(t){!isNaN(t)&&g++});var m=e.getSum(n),v=Math.PI/(m||g)*2,y=t.get("clockwise"),x=t.get("roseType"),_=t.get("stillShowZeroSum"),b=e.getDataExtent(n);b[0]=0;var w=Vw,S=0,M=f,I=y?1:-1;if(e.each(n,function(t,i){var n;if(isNaN(t))e.setItemLayout(i,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:h,r0:c,r:x?NaN:d});else{(n="area"!==x?0===m&&_?v:t*v:Vw/g)<p?(n=p,w-=p):S+=t;var a=M+I*n;e.setItemLayout(i,{angle:n,startAngle:M,endAngle:a,clockwise:y,cx:u,cy:h,r0:c,r:x?zw(t,b,[c,d]):d}),M=a}}),w<Vw&&g)if(w<=.001){var A=Vw/g;e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i);n.angle=A,n.startAngle=f+I*i*A,n.endAngle=f+I*(i+1)*A}})}else v=w/S,M=f,e.each(n,function(t,i){if(!isNaN(t)){var n=e.getItemLayout(i),a=n.angle===p?p:t*v;n.startAngle=M,n.endAngle=M+I*a,M+=I*a}});Nw(t,d,o,s)})},Hw=function(t){return{seriesType:t,reset:function(t,e){var i=e.findComponents({mainType:"legend"});if(i&&i.length){var n=t.getData();n.filterSelf(function(t){for(var e=n.getName(t),a=0;a<i.length;a++)if(!i[a].isSelected(e))return!1;return!0})}}}};kw("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),C_.registerVisual(Rw("pie")),C_.registerLayout(du.curry(Gw,"pie")),C_.registerProcessor(Hw("pie"));xv.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(t,e){return Xy(this.getSource(),this)},brushSelector:"point",getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8}}});var Fw=Fx.createSymbol,Ww=Dp.extendShape({shape:{points:null},symbolProxy:null,buildPath:function(t,e){var i=e.points,n=e.size,a=this.symbolProxy,r=a.shape;if(!((t.getContext?t.getContext():t)&&n[0]<4))for(var o=0;o<i.length;){var s=i[o++],l=i[o++];isNaN(s)||isNaN(l)||(r.x=s-n[0]/2,r.y=l-n[1]/2,r.width=n[0],r.height=n[1],a.buildPath(t,r,!0))}},afterBrush:function(t){var e=this.shape,i=e.points,n=e.size;if(n[0]<4){this.setTransform(t);for(var a=0;a<i.length;){var r=i[a++],o=i[a++];isNaN(r)||isNaN(o)||t.fillRect(r-n[0]/2,o-n[1]/2,n[0],n[1])}this.restoreTransform(t)}},findDataIndex:function(t,e){for(var i=this.shape,n=i.points,a=i.size,r=Math.max(a[0],4),o=Math.max(a[1],4),s=n.length/2-1;s>=0;s--){var l=2*s,u=n[l]-r/2,h=n[l+1]-o/2;if(t>=u&&e>=h&&t<=u+r&&e<=h+o)return s}return-1}}),Uw=Bn.prototype;Uw.isPersistent=function(){return!this._incremental},Uw.updateData=function(t){this.group.removeAll();var e=new Ww({rectHover:!0,cursor:"default"});e.setShape({points:t.getLayout("symbolPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},Uw.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("symbolPoints");this.group.eachChild(function(t){if(null!=t.startIndex){var i=2*(t.endIndex-t.startIndex),n=4*t.startIndex*2;e=new Float32Array(e.buffer,n,i)}t.setShape("points",e)})}},Uw.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new op({silent:!0})),this.group.add(this._incremental)):this._incremental=null},Uw.incrementalUpdate=function(t,e){var i;this._incremental?(i=new Ww,this._incremental.addDisplayable(i,!0)):((i=new Ww({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end})).incremental=!0,this.group.add(i)),i.setShape({points:e.getLayout("symbolPoints")}),this._setCommon(i,e,!!this._incremental)},Uw._setCommon=function(t,e,i){var n=e.hostModel,a=e.getVisual("symbolSize");t.setShape("size",a instanceof Array?a:[a,a]),t.symbolProxy=Fw(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var r=t.shape.size[0]<4;t.useStyle(n.getModel("itemStyle").getItemStyle(r?["color","shadowBlur","shadowColor"]:["color"]));var o=e.getVisual("color");o&&t.setColor(o),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>=0&&(t.dataIndex=i+(t.startIndex||0))}))},Uw.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},Uw._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var Zw=Bn;C_.extendChartView({type:"scatter",render:function(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).updateData(n),this._finished=!0},incrementalPrepareRender:function(t,e,i){var n=t.getData();this._updateSymbolDraw(n,t).incrementalPrepareUpdate(n),this._finished=!1},incrementalRender:function(t,e,i){this._symbolDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t,e,i){var n=t.getData();if(this.group.dirty(),!this._finished||n.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var a=fb().reset(t);a.progress&&a.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n)},_updateSymbolDraw:function(t,e){var i=this._symbolDraw,n=e.pipelineContext.large;return i&&n===this._isLargeDraw||(i&&i.remove(),i=this._symbolDraw=n?new Zw:new U_,this._isLargeDraw=n,this.group.removeAll()),this.group.add(i.group),i},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},dispose:function(){}}),C_.registerVisual(hb("scatter","circle")),C_.registerLayout(fb("scatter")),du.inherits(Gn,c_);var jw=Gn,Yw=kx.getScaleExtent,Xw=kx.niceScaleExtent;Hn.prototype.getIndicatorAxes=function(){return this._indicatorAxes},Hn.prototype.dataToPoint=function(t,e){var i=this._indicatorAxes[e];return this.coordToPoint(i.dataToCoord(t),e)},Hn.prototype.coordToPoint=function(t,e){var i=this._indicatorAxes[e].angle;return[this.cx+t*Math.cos(i),this.cy-t*Math.sin(i)]},Hn.prototype.pointToData=function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=Math.sqrt(e*e+i*i);e/=n,i/=n;for(var a,r=Math.atan2(-i,e),o=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var u=this._indicatorAxes[l],h=Math.abs(r-u.angle);h<o&&(a=u,s=l,o=h)}return[s,+(a&&a.coodToData(n))]},Hn.prototype.resize=function(t,e){var i=t.get("center"),n=e.getWidth(),a=e.getHeight(),r=Math.min(n,a)/2;this.cx=Up.parsePercent(i[0],n),this.cy=Up.parsePercent(i[1],a),this.startAngle=t.get("startAngle")*Math.PI/180,this.r=Up.parsePercent(t.get("radius"),r),du.each(this._indicatorAxes,function(t,e){t.setExtent(0,this.r);var i=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;i=Math.atan2(Math.sin(i),Math.cos(i)),t.angle=i},this)},Hn.prototype.update=function(t,e){function i(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),i=t/e;return 2===i?i=5:i*=2,i*e}var n=this._indicatorAxes,a=this._model;du.each(n,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeriesByType("radar",function(e,i){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===a){var r=e.getData();du.each(n,function(t){t.scale.unionExtentFromData(r,r.mapDimension(t.dim))})}},this);var r=a.get("splitNumber");du.each(n,function(t,e){var n=Yw(t.scale,t.model);Xw(t.scale,t.model);var a=t.model,o=t.scale,s=a.getMin(),l=a.getMax(),u=o.getInterval();if(null!=s&&null!=l)o.setExtent(+s,+l),o.setInterval((l-s)/r);else if(null!=s){var h;do{h=s+u*r,o.setExtent(+s,h),o.setInterval(u),u=i(u)}while(h<n[1]&&isFinite(h)&&isFinite(n[1]))}else if(null!=l){var c;do{c=l-u*r,o.setExtent(c,+l),o.setInterval(u),u=i(u)}while(c>n[0]&&isFinite(c)&&isFinite(n[0]))}else{o.getTicks().length-1>r&&(u=i(u));var d=Math.round((n[0]+n[1])/2/u)*u,f=Math.round(r/2);o.setExtent(Up.round(d-f*u),Up.round(d+(r-f)*u)),o.setInterval(u)}})},Hn.dimensions=[],Hn.create=function(t,e){var i=[];return t.eachComponent("radar",function(n){var a=new Hn(n,t,e);i.push(a),n.coordinateSystem=a}),t.eachSeriesByType("radar",function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("radarIndex")||0])}),i},vm.register("radar",Hn);var qw=Mb.valueAxis,$w=(C_.extendComponentModel({type:"radar",optionUpdated:function(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),i=this.get("scale"),n=this.get("axisLine"),a=this.get("axisTick"),r=this.get("axisLabel"),o=this.get("name"),s=this.get("name.show"),l=this.get("name.formatter"),u=this.get("nameGap"),h=this.get("triggerEvent"),c=du.map(this.get("indicator")||[],function(c){null!=c.max&&c.max>0&&!c.min?c.min=0:null!=c.min&&c.min<0&&!c.max&&(c.max=0);var d=o;if(null!=c.color&&(d=du.defaults({color:c.color},o)),c=du.merge(du.clone(c),{boundaryGap:t,splitNumber:e,scale:i,axisLine:n,axisTick:a,axisLabel:r,name:c.text,nameLocation:"end",nameGap:u,nameTextStyle:d,triggerEvent:h},!1),s||(c.name=""),"string"==typeof l){var f=c.name;c.name=l.replace("{value}",null!=f?f:"")}else"function"==typeof l&&(c.name=l(c.name,c));var p=du.extend(new Vp(c,null,this.ecModel),Ox);return p.mainType="radar",p.componentIndex=this.componentIndex,p},this);this.getIndicatorModels=function(){return c}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:du.merge({lineStyle:{color:"#bbb"}},qw.axisLine),axisLabel:Fn(qw.axisLabel,!1),axisTick:Fn(qw.axisTick,!1),splitLine:Fn(qw.splitLine,!0),splitArea:Fn(qw.splitArea,!0),indicator:[]}}),["axisLine","axisTickLabel","axisName"]),Kw=(C_.extendComponentView({type:"radar",render:function(t,e,i){this.group.removeAll(),this._buildAxes(t),this._buildSplitLineAndArea(t)},_buildAxes:function(t){var e=t.coordinateSystem,i=e.getIndicatorAxes(),n=du.map(i,function(t){return new ew(t.model,{position:[e.cx,e.cy],rotation:t.angle,labelDirection:-1,tickDirection:-1,nameDirection:1})});du.each(n,function(t){du.each($w,t.add,t),this.group.add(t.getGroup())},this)},_buildSplitLineAndArea:function(t){function e(t,e,i){var n=i%e.length;return t[n]=t[n]||[],n}var i=t.coordinateSystem,n=i.getIndicatorAxes();if(n.length){var a=t.get("shape"),r=t.getModel("splitLine"),o=t.getModel("splitArea"),s=r.getModel("lineStyle"),l=o.getModel("areaStyle"),u=r.get("show"),h=o.get("show"),c=s.get("color"),d=l.get("color");c=du.isArray(c)?c:[c],d=du.isArray(d)?d:[d];var f=[],p=[];if("circle"===a)for(var g=n[0].getTicksCoords(),m=i.cx,v=i.cy,y=0;y<g.length;y++){if(u){f[M=e(f,c,y)].push(new Dp.Circle({shape:{cx:m,cy:v,r:g[y].coord}}))}if(h&&y<g.length-1){p[M=e(p,d,y)].push(new Dp.Ring({shape:{cx:m,cy:v,r0:g[y].coord,r:g[y+1].coord}}))}}else for(var x,_=du.map(n,function(t,e){var n=t.getTicksCoords();return x=null==x?n.length-1:Math.min(n.length-1,x),du.map(n,function(t){return i.coordToPoint(t.coord,e)})}),b=[],y=0;y<=x;y++){for(var w=[],S=0;S<n.length;S++)w.push(_[S][y]);if(w[0]&&w.push(w[0].slice()),u){f[M=e(f,c,y)].push(new Dp.Polyline({shape:{points:w}}))}if(h&&b){var M=e(p,d,y-1);p[M].push(new Dp.Polygon({shape:{points:w.concat(b)}}))}b=w.slice().reverse()}var I=s.getLineStyle(),A=l.getAreaStyle();du.each(p,function(t,e){this.group.add(Dp.mergePath(t,{style:du.defaults({stroke:"none",fill:d[e%d.length]},A),silent:!0}))},this),du.each(f,function(t,e){this.group.add(Dp.mergePath(t,{style:du.defaults({fill:"none",stroke:c[e%c.length]},I),silent:!0}))},this)}}}),qp.encodeHTML),Jw=xv.extend({type:"series.radar",dependencies:["radar"],init:function(t){Jw.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},getInitialData:function(t,e){return Aw(this,{generateCoord:"indicator_",generateCoordCount:1/0})},formatTooltip:function(t){var e=this.getData(),i=this.coordinateSystem.getIndicatorAxes(),n=this.getData().getName(t);return Kw(""===n?this.name:n)+"<br/>"+du.map(i,function(i,n){var a=e.get(e.mapDimension(i.dim),t);return Kw(i.name+" : "+a)}).join("<br />")},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid"},label:{position:"top"},symbol:"emptyCircle",symbolSize:4}}),Qw=(C_.extendChartView({type:"radar",render:function(t,e,i){function n(e,i,n,a,r,o){n.removeAll();for(var s=0;s<i.length-1;s++){var l=function(t,e){var i=t.getItemVisual(e,"symbol")||"circle",n=t.getItemVisual(e,"color");if("none"!==i){var a=function(t){return du.isArray(t)||(t=[+t,+t]),t}(t.getItemVisual(e,"symbolSize")),r=Fx.createSymbol(i,-1,-1,2,2,n);return r.attr({style:{strokeNoScale:!0},z2:100,scale:[a[0]/2,a[1]/2]}),r}}(a,r);l&&(l.__dimIdx=s,e[s]?(l.attr("position",e[s]),Dp[o?"initProps":"updateProps"](l,{position:i[s]},t,r)):l.attr("position",i[s]),n.add(l))}}function a(t){return du.map(t,function(t){return[r.cx,r.cy]})}var r=t.coordinateSystem,o=this.group,s=t.getData(),l=this._data;s.diff(l).add(function(e){var i=s.getItemLayout(e);if(i){var r=new Dp.Polygon,o=new Dp.Polyline,l={shape:{points:i}};r.shape.points=a(i),o.shape.points=a(i),Dp.initProps(r,l,t,e),Dp.initProps(o,l,t,e);var u=new Dp.Group,h=new Dp.Group;u.add(o),u.add(r),u.add(h),n(o.shape.points,i,h,s,e,!0),s.setItemGraphicEl(e,u)}}).update(function(e,i){var a=l.getItemGraphicEl(i),r=a.childAt(0),o=a.childAt(1),u=a.childAt(2),h={shape:{points:s.getItemLayout(e)}};h.shape.points&&(n(r.shape.points,h.shape.points,u,s,e,!1),Dp.updateProps(r,h,t),Dp.updateProps(o,h,t),s.setItemGraphicEl(e,a))}).remove(function(t){o.remove(l.getItemGraphicEl(t))}).execute(),s.eachItemGraphicEl(function(t,e){function i(){l.attr("ignore",p)}function n(){l.attr("ignore",f)}var a=s.getItemModel(e),r=t.childAt(0),l=t.childAt(1),u=t.childAt(2),h=s.getItemVisual(e,"color");o.add(t),r.useStyle(du.defaults(a.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:h})),r.hoverStyle=a.getModel("emphasis.lineStyle").getLineStyle();var c=a.getModel("areaStyle"),d=a.getModel("emphasis.areaStyle"),f=c.isEmpty()&&c.parentModel.isEmpty(),p=d.isEmpty()&&d.parentModel.isEmpty();p=p&&f,l.ignore=f,l.useStyle(du.defaults(c.getAreaStyle(),{fill:h,opacity:.7})),l.hoverStyle=d.getAreaStyle();var g=a.getModel("itemStyle").getItemStyle(["color"]),m=a.getModel("emphasis.itemStyle").getItemStyle(),v=a.getModel("label"),y=a.getModel("emphasis.label");u.eachChild(function(t){t.setStyle(g),t.hoverStyle=du.clone(m),Dp.setLabelStyle(t.style,t.hoverStyle,v,y,{labelFetcher:s.hostModel,labelDataIndex:e,labelDimIndex:t.__dimIdx,defaultText:s.get(s.dimensions[t.__dimIdx],e),autoColor:h,isRectText:!0})}),t.off("mouseover").off("mouseout").off("normal").off("emphasis"),t.on("emphasis",i).on("mouseover",i).on("normal",n).on("mouseout",n),Dp.setHoverStyle(t)}),this._data=s},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}}),function(t){t.eachSeriesByType("radar",function(t){var e=t.getData(),i=[],n=t.coordinateSystem;if(n){for(var a=n.getIndicatorAxes(),r=0;r<a.length;r++)e.each(e.mapDimension(a[r].dim),function(t,e){i[e]=i[e]||[],i[e][r]=n.dataToPoint(t,r)});e.each(function(t){i[t][0]&&i[t].push(i[t][0].slice()),e.setItemLayout(t,i[t])})}})}),tS=function(t){var e=t.polar;if(e){du.isArray(e)||(e=[e]);var i=[];du.each(e,function(e,n){e.indicator?(e.type&&!e.shape&&(e.shape=e.type),t.radar=t.radar||[],du.isArray(t.radar)||(t.radar=[t.radar]),t.radar.push(e)):i.push(e)}),t.polar=i}du.each(t.series,function(t){t&&"radar"===t.type&&t.polarIndex&&(t.radarIndex=t.polarIndex)})};C_.registerVisual(Rw("radar")),C_.registerVisual(hb("radar","circle")),C_.registerLayout(Qw),C_.registerProcessor(Hw("radar")),C_.registerPreprocessor(tS);var eS=pu.applyTransform;du.mixin(Wn,Lu),Un.prototype={constructor:Un,type:"view",dimensions:["x","y"],setBoundingRect:function(t,e,i,n){return this._rect=new ch(t,e,i,n),this._rect},getBoundingRect:function(){return this._rect},setViewRect:function(t,e,i,n){this.transformTo(t,e,i,n),this._viewRect=new ch(t,e,i,n)},transformTo:function(t,e,i,n){var a=this.getBoundingRect(),r=this._rawTransformable;r.transform=a.calculateTransform(new ch(t,e,i,n)),r.decomposeTransform(),this._updateTransform()},setCenter:function(t){t&&(this._center=t,this._updateCenterAndZoom())},setZoom:function(t){t=t||1;var e=this.zoomLimit;e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom()},getDefaultCenter:function(){var t=this.getBoundingRect();return[t.x+t.width/2,t.y+t.height/2]},getCenter:function(){return this._center||this.getDefaultCenter()},getZoom:function(){return this._zoom||1},getRoamTransform:function(){return this._roamTransformable.getLocalTransform()},_updateCenterAndZoom:function(){var t=this._rawTransformable.getLocalTransform(),e=this._roamTransformable,i=this.getDefaultCenter(),n=this.getCenter(),a=this.getZoom();n=pu.applyTransform([],n,t),i=pu.applyTransform([],i,t),e.origin=n,e.position=[i[0]-n[0],i[1]-n[1]],e.scale=[a,a],this._updateTransform()},_updateTransform:function(){var t=this._roamTransformable,e=this._rawTransformable;e.parent=t,t.updateTransform(),e.updateTransform(),Mu.copy(this.transform||(this.transform=[]),e.transform||Mu.create()),this._rawTransform=e.getLocalTransform(),this.invTransform=this.invTransform||[],Mu.invert(this.invTransform,this.transform),this.decomposeTransform()},getViewRect:function(){return this._viewRect},getViewRectAfterRoam:function(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t},dataToPoint:function(t,e,i){var n=e?this._rawTransform:this.transform;return i=i||[],n?eS(i,t,n):pu.copy(i,t)},pointToData:function(t){var e=this.invTransform;return e?eS([],t,e):[t[0],t[1]]},convertToPixel:du.curry(Zn,"dataToPoint"),convertFromPixel:du.curry(Zn,"pointToData"),containPoint:function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])}},du.mixin(Un,Lu);for(var iS=Un,nS=[126,25],aS=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],rS=0;rS<aS.length;rS++)for(var oS=0;oS<aS[rS].length;oS++)aS[rS][oS][0]/=10.5,aS[rS][oS][1]/=-14,aS[rS][oS][0]+=nS[0],aS[rS][oS][1]+=nS[1];var sS={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]},lS={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]},uS=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]],hS=[function(t){"china"===t.map&&t.regions.push(new $x("南海诸岛",du.map(aS,function(t){return{type:"polygon",exterior:t}}),nS))},function(t){du.each(t.regions,function(t){var e=sS[t.name];if(e){var i=t.center;i[0]+=e[0]/10.5,i[1]+=-e[1]/14}})},function(t){du.each(t.regions,function(t){var e=lS[t.name];if(e){var i=t.center;i[0]=e[0],i[1]=e[1]}})},function(t){if("china"===t.map)for(var e=0,i=t.regions.length;e<i;++e)"台湾"===t.regions[e].name&&t.regions[e].geometries.push({type:"polygon",exterior:uS[0]})}];jn.prototype={constructor:jn,type:"geo",dimensions:["lng","lat"],containCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return!0;return!1},loadGeoJson:function(t,e,i){try{this.regions=t?Kx(t):[]}catch(t){throw"Invalid geoJson format\n"+t.message}e=e||{},i=i||{};for(var n=this.regions,a=du.createHashMap(),r=0;r<n.length;r++){var o=n[r].name;o=i.hasOwnProperty(o)?i[o]:o,n[r].name=o,a.set(o,n[r]),this.addGeoCoord(o,n[r].center);var s=e[o];s&&n[r].transformTo(s.left,s.top,s.width,s.height)}this._regionsMap=a,this._rect=null,du.each(hS,function(t){t(this)},this)},transformTo:function(t,e,i,n){var a=this.getBoundingRect();(a=a.clone()).y=-a.y-a.height;var r=this._rawTransformable;r.transform=a.calculateTransform(new ch(t,e,i,n)),r.decomposeTransform();var o=r.scale;o[1]=-o[1],r.updateTransform(),this._updateTransform()},getRegion:function(t){return this._regionsMap.get(t)},getRegionByCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return e[i]},addGeoCoord:function(t,e){this._nameCoordMap.set(t,e)},getGeoCoord:function(t){return this._nameCoordMap.get(t)},getBoundingRect:function(){if(this._rect)return this._rect;for(var t,e=this.regions,i=0;i<e.length;i++){var n=e[i].getBoundingRect();(t=t||n.clone()).union(n)}return this._rect=t||new ch(0,0,0,0)},dataToPoint:function(t,e,i){if("string"==typeof t&&(t=this.getGeoCoord(t)),t)return iS.prototype.dataToPoint.call(this,t,e,i)},convertToPixel:du.curry(Yn,"dataToPoint"),convertFromPixel:du.curry(Yn,"pointToData")},du.mixin(jn,iS);var cS=jn,dS={dimensions:cS.prototype.dimensions,create:function(t,e){var i=[];t.eachComponent("geo",function(t,n){var a=t.get("map"),r=C_.getMap(a),o=new cS(a+n,a,r&&r.geoJson,r&&r.specialAreas,t.get("nameMap"));o.zoomLimit=t.get("scaleLimit"),i.push(o),qn(o,t),t.coordinateSystem=o,o.model=t,o.resize=Xn,o.resize(t,e)}),t.eachSeries(function(t){if("geo"===t.get("coordinateSystem")){var e=t.get("geoIndex")||0;t.coordinateSystem=i[e]}});var n={};return t.eachSeriesByType("map",function(t){if(!t.getHostGeoModel()){var e=t.getMapType();n[e]=n[e]||[],n[e].push(t)}}),du.each(n,function(t,n){var a=C_.getMap(n),r=du.map(t,function(t){return t.get("nameMap")}),o=new cS(n,n,a&&a.geoJson,a&&a.specialAreas,du.mergeAll(r));o.zoomLimit=du.retrieve.apply(null,du.map(t,function(t){return t.get("scaleLimit")})),i.push(o),o.resize=Xn,o.resize(t[0],e),du.each(t,function(t){t.coordinateSystem=o,qn(o,t)})}),i},getFilledRegions:function(t,e,i){var n=(t||[]).slice();i=i||{};var a=C_.getMap(e),r=a&&a.geoJson;if(!r)return t;for(var o=du.createHashMap(),s=r.features,l=0;l<n.length;l++)o.set(n[l].name,n[l]);for(l=0;l<s.length;l++){var u=s[l].properties.name;o.get(u)||(i.hasOwnProperty(u)&&(u=i[u]),n.push({name:u}))}return n}};C_.registerCoordinateSystem("geo",dS);var fS=dS,pS=qp.encodeHTML,gS=qp.addCommas,mS=Km.retrieveRawAttr,vS=xv.extend({type:"series.map",dependencies:["geo"],layoutMode:"box",needsDrawMap:!1,seriesGroup:[],init:function(t){vS.superApply(this,"init",arguments),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t){return Aw(this,["value"])},mergeOption:function(t){vS.superApply(this,"mergeOption",arguments),this.updateSelectedMap(this._createSelectableList())},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),i=[],n=0,a=t.count();n<a;n++)i.push({name:t.getName(n),value:t.get(e,n),selected:mS(t,n,"selected")});return i=fS.getFilledRegions(i,this.getMapType(),this.option.nameMap)},getHostGeoModel:function(){var t=this.option.geoIndex;return null!=t?this.dependentModels.geo[t]:null},getMapType:function(){return(this.getHostGeoModel()||this).option.map},_fillOption:function(t,e){},getRawValue:function(t){var e=this.getData();return e.get(e.mapDimension("value"),t)},getRegionModel:function(t){var e=this.getData();return e.getItemModel(e.indexOfName(t))},formatTooltip:function(t){for(var e=this.getData(),i=gS(this.getRawValue(t)),n=e.getName(t),a=this.seriesGroup,r=[],o=0;o<a.length;o++){var s=a[o].originalData.indexOfName(n),l=e.mapDimension("value");isNaN(a[o].originalData.get(l,s))||r.push(pS(a[o].name))}return r.join(", ")+"<br />"+pS(n+" : "+i)},getTooltipPosition:function(t){if(null!=t){var e=this.getData().getName(t),i=this.coordinateSystem,n=i.getRegion(e);return n&&i.dataToPoint(n.center)}},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},defaultOption:{zlevel:0,z:2,coordinateSystem:"geo",map:"",left:"center",top:"center",aspectScale:.75,showLegendSymbol:!0,dataRangeHoverLink:!0,boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",areaColor:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{areaColor:"rgba(255,215,0,0.8)"}}}});du.mixin(vS,Tw);var yS="\0_ec_interaction_mutex";C_.registerAction({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){});var xS={take:function(t,e,i){$n(t)[e]=i},release:function(t,e,i){var n=$n(t);n[e]===i&&(n[e]=null)},isTaken:function(t,e){return!!$n(t)[e]}};du.mixin(Kn,yu);var _S=Kn,bS={updateViewOnPan:function(t,e,i){var n=t.target,a=n.position;a[0]+=e,a[1]+=i,n.dirty()},updateViewOnZoom:function(t,e,i,n){var a=t.target,r=t.zoomLimit,o=a.position,s=a.scale,l=t.zoom=t.zoom||1;if(l*=e,r){var u=r.min||0,h=r.max||1/0;l=Math.max(Math.min(h,l),u)}var c=l/t.zoom;t.zoom=l,o[0]-=(i-o[0])*(c-1),o[1]-=(n-o[1])*(c-1),s[0]*=c,s[1]*=c,a.dirty()}},wS={axisPointer:1,tooltip:1,brush:1},SS={onIrrelevantElement:function(t,e,i){var n=e.getComponentByElement(t.topTarget),a=n&&n.coordinateSystem;return n&&n!==i&&!wS[n.mainType]&&a&&a.model!==i}},MS=SS.onIrrelevantElement;ia.prototype={constructor:ia,draw:function(t,e,i,n,a){var r="geo"===t.mainType,o=t.getData&&t.getData();r&&e.eachComponent({mainType:"series",subType:"map"},function(e){o||e.getHostGeoModel()!==t||(o=e.getData())});var s=t.coordinateSystem,l=this.group,u=s.scale,h={position:s.position,scale:u};!l.childAt(0)||a?l.attr(h):Dp.updateProps(l,h,t),l.removeAll();var c=["itemStyle"],d=["emphasis","itemStyle"],f=["label"],p=["emphasis","label"],g=du.createHashMap();du.each(s.regions,function(e){var i=g.get(e.name)||g.set(e.name,new Dp.Group),n=new Dp.CompoundPath({shape:{paths:[]}});i.add(n);var a,s=(D=t.getRegionModel(e.name)||t).getModel(c),h=D.getModel(d),m=ta(s),v=ta(h),y=D.getModel(f),x=D.getModel(p);if(o){a=o.indexOfName(e.name);var _=o.getItemVisual(a,"color",!0);_&&(m.fill=_)}du.each(e.geometries,function(t){if("polygon"===t.type){n.shape.paths.push(new Dp.Polygon({shape:{points:t.exterior}}));for(var e=0;e<(t.interiors?t.interiors.length:0);e++)n.shape.paths.push(new Dp.Polygon({shape:{points:t.interiors[e]}}))}}),n.setStyle(m),n.style.strokeNoScale=!0,n.culling=!0;var b=y.get("show"),w=x.get("show"),S=o&&isNaN(o.get(o.mapDimension("value"),a)),M=o&&o.getItemLayout(a);if(r||S&&(b||w)||M&&M.showLabel){var I,A=r?e.name:a;(!o||a>=0)&&(I=t);var T=new Dp.Text({position:e.center.slice(),scale:[1/u[0],1/u[1]],z2:10,silent:!0});Dp.setLabelStyle(T.style,T.hoverStyle={},y,x,{labelFetcher:I,labelDataIndex:A,defaultText:e.name,useInsideStyle:!1},{textAlign:"center",textVerticalAlign:"middle"}),i.add(T)}if(o)o.setItemGraphicEl(a,i);else{var D=t.getRegionModel(e.name);n.eventData={componentType:"geo",geoIndex:t.componentIndex,name:e.name,region:D&&D.option||{}}}(i.__regions||(i.__regions=[])).push(e),Dp.setHoverStyle(i,v,{hoverSilentOnTouch:!!t.get("selectedMode")}),l.add(i)}),this._updateController(t,e,i),function(t,e,i,n,a){i.off("click"),i.off("mousedown"),e.get("selectedMode")&&(i.on("mousedown",function(){t._mouseDownFlag=!0}),i.on("click",function(r){if(t._mouseDownFlag){t._mouseDownFlag=!1;for(var o=r.target;!o.__regions;)o=o.parent;if(o){var s={type:("geo"===e.mainType?"geo":"map")+"ToggleSelect",batch:du.map(o.__regions,function(t){return{name:t.name,from:a.uid}})};s[e.mainType+"Id"]=e.id,n.dispatchAction(s),ea(e,i)}}}))}(this,t,l,i,n),ea(t,l)},remove:function(){this.group.removeAll(),this._controller.dispose(),this._controllerHost={}},_updateController:function(t,e,i){function n(){var e={type:"geoRoam",componentType:s};return e[s+"Id"]=t.id,e}var a=t.coordinateSystem,r=this._controller,o=this._controllerHost;o.zoomLimit=t.get("scaleLimit"),o.zoom=a.getZoom(),r.enable(t.get("roam")||!1);var s=t.mainType;r.off("pan").on("pan",function(t,e){this._mouseDownFlag=!1,bS.updateViewOnPan(o,t,e),i.dispatchAction(du.extend(n(),{dx:t,dy:e}))},this),r.off("zoom").on("zoom",function(t,e,a){if(this._mouseDownFlag=!1,bS.updateViewOnZoom(o,t,e,a),i.dispatchAction(du.extend(n(),{zoom:t,originX:e,originY:a})),this._updateGroup){var r=this.group,s=r.scale;r.traverse(function(t){"text"===t.type&&t.attr("scale",[1/s[0],1/s[1]])})}},this),r.setPointerChecker(function(e,n,r){return a.getViewRectAfterRoam().contain(n,r)&&!MS(e,i,t)})}};var IS=ia,AS=(C_.extendChartView({type:"map",render:function(t,e,i,n){if(!n||"mapToggleSelect"!==n.type||n.from!==this.uid){var a=this.group;if(a.removeAll(),!t.getHostGeoModel()){if(n&&"geoRoam"===n.type&&"series"===n.componentType&&n.seriesId===t.id){(r=this._mapDraw)&&a.add(r.group)}else if(t.needsDrawMap){var r=this._mapDraw||new IS(i,!0);a.add(r.group),r.draw(t,e,i,this,n),this._mapDraw=r}else this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null;t.get("showLegendSymbol")&&e.getComponent("legend")&&this._renderSymbols(t,e,i)}}},remove:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null,this.group.removeAll()},dispose:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null},_renderSymbols:function(t,e,i){var n=t.originalData,a=this.group;n.each(n.mapDimension("value"),function(e,i){if(!isNaN(e)){var r=n.getItemLayout(i);if(r&&r.point){var o=r.point,s=r.offset,l=new Dp.Circle({style:{fill:t.getData().getVisual("color")},shape:{cx:o[0]+9*s,cy:o[1],r:3},silent:!0,z2:s?8:10});if(!s){var u=t.mainSeries.getData(),h=n.getName(i),c=u.indexOfName(h),d=n.getItemModel(i),f=d.getModel("label"),p=d.getModel("emphasis.label"),g=u.getItemGraphicEl(c),m=du.retrieve2(t.getFormattedLabel(i,"normal"),h),v=du.retrieve2(t.getFormattedLabel(i,"emphasis"),m),y=function(){var t=Dp.setTextStyle({},p,{text:p.get("show")?v:null},{isRectText:!0,useInsideStyle:!1},!0);l.style.extendFrom(t),l.__mapOriginalZ2=l.z2,l.z2+=1},x=function(){Dp.setTextStyle(l.style,f,{text:f.get("show")?m:null,textPosition:f.getShallow("position")||"bottom"},{isRectText:!0,useInsideStyle:!1}),null!=l.__mapOriginalZ2&&(l.z2=l.__mapOriginalZ2,l.__mapOriginalZ2=null)};g.on("mouseover",y).on("mouseout",x).on("emphasis",y).on("normal",x),x()}a.add(l)}}})}}),{updateCenterAndZoom:function(t,e,i){var n=t.getZoom(),a=t.getCenter(),r=e.zoom,o=t.dataToPoint(a);null!=e.dx&&null!=e.dy&&(o[0]-=e.dx,o[1]-=e.dy,a=t.pointToData(o),t.setCenter(a));if(null!=r){if(i){var s=i.min||0,l=i.max||1/0;r=Math.max(Math.min(n*r,l),s)/n}t.scale[0]*=r,t.scale[1]*=r;var u=t.position,h=(e.originX-u[0])*(r-1),c=(e.originY-u[1])*(r-1);u[0]-=h,u[1]-=c,t.updateTransform(),a=t.pointToData(o),t.setCenter(a),t.setZoom(r*n)}return{center:t.getCenter(),zoom:t.getZoom()}}}),TS=AS.updateCenterAndZoom;C_.registerAction({type:"geoRoam",event:"geoRoam",update:"updateTransform"},function(t,e){var i=t.componentType||"series";e.eachComponent({mainType:i,query:t},function(e){var n=e.coordinateSystem;if("geo"===n.type){var a=TS(n,t,e.get("scaleLimit"));e.setCenter&&e.setCenter(a.center),e.setZoom&&e.setZoom(a.zoom),"series"===i&&du.each(e.seriesGroup,function(t){t.setCenter(a.center),t.setZoom(a.zoom)})}})});var DS=function(t){var e={};t.eachSeriesByType("map",function(i){var n=i.getMapType();if(!i.getHostGeoModel()&&!e[n]){var a={};du.each(i.seriesGroup,function(e){var i=e.coordinateSystem,n=e.originalData;e.get("showLegendSymbol")&&t.getComponent("legend")&&n.each(n.mapDimension("value"),function(t,e){var r=n.getName(e),o=i.getRegion(r);if(o&&!isNaN(t)){var s=a[r]||0,l=i.dataToPoint(o.center);a[r]=s+1,n.setItemLayout(e,{point:l,offset:s})}})});var r=i.getData();r.each(function(t){var e=r.getName(t),i=r.getItemLayout(t)||{};i.showLabel=!a[e],r.setItemLayout(t,i)}),e[n]=!0}})},CS=function(t){t.eachSeriesByType("map",function(t){var e=t.get("color"),i=t.getModel("itemStyle"),n=i.get("areaColor"),a=i.get("color")||e[t.seriesIndex%e.length];t.getData().setVisual({areaColor:n,color:a})})},LS=function(t){var e={};t.eachSeriesByType("map",function(t){var i=t.getHostGeoModel(),n=i?"o"+i.id:"i"+t.getMapType();(e[n]=e[n]||[]).push(t)}),du.each(e,function(t,e){for(var i=function(t,e){var i={};return du.each(t,function(t){t.each(t.mapDimension("value"),function(e,n){var a="ec-"+t.getName(n);i[a]=i[a]||[],isNaN(e)||i[a].push(e)})}),t[0].map(t[0].mapDimension("value"),function(n,a){for(var r="ec-"+t[0].getName(a),o=0,s=1/0,l=-1/0,u=i[r].length,h=0;h<u;h++)s=Math.min(s,i[r][h]),l=Math.max(l,i[r][h]),o+=i[r][h];var c;return c="min"===e?s:"max"===e?l:"average"===e?o/u:o,0===u?NaN:c})}(du.map(t,function(t){return t.getData()}),t[0].get("mapValueCalculation")),n=0;n<t.length;n++)t[n].originalData=t[n].getData();for(n=0;n<t.length;n++)t[n].seriesGroup=t,t[n].needsDrawMap=0===n&&!t[n].getHostGeoModel(),t[n].setData(i.cloneShallow()),t[n].mainSeries=t[0]})},PS=function(t){var e=[];du.each(t.series,function(t){t&&"map"===t.type&&(e.push(t),t.map=t.map||t.mapType,du.defaults(t,t.mapLocation))})};C_.registerLayout(DS),C_.registerVisual(CS),C_.registerProcessor(C_.PRIORITY.PROCESSOR.STATISTIC,LS),C_.registerPreprocessor(PS),kw("map",[{type:"mapToggleSelect",event:"mapselectchanged",method:"toggleSelected"},{type:"mapSelect",event:"mapselected",method:"select"},{type:"mapUnSelect",event:"mapunselected",method:"unSelect"}]);var kS=du.each,OS="\0__link_datas",RS="\0__link_mainData",NS=function(t){var e=t.mainData,i=t.datas;i||(i={main:e},t.datasAttr={main:"data"}),t.datas=t.mainData=null,na(e,i,t),kS(i,function(i){kS(e.TRANSFERABLE_METHODS,function(e){i.wrapMethod(e,du.curry(function(t,e){if(function(t){return t[RS]===t}(this)){var i=du.extend({},this[OS]);i[this.dataType]=e,na(e,i,t)}else aa(e,this.dataType,this[RS],t);return e},t))})}),e.wrapMethod("cloneShallow",du.curry(function(t,e){return kS(e[OS],function(i,n){i!==e&&aa(i.cloneShallow(),n,e,t)}),e},t)),kS(e.CHANGABLE_METHODS,function(i){e.wrapMethod(i,du.curry(function(t,e){return t.struct&&t.struct.update(this),e},t))}),du.assert(i[e.dataType]===e)},ES=function(t,e){this.name=t||"",this.depth=0,this.height=0,this.parentNode=null,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.hostTree=e};ES.prototype={constructor:ES,isRemoved:function(){return this.dataIndex<0},eachNode:function(t,e,i){"function"==typeof t&&(i=e,e=t,t=null),t=t||{},du.isString(t)&&(t={order:t});var n,a=t.order||"preorder",r=this[t.attr||"children"];"preorder"===a&&(n=e.call(i,this));for(var o=0;!n&&o<r.length;o++)r[o].eachNode(t,e,i);"postorder"===a&&e.call(i,this)},updateDepthAndHeight:function(t){var e=0;this.depth=t;for(var i=0;i<this.children.length;i++){var n=this.children[i];n.updateDepthAndHeight(t+1),n.height>e&&(e=n.height)}this.height=e+1},getNodeById:function(t){if(this.getId()===t)return this;for(var e=0,i=this.children,n=i.length;e<n;e++){var a=i[e].getNodeById(t);if(a)return a}},contains:function(t){if(t===this)return!0;for(var e=0,i=this.children,n=i.length;e<n;e++){var a=i[e].contains(t);if(a)return a}},getAncestors:function(t){for(var e=[],i=t?this:this.parentNode;i;)e.push(i),i=i.parentNode;return e.reverse(),e},getValue:function(t){var e=this.hostTree.data;return e.get(e.getDimension(t||"value"),this.dataIndex)},setLayout:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e)},getLayout:function(){return this.hostTree.data.getItemLayout(this.dataIndex)},getModel:function(t){if(!(this.dataIndex<0)){var e,i=this.hostTree,n=i.data.getItemModel(this.dataIndex),a=this.getLevelModel();return a||0!==this.children.length&&(0===this.children.length||!1!==this.isExpand)||(e=this.getLeavesModel()),n.getModel(t,(a||e||i.hostModel).getModel(t))}},getLevelModel:function(){return(this.hostTree.levelModels||[])[this.depth]},getLeavesModel:function(){return this.hostTree.leavesModel},setVisual:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e)},getVisual:function(t,e){return this.hostTree.data.getItemVisual(this.dataIndex,t,e)},getRawIndex:function(){return this.hostTree.data.getRawIndex(this.dataIndex)},getId:function(){return this.hostTree.data.getId(this.dataIndex)},isAncestorOf:function(t){for(var e=t.parentNode;e;){if(e===this)return!0;e=e.parentNode}return!1},isDescendantOf:function(t){return t!==this&&t.isAncestorOf(this)}},ra.prototype={constructor:ra,type:"tree",eachNode:function(t,e,i){this.root.eachNode(t,e,i)},getNodeByDataIndex:function(t){var e=this.data.getRawIndex(t);return this._nodes[e]},getNodeByName:function(t){return this.root.getNodeByName(t)},update:function(){for(var t=this.data,e=this._nodes,i=0,n=e.length;i<n;i++)e[i].dataIndex=-1;for(var i=0,n=t.count();i<n;i++)e[t.getRawIndex(i)].dataIndex=i},clearLayouts:function(){this.data.clearItemLayouts()}},ra.createTree=function(t,e,i){function n(t,e){var i=t.value;o=Math.max(o,du.isArray(i)?i.length:1),r.push(t);var s=new ES(t.name,a);e?function(t,e){var i=e.children;t.parentNode!==e&&(i.push(t),t.parentNode=e)}(s,e):a.root=s,a._nodes.push(s);var l=t.children;if(l)for(var u=0;u<l.length;u++)n(l[u],s)}var a=new ra(e,i.levels,i.leaves),r=[],o=1;n(t),a.root.updateDepthAndHeight(0);var s=By(r,{coordDimensions:["value"],dimensionsCount:o}),l=new Ty(s,e);return l.initData(r),NS({mainData:l,struct:a,structAttr:"tree"}),a.update(),a};var zS=ra,VS=qp.encodeHTML,BS=(xv.extend({type:"series.tree",layoutInfo:null,layoutMode:"box",getInitialData:function(t){var e={name:t.name,children:t.data},i=t.leaves||{},n={};n.leaves=i;var a=zS.createTree(e,this,n),r=0;a.eachNode("preorder",function(t){t.depth>r&&(r=t.depth)});var o=t.expandAndCollapse&&t.initialTreeDepth>=0?t.initialTreeDepth:r;return a.root.eachNode("preorder",function(t){var e=t.hostTree.data.getRawDataItem(t.dataIndex);t.isExpand=e&&null!=e.collapsed?!e.collapsed:t.depth<=o}),a.data},getOrient:function(){var t=this.get("orient");return"horizontal"===t?t="LR":"vertical"===t&&(t="TB"),t},formatTooltip:function(t){for(var e=this.getData().tree,i=e.root.children[0],n=e.getNodeByDataIndex(t),a=n.getValue(),r=n.name;n&&n!==i;)r=n.parentNode.name+"."+r,n=n.parentNode;return VS(r+(isNaN(a)||null==a?"":" : "+a))},defaultOption:{zlevel:0,z:2,left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderColor:"#c23531",borderWidth:1.5},label:{show:!0,color:"#555"},leaves:{label:{show:!0}},animationEasing:"linear",animationDuration:700,animationDurationUpdate:1e3}}),{init:function(t){t.hierNode={defaultAncestor:null,ancestor:t,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var e,i,n=[t];e=n.pop();)if(i=e.children,e.isExpand&&i.length)for(var a=i.length-1;a>=0;a--){var r=i[a];r.hierNode={defaultAncestor:null,ancestor:r,prelim:0,modifier:0,change:0,shift:0,i:a,thread:null},n.push(r)}},firstWalk:function(t,e){var i=t.isExpand?t.children:[],n=t.parentNode.children,a=t.hierNode.i?n[t.hierNode.i-1]:null;if(i.length){!function(t){for(var e=t.children,i=e.length,n=0,a=0;--i>=0;){var r=e[i];r.hierNode.prelim+=n,r.hierNode.modifier+=n,a+=r.hierNode.change,n+=r.hierNode.shift+a}}(t);var r=(i[0].hierNode.prelim+i[i.length-1].hierNode.prelim)/2;a?(t.hierNode.prelim=a.hierNode.prelim+e(t,a),t.hierNode.modifier=t.hierNode.prelim-r):t.hierNode.prelim=r}else a&&(t.hierNode.prelim=a.hierNode.prelim+e(t,a));t.parentNode.hierNode.defaultAncestor=function(t,e,i,n){if(e){for(var a=t,r=t,o=r.parentNode.children[0],s=e,l=a.hierNode.modifier,u=r.hierNode.modifier,h=o.hierNode.modifier,c=s.hierNode.modifier;s=oa(s),r=sa(r),s&&r;){a=oa(a),o=sa(o),a.hierNode.ancestor=t;var d=s.hierNode.prelim+c-r.hierNode.prelim-u+n(s,r);d>0&&(function(t,e,i){var n=i/(e.hierNode.i-t.hierNode.i);e.hierNode.change-=n,e.hierNode.shift+=i,e.hierNode.modifier+=i,e.hierNode.prelim+=i,t.hierNode.change+=n}(function(t,e,i){return t.hierNode.ancestor.parentNode===e.parentNode?t.hierNode.ancestor:i}(s,t,i),t,d),u+=d,l+=d),c+=s.hierNode.modifier,u+=r.hierNode.modifier,l+=a.hierNode.modifier,h+=o.hierNode.modifier}s&&!oa(a)&&(a.hierNode.thread=s,a.hierNode.modifier+=c-l),r&&!sa(o)&&(o.hierNode.thread=r,o.hierNode.modifier+=u-h,i=t)}return i}(t,a,t.parentNode.hierNode.defaultAncestor||n[0],e)},secondWalk:function(t){var e=t.hierNode.prelim+t.parentNode.hierNode.modifier;t.setLayout({x:e},!0),t.hierNode.modifier+=t.parentNode.hierNode.modifier},separation:function(t){return arguments.length?t:function(t,e){return t.parentNode===e.parentNode?1:2}},radialCoordinate:function(t,e){var i={};return t-=Math.PI/2,i.x=e*Math.cos(t),i.y=e*Math.sin(t),i},getViewRect:function(t,e){return ng.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}}),GS=BS.radialCoordinate;C_.extendChartView({type:"tree",init:function(t,e){this._oldTree,this._mainGroup=new Dp.Group,this.group.add(this._mainGroup)},render:function(t,e,i,n){var a=t.getData(),r=t.layoutInfo,o=this._mainGroup,s=t.get("layout");"radial"===s?o.attr("position",[r.x+r.width/2,r.y+r.height/2]):o.attr("position",[r.x,r.y]);var l=this._data,u={expandAndCollapse:t.get("expandAndCollapse"),layout:s,orient:t.getOrient(),curvature:t.get("lineStyle.curveness"),symbolRotate:t.get("symbolRotate"),symbolOffset:t.get("symbolOffset"),hoverAnimation:t.get("hoverAnimation"),useNameLabel:!0,fadeIn:!0};a.diff(l).add(function(e){la(a,e)&&ha(a,e,null,o,t,u)}).update(function(e,i){var n=l.getItemGraphicEl(i);la(a,e)?ha(a,e,n,o,t,u):n&&ca(l,i,n,o,t,u)}).remove(function(e){var i=l.getItemGraphicEl(e);i&&ca(l,e,i,o,t,u)}).execute(),!0===u.expandAndCollapse&&a.eachItemGraphicEl(function(e,n){e.off("click").on("click",function(){i.dispatchAction({type:"treeExpandAndCollapse",seriesId:t.id,dataIndex:n})})}),this._data=a},dispose:function(){},remove:function(){this._mainGroup.removeAll(),this._data=null}});C_.registerAction({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=t.dataIndex,n=e.getData().tree.getNodeByDataIndex(i);n.isExpand=!n.isExpand})});var HS={eachAfter:function(t,e,i){for(var n,a=[t],r=[];n=a.pop();)if(r.push(n),n.isExpand){var o=n.children;if(o.length)for(var s=0;s<o.length;s++)a.push(o[s])}for(;n=r.pop();)e(n,i)},eachBefore:function(t,e){for(var i,n=[t];i=n.pop();)if(e(i),i.isExpand){var a=i.children;if(a.length)for(var r=a.length-1;r>=0;r--)n.push(a[r])}}},FS=HS.eachAfter,WS=HS.eachBefore,US=BS.init,ZS=BS.firstWalk,jS=BS.secondWalk,YS=BS.separation,XS=BS.radialCoordinate,qS=BS.getViewRect,$S=function(t,e){t.eachSeriesByType("tree",function(t){!function(t,e){var i=qS(t,e);t.layoutInfo=i;var n=t.get("layout"),a=0,r=0,o=null;"radial"===n?(a=2*Math.PI,r=Math.min(i.height,i.width)/2,o=YS(function(t,e){return(t.parentNode===e.parentNode?1:2)/t.depth})):(a=i.width,r=i.height,o=YS());var s=t.getData().tree.root,l=s.children[0];if(l){US(s),FS(l,ZS,o),s.hierNode.modifier=-l.hierNode.prelim,WS(l,jS);var u=l,h=l,c=l;WS(l,function(t){var e=t.getLayout().x;e<u.getLayout().x&&(u=t),e>h.getLayout().x&&(h=t),t.depth>c.depth&&(c=t)});var d=u===h?1:o(u,h)/2,f=d-u.getLayout().x,p=0,g=0,m=0,v=0;if("radial"===n)p=a/(h.getLayout().x+d+f),g=r/(c.depth-1||1),WS(l,function(t){m=(t.getLayout().x+f)*p,v=(t.depth-1)*g;var e=XS(m,v);t.setLayout({x:e.x,y:e.y,rawX:m,rawY:v},!0)});else{var y=t.getOrient();"RL"===y||"LR"===y?(g=r/(h.getLayout().x+d+f),p=a/(c.depth-1||1),WS(l,function(t){v=(t.getLayout().x+f)*g,m="LR"===y?(t.depth-1)*p:a-(t.depth-1)*p,t.setLayout({x:m,y:v},!0)})):"TB"!==y&&"BT"!==y||(p=a/(h.getLayout().x+d+f),g=r/(c.depth-1||1),WS(l,function(t){m=(t.getLayout().x+f)*p,v="TB"===y?(t.depth-1)*g:r-(t.depth-1)*g,t.setLayout({x:m,y:v},!0)}))}}}(t,e)})};C_.registerVisual(hb("tree","circle")),C_.registerLayout($S);var KS={retrieveTargetInfo:function(t,e,i){if(t&&du.indexOf(e,t.type)>=0){var n=i.getData().tree.root,a=t.targetNode;if(a&&n.contains(a))return{node:a};var r=t.targetNodeId;if(null!=r&&(a=n.getNodeById(r)))return{node:a}}},getPathToRoot:fa,aboveViewRoot:function(t,e){var i=fa(t);return du.indexOf(i,e)>=0},wrapTreePathInfo:function(t,e){for(var i=[];t;){var n=t.dataIndex;i.push({name:t.name,dataIndex:n,value:e.getRawValue(n)}),t=t.parentNode}return i.reverse(),i}},JS=qp.encodeHTML,QS=qp.addCommas,tM=KS.wrapTreePathInfo,eM=(xv.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],_viewRoot:null,defaultOption:{progressive:0,hoverLayerThreshold:1/0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"▶",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}},label:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0},upperLabel:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},itemStyle:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{upperLabel:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(t,e){var i={name:t.name,children:t.data};pa(i);var n=t.levels||[];n=t.levels=function(t,e){var i=e.get("color");if(i){t=t||[];var n;return du.each(t,function(t){var e=new Vp(t),i=e.get("color");(e.get("itemStyle.color")||i&&"none"!==i)&&(n=!0)}),n||((t[0]||(t[0]={})).color=i.slice()),t}}(n,e);var a={};return a.levels=n,zS.createTree(i,this,a).data},optionUpdated:function(){this.resetViewRoot()},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=QS(du.isArray(i)?i[0]:i),a=e.getName(t);return JS(a+": "+n)},getDataParams:function(t){var e=xv.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=tM(i,this),e},setLayoutInfo:function(t){this.layoutInfo=this.layoutInfo||{},du.extend(this.layoutInfo,t)},mapIdToIndex:function(t){var e=this._idIndexMap;e||(e=this._idIndexMap=du.createHashMap(),this._idIndexMapCount=0);var i=e.get(t);return null==i&&e.set(t,i=this._idIndexMapCount++),i},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e)}}),KS.wrapTreePathInfo),iM=5;ga.prototype={constructor:ga,render:function(t,e,i,n){var a=t.getModel("breadcrumb"),r=this.group;if(r.removeAll(),a.get("show")&&i){var o=a.getModel("itemStyle"),s=o.getModel("textStyle"),l={pos:{left:a.get("left"),right:a.get("right"),top:a.get("top"),bottom:a.get("bottom")},box:{width:e.getWidth(),height:e.getHeight()},emptyItemWidth:a.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(i,l,s),this._renderContent(t,l,o,s,n),ng.positionElement(r,l.pos,l.box)}},_prepare:function(t,e,i){for(var n=t;n;n=n.parentNode){var a=n.getModel().get("name"),r=i.getTextRect(a),o=Math.max(r.width+16,e.emptyItemWidth);e.totalWidth+=o+8,e.renderList.push({node:n,text:a,width:o})}},_renderContent:function(t,e,i,n,a){for(var r=0,o=e.emptyItemWidth,s=t.get("breadcrumb.height"),l=ng.getAvailableSize(e.pos,e.box),u=e.totalWidth,h=e.renderList,c=h.length-1;c>=0;c--){var d=h[c],f=d.node,p=d.width,g=d.text;u>l.width&&(u-=p-o,p=o,g=null);var m=new Dp.Polygon({shape:{points:function(t,e,i,n,a,r){var o=[[a?t:t-iM,e],[t+i,e],[t+i,e+n],[a?t:t-iM,e+n]];return!r&&o.splice(2,0,[t+i+iM,e+n/2]),!a&&o.push([t,e+n/2]),o}(r,0,p,s,c===h.length-1,0===c)},style:du.defaults(i.getItemStyle(),{lineJoin:"bevel",text:g,textFill:n.getTextColor(),textFont:n.getFont()}),z:10,onclick:du.curry(a,f)});this.group.add(m),function(t,e,i){t.eventData={componentType:"series",componentSubType:"treemap",seriesIndex:e.componentIndex,seriesName:e.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:i&&i.dataIndex,name:i&&i.name},treePathInfo:i&&eM(i,e)}}(m,t,f),r+=p+8}},remove:function(){this.group.removeAll()}};for(var nM=ga,aM={createWrap:function(){var t,e=[],i={};return{add:function(t,n,a,r,o){return du.isString(r)&&(o=r,r=0),!i[t.id]&&(i[t.id]=1,e.push({el:t,target:n,time:a,delay:r,easing:o}),!0)},done:function(e){return t=e,this},start:function(){for(var n=e.length,a=0,r=e.length;a<r;a++){var o=e[a];o.el.animateTo(o.target,o.time,o.delay,o.easing,function(){--n||(e.length=0,i={},t&&t())})}return this}}}},rM=du.bind,oM=Dp.Group,sM=Dp.Rect,lM=du.each,uM=["label"],hM=["emphasis","label"],cM=["upperLabel"],dM=["emphasis","upperLabel"],fM=10,pM=1,gM=2,mM=Xc([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),vM=function(t){var e=mM(t);return e.stroke=e.fill=e.lineWidth=null,e},yM=(C_.extendChartView({type:"treemap",init:function(t,e){this._containerGroup,this._storage={nodeGroup:[],background:[],content:[]},this._oldTree,this._breadcrumb,this._controller,this._state="ready"},render:function(t,e,i,n){var a=e.findComponents({mainType:"series",subType:"treemap",query:n});if(!(du.indexOf(a,t)<0)){this.seriesModel=t,this.api=i,this.ecModel=e;var r=KS.retrieveTargetInfo(n,["treemapZoomToNode","treemapRootToNode"],t),o=n&&n.type,s=t.layoutInfo,l=!this._oldTree,u=this._storage,h="treemapRootToNode"===o&&r&&u?{rootNodeGroup:u.nodeGroup[r.node.getRawIndex()],direction:n.direction}:null,c=this._giveContainerGroup(s),d=this._doRender(c,t,h);l||o&&"treemapZoomToNode"!==o&&"treemapRootToNode"!==o?d.renderFinally():this._doAnimation(c,d,t,h),this._resetController(i),this._renderBreadcrumb(t,i,r)}},_giveContainerGroup:function(t){var e=this._containerGroup;return e||(e=this._containerGroup=new oM,this._initEvents(e),this.group.add(e)),e.attr("position",[t.x,t.y]),e},_doRender:function(t,e,i){function n(t,e,i,a,r){function o(t){return t.getId()}function s(o,s){var l=null!=o?t[o]:null,u=null!=s?e[s]:null,c=h(l,u,i,r);c&&n(l&&l.viewChildren||[],u&&u.viewChildren||[],c,a,r+1)}a?(e=t,lM(t,function(t,e){!t.isRemoved()&&s(e,e)})):new hy(e,t,o,o).add(s).update(s).remove(du.curry(s,null)).execute()}var a=e.getData().tree,r=this._oldTree,o={nodeGroup:[],background:[],content:[]},s={nodeGroup:[],background:[],content:[]},l=this._storage,u=[],h=du.curry(function(t,e,i,n,a,r,o,s,l,u){function h(t,e){v?!t.invisible&&r.push(t):(e(),t.__tmWillVisible||(t.invisible=!1))}function c(e,i,n,a,r,s){var l=o.getModel(),u=du.retrieve(t.getFormattedLabel(o.dataIndex,"normal",null,null,s?"upperLabel":"label"),l.get("name"));if(!s&&f.isLeafRoot){var h=t.get("drillDownIcon",!0);u=h?h+" "+u:u}var c=l.getModel(s?cM:uM),d=l.getModel(s?dM:hM),p=c.getShallow("show");Dp.setLabelStyle(e,i,c,d,{defaultText:p?u:null,autoColor:n,isRectText:!0}),s&&(e.textRect=du.clone(s)),e.truncate=p&&c.get("ellipsis")?{outerWidth:a,outerHeight:r,minChar:2}:null}function d(t,r,s,l){var u=null!=x&&i[t][x],h=a[t];return u?(i[t][x]=null,function(t,e,i){(t[y]={}).old="nodeGroup"===i?e.position.slice():du.extend({},e.shape)}(h,u,t)):v||((u=new r({z:function(t,e){var i=t*fM+l;return(i-1)/i}(s)})).__tmDepth=s,u.__tmStorageName=t,function(t,e,i){var r=t[y]={},s=o.parentNode;if(s&&(!n||"drillDown"===n.direction)){var l=0,u=0,h=a.background[s.getRawIndex()];!n&&h&&h.old&&(l=h.old.width,u=h.old.height),r.old="nodeGroup"===i?[0,u]:{x:l,y:u,width:0,height:0}}r.fadein="nodeGroup"!==i}(h,0,t)),e[t][y]=u}if(o){var f=o.getLayout();if(f&&f.isInView){var p=f.width,g=f.height,m=f.borderWidth,v=f.invisible,y=o.getRawIndex(),x=s&&s.getRawIndex(),_=o.viewChildren,b=f.upperHeight,w=_&&_.length,S=o.getModel("itemStyle"),M=o.getModel("emphasis.itemStyle"),I=d("nodeGroup",oM);if(I){if(l.add(I),I.attr("position",[f.x||0,f.y||0]),I.__tmNodeWidth=p,I.__tmNodeHeight=g,f.isAboveViewRoot)return I;var A=d("background",sM,u,pM);if(A&&function(e,i,n){i.dataIndex=o.dataIndex,i.seriesIndex=t.seriesIndex,i.setShape({x:0,y:0,width:p,height:g});var a=o.getVisual("borderColor",!0),r=M.get("borderColor");h(i,function(){var t=vM(S);t.fill=a;var e=mM(M);if(e.fill=r,n){var o=p-2*m;c(t,e,a,o,b,{x:m,y:0,width:o,height:b})}else t.text=e.text=null;i.setStyle(t),Dp.setHoverStyle(i,e)}),e.add(i)}(I,A,w&&f.upperHeight),!w){var T=d("content",sM,u,gM);T&&function(e,i){i.dataIndex=o.dataIndex,i.seriesIndex=t.seriesIndex;var n=Math.max(p-2*m,0),a=Math.max(g-2*m,0);i.culling=!0,i.setShape({x:m,y:m,width:n,height:a});var r=o.getVisual("color",!0);h(i,function(){var t=vM(S);t.fill=r;var e=mM(M);c(t,e,r,n,a),i.setStyle(t),Dp.setHoverStyle(i,e)}),e.add(i)}(I,T)}return I}}}},e,s,l,i,o,u);n(a.root?[a.root]:[],r&&r.root?[r.root]:[],t,a===r||!r,0);var c=function(t){var e={nodeGroup:[],background:[],content:[]};return t&&lM(t,function(t,i){var n=e[i];lM(t,function(t){t&&(n.push(t),t.__tmWillDelete=1)})}),e}(l);return this._oldTree=a,this._storage=s,{lastsForAnimation:o,willDeleteEls:c,renderFinally:function(){lM(c,function(t){lM(t,function(t){t.parent&&t.parent.remove(t)})}),lM(u,function(t){t.invisible=!0,t.dirty()})}}},_doAnimation:function(t,e,i,n){if(i.get("animation")){var a=i.get("animationDurationUpdate"),r=i.get("animationEasing"),o=aM.createWrap();lM(e.willDeleteEls,function(t,e){lM(t,function(t,i){if(!t.invisible){var s,l=t.parent;if(n&&"drillDown"===n.direction)s=l===n.rootNodeGroup?{shape:{x:0,y:0,width:l.__tmNodeWidth,height:l.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var u=0,h=0;l.__tmWillDelete||(u=l.__tmNodeWidth/2,h=l.__tmNodeHeight/2),s="nodeGroup"===e?{position:[u,h],style:{opacity:0}}:{shape:{x:u,y:h,width:0,height:0},style:{opacity:0}}}s&&o.add(t,s,a,r)}})}),lM(this._storage,function(t,i){lM(t,function(t,n){var s=e.lastsForAnimation[i][n],l={};s&&("nodeGroup"===i?s.old&&(l.position=t.position.slice(),t.attr("position",s.old)):(s.old&&(l.shape=du.extend({},t.shape),t.setShape(s.old)),s.fadein?(t.setStyle("opacity",0),l.style={opacity:1}):1!==t.style.opacity&&(l.style={opacity:1})),o.add(t,l,a,r))})},this),this._state="animating",o.done(rM(function(){this._state="ready",e.renderFinally()},this)).start()}},_resetController:function(t){var e=this._controller;e||((e=this._controller=new _S(t.getZr())).enable(this.seriesModel.get("roam")),e.on("pan",rM(this._onPan,this)),e.on("zoom",rM(this._onZoom,this)));var i=new ch(0,0,t.getWidth(),t.getHeight());e.setPointerChecker(function(t,e,n){return i.contain(e,n)})},_clearController:function(){var t=this._controller;t&&(t.dispose(),t=null)},_onPan:function(t,e){if("animating"!==this._state&&(Math.abs(t)>3||Math.abs(e)>3)){var i=this.seriesModel.getData().tree.root;if(!i)return;var n=i.getLayout();if(!n)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:n.x+t,y:n.y+e,width:n.width,height:n.height}})}},_onZoom:function(t,e,i){if("animating"!==this._state){var n=this.seriesModel.getData().tree.root;if(!n)return;var a=n.getLayout();if(!a)return;var r=new ch(a.x,a.y,a.width,a.height),o=this.seriesModel.layoutInfo;e-=o.x,i-=o.y;var s=Mu.create();Mu.translate(s,s,[-e,-i]),Mu.scale(s,s,[t,t]),Mu.translate(s,s,[e,i]),r.applyTransform(s),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:r.x,y:r.y,width:r.width,height:r.height}})}},_initEvents:function(t){t.on("click",function(t){if("ready"===this._state){var e=this.seriesModel.get("nodeClick",!0);if(e){var i=this.findTarget(t.offsetX,t.offsetY);if(i){var n=i.node;if(n.getLayout().isLeafRoot)this._rootToNode(i);else if("zoomToNode"===e)this._zoomToNode(i);else if("link"===e){var a=n.hostTree.data.getItemModel(n.dataIndex),r=a.get("link",!0),o=a.get("target",!0)||"blank";r&&window.open(r,o)}}}}},this)},_renderBreadcrumb:function(t,e,i){i||(i=null!=t.get("leafDepth",!0)?{node:t.getViewRoot()}:this.findTarget(e.getWidth()/2,e.getHeight()/2))||(i={node:t.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new nM(this.group))).render(t,e,i.node,rM(function(e){"animating"!==this._state&&(KS.aboveViewRoot(t.getViewRoot(),e)?this._rootToNode({node:e}):this._zoomToNode({node:e}))},this))},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove()},dispose:function(){this._clearController()},_zoomToNode:function(t){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},_rootToNode:function(t){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},findTarget:function(t,e){var i;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},function(n){var a=this._storage.background[n.getRawIndex()];if(a){var r=a.transformCoordToLocal(t,e),o=a.shape;if(!(o.x<=r[0]&&r[0]<=o.x+o.width&&o.y<=r[1]&&r[1]<=o.y+o.height))return!1;i={node:n,offsetX:r[0],offsetY:r[1]}}},this),i}}),["treemapZoomToNode","treemapRender","treemapMove"]),xM=0;xM<yM.length;xM++)C_.registerAction({type:yM[xM],update:"updateView"},function(){});C_.registerAction({type:"treemapRootToNode",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"treemap",query:t},function(e,i){var n=KS.retrieveTargetInfo(t,["treemapZoomToNode","treemapRootToNode"],e);if(n){var a=e.getViewRoot();a&&(t.direction=KS.aboveViewRoot(a,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node)}})});var _M=Up.linearMap,bM=du.each,wM=du.isObject,SM=-1,MM=function(t){var e=t.mappingMethod,i=t.type,n=this.option=du.clone(t);this.type=i,this.mappingMethod=e,this._normalizeData=AM[e];var a=IM[i];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._doMap=a._doMap[e],"piecewise"===e?(ma(n),function(t){var e=t.pieceList;t.hasSpecialVisual=!1,du.each(e,function(e,i){e.originIndex=i,null!=e.visual&&(t.hasSpecialVisual=!0)})}(n)):"category"===e?n.categories?function(t){var e=t.categories,i=t.visual,n=t.categoryMap={};if(bM(e,function(t,e){n[t]=e}),!du.isArray(i)){var a=[];du.isObject(i)?bM(i,function(t,e){var i=n[e];a[null!=i?i:SM]=t}):a[SM]=i,i=Ma(t,a)}for(var r=e.length-1;r>=0;r--)null==i[r]&&(delete n[e[r]],e.pop())}(n):ma(n,!0):(du.assert("linear"!==e||n.dataExtent),ma(n))};MM.prototype={constructor:MM,mapValueToVisual:function(t){var e=this._normalizeData(t);return this._doMap(e,t)},getNormalizer:function(){return du.bind(this._normalizeData,this)}};var IM=MM.visualHandlers={color:{applyVisual:xa("color"),getColorMapper:function(){var t=this.option;return du.bind("category"===t.mappingMethod?function(t,e){return!e&&(t=this._normalizeData(t)),_a.call(this,t)}:function(e,i,n){var a=!!n;return!i&&(e=this._normalizeData(e)),n=Wu.fastLerp(e,t.parsedVisual,n),a?n:Wu.stringify(n,"rgba")},this)},_doMap:{linear:function(t){return Wu.stringify(Wu.fastLerp(t,this.option.parsedVisual),"rgba")},category:_a,piecewise:function(t,e){var i=Sa.call(this,e);return null==i&&(i=Wu.stringify(Wu.fastLerp(t,this.option.parsedVisual),"rgba")),i},fixed:ba}},colorHue:va(function(t,e){return Wu.modifyHSL(t,e)}),colorSaturation:va(function(t,e){return Wu.modifyHSL(t,null,e)}),colorLightness:va(function(t,e){return Wu.modifyHSL(t,null,null,e)}),colorAlpha:va(function(t,e){return Wu.modifyAlpha(t,e)}),opacity:{applyVisual:xa("opacity"),_doMap:wa([0,1])},liftZ:{applyVisual:xa("liftZ"),_doMap:{linear:ba,category:ba,piecewise:ba,fixed:ba}},symbol:{applyVisual:function(t,e,i){var n=this.mapValueToVisual(t);if(du.isString(n))i("symbol",n);else if(wM(n))for(var a in n)n.hasOwnProperty(a)&&i(a,n[a])},_doMap:{linear:ya,category:_a,piecewise:function(t,e){var i=Sa.call(this,e);return null==i&&(i=ya.call(this,t)),i},fixed:ba}},symbolSize:{applyVisual:xa("symbolSize"),_doMap:wa([0,1])}},AM={linear:function(t){return _M(t,this.option.dataExtent,[0,1],!0)},piecewise:function(t){var e=this.option.pieceList,i=MM.findPieceIndex(t,e,!0);if(null!=i)return _M(i,[0,e.length-1],[0,1],!0)},category:function(t){var e=this.option.categories?this.option.categoryMap[t]:t;return null==e?SM:e},fixed:du.noop};MM.listVisualTypes=function(){var t=[];return du.each(IM,function(e,i){t.push(i)}),t},MM.addVisualHandler=function(t,e){IM[t]=e},MM.isValidType=function(t){return IM.hasOwnProperty(t)},MM.eachVisual=function(t,e,i){du.isObject(t)?du.each(t,e,i):e.call(i,t)},MM.mapVisual=function(t,e,i){var n,a=du.isArray(t)?[]:du.isObject(t)?{}:(n=!0,null);return MM.eachVisual(t,function(t,r){var o=e.call(i,t,r);n?a=o:a[r]=o}),a},MM.retrieveVisuals=function(t){var e,i={};return t&&bM(IM,function(n,a){t.hasOwnProperty(a)&&(i[a]=t[a],e=!0)}),e?i:null},MM.prepareVisualTypes=function(t){if(wM(t)){var e=[];bM(t,function(t,i){e.push(i)}),t=e}else{if(!du.isArray(t))return[];t=t.slice()}return t.sort(function(t,e){return"color"===e&&"color"!==t&&0===t.indexOf("color")?1:-1}),t},MM.dependsOn=function(t,e){return"color"===e?!(!t||0!==t.indexOf(e)):t===e},MM.findPieceIndex=function(t,e,i){function n(e,i){var n=Math.abs(e-t);n<r&&(r=n,a=i)}for(var a,r=1/0,o=0,s=e.length;o<s;o++){var l=e[o].value;if(null!=l){if(l===t||"string"==typeof l&&l===t+"")return o;i&&n(l,o)}}for(var o=0,s=e.length;o<s;o++){var u=e[o],h=u.interval,c=u.close;if(h){if(h[0]===-1/0){if(Ia(c[1],t,h[1]))return o}else if(h[1]===1/0){if(Ia(c[0],h[0],t))return o}else if(Ia(c[0],h[0],t)&&Ia(c[1],t,h[1]))return o;i&&n(h[0],o),i&&n(h[1],o)}}if(i)return t===1/0?e.length-1:t===-1/0?0:a};var TM=MM,DM=du.isArray,CM="itemStyle",LM={seriesType:"treemap",reset:function(t,e,i,n){var a=t.getData().tree,r=a.root,o=t.getModel(CM);if(!r.isRemoved()){Aa(r,{},du.map(a.levelModels,function(t){return t?t.get(CM):null}),o,t.getViewRoot().getAncestors(),t)}}},PM=Up.parsePercent,kM=Up.MAX_SAFE_INTEGER,OM=Math.max,RM=Math.min,NM=du.retrieve,EM=du.each,zM=["itemStyle","borderWidth"],VM=["itemStyle","gapWidth"],BM=["upperLabel","show"],GM=["upperLabel","height"],HM={seriesType:"treemap",reset:function(t,e,i,n){var a=i.getWidth(),r=i.getHeight(),o=t.option,s=ng.getLayoutRect(t.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()}),l=o.size||[],u=PM(NM(s.width,l[0]),a),h=PM(NM(s.height,l[1]),r),c=n&&n.type,d=KS.retrieveTargetInfo(n,["treemapZoomToNode","treemapRootToNode"],t),f="treemapRender"===c||"treemapMove"===c?n.rootRect:null,p=t.getViewRoot(),g=KS.getPathToRoot(p);if("treemapMove"!==c){var m="treemapZoomToNode"===c?function(t,e,i,n,a){var r=(e||{}).node,o=[n,a];if(!r||r===i)return o;for(var s,l=n*a,u=l*t.option.zoomToNodeRatio;s=r.parentNode;){for(var h=0,c=s.children,d=0,f=c.length;d<f;d++)h+=c[d].getValue();var p=r.getValue();if(0===p)return o;u*=h/p;var g=s.getModel(),m=g.get(zM);(u+=4*m*m+(3*m+Math.max(m,Oa(g)))*Math.pow(u,.5))>kM&&(u=kM),r=s}u<l&&(u=l);var v=Math.pow(u/l,.5);return[n*v,a*v]}(t,d,p,u,h):f?[f.width,f.height]:[u,h],v=o.sort;v&&"asc"!==v&&"desc"!==v&&(v="desc");var y={squareRatio:o.squareRatio,sort:v,leafDepth:o.leafDepth};p.hostTree.clearLayouts();x={x:0,y:0,width:m[0],height:m[1],area:m[0]*m[1]};p.setLayout(x),La(p,y,!1,0);var x=p.getLayout();EM(g,function(t,e){var i=(g[e+1]||p).getValue();t.setLayout(du.extend({dataExtent:[i,i],borderWidth:0,upperHeight:0},x))})}var _=t.getData().tree.root;_.setLayout(function(t,e,i){if(e)return{x:e.x,y:e.y};var n={x:0,y:0};if(!i)return n;var a=i.node,r=a.getLayout();if(!r)return n;for(var o=[r.width/2,r.height/2],s=a;s;){var l=s.getLayout();o[0]+=l.x,o[1]+=l.y,s=s.parentNode}return{x:t.width/2-o[0],y:t.height/2-o[1]}}(s,f,d),!0),t.setLayoutInfo(s),ka(_,new ch(-s.x,-s.y,a,r),g,p,0)}};C_.registerVisual(LM),C_.registerLayout(HM);var FM=Yc.enableClassCheck,WM=function(t){this._directed=t||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData},UM=WM.prototype;UM.type="graph",UM.isDirected=function(){return this._directed},UM.addNode=function(t,e){t=t||""+e;var i=this._nodesMap;if(!i[Ra(t)]){var n=new Na(t,e);return n.hostGraph=this,this.nodes.push(n),i[Ra(t)]=n,n}},UM.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e]},UM.getNodeById=function(t){return this._nodesMap[Ra(t)]},UM.addEdge=function(t,e,i){var n=this._nodesMap,a=this._edgesMap;if("number"==typeof t&&(t=this.nodes[t]),"number"==typeof e&&(e=this.nodes[e]),Na.isInstance(t)||(t=n[Ra(t)]),Na.isInstance(e)||(e=n[Ra(e)]),t&&e){var r=t.id+"-"+e.id;if(!a[r]){var o=new Ea(t,e,i);return o.hostGraph=this,this._directed&&(t.outEdges.push(o),e.inEdges.push(o)),t.edges.push(o),t!==e&&e.edges.push(o),this.edges.push(o),a[r]=o,o}}},UM.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e]},UM.getEdge=function(t,e){Na.isInstance(t)&&(t=t.id),Na.isInstance(e)&&(e=e.id);var i=this._edgesMap;return this._directed?i[t+"-"+e]:i[t+"-"+e]||i[e+"-"+t]},UM.eachNode=function(t,e){for(var i=this.nodes,n=i.length,a=0;a<n;a++)i[a].dataIndex>=0&&t.call(e,i[a],a)},UM.eachEdge=function(t,e){for(var i=this.edges,n=i.length,a=0;a<n;a++)i[a].dataIndex>=0&&i[a].node1.dataIndex>=0&&i[a].node2.dataIndex>=0&&t.call(e,i[a],a)},UM.breadthFirstTraverse=function(t,e,i,n){if(Na.isInstance(e)||(e=this._nodesMap[Ra(e)]),e){for(var a="out"===i?"outEdges":"in"===i?"inEdges":"edges",r=0;r<this.nodes.length;r++)this.nodes[r].__visited=!1;if(!t.call(n,e,null))for(var o=[e];o.length;)for(var s=o.shift(),l=s[a],r=0;r<l.length;r++){var u=l[r],h=u.node1===s?u.node2:u.node1;if(!h.__visited){if(t.call(n,h,s))return;o.push(h),h.__visited=!0}}}},UM.update=function(){for(var t=this.data,e=this.edgeData,i=this.nodes,n=this.edges,a=0,r=i.length;a<r;a++)i[a].dataIndex=-1;for(var a=0,r=t.count();a<r;a++)i[t.getRawIndex(a)].dataIndex=a;e.filterSelf(function(t){var i=n[e.getRawIndex(t)];return i.node1.dataIndex>=0&&i.node2.dataIndex>=0});for(var a=0,r=n.length;a<r;a++)n[a].dataIndex=-1;for(var a=0,r=e.count();a<r;a++)n[e.getRawIndex(a)].dataIndex=a},UM.clone=function(){for(var t=new WM(this._directed),e=this.nodes,i=this.edges,n=0;n<e.length;n++)t.addNode(e[n].id,e[n].dataIndex);for(n=0;n<i.length;n++){var a=i[n];t.addEdge(a.node1.id,a.node2.id,a.dataIndex)}return t},Na.prototype={constructor:Na,degree:function(){return this.edges.length},inDegree:function(){return this.inEdges.length},outDegree:function(){return this.outEdges.length},getModel:function(t){if(!(this.dataIndex<0)){return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)}}},Ea.prototype.getModel=function(t){if(!(this.dataIndex<0)){return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)}};var ZM=function(t,e){return{getValue:function(i){var n=this[t][e];return n.get(n.getDimension(i||"value"),this.dataIndex)},setVisual:function(i,n){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,i,n)},getVisual:function(i,n){return this[t][e].getItemVisual(this.dataIndex,i,n)},setLayout:function(i,n){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,i,n)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}};du.mixin(Na,ZM("hostGraph","data")),du.mixin(Ea,ZM("hostGraph","edgeData")),WM.Node=Na,WM.Edge=Ea,FM(Na),FM(Ea);var jM=WM,YM=function(t,e,i,n,a){for(var r=new jM(n),o=0;o<t.length;o++)r.addNode(du.retrieve(t[o].id,t[o].name,o),o);for(var s=[],l=[],u=0,o=0;o<e.length;o++){var h=e[o],c=h.source,d=h.target;r.addEdge(c,d,u)&&(l.push(h),s.push(du.retrieve(h.id,c+" > "+d)),u++)}var f,p=i.get("coordinateSystem");if("cartesian2d"===p||"polar"===p)f=Xy(t,i);else{var g=vm.get(p),m=g&&"view"!==g.type?g.dimensions||[]:[];du.indexOf(m,"value")<0&&m.concat(["value"]);var v=By(t,{coordDimensions:m});(f=new Ty(v,i)).initData(t)}var y=new Ty(["value"],i);return y.initData(l,s),a&&a(f,y),NS({mainData:f,struct:r,structAttr:"graph",datas:{node:f,edge:y},datasAttr:{node:"data",edge:"edgeData"}}),r.update(),r},XM=Wc.defaultEmphasis,qM=qp.encodeHTML,$M=C_.extendSeriesModel({type:"series.graph",init:function(t){$M.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeOption:function(t){$M.superApply(this,"mergeOption",arguments),this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeDefaultAndTheme:function(t){$M.superApply(this,"mergeDefaultAndTheme",arguments),XM(t,["edgeLabel"],["show"])},getInitialData:function(t,e){var i=t.edges||t.links||[],n=t.data||t.nodes||[],a=this;if(n&&i)return YM(n,i,this,!0,function(t,i){t.wrapMethod("getItemModel",function(t){var e=a._categoriesModels[t.getShallow("category")];return e&&(e.parentModel=t.parentModel,t.parentModel=e),t});var n=a.getModel("edgeLabel"),r=new Vp({label:n.option},n.parentModel,e),o=a.getModel("emphasis.edgeLabel"),s=new Vp({emphasis:{label:o.option}},o.parentModel,e);i.wrapMethod("getItemModel",function(t){return t.customizeGetParent(function(t){return(t=this.parsePath(t))&&"label"===t[0]?r:t&&"emphasis"===t[0]&&"label"===t[1]?s:this.parentModel}),t})}).data},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getData(),a=this.getDataParams(t,i),r=n.graph.getEdgeByIndex(t),o=n.getName(r.node1.dataIndex),s=n.getName(r.node2.dataIndex),l=[];return null!=o&&l.push(o),null!=s&&l.push(s),l=qM(l.join(" > ")),a.value&&(l+=" : "+qM(a.value)),l}return $M.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var t=du.map(this.option.categories||[],function(t){return null!=t.value?t:du.extend({value:0},t)}),e=new Ty(["value"],this);e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray(function(t){return e.getItemModel(t,!0)})},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},isAnimationEnabled:function(){return $M.superCall(this,"isAnimationEnabled")&&!("force"===this.get("layout")&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",legendHoverLink:!0,hoverAnimation:!0,layout:null,focusNodeAdjacency:!1,circular:{rotateLabel:!1},force:{initLayout:null,repulsion:[0,50],gravity:.1,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,edgeSymbol:["none","none"],edgeSymbolSize:10,edgeLabel:{position:"middle"},draggable:!1,roam:!1,center:null,zoom:1,nodeScaleRatio:.6,label:{show:!1,formatter:"{b}"},itemStyle:{},lineStyle:{color:"#aaa",width:1,curveness:0,opacity:.5},emphasis:{label:{show:!0}}}}),KM=Dp.Line.prototype,JM=Dp.BezierCurve.prototype,QM=Dp.extendShape({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function(t,e){(za(e)?KM:JM).buildPath(t,e)},pointAt:function(t){return za(this.shape)?KM.pointAt.call(this,t):JM.pointAt.call(this,t)},tangentAt:function(t){var e=this.shape,i=za(e)?[e.x2-e.x1,e.y2-e.y1]:JM.tangentAt.call(this,t);return pu.normalize(i,i)}}),tI=Up.round,eI=["fromSymbol","toSymbol"],iI=Ha.prototype;iI.beforeUpdate=function(){var t=this.childOfName("fromSymbol"),e=this.childOfName("toSymbol"),i=this.childOfName("label");if(t||e||!i.ignore){for(var n=1,a=this.parent;a;)a.scale&&(n/=a.scale[0]),a=a.parent;var r=this.childOfName("line");if(this.__dirty||r.__dirty){var o=r.shape.percent,s=r.pointAt(0),l=r.pointAt(o),u=pu.sub([],l,s);if(pu.normalize(u,u),t&&(t.attr("position",s),p=r.tangentAt(0),t.attr("rotation",Math.PI/2-Math.atan2(p[1],p[0])),t.attr("scale",[n*o,n*o])),e&&(e.attr("position",l),p=r.tangentAt(1),e.attr("rotation",-Math.PI/2-Math.atan2(p[1],p[0])),e.attr("scale",[n*o,n*o])),!i.ignore){i.attr("position",l);var h,c,d,f=5*n;if("end"===i.__position)h=[u[0]*f+l[0],u[1]*f+l[1]],c=u[0]>.8?"left":u[0]<-.8?"right":"center",d=u[1]>.8?"top":u[1]<-.8?"bottom":"middle";else if("middle"===i.__position){var p,g=o/2,m=[(p=r.tangentAt(g))[1],-p[0]],v=r.pointAt(g);m[1]>0&&(m[0]=-m[0],m[1]=-m[1]),h=[v[0]+m[0]*f,v[1]+m[1]*f],c="center",d="bottom";var y=-Math.atan2(p[1],p[0]);l[0]<s[0]&&(y=Math.PI+y),i.attr("rotation",y)}else h=[-u[0]*f+s[0],-u[1]*f+s[1]],c=u[0]>.8?"right":u[0]<-.8?"left":"center",d=u[1]>.8?"bottom":u[1]<-.8?"top":"middle";i.attr({style:{textVerticalAlign:i.__verticalAlign||d,textAlign:i.__textAlign||c},position:h,scale:[n,n]})}}}},iI._createLine=function(t,e,i){var n=t.hostModel,a=function(t){var e=new QM({name:"line"});return Ga(e.shape,t),e}(t.getItemLayout(e));a.shape.percent=0,Dp.initProps(a,{shape:{percent:1}},n,e),this.add(a);var r=new Dp.Text({name:"label"});this.add(r),du.each(eI,function(i){var n=Ba(i,t,e);this.add(n),this[Va(i)]=t.getItemVisual(e,i)},this),this._updateCommonStl(t,e,i)},iI.updateData=function(t,e,i){var n=t.hostModel,a=this.childOfName("line"),r=t.getItemLayout(e),o={shape:{}};Ga(o.shape,r),Dp.updateProps(a,o,n,e),du.each(eI,function(i){var n=t.getItemVisual(e,i),a=Va(i);if(this[a]!==n){this.remove(this.childOfName(i));var r=Ba(i,t,e);this.add(r)}this[a]=n},this),this._updateCommonStl(t,e,i)},iI._updateCommonStl=function(t,e,i){var n=t.hostModel,a=this.childOfName("line"),r=i&&i.lineStyle,o=i&&i.hoverLineStyle,s=i&&i.labelModel,l=i&&i.hoverLabelModel;if(!i||t.hasItemOption){var u=t.getItemModel(e);r=u.getModel("lineStyle").getLineStyle(),o=u.getModel("emphasis.lineStyle").getLineStyle(),s=u.getModel("label"),l=u.getModel("emphasis.label")}var h=t.getItemVisual(e,"color"),c=du.retrieve3(t.getItemVisual(e,"opacity"),r.opacity,1);a.useStyle(du.defaults({strokeNoScale:!0,fill:"none",stroke:h,opacity:c},r)),a.hoverStyle=o,du.each(eI,function(t){var e=this.childOfName(t);e&&(e.setColor(h),e.setStyle({opacity:c}))},this);var d,f,p=s.getShallow("show"),g=l.getShallow("show"),m=this.childOfName("label");if((p||g)&&(d=h||"#000",null==(f=n.getFormattedLabel(e,"normal",t.dataType)))){var v=n.getRawValue(e);f=null==v?t.getName(e):isFinite(v)?tI(v):v}var y=p?f:null,x=g?du.retrieve2(n.getFormattedLabel(e,"emphasis",t.dataType),f):null,_=m.style;null==y&&null==x||(Dp.setTextStyle(m.style,s,{text:y},{autoColor:d}),m.__textAlign=_.textAlign,m.__verticalAlign=_.textVerticalAlign,m.__position=s.get("position")||"middle"),m.hoverStyle=null!=x?{text:x,textFill:l.getTextColor(!0),fontStyle:l.getShallow("fontStyle"),fontWeight:l.getShallow("fontWeight"),fontSize:l.getShallow("fontSize"),fontFamily:l.getShallow("fontFamily")}:{text:null},m.ignore=!p&&!g,Dp.setHoverStyle(this)},iI.highlight=function(){this.trigger("emphasis")},iI.downplay=function(){this.trigger("normal")},iI.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e))},iI.setLinePoints=function(t){var e=this.childOfName("line");Ga(e.shape,t),e.dirty()},du.inherits(Ha,Dp.Group);var nI=Ha,aI=Fa.prototype;aI.isPersistent=function(){return!0},aI.updateData=function(t){var e=this,i=e.group,n=e._lineData;e._lineData=t,n||i.removeAll();var a=Wa(t);t.diff(n).add(function(i){!function(t,e,i,n){if(Za(e.getItemLayout(i))){var a=new t._ctor(e,i,n);e.setItemGraphicEl(i,a),t.group.add(a)}}(e,t,i,a)}).update(function(i,r){!function(t,e,i,n,a,r){var o=e.getItemGraphicEl(n);Za(i.getItemLayout(a))?(o?o.updateData(i,a,r):o=new t._ctor(i,a,r),i.setItemGraphicEl(a,o),t.group.add(o)):t.group.remove(o)}(e,n,t,r,i,a)}).remove(function(t){i.remove(n.getItemGraphicEl(t))}).execute()},aI.updateLayout=function(){var t=this._lineData;t&&t.eachItemGraphicEl(function(e,i){e.updateLayout(t,i)},this)},aI.incrementalPrepareUpdate=function(t){this._seriesScope=Wa(t),this._lineData=null,this.group.removeAll()},aI.incrementalUpdate=function(t,e){for(var i=t.start;i<t.end;i++){if(Za(e.getItemLayout(i))){var n=new this._ctor(e,i,this._seriesScope);n.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),this.group.add(n),e.setItemGraphicEl(i,n)}}},aI.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},aI._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var rI=Fa,oI=[],sI=[],lI=[],uI=hd.quadraticAt,hI=pu.distSquare,cI=Math.abs,dI=function(t,e){function i(t){var e=t.getVisual("symbolSize");return e instanceof Array&&(e=(e[0]+e[1])/2),e}var n=[],a=hd.quadraticSubdivide,r=[[],[],[]],o=[[],[]],s=[];e/=2,t.eachEdge(function(t,l){var u=t.getLayout(),h=t.getVisual("fromSymbol"),c=t.getVisual("toSymbol");u.__original||(u.__original=[pu.clone(u[0]),pu.clone(u[1])],u[2]&&u.__original.push(pu.clone(u[2])));var d=u.__original;if(null!=u[2]){if(pu.copy(r[0],d[0]),pu.copy(r[1],d[2]),pu.copy(r[2],d[1]),h&&"none"!=h){var f=i(t.node1),p=ja(r,d[0],f*e);a(r[0][0],r[1][0],r[2][0],p,n),r[0][0]=n[3],r[1][0]=n[4],a(r[0][1],r[1][1],r[2][1],p,n),r[0][1]=n[3],r[1][1]=n[4]}if(c&&"none"!=c){var f=i(t.node2),p=ja(r,d[1],f*e);a(r[0][0],r[1][0],r[2][0],p,n),r[1][0]=n[1],r[2][0]=n[2],a(r[0][1],r[1][1],r[2][1],p,n),r[1][1]=n[1],r[2][1]=n[2]}pu.copy(u[0],r[0]),pu.copy(u[1],r[2]),pu.copy(u[2],r[1])}else pu.copy(o[0],d[0]),pu.copy(o[1],d[1]),pu.sub(s,o[1],o[0]),pu.normalize(s,s),h&&"none"!=h&&(f=i(t.node1),pu.scaleAndAdd(o[0],o[0],s,f*e)),c&&"none"!=c&&(f=i(t.node2),pu.scaleAndAdd(o[1],o[1],s,-f*e)),pu.copy(u[0],o[0]),pu.copy(u[1],o[1])})},fI=SS.onIrrelevantElement,pI=["itemStyle","opacity"],gI=["lineStyle","opacity"],mI=(C_.extendChartView({type:"graph",init:function(t,e){var i=new U_,n=new rI,a=this.group;this._controller=new _S(e.getZr()),this._controllerHost={target:a},a.add(i.group),a.add(n.group),this._symbolDraw=i,this._lineDraw=n,this._firstRender=!0},render:function(t,e,i){var n=t.coordinateSystem;this._model=t,this._nodeScaleRatio=t.get("nodeScaleRatio");var a=this._symbolDraw,r=this._lineDraw,o=this.group;if("view"===n.type){var s={position:n.position,scale:n.scale};this._firstRender?o.attr(s):Dp.updateProps(o,s,t)}dI(t.getGraph(),this._getNodeGlobalScale(t));var l=t.getData();a.updateData(l);var u=t.getEdgeData();r.updateData(u),this._updateNodeAndLinkScale(),this._updateController(t,e,i),clearTimeout(this._layoutTimeout);var h=t.forceLayout,c=t.get("force.layoutAnimation");h&&this._startForceLayoutIteration(h,c),l.eachItemGraphicEl(function(e,n){var a=l.getItemModel(n);e.off("drag").off("dragend");var r=l.getItemModel(n).get("draggable");r&&e.on("drag",function(){h&&(h.warmUp(),!this._layouting&&this._startForceLayoutIteration(h,c),h.setFixed(n),l.setItemLayout(n,e.position))},this).on("dragend",function(){h&&h.setUnfixed(n)},this),e.setDraggable(r&&h),e.off("mouseover",e.__focusNodeAdjacency),e.off("mouseout",e.__unfocusNodeAdjacency),a.get("focusNodeAdjacency")&&(e.on("mouseover",e.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex})}),e.on("mouseout",e.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))},this),l.graph.eachEdge(function(e){var n=e.getGraphicEl();n.off("mouseover",n.__focusNodeAdjacency),n.off("mouseout",n.__unfocusNodeAdjacency),e.getModel().get("focusNodeAdjacency")&&(n.on("mouseover",n.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex})}),n.on("mouseout",n.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))});var d="circular"===t.get("layout")&&t.get("circular.rotateLabel"),f=l.getLayout("cx"),p=l.getLayout("cy");l.eachItemGraphicEl(function(t,e){var i=t.getSymbolPath();if(d){var n=l.getItemLayout(e),a=Math.atan2(n[1]-p,n[0]-f);a<0&&(a=2*Math.PI+a);var r=n[0]<f;r&&(a-=Math.PI);var o=r?"left":"right";i.setStyle({textRotation:-a,textPosition:o,textOrigin:"center"}),i.hoverStyle&&(i.hoverStyle.textPosition=o)}else i.setStyle({textRotation:0})}),this._firstRender=!1},dispose:function(){this._controller&&this._controller.dispose(),this._controllerHost={}},focusNodeAdjacency:function(t,e,i,n){var a=this._model.getData().graph,r=n.dataIndex,o=n.edgeDataIndex,s=a.getNodeByIndex(r),l=a.getEdgeByIndex(o);(s||l)&&(a.eachNode(function(t){Xa(t,pI,.1)}),a.eachEdge(function(t){Xa(t,gI,.1)}),s&&(qa(s,pI),du.each(s.edges,function(t){t.dataIndex<0||(qa(t,gI),qa(t.node1,pI),qa(t.node2,pI))})),l&&(qa(l,gI),qa(l.node1,pI),qa(l.node2,pI)))},unfocusNodeAdjacency:function(t,e,i,n){var a=this._model.getData().graph;a.eachNode(function(t){Xa(t,pI)}),a.eachEdge(function(t){Xa(t,gI)})},_startForceLayoutIteration:function(t,e){var i=this;!function n(){t.step(function(t){i.updateLayout(i._model),(i._layouting=!t)&&(e?i._layoutTimeout=setTimeout(n,16):n())})}()},_updateController:function(t,e,i){var n=this._controller,a=this._controllerHost,r=this.group;n.setPointerChecker(function(e,n,a){var o=r.getBoundingRect();return o.applyTransform(r.transform),o.contain(n,a)&&!fI(e,i,t)}),"view"===t.coordinateSystem.type?(n.enable(t.get("roam")),a.zoomLimit=t.get("scaleLimit"),a.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e,n){bS.updateViewOnPan(a,e,n),i.dispatchAction({seriesId:t.id,type:"graphRoam",dx:e,dy:n})}).on("zoom",function(e,n,r){bS.updateViewOnZoom(a,e,n,r),i.dispatchAction({seriesId:t.id,type:"graphRoam",zoom:e,originX:n,originY:r}),this._updateNodeAndLinkScale(),dI(t.getGraph(),this._getNodeGlobalScale(t)),this._lineDraw.updateLayout()},this)):n.disable()},_updateNodeAndLinkScale:function(){var t=this._model,e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n)})},_getNodeGlobalScale:function(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,a=n&&n[0]||1;return((e.getZoom()-1)*i+1)/a},updateLayout:function(t){dI(t.getGraph(),this._getNodeGlobalScale(t)),this._symbolDraw.updateLayout(),this._lineDraw.updateLayout()},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(),this._lineDraw&&this._lineDraw.remove()}}),AS.updateCenterAndZoom);C_.registerAction({type:"graphRoam",event:"graphRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",query:t},function(e){var i=e.coordinateSystem,n=mI(i,t);e.setCenter&&e.setCenter(n.center),e.setZoom&&e.setZoom(n.zoom)})}),C_.registerAction({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series.graph:focusNodeAdjacency"},function(){}),C_.registerAction({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series.graph:unfocusNodeAdjacency"},function(){});var vI=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getGraph().data,a=i.mapArray(i.getName);n.filterSelf(function(t){var i=n.getItemModel(t).getShallow("category");if(null!=i){"number"==typeof i&&(i=a[i]);for(var r=0;r<e.length;r++)if(!e[r].isSelected(i))return!1}return!0})},this)},yI=function(t){var e={};t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getData(),a={};i.each(function(n){var r=i.getName(n);a["ec-"+r]=n;var o=i.getItemModel(n).get("itemStyle.color")||t.getColorFromPalette(r,e);i.setItemVisual(n,"color",o)}),i.count()&&n.each(function(t){var e=n.getItemModel(t).getShallow("category");null!=e&&("string"==typeof e&&(e=a["ec-"+e]),n.getItemVisual(t,"color",!0)||n.setItemVisual(t,"color",i.getItemVisual(e,"color")))})})},xI=function(t){t.eachSeriesByType("graph",function(t){var e=t.getGraph(),i=t.getEdgeData(),n=$a(t.get("edgeSymbol")),a=$a(t.get("edgeSymbolSize")),r="lineStyle.color".split("."),o="lineStyle.opacity".split(".");i.setVisual("fromSymbol",n&&n[0]),i.setVisual("toSymbol",n&&n[1]),i.setVisual("fromSymbolSize",a&&a[0]),i.setVisual("toSymbolSize",a&&a[1]),i.setVisual("color",t.get(r)),i.setVisual("opacity",t.get(o)),i.each(function(t){var n=i.getItemModel(t),a=e.getEdgeByIndex(t),s=$a(n.getShallow("symbol",!0)),l=$a(n.getShallow("symbolSize",!0)),u=n.get(r),h=n.get(o);switch(u){case"source":u=a.node1.getVisual("color");break;case"target":u=a.node2.getVisual("color")}s[0]&&a.setVisual("fromSymbol",s[0]),s[1]&&a.setVisual("toSymbol",s[1]),l[0]&&a.setVisual("fromSymbolSize",l[0]),l[1]&&a.setVisual("toSymbolSize",l[1]),a.setVisual("color",u),a.setVisual("opacity",h)})})},_I={simpleLayout:function(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=t.getGraph();i.eachNode(function(t){var e=t.getModel();t.setLayout([+e.get("x"),+e.get("y")])}),Ka(i)}},simpleLayoutEdge:Ka},bI=du.each,wI=_I.simpleLayout,SI=_I.simpleLayoutEdge,MI=function(t,e){t.eachSeriesByType("graph",function(t){var e=t.get("layout"),i=t.coordinateSystem;if(i&&"view"!==i.type){var n=t.getData(),a=[];bI(i.dimensions,function(t){a=a.concat(n.mapDimension(t,!0))});for(var r=0;r<n.count();r++){for(var o=[],s=!1,l=0;l<a.length;l++){var u=n.get(a[l],r);isNaN(u)||(s=!0),o.push(u)}s?n.setItemLayout(r,i.dataToPoint(o)):n.setItemLayout(r,[NaN,NaN])}SI(n.graph)}else e&&"none"!==e||wI(t)})},II={circularLayout:function(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=e.getBoundingRect(),n=t.getData(),a=n.graph,r=0,o=n.getSum("value"),s=2*Math.PI/(o||n.count()),l=i.width/2+i.x,u=i.height/2+i.y,h=Math.min(i.width,i.height)/2;a.eachNode(function(t){var e=t.getValue("value");r+=s*(o?e:1)/2,t.setLayout([h*Math.cos(r)+l,h*Math.sin(r)+u]),r+=s*(o?e:1)/2}),n.setLayout({cx:l,cy:u}),a.eachEdge(function(t){var e,i=t.getModel().get("lineStyle.curveness")||0,n=pu.clone(t.node1.getLayout()),a=pu.clone(t.node2.getLayout()),r=(n[0]+a[0])/2,o=(n[1]+a[1])/2;+i&&(e=[l*(i*=3)+r*(1-i),u*i+o*(1-i)]),t.setLayout([n,a,e])})}}},AI=II.circularLayout,TI=function(t){t.eachSeriesByType("graph",function(t){"circular"===t.get("layout")&&AI(t)})},DI=pu.scaleAndAdd,CI={forceLayout:function(t,e,i){for(var n=i.rect,a=n.width,r=n.height,o=[n.x+a/2,n.y+r/2],s=null==i.gravity?.1:i.gravity,l=0;l<t.length;l++){var u=t[l];u.p||(u.p=pu.create(a*(Math.random()-.5)+o[0],r*(Math.random()-.5)+o[1])),u.pp=pu.clone(u.p),u.edges=null}var h=.6;return{warmUp:function(){h=.5},setFixed:function(e){t[e].fixed=!0},setUnfixed:function(e){t[e].fixed=!1},step:function(i){for(var n=[],a=t.length,r=0;r<e.length;r++){var l=e[r],u=l.n1,c=l.n2;pu.sub(n,c.p,u.p);var d=pu.len(n)-l.d,f=c.w/(u.w+c.w);isNaN(f)&&(f=0),pu.normalize(n,n),!u.fixed&&DI(u.p,u.p,n,f*d*h),!c.fixed&&DI(c.p,c.p,n,-(1-f)*d*h)}for(r=0;r<a;r++)(v=t[r]).fixed||(pu.sub(n,o,v.p),DI(v.p,v.p,n,s*h));for(r=0;r<a;r++)for(var u=t[r],p=r+1;p<a;p++){c=t[p],pu.sub(n,c.p,u.p),0===(d=pu.len(n))&&(pu.set(n,Math.random()-.5,Math.random()-.5),d=1);var g=(u.rep+c.rep)/d/d;!u.fixed&&DI(u.pp,u.pp,n,g),!c.fixed&&DI(c.pp,c.pp,n,-g)}for(var m=[],r=0;r<a;r++){var v=t[r];v.fixed||(pu.sub(m,v.p,v.pp),DI(v.p,v.p,m,h),pu.copy(v.pp,v.p))}h*=.992,i&&i(t,e,h<.01)}}}}.forceLayout,LI=_I.simpleLayout,PI=II.circularLayout,kI=Up.linearMap,OI=function(t){t.eachSeriesByType("graph",function(t){if(!(c=t.coordinateSystem)||"view"===c.type)if("force"===t.get("layout")){var e=t.preservedPoints||{},i=t.getGraph(),n=i.data,a=i.edgeData,r=t.getModel("force"),o=r.get("initLayout");t.preservedPoints?n.each(function(t){var i=n.getId(t);n.setItemLayout(t,e[i]||[NaN,NaN])}):o&&"none"!==o?"circular"===o&&PI(t):LI(t);var s=n.getDataExtent("value"),l=a.getDataExtent("value"),u=r.get("repulsion"),h=r.get("edgeLength");du.isArray(u)||(u=[u,u]),du.isArray(h)||(h=[h,h]),h=[h[1],h[0]];var c,d=n.mapArray("value",function(t,e){var i=n.getItemLayout(e),a=kI(t,s,u);return isNaN(a)&&(a=(u[0]+u[1])/2),{w:a,rep:a,fixed:n.getItemModel(e).get("fixed"),p:!i||isNaN(i[0])||isNaN(i[1])?null:i}}),f=a.mapArray("value",function(t,e){var n=i.getEdgeByIndex(e),a=kI(t,l,h);return isNaN(a)&&(a=(h[0]+h[1])/2),{n1:d[n.node1.dataIndex],n2:d[n.node2.dataIndex],d:a,curveness:n.getModel().get("lineStyle.curveness")||0}}),p=(c=t.coordinateSystem).getBoundingRect(),g=CI(d,f,{rect:p,gravity:r.get("gravity")}),m=g.step;g.step=function(t){for(var a=0,r=d.length;a<r;a++)d[a].fixed&&pu.copy(d[a].p,i.getNodeByIndex(a).getLayout());m(function(a,r,o){for(var s=0,l=a.length;s<l;s++)a[s].fixed||i.getNodeByIndex(s).setLayout(a[s].p),e[n.getId(s)]=a[s].p;for(var s=0,l=r.length;s<l;s++){var u=r[s],h=i.getEdgeByIndex(s),c=u.n1.p,d=u.n2.p,f=h.getLayout();(f=f?f.slice():[])[0]=f[0]||[],f[1]=f[1]||[],pu.copy(f[0],c),pu.copy(f[1],d),+u.curveness&&(f[2]=[(c[0]+d[0])/2-(c[1]-d[1])*u.curveness,(c[1]+d[1])/2-(d[0]-c[0])*u.curveness]),h.setLayout(f)}t&&t(o)})},t.forceLayout=g,t.preservedPoints=e,g.step()}else t.forceLayout=null})},RI=ng.getLayoutRect,NI=function(t,e){var i=[];return t.eachSeriesByType("graph",function(t){var n=t.get("coordinateSystem");if(!n||"view"===n){var a=t.getData(),r=a.mapArray(function(t){var e=a.getItemModel(t);return[+e.get("x"),+e.get("y")]}),o=[],s=[];bd.fromPoints(r,o,s),s[0]-o[0]==0&&(s[0]+=1,o[0]-=1),s[1]-o[1]==0&&(s[1]+=1,o[1]-=1);var l=(s[0]-o[0])/(s[1]-o[1]),u=function(t,e,i){var n=t.getBoxLayoutParams();return n.aspect=i,RI(n,{width:e.getWidth(),height:e.getHeight()})}(t,e,l);isNaN(l)&&(o=[u.x,u.y],s=[u.x+u.width,u.y+u.height]);var h=s[0]-o[0],c=s[1]-o[1],d=u.width,f=u.height,p=t.coordinateSystem=new iS;p.zoomLimit=t.get("scaleLimit"),p.setBoundingRect(o[0],o[1],h,c),p.setViewRect(u.x,u.y,d,f),p.setCenter(t.get("center")),p.setZoom(t.get("zoom")),i.push(p)}}),i};C_.registerProcessor(vI),C_.registerVisual(hb("graph","circle",null)),C_.registerVisual(yI),C_.registerVisual(xI),C_.registerLayout(MI),C_.registerLayout(TI),C_.registerLayout(OI),C_.registerCoordinateSystem("graphView",{create:NI});xv.extend({type:"series.gauge",getInitialData:function(t,e){var i=t.data||[];return du.isArray(i)||(i=[i]),t.data=i,Aw(this,["value"])},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});var EI=af.extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(t,e){var i=Math.cos,n=Math.sin,a=e.r,r=e.width,o=e.angle,s=e.x-i(o)*r*(r>=a/3?1:2),l=e.y-n(o)*r*(r>=a/3?1:2);o=e.angle-Math.PI/2,t.moveTo(s,l),t.lineTo(e.x+i(o)*r,e.y+n(o)*r),t.lineTo(e.x+i(e.angle)*a,e.y+n(e.angle)*a),t.lineTo(e.x-i(o)*r,e.y-n(o)*r),t.lineTo(s,l)}}),zI=Up.parsePercent,VI=Up.round,BI=Up.linearMap,GI=2*Math.PI,HI=(Pv.extend({type:"gauge",render:function(t,e,i){this.group.removeAll();var n=t.get("axisLine.lineStyle.color"),a=function(t,e){var i=t.get("center"),n=e.getWidth(),a=e.getHeight(),r=Math.min(n,a);return{cx:zI(i[0],e.getWidth()),cy:zI(i[1],e.getHeight()),r:zI(t.get("radius"),r/2)}}(t,i);this._renderMain(t,e,i,n,a)},dispose:function(){},_renderMain:function(t,e,i,n,a){for(var r=this.group,o=t.getModel("axisLine").getModel("lineStyle"),s=t.get("clockwise"),l=-t.get("startAngle")/180*Math.PI,u=((f=-t.get("endAngle")/180*Math.PI)-l)%GI,h=l,c=o.get("width"),d=0;d<n.length;d++){var f=l+u*Math.min(Math.max(n[d][0],0),1),p=new Dp.Sector({shape:{startAngle:h,endAngle:f,cx:a.cx,cy:a.cy,clockwise:s,r0:a.r-c,r:a.r},silent:!0});p.setStyle({fill:n[d][1]}),p.setStyle(o.getLineStyle(["color","borderWidth","borderColor"])),r.add(p),h=f}var g=function(t){if(t<=0)return n[0][1];for(var e=0;e<n.length;e++)if(n[e][0]>=t&&(0===e?0:n[e-1][0])<t)return n[e][1];return n[e-1][1]};if(!s){var m=l;l=f,f=m}this._renderTicks(t,e,i,g,a,l,f,s),this._renderPointer(t,e,i,g,a,l,f,s),this._renderTitle(t,e,i,g,a),this._renderDetail(t,e,i,g,a)},_renderTicks:function(t,e,i,n,a,r,o,s){for(var l=this.group,u=a.cx,h=a.cy,c=a.r,d=+t.get("min"),f=+t.get("max"),p=t.getModel("splitLine"),g=t.getModel("axisTick"),m=t.getModel("axisLabel"),v=t.get("splitNumber"),y=g.get("splitNumber"),x=zI(p.get("length"),c),_=zI(g.get("length"),c),b=r,w=(o-r)/v,S=w/y,M=p.getModel("lineStyle").getLineStyle(),I=g.getModel("lineStyle").getLineStyle(),A=0;A<=v;A++){var T=Math.cos(b),D=Math.sin(b);if(p.get("show")){var C=new Dp.Line({shape:{x1:T*c+u,y1:D*c+h,x2:T*(c-x)+u,y2:D*(c-x)+h},style:M,silent:!0});"auto"===M.stroke&&C.setStyle({stroke:n(A/v)}),l.add(C)}if(m.get("show")){var L=Ja(VI(A/v*(f-d)+d),m.get("formatter")),P=m.get("distance"),k=n(A/v);l.add(new Dp.Text({style:Dp.setTextStyle({},m,{text:L,x:T*(c-x-P)+u,y:D*(c-x-P)+h,textVerticalAlign:D<-.4?"top":D>.4?"bottom":"middle",textAlign:T<-.4?"left":T>.4?"right":"center"},{autoColor:k}),silent:!0}))}if(g.get("show")&&A!==v){for(var O=0;O<=y;O++){var T=Math.cos(b),D=Math.sin(b),R=new Dp.Line({shape:{x1:T*c+u,y1:D*c+h,x2:T*(c-_)+u,y2:D*(c-_)+h},silent:!0,style:I});"auto"===I.stroke&&R.setStyle({stroke:n((A+O/y)/v)}),l.add(R),b+=S}b-=S}else b+=w}},_renderPointer:function(t,e,i,n,a,r,o,s){var l=this.group,u=this._data;if(t.get("pointer.show")){var h=[+t.get("min"),+t.get("max")],c=[r,o],d=t.getData(),f=d.mapDimension("value");d.diff(u).add(function(e){var i=new EI({shape:{angle:r}});Dp.initProps(i,{shape:{angle:BI(d.get(f,e),h,c,!0)}},t),l.add(i),d.setItemGraphicEl(e,i)}).update(function(e,i){var n=u.getItemGraphicEl(i);Dp.updateProps(n,{shape:{angle:BI(d.get(f,e),h,c,!0)}},t),l.add(n),d.setItemGraphicEl(e,n)}).remove(function(t){var e=u.getItemGraphicEl(t);l.remove(e)}).execute(),d.eachItemGraphicEl(function(t,e){var i=d.getItemModel(e),r=i.getModel("pointer");t.setShape({x:a.cx,y:a.cy,width:zI(r.get("width"),a.r),r:zI(r.get("length"),a.r)}),t.useStyle(i.getModel("itemStyle").getItemStyle()),"auto"===t.style.fill&&t.setStyle("fill",n(BI(d.get(f,e),h,[0,1],!0))),Dp.setHoverStyle(t,i.getModel("emphasis.itemStyle").getItemStyle())}),this._data=d}else u&&u.eachItemGraphicEl(function(t){l.remove(t)})},_renderTitle:function(t,e,i,n,a){var r=t.getData(),o=r.mapDimension("value"),s=t.getModel("title");if(s.get("show")){var l=s.get("offsetCenter"),u=a.cx+zI(l[0],a.r),h=a.cy+zI(l[1],a.r),c=+t.get("min"),d=+t.get("max"),f=t.getData().get(o,0),p=n(BI(f,[c,d],[0,1],!0));this.group.add(new Dp.Text({silent:!0,style:Dp.setTextStyle({},s,{x:u,y:h,text:r.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:p,forceRich:!0})}))}},_renderDetail:function(t,e,i,n,a){var r=t.getModel("detail"),o=+t.get("min"),s=+t.get("max");if(r.get("show")){var l=r.get("offsetCenter"),u=a.cx+zI(l[0],a.r),h=a.cy+zI(l[1],a.r),c=zI(r.get("width"),a.r),d=zI(r.get("height"),a.r),f=t.getData(),p=f.get(f.mapDimension("value"),0),g=n(BI(p,[o,s],[0,1],!0));this.group.add(new Dp.Text({silent:!0,style:Dp.setTextStyle({},r,{x:u,y:h,text:Ja(p,r.get("formatter")),textWidth:isNaN(c)?null:c,textHeight:isNaN(d)?null:d,textAlign:"center",textVerticalAlign:"middle"},{autoColor:g,forceRich:!0})}))}}}),Wc.defaultEmphasis),FI=C_.extendSeriesModel({type:"series.funnel",init:function(t){FI.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this._defaultLabelLine(t)},getInitialData:function(t,e){return Aw(this,["value"])},_defaultLabelLine:function(t){HI(t,"labelLine",["show"]);var e=t.labelLine,i=t.emphasis.labelLine;e.show=e.show&&t.label.show,i.show=i.show&&t.emphasis.label.show},getDataParams:function(t){var e=this.getData(),i=FI.superCall(this,"getDataParams",t),n=e.mapDimension("value"),a=e.getSum(n);return i.percent=a?+(e.get(n,t)/a*100).toFixed(2):0,i.$vars.push("percent"),i},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{show:!0,position:"outer"},labelLine:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0}}}}),WI=Qa.prototype,UI=["itemStyle","opacity"];WI.updateData=function(t,e,i){var n=this.childAt(0),a=t.hostModel,r=t.getItemModel(e),o=t.getItemLayout(e),s=t.getItemModel(e).get(UI);s=null==s?1:s,n.useStyle({}),i?(n.setShape({points:o.points}),n.setStyle({opacity:0}),Dp.initProps(n,{style:{opacity:s}},a,e)):Dp.updateProps(n,{style:{opacity:s},shape:{points:o.points}},a,e);var l=r.getModel("itemStyle"),u=t.getItemVisual(e,"color");n.setStyle(du.defaults({lineJoin:"round",fill:u},l.getItemStyle(["opacity"]))),n.hoverStyle=l.getModel("emphasis").getItemStyle(),this._updateLabel(t,e),Dp.setHoverStyle(this)},WI._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),a=t.hostModel,r=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Dp.updateProps(i,{shape:{points:o.linePoints||o.linePoints}},a,e),Dp.updateProps(n,{style:{x:o.x,y:o.y}},a,e),n.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=r.getModel("label"),u=r.getModel("emphasis.label"),h=r.getModel("labelLine"),c=r.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");Dp.setLabelStyle(n.style,n.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!u.get("show"),i.ignore=i.normalIgnore=!h.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s}),i.setStyle(h.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle()},du.inherits(Qa,Dp.Group);Pv.extend({type:"funnel",render:function(t,e,i){var n=t.getData(),a=this._data,r=this.group;n.diff(a).add(function(t){var e=new Qa(n,t);n.setItemGraphicEl(t,e),r.add(e)}).update(function(t,e){var i=a.getItemGraphicEl(e);i.updateData(n,t),r.add(i),n.setItemGraphicEl(t,i)}).remove(function(t){var e=a.getItemGraphicEl(t);r.remove(e)}).execute(),this._data=n},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});var ZI=Up.parsePercent,jI=Up.linearMap,YI=function(t,e,i){t.eachSeriesByType("funnel",function(t){var i=t.getData(),n=i.mapDimension("value"),a=t.get("sort"),r=function(t,e){return ng.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}(t,e),o=function(t,e){for(var i=t.mapDimension("value"),n=t.mapArray(i,function(t){return t}),a=[],r="ascending"===e,o=0,s=t.count();o<s;o++)a[o]=o;return"function"==typeof e?a.sort(e):"none"!==e&&a.sort(function(t,e){return r?n[t]-n[e]:n[e]-n[t]}),a}(i,a),s=[ZI(t.get("minSize"),r.width),ZI(t.get("maxSize"),r.width)],l=i.getDataExtent(n),u=t.get("min"),h=t.get("max");null==u&&(u=Math.min(l[0],0)),null==h&&(h=l[1]);var c=t.get("funnelAlign"),d=t.get("gap"),f=(r.height-d*(i.count()-1))/i.count(),p=r.y,g=function(t,e){var a,o=i.get(n,t)||0,l=jI(o,[u,h],s,!0);switch(c){case"left":a=r.x;break;case"center":a=r.x+(r.width-l)/2;break;case"right":a=r.x+r.width-l}return[[a,e],[a+l,e]]};"ascending"===a&&(f=-f,d=-d,p+=r.height,o=o.reverse());for(var m=0;m<o.length;m++){var v=o[m],y=o[m+1],x=i.getItemModel(v).get("itemStyle.height");null==x?x=f:(x=ZI(x,r.height),"ascending"===a&&(x=-x));var _=g(v,p),b=g(y,p+x);p+=x+d,i.setItemLayout(v,{points:_.concat(b.slice().reverse())})}!function(t){t.each(function(e){var i,n,a,r,o=t.getItemModel(e),s=o.getModel("label").get("position"),l=o.getModel("labelLine"),u=t.getItemLayout(e),h=u.points,c="inner"===s||"inside"===s||"center"===s;if(c)i="center",r=[[n=(h[0][0]+h[1][0]+h[2][0]+h[3][0])/4,a=(h[0][1]+h[1][1]+h[2][1]+h[3][1])/4],[n,a]];else{var d,f,p,g=l.get("length");"left"===s?(d=(h[3][0]+h[0][0])/2,f=(h[3][1]+h[0][1])/2,n=(p=d-g)-5,i="right"):(d=(h[1][0]+h[2][0])/2,f=(h[1][1]+h[2][1])/2,n=(p=d+g)+5,i="left");var m=f;r=[[d,f],[p,m]],a=m}u.label={linePoints:r,x:n,y:a,verticalAlign:"middle",textAlign:i,inside:c}})}(i)})};C_.registerVisual(Rw("funnel")),C_.registerLayout(YI),C_.registerProcessor(Hw("funnel"));var XI=function(t){!function(t){if(!t.parallel){var e=!1;du.each(t.series,function(t){t&&"parallel"===t.type&&(e=!0)}),e&&(t.parallel=[{}])}}(t),function(t){var e=Wc.normalizeToArray(t.parallelAxis);du.each(e,function(e){if(du.isObject(e)){var i=e.parallelIndex||0,n=Wc.normalizeToArray(t.parallel)[i];n&&n.parallelAxisDefault&&du.merge(e,n.parallelAxisDefault,!1)}})}(t)},qI=function(t,e,i,n,a){c_.call(this,t,e,i),this.type=n||"value",this.axisIndex=a};qI.prototype={constructor:qI,model:null,isHorizontal:function(){return"horizontal"!==this.coordinateSystem.getModel().get("layout")}},du.inherits(qI,c_);var $I=qI,KI=function(t,e,i,n,a,r){e[0]=er(e[0],i),e[1]=er(e[1],i),t=t||0;var o=i[1]-i[0];null!=a&&(a=er(a,[0,o])),null!=r&&(r=Math.max(r,null!=a?a:0)),"all"===n&&(a=r=Math.abs(e[1]-e[0]),n=0);var s=tr(e,n);e[n]+=t;var l=a||0,u=i.slice();s.sign<0?u[0]+=l:u[1]-=l,e[n]=er(e[n],u),h=tr(e,n),null!=a&&(h.sign!==s.sign||h.span<a)&&(e[1-n]=e[n]+s.sign*a);var h=tr(e,n);return null!=r&&h.span>r&&(e[1-n]=e[n]+h.sign*r),e},JI=du.each,QI=Math.min,tA=Math.max,eA=Math.floor,iA=Math.ceil,nA=Up.round,aA=Math.PI;ir.prototype={type:"parallel",constructor:ir,_init:function(t,e,i){var n=t.dimensions,a=t.parallelAxisIndex;JI(n,function(t,i){var n=a[i],r=e.getComponent("parallelAxis",n),o=this._axesMap.set(t,new $I(t,kx.createScaleByModel(r),[0,0],r.get("type"),n)),s="category"===o.type;o.onBand=s&&r.get("boundaryGap"),o.inverse=r.get("inverse"),r.axis=o,o.model=r,o.coordinateSystem=r.coordinateSystem=this},this)},update:function(t,e){this._updateAxesFromSeries(this._model,t)},containPoint:function(t){var e=this._makeLayoutInfo(),i=e.axisBase,n=e.layoutBase,a=e.pixelDimIndex,r=t[1-a],o=t[a];return r>=i&&r<=i+e.axisLength&&o>=n&&o<=n+e.layoutLength},getModel:function(){return this._model},_updateAxesFromSeries:function(t,e){e.eachSeries(function(i){if(t.contains(i,e)){var n=i.getData();JI(this.dimensions,function(t){var e=this._axesMap.get(t);e.scale.unionExtentFromData(n,n.mapDimension(t)),kx.niceScaleExtent(e.scale,e.model)},this)}},this)},resize:function(t,e){this._rect=ng.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),this._layoutAxes()},getRect:function(){return this._rect},_makeLayoutInfo:function(){var t,e=this._model,i=this._rect,n=["x","y"],a=["width","height"],r=e.get("layout"),o="horizontal"===r?0:1,s=i[a[o]],l=[0,s],u=this.dimensions.length,h=nr(e.get("axisExpandWidth"),l),c=nr(e.get("axisExpandCount")||0,[0,u]),d=e.get("axisExpandable")&&u>3&&u>c&&c>1&&h>0&&s>0,f=e.get("axisExpandWindow");if(f)t=nr(f[1]-f[0],l),f[1]=f[0]+t;else{t=nr(h*(c-1),l);(f=[h*(e.get("axisExpandCenter")||eA(u/2))-t/2])[1]=f[0]+t}var p=(s-t)/(u-c);p<3&&(p=0);var g=[eA(nA(f[0]/h,1))+1,iA(nA(f[1]/h,1))-1],m=p/h*f[0];return{layout:r,pixelDimIndex:o,layoutBase:i[n[o]],layoutLength:s,axisBase:i[n[1-o]],axisLength:i[a[1-o]],axisExpandable:d,axisExpandWidth:h,axisCollapseWidth:p,axisExpandWindow:f,axisCount:u,winInnerIndices:g,axisExpandWindow0Pos:m}},_layoutAxes:function(){var t=this._rect,e=this._axesMap,i=this.dimensions,n=this._makeLayoutInfo(),a=n.layout;e.each(function(t){var e=[0,n.axisLength],i=t.inverse?1:0;t.setExtent(e[i],e[1-i])}),JI(i,function(e,i){var r=(n.axisExpandable?function(t,e){var i,n,a=e.layoutLength,r=e.axisExpandWidth,o=e.axisCount,s=e.axisCollapseWidth,l=e.winInnerIndices,u=s,h=!1;return t<l[0]?(i=t*s,n=s):t<=l[1]?(i=e.axisExpandWindow0Pos+t*r-e.axisExpandWindow[0],u=r,h=!0):(i=a-(o-1-t)*s,n=s),{position:i,axisNameAvailableWidth:u,axisLabelShow:h,nameTruncateMaxWidth:n}}:function(t,e){var i=e.layoutLength/(e.axisCount-1);return{position:i*t,axisNameAvailableWidth:i,axisLabelShow:!0}})(i,n),o={horizontal:{x:r.position,y:n.axisLength},vertical:{x:0,y:r.position}},s={horizontal:aA/2,vertical:0},l=[o[a].x+t.x,o[a].y+t.y],u=s[a],h=Mu.create();Mu.rotate(h,h,u),Mu.translate(h,h,l),this._axesLayout[e]={position:l,rotation:u,transform:h,axisNameAvailableWidth:r.axisNameAvailableWidth,axisLabelShow:r.axisLabelShow,nameTruncateMaxWidth:r.nameTruncateMaxWidth,tickDirection:1,labelDirection:1}},this)},getAxis:function(t){return this._axesMap.get(t)},dataToPoint:function(t,e){return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t),e)},eachActiveState:function(t,e,i,n){null==i&&(i=0),null==n&&(n=t.count());var a=this._axesMap,r=this.dimensions,o=[],s=[];du.each(r,function(e){o.push(t.mapDimension(e)),s.push(a.get(e).model)});for(var l=this.hasAxisBrushed(),u=i;u<n;u++){var h;if(l){h="active";for(var c=t.getValues(o,u),d=0,f=r.length;d<f;d++){if("inactive"===s[d].getActiveState(c[d])){h="inactive";break}}}else h="normal";e(h,u)}},hasAxisBrushed:function(){for(var t=this.dimensions,e=this._axesMap,i=!1,n=0,a=t.length;n<a;n++)"normal"!==e.get(t[n]).model.getActiveState()&&(i=!0);return i},axisCoordToPoint:function(t,e){var i=this._axesLayout[e];return Dp.applyTransform([t,0],i.transform)},getAxisLayout:function(t){return du.clone(this._axesLayout[t])},getSlidedAxisExpandWindow:function(t){var e=this._makeLayoutInfo(),i=e.pixelDimIndex,n=e.axisExpandWindow.slice(),a=n[1]-n[0],r=[0,e.axisExpandWidth*(e.axisCount-1)];if(!this.containPoint(t))return{behavior:"none",axisExpandWindow:n};var o,s=t[i]-e.layoutBase-e.axisExpandWindow0Pos,l="slide",u=e.axisCollapseWidth,h=this._model.get("axisExpandSlideTriggerArea"),c=null!=h[0];if(u)c&&u&&s<a*h[0]?(l="jump",o=s-a*h[2]):c&&u&&s>a*(1-h[0])?(l="jump",o=s-a*(1-h[2])):(o=s-a*h[1])>=0&&(o=s-a*(1-h[1]))<=0&&(o=0),(o*=e.axisExpandWidth/u)?KI(o,n,r,"all"):l="none";else{a=n[1]-n[0];(n=[tA(0,r[1]*s/a-a/2)])[1]=QI(r[1],n[0]+a),n[0]=n[1]-a}return{axisExpandWindow:n,behavior:l}}};var rA=ir;vm.register("parallel",{create:function(t,e){var i=[];return t.eachComponent("parallel",function(n,a){var r=new rA(n,t,e);r.name="parallel_"+a,r.resize(n,e),n.coordinateSystem=r,r.model=n,i.push(r)}),t.eachSeries(function(e){if("parallel"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"parallel",index:e.get("parallelIndex"),id:e.get("parallelId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}});var oA=ug.extend({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function(){return Xc([["fill","color"],["lineWidth","borderWidth"],["stroke","borderColor"],["width","width"],["opacity","opacity"]])(this.getModel("areaSelectStyle"))},setActiveIntervals:function(t){var e=this.activeIntervals=du.clone(t);if(e)for(var i=e.length-1;i>=0;i--)Up.asc(e[i])},getActiveState:function(t){var e=this.activeIntervals;if(!e.length)return"normal";if(null==t||isNaN(t))return"inactive";if(1===e.length){var i=e[0];if(i[0]<=t&&t<=i[1])return"active"}else for(var n=0,a=e.length;n<a;n++)if(e[n][0]<=t&&t<=e[n][1])return"active";return"inactive"}});du.merge(oA.prototype,Ox),Db("parallel",oA,function(t,e){return e.type||(e.data?"category":"value")},{type:"value",dim:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},realtime:!0,z:10});ug.extend({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,layoutMode:"box",defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",axisExpandable:!1,axisExpandCenter:null,axisExpandCount:0,axisExpandWidth:50,axisExpandRate:17,axisExpandDebounce:50,axisExpandSlideTriggerArea:[-.15,.05,.4],axisExpandTriggerOn:"click",parallelAxisDefault:null},init:function(){ug.prototype.init.apply(this,arguments),this.mergeOption({})},mergeOption:function(t){var e=this.option;t&&du.merge(e,t,!0),this._initDimensions()},contains:function(t,e){var i=t.get("parallelIndex");return null!=i&&e.getComponent("parallel",i)===this},setAxisExpand:function(t){du.each(["axisExpandable","axisExpandCenter","axisExpandCount","axisExpandWidth","axisExpandWindow"],function(e){t.hasOwnProperty(e)&&(this.option[e]=t[e])},this)},_initDimensions:function(){var t=this.dimensions=[],e=this.parallelAxisIndex=[],i=du.filter(this.dependentModels.parallelAxis,function(t){return(t.get("parallelIndex")||0)===this.componentIndex},this);du.each(i,function(i){t.push("dim"+i.get("dim")),e.push(i.componentIndex)})}});C_.registerAction({type:"axisAreaSelect",event:"axisAreaSelected"},function(t,e){e.eachComponent({mainType:"parallelAxis",query:t},function(e){e.axis.model.setActiveIntervals(t.intervals)})}),C_.registerAction("parallelAxisExpand",function(t,e){e.eachComponent({mainType:"parallel",query:t},function(e){e.setAxisExpand(t)})});var sA=du.curry,lA=du.each,uA=du.map,hA=Math.min,cA=Math.max,dA=Math.pow,fA=1e4,pA=6,gA=6,mA="globalPan",vA={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},yA={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},xA={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},_A=0;ar.prototype={constructor:ar,enableBrush:function(t){return this._brushType&&function(t){var e=t._zr;xS.release(e,mA,t._uid),lA(t._handlers,function(t,i){e.off(i,t)}),t._brushType=t._brushOption=null}(this),t.brushType&&function(t,e){var i=t._zr;t._enableGlobalPan||xS.take(i,mA,t._uid),lA(t._handlers,function(t,e){i.on(e,t)}),t._brushType=e.brushType,t._brushOption=du.merge(du.clone(xA),e,!0)}(this,t),this},setPanels:function(t){if(t&&t.length){var e=this._panels={};du.each(t,function(t){e[t.panelId]=du.clone(t)})}else this._panels=null;return this},mount:function(t){t=t||{},this._enableGlobalPan=t.enableGlobalPan;var e=this.group;return this._zr.add(e),e.attr({position:t.position||[0,0],rotation:t.rotation||0,scale:t.scale||[1,1]}),this._transform=e.getLocalTransform(),this},eachCover:function(t,e){lA(this._covers,t,e)},updateCovers:function(t){function e(t,e){return(null!=t.id?t.id:n+e)+"-"+t.brushType}function i(e,i){var n=t[e];if(null!=i&&a[i]===s)r[e]=a[i];else{var l=r[e]=null!=i?(a[i].__brushOption=n,a[i]):or(o,rr(o,n));ur(o,l)}}t=du.map(t,function(t){return du.merge(du.clone(xA),t,!0)});var n="\0-brush-index-",a=this._covers,r=this._covers=[],o=this,s=this._creatingCover;return new hy(a,t,function(t,i){return e(t.__brushOption,i)},e).add(i).update(i).remove(function(t){a[t]!==s&&o.group.remove(a[t])}).execute(),this},unmount:function(){return this.enableBrush(!1),fr(this),this._zr.remove(this.group),this},dispose:function(){this.unmount(),this.off()}},du.mixin(ar,yu);var bA={mousedown:function(t){if(this._dragging)Lr.call(this,t);else if(!t.target||!t.target.draggable){Ar(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);this._creatingCover=null;(this._creatingPanel=cr(this,t,e))&&(this._dragging=!0,this._track=[e.slice()])}},mousemove:function(t){var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);if(function(t,e,i){if(t._brushType){var n=t._zr,a=t._covers,r=cr(t,e,i);if(!t._dragging)for(var o=0;o<a.length;o++){var s=a[o].__brushOption;if(r&&(!0===r||s.panelId===r.panelId)&&wA[s.brushType].contain(a[o],i[0],i[1]))return}r&&n.setCursorStyle("crosshair")}}(this,t,e),this._dragging){Ar(t);var i=Dr(this,t,e,!1);i&&pr(this,i)}},mouseup:Lr},wA={lineX:Pr(0),lineY:Pr(1),rect:{createCover:function(t,e){return mr(sA(Sr,function(t){return t},function(t){return t}),t,e,["w","e","n","s","se","sw","ne","nw"])},getCreatingRange:function(t){var e=gr(t);return br(e[1][0],e[1][1],e[0][0],e[0][1])},updateCoverShape:function(t,e,i,n){vr(t,e,i,n)},updateCommon:yr,contain:Tr},polygon:{createCover:function(t,e){var i=new Dp.Group;return i.add(new Dp.Polyline({name:"main",style:_r(e),silent:!0})),i},getCreatingRange:function(t){return t},endCreating:function(t,e){e.remove(e.childAt(0)),e.add(new Dp.Polygon({name:"main",draggable:!0,drift:sA(function(t,e,i,n,a){var r=e.__brushOption.range,o=Mr(t,i,n);lA(r,function(t){t[0]+=o[0],t[1]+=o[1]}),ur(t,e),pr(t,{isEnd:!1})},t,e),ondragend:sA(pr,t,{isEnd:!0})}))},updateCoverShape:function(t,e,i,n){e.childAt(0).setShape({points:Ir(t,e,i)})},updateCommon:yr,contain:Tr}},SA=ar,MA=SS.onIrrelevantElement,IA={makeRectPanelClipPath:function(t){return t=kr(t),function(e,i){return Dp.clipPointsByRect(e,t)}},makeLinearBrushOtherExtent:function(t,e){return t=kr(t),function(i){var n=null!=e?e:i,a=n?t.width:t.height,r=n?t.x:t.y;return[r,r+(a||0)]}},makeRectIsTargetByCursor:function(t,e,i){return t=kr(t),function(n,a,r){return t.contain(a[0],a[1])&&!MA(n,e,i)}}},AA=["axisLine","axisTickLabel","axisName"],TA=C_.extendComponentView({type:"parallelAxis",init:function(t,e){TA.superApply(this,"init",arguments),(this._brushController=new SA(e.getZr())).on("brush",du.bind(this._onBrush,this))},render:function(t,e,i,n){if(!function(t,e,i){return i&&"axisAreaSelect"===i.type&&e.findComponents({mainType:"parallelAxis",query:i})[0]===t}(t,e,n)){this.axisModel=t,this.api=i,this.group.removeAll();var a=this._axisGroup;if(this._axisGroup=new Dp.Group,this.group.add(this._axisGroup),t.get("show")){var r=function(t,e){return e.getComponent("parallel",t.get("parallelIndex"))}(t,e),o=r.coordinateSystem,s=t.getAreaSelectStyle(),l=s.width,u=t.axis.dim,h=o.getAxisLayout(u),c=du.extend({strokeContainThreshold:l},h),d=new ew(t,c);du.each(AA,d.add,d),this._axisGroup.add(d.getGroup()),this._refreshBrushController(c,s,t,r,l,i);var f=n&&!1===n.animation?null:t;Dp.groupTransition(a,this._axisGroup,f)}}},_refreshBrushController:function(t,e,i,n,a,r){var o=i.axis.getExtent(),s=o[1]-o[0],l=Math.min(30,.1*Math.abs(s)),u=Dp.BoundingRect.create({x:o[0],y:-a/2,width:s,height:a});u.x-=l,u.width+=2*l,this._brushController.mount({enableGlobalPan:!0,rotation:t.rotation,position:t.position}).setPanels([{panelId:"pl",clipPath:IA.makeRectPanelClipPath(u),isTargetByCursor:IA.makeRectIsTargetByCursor(u,r,n),getLinearBrushOtherExtent:IA.makeLinearBrushOtherExtent(u,0)}]).enableBrush({brushType:"lineX",brushStyle:e,removeOnClick:!0}).updateCovers(function(t){var e=t.axis;return du.map(t.activeIntervals,function(t){return{brushType:"lineX",panelId:"pl",range:[e.dataToCoord(t[0],!0),e.dataToCoord(t[1],!0)]}})}(i))},_onBrush:function(t,e){var i=this.axisModel,n=i.axis,a=du.map(t,function(t){return[n.coordToData(t.range[0],!0),n.coordToData(t.range[1],!0)]});(!i.option.realtime===e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"axisAreaSelect",parallelAxisId:i.id,intervals:a})},dispose:function(){this._brushController.dispose()}});C_.extendComponentView({type:"parallel",render:function(t,e,i){this._model=t,this._api=i,this._handlers||(this._handlers={},du.each(DA,function(t,e){i.getZr().on(e,this._handlers[e]=du.bind(t,this))},this)),Nv.createOrUpdate(this,"_throttledDispatchExpand",t.get("axisExpandRate"),"fixRate")},dispose:function(t,e){du.each(this._handlers,function(t,i){e.getZr().off(i,t)}),this._handlers=null},_throttledDispatchExpand:function(t){this._dispatchExpand(t)},_dispatchExpand:function(t){t&&this._api.dispatchAction(du.extend({type:"parallelAxisExpand"},t))}});var DA={mousedown:function(t){Or(this,"click")&&(this._mouseDownPoint=[t.offsetX,t.offsetY])},mouseup:function(t){var e=this._mouseDownPoint;if(Or(this,"click")&&e){var i=[t.offsetX,t.offsetY];if(Math.pow(e[0]-i[0],2)+Math.pow(e[1]-i[1],2)>5)return;var n=this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]);"none"!==n.behavior&&this._dispatchExpand({axisExpandWindow:n.axisExpandWindow})}this._mouseDownPoint=null},mousemove:function(t){if(!this._mouseDownPoint&&Or(this,"mousemove")){var e=this._model,i=e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]),n=i.behavior;"jump"===n&&this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")),this._throttledDispatchExpand("none"===n?null:{axisExpandWindow:i.axisExpandWindow,animation:"jump"===n&&null})}}};C_.registerPreprocessor(XI);var CA=du.each,LA=du.createHashMap,PA=(xv.extend({type:"series.parallel",dependencies:["parallel"],visualColorAccessPath:"lineStyle.color",getInitialData:function(t,e){var i=this.getSource();return function(t,e){if(!t.encodeDefine){var i=e.ecModel.getComponent("parallel",e.get("parallelIndex"));if(i){var n=t.encodeDefine=LA();CA(i.dimensions,function(t){var e=+t.replace("dim","");n.set(t,e)})}}}(i,this),Xy(i,this)},getRawIndicesByActiveState:function(t){var e=this.coordinateSystem,i=this.getData(),n=[];return e.eachActiveState(i,function(e,a){t===e&&n.push(i.getRawIndex(a))}),n},defaultOption:{zlevel:0,z:2,coordinateSystem:"parallel",parallelIndex:0,label:{show:!1},inactiveOpacity:.05,activeOpacity:1,lineStyle:{width:1,opacity:.45,type:"solid"},emphasis:{label:{show:!1}},progressive:500,smooth:!1,animationEasing:"linear"}}),.3),kA=(Pv.extend({type:"parallel",init:function(){this._dataGroup=new Dp.Group,this.group.add(this._dataGroup),this._data,this._initialized},render:function(t,e,i,n){var a=this._dataGroup,r=t.getData(),o=this._data,s=t.coordinateSystem,l=s.dimensions,u=Er(t);if(r.diff(o).add(function(t){zr(Nr(r,a,t,l,s),r,t,u)}).update(function(e,i){var a=o.getItemGraphicEl(i),h=Rr(r,e,l,s);r.setItemGraphicEl(e,a);var c=n&&!1===n.animation?null:t;Dp.updateProps(a,{shape:{points:h}},c,e),zr(a,r,e,u)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),!this._initialized){this._initialized=!0;var h=function(t,e,i){var n=t.model,a=t.getRect(),r=new Dp.Rect({shape:{x:a.x,y:a.y,width:a.width,height:a.height}}),o="horizontal"===n.get("layout")?"width":"height";return r.setShape(o,0),Dp.initProps(r,{shape:{width:a.width,height:a.height}},e,i),r}(s,t,function(){setTimeout(function(){a.removeClipPath()})});a.setClipPath(h)}this._data=r},incrementalPrepareRender:function(t,e,i){this._initialized=!0,this._data=null,this._dataGroup.removeAll()},incrementalRender:function(t,e,i){for(var n=e.getData(),a=e.coordinateSystem,r=a.dimensions,o=Er(e),s=t.start;s<t.end;s++){var l=Nr(n,this._dataGroup,s,r,a);l.incremental=!0,zr(l,n,s,o)}},dispose:function(){},remove:function(){this._dataGroup&&this._dataGroup.removeAll(),this._data=null}}),["lineStyle","normal","opacity"]),OA={seriesType:"parallel",reset:function(t,e,i){var n=t.getModel("itemStyle"),a=t.getModel("lineStyle"),r=e.get("color"),o=a.get("color")||n.get("color")||r[t.seriesIndex%r.length],s=t.get("inactiveOpacity"),l=t.get("activeOpacity"),u=t.getModel("lineStyle").getLineStyle(),h=t.coordinateSystem,c=t.getData(),d={normal:u.opacity,active:l,inactive:s};return c.setVisual("color",o),{progress:function(t,e){h.eachActiveState(e,function(t,i){var n=d[t];if("normal"===t&&e.hasItemOption){var a=e.getItemModel(i).get(kA,!0);null!=a&&(n=a)}e.setItemVisual(i,"opacity",n)},t.start,t.end)}}}};C_.registerVisual(OA);var RA=qp.encodeHTML,NA=xv.extend({type:"series.sankey",layoutInfo:null,getInitialData:function(t){var e=t.edges||t.links,i=t.data||t.nodes;if(i&&e){return YM(i,e,this,!0).data}},setNodePosition:function(t,e){var i=this.option.data[t];i.localX=e[0],i.localY=e[1]},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getDataParams(t,i),a=n.data,r=a.source+" -- "+a.target;return n.value&&(r+=" : "+n.value),RA(r)}return NA.superCall(this,"formatTooltip",t,e)},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",nodeWidth:20,nodeGap:8,draggable:!0,layoutIterations:32,label:{show:!0,position:"right",color:"#000",fontSize:12},itemStyle:{borderWidth:1,borderColor:"#333"},lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.6}},animationEasing:"linear",animationDuration:1e3}}),EA=Dp.extendShape({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0},buildPath:function(t,e){var i=e.extent/2;t.moveTo(e.x1,e.y1-i),t.bezierCurveTo(e.cpx1,e.cpy1-i,e.cpx2,e.cpy2-i,e.x2,e.y2-i),t.lineTo(e.x2,e.y2+i),t.bezierCurveTo(e.cpx2,e.cpy2+i,e.cpx1,e.cpy1+i,e.x1,e.y1+i),t.closePath()}});C_.extendChartView({type:"sankey",_model:null,render:function(t,e,i){var n=t.getGraph(),a=this.group,r=t.layoutInfo,o=r.width,s=r.height,l=t.getData(),u=t.getData("edge");this._model=t,a.removeAll(),a.attr("position",[r.x,r.y]),n.eachEdge(function(e){var i=new EA;i.dataIndex=e.dataIndex,i.seriesIndex=t.seriesIndex,i.dataType="edge";var n=e.getModel("lineStyle"),r=n.get("curveness"),l=e.node1.getLayout(),h=e.node1.getModel(),c=h.get("localX"),d=h.get("localY"),f=e.node2.getLayout(),p=e.node2.getModel(),g=p.get("localX"),m=p.get("localY"),v=e.getLayout();i.shape.extent=Math.max(1,v.dy);var y=(null!=c?c*o:l.x)+l.dx,x=(null!=d?d*s:l.y)+v.sy+v.dy/2,_=null!=g?g*o:f.x,b=(null!=m?m*s:f.y)+v.ty+v.dy/2,w=y*(1-r)+_*r,S=x,M=y*r+_*(1-r),I=b;switch(i.setShape({x1:y,y1:x,x2:_,y2:b,cpx1:w,cpy1:S,cpx2:M,cpy2:I}),i.setStyle(n.getItemStyle()),i.style.fill){case"source":i.style.fill=e.node1.getVisual("color");break;case"target":i.style.fill=e.node2.getVisual("color")}Dp.setHoverStyle(i,e.getModel("emphasis.lineStyle").getItemStyle()),a.add(i),u.setItemGraphicEl(e.dataIndex,i)}),n.eachNode(function(e){var i=e.getLayout(),n=e.getModel(),r=n.get("localX"),u=n.get("localY"),h=n.getModel("label"),c=n.getModel("emphasis.label"),d=new Dp.Rect({shape:{x:null!=r?r*o:i.x,y:null!=u?u*s:i.y,width:i.dx,height:i.dy},style:n.getModel("itemStyle").getItemStyle()}),f=e.getModel("emphasis.itemStyle").getItemStyle();Dp.setLabelStyle(d.style,f,h,c,{labelFetcher:t,labelDataIndex:e.dataIndex,defaultText:e.id,isRectText:!0}),d.setStyle("fill",e.getVisual("color")),Dp.setHoverStyle(d,f),a.add(d),l.setItemGraphicEl(e.dataIndex,d),d.dataType="node"});t.get("draggable")&&l.eachItemGraphicEl(function(e,n){e.drift=function(e,a){this.shape.x+=e,this.shape.y+=a,this.dirty(),i.dispatchAction({type:"dragNode",seriesId:t.id,dataIndex:l.getRawIndex(n),localX:this.shape.x/o,localY:this.shape.y/s})},e.draggable=!0,e.cursor="move"}),!this._data&&t.get("animation")&&a.setClipPath(function(t,e,i){var n=new Dp.Rect({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return Dp.initProps(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}(a.getBoundingRect(),t,function(){a.removeClipPath()})),this._data=t.getData()},dispose:function(){}});C_.registerAction({type:"dragNode",event:"dragNode",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"sankey",query:t},function(e){e.setNodePosition(t.dataIndex,[t.localX,t.localY])})});var zA=function(){function t(e,n){if(n>=i.length)return e;for(var a=-1,r=e.length,o=i[n++],s={},l={};++a<r;){var u=o(e[a]),h=l[u];h?h.push(e[a]):l[u]=[e[a]]}return du.each(l,function(e,i){s[i]=t(e,n)}),s}function e(t,a){if(a>=i.length)return t;var r=[],o=n[a++];return du.each(t,function(t,i){r.push({key:i,values:e(t,a)})}),o?r.sort(function(t,e){return o(t.key,e.key)}):r}var i=[],n=[];return{key:function(t){return i.push(t),this},sortKeys:function(t){return n[i.length-1]=t,this},entries:function(i){return e(t(i,0),0)}}},VA=function(t,e,i){t.eachSeriesByType("sankey",function(t){var i=t.get("nodeWidth"),n=t.get("nodeGap"),a=function(t,e){return ng.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}(t,e);t.layoutInfo=a;var r=a.width,o=a.height,s=t.getGraph(),l=s.nodes,u=s.edges;!function(t){du.each(t,function(t){var e=Br(t.outEdges,Hr),i=Br(t.inEdges,Hr),n=Math.max(e,i);t.setLayout({value:n},!0)})}(l),function(t,e,i,n,a,r,o){(function(t,e,i,n){for(var a=[],r=[],o=[],s=[],l=0,u=0;u<e.length;u++)a[u]=1;for(u=0;u<t.length;u++)r[u]=t[u].inEdges.length,0===r[u]&&o.push(t[u]);for(;o.length;)du.each(o,function(n){n.setLayout({x:l},!0),n.setLayout({dx:i},!0),du.each(n.outEdges,function(i){var n=e.indexOf(i);a[n]=0;var o=i.node2,l=t.indexOf(o);0==--r[l]&&s.push(o)})}),++l,o=s,s=[];for(u=0;u<a.length;u++);(function(t,e){du.each(t,function(t){t.outEdges.length||t.setLayout({x:e-1},!0)})})(t,l),function(t,e){du.each(t,function(t){var i=t.getLayout().x*e;t.setLayout({x:i},!0)})}(t,(n-i)/(l-1))})(t,e,i,a),function(t,e,i,n,a){var r=zA().key(function(t){return t.getLayout().x}).sortKeys(function(t,e){return t-e}).entries(t).map(function(t){return t.values});(function(t,e,i,n,a){var r=[];du.each(e,function(t){var e=t.length,i=0;du.each(t,function(t){i+=t.getLayout().value});var o=(n-(e-1)*a)/i;r.push(o)}),r.sort(function(t,e){return t-e});var o=r[0];du.each(e,function(t){du.each(t,function(t,e){t.setLayout({y:e},!0);var i=t.getLayout().value*o;t.setLayout({dy:i},!0)})}),du.each(i,function(t){var e=+t.getValue()*o;t.setLayout({dy:e},!0)})})(0,r,e,i,n),Vr(r,n,i);for(var o=1;a>0;a--)(function(t,e){du.each(t.slice().reverse(),function(t){du.each(t,function(t){if(t.outEdges.length){var i=Br(t.outEdges,function(t){return Gr(t.node2)*t.getValue()})/Br(t.outEdges,Hr),n=t.getLayout().y+(i-Gr(t))*e;t.setLayout({y:n},!0)}})})})(r,o*=.99),Vr(r,n,i),function(t,e){du.each(t,function(t){du.each(t,function(t){if(t.inEdges.length){var i=Br(t.inEdges,function(t){return Gr(t.node1)*t.getValue()})/Br(t.inEdges,Hr),n=t.getLayout().y+(i-Gr(t))*e;t.setLayout({y:n},!0)}})})}(r,o),Vr(r,n,i)}(t,e,r,n,o),function(t){du.each(t,function(t){t.outEdges.sort(function(t,e){return t.node2.getLayout().y-e.node2.getLayout().y}),t.inEdges.sort(function(t,e){return t.node1.getLayout().y-e.node1.getLayout().y})}),du.each(t,function(t){var e=0,i=0;du.each(t.outEdges,function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy}),du.each(t.inEdges,function(t){t.setLayout({ty:i},!0),i+=t.getLayout().dy})})}(t)}(l,u,i,n,r,o,0!==du.filter(l,function(t){return 0===t.getLayout().value}).length?0:t.get("layoutIterations"))})},BA=function(t,e){t.eachSeriesByType("sankey",function(t){var e=t.getGraph().nodes;if(e.length){var i=1/0,n=-1/0;du.each(e,function(t){var e=t.getLayout().value;e<i&&(i=e),e>n&&(n=e)}),du.each(e,function(e){var a=new TM({type:"color",mappingMethod:"linear",dataExtent:[i,n],visual:t.get("color")}).mapValueToVisual(e.getLayout().value);e.setVisual("color",a);var r=e.getModel().get("itemStyle.color");null!=r&&e.setVisual("color",r)})}})};C_.registerLayout(VA),C_.registerVisual(BA);var GA=py.getDimensionTypeByAxis,HA={seriesModelMixin:{_baseAxisDim:null,getInitialData:function(t,e){var i,n,a=e.getComponent("xAxis",this.get("xAxisIndex")),r=e.getComponent("yAxis",this.get("yAxisIndex")),o=a.get("type"),s=r.get("type");"category"===o?(t.layout="horizontal",i=a.getOrdinalMeta(),n=!0):"category"===s?(t.layout="vertical",i=r.getOrdinalMeta(),n=!0):t.layout=t.layout||"horizontal";var l=["x","y"],u="horizontal"===t.layout?0:1,h=this._baseAxisDim=l[u],c=l[1-u],d=[a,r],f=d[u].get("type"),p=d[1-u].get("type"),g=t.data;if(g&&n){var m=[];du.each(g,function(t,e){var i;t.value&&du.isArray(t.value)?(i=t.value.slice(),t.value.unshift(e)):du.isArray(t)?(i=t.slice(),t.unshift(e)):i=t,m.push(i)}),t.data=m}var v=this.defaultValueDimensions;return Aw(this,{coordDimensions:[{name:h,type:GA(f),ordinalMeta:i,otherDims:{tooltip:!1,itemName:0},dimsDef:["base"]},{name:c,type:GA(p),dimsDef:v.slice()}],dimensionsCount:v.length+1})},getBaseAxis:function(){var t=this._baseAxisDim;return this.ecModel.getComponent(t+"Axis",this.get(t+"AxisIndex")).axis}}},FA=HA.seriesModelMixin,WA=xv.extend({type:"series.boxplot",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"min",defaultTooltip:!0},{name:"Q1",defaultTooltip:!0},{name:"median",defaultTooltip:!0},{name:"Q3",defaultTooltip:!0},{name:"max",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,boxWidth:[7,50],itemStyle:{color:"#fff",borderWidth:1},emphasis:{itemStyle:{borderWidth:2,shadowBlur:5,shadowOffsetX:2,shadowOffsetY:2,shadowColor:"rgba(0,0,0,0.4)"}},animationEasing:"elasticOut",animationDuration:800}});du.mixin(WA,FA,!0);var UA=["itemStyle"],ZA=["emphasis","itemStyle"],jA=(Pv.extend({type:"boxplot",render:function(t,e,i){var n=t.getData(),a=this.group,r=this._data;this._data||a.removeAll();var o="horizontal"===t.get("layout")?1:0;n.diff(r).add(function(t){if(n.hasValue(t)){var e=Fr(n.getItemLayout(t),n,t,o,!0);n.setItemGraphicEl(t,e),a.add(e)}}).update(function(t,e){var i=r.getItemGraphicEl(e);if(n.hasValue(t)){var s=n.getItemLayout(t);i?Wr(s,i,n,t):i=Fr(s,n,t,o),a.add(i),n.setItemGraphicEl(t,i)}else a.remove(i)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&a.remove(e)}).execute(),this._data=n},remove:function(t){var e=this.group,i=this._data;this._data=null,i&&i.eachItemGraphicEl(function(t){t&&e.remove(t)})},dispose:du.noop}),af.extend({type:"boxplotBoxPath",shape:{},buildPath:function(t,e){var i=e.points,n=0;for(t.moveTo(i[n][0],i[n][1]),n++;n<4;n++)t.lineTo(i[n][0],i[n][1]);for(t.closePath();n<i.length;n++)t.moveTo(i[n][0],i[n][1]),n++,t.lineTo(i[n][0],i[n][1])}})),YA=["itemStyle","borderColor"],XA=function(t,e){var i=t.get("color");t.eachRawSeriesByType("boxplot",function(e){var n=i[e.seriesIndex%i.length],a=e.getData();a.setVisual({legendSymbol:"roundRect",color:e.get(YA)||n}),t.isSeriesFiltered(e)||a.each(function(t){var e=a.getItemModel(t);a.setItemVisual(t,{color:e.get(YA,!0)})})})},qA=Up.parsePercent,$A=du.each,KA=function(t){var e=function(t){var e=[],i=[];return t.eachSeriesByType("boxplot",function(t){var n=t.getBaseAxis(),a=du.indexOf(i,n);a<0&&(a=i.length,i[a]=n,e[a]={axis:n,seriesModels:[]}),e[a].seriesModels.push(t)}),e}(t);$A(e,function(t){var e=t.seriesModels;e.length&&(function(t){var e,i,n=t.axis,a=t.seriesModels,r=a.length,o=t.boxWidthList=[],s=t.boxOffsetList=[],l=[];if("category"===n.type)i=n.getBandWidth();else{var u=0;$A(a,function(t){u=Math.max(u,t.getData().count())}),e=n.getExtent(),Math.abs(e[1]-e[0])}$A(a,function(t){var e=t.get("boxWidth");du.isArray(e)||(e=[e,e]),l.push([qA(e[0],i)||0,qA(e[1],i)||0])});var h=.8*i-2,c=h/r*.3,d=(h-c*(r-1))/r,f=d/2-h/2;$A(a,function(t,e){s.push(f),f+=c+d,o.push(Math.min(Math.max(d,l[e][0]),l[e][1]))})}(t),$A(e,function(e,i){!function(t,e,i){function n(t,i,n){var a=s.get(i,n),r=[];r[u]=t,r[h]=a;var l;return isNaN(t)||isNaN(a)?l=[NaN,NaN]:(l=o.dataToPoint(r))[u]+=e,l}function a(t,e,i){var n=e.slice(),a=e.slice();n[u]+=l,a[u]-=l,i?t.push(n,a):t.push(a,n)}function r(t,e){var i=e.slice(),n=e.slice();i[u]-=l,n[u]+=l,t.push(i,n)}var o=t.coordinateSystem,s=t.getData(),l=i/2,u="horizontal"===t.get("layout")?0:1,h=1-u,c=["x","y"],d=s.mapDimension(c[u]),f=s.mapDimension(c[h],!0);if(!(null==d||f.length<5))for(var p=0;p<s.count();p++){var g=s.get(d,p),m=n(g,f[2],p),v=n(g,f[0],p),y=n(g,f[1],p),x=n(g,f[3],p),_=n(g,f[4],p),b=[];a(b,y,0),a(b,x,1),b.push(v,y,_,x),r(b,v),r(b,_),r(b,m),s.setItemLayout(p,{initBaseline:m[h],ends:b})}}(e,t.boxOffsetList[i],t.boxWidthList[i])}))})};C_.registerVisual(XA),C_.registerLayout(KA);var JA=HA.seriesModelMixin,QA=xv.extend({type:"series.candlestick",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:[{name:"open",defaultTooltip:!0},{name:"close",defaultTooltip:!0},{name:"lowest",defaultTooltip:!0},{name:"highest",defaultTooltip:!0}],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,itemStyle:{color:"#c23531",color0:"#314656",borderWidth:1,borderColor:"#c23531",borderColor0:"#314656"},emphasis:{itemStyle:{borderWidth:2}},barMaxWidth:null,barMinWidth:null,barWidth:null,large:!0,largeThreshold:600,progressive:5e3,progressiveThreshold:1e4,progressiveChunkMode:"mod",animationUpdate:!1,animationEasing:"linear",animationDuration:300},getShadowDim:function(){return"open"},brushSelector:function(t,e,i){var n=e.getItemLayout(t);return n&&i.rect(n.brushRect)}});du.mixin(QA,JA,!0);var tT=["itemStyle"],eT=["emphasis","itemStyle"],iT=["color","color0","borderColor","borderColor0"],nT=(Pv.extend({type:"candlestick",render:function(t,e,i){this._updateDrawMode(t),this._isLargeDraw?this._renderLarge(t):this._renderNormal(t)},incrementalPrepareRender:function(t,e,i){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,i,n){this._isLargeDraw?this._incrementalRenderLarge(t,e):this._incrementalRenderNormal(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t){var e=t.getData(),i=this._data,n=this.group,a=e.getLayout("isSimpleBox");this._data||n.removeAll(),e.diff(i).add(function(i){if(e.hasValue(i)){var r,o=e.getItemLayout(i);r=Ur(o,0,!0),Dp.initProps(r,{shape:{points:o.ends}},t,i),Zr(r,e,i,a),n.add(r),e.setItemGraphicEl(i,r)}}).update(function(r,o){var s=i.getItemGraphicEl(o);if(e.hasValue(r)){var l=e.getItemLayout(r);s?Dp.updateProps(s,{shape:{points:l.ends}},t,r):s=Ur(l),Zr(s,e,r,a),n.add(s),e.setItemGraphicEl(r,s)}else n.remove(s)}).remove(function(t){var e=i.getItemGraphicEl(t);e&&n.remove(e)}).execute(),this._data=e},_renderLarge:function(t){this._clear(),jr(t,this.group)},_incrementalRenderNormal:function(t,e){for(var i,n=e.getData(),a=n.getLayout("isSimpleBox");null!=(i=t.next());){var r;Zr(r=Ur(n.getItemLayout(i)),n,i,a),r.incremental=!0,this.group.add(r)}},_incrementalRenderLarge:function(t,e){jr(e,this.group,!0)},remove:function(t){this._clear()},_clear:function(){this.group.removeAll(),this._data=null},dispose:du.noop}),af.extend({type:"normalCandlestickBox",shape:{},buildPath:function(t,e){var i=e.points;this.__simpleBox?(t.moveTo(i[4][0],i[4][1]),t.lineTo(i[6][0],i[6][1])):(t.moveTo(i[0][0],i[0][1]),t.lineTo(i[1][0],i[1][1]),t.lineTo(i[2][0],i[2][1]),t.lineTo(i[3][0],i[3][1]),t.closePath(),t.moveTo(i[4][0],i[4][1]),t.lineTo(i[5][0],i[5][1]),t.moveTo(i[6][0],i[6][1]),t.lineTo(i[7][0],i[7][1]))}})),aT=af.extend({type:"largeCandlestickBox",shape:{},buildPath:function(t,e){for(var i=e.points,n=0;n<i.length;)if(this.__sign===i[n++]){var a=i[n++];t.moveTo(a,i[n++]),t.lineTo(a,i[n++])}else n+=3}}),rT=function(t){t&&du.isArray(t.series)&&du.each(t.series,function(t){du.isObject(t)&&"k"===t.type&&(t.type="candlestick")})},oT=["itemStyle","borderColor"],sT=["itemStyle","borderColor0"],lT=["itemStyle","color"],uT=["itemStyle","color0"],hT={seriesType:"candlestick",plan:Mv(),performRawSeries:!0,reset:function(t,e){function i(t,e){return e.get(t>0?lT:uT)}function n(t,e){return e.get(t>0?oT:sT)}var a=t.getData(),r=t.pipelineContext.large;if(a.setVisual({legendSymbol:"roundRect",colorP:i(1,t),colorN:i(-1,t),borderColorP:n(1,t),borderColorN:n(-1,t)}),!e.isSeriesFiltered(t))return!r&&{progress:function(t,e){for(var a;null!=(a=t.next());){var r=e.getItemModel(a),o=e.getItemLayout(a).sign;e.setItemVisual(a,{color:i(o,r),borderColor:n(o,r)})}}}}},cT=Dp.subPixelOptimize,dT=Up.parsePercent,fT=du.retrieve2,pT="undefined"!=typeof Float32Array?Float32Array:Array,gT={seriesType:"candlestick",plan:Mv(),reset:function(t){var e=t.coordinateSystem,i=t.getData(),n=function(t,e){var i,n=t.getBaseAxis(),a="category"===n.type?n.getBandWidth():(i=n.getExtent(),Math.abs(i[1]-i[0])/e.count()),r=dT(fT(t.get("barMaxWidth"),a),a),o=dT(fT(t.get("barMinWidth"),1),a),s=t.get("barWidth");return null!=s?dT(s,a):Math.max(Math.min(a/2,r),o)}(t,i),a=0,r=1,o=["x","y"],s=i.mapDimension(o[a]),l=i.mapDimension(o[r],!0),u=l[0],h=l[1],c=l[2],d=l[3];if(i.setLayout({candleWidth:n,isSimpleBox:n<=1.3}),!(null==s||l.length<4))return{progress:t.pipelineContext.large?function(t,i){for(var n,o,l=new pT(5*t.count),f=0,p=[],g=[];null!=(o=t.next());){var m=i.get(s,o),v=i.get(u,o),y=i.get(h,o),x=i.get(c,o),_=i.get(d,o);isNaN(m)||isNaN(x)||isNaN(_)?(l[f++]=NaN,f+=4):(l[f++]=Xr(i,o,v,y,h),p[a]=m,p[r]=x,n=e.dataToPoint(p,null,g),l[f++]=n?n[0]:NaN,l[f++]=n?n[1]:NaN,p[r]=_,n=e.dataToPoint(p,null,g),l[f++]=n?n[1]:NaN)}i.setLayout("largePoints",l)}:function(t,i){function o(t,i){var n=[];return n[a]=i,n[r]=t,isNaN(i)||isNaN(t)?[NaN,NaN]:e.dataToPoint(n)}function l(t,e,i){var r=e.slice(),o=e.slice();r[a]=cT(r[a]+n/2,1,!1),o[a]=cT(o[a]-n/2,1,!0),i?t.push(r,o):t.push(o,r)}function f(t){return t[a]=cT(t[a],1),t}for(var p;null!=(p=t.next());){var g=i.get(s,p),m=i.get(u,p),v=i.get(h,p),y=i.get(c,p),x=i.get(d,p),_=Math.min(m,v),b=Math.max(m,v),w=o(_,g),S=o(b,g),M=o(y,g),I=o(x,g),A=[];l(A,S,0),l(A,w,1),A.push(f(I),f(S),f(M),f(w)),i.setItemLayout(p,{sign:Xr(i,p,m,v,h),initBaseline:m>v?S[r]:w[r],ends:A,brushRect:function(t,e,i){var s=o(t,i),l=o(e,i);return s[a]-=n/2,l[a]-=n/2,{x:s[0],y:s[1],width:r?n:l[0]-s[0],height:r?l[1]-s[1]:n}}(y,x,g)})}}}}};C_.registerPreprocessor(rT),C_.registerVisual(hT),C_.registerLayout(gT);xv.extend({type:"series.effectScatter",dependencies:["grid","polar"],getInitialData:function(t,e){return Xy(this.getSource(),this)},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,effectType:"ripple",progressive:0,showEffectOn:"render",rippleEffect:{period:4,scale:2.5,brushType:"fill"},symbolSize:10}});var mT=Fx.createSymbol,vT=Dp.Group,yT=Up.parsePercent,xT=$r.prototype;xT.stopEffectAnimation=function(){this.childAt(1).removeAll()},xT.startEffectAnimation=function(t){for(var e=t.symbolType,i=t.color,n=this.childAt(1),a=0;a<3;a++){var r=mT(e,-1,-1,2,2,i);r.attr({style:{strokeNoScale:!0},z2:99,silent:!0,scale:[.5,.5]});var o=-a/3*t.period+t.effectOffset;r.animate("",!0).when(t.period,{scale:[t.rippleScale/2,t.rippleScale/2]}).delay(o).start(),r.animateStyle(!0).when(t.period,{opacity:0}).delay(o).start(),n.add(r)}qr(n,t)},xT.updateEffectAnimation=function(t){for(var e=this._effectCfg,i=this.childAt(1),n=["symbolType","period","rippleScale"],a=0;a<n.length;a++){var r=n[a];if(e[r]!==t[r])return this.stopEffectAnimation(),void this.startEffectAnimation(t)}qr(i,t)},xT.highlight=function(){this.trigger("emphasis")},xT.downplay=function(){this.trigger("normal")},xT.updateData=function(t,e){var i=t.hostModel;this.childAt(0).updateData(t,e);var n=this.childAt(1),a=t.getItemModel(e),r=t.getItemVisual(e,"symbol"),o=function(t){return du.isArray(t)||(t=[+t,+t]),t}(t.getItemVisual(e,"symbolSize")),s=t.getItemVisual(e,"color");n.attr("scale",o),n.traverse(function(t){t.attr({fill:s})});var l=a.getShallow("symbolOffset");if(l){var u=n.position;u[0]=yT(l[0],o[0]),u[1]=yT(l[1],o[1])}n.rotation=(a.getShallow("symbolRotate")||0)*Math.PI/180||0;var h={};if(h.showEffectOn=i.get("showEffectOn"),h.rippleScale=a.get("rippleEffect.scale"),h.brushType=a.get("rippleEffect.brushType"),h.period=1e3*a.get("rippleEffect.period"),h.effectOffset=e/t.count(),h.z=a.getShallow("z")||0,h.zlevel=a.getShallow("zlevel")||0,h.symbolType=r,h.color=s,this.off("mouseover").off("mouseout").off("emphasis").off("normal"),"render"===h.showEffectOn)this._effectCfg?this.updateEffectAnimation(h):this.startEffectAnimation(h),this._effectCfg=h;else{this._effectCfg=null,this.stopEffectAnimation();var c=this.childAt(0),d=function(){c.highlight(),"render"!==h.showEffectOn&&this.startEffectAnimation(h)},f=function(){c.downplay(),"render"!==h.showEffectOn&&this.stopEffectAnimation()};this.on("mouseover",d,this).on("mouseout",f,this).on("emphasis",d,this).on("normal",f,this)}this._effectCfg=h},xT.fadeOut=function(t){this.off("mouseover").off("mouseout").off("emphasis").off("normal"),t&&t()},du.inherits($r,vT);var _T=$r;C_.extendChartView({type:"effectScatter",init:function(){this._symbolDraw=new U_(_T)},render:function(t,e,i){var n=t.getData(),a=this._symbolDraw;a.updateData(n),this.group.add(a.group)},updateTransform:function(t,e,i){var n=t.getData();this.group.dirty();var a=fb().reset(t);a.progress&&a.progress({start:0,end:n.count()},n),this._symbolDraw.updateLayout(n)},_updateGroupTransform:function(t){var e=t.coordinateSystem;e&&e.getRoamTransform&&(this.group.transform=Mu.clone(e.getRoamTransform()),this.group.decomposeTransform())},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(e)},dispose:function(){}});C_.registerVisual(hb("effectScatter","circle")),C_.registerLayout(fb("effectScatter"));var bT=du.concatArray,wT=du.mergeAll,ST=du.map,MT=qp.encodeHTML,IT="undefined"==typeof Uint32Array?Array:Uint32Array,AT="undefined"==typeof Float64Array?Array:Float64Array,TT=xv.extend({type:"series.lines",dependencies:["grid","polar"],visualColorAccessPath:"lineStyle.color",init:function(t){t.data=t.data||[],Kr(t);var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count)),TT.superApply(this,"init",arguments)},mergeOption:function(t){if(t.data=t.data||[],Kr(t),t.data){var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count))}TT.superApply(this,"mergeOption",arguments)},appendData:function(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=bT(this._flatCoords,e.flatCoords),this._flatCoordsOffset=bT(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data)},_getCoordsFromItemModel:function(t){var e=this.getData().getItemModel(t);return e.option instanceof Array?e.option:e.getShallow("coords")},getLineCoordsCount:function(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length},getLineCoords:function(t,e){if(this._flatCoordsOffset){for(var i=this._flatCoordsOffset[2*t],n=this._flatCoordsOffset[2*t+1],a=0;a<n;a++)e[a]=e[a]||[],e[a][0]=this._flatCoords[i+2*a],e[a][1]=this._flatCoords[i+2*a+1];return n}for(var r=this._getCoordsFromItemModel(t),a=0;a<r.length;a++)e[a]=e[a]||[],e[a][0]=r[a][0],e[a][1]=r[a][1];return r.length},_processFlatCoordsArray:function(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),"number"==typeof t[0]){for(var i=t.length,n=new IT(i),a=new AT(i),r=0,o=0,s=0,l=0;l<i;){s++;var u=t[l++];n[o++]=r+e,n[o++]=u;for(var h=0;h<u;h++){var c=t[l++],d=t[l++];a[r++]=c,a[r++]=d}}return{flatCoordsOffset:new Uint32Array(n.buffer,0,o),flatCoords:a,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:t.length}},getInitialData:function(t,e){var i=new Ty(["value"],this);return i.hasItemOption=!1,i.initData(t.data,[],function(t,e,n,a){if(t instanceof Array)return NaN;i.hasItemOption=!0;var r=t.value;return null!=r?r instanceof Array?r[a]:r:void 0}),i},formatTooltip:function(t){var e=this.getData().getItemModel(t),i=e.get("name");if(i)return i;var n=e.get("fromName"),a=e.get("toName"),r=[];return null!=n&&r.push(n),null!=a&&r.push(a),MT(r.join(" > "))},preventIncremental:function(){return!!this.get("effect.show")},getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?1e4:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?2e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,label:{show:!1,position:"end"},lineStyle:{opacity:.5}}}),DT=Fx.createSymbol,CT=Jr.prototype;CT.createLine=function(t,e,i){return new nI(t,e,i)},CT._updateEffectSymbol=function(t,e){var i=t.getItemModel(e).getModel("effect"),n=i.get("symbolSize"),a=i.get("symbol");du.isArray(n)||(n=[n,n]);var r=i.get("color")||t.getItemVisual(e,"color"),o=this.childAt(1);this._symbolType!==a&&(this.remove(o),(o=DT(a,-.5,-.5,1,1,r)).z2=100,o.culling=!0,this.add(o)),o&&(o.setStyle("shadowColor",r),o.setStyle(i.getItemStyle(["color"])),o.attr("scale",n),o.setColor(r),o.attr("scale",n),this._symbolType=a,this._updateEffectAnimation(t,i,e))},CT._updateEffectAnimation=function(t,e,i){var n=this.childAt(1);if(n){var a=this,r=t.getItemLayout(i),o=1e3*e.get("period"),s=e.get("loop"),l=e.get("constantSpeed"),u=du.retrieve(e.get("delay"),function(e){return e/t.count()*o/3}),h="function"==typeof u;if(n.ignore=!0,this.updateAnimationPoints(n,r),l>0&&(o=this.getLineLength(n)/l*1e3),o!==this._period||s!==this._loop){n.stopAnimation();var c=u;h&&(c=u(i)),n.__t>0&&(c=-o*n.__t),n.__t=0;var d=n.animate("",s).when(o,{__t:1}).delay(c).during(function(){a.updateSymbolPosition(n)});s||d.done(function(){a.remove(n)}),d.start()}this._period=o,this._loop=s}},CT.getLineLength=function(t){return pu.dist(t.__p1,t.__cp1)+pu.dist(t.__cp1,t.__p2)},CT.updateAnimationPoints=function(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]},CT.updateData=function(t,e,i){this.childAt(0).updateData(t,e,i),this._updateEffectSymbol(t,e)},CT.updateSymbolPosition=function(t){var e=t.__p1,i=t.__p2,n=t.__cp1,a=t.__t,r=t.position,o=hd.quadraticAt,s=hd.quadraticDerivativeAt;r[0]=o(e[0],n[0],i[0],a),r[1]=o(e[1],n[1],i[1],a);var l=s(e[0],n[0],i[0],a),u=s(e[1],n[1],i[1],a);t.rotation=-Math.atan2(u,l)-Math.PI/2,t.ignore=!1},CT.updateLayout=function(t,e){this.childAt(0).updateLayout(t,e);var i=t.getItemModel(e).getModel("effect");this._updateEffectAnimation(t,i,e)},du.inherits(Jr,Dp.Group);var LT=Jr,PT=Qr.prototype;PT._createPolyline=function(t,e,i){var n=t.getItemLayout(e),a=new Dp.Polyline({shape:{points:n}});this.add(a),this._updateCommonStl(t,e,i)},PT.updateData=function(t,e,i){var n=t.hostModel,a=this.childAt(0),r={shape:{points:t.getItemLayout(e)}};Dp.updateProps(a,r,n,e),this._updateCommonStl(t,e,i)},PT._updateCommonStl=function(t,e,i){var n=this.childAt(0),a=t.getItemModel(e),r=t.getItemVisual(e,"color"),o=i&&i.lineStyle,s=i&&i.hoverLineStyle;i&&!t.hasItemOption||(o=a.getModel("lineStyle").getLineStyle(),s=a.getModel("emphasis.lineStyle").getLineStyle()),n.useStyle(du.defaults({strokeNoScale:!0,fill:"none",stroke:r},o)),n.hoverStyle=s,Dp.setHoverStyle(this)},PT.updateLayout=function(t,e){this.childAt(0).setShape("points",t.getItemLayout(e))},du.inherits(Qr,Dp.Group);var kT=Qr,OT=to.prototype;OT.createLine=function(t,e,i){return new kT(t,e,i)},OT.updateAnimationPoints=function(t,e){this._points=e;for(var i=[0],n=0,a=1;a<e.length;a++){var r=e[a-1],o=e[a];n+=pu.dist(r,o),i.push(n)}if(0!==n){for(a=0;a<i.length;a++)i[a]/=n;this._offsets=i,this._length=n}},OT.getLineLength=function(t){return this._length},OT.updateSymbolPosition=function(t){var e=t.__t,i=this._points,n=this._offsets,a=i.length;if(n){var r=this._lastFrame;if(e<this._lastFramePercent){for(o=Math.min(r+1,a-1);o>=0&&!(n[o]<=e);o--);o=Math.min(o,a-2)}else{for(var o=r;o<a&&!(n[o]>e);o++);o=Math.min(o-1,a-2)}pu.lerp(t.position,i[o],i[o+1],(e-n[o])/(n[o+1]-n[o]));var s=i[o+1][0]-i[o][0],l=i[o+1][1]-i[o][1];t.rotation=-Math.atan2(l,s)-Math.PI/2,this._lastFrame=o,this._lastFramePercent=e,t.ignore=!1}},du.inherits(to,LT);var RT=to,NT=Dp.extendShape({shape:{polyline:!1,curveness:0,segs:[]},buildPath:function(t,e){var i=e.segs,n=e.curveness;if(e.polyline)for(o=0;o<i.length;){var a=i[o++];if(a>0){t.moveTo(i[o++],i[o++]);for(var r=1;r<a;r++)t.lineTo(i[o++],i[o++])}}else for(var o=0;o<i.length;){var s=i[o++],l=i[o++],u=i[o++],h=i[o++];if(t.moveTo(s,l),n>0){var c=(s+u)/2-(l-h)*n,d=(l+h)/2-(u-s)*n;t.quadraticCurveTo(c,d,u,h)}else t.lineTo(u,h)}},findDataIndex:function(t,e){var i=this.shape,n=i.segs,a=i.curveness;if(i.polyline)for(var r=0,o=0;o<n.length;){var s=n[o++];if(s>0)for(var l=n[o++],u=n[o++],h=1;h<s;h++){var c=n[o++],d=n[o++];if(zd.containStroke(l,u,c,d))return r}r++}else for(var r=0,o=0;o<n.length;){var l=n[o++],u=n[o++],c=n[o++],d=n[o++];if(a>0){var f=(l+c)/2-(u-d)*a,p=(u+d)/2-(c-l)*a;if(Gd.containStroke(l,u,f,p,c,d))return r}else if(zd.containStroke(l,u,c,d))return r;r++}return-1}}),ET=eo.prototype;ET.isPersistent=function(){return!this._incremental},ET.updateData=function(t){this.group.removeAll();var e=new NT({rectHover:!0,cursor:"default"});e.setShape({segs:t.getLayout("linesPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},ET.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>5e5?(this._incremental||(this._incremental=new op({silent:!0})),this.group.add(this._incremental)):this._incremental=null},ET.incrementalUpdate=function(t,e){var i=new NT;i.setShape({segs:e.getLayout("linesPoints")}),this._setCommon(i,e,!!this._incremental),this._incremental?this._incremental.addDisplayable(i,!0):(i.rectHover=!0,i.cursor="default",i.__startIndex=t.start,this.group.add(i))},ET.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},ET._setCommon=function(t,e,i){var n=e.hostModel;t.setShape({polyline:n.get("polyline"),curveness:n.get("lineStyle.curveness")}),t.useStyle(n.getModel("lineStyle").getLineStyle()),t.style.strokeNoScale=!0;var a=e.getVisual("color");a&&t.setStyle("stroke",a),t.setStyle("fill"),i||(t.seriesIndex=n.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var i=t.findDataIndex(e.offsetX,e.offsetY);i>0&&(t.dataIndex=i+t.__startIndex)}))},ET._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var zT=eo,VT={seriesType:"lines",plan:Mv(),reset:function(t){var e=t.coordinateSystem,i=t.get("polyline"),n=t.pipelineContext.large;return{progress:function(a,r){var o=[];if(n){var s,l=a.end-a.start;if(i){for(var u=0,h=a.start;h<a.end;h++)u+=t.getLineCoordsCount(h);s=new Float32Array(l+2*u)}else s=new Float32Array(4*l);for(var c=0,d=[],h=a.start;h<a.end;h++){g=t.getLineCoords(h,o),i&&(s[c++]=g);for(var f=0;f<g;f++)d=e.dataToPoint(o[f],!1,d),s[c++]=d[0],s[c++]=d[1]}r.setLayout("linesPoints",s)}else for(h=a.start;h<a.end;h++){var p=r.getItemModel(h),g=t.getLineCoords(h,o),m=[];if(i)for(var v=0;v<g;v++)m.push(e.dataToPoint(o[v]));else{m[0]=e.dataToPoint(o[0]),m[1]=e.dataToPoint(o[1]);var y=p.get("lineStyle.curveness");+y&&(m[2]=[(m[0][0]+m[1][0])/2-(m[0][1]-m[1][1])*y,(m[0][1]+m[1][1])/2-(m[1][0]-m[0][0])*y])}r.setItemLayout(h,m)}}}}},BT=(C_.extendChartView({type:"lines",init:function(){},render:function(t,e,i){var n=t.getData(),a=this._updateLineDraw(n,t),r=t.get("zlevel"),o=t.get("effect.trailLength"),s=i.getZr(),l="svg"===s.painter.getType();l||s.painter.getLayer(r).clear(!0),null==this._lastZlevel||l||s.configLayer(this._lastZlevel,{motionBlur:!1}),this._showEffect(t)&&o&&(l||s.configLayer(r,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(o/10+.9,1),0)})),a.updateData(n),this._lastZlevel=r,this._finished=!0},incrementalPrepareRender:function(t,e,i){var n=t.getData();this._updateLineDraw(n,t).incrementalPrepareUpdate(n),this._clearLayer(i),this._finished=!1},incrementalRender:function(t,e,i){this._lineDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t,e,i){var n=t.getData(),a=t.pipelineContext;if(!this._finished||a.large||a.progressiveRender)return{update:!0};var r=VT.reset(t);r.progress&&r.progress({start:0,end:n.count()},n),this._lineDraw.updateLayout(),this._clearLayer(i)},_updateLineDraw:function(t,e){var i=this._lineDraw,n=this._showEffect(e),a=!!e.get("polyline"),r=e.pipelineContext.large;return i&&n===this._hasEffet&&a===this._isPolyline&&r===this._isLargeDraw||(i&&i.remove(),i=this._lineDraw=r?new zT:new rI(a?n?RT:kT:n?LT:nI),this._hasEffet=n,this._isPolyline=a,this._isLargeDraw=r,this.group.removeAll()),this.group.add(i.group),i},_showEffect:function(t){return!!t.get("effect.show")},_clearLayer:function(t){var e=t.getZr();"svg"===e.painter.getType()||null==this._lastZlevel||e.painter.getLayer(this._lastZlevel).clear(!0)},remove:function(t,e){this._lineDraw&&this._lineDraw.remove(),this._lineDraw=null,this._clearLayer(e)},dispose:function(){}}),"lineStyle.opacity".split(".")),GT={seriesType:"lines",reset:function(t,e,i){var n=io(t.get("symbol")),a=io(t.get("symbolSize")),r=t.getData();return r.setVisual("fromSymbol",n&&n[0]),r.setVisual("toSymbol",n&&n[1]),r.setVisual("fromSymbolSize",a&&a[0]),r.setVisual("toSymbolSize",a&&a[1]),r.setVisual("opacity",t.get(BT)),{dataEach:r.hasItemOption?function(t,e){var i=t.getItemModel(e),n=io(i.getShallow("symbol",!0)),a=io(i.getShallow("symbolSize",!0)),r=i.get(BT);n[0]&&t.setItemVisual(e,"fromSymbol",n[0]),n[1]&&t.setItemVisual(e,"toSymbol",n[1]),a[0]&&t.setItemVisual(e,"fromSymbolSize",a[0]),a[1]&&t.setItemVisual(e,"toSymbolSize",a[1]),t.setItemVisual(e,"opacity",r)}:null}}};C_.registerLayout(VT),C_.registerVisual(GT);xv.extend({type:"series.heatmap",getInitialData:function(t,e){return Xy(this.getSource(),this,{generateCoord:"value"})},preventIncremental:function(){var t=vm.get(this.get("coordinateSystem"));if(t&&t.dimensions)return"lng"===t.dimensions[0]&&"lat"===t.dimensions[1]},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,geoIndex:0,blurSize:30,pointSize:20,maxOpacity:1,minOpacity:0}});no.prototype={update:function(t,e,i,n,a,r){var o=this._getBrush(),s=this._getGradient(t,a,"inRange"),l=this._getGradient(t,a,"outOfRange"),u=this.pointSize+this.blurSize,h=this.canvas,c=h.getContext("2d"),d=t.length;h.width=e,h.height=i;for(var f=0;f<d;++f){var p=t[f],g=p[0],m=p[1],v=n(p[2]);c.globalAlpha=v,c.drawImage(o,g-u,m-u)}if(!h.width||!h.height)return h;for(var y=c.getImageData(0,0,h.width,h.height),x=y.data,_=0,b=x.length,w=this.minOpacity,S=this.maxOpacity-w;_<b;){var v=x[_+3]/256,M=4*Math.floor(255*v);if(v>0){var I=r(v)?s:l;v>0&&(v=v*S+w),x[_++]=I[M],x[_++]=I[M+1],x[_++]=I[M+2],x[_++]=I[M+3]*v*256}else _+=4}return c.putImageData(y,0,0),h},_getBrush:function(){var t=this._brushCanvas||(this._brushCanvas=du.createCanvas()),e=this.pointSize+this.blurSize,i=2*e;t.width=i,t.height=i;var n=t.getContext("2d");return n.clearRect(0,0,i,i),n.shadowOffsetX=i,n.shadowBlur=this.blurSize,n.shadowColor="#000",n.beginPath(),n.arc(-e,e,this.pointSize,0,2*Math.PI,!0),n.closePath(),n.fill(),t},_getGradient:function(t,e,i){for(var n=this._gradientPixels,a=n[i]||(n[i]=new Uint8ClampedArray(1024)),r=[0,0,0,0],o=0,s=0;s<256;s++)e[i](s/255,!0,r),a[o++]=r[0],a[o++]=r[1],a[o++]=r[2],a[o++]=r[3];return a}};var HT=no,FT=(C_.extendChartView({type:"heatmap",render:function(t,e,i){var n;e.eachComponent("visualMap",function(e){e.eachTargetSeries(function(i){i===t&&(n=e)})}),this.group.removeAll(),this._incrementalDisplayable=null;var a=t.coordinateSystem;"cartesian2d"===a.type||"calendar"===a.type?this._renderOnCartesianAndCalendar(t,i,0,t.getData().count()):function(t){var e=t.dimensions;return"lng"===e[0]&&"lat"===e[1]}(a)&&this._renderOnGeo(a,t,n,i)},incrementalPrepareRender:function(t,e,i){this.group.removeAll()},incrementalRender:function(t,e,i,n){e.coordinateSystem&&this._renderOnCartesianAndCalendar(e,n,t.start,t.end,!0)},_renderOnCartesianAndCalendar:function(t,e,i,n,a){var r,o,s=t.coordinateSystem;if("cartesian2d"===s.type){var l=s.getAxis("x"),u=s.getAxis("y");r=l.getBandWidth(),o=u.getBandWidth()}for(var h=this.group,c=t.getData(),d=t.getModel("itemStyle").getItemStyle(["color"]),f=t.getModel("emphasis.itemStyle").getItemStyle(),p=t.getModel("label"),g=t.getModel("emphasis.label"),m=s.type,v="cartesian2d"===m?[c.mapDimension("x"),c.mapDimension("y"),c.mapDimension("value")]:[c.mapDimension("time"),c.mapDimension("value")],y=i;y<n;y++){var x;if("cartesian2d"===m){if(isNaN(c.get(v[2],y)))continue;var _=s.dataToPoint([c.get(v[0],y),c.get(v[1],y)]);x=new Dp.Rect({shape:{x:_[0]-r/2,y:_[1]-o/2,width:r,height:o},style:{fill:c.getItemVisual(y,"color"),opacity:c.getItemVisual(y,"opacity")}})}else{if(isNaN(c.get(v[1],y)))continue;x=new Dp.Rect({z2:1,shape:s.dataToRect([c.get(v[0],y)]).contentShape,style:{fill:c.getItemVisual(y,"color"),opacity:c.getItemVisual(y,"opacity")}})}var b=c.getItemModel(y);c.hasItemOption&&(d=b.getModel("itemStyle").getItemStyle(["color"]),f=b.getModel("emphasis.itemStyle").getItemStyle(),p=b.getModel("label"),g=b.getModel("emphasis.label"));var w=t.getRawValue(y),S="-";w&&null!=w[2]&&(S=w[2]),Dp.setLabelStyle(d,f,p,g,{labelFetcher:t,labelDataIndex:y,defaultText:S,isRectText:!0}),x.setStyle(d),Dp.setHoverStyle(x,c.hasItemOption?f:du.extend({},f)),x.incremental=a,a&&(x.useHoverLayer=!0),h.add(x),c.setItemGraphicEl(y,x)}},_renderOnGeo:function(t,e,i,n){var a=i.targetVisuals.inRange,r=i.targetVisuals.outOfRange,o=e.getData(),s=this._hmLayer||this._hmLayer||new HT;s.blurSize=e.get("blurSize"),s.pointSize=e.get("pointSize"),s.minOpacity=e.get("minOpacity"),s.maxOpacity=e.get("maxOpacity");var l=t.getViewRect().clone(),u=t.getRoamTransform();l.applyTransform(u);var h=Math.max(l.x,0),c=Math.max(l.y,0),d=Math.min(l.width+l.x,n.getWidth()),f=Math.min(l.height+l.y,n.getHeight()),p=d-h,g=f-c,m=[o.mapDimension("lng"),o.mapDimension("lat"),o.mapDimension("value")],v=o.mapArray(m,function(e,i,n){var a=t.dataToPoint([e,i]);return a[0]-=h,a[1]-=c,a.push(n),a}),y=i.getExtent(),x="visualMap.continuous"===i.type?function(t,e){var i=t[1]-t[0];return e=[(e[0]-t[0])/i,(e[1]-t[0])/i],function(t){return t>=e[0]&&t<=e[1]}}(y,i.option.range):function(t,e,i){var n=t[1]-t[0],a=(e=du.map(e,function(e){return{interval:[(e.interval[0]-t[0])/n,(e.interval[1]-t[0])/n]}})).length,r=0;return function(t){for(n=r;n<a;n++)if((o=e[n].interval)[0]<=t&&t<=o[1]){r=n;break}if(n===a)for(var n=r-1;n>=0;n--){var o=e[n].interval;if(o[0]<=t&&t<=o[1]){r=n;break}}return n>=0&&n<a&&i[n]}}(y,i.getPieceList(),i.option.selected);s.update(v,p,g,a.color.getNormalizer(),{inRange:a.color.getColorMapper(),outOfRange:r.color.getColorMapper()},x);var _=new Dp.Image({style:{width:p,height:g,x:h,y:c,image:s.canvas},silent:!0});this.group.add(_)},dispose:function(){}}),dw.extend({type:"series.pictorialBar",dependencies:["grid"],defaultOption:{symbol:"circle",symbolSize:null,symbolRotate:null,symbolPosition:null,symbolOffset:null,symbolMargin:null,symbolRepeat:!1,symbolRepeatDirection:"end",symbolClip:!1,symbolBoundingData:null,symbolPatternSize:400,barGap:"-100%",progressive:0,hoverAnimation:!1},getInitialData:function(t){return t.stack=null,FT.superApply(this,"getInitialData",arguments)}})),WT=Fx.createSymbol,UT=Up.parsePercent,ZT=Up.isNumeric,jT=pw.setLabel,YT=["itemStyle","borderWidth"],XT=[{xy:"x",wh:"width",index:0,posDesc:["left","right"]},{xy:"y",wh:"height",index:1,posDesc:["top","bottom"]}],qT=new Dp.Circle,$T=(C_.extendChartView({type:"pictorialBar",render:function(t,e,i){var n=this.group,a=t.getData(),r=this._data,o=t.coordinateSystem,s=!!o.getBaseAxis().isHorizontal(),l=o.grid.getRect(),u={ecSize:{width:i.getWidth(),height:i.getHeight()},seriesModel:t,coordSys:o,coordSysExtent:[[l.x,l.x+l.width],[l.y,l.y+l.height]],isHorizontal:s,valueDim:XT[+s],categoryDim:XT[1-s]};return a.diff(r).add(function(t){if(a.hasValue(t)){var e=co(a,t),i=ao(a,t,e,u),r=po(a,u,i);a.setItemGraphicEl(t,r),n.add(r),xo(r,u,i)}}).update(function(t,e){var i=r.getItemGraphicEl(e);if(a.hasValue(t)){var o=co(a,t),s=ao(a,t,o,u),l=mo(a,s);i&&l!==i.__pictorialShapeStr&&(n.remove(i),a.setItemGraphicEl(t,null),i=null),i?function(t,e,i){var n=i.animationModel,a=i.dataIndex,r=t.__pictorialBundle;Dp.updateProps(r,{position:i.bundlePosition.slice()},n,a),i.symbolRepeat?so(t,e,i,!0):lo(t,0,i,!0),uo(t,i,!0),ho(t,e,i,!0)}(i,u,s):i=po(a,u,s,!0),a.setItemGraphicEl(t,i),i.__pictorialSymbolMeta=s,n.add(i),xo(i,u,s)}else n.remove(i)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&go(r,t,e.__pictorialSymbolMeta.animationModel,e)}).execute(),this._data=a,this.group},dispose:du.noop,remove:function(t,e){var i=this.group,n=this._data;t.get("animation")?n&&n.eachItemGraphicEl(function(e){go(n,e.dataIndex,t,e)}):i.removeAll()}}),fx.layout);C_.registerLayout(du.curry($T,"pictorialBar")),C_.registerVisual(hb("pictorialBar","roundRect"));var KT=function(t,e,i,n,a){c_.call(this,t,e,i),this.type=n||"value",this.position=a||"bottom",this.orient=null};KT.prototype={constructor:KT,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},pointToData:function(t,e){return this.coordinateSystem.pointToData(t,e)[0]},toGlobalCoord:null,toLocalCoord:null},du.inherits(KT,c_);var JT=KT,QT=ng.getLayoutRect,tD=du.each;bo.prototype={type:"singleAxis",axisPointerEnabled:!0,constructor:bo,_init:function(t,e,i){var n=this.dimension,a=new JT(n,kx.createScaleByModel(t),[0,0],t.get("type"),t.get("position")),r="category"===a.type;a.onBand=r&&t.get("boundaryGap"),a.inverse=t.get("inverse"),a.orient=t.get("orient"),t.axis=a,a.model=t,a.coordinateSystem=this,this._axis=a},update:function(t,e){t.eachSeries(function(t){if(t.coordinateSystem===this){var e=t.getData();tD(e.mapDimension(this.dimension,!0),function(t){this._axis.scale.unionExtentFromData(e,t)},this),kx.niceScaleExtent(this._axis.scale,this._axis.model)}},this)},resize:function(t,e){this._rect=QT({left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")},{width:e.getWidth(),height:e.getHeight()}),this._adjustAxis()},getRect:function(){return this._rect},_adjustAxis:function(){var t=this._rect,e=this._axis,i=e.isHorizontal(),n=i?[0,t.width]:[0,t.height],a=e.reverse?1:0;e.setExtent(n[a],n[1-a]),this._updateAxisTransform(e,i?t.x:t.y)},_updateAxisTransform:function(t,e){var i=t.getExtent(),n=i[0]+i[1],a=t.isHorizontal();t.toGlobalCoord=a?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord=a?function(t){return t-e}:function(t){return n-t+e}},getAxis:function(){return this._axis},getBaseAxis:function(){return this._axis},getAxes:function(){return[this._axis]},getTooltipAxes:function(){return{baseAxes:[this.getAxis()]}},containPoint:function(t){var e=this.getRect(),i=this.getAxis();return"horizontal"===i.orient?i.contain(i.toLocalCoord(t[0]))&&t[1]>=e.y&&t[1]<=e.y+e.height:i.contain(i.toLocalCoord(t[1]))&&t[0]>=e.y&&t[0]<=e.y+e.height},pointToData:function(t){var e=this.getAxis();return[e.coordToData(e.toLocalCoord(t["horizontal"===e.orient?0:1]))]},dataToPoint:function(t){var e=this.getAxis(),i=this.getRect(),n=[],a="horizontal"===e.orient?0:1;return t instanceof Array&&(t=t[0]),n[a]=e.toGlobalCoord(e.dataToCoord(+t)),n[1-a]=0===a?i.y+i.height/2:i.x+i.width/2,n}};var eD=bo;vm.register("single",{create:function(t,e){var i=[];return t.eachComponent("singleAxis",function(n,a){var r=new eD(n,t,e);r.name="single_"+a,r.resize(n,e),n.coordinateSystem=r,i.push(r)}),t.eachSeries(function(e){if("singleAxis"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0];e.coordinateSystem=i&&i.coordinateSystem}}),i},dimensions:eD.prototype.dimensions});var iD={layout:function(t,e){e=e||{};var i=t.coordinateSystem,n=t.axis,a={},r=n.position,o=n.orient,s=i.getRect(),l=[s.x,s.x+s.width,s.y,s.y+s.height],u={horizontal:{top:l[2],bottom:l[3]},vertical:{left:l[0],right:l[1]}};a.position=["vertical"===o?u.vertical[r]:l[0],"horizontal"===o?u.horizontal[r]:l[3]],a.rotation=Math.PI/2*{horizontal:0,vertical:1}[o],a.labelDirection=a.tickDirection=a.nameDirection={top:-1,bottom:1,right:1,left:-1}[r],t.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),du.retrieve(e.labelInside,t.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var h=e.rotate;return null==h&&(h=t.get("axisLabel.rotate")),a.labelRotation="top"===r?-h:h,a.z2=1,a}},nD=["axisLine","axisTickLabel","axisName"],aD=sw.extend({type:"singleAxis",axisPointerClass:"SingleAxisPointer",render:function(t,e,i,n){var a=this.group;a.removeAll();var r=iD.layout(t),o=new ew(t,r);du.each(nD,o.add,o),a.add(o.getGroup()),t.get("splitLine.show")&&this._splitLine(t),aD.superCall(this,"render",t,e,i,n)},_splitLine:function(t){var e=t.axis;if(!e.scale.isBlank()){var i=t.getModel("splitLine"),n=i.getModel("lineStyle"),a=n.get("width"),r=n.get("color");r=r instanceof Array?r:[r];for(var o=t.coordinateSystem.getRect(),s=e.isHorizontal(),l=[],u=0,h=e.getTicksCoords({tickModel:i}),c=[],d=[],f=0;f<h.length;++f){var p=e.toGlobalCoord(h[f].coord);s?(c[0]=p,c[1]=o.y,d[0]=p,d[1]=o.y+o.height):(c[0]=o.x,c[1]=p,d[0]=o.x+o.width,d[1]=p);var g=u++%r.length;l[g]=l[g]||[],l[g].push(new Dp.Line(Dp.subPixelOptimizeLine({shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:{lineWidth:a},silent:!0})))}for(f=0;f<l.length;++f)this.group.add(Dp.mergePath(l[f],{style:{stroke:r[f%r.length],lineDash:n.getLineDash(a),lineWidth:a},silent:!0}))}}}),rD=ug.extend({type:"singleAxis",layoutMode:"box",axis:null,coordinateSystem:null,getCoordSysModel:function(){return this}});du.merge(rD.prototype,Ox),Db("single",rD,function(t,e){return e.type||(e.data?"category":"value")},{left:"5%",top:"5%",right:"5%",bottom:"5%",type:"value",position:"bottom",orient:"horizontal",axisLine:{show:!0,lineStyle:{width:2,type:"solid"}},tooltip:{show:!0},axisTick:{show:!0,length:6,lineStyle:{width:2}},axisLabel:{show:!0,interval:"auto"},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}});var oD=function(t,e){var i,n=[],a=t.seriesIndex;if(null==a||!(i=e.getSeriesByIndex(a)))return{point:[]};var r=i.getData(),o=Wc.queryDataIndex(r,t);if(null==o||o<0||du.isArray(o))return{point:[]};var s=r.getItemGraphicEl(o),l=i.coordinateSystem;if(i.getTooltipPosition)n=i.getTooltipPosition(o)||[];else if(l&&l.dataToPoint)n=l.dataToPoint(r.getValues(du.map(l.dimensions,function(t){return r.mapDimension(t)}),o,!0))||[];else if(s){var u=s.getBoundingRect().clone();u.applyTransform(s.transform),n=[u.x+u.width/2,u.y+u.height/2]}return{point:n,el:s}},sD=Wc.makeInner,lD=du.each,uD=du.curry,hD=sD(),cD=function(t,e,i){var n=t.currTrigger,a=[t.x,t.y],r=t,o=t.dispatchAction||du.bind(i.dispatchAction,i),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){Mo(a)&&(a=oD({seriesIndex:r.seriesIndex,dataIndex:r.dataIndex},e).point);var l=Mo(a),u=r.axesInfo,h=s.axesInfo,c="leave"===n||Mo(a),d={},f={},p={list:[],map:{}},g={showPointer:uD(function(t,e,i,n){t[e.key]={value:i,payloadBatch:n}},f),showTooltip:uD(function(t,e,i,n){var a=i.payloadBatch,r=e.axis,o=r.model,s=e.axisPointerModel;if(e.triggerTooltip&&a.length){var l=e.coordSys.model,u=aw.makeKey(l),h=t.map[u];h||(h=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(h)),h.dataByAxis.push({axisDim:r.dim,axisIndex:o.componentIndex,axisType:o.type,axisId:o.id,value:n,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:a.slice()})}},p)};lD(s.coordSysMap,function(t,e){var i=l||t.containPoint(a);lD(s.coordSysAxesInfo[e],function(t,e){var n=t.axis,r=function(t,e){for(var i=0;i<(t||[]).length;i++){var n=t[i];if(e.axis.dim===n.axisDim&&e.axis.model.componentIndex===n.axisIndex)return n}}(u,t);if(!c&&i&&(!u||r)){var o=r&&r.value;null!=o||l||(o=n.pointToData(a)),null!=o&&wo(t,o,g,!1,d)}})});var m={};return lD(h,function(t,e){var i=t.linkGroup;i&&!f[e]&&lD(i.axesInfo,function(e,n){var a=f[n];if(e!==t&&a){var r=a.value;i.mapper&&(r=t.axis.scale.parse(i.mapper(r,So(e),So(t)))),m[t.key]=r}})}),lD(m,function(t,e){wo(h[e],t,g,!0,d)}),function(t,e,i){var n=i.axesInfo=[];lD(e,function(e,i){var a=e.axisPointerModel.option,r=t[i];r?(!e.useHandle&&(a.status="show"),a.value=r.value,a.seriesDataIndices=(r.payloadBatch||[]).slice()):!e.useHandle&&(a.status="hide"),"show"===a.status&&n.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:a.value})})}(f,h,d),function(t,e,i,n){if(!Mo(e)&&t.list.length){var a=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};n({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:i.tooltipOption,position:i.position,dataIndexInside:a.dataIndexInside,dataIndex:a.dataIndex,seriesIndex:a.seriesIndex,dataByCoordSys:t.list})}else n({type:"hideTip"})}(p,a,t,o),function(t,e,i){var n=i.getZr(),a=hD(n).axisPointerLastHighlights||{},r=hD(n).axisPointerLastHighlights={};lD(t,function(t,e){var i=t.axisPointerModel.option;"show"===i.status&&lD(i.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;r[e]=t})});var o=[],s=[];du.each(a,function(t,e){!r[e]&&s.push(t)}),du.each(r,function(t,e){!a[e]&&o.push(t)}),s.length&&i.dispatchAction({type:"downplay",escapeConnect:!0,batch:s}),o.length&&i.dispatchAction({type:"highlight",escapeConnect:!0,batch:o})}(h,0,i),d}},dD=(C_.extendComponentModel({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),(0,Wc.makeInner)()),fD=du.each,pD={register:function(t,e,i){if(!Jl.node){var n=e.getZr();dD(n).records||(dD(n).records={}),function(t,e){function i(i,n){t.on(i,function(i){var a=function(t){var e={showTip:[],hideTip:[]},i=function(n){var a=e[n.type];a?a.push(n):(n.dispatchAction=i,t.dispatchAction(n))};return{dispatchAction:i,pendings:e}}(e);fD(dD(t).records,function(t){t&&n(t,i,a.dispatchAction)}),function(t,e){var i,n=t.showTip.length,a=t.hideTip.length;n?i=t.showTip[n-1]:a&&(i=t.hideTip[a-1]),i&&(i.dispatchAction=null,e.dispatchAction(i))}(a.pendings,e)})}dD(t).initialized||(dD(t).initialized=!0,i("click",du.curry(Io,"click")),i("mousemove",du.curry(Io,"mousemove")),i("globalout",function(t,e,i){t.handler("leave",null,i)}))}(n,e),(dD(n).records[t]||(dD(n).records[t]={})).handler=i}},unregister:function(t,e){if(!Jl.node){var i=e.getZr();(dD(i).records||{})[t]&&(dD(i).records[t]=null)}}},gD=C_.extendComponentView({type:"axisPointer",render:function(t,e,i){var n=e.getComponent("tooltip"),a=t.get("triggerOn")||n&&n.get("triggerOn")||"mousemove|click";pD.register("axisPointer",i,function(t,e,i){"none"!==a&&("leave"===t||a.indexOf(t)>=0)&&i({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){pD.unregister(e.getZr(),"axisPointer"),gD.superApply(this._model,"remove",arguments)},dispose:function(t,e){pD.unregister("axisPointer",e),gD.superApply(this._model,"dispose",arguments)}}),mD=(0,Wc.makeInner)(),vD=du.clone,yD=du.bind;(Ao.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,i,n){var a=e.get("value"),r=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=i,n||this._lastValue!==a||this._lastStatus!==r){this._lastValue=a,this._lastStatus=r;var o=this._group,s=this._handle;if(!r||"hide"===r)return o&&o.hide(),void(s&&s.hide());o&&o.show(),s&&s.show();var l={};this.makeElOption(l,a,t,e,i);var u=l.graphicKey;u!==this._lastGraphicKey&&this.clear(i),this._lastGraphicKey=u;var h=this._moveAnimation=this.determineAnimation(t,e);if(o){var c=du.curry(To,e,h);this.updatePointerEl(o,l,c,e),this.updateLabelEl(o,l,c,e)}else o=this._group=new Dp.Group,this.createPointerEl(o,l,t,e),this.createLabelEl(o,l,t,e),i.getZr().add(o);Po(o,e,!0),this._renderHandle(a)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var i=e.get("animation"),n=t.axis,a="category"===n.type,r=e.get("snap");if(!r&&!a)return!1;if("auto"===i||null==i){var o=this.animationThreshold;if(a&&n.getBandWidth()>o)return!0;if(r){var s=aw.getAxisInfo(t).seriesDataCount,l=n.getExtent();return Math.abs(l[0]-l[1])/s>o}return!1}return!0===i},makeElOption:function(t,e,i,n,a){},createPointerEl:function(t,e,i,n){var a=e.pointer;if(a){var r=mD(t).pointerEl=new Dp[a.type](vD(e.pointer));t.add(r)}},createLabelEl:function(t,e,i,n){if(e.label){var a=mD(t).labelEl=new Dp.Rect(vD(e.label));t.add(a),Co(a,n)}},updatePointerEl:function(t,e,i){var n=mD(t).pointerEl;n&&(n.setStyle(e.pointer.style),i(n,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,i,n){var a=mD(t).labelEl;a&&(a.setStyle(e.label.style),i(a,{shape:e.label.shape,position:e.label.position}),Co(a,n))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,i=this._api.getZr(),n=this._handle,a=e.getModel("handle"),r=e.get("status");if(!a.get("show")||!r||"hide"===r)return n&&i.remove(n),void(this._handle=null);var o;this._handle||(o=!0,n=this._handle=Dp.createIcon(a.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){mc.stop(t.event)},onmousedown:yD(this._onHandleDragMove,this,0,0),drift:yD(this._onHandleDragMove,this),ondragend:yD(this._onHandleDragEnd,this)}),i.add(n)),Po(n,e,!1);n.setStyle(a.getItemStyle(null,["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"]));var s=a.get("size");du.isArray(s)||(s=[s,s]),n.attr("scale",[s[0]/2,s[1]/2]),Nv.createOrUpdate(this,"_doDispatchAxisPointer",a.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,o)}},_moveHandleToValue:function(t,e){To(this._axisPointerModel,!e&&this._moveAnimation,this._handle,Lo(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var i=this._handle;if(i){this._dragging=!0;var n=this.updateHandleTransform(Lo(i),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=n,i.stopAnimation(),i.attr(Lo(n)),mD(i).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},_onHandleDragEnd:function(t){this._dragging=!1;if(this._handle){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),i=this._group,n=this._handle;e&&i&&(this._lastGraphicKey=null,i&&e.remove(i),n&&e.remove(n),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}}}).constructor=Ao,Yc.enableClassExtend(Ao);var xD=Ao,_D={buildElStyle:function(t){var e,i=t.get("type"),n=t.getModel(i+"Style");return"line"===i?(e=n.getLineStyle()).fill=null:"shadow"===i&&((e=n.getAreaStyle()).stroke=null),e},buildLabelElOption:ko,getValueLabel:Oo,getTransformedPosition:Ro,buildCartesianSingleLabelElOption:function(t,e,i,n,a,r){var o=ew.innerTextLayout(i.rotation,0,i.labelDirection);i.labelMargin=a.get("label.margin"),ko(e,n,a,r,{position:Ro(n.axis,t,i),align:o.textAlign,verticalAlign:o.textVerticalAlign})},makeLineShape:function(t,e,i){return i=i||0,{x1:t[i],y1:t[1-i],x2:e[i],y2:e[1-i]}},makeRectShape:function(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}},makeSectorShape:function(t,e,i,n,a,r){return{cx:t,cy:e,r0:i,r:n,startAngle:a,endAngle:r,clockwise:!0}}},bD=xD.extend({makeElOption:function(t,e,i,n,a){var r=i.axis,o=r.grid,s=n.get("type"),l=No(o,r).getOtherAxis(r).getGlobalExtent(),u=r.toGlobalCoord(r.dataToCoord(e,!0));if(s&&"none"!==s){var h=_D.buildElStyle(n),c=wD[s](r,u,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c}var d=lw.layout(o.model,i);_D.buildCartesianSingleLabelElOption(e,t,d,i,n,a)},getHandleTransform:function(t,e,i){var n=lw.layout(e.axis.grid.model,e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:_D.getTransformedPosition(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var a=i.axis,r=a.grid,o=a.getGlobalExtent(!0),s=No(r,a).getOtherAxis(a).getGlobalExtent(),l="x"===a.dim?0:1,u=t.position;u[l]+=e[l],u[l]=Math.min(o[1],u[l]),u[l]=Math.max(o[0],u[l]);var h=(s[1]+s[0])/2,c=[h,h];c[l]=u[l];return{position:u,rotation:t.rotation,cursorPoint:c,tooltipOption:[{verticalAlign:"middle"},{align:"center"}][l]}}}),wD={line:function(t,e,i,n){var a=_D.makeLineShape([e,i[0]],[e,i[1]],Eo(t));return Dp.subPixelOptimizeLine({shape:a,style:n}),{type:"Line",shape:a}},shadow:function(t,e,i,n){var a=Math.max(1,t.getBandWidth()),r=i[1]-i[0];return{type:"Rect",shape:_D.makeRectShape([e-a/2,i[0]],[a,r],Eo(t))}}};sw.registerAxisPointerClass("CartesianAxisPointer",bD);C_.registerPreprocessor(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!du.isArray(e)&&(t.axisPointer.link=[e])}}),C_.registerProcessor(C_.PRIORITY.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=aw.collect(t,e)}),C_.registerAction({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},cD);var SD=["x","y"],MD=["width","height"],ID=xD.extend({makeElOption:function(t,e,i,n,a){var r=i.axis,o=r.coordinateSystem,s=Vo(o,1-zo(r)),l=o.dataToPoint(e)[0],u=n.get("type");if(u&&"none"!==u){var h=_D.buildElStyle(n),c=AD[u](r,l,s,h);c.style=h,t.graphicKey=c.type,t.pointer=c}var d=iD.layout(i);_D.buildCartesianSingleLabelElOption(e,t,d,i,n,a)},getHandleTransform:function(t,e,i){var n=iD.layout(e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:_D.getTransformedPosition(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var a=i.axis,r=a.coordinateSystem,o=zo(a),s=Vo(r,o),l=t.position;l[o]+=e[o],l[o]=Math.min(s[1],l[o]),l[o]=Math.max(s[0],l[o]);var u=Vo(r,1-o),h=(u[1]+u[0])/2,c=[h,h];return c[o]=l[o],{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:{verticalAlign:"middle"}}}}),AD={line:function(t,e,i,n){var a=_D.makeLineShape([e,i[0]],[e,i[1]],zo(t));return Dp.subPixelOptimizeLine({shape:a,style:n}),{type:"Line",shape:a}},shadow:function(t,e,i,n){var a=t.getBandWidth(),r=i[1]-i[0];return{type:"Rect",shape:_D.makeRectShape([e-a/2,i[0]],[a,r],zo(t))}}};sw.registerAxisPointerClass("SingleAxisPointer",ID);C_.extendComponentView({type:"single"});var TD=py.getDimensionTypeByAxis,DD=qp.encodeHTML,CD=xv.extend({type:"series.themeRiver",dependencies:["singleAxis"],nameMap:null,init:function(t){CD.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},fixData:function(t){for(var e=t.length,i=zA().key(function(t){return t[2]}).entries(t),n=du.map(i,function(t){return{name:t.key,dataList:t.values}}),a=n.length,r=-1,o=-1,s=0;s<a;++s){var l=n[s].dataList.length;l>r&&(r=l,o=s)}for(var u=0;u<a;++u)if(u!==o)for(var h=n[u].name,c=0;c<r;++c){for(var d=n[o].dataList[c][0],f=n[u].dataList.length,p=-1,g=0;g<f;++g){if(n[u].dataList[g][0]===d){p=g;break}}-1===p&&(t[e]=[],t[e][0]=d,t[e][1]=0,t[e][2]=h,e++)}return t},getInitialData:function(t,e){for(var i=e.queryComponents({mainType:"singleAxis",index:this.get("singleAxisIndex"),id:this.get("singleAxisId")})[0].get("type"),n=du.filter(t.data,function(t){return void 0!==t[2]}),a=this.fixData(n||[]),r=[],o=this.nameMap=du.createHashMap(),s=0,l=0;l<a.length;++l)r.push(a[l][2]),o.get(a[l][2])||(o.set(a[l][2],s),s++);var u=By(a,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:TD(i)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}),h=new Ty(u,this);return h.initData(a),h},getLayerSeries:function(){for(var t=this.getData(),e=t.count(),i=[],n=0;n<e;++n)i[n]=n;for(var a=zA().key(function(e){return t.get("name",e)}).entries(i),r=du.map(a,function(t){return{name:t.key,indices:t.values}}),o=t.mapDimension("single"),s=0;s<r.length;++s)r[s].indices.sort(function(e,i){return t.get(o,e)-t.get(o,i)});return r},getAxisTooltipData:function(t,e,i){du.isArray(t)||(t=t?[t]:[]);for(var n,a=this.getData(),r=this.getLayerSeries(),o=[],s=r.length,l=0;l<s;++l){for(var u=Number.MAX_VALUE,h=-1,c=r[l].indices.length,d=0;d<c;++d){var f=a.get(t[0],r[l].indices[d]),p=Math.abs(f-e);p<=u&&(n=f,u=p,h=r[l].indices[d])}o.push(h)}return{dataIndices:o,nestestValue:n}},formatTooltip:function(t){var e=this.getData(),i=e.getName(t),n=e.get(e.mapDimension("value"),t);return(isNaN(n)||null==n)&&(n="-"),DD(i+" : "+n)},defaultOption:{zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",color:"#000",fontSize:11},emphasis:{label:{show:!0}}}}),LD=ab.Polygon,PD=du.bind,kD=du.extend,OD=(C_.extendChartView({type:"themeRiver",init:function(){this._layers=[]},render:function(t,e,i){function n(t){return t.name}function a(e,i,n){var a=this._layers;if("remove"!==e){for(var l,u=[],h=[],d=s[i].indices,f=0;f<d.length;f++){var p=r.getItemLayout(d[f]),g=p.x,m=p.y0,v=p.y;u.push([g,m]),h.push([g,m+v]),l=r.getItemVisual(d[f],"color")}var y,x,_=r.getItemLayout(d[0]),b=r.getItemModel(d[f-1]),w=b.getModel("label"),S=w.get("margin");if("add"===e){M=c[i]=new Dp.Group;y=new LD({shape:{points:u,stackedOnPoints:h,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),x=new Dp.Text({style:{x:_.x-S,y:_.y0+_.y/2}}),M.add(y),M.add(x),o.add(M),y.setClipPath(function(t,e,i){var n=new Dp.Rect({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return Dp.initProps(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}(y.getBoundingRect(),t,function(){y.removeClipPath()}))}else{var M=a[n];y=M.childAt(0),x=M.childAt(1),o.add(M),c[i]=M,Dp.updateProps(y,{shape:{points:u,stackedOnPoints:h}},t),Dp.updateProps(x,{style:{x:_.x-S,y:_.y0+_.y/2}},t)}var I=b.getModel("emphasis.itemStyle"),A=b.getModel("itemStyle");Dp.setTextStyle(x.style,w,{text:w.get("show")?t.getFormattedLabel(d[f-1],"normal")||r.getName(d[f-1]):null,textVerticalAlign:"middle"}),y.setStyle(kD({fill:l},A.getItemStyle(["color"]))),Dp.setHoverStyle(y,I.getItemStyle())}else o.remove(a[i])}var r=t.getData(),o=this.group,s=t.getLayerSeries(),l=r.getLayout("layoutInfo"),u=l.rect,h=l.boundaryGap;o.attr("position",[0,u.y+h[0]]);var c={};new hy(this._layersSeries||[],s,n,n).add(PD(a,this,"add")).update(PD(a,this,"update")).remove(PD(a,this,"remove")).execute(),this._layersSeries=s,this._layers=c},dispose:function(){}}),function(t,e){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.coordinateSystem,n={},a=i.getRect();n.rect=a;var r=t.get("boundaryGap"),o=i.getAxis();n.boundaryGap=r,"horizontal"===o.orient?(r[0]=Up.parsePercent(r[0],a.height),r[1]=Up.parsePercent(r[1],a.height),Bo(e,t,a.height-r[0]-r[1])):(r[0]=Up.parsePercent(r[0],a.width),r[1]=Up.parsePercent(r[1],a.width),Bo(e,t,a.width-r[0]-r[1])),e.setLayout("layoutInfo",n)})}),RD=du.createHashMap,ND=function(t){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.getRawData(),n=t.get("color"),a=RD();e.each(function(t){a.set(e.getRawIndex(t),t)}),i.each(function(r){var o=i.getName(r),s=n[(t.nameMap.get(o)-1)%n.length];i.setItemVisual(r,"color",s);var l=a.get(r);null!=l&&e.setItemVisual(l,"color",s)})})};C_.registerLayout(OD),C_.registerVisual(ND),C_.registerProcessor(Hw("themeRiver"));var ED=KS.wrapTreePathInfo,zD=(xv.extend({type:"series.sunburst",_viewRoot:null,getInitialData:function(t,e){var i={name:t.name,children:t.data};Go(i);var n=t.levels||[],a={};return a.levels=n,zS.createTree(i,this,a).data},optionUpdated:function(){this.resetViewRoot()},getDataParams:function(t){var e=xv.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=ED(i,this),e},defaultOption:{zlevel:0,z:2,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,percentPrecision:2,stillShowZeroSum:!0,highlightPolicy:"descendant",nodeClick:"rootToNode",renderLabelForZeroData:!1,label:{rotate:"radial",show:!0,opacity:1,align:"center",position:"inside",distance:5,silent:!0,emphasis:{}},itemStyle:{borderWidth:1,borderColor:"white",opacity:1,emphasis:{},highlight:{opacity:1},downplay:{opacity:.9}},animationType:"expansion",animationDuration:1e3,animationDurationUpdate:500,animationEasing:"cubicOut",data:[],levels:[],sort:"desc"},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getRawData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e)}}),{NONE:"none",DESCENDANT:"descendant",ANCESTOR:"ancestor",SELF:"self"}),VD=2,BD=4,GD=Ho.prototype;GD.updateData=function(t,e,i,n,a){this.node=e,e.piece=this,n=n||this._seriesModel,a=a||this._ecModel;var r=this.childAt(0);r.dataIndex=e.dataIndex;var o=e.getModel(),s=e.getLayout();s||console.log(e.getLayout());var l=du.extend({},s);l.label=null;var u,h=function(t,e,i){var n=t.getVisual("color"),a=t.getVisual("visualMeta");a&&0!==a.length||(n=null);var r=t.getModel("itemStyle").get("color");if(r)return r;if(n)return n;if(0===t.depth)return i.option.color[0];var o=i.option.color.length;return r=i.option.color[function(t){for(var e=t;e.depth>1;)e=e.parentNode;var i=t.getAncestors()[0];return du.indexOf(i.children,e)}(t)%o]}(e,0,a),c=o.getModel("itemStyle").getItemStyle();if("normal"===i)u=c;else{var d=o.getModel(i+".itemStyle").getItemStyle();u=du.merge(d,c)}u=du.defaults({lineJoin:"bevel",fill:u.fill||h},u),t?(r.setShape(l),r.shape.r=s.r0,Dp.updateProps(r,{shape:{r:s.r}},n,e.dataIndex),r.useStyle(u)):"object"==typeof u.fill&&u.fill.type||"object"==typeof r.style.fill&&r.style.fill.type?(Dp.updateProps(r,{shape:l},n),r.useStyle(u)):Dp.updateProps(r,{shape:l,style:u},n),this._updateLabel(n,h,i);var f=o.getShallow("cursor");if(f&&r.attr("cursor",f),t){var p=n.getShallow("highlightPolicy");this._initEvents(r,e,n,p)}this._seriesModel=n||this._seriesModel,this._ecModel=a||this._ecModel},GD.onEmphasis=function(t){var e=this;this.node.hostTree.root.eachNode(function(i){i.piece&&(e.node===i?i.piece.updateData(!1,i,"emphasis"):!function(t,e,i){return i!==zD.NONE&&(i===zD.SELF?t===e:i===zD.ANCESTOR?t===e||t.isAncestorOf(e):t===e||t.isDescendantOf(e))}(i,e.node,t)?t!==zD.NONE&&i.piece.childAt(0).trigger("downplay"):i.piece.childAt(0).trigger("highlight"))})},GD.onNormal=function(){this.node.hostTree.root.eachNode(function(t){t.piece&&t.piece.updateData(!1,t,"normal")})},GD.onHighlight=function(){this.updateData(!1,this.node,"highlight")},GD.onDownplay=function(){this.updateData(!1,this.node,"downplay")},GD._updateLabel=function(t,e,i){function n(t){var e=o.get(t);return null==e?r.get(t):e}var a=this.node.getModel(),r=a.getModel("label"),o="normal"===i||"emphasis"===i?r:a.getModel(i+".label"),s=a.getModel("emphasis.label"),l=du.retrieve(t.getFormattedLabel(this.node.dataIndex,"normal",null,null,"label"),this.node.name);!1===n("show")&&(l="");var u=this.node.getLayout(),h=o.get("minAngle");null==h&&(h=r.get("minAngle")),h=h/180*Math.PI;var c=u.endAngle-u.startAngle;null!=h&&Math.abs(c)<h&&(l="");var d=this.childAt(1);Dp.setLabelStyle(d.style,d.hoverStyle||{},r,s,{defaultText:o.getShallow("show")?l:null,autoColor:e,useInsideStyle:!0});var f,p=(u.startAngle+u.endAngle)/2,g=Math.cos(p),m=Math.sin(p),v=n("position"),y=n("distance")||0,x=n("align");"outside"===v?(f=u.r+y,x=p>Math.PI/2?"right":"left"):x&&"center"!==x?"left"===x?(f=u.r0+y,p>Math.PI/2&&(x="right")):"right"===x&&(f=u.r-y,p>Math.PI/2&&(x="left")):(f=(u.r+u.r0)/2,x="center"),d.attr("style",{text:l,textAlign:x,textVerticalAlign:n("verticalAlign")||"middle",opacity:n("opacity")});var _=f*g+u.cx,b=f*m+u.cy;d.attr("position",[_,b]);var w=n("rotate"),S=0;"radial"===w?(S=-p)<-Math.PI/2&&(S+=Math.PI):"tangential"===w?(S=Math.PI/2-p)>Math.PI/2?S-=Math.PI:S<-Math.PI/2&&(S+=Math.PI):"number"==typeof w&&(S=w*Math.PI/180),d.attr("rotation",S)},GD._initEvents=function(t,e,i,n){t.off("mouseover").off("mouseout").off("emphasis").off("normal");var a=this,r=function(){a.onEmphasis(n)},o=function(){a.onNormal()};i.isAnimationEnabled()&&t.on("mouseover",r).on("mouseout",o).on("emphasis",r).on("normal",o).on("downplay",function(){a.onDownplay()}).on("highlight",function(){a.onHighlight()})},du.inherits(Ho,Dp.Group);var HD=Ho,FD=(Pv.extend({type:"sunburst",init:function(){},render:function(t,e,i,n){var a=this;this.seriesModel=t,this.api=i,this.ecModel=e;var r=t.getData(),o=r.tree.root,s=t.getViewRoot(),l=this.group,u=t.get("renderLabelForZeroData"),h=[];s.eachNode(function(t){h.push(t)});var c=this._oldChildren||[];if(function(i,n){function a(t){return t.getId()}function s(a,s){!function(i,n){if(u||!i||i.getValue()||(i=null),i!==o&&n!==o)if(n&&n.piece)i?(n.piece.updateData(!1,i,"normal",t,e),r.setItemGraphicEl(i.dataIndex,n.piece)):function(t){t&&t.piece&&(l.remove(t.piece),t.piece=null)}(n);else if(i){var a=new HD(i,t,e);l.add(a),r.setItemGraphicEl(i.dataIndex,a)}}(null==a?null:i[a],null==s?null:n[s])}0===i.length&&0===n.length||new hy(n,i,a,a).add(s).update(s).remove(du.curry(s,null)).execute()}(h,c),function(i,n){if(n.depth>0){a.virtualPiece?a.virtualPiece.updateData(!1,i,"normal",t,e):(a.virtualPiece=new HD(i,t,e),l.add(a.virtualPiece)),n.piece._onclickEvent&&n.piece.off("click",n.piece._onclickEvent);var r=function(t){a._rootToNode(n.parentNode)};n.piece._onclickEvent=r,a.virtualPiece.on("click",r)}else a.virtualPiece&&(l.remove(a.virtualPiece),a.virtualPiece=null)}(o,s),n&&n.highlight&&n.highlight.piece){var d=t.getShallow("highlightPolicy");n.highlight.piece.onEmphasis(d)}else if(n&&n.unhighlight){var f=this.virtualPiece;!f&&o.children.length&&(f=o.children[0].piece),f&&f.onNormal()}this._initEvents(),this._oldChildren=h},dispose:function(){},_initEvents:function(){var t=this,e=function(e){var i=!1;t.seriesModel.getViewRoot().eachNode(function(n){if(!i&&n.piece&&n.piece.childAt(0)===e.target){var a=n.getModel().get("nodeClick");if("rootToNode"===a)t._rootToNode(n);else if("link"===a){var r=n.getModel(),o=r.get("link");if(o){var s=r.get("target",!0)||"_blank";window.open(o,s)}}i=!0}})};this.group._onclickEvent&&this.group.off("click",this.group._onclickEvent),this.group.on("click",e),this.group._onclickEvent=e},_rootToNode:function(t){t!==this.seriesModel.getViewRoot()&&this.api.dispatchAction({type:"sunburstRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t})},containPoint:function(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,a=t[1]-i.cy,r=Math.sqrt(n*n+a*a);return r<=i.r&&r>=i.r0}}}),"sunburstRootToNode");C_.registerAction({type:FD,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=KS.retrieveTargetInfo(t,[FD],e);if(n){var a=e.getViewRoot();a&&(t.direction=KS.aboveViewRoot(a,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node)}})});var WD="sunburstHighlight";C_.registerAction({type:WD,update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){var n=KS.retrieveTargetInfo(t,[WD],e);n&&(t.highlight=n.node)})});C_.registerAction({type:"sunburstUnhighlight",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"sunburst",query:t},function(e,i){t.unhighlight=!0})});var UD=Up.parsePercent,ZD=2*Math.PI,jD=Math.PI/180,YD=function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.get("center"),n=t.get("radius");du.isArray(n)||(n=[0,n]),du.isArray(e)||(e=[e,e]);var a=i.getWidth(),r=i.getHeight(),o=Math.min(a,r),s=UD(e[0],a),l=UD(e[1],r),u=UD(n[0],o/2),h=UD(n[1],o/2),c=-t.get("startAngle")*jD,d=t.get("minAngle")*jD,f=t.getData().tree.root,p=t.getViewRoot(),g=p.depth,m=t.get("sort");null!=m&&Fo(p,m);var v=0;du.each(p.children,function(t){!isNaN(t.getValue())&&v++});var y=p.getValue(),x=Math.PI/(y||v)*2,_=p.depth>0,b=p.height-(_?-1:1),w=(h-u)/(b||1),S=t.get("clockwise"),M=t.get("stillShowZeroSum"),I=ZD,A=0,T=S?1:-1,D=function(t,e){if(t){var i=e;if(t!==f){var n=t.getValue(),a=0===y&&M?x:n*x;a<d?(a=d,I-=d):A+=n,i=e+T*a;var r=t.depth-g-(_?-1:1),h=u+w*r,c=u+w*(r+1),p=t.getModel();null!=p.get("r0")&&(h=UD(p.get("r0"),o/2)),null!=p.get("r")&&(c=UD(p.get("r"),o/2)),t.setLayout({angle:a,startAngle:e,endAngle:i,clockwise:S,cx:s,cy:l,r0:h,r:c})}if(t.children&&t.children.length){var m=0;du.each(t.children,function(t){m+=D(t,e+m)})}return i-e}};if(_){var C=u,L=u+w,P=2*Math.PI;f.setLayout({angle:P,startAngle:c,endAngle:c+P,clockwise:S,cx:s,cy:l,r0:C,r:L})}D(p,c)})};C_.registerVisual(du.curry(Rw,"sunburst")),C_.registerLayout(du.curry(YD,"sunburst")),C_.registerProcessor(du.curry(Hw,"sunburst"));var XD=P_.getDefaultLabel,qD=fx.getLayoutOnAxis,$D=["itemStyle"],KD=["emphasis","itemStyle"],JD=["label"],QD=["emphasis","label"],tC="e\0\0",eC={cartesian2d:function(t){var e=t.grid.getRect();return{coordSys:{type:"cartesian2d",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:du.bind(function(t,e){return e=e||[0,0],du.map(["x","y"],function(i,n){var a=this.getAxis(i),r=e[n],o=t[n]/2;return"category"===a.type?a.getBandWidth():Math.abs(a.dataToCoord(r-o)-a.dataToCoord(r+o))},this)},t)}}},geo:function(t){var e=t.getBoundingRect();return{coordSys:{type:"geo",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:du.bind(function(t,e){return e=e||[0,0],du.map([0,1],function(i){var n=e[i],a=t[i]/2,r=[],o=[];return r[i]=n-a,o[i]=n+a,r[1-i]=o[1-i]=e[1-i],Math.abs(this.dataToPoint(r)[i]-this.dataToPoint(o)[i])},this)},t)}}},singleAxis:function(t){var e=t.getRect();return{coordSys:{type:"singleAxis",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:du.bind(function(t,e){var i=this.getAxis(),n=e instanceof Array?e[0]:e,a=(t instanceof Array?t[0]:t)/2;return"category"===i.type?i.getBandWidth():Math.abs(i.dataToCoord(n-a)-i.dataToCoord(n+a))},t)}}},polar:function(t){var e=t.getRadiusAxis(),i=t.getAngleAxis(),n=e.getExtent();return n[0]>n[1]&&n.reverse(),{coordSys:{type:"polar",cx:t.cx,cy:t.cy,r:n[1],r0:n[0]},api:{coord:du.bind(function(n){var a=e.dataToRadius(n[0]),r=i.dataToAngle(n[1]),o=t.coordToPoint([a,r]);return o.push(a,r*Math.PI/180),o}),size:du.bind(function(t,e){return du.map(["Radius","Angle"],function(i,n){var a=this["get"+i+"Axis"](),r=e[n],o=t[n]/2,s="dataTo"+i,l="category"===a.type?a.getBandWidth():Math.abs(a[s](r-o)-a[s](r+o));return"Angle"===i&&(l=l*Math.PI/180),l},this)},t)}}},calendar:function(t){var e=t.getRect(),i=t.getRangeInfo();return{coordSys:{type:"calendar",x:e.x,y:e.y,width:e.width,height:e.height,cellWidth:t.getCellWidth(),cellHeight:t.getCellHeight(),rangeInfo:{start:i.start,end:i.end,weeks:i.weeks,dayCount:i.allDay}},api:{coord:function(e,i){return t.dataToPoint(e,i)}}}}};C_.extendSeriesModel({type:"series.custom",dependencies:["grid","polar","geo","singleAxis","calendar"],defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0},getInitialData:function(t,e){return Xy(this.getSource(),this)}}),C_.extendChartView({type:"custom",_data:null,render:function(t,e,i){var n=this._data,a=t.getData(),r=this.group,o=Uo(t,a,e,i);this.group.removeAll(),a.diff(n).add(function(e){Zo(null,e,o(e),t,r,a)}).update(function(e,i){Zo(n.getItemGraphicEl(i),e,o(e),t,r,a)}).remove(function(t){var e=n.getItemGraphicEl(t);e&&r.remove(e)}).execute(),this._data=a},incrementalPrepareRender:function(t,e,i){this.group.removeAll(),this._data=null},incrementalRender:function(t,e,i,n){for(var a=e.getData(),r=Uo(e,a,i,n),o=t.start;o<t.end;o++){Zo(null,o,r(o),e,this.group,a).traverse(function(t){t.isGroup||(t.incremental=!0,t.useHoverLayer=!0)})}},dispose:du.noop});C_.registerPreprocessor(function(t){var e=t.graphic;du.isArray(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])});var iC=C_.extendComponentModel({type:"graphic",defaultOption:{elements:[],parentId:null},_elOptionsToUpdate:null,mergeOption:function(t){var e=this.option.elements;this.option.elements=null,iC.superApply(this,"mergeOption",arguments),this.option.elements=e},optionUpdated:function(t,e){var i=this.option,n=(e?i:t).elements,a=i.elements=e?[]:i.elements,r=[];this._flatten(n,r);var o=Wc.mappingToExists(a,r);Wc.makeIdAndName(o);var s=this._elOptionsToUpdate=[];du.each(o,function(t,e){var i=t.option;i&&(s.push(i),function(t,e){var i=t.exist;if(e.id=t.keyInfo.id,!e.type&&i&&(e.type=i.type),null==e.parentId){var n=e.parentOption;n?e.parentId=n.id:i&&(e.parentId=i.parentId)}e.parentOption=null}(t,i),function(t,e,i){var n=du.extend({},i),a=t[e],r=i.$action||"merge";"merge"===r?a?(du.merge(a,n,!0),ng.mergeLayoutParam(a,n,{ignoreSize:!0}),ng.copyLayoutParams(i,a)):t[e]=n:"replace"===r?t[e]=n:"remove"===r&&a&&(t[e]=null)}(a,e,i),function(t,e){t&&(t.hv=e.hv=[Ko(e,["left","right"]),Ko(e,["top","bottom"])],"group"===t.type&&(null==t.width&&(t.width=e.width=0),null==t.height&&(t.height=e.height=0)))}(a[e],i))},this);for(var l=a.length-1;l>=0;l--)null==a[l]?a.splice(l,1):delete a[l].$action},_flatten:function(t,e,i){du.each(t,function(t){if(t){i&&(t.parentOption=i),e.push(t);var n=t.children;"group"===t.type&&n&&this._flatten(n,e,t),delete t.children}},this)},useElOptionsToUpdate:function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t}});C_.extendComponentView({type:"graphic",init:function(t,e){this._elMap=du.createHashMap(),this._lastGraphicModel},render:function(t,e,i){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t,i),this._relocate(t,i)},_updateElements:function(t,e){var i=t.useElOptionsToUpdate();if(i){var n=this._elMap,a=this.group;du.each(i,function(t){var e=t.$action,i=t.id,r=n.get(i),o=t.parentId,s=null!=o?n.get(o):a;if("text"===t.type){var l=t.style;t.hv&&t.hv[1]&&(l.textVerticalAlign=l.textBaseline=null),!l.hasOwnProperty("textFill")&&l.fill&&(l.textFill=l.fill),!l.hasOwnProperty("textStroke")&&l.stroke&&(l.textStroke=l.stroke)}var u=function(t){return t=du.extend({},t),du.each(["id","parentId","$action","hv","bounding"].concat(ng.LOCATION_PARAMS),function(e){delete t[e]}),t}(t);e&&"merge"!==e?"replace"===e?($o(r,n),qo(i,s,u,n)):"remove"===e&&$o(r,n):r?r.attr(u):qo(i,s,u,n);var h=n.get(i);h&&(h.__ecGraphicWidth=t.width,h.__ecGraphicHeight=t.height)})}},_relocate:function(t,e){for(var i=t.option.elements,n=this.group,a=this._elMap,r=i.length-1;r>=0;r--){var o=i[r],s=a.get(o.id);if(s){var l=s.parent,u=l===n?{width:e.getWidth(),height:e.getHeight()}:{width:l.__ecGraphicWidth||0,height:l.__ecGraphicHeight||0};ng.positionElement(s,o,u,null,{hv:o.hv,boundingMode:o.bounding})}}},_clear:function(){var t=this._elMap;t.each(function(e){$o(e,t)}),this._elMap=du.createHashMap()},dispose:function(){this._clear()}});var nC=Wc.isNameSpecified,aC=C_.extendComponentModel({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{}},mergeOption:function(t){aC.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,i=0;i<t.length;i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=[],i=[];t.eachRawSeries(function(n){var a=n.name;i.push(a);var r;if(n.legendDataProvider){var o=n.legendDataProvider(),s=o.mapArray(o.getName);t.isSeriesFiltered(n)||(i=i.concat(s)),s.length?e=e.concat(s):r=!0}else r=!0;r&&nC(n)&&e.push(n.name)}),this._availableNames=i;var n=this.get("data")||e,a=du.map(n,function(t){return"string"!=typeof t&&"number"!=typeof t||(t={name:t}),new Vp(t,this,this.ecModel)},this);this._data=a},getData:function(){return this._data},select:function(t){var e=this.option.selected;if("single"===this.get("selectedMode")){var i=this._data;du.each(i,function(t){e[t.get("name")]=!1})}e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&du.indexOf(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}}),rC=aC;C_.registerAction("legendToggleSelect","legendselectchanged",du.curry(Jo,"toggleSelected")),C_.registerAction("legendSelect","legendselected",du.curry(Jo,"select")),C_.registerAction("legendUnSelect","legendunselected",du.curry(Jo,"unSelect"));var oC=ng.getLayoutRect,sC=ng.box,lC=ng.positionElement,uC={layout:function(t,e,i){var n=e.getBoxLayoutParams(),a=e.get("padding"),r={width:i.getWidth(),height:i.getHeight()},o=oC(n,r,a);sC(e.get("orient"),t,e.get("itemGap"),o.width,o.height),lC(t,n,r,a)},makeBackground:function(t,e){var i=qp.normalizeCssArray(e.get("padding")),n=e.getItemStyle(["color","opacity"]);return n.fill=e.get("backgroundColor"),t=new Dp.Rect({shape:{x:t.x-i[3],y:t.y-i[0],width:t.width+i[1]+i[3],height:t.height+i[0]+i[2],r:e.get("borderRadius")},style:n,silent:!0,z2:-1})}},hC=Fx.createSymbol,cC=uC.makeBackground,dC=du.curry,fC=du.each,pC=Dp.Group,gC=C_.extendComponentView({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new pC),this._backgroundEl},getContentGroup:function(){return this._contentGroup},render:function(t,e,i){if(this.resetInner(),t.get("show",!0)){var n=t.get("align");n&&"auto"!==n||(n="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(n,t,e,i);var a=t.getBoxLayoutParams(),r={width:i.getWidth(),height:i.getHeight()},o=t.get("padding"),s=ng.getLayoutRect(a,r,o),l=this.layoutInner(t,n,s),u=ng.getLayoutRect(du.defaults({width:l.width,height:l.height},a),r,o);this.group.attr("position",[u.x-l.x,u.y-l.y]),this.group.add(this._backgroundEl=cC(l,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,i,n){var a=this.getContentGroup(),r=du.createHashMap(),o=e.get("selectedMode"),s=[];i.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id)}),fC(e.getData(),function(l,u){var h=l.get("name");if(this.newlineDisabled||""!==h&&"\n"!==h){var c=i.getSeriesByName(h)[0];if(!r.get(h))if(c){var d=c.getData(),f=d.getVisual("color");"function"==typeof f&&(f=f(c.getDataParams(0)));var p=d.getVisual("legendSymbol")||"roundRect",g=d.getVisual("symbol");this._createItem(h,u,l,e,p,g,t,f,o).on("click",dC(Qo,h,n)).on("mouseover",dC(ts,c,null,n,s)).on("mouseout",dC(es,c,null,n,s)),r.set(h,!0)}else i.eachRawSeries(function(i){if(!r.get(h)&&i.legendDataProvider){var a=i.legendDataProvider(),c=a.indexOfName(h);if(c<0)return;var d=a.getItemVisual(c,"color");this._createItem(h,u,l,e,"roundRect",null,t,d,o).on("click",dC(Qo,h,n)).on("mouseover",dC(ts,i,h,n,s)).on("mouseout",dC(es,i,h,n,s)),r.set(h,!0)}},this)}else a.add(new pC({newline:!0}))},this)},_createItem:function(t,e,i,n,a,r,o,s,l){var u=n.get("itemWidth"),h=n.get("itemHeight"),c=n.get("inactiveColor"),d=n.get("symbolKeepAspect"),f=n.isSelected(t),p=new pC,g=i.getModel("textStyle"),m=i.get("icon"),v=i.getModel("tooltip"),y=v.parentModel;if(a=m||a,p.add(hC(a,0,0,u,h,f?s:c,null==d||d)),!m&&r&&(r!==a||"none"==r)){var x=.8*h;"none"===r&&(r="circle"),p.add(hC(r,(u-x)/2,(h-x)/2,x,x,f?s:c,null==d||d))}var _="left"===o?u+5:-5,b=o,w=n.get("formatter"),S=t;"string"==typeof w&&w?S=w.replace("{name}",null!=t?t:""):"function"==typeof w&&(S=w(t)),p.add(new Dp.Text({style:Dp.setTextStyle({},g,{text:S,x:_,y:h/2,textFill:f?g.getTextColor():c,textAlign:b,textVerticalAlign:"middle"})}));var M=new Dp.Rect({shape:p.getBoundingRect(),invisible:!0,tooltip:v.get("show")?du.extend({content:t,formatter:y.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:t,$vars:["name"]}},v.option):null});return p.add(M),p.eachChild(function(t){t.silent=!0}),M.silent=!l,this.getContentGroup().add(p),Dp.setHoverStyle(p),p.__legendDataIndex=e,p},layoutInner:function(t,e,i){var n=this.getContentGroup();ng.box(t.get("orient"),n,t.get("itemGap"),i.width,i.height);var a=n.getBoundingRect();return n.attr("position",[-a.x,-a.y]),this.group.getBoundingRect()}}),mC=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var i=0;i<e.length;i++)if(!e[i].isSelected(t.name))return!1;return!0})};C_.registerProcessor(mC),ug.registerSubTypeDefaulter("legend",function(){return"plain"});var vC=ng.mergeLayoutParam,yC=ng.getLayoutParams,xC=rC.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,i,n){var a=yC(t);xC.superCall(this,"init",t,e,i,n),is(this,t,a)},mergeOption:function(t,e){xC.superCall(this,"mergeOption",t,e),is(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),_C=Dp.Group,bC=["width","height"],wC=["x","y"],SC=gC.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){SC.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new _C),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new _C),this._showController},resetInner:function(){SC.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,i,n){function a(t,i){var a=t+"DataIndex",l=Dp.createIcon(e.get("pageIcons",!0)[e.getOrient().name][i],{onclick:du.bind(r._pageGo,r,a,e,n)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,o.add(l)}var r=this;SC.superCall(this,"renderInner",t,e,i,n);var o=this._controllerGroup,s=e.get("pageIconSize",!0);du.isArray(s)||(s=[s,s]),a("pagePrev",0);var l=e.getModel("pageTextStyle");o.add(new Dp.Text({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),a("pageNext",1)},layoutInner:function(t,e,i){var n=this.getContentGroup(),a=this._containerGroup,r=this._controllerGroup,o=t.getOrient().index,s=bC[o],l=bC[1-o],u=wC[1-o];ng.box(t.get("orient"),n,t.get("itemGap"),o?i.width:null,o?null:i.height),ng.box("horizontal",r,t.get("pageButtonItemGap",!0));var h=n.getBoundingRect(),c=r.getBoundingRect(),d=this._showController=h[s]>i[s],f=[-h.x,-h.y];f[o]=n.position[o];var p=[0,0],g=[-c.x,-c.y],m=du.retrieve2(t.get("pageButtonGap",!0),t.get("itemGap",!0));if(d){"end"===t.get("pageButtonPosition",!0)?g[o]+=i[s]-c[s]:p[o]+=c[s]+m}g[1-o]+=h[l]/2-c[l]/2,n.attr("position",f),a.attr("position",p),r.attr("position",g);var v=this.group.getBoundingRect();if((v={x:0,y:0})[s]=d?i[s]:h[s],v[l]=Math.max(h[l],c[l]),v[u]=Math.min(0,c[u]+g[1-o]),a.__rectSize=i[s],d){var y={x:0,y:0};y[s]=Math.max(i[s]-c[s]-m,0),y[l]=v[l],a.setClipPath(new Dp.Rect({shape:y})),a.__rectSize=y[s]}else r.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var x=this._getPageInfo(t);return null!=x.pageIndex&&Dp.updateProps(n,{position:x.contentPosition},!!d&&t),this._updatePageInfoView(t,x),v},_pageGo:function(t,e,i){var n=this._getPageInfo(e)[t];null!=n&&i.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:e.id})},_updatePageInfoView:function(t,e){var i=this._controllerGroup;du.each(["pagePrev","pageNext"],function(n){var a=null!=e[n+"DataIndex"],r=i.childOfName(n);r&&(r.setStyle("fill",a?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),r.cursor=a?"pointer":"default")});var n=i.childOfName("pageText"),a=t.get("pageFormatter"),r=e.pageIndex,o=null!=r?r+1:0,s=e.pageCount;n&&a&&n.setStyle("text",du.isString(a)?a.replace("{current}",o).replace("{total}",s):a({current:o,total:s}))},_getPageInfo:function(t){function e(t){var e=t.getBoundingRect().clone();return e[f]+=t.position[h],e}var i,n,a,r,o=t.get("scrollDataIndex",!0),s=this.getContentGroup(),l=s.getBoundingRect(),u=this._containerGroup.__rectSize,h=t.getOrient().index,c=bC[h],d=bC[1-h],f=wC[h],p=s.position.slice();this._showController?s.eachChild(function(t){t.__legendDataIndex===o&&(r=t)}):r=s.childAt(0);var g=u?Math.ceil(l[c]/u):0;if(r){var m=r.getBoundingRect(),v=r.position[h]+m[f];p[h]=-v-l[f],i=Math.floor(g*(v+m[f]+u/2)/l[c]),i=l[c]&&g?Math.max(0,Math.min(g-1,i)):-1;var y={x:0,y:0};y[c]=u,y[d]=l[d],y[f]=-p[h]-l[f];var x,_=s.children();if(s.eachChild(function(t,i){var n=e(t);n.intersect(y)&&(null==x&&(x=i),a=t.__legendDataIndex),i===_.length-1&&n[f]+n[c]<=y[f]+y[c]&&(a=null)}),null!=x){var b=e(_[x]);if(y[f]=b[f]+b[c]-y[c],x<=0&&b[f]>=y[f])n=null;else{for(;x>0&&e(_[x-1]).intersect(y);)x--;n=_[x].__legendDataIndex}}}return{contentPosition:p,pageIndex:i,pageCount:g,pagePrevDataIndex:n,pageNextDataIndex:a}}});C_.registerAction("legendScroll","legendscroll",function(t,e){var i=t.scrollDataIndex;null!=i&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(i)})});C_.extendComponentModel({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var MC=du.each,IC=qp.toCamelCase,AC=["","-webkit-","-moz-","-o-"];ns.prototype={constructor:ns,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+function(t){var e=[],i=t.get("transitionDuration"),n=t.get("backgroundColor"),a=t.getModel("textStyle"),r=t.get("padding");return i&&e.push(function(t){var e="left "+t+"s cubic-bezier(0.23, 1, 0.32, 1),top "+t+"s cubic-bezier(0.23, 1, 0.32, 1)";return du.map(AC,function(t){return t+"transition:"+e}).join(";")}(i)),n&&(Jl.canvasSupported?e.push("background-Color:"+n):(e.push("background-Color:#"+Wu.toHex(n)),e.push("filter:alpha(opacity=70)"))),MC(["width","color","radius"],function(i){var n="border-"+i,a=IC(n),r=t.get(a);null!=r&&e.push(n+":"+r+("color"===i?"":"px"))}),e.push(function(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t.getFont()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),MC(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n)}),e.join(";")}(a)),null!=r&&e.push("padding:"+qp.normalizeCssArray(r).join("px ")+"px"),e.join(";")+";"}(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var i,n=this._zr;n&&n.painter&&(i=n.painter.getViewportRootOffset())&&(t+=i.offsetLeft,e+=i.offsetTop);var a=this.el.style;a.left=t+"px",a.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(du.bind(this.hide,this),t)):this.hide())},isShow:function(){return this._show}};var TC=ns,DC=du.bind,CC=du.each,LC=Up.parsePercent,PC=new Dp.Rect({shape:{x:-1,y:-1,width:2,height:2}});C_.extendComponentView({type:"tooltip",init:function(t,e){if(!Jl.node){var i=new TC(e.getDom(),e);this._tooltipContent=i}},render:function(t,e,i){if(!Jl.node&&!Jl.wxa){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var n=this._tooltipContent;n.update(),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel.get("triggerOn");pD.register("itemTooltip",this._api,DC(function(e,i,n){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(i,n):"leave"===e&&this._hide(n))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,i=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){n.manuallyShowTip(t,e,i,{x:n._lastX,y:n._lastY})})}},manuallyShowTip:function(t,e,i,n){if(n.from!==this.uid&&!Jl.node){var a=rs(n,i);this._ticket="";var r=n.dataByCoordSys;if(n.tooltip&&null!=n.x&&null!=n.y){var o=PC;o.position=[n.x,n.y],o.update(),o.tooltip=n.tooltip,this._tryShow({offsetX:n.x,offsetY:n.y,target:o},a)}else if(r)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,event:{},dataByCoordSys:n.dataByCoordSys,tooltipOption:n.tooltipOption},a);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,i,n))return;var s=oD(n,e),l=s.point[0],u=s.point[1];null!=l&&null!=u&&this._tryShow({offsetX:l,offsetY:u,position:n.position,target:s.el,event:{}},a)}else null!=n.x&&null!=n.y&&(i.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:i.getZr().findHover(n.x,n.y).target,event:{}},a))}},manuallyHideTip:function(t,e,i,n){var a=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&a.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,n.from!==this.uid&&this._hide(rs(n,i))},_manuallyAxisShowTip:function(t,e,i,n){var a=n.seriesIndex,r=n.dataIndex,o=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=a&&null!=r&&null!=o){var s=e.getSeriesByIndex(a);if(s){if("axis"===(t=as([s.getData().getItemModel(r),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return i.dispatchAction({type:"updateAxisPointer",seriesIndex:a,dataIndex:r,position:n.position}),!0}}},_tryShow:function(t,e){var i=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var n=t.dataByCoordSys;n&&n.length?this._showAxisTooltip(n,t):i&&null!=i.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,i,e)):i&&i.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,i,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var i=t.get("showDelay");e=du.bind(e,this),clearTimeout(this._showTimout),i>0?this._showTimout=setTimeout(e,i):e()},_showAxisTooltip:function(t,e){var i=this._ecModel,n=this._tooltipModel,a=[e.offsetX,e.offsetY],r=[],o=[],s=as([e.tooltipOption,n]);CC(t,function(t){CC(t.dataByAxis,function(t){var e=i.getComponent(t.axisDim+"Axis",t.axisIndex),n=t.value,a=[];if(e&&null!=n){var s=_D.getValueLabel(n,e.axis,i,t.seriesDataIndices,t.valueLabelOpt);du.each(t.seriesDataIndices,function(r){var l=i.getSeriesByIndex(r.seriesIndex),u=r.dataIndexInside,h=l&&l.getDataParams(u);h.axisDim=t.axisDim,h.axisIndex=t.axisIndex,h.axisType=t.axisType,h.axisId=t.axisId,h.axisValue=kx.getAxisRawValue(e.axis,n),h.axisValueLabel=s,h&&(o.push(h),a.push(l.formatTooltip(u,!0)))});var l=s;r.push((l?qp.encodeHTML(l)+"<br />":"")+a.join("<br />"))}})},this),r.reverse(),r=r.join("<br /><br />");var l=e.position;this._showOrMove(s,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(s,l,a[0],a[1],this._tooltipContent,o):this._showTooltipContent(s,r,o,Math.random(),a[0],a[1],l)})},_showSeriesItemTooltip:function(t,e,i){var n=this._ecModel,a=e.seriesIndex,r=n.getSeriesByIndex(a),o=e.dataModel||r,s=e.dataIndex,l=e.dataType,u=o.getData(),h=as([u.getItemModel(s),o,r&&(r.coordinateSystem||{}).model,this._tooltipModel]),c=h.get("trigger");if(null==c||"item"===c){var d=o.getDataParams(s,l),f=o.formatTooltip(s,!1,l),p="item_"+o.name+"_"+s;this._showOrMove(h,function(){this._showTooltipContent(h,f,d,p,t.offsetX,t.offsetY,t.position,t.target)}),i({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:a,from:this.uid})}},_showComponentItemTooltip:function(t,e,i){var n=e.tooltip;if("string"==typeof n){var a=n;n={content:a,formatter:a}}var r=new Vp(n,this._tooltipModel,this._ecModel),o=r.get("content"),s=Math.random();this._showOrMove(r,function(){this._showTooltipContent(r,o,r.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),i({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,i,n,a,r,o,s){if(this._ticket="",t.get("showContent")&&t.get("show")){var l=this._tooltipContent,u=t.get("formatter");o=o||t.get("position");var h=e;if(u&&"string"==typeof u)h=qp.formatTpl(u,i,!0);else if("function"==typeof u){var c=DC(function(e,n){e===this._ticket&&(l.setContent(n),this._updatePosition(t,o,a,r,l,i,s))},this);this._ticket=n,h=u(i,n,c)}l.setContent(h),l.show(t),this._updatePosition(t,o,a,r,l,i,s)}},_updatePosition:function(t,e,i,n,a,r,o){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var u=a.getSize(),h=t.get("align"),c=t.get("verticalAlign"),d=o&&o.getBoundingRect().clone();if(o&&d.applyTransform(o.transform),"function"==typeof e&&(e=e([i,n],r,a.el,d,{viewSize:[s,l],contentSize:u.slice()})),du.isArray(e))i=LC(e[0],s),n=LC(e[1],l);else if(du.isObject(e)){e.width=u[0],e.height=u[1];var f=ng.getLayoutRect(e,{width:s,height:l});i=f.x,n=f.y,h=null,c=null}else if("string"==typeof e&&o){p=function(t,e,i){var n=i[0],a=i[1],r=0,o=0,s=e.width,l=e.height;switch(t){case"inside":r=e.x+s/2-n/2,o=e.y+l/2-a/2;break;case"top":r=e.x+s/2-n/2,o=e.y-a-5;break;case"bottom":r=e.x+s/2-n/2,o=e.y+l+5;break;case"left":r=e.x-n-5,o=e.y+l/2-a/2;break;case"right":r=e.x+s+5,o=e.y+l/2-a/2}return[r,o]}(e,d,u);i=p[0],n=p[1]}else{p=function(t,e,i,n,a,r,o){var s=os(i),l=s.width,u=s.height;return null!=r&&(t+l+r>n?t-=l+r:t+=r),null!=o&&(e+u+o>a?e-=u+o:e+=o),[t,e]}(i,n,a.el,s,l,h?null:20,c?null:20);i=p[0],n=p[1]}if(h&&(i-=ss(h)?u[0]/2:"right"===h?u[0]:0),c&&(n-=ss(c)?u[1]/2:"bottom"===c?u[1]:0),t.get("confine")){var p=function(t,e,i,n,a){var r=os(i),o=r.width,s=r.height;return t=Math.min(t+o,n)-o,e=Math.min(e+s,a)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}(i,n,a.el,s,l);i=p[0],n=p[1]}a.moveTo(i,n)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,i=!!e&&e.length===t.length;return i&&CC(e,function(e,n){var a=e.dataByAxis||{},r=(t[n]||{}).dataByAxis||[];(i&=a.length===r.length)&&CC(a,function(t,e){var n=r[e]||{},a=t.seriesDataIndices||[],o=n.seriesDataIndices||[];(i&=t.value===n.value&&t.axisType===n.axisType&&t.axisId===n.axisId&&a.length===o.length)&&CC(a,function(t,e){var n=o[e];i&=t.seriesIndex===n.seriesIndex&&t.dataIndex===n.dataIndex})})}),this._lastDataByCoordSys=t,!!i},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){Jl.node||Jl.wxa||(this._tooltipContent.hide(),pD.unregister("itemTooltip",e))}});C_.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),C_.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){});var kC=Up.parsePercent,OC=Fy.isDimensionStacked,RC=function(t,e,i){var n=i.getWidth(),a=i.getHeight(),r={},o=function(t,e){var i={};du.each(t,function(t,e){var n=t.getData(),a=t.coordinateSystem.getBaseAxis(),r=a.getExtent(),o="category"===a.type?a.getBandWidth():Math.abs(r[1]-r[0])/n.count(),s=i[us(a)]||{bandWidth:o,remainedWidth:o,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},l=s.stacks;i[us(a)]=s;var u=ls(t);l[u]||s.autoWidthCount++,l[u]=l[u]||{width:0,maxWidth:0};var h=kC(t.get("barWidth"),o),c=kC(t.get("barMaxWidth"),o),d=t.get("barGap"),f=t.get("barCategoryGap");h&&!l[u].width&&(h=Math.min(s.remainedWidth,h),l[u].width=h,s.remainedWidth-=h),c&&(l[u].maxWidth=c),null!=d&&(s.gap=d),null!=f&&(s.categoryGap=f)});var n={};return du.each(i,function(t,e){n[e]={};var i=t.stacks,a=t.bandWidth,r=kC(t.categoryGap,a),o=kC(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-r)/(l+(l-1)*o);u=Math.max(u,0),du.each(i,function(t,e){var i=t.maxWidth;i&&i<u&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),u=(s-r)/(l+(l-1)*o),u=Math.max(u,0);var h,c=0;du.each(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+o)}),h&&(c-=h.width*o);var d=-c/2;du.each(i,function(t,i){n[e][i]=n[e][i]||{offset:d,width:t.width},d+=t.width*(1+o)})}),n}(du.filter(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type}));e.eachSeriesByType(t,function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),i=t.coordinateSystem,s=i.getBaseAxis(),l=ls(t),u=o[us(s)][l],h=u.offset,c=u.width,d=i.getOtherAxis(s),f=t.get("center")||["50%","50%"],p=kC(f[0],n),g=kC(f[1],a),m=t.get("barMinHeight")||0,v=t.get("barMinAngle")||0;r[l]=r[l]||[];for(var y=e.mapDimension(d.dim),x=e.mapDimension(s.dim),_=OC(e,y),b=d.getExtent()[0],w=0,S=e.count();w<S;w++){var M=e.get(y,w),I=e.get(x,w);if(!isNaN(M)){var A=M>=0?"p":"n",T=b;_&&(r[l][I]||(r[l][I]={p:b,n:b}),T=r[l][I][A]);var D,C,L,P;if("radius"===d.dim){var k=d.dataToRadius(M)-b,O=s.dataToAngle(I);Math.abs(k)<m&&(k=(k<0?-1:1)*m),D=T,C=T+k,P=(L=O-h)-c,_&&(r[l][I][A]=C)}else{var R=d.dataToAngle(M,!0)-b,N=s.dataToRadius(I);Math.abs(R)<v&&(R=(R<0?-1:1)*v),C=(D=N+h)+c,L=T,P=T+R,_&&(r[l][I][A]=P)}e.setItemLayout(w,{cx:p,cy:g,r0:D,r:C,startAngle:-L*Math.PI/180,endAngle:-P*Math.PI/180})}}}},this)};hs.prototype={constructor:hs,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToRadius:c_.prototype.dataToCoord,radiusToData:c_.prototype.coordToData},du.inherits(hs,c_);var NC=hs;cs.prototype={constructor:cs,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToAngle:c_.prototype.dataToCoord,angleToData:c_.prototype.coordToData},du.inherits(cs,c_);var EC=cs,zC=function(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new NC,this._angleAxis=new EC,this._radiusAxis.polar=this._angleAxis.polar=this};zC.prototype={type:"polar",axisPointerEnabled:!0,constructor:zC,dimensions:["radius","angle"],model:null,containPoint:function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},containData:function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},getAxis:function(t){return this["_"+t+"Axis"]},getAxes:function(){return[this._radiusAxis,this._angleAxis]},getAxesByScale:function(t){var e=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===t&&e.push(i),n.scale.type===t&&e.push(n),e},getAngleAxis:function(){return this._angleAxis},getRadiusAxis:function(){return this._radiusAxis},getOtherAxis:function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},getTooltipAxes:function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},dataToPoint:function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},pointToData:function(t,e){var i=this.pointToCoord(t);return[this._radiusAxis.radiusToData(i[0],e),this._angleAxis.angleToData(i[1],e)]},pointToCoord:function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=this.getAngleAxis(),a=n.getExtent(),r=Math.min(a[0],a[1]),o=Math.max(a[0],a[1]);n.inverse?r=o-360:o=r+360;var s=Math.sqrt(e*e+i*i);e/=s,i/=s;for(var l=Math.atan2(-i,e)/Math.PI*180,u=l<r?1:-1;l<r||l>o;)l+=360*u;return[s,l]},coordToPoint:function(t){var e=t[0],i=t[1]/180*Math.PI;return[Math.cos(i)*e+this.cx,-Math.sin(i)*e+this.cy]}};var VC=zC,BC=ug.extend({type:"polarAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"polar",index:this.option.polarIndex,id:this.option.polarId})[0]}});du.merge(BC.prototype,Ox);var GC={angle:{startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{splitNumber:5}};Db("angle",BC,ds,GC.angle),Db("radius",BC,ds,GC.radius);C_.extendComponentModel({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function(t){var e;return this.ecModel.eachComponent(t,function(t){t.getCoordSysModel()===this&&(e=t)},this),e},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}});var HC=Up.parsePercent,FC=kx.createScaleByModel,WC=kx.niceScaleExtent,UC=Fy.getStackedDimension,ZC={dimensions:VC.prototype.dimensions,create:function(t,e){var i=[];return t.eachComponent("polar",function(t,n){var a=new VC(n);a.update=function(t,e){var i=this,n=i.getAngleAxis(),a=i.getRadiusAxis();if(n.scale.setExtent(1/0,-1/0),a.scale.setExtent(1/0,-1/0),t.eachSeries(function(t){if(t.coordinateSystem===i){var e=t.getData();du.each(e.mapDimension("radius",!0),function(t){a.scale.unionExtentFromData(e,UC(e,t))}),du.each(e.mapDimension("angle",!0),function(t){n.scale.unionExtentFromData(e,UC(e,t))})}}),WC(n.scale,n.model),WC(a.scale,a.model),"category"===n.type&&!n.onBand){var r=n.getExtent(),o=360/n.scale.count();n.inverse?r[1]+=o:r[1]-=o,n.setExtent(r[0],r[1])}};var r=a.getRadiusAxis(),o=a.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");fs(r,s),fs(o,l),function(t,e,i){var n=e.get("center"),a=i.getWidth(),r=i.getHeight();t.cx=HC(n[0],a),t.cy=HC(n[1],r);var o=t.getRadiusAxis(),s=Math.min(a,r)/2,l=HC(e.get("radius"),s);o.inverse?o.setExtent(l,0):o.setExtent(0,l)}(a,t,e),i.push(a),t.coordinateSystem=a,a.model=t}),t.eachSeries(function(e){if("polar"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}};vm.register("polar",ZC);var jC=["axisLine","axisLabel","axisTick","splitLine","splitArea"],YC=(sw.extend({type:"angleAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,a=n.getRadiusAxis().getExtent(),r=i.getTicksCoords(),o=du.map(i.getViewLabels(),function(t){return(t=du.clone(t)).coord=i.dataToCoord(t.tickValue),t});ms(o),ms(r),du.each(jC,function(e){!t.get(e+".show")||i.scale.isBlank()&&"axisLine"!==e||this["_"+e](t,n,r,a,o)},this)}},_axisLine:function(t,e,i,n){var a=t.getModel("axisLine.lineStyle"),r=new Dp.Circle({shape:{cx:e.cx,cy:e.cy,r:n[gs(e)]},style:a.getLineStyle(),z2:1,silent:!0});r.style.fill=null,this.group.add(r)},_axisTick:function(t,e,i,n){var a=t.getModel("axisTick"),r=(a.get("inside")?-1:1)*a.get("length"),o=n[gs(e)],s=du.map(i,function(t){return new Dp.Line({shape:ps(e,[o,o+r],t.coord)})});this.group.add(Dp.mergePath(s,{style:du.defaults(a.getModel("lineStyle").getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")})}))},_axisLabel:function(t,e,i,n,a){var r=t.getCategories(!0),o=t.getModel("axisLabel"),s=o.get("margin");du.each(a,function(i,a){var l=o,u=i.tickValue,h=n[gs(e)],c=e.coordToPoint([h+s,i.coord]),d=e.cx,f=e.cy,p=Math.abs(c[0]-d)/h<.3?"center":c[0]>d?"left":"right",g=Math.abs(c[1]-f)/h<.3?"middle":c[1]>f?"top":"bottom";r&&r[u]&&r[u].textStyle&&(l=new Vp(r[u].textStyle,o,o.ecModel));var m=new Dp.Text({silent:!0});this.group.add(m),Dp.setTextStyle(m.style,l,{x:c[0],y:c[1],textFill:l.getTextColor()||t.get("axisLine.lineStyle.color"),text:i.formattedLabel,textAlign:p,textVerticalAlign:g})},this)},_splitLine:function(t,e,i,n){var a=t.getModel("splitLine").getModel("lineStyle"),r=a.get("color"),o=0;r=r instanceof Array?r:[r];for(var s=[],l=0;l<i.length;l++){var u=o++%r.length;s[u]=s[u]||[],s[u].push(new Dp.Line({shape:ps(e,n,i[l].coord)}))}for(l=0;l<s.length;l++)this.group.add(Dp.mergePath(s[l],{style:du.defaults({stroke:r[l%r.length]},a.getLineStyle()),silent:!0,z:t.get("z")}))},_splitArea:function(t,e,i,n){if(i.length){var a=t.getModel("splitArea").getModel("areaStyle"),r=a.get("color"),o=0;r=r instanceof Array?r:[r];for(var s=[],l=Math.PI/180,u=-i[0].coord*l,h=Math.min(n[0],n[1]),c=Math.max(n[0],n[1]),d=t.get("clockwise"),f=1;f<i.length;f++){var p=o++%r.length;s[p]=s[p]||[],s[p].push(new Dp.Sector({shape:{cx:e.cx,cy:e.cy,r0:h,r:c,startAngle:u,endAngle:-i[f].coord*l,clockwise:d},silent:!0})),u=-i[f].coord*l}for(f=0;f<s.length;f++)this.group.add(Dp.mergePath(s[f],{style:du.defaults({fill:r[f%r.length]},a.getAreaStyle()),silent:!0}))}}}),["axisLine","axisTickLabel","axisName"]),XC=["splitLine","splitArea"],qC=(sw.extend({type:"radiusAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,a=n.getAngleAxis(),r=i.getTicksCoords(),o=a.getExtent()[0],s=i.getExtent(),l=function(t,e,i){return{position:[t.cx,t.cy],rotation:i/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}(n,t,o),u=new ew(t,l);du.each(YC,u.add,u),this.group.add(u.getGroup()),du.each(XC,function(e){t.get(e+".show")&&!i.scale.isBlank()&&this["_"+e](t,n,o,s,r)},this)}},_splitLine:function(t,e,i,n,a){var r=t.getModel("splitLine").getModel("lineStyle"),o=r.get("color"),s=0;o=o instanceof Array?o:[o];for(var l=[],u=0;u<a.length;u++){var h=s++%o.length;l[h]=l[h]||[],l[h].push(new Dp.Circle({shape:{cx:e.cx,cy:e.cy,r:a[u].coord},silent:!0}))}for(u=0;u<l.length;u++)this.group.add(Dp.mergePath(l[u],{style:du.defaults({stroke:o[u%o.length],fill:null},r.getLineStyle()),silent:!0}))},_splitArea:function(t,e,i,n,a){if(a.length){var r=t.getModel("splitArea").getModel("areaStyle"),o=r.get("color"),s=0;o=o instanceof Array?o:[o];for(var l=[],u=a[0].coord,h=1;h<a.length;h++){var c=s++%o.length;l[c]=l[c]||[],l[c].push(new Dp.Sector({shape:{cx:e.cx,cy:e.cy,r0:u,r:a[h].coord,startAngle:0,endAngle:2*Math.PI},silent:!0})),u=a[h].coord}for(h=0;h<l.length;h++)this.group.add(Dp.mergePath(l[h],{style:du.defaults({fill:o[h%o.length]},r.getAreaStyle()),silent:!0}))}}}),xD.extend({makeElOption:function(t,e,i,n,a){var r=i.axis;"angle"===r.dim&&(this.animationThreshold=Math.PI/18);var o,s=r.polar,l=s.getOtherAxis(r).getExtent();o=r["dataTo"+qp.capitalFirst(r.dim)](e);var u=n.get("type");if(u&&"none"!==u){var h=_D.buildElStyle(n),c=$C[u](r,s,o,l,h);c.style=h,t.graphicKey=c.type,t.pointer=c}var d=function(t,e,i,n,a){var r=e.axis,o=r.dataToCoord(t),s=n.getAngleAxis().getExtent()[0];s=s/180*Math.PI;var l,u,h,c=n.getRadiusAxis().getExtent();if("radius"===r.dim){var d=Mu.create();Mu.rotate(d,d,s),Mu.translate(d,d,[n.cx,n.cy]),l=Dp.applyTransform([o,-a],d);var f=e.getModel("axisLabel").get("rotate")||0,p=ew.innerTextLayout(s,f*Math.PI/180,-1);u=p.textAlign,h=p.textVerticalAlign}else{var g=c[1];l=n.coordToPoint([g+a,o]);var m=n.cx,v=n.cy;u=Math.abs(l[0]-m)/g<.3?"center":l[0]>m?"left":"right",h=Math.abs(l[1]-v)/g<.3?"middle":l[1]>v?"top":"bottom"}return{position:l,align:u,verticalAlign:h}}(e,i,0,s,n.get("label.margin"));_D.buildLabelElOption(t,i,n,a,d)}})),$C={line:function(t,e,i,n,a){return"angle"===t.dim?{type:"Line",shape:_D.makeLineShape(e.coordToPoint([n[0],i]),e.coordToPoint([n[1],i]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:i}}},shadow:function(t,e,i,n,a){var r=Math.max(1,t.getBandWidth()),o=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:_D.makeSectorShape(e.cx,e.cy,n[0],n[1],(-i-r/2)*o,(r/2-i)*o)}:{type:"Sector",shape:_D.makeSectorShape(e.cx,e.cy,i-r/2,i+r/2,0,2*Math.PI)}}};sw.registerAxisPointerClass("PolarAxisPointer",qC);C_.registerLayout(du.curry(RC,"bar")),C_.extendComponentView({type:"polar"});var KC=ug.extend({type:"geo",coordinateSystem:null,layoutMode:"box",init:function(t){ug.prototype.init.apply(this,arguments),Wc.defaultEmphasis(t,"label",["show"])},optionUpdated:function(){var t=this.option,e=this;t.regions=fS.getFilledRegions(t.regions,t.map,t.nameMap),this._optionModelMap=du.reduce(t.regions||[],function(t,i){return i.name&&t.set(i.name,new Vp(i,e)),t},du.createHashMap()),this.updateSelectedMap(t.regions)},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",aspectScale:.75,silent:!1,map:"",boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{show:!1,color:"#000"},itemStyle:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{label:{show:!0,color:"rgb(100,0,0)"},itemStyle:{color:"rgba(255,215,0,0.8)"}},regions:[]},getRegionModel:function(t){return this._optionModelMap.get(t)||new Vp(null,this,this.ecModel)},getFormattedLabel:function(t,e){var i=this.getRegionModel(t).get("label."+e+".formatter"),n={name:t};return"function"==typeof i?(n.status=e,i(n)):"string"==typeof i?i.replace("{a}",null!=t?t:""):void 0},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t}});du.mixin(KC,Tw);C_.extendComponentView({type:"geo",init:function(t,e){var i=new IS(e,!0);this._mapDraw=i,this.group.add(i.group)},render:function(t,e,i,n){if(!n||"geoToggleSelect"!==n.type||n.from!==this.uid){var a=this._mapDraw;t.get("show")?a.draw(t,e,i,this,n):this._mapDraw.group.removeAll(),this.group.silent=t.get("silent")}},dispose:function(){this._mapDraw&&this._mapDraw.remove()}});vs("toggleSelected",{type:"geoToggleSelect",event:"geoselectchanged"}),vs("select",{type:"geoSelect",event:"geoselected"}),vs("unSelect",{type:"geoUnSelect",event:"geounselected"});var JC=["rect","polygon","keep","clear"],QC=function(t,e){var i=t&&t.brush;if(du.isArray(i)||(i=i?[i]:[]),i.length){var n=[];du.each(i,function(t){var e=t.hasOwnProperty("toolbox")?t.toolbox:[];e instanceof Array&&(n=n.concat(e))});var a=t&&t.toolbox;du.isArray(a)&&(a=a[0]),a||(a={feature:{}},t.toolbox=[a]);var r=a.feature||(a.feature={}),o=r.brush||(r.brush={}),s=o.type||(o.type=[]);s.push.apply(s,n),function(t){var e={};du.each(t,function(t){e[t]=1}),t.length=0,du.each(e,function(e,i){t.push(i)})}(s),e&&!s.length&&s.push.apply(s,JC)}},tL=du.each,eL={createVisualMappings:function(t,e,i){var n={};return tL(e,function(e){var a=n[e]=function(){var t=function(){};return t.prototype.__hidden=t.prototype,new t}();tL(t[e],function(t,n){if(TM.isValidType(n)){var r={type:n,visual:t};i&&i(r,e),a[n]=new TM(r),"opacity"===n&&((r=du.clone(r)).type="colorAlpha",a.__hidden.__alphaForOpacity=new TM(r))}})}),n},replaceVisualOption:function(t,e,i){var n;du.each(i,function(t){e.hasOwnProperty(t)&&ys(e[t])&&(n=!0)}),n&&du.each(i,function(i){e.hasOwnProperty(i)&&ys(e[i])?t[i]=du.clone(e[i]):delete t[i]})},applyVisual:function(t,e,i,n,a,r){function o(t,o){l=null==r?t:o;var u=i.getRawDataItem(l);if(!u||!1!==u.visualMap)for(var h=n.call(a,t),c=e[h],d=s[h],f=0,p=d.length;f<p;f++){var g=d[f];c[g]&&c[g].applyVisual(t,function(t){return i.getItemVisual(l,t)},function(t,e){i.setItemVisual(l,t,e)})}}var s={};du.each(t,function(t){var i=TM.prepareVisualTypes(e[t]);s[t]=i});var l;null==r?i.each(o):i.each([r],o)},incrementalApplyVisual:function(t,e,i,n){var a={};return du.each(t,function(t){var i=TM.prepareVisualTypes(e[t]);a[t]=i}),{progress:function(t,r){null!=n&&(n=r.getDimension(n));for(var o;null!=(o=t.next());){var s=r.getRawDataItem(o);if(s&&!1===s.visualMap)return;for(var l=null!=n?r.get(n,o,!0):o,u=i(l),h=e[u],c=a[u],d=0,f=c.length;d<f;d++){var p=c[d];h[p]&&h[p].applyVisual(l,function(t){return r.getItemVisual(o,t)},function(t,e){r.setItemVisual(o,t,e)})}}}}}},iL={lineX:xs(0),lineY:xs(1),rect:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])},rect:function(t,e,i){return t&&i.boundingRect.intersect(t)}},polygon:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])&&qx.contain(i.range,t[0],t[1])},rect:function(t,e,i){var n=i.range;if(!t||n.length<=1)return!1;var a=t.x,r=t.y,o=t.width,s=t.height,l=n[0];return!!(qx.contain(n,a,r)||qx.contain(n,a+o,r)||qx.contain(n,a,r+s)||qx.contain(n,a+o,r+s)||ch.create(t).contain(l[0],l[1])||bs(a,r,a+o,r,n)||bs(a,r,a,r+s,n)||bs(a+o,r,a+o,r+s,n)||bs(a,r+s,a+o,r+s,n))||void 0}}},nL=du.each,aL=du.indexOf,rL=du.curry,oL=["dataToPoint","pointToData"],sL=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"],lL=Ss.prototype;lL.setOutputRanges=function(t,e){this.matchOutputRanges(t,e,function(t,e,i){if((t.coordRanges||(t.coordRanges=[])).push(e),!t.coordRange){t.coordRange=e;var n=dL[t.brushType](0,i,e);t.__rangeOffset={offset:fL[t.brushType](n.values,t.range,[1,1]),xyMinMax:n.xyMinMax}}})},lL.matchOutputRanges=function(t,e,i){nL(t,function(t){var n=this.findTargetInfo(t,e);n&&!0!==n&&du.each(n.coordSyses,function(n){var a=dL[t.brushType](1,n,t.range);i(t,a.values,n,e)})},this)},lL.setInputRanges=function(t,e){nL(t,function(t){var i=this.findTargetInfo(t,e);if(t.range=t.range||[],i&&!0!==i){t.panelId=i.panelId;var n=dL[t.brushType](0,i.coordSys,t.coordRange),a=t.__rangeOffset;t.range=a?fL[t.brushType](n.values,a.offset,function(t,e){var i=Ds(t),n=Ds(e),a=[i[0]/n[0],i[1]/n[1]];return isNaN(a[0])&&(a[0]=1),isNaN(a[1])&&(a[1]=1),a}(n.xyMinMax,a.xyMinMax)):n.values}},this)},lL.makePanelOpts=function(t,e){return du.map(this._targetInfoList,function(i){var n=i.getPanelRect();return{panelId:i.panelId,defaultBrushType:e&&e(i),clipPath:IA.makeRectPanelClipPath(n),isTargetByCursor:IA.makeRectIsTargetByCursor(n,t,i.coordSysModel),getLinearBrushOtherExtent:IA.makeLinearBrushOtherExtent(n)}})},lL.controlSeries=function(t,e,i){var n=this.findTargetInfo(t,i);return!0===n||n&&aL(n.coordSyses,e.coordinateSystem)>=0},lL.findTargetInfo=function(t,e){for(var i=this._targetInfoList,n=Is(e,t),a=0;a<i.length;a++){var r=i[a],o=t.panelId;if(o){if(r.panelId===o)return r}else for(a=0;a<hL.length;a++)if(hL[a](n,r))return r}return!0};var uL={grid:function(t,e){var i=t.xAxisModels,n=t.yAxisModels,a=t.gridModels,r=du.createHashMap(),o={},s={};(i||n||a)&&(nL(i,function(t){var e=t.axis.grid.model;r.set(e.id,e),o[e.id]=!0}),nL(n,function(t){var e=t.axis.grid.model;r.set(e.id,e),s[e.id]=!0}),nL(a,function(t){r.set(t.id,t),o[t.id]=!0,s[t.id]=!0}),r.each(function(t){var a=t.coordinateSystem,r=[];nL(a.getCartesians(),function(t,e){(aL(i,t.getAxis("x").model)>=0||aL(n,t.getAxis("y").model)>=0)&&r.push(t)}),e.push({panelId:"grid--"+t.id,gridModel:t,coordSysModel:t,coordSys:r[0],coordSyses:r,getPanelRect:cL.grid,xAxisDeclared:o[t.id],yAxisDeclared:s[t.id]})}))},geo:function(t,e){nL(t.geoModels,function(t){var i=t.coordinateSystem;e.push({panelId:"geo--"+t.id,geoModel:t,coordSysModel:t,coordSys:i,coordSyses:[i],getPanelRect:cL.geo})})}},hL=[function(t,e){var i=t.xAxisModel,n=t.yAxisModel,a=t.gridModel;return!a&&i&&(a=i.axis.grid.model),!a&&n&&(a=n.axis.grid.model),a&&a===e.gridModel},function(t,e){var i=t.geoModel;return i&&i===e.geoModel}],cL={grid:function(){return this.coordSys.grid.getRect().clone()},geo:function(){var t=this.coordSys,e=t.getBoundingRect().clone();return e.applyTransform(Dp.getTransform(t)),e}},dL={lineX:rL(As,0),lineY:rL(As,1),rect:function(t,e,i){var n=e[oL[t]]([i[0][0],i[1][0]]),a=e[oL[t]]([i[0][1],i[1][1]]),r=[Ms([n[0],a[0]]),Ms([n[1],a[1]])];return{values:r,xyMinMax:r}},polygon:function(t,e,i){var n=[[1/0,-1/0],[1/0,-1/0]];return{values:du.map(i,function(i){var a=e[oL[t]](i);return n[0][0]=Math.min(n[0][0],a[0]),n[1][0]=Math.min(n[1][0],a[1]),n[0][1]=Math.max(n[0][1],a[0]),n[1][1]=Math.max(n[1][1],a[1]),a}),xyMinMax:n}}},fL={lineX:rL(Ts,0),lineY:rL(Ts,1),rect:function(t,e,i){return[[t[0][0]-i[0]*e[0][0],t[0][1]-i[0]*e[0][1]],[t[1][0]-i[1]*e[1][0],t[1][1]-i[1]*e[1][1]]]},polygon:function(t,e,i){return du.map(t,function(t,n){return[t[0]-i[0]*e[n][0],t[1]-i[1]*e[n][1]]})}},pL=Ss,gL=["inBrush","outOfBrush"],mL="__ecBrushSelect",vL="__ecInBrushSelectEvent",yL=C_.PRIORITY.VISUAL.BRUSH;C_.registerLayout(yL,function(t,e,i){t.eachComponent({mainType:"brush"},function(e){i&&"takeGlobalCursor"===i.type&&e.setBrushOption("brush"===i.key?i.brushOption:{brushType:!1});(e.brushTargetManager=new pL(e.option,t)).setInputRanges(e.areas,t)})}),C_.registerVisual(yL,function(t,e,i){var n,a,r=[];t.eachComponent({mainType:"brush"},function(e,i){function o(t){return"all"===h||c[t]}function s(t){return!!t.length}var l={brushId:e.id,brushIndex:i,brushName:e.name,areas:du.clone(e.areas),selected:[]};r.push(l);var u=e.option,h=u.brushLink,c=[],d=[],f=[],p=0;i||(n=u.throttleType,a=u.throttleDelay);var g=du.map(e.areas,function(t){return function(t){var e=t.selectors={};return du.each(iL[t.brushType],function(i,n){e[n]=function(n){return i(n,e,t)}}),t}(du.defaults({boundingRect:xL[t.brushType](t)},t))}),m=eL.createVisualMappings(e.option,gL,function(t){t.mappingMethod="fixed"});du.isArray(h)&&du.each(h,function(t){c[t]=1}),t.eachSeries(function(i,n){var a=f[n]=[];"parallel"===i.subType?function(t,e){var i=t.coordinateSystem;p|=i.hasAxisBrushed(),o(e)&&i.eachActiveState(t.getData(),function(t,e){"active"===t&&(d[e]=1)})}(i,n):function(i,n,a){var r=Ls(i);if(r&&!function(t,e){var i=t.option.seriesIndex;return null!=i&&"all"!==i&&(du.isArray(i)?du.indexOf(i,e)<0:e!==i)}(e,n)&&(du.each(g,function(n){r[n.brushType]&&e.brushTargetManager.controlSeries(n,i,t)&&a.push(n),p|=s(a)}),o(n)&&s(a))){var l=i.getData();l.each(function(t){Cs(r,a,l,t)&&(d[t]=1)})}}(i,n,a)}),t.eachSeries(function(t,e){var i={seriesId:t.id,seriesIndex:e,seriesName:t.name,dataIndex:[]};l.selected.push(i);var n=Ls(t),a=f[e],r=t.getData(),u=o(e)?function(t){return d[t]?(i.dataIndex.push(r.getRawIndex(t)),"inBrush"):"outOfBrush"}:function(t){return Cs(n,a,r,t)?(i.dataIndex.push(r.getRawIndex(t)),"inBrush"):"outOfBrush"};(o(e)?p:s(a))&&eL.applyVisual(gL,m,r,u)})}),function(t,e,i,n,a){if(a){var r=t.getZr();r[vL]||(r[mL]||(r[mL]=function(t,e){if(!t.isDisposed()){var i=t.getZr();i[vL]=!0,t.dispatchAction({type:"brushSelect",batch:e}),i[vL]=!1}}),Nv.createOrUpdate(r,mL,i,e)(t,n))}}(e,n,a,r,i)});var xL={lineX:du.noop,lineY:du.noop,rect:function(t){return Ps(t.range)},polygon:function(t){for(var e,i=t.range,n=0,a=i.length;n<a;n++){e=e||[[1/0,-1/0],[1/0,-1/0]];var r=i[n];r[0]<e[0][0]&&(e[0][0]=r[0]),r[0]>e[0][1]&&(e[0][1]=r[0]),r[1]<e[1][0]&&(e[1][0]=r[1]),r[1]>e[1][1]&&(e[1][1]=r[1])}return e&&Ps(e)}},_L=["#ddd"];C_.extendComponentModel({type:"brush",dependencies:["geo","grid","xAxis","yAxis","parallel","series"],defaultOption:{toolbox:null,brushLink:null,seriesIndex:"all",geoIndex:null,xAxisIndex:null,yAxisIndex:null,brushType:"rect",brushMode:"single",transformable:!0,brushStyle:{borderWidth:1,color:"rgba(120,140,180,0.3)",borderColor:"rgba(120,140,180,0.8)"},throttleType:"fixRate",throttleDelay:0,removeOnClick:!0,z:1e4},areas:[],brushType:null,brushOption:{},coordInfoList:[],optionUpdated:function(t,e){var i=this.option;!e&&eL.replaceVisualOption(i,t,["inBrush","outOfBrush"]);var n=i.inBrush=i.inBrush||{};i.outOfBrush=i.outOfBrush||{color:_L},n.hasOwnProperty("liftZ")||(n.liftZ=5)},setAreas:function(t){t&&(this.areas=du.map(t,function(t){return ks(this.option,t)},this))},setBrushOption:function(t){this.brushOption=ks(this.option,t),this.brushType=this.brushOption.brushType}}),C_.extendComponentView({type:"brush",init:function(t,e){this.ecModel=t,this.api=e,this.model,(this._brushController=new SA(e.getZr())).on("brush",du.bind(this._onBrush,this)).mount()},render:function(t){return this.model=t,Os.apply(this,arguments)},updateTransform:Os,updateView:Os,dispose:function(){this._brushController.dispose()},_onBrush:function(t,e){var i=this.model.id;this.model.brushTargetManager.setOutputRanges(t,this.ecModel),(!e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"brush",brushId:i,areas:du.clone(t),$from:i})}});C_.registerAction({type:"brush",event:"brush"},function(t,e){e.eachComponent({mainType:"brush",query:t},function(e){e.setAreas(t.areas)})}),C_.registerAction({type:"brushSelect",event:"brushSelected",update:"none"},function(){});var bL={},wL={register:function(t,e){bL[t]=e},get:function(t){return bL[t]}},SL=zv.toolbox.brush;Rs.defaultOption={show:!0,type:["rect","polygon","lineX","lineY","keep","clear"],icon:{rect:"M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",polygon:"M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",lineX:"M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",lineY:"M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",keep:"M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",clear:"M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"},title:du.clone(SL.title)};var ML=Rs.prototype;ML.render=ML.updateView=function(t,e,i){var n,a,r;e.eachComponent({mainType:"brush"},function(t){n=t.brushType,a=t.brushOption.brushMode||"single",r|=t.areas.length}),this._brushType=n,this._brushMode=a,du.each(t.get("type",!0),function(e){t.setIconStatus(e,("keep"===e?"multiple"===a:"clear"===e?r:e===n)?"emphasis":"normal")})},ML.getIcons=function(){var t=this.model,e=t.get("icon",!0),i={};return du.each(t.get("type",!0),function(t){e[t]&&(i[t]=e[t])}),i},ML.onclick=function(t,e,i){var n=this._brushType,a=this._brushMode;"clear"===i?(e.dispatchAction({type:"axisAreaSelect",intervals:[]}),e.dispatchAction({type:"brush",command:"clear",areas:[]})):e.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:"keep"===i?n:n!==i&&i,brushMode:"keep"===i?"multiple"===a?"single":"multiple":a}})},wL.register("brush",Rs);C_.registerPreprocessor(QC);Ns.prototype={constructor:Ns,type:"calendar",dimensions:["time","value"],getDimensionsInfo:function(){return[{name:"time",type:"time"},"value"]},getRangeInfo:function(){return this._rangeInfo},getModel:function(){return this._model},getRect:function(){return this._rect},getCellWidth:function(){return this._sw},getCellHeight:function(){return this._sh},getOrient:function(){return this._orient},getFirstDayOfWeek:function(){return this._firstDayOfWeek},getDateInfo:function(t){var e=(t=Up.parseDate(t)).getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var n=t.getDate();n=n<10?"0"+n:n;var a=t.getDay();return a=Math.abs((a+7-this.getFirstDayOfWeek())%7),{y:e,m:i,d:n,day:a,time:t.getTime(),formatedDate:e+"-"+i+"-"+n,date:t}},getNextNDay:function(t,e){return 0===(e=e||0)?this.getDateInfo(t):((t=new Date(this.getDateInfo(t).time)).setDate(t.getDate()+e),this.getDateInfo(t))},update:function(t,e){function i(t,e){return null!=t[e]&&"auto"!==t[e]}this._firstDayOfWeek=+this._model.getModel("dayLabel").get("firstDay"),this._orient=this._model.get("orient"),this._lineWidth=this._model.getModel("itemStyle").getItemStyle().lineWidth||0,this._rangeInfo=this._getRangeInfo(this._initRangeOption());var n=this._rangeInfo.weeks||1,a=["width","height"],r=this._model.get("cellSize").slice(),o=this._model.getBoxLayoutParams(),s="horizontal"===this._orient?[n,7]:[7,n];du.each([0,1],function(t){i(r,t)&&(o[a[t]]=r[t]*s[t])});var l={width:e.getWidth(),height:e.getHeight()},u=this._rect=ng.getLayoutRect(o,l);du.each([0,1],function(t){i(r,t)||(r[t]=u[a[t]]/s[t])}),this._sw=r[0],this._sh=r[1]},dataToPoint:function(t,e){du.isArray(t)&&(t=t[0]),null==e&&(e=!0);var i=this.getDateInfo(t),n=this._rangeInfo,a=i.formatedDate;if(e&&!(i.time>=n.start.time&&i.time<n.end.time+864e5))return[NaN,NaN];var r=i.day,o=this._getRangeInfo([n.start.time,a]).nthWeek;return"vertical"===this._orient?[this._rect.x+r*this._sw+this._sw/2,this._rect.y+o*this._sh+this._sh/2]:[this._rect.x+o*this._sw+this._sw/2,this._rect.y+r*this._sh+this._sh/2]},pointToData:function(t){var e=this.pointToDate(t);return e&&e.time},dataToRect:function(t,e){var i=this.dataToPoint(t,e);return{contentShape:{x:i[0]-(this._sw-this._lineWidth)/2,y:i[1]-(this._sh-this._lineWidth)/2,width:this._sw-this._lineWidth,height:this._sh-this._lineWidth},center:i,tl:[i[0]-this._sw/2,i[1]-this._sh/2],tr:[i[0]+this._sw/2,i[1]-this._sh/2],br:[i[0]+this._sw/2,i[1]+this._sh/2],bl:[i[0]-this._sw/2,i[1]+this._sh/2]}},pointToDate:function(t){var e=Math.floor((t[0]-this._rect.x)/this._sw)+1,i=Math.floor((t[1]-this._rect.y)/this._sh)+1,n=this._rangeInfo.range;return"vertical"===this._orient?this._getDateByWeeksAndDay(i,e-1,n):this._getDateByWeeksAndDay(e,i-1,n)},convertToPixel:du.curry(Es,"dataToPoint"),convertFromPixel:du.curry(Es,"pointToData"),_initRangeOption:function(){var t=this._model.get("range"),e=t;if(du.isArray(e)&&1===e.length&&(e=e[0]),/^\d{4}$/.test(e)&&(t=[e+"-01-01",e+"-12-31"]),/^\d{4}[\/|-]\d{1,2}$/.test(e)){var i=this.getDateInfo(e),n=i.date;n.setMonth(n.getMonth()+1);var a=this.getNextNDay(n,-1);t=[i.formatedDate,a.formatedDate]}/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e)&&(t=[e,e]);var r=this._getRangeInfo(t);return r.start.time>r.end.time&&t.reverse(),t},_getRangeInfo:function(t){var e;(t=[this.getDateInfo(t[0]),this.getDateInfo(t[1])])[0].time>t[1].time&&(e=!0,t.reverse());var i=Math.floor(t[1].time/864e5)-Math.floor(t[0].time/864e5)+1,n=new Date(t[0].time),a=n.getDate(),r=t[1].date.getDate();if(n.setDate(a+i-1),n.getDate()!==r)for(var o=n.getTime()-t[1].time>0?1:-1;n.getDate()!==r&&(n.getTime()-t[1].time)*o>0;)i-=o,n.setDate(a+i-1);var s=Math.floor((i+t[0].day+6)/7),l=e?1-s:s-1;return e&&t.reverse(),{range:[t[0].formatedDate,t[1].formatedDate],start:t[0],end:t[1],allDay:i,weeks:s,nthWeek:l,fweek:t[0].day,lweek:t[1].day}},_getDateByWeeksAndDay:function(t,e,i){var n=this._getRangeInfo(i);if(t>n.weeks||0===t&&e<n.fweek||t===n.weeks&&e>n.lweek)return!1;var a=7*(t-1)-n.fweek+e,r=new Date(n.start.time);return r.setDate(n.start.d+a),this.getDateInfo(r)}},Ns.dimensions=Ns.prototype.dimensions,Ns.getDimensionsInfo=Ns.prototype.getDimensionsInfo,Ns.create=function(t,e){var i=[];return t.eachComponent("calendar",function(n){var a=new Ns(n,t,e);i.push(a),n.coordinateSystem=a}),t.eachSeries(function(t){"calendar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("calendarIndex")||0])}),i},vm.register("calendar",Ns);var IL=ng.getLayoutParams,AL=ng.sizeCalculable,TL=ng.mergeLayoutParam,DL=ug.extend({type:"calendar",coordinateSystem:null,defaultOption:{zlevel:0,z:2,left:80,top:60,cellSize:20,orient:"horizontal",splitLine:{show:!0,lineStyle:{color:"#000",width:1,type:"solid"}},itemStyle:{color:"#fff",borderWidth:1,borderColor:"#ccc"},dayLabel:{show:!0,firstDay:0,position:"start",margin:"50%",nameMap:"en",color:"#000"},monthLabel:{show:!0,position:"start",margin:5,align:"center",nameMap:"en",formatter:null,color:"#000"},yearLabel:{show:!0,position:null,margin:30,formatter:null,color:"#ccc",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:20}},init:function(t,e,i,n){var a=IL(t);DL.superApply(this,"init",arguments),zs(t,a)},mergeOption:function(t,e){DL.superApply(this,"mergeOption",arguments),zs(this.option,t)}}),CL={EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CN:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},LL={EN:["S","M","T","W","T","F","S"],CN:["日","一","二","三","四","五","六"]},PL=(C_.extendComponentView({type:"calendar",_tlpoints:null,_blpoints:null,_firstDayOfMonth:null,_firstDayPoints:null,render:function(t,e,i){var n=this.group;n.removeAll();var a=t.coordinateSystem,r=a.getRangeInfo(),o=a.getOrient();this._renderDayRect(t,r,n),this._renderLines(t,r,o,n),this._renderYearText(t,r,o,n),this._renderMonthText(t,o,n),this._renderWeekText(t,r,o,n)},_renderDayRect:function(t,e,i){for(var n=t.coordinateSystem,a=t.getModel("itemStyle").getItemStyle(),r=n.getCellWidth(),o=n.getCellHeight(),s=e.start.time;s<=e.end.time;s=n.getNextNDay(s,1).time){var l=n.dataToRect([s],!1).tl,u=new Dp.Rect({shape:{x:l[0],y:l[1],width:r,height:o},cursor:"default",style:a});i.add(u)}},_renderLines:function(t,e,i,n){function a(e){r._firstDayOfMonth.push(o.getDateInfo(e)),r._firstDayPoints.push(o.dataToRect([e],!1).tl);var a=r._getLinePointsOfOneWeek(t,e,i);r._tlpoints.push(a[0]),r._blpoints.push(a[a.length-1]),l&&r._drawSplitline(a,s,n)}var r=this,o=t.coordinateSystem,s=t.getModel("splitLine.lineStyle").getLineStyle(),l=t.get("splitLine.show"),u=s.lineWidth;this._tlpoints=[],this._blpoints=[],this._firstDayOfMonth=[],this._firstDayPoints=[];for(var h=e.start,c=0;h.time<=e.end.time;c++){a(h.formatedDate),0===c&&(h=o.getDateInfo(e.start.y+"-"+e.start.m));var d=h.date;d.setMonth(d.getMonth()+1),h=o.getDateInfo(d)}a(o.getNextNDay(e.end.time,1).formatedDate),l&&this._drawSplitline(r._getEdgesPoints(r._tlpoints,u,i),s,n),l&&this._drawSplitline(r._getEdgesPoints(r._blpoints,u,i),s,n)},_getEdgesPoints:function(t,e,i){var n=[t[0].slice(),t[t.length-1].slice()],a="horizontal"===i?0:1;return n[0][a]=n[0][a]-e/2,n[1][a]=n[1][a]+e/2,n},_drawSplitline:function(t,e,i){var n=new Dp.Polyline({z2:20,shape:{points:t},style:e});i.add(n)},_getLinePointsOfOneWeek:function(t,e,i){var n=t.coordinateSystem;e=n.getDateInfo(e);for(var a=[],r=0;r<7;r++){var o=n.getNextNDay(e.time,r),s=n.dataToRect([o.time],!1);a[2*o.day]=s.tl,a[2*o.day+1]=s["horizontal"===i?"bl":"tr"]}return a},_formatterLabel:function(t,e){return"string"==typeof t&&t?qp.formatTplSimple(t,e):"function"==typeof t?t(e):e.nameMap},_yearTextPositionControl:function(t,e,i,n,a){e=e.slice();var r=["center","bottom"];"bottom"===n?(e[1]+=a,r=["center","top"]):"left"===n?e[0]-=a:"right"===n?(e[0]+=a,r=["center","top"]):e[1]-=a;var o=0;return"left"!==n&&"right"!==n||(o=Math.PI/2),{rotation:o,position:e,style:{textAlign:r[0],textVerticalAlign:r[1]}}},_renderYearText:function(t,e,i,n){var a=t.getModel("yearLabel");if(a.get("show")){var r=a.get("margin"),o=a.get("position");o||(o="horizontal"!==i?"top":"left");var s=[this._tlpoints[this._tlpoints.length-1],this._blpoints[0]],l=(s[0][0]+s[1][0])/2,u=(s[0][1]+s[1][1])/2,h="horizontal"===i?0:1,c={top:[l,s[h][1]],bottom:[l,s[1-h][1]],left:[s[1-h][0],u],right:[s[h][0],u]},d=e.start.y;+e.end.y>+e.start.y&&(d=d+"-"+e.end.y);var f=a.get("formatter"),p={start:e.start.y,end:e.end.y,nameMap:d},g=this._formatterLabel(f,p),m=new Dp.Text({z2:30});Dp.setTextStyle(m.style,a,{text:g}),m.attr(this._yearTextPositionControl(m,c[o],i,o,r)),n.add(m)}},_monthTextPositionControl:function(t,e,i,n,a){var r="left",o="top",s=t[0],l=t[1];return"horizontal"===i?(l+=a,e&&(r="center"),"start"===n&&(o="bottom")):(s+=a,e&&(o="middle"),"start"===n&&(r="right")),{x:s,y:l,textAlign:r,textVerticalAlign:o}},_renderMonthText:function(t,e,i){var n=t.getModel("monthLabel");if(n.get("show")){var a=n.get("nameMap"),r=n.get("margin"),o=n.get("position"),s=n.get("align"),l=[this._tlpoints,this._blpoints];du.isString(a)&&(a=CL[a.toUpperCase()]||[]);var u="start"===o?0:1,h="horizontal"===e?0:1;r="start"===o?-r:r;for(var c="center"===s,d=0;d<l[u].length-1;d++){var f=l[u][d].slice(),p=this._firstDayOfMonth[d];if(c){var g=this._firstDayPoints[d];f[h]=(g[h]+l[0][d+1][h])/2}var m=n.get("formatter"),v=a[+p.m-1],y={yyyy:p.y,yy:(p.y+"").slice(2),MM:p.m,M:+p.m,nameMap:v},x=this._formatterLabel(m,y),_=new Dp.Text({z2:30});du.extend(Dp.setTextStyle(_.style,n,{text:x}),this._monthTextPositionControl(f,c,e,o,r)),i.add(_)}}},_weekTextPositionControl:function(t,e,i,n,a){var r="center",o="middle",s=t[0],l=t[1],u="start"===i;return"horizontal"===e?(s=s+n+(u?1:-1)*a[0]/2,r=u?"right":"left"):(l=l+n+(u?1:-1)*a[1]/2,o=u?"bottom":"top"),{x:s,y:l,textAlign:r,textVerticalAlign:o}},_renderWeekText:function(t,e,i,n){var a=t.getModel("dayLabel");if(a.get("show")){var r=t.coordinateSystem,o=a.get("position"),s=a.get("nameMap"),l=a.get("margin"),u=r.getFirstDayOfWeek();du.isString(s)&&(s=LL[s.toUpperCase()]||[]);var h=r.getNextNDay(e.end.time,7-e.lweek).time,c=[r.getCellWidth(),r.getCellHeight()];l=Up.parsePercent(l,c["horizontal"===i?0:1]),"start"===o&&(h=r.getNextNDay(e.start.time,-(7+e.fweek)).time,l=-l);for(var d=0;d<7;d++){var f=r.getNextNDay(h,d),p=r.dataToRect([f.time],!1).center,g=d;g=Math.abs((d+u)%7);var m=new Dp.Text({z2:30});du.extend(Dp.setTextStyle(m.style,a,{text:s[g]}),this._weekTextPositionControl(p,i,o,l,c)),n.add(m)}}}}),ng.getLayoutRect);C_.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),C_.extendComponentView({type:"title",render:function(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,a=t.getModel("textStyle"),r=t.getModel("subtextStyle"),o=t.get("textAlign"),s=t.get("textBaseline"),l=new Dp.Text({style:Dp.setTextStyle({},a,{text:t.get("text"),textFill:a.getTextColor()},{disableBox:!0}),z2:10}),u=l.getBoundingRect(),h=t.get("subtext"),c=new Dp.Text({style:Dp.setTextStyle({},r,{text:h,textFill:r.getTextColor(),y:u.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),f=t.get("sublink");l.silent=!d,c.silent=!f,d&&l.on("click",function(){window.open(d,"_"+t.get("target"))}),f&&c.on("click",function(){window.open(f,"_"+t.get("subtarget"))}),n.add(l),h&&n.add(c);var p=n.getBoundingRect(),g=t.getBoxLayoutParams();g.width=p.width,g.height=p.height;var m=PL(g,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));o||("middle"===(o=t.get("left")||t.get("right"))&&(o="center"),"right"===o?m.x+=m.width:"center"===o&&(m.x+=m.width/2)),s||("center"===(s=t.get("top")||t.get("bottom"))&&(s="middle"),"bottom"===s?m.y+=m.height:"middle"===s&&(m.y+=m.height/2),s=s||"top"),n.attr("position",[m.x,m.y]);var v={textAlign:o,textVerticalAlign:s};l.setStyle(v),c.setStyle(v),p=n.getBoundingRect();var y=m.margin,x=t.getItemStyle(["color","opacity"]);x.fill=t.get("backgroundColor");var _=new Dp.Rect({shape:{x:p.x-y[3],y:p.y-y[0],width:p.width+y[1]+y[3],height:p.height+y[0]+y[2],r:t.get("borderRadius")},style:x,silent:!0});Dp.subPixelOptimizeRect(_),n.add(_)}}}),ug.registerSubTypeDefaulter("dataZoom",function(){return"slider"});var kL=["cartesian2d","polar","singleAxis"],OL={isCoordSupported:function(t){return du.indexOf(kL,t)>=0},createNameEach:Vs,eachAxisDim:Vs(["x","y","z","radius","angle","single"],["axisIndex","axis","index","id"]),createLinkedNodesFinder:function(t,e,i){function n(t,n){n.nodes.push(t),e(function(e){du.each(i(t,e)||[],function(t){n.records[e.name][t]=!0})})}return function(a){var r={nodes:[],records:{}};if(e(function(t){r.records[t.name]={}}),!a)return r;n(a,r);var o;do{o=!1,t(function(t){!function(t,e){return du.indexOf(e.nodes,t)>=0}(t,r)&&function(t,n){var a=!1;return e(function(e){du.each(i(t,e)||[],function(t){n.records[e.name][t]&&(a=!0)})}),a}(t,r)&&(n(t,r),o=!0)})}while(o);return r}}},RL=du.each,NL=Up.asc,EL=function(t,e,i,n){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=n,this._dataZoomModel=i};EL.prototype={constructor:EL,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(i){if(OL.isCoordSupported(i.get("coordinateSystem"))){var n=this._dimName,a=e.queryComponents({mainType:n+"Axis",index:i.get(n+"AxisIndex"),id:i.get(n+"AxisId")})[0];this._axisIndex===(a&&a.componentIndex)&&t.push(i)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,i=this._dimName,n=this.ecModel,a=this.getAxisModel();"x"===i||"y"===i?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle");var r;return n.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(a.get(e)||0)&&(r=t)}),r},getMinMaxSpan:function(){return du.clone(this._minMaxSpan)},calculateDataWindow:function(t){var e=this._dataExtent,i=this.getAxisModel().axis.scale,n=this._dataZoomModel.getRangePropMode(),a=[0,100],r=[t.start,t.end],o=[];return RL(["startValue","endValue"],function(e){o.push(null!=t[e]?i.parse(t[e]):null)}),RL([0,1],function(t){var s=o[t],l=r[t];"percent"===n[t]?(null==l&&(l=a[t]),s=i.parse(Up.linearMap(l,a,e,!0))):l=Up.linearMap(s,e,a,!0),o[t]=s,r[t]=l}),{valueWindow:NL(o),percentWindow:NL(r)}},reset:function(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels();this._dataExtent=function(t,e,i){var n=[1/0,-1/0];return RL(i,function(t){var i=t.getData();i&&RL(i.mapDimension(e,!0),function(t){var e=i.getApproximateExtent(t);e[0]<n[0]&&(n[0]=e[0]),e[1]>n[1]&&(n[1]=e[1])})}),n[1]<n[0]&&(n=[NaN,NaN]),function(t,e){var i=t.getAxisModel(),n=i.getMin(!0),a="category"===i.get("type"),r=a&&i.getCategories().length;null!=n&&"dataMin"!==n&&"function"!=typeof n?e[0]=n:a&&(e[0]=r>0?0:NaN);var o=i.getMax(!0);null!=o&&"dataMax"!==o&&"function"!=typeof o?e[1]=o:a&&(e[1]=r>0?r-1:NaN),i.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0))}(t,n),n}(this,this._dimName,e);var i=this.calculateDataWindow(t.option);this._valueWindow=i.valueWindow,this._percentWindow=i.percentWindow,function(t){var e=t._minMaxSpan={},i=t._dataZoomModel;RL(["min","max"],function(n){e[n+"Span"]=i.get(n+"Span");var a=i.get(n+"ValueSpan");if(null!=a&&(e[n+"ValueSpan"]=a,null!=(a=t.getAxisModel().axis.scale.parse(a)))){var r=t._dataExtent;e[n+"Span"]=Up.linearMap(r[0]+a,r,[0,100],!0)}})}(this),Bs(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,Bs(this,!0))},filterData:function(t,e){if(t===this._dataZoomModel){var i=this._dimName,n=this.getTargetSeriesModels(),a=t.get("filterMode"),r=this._valueWindow;"none"!==a&&RL(n,function(t){var e=t.getData(),n=e.mapDimension(i,!0);"weakFilter"===a?e.filterSelf(function(t){for(var i,a,o,s=0;s<n.length;s++){var l=e.get(n[s],t),u=!isNaN(l),h=l<r[0],c=l>r[1];if(u&&!h&&!c)return!0;u&&(o=!0),h&&(i=!0),c&&(a=!0)}return o&&i&&a}):RL(n,function(i){if("empty"===a)t.setData(e.map(i,function(t){return function(t){return t>=r[0]&&t<=r[1]}(t)?t:NaN}));else{var n={};n[i]=r,e.selectRange(n)}}),RL(n,function(t){e.setApproximateExtent(r,t)})})}}};var zL=EL,VL=du.each,BL=OL.eachAxisDim,GL=C_.extendComponentModel({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function(t,e,i){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var n=Gs(t);this.mergeDefaultAndTheme(t,i),this.doInit(n)},mergeOption:function(t){var e=Gs(t);du.merge(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;Jl.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),Hs(this,t),VL([["start","startValue"],["end","endValue"]],function(t,i){"value"===this._rangePropMode[i]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,a){var r=this.dependentModels[e.axis][i],o=r.__dzAxisProxy||(r.__dzAxisProxy=new zL(e.name,i,this,a));t[e.name+"_"+i]=o},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();BL(function(e){var i=e.axisIndex;t[i]=Wc.normalizeToArray(t[i])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;BL(function(i){null!=t[i.axisIndex]&&(e=!0)},this);var i=t.orient;return null==i&&e?"orient":e?void 0:(null==i&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),i=this.option,n=this.dependentModels;if(t){var a="vertical"===e?"y":"x";n[a+"Axis"].length?(i[a+"AxisIndex"]=[0],t=!1):VL(n.singleAxis,function(n){t&&n.get("orient",!0)===e&&(i.singleAxisIndex=[n.componentIndex],t=!1)})}t&&BL(function(e){if(t){var n=[],a=this.dependentModels[e.axis];if(a.length&&!n.length)for(var r=0,o=a.length;r<o;r++)"category"===a[r].get("type")&&n.push(r);i[e.axisIndex]=n,n.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&BL(function(e){var n=i[e.axisIndex],a=t.get(e.axisIndex),r=t.get(e.axisId);a=t.ecModel.queryComponents({mainType:e.axis,index:a,id:r})[0].componentIndex,du.indexOf(n,a)<0&&n.push(a)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var i=!0;return BL(function(n){var a=t.get(n.axisIndex),r=this.dependentModels[n.axis][a];r&&r.get("type")===e||(i=!1)},this),i},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return BL(function(e){if(null==t){var i=this.get(e.axisIndex);i.length&&(t=this.dependentModels[e.axis][i[0]])}},this),t},eachTargetAxis:function(t,e){var i=this.ecModel;BL(function(n){VL(this.get(n.axisIndex),function(a){t.call(e,n,a,this,i)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var i=this.getAxisProxy(t,e);return i&&i.getAxisModel()},setRawRange:function(t,e){var i=this.option;VL([["start","startValue"],["end","endValue"]],function(e){null==t[e[0]]&&null==t[e[1]]||(i[e[0]]=t[e[0]],i[e[1]]=t[e[1]])},this),!e&&Hs(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow()},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var i in e)if(e.hasOwnProperty(i)&&e[i].hostedBy(this))return e[i];for(var i in e)if(e.hasOwnProperty(i)&&!e[i].hostedBy(this))return e[i]},getRangePropMode:function(){return this._rangePropMode.slice()}}),HL=wv.extend({type:"dataZoom",render:function(t,e,i,n){this.dataZoomModel=t,this.ecModel=e,this.api=i},getTargetCoordInfo:function(){var t=this.dataZoomModel,e=this.ecModel,i={};return t.eachTargetAxis(function(t,n){var a=e.getComponent(t.axis,n);if(a){var r=a.getCoordSysModel();r&&function(t,e,i,n){for(var a,r=0;r<i.length;r++)if(i[r].model===t){a=i[r];break}a||i.push(a={model:t,axisModels:[],coordIndex:n}),a.axisModels.push(e)}(r,a,i[r.mainType]||(i[r.mainType]=[]),r.componentIndex)}},this),i}}),FL=(GL.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),Dp.Rect),WL=Up.linearMap,UL=Up.asc,ZL=du.bind,jL=du.each,YL="horizontal",XL=5,qL=["line","bar","candlestick","scatter"],$L=HL.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,i,n){$L.superApply(this,"render",arguments),Nv.createOrUpdate(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1!==this.dataZoomModel.get("show")?(n&&"dataZoom"===n.type&&n.from===this.uid||this._buildView(),this._updateView()):this.group.removeAll()},remove:function(){$L.superApply(this,"remove",arguments),Nv.clear(this,"_dispatchZoomAction")},dispose:function(){$L.superApply(this,"dispose",arguments),Nv.clear(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new Dp.Group;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e.getWidth(),height:e.getHeight()},a=this._orient===YL?{right:n.width-i.x-i.width,top:n.height-30-7,width:i.width,height:30}:{right:7,top:i.y,width:30,height:i.height},r=ng.getLayoutParams(t.option);du.each(["right","top","width","height"],function(t){"ph"===r[t]&&(r[t]=a[t])});var o=ng.getLayoutRect(r,n,t.padding);this._location={x:o.x,y:o.y},this._size=[o.width,o.height],"vertical"===this._orient&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),a=n&&n.get("inverse"),r=this._displayables.barGroup,o=(this._dataShadowInfo||{}).otherAxisInverse;r.attr(i!==YL||a?i===YL&&a?{scale:o?[-1,1]:[-1,-1]}:"vertical"!==i||a?{scale:o?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:o?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:o?[1,1]:[1,-1]});var s=t.getBoundingRect([r]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,i=this._displayables.barGroup;i.add(new FL({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),i.add(new FL({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:du.bind(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t.series,n=i.getRawData(),a=i.getShadowDim?i.getShadowDim():t.otherDim;if(null!=a){var r=n.getDataExtent(a),o=.3*(r[1]-r[0]);r=[r[0]-o,r[1]+o];var s,l=[0,e[1]],u=[0,e[0]],h=[[e[0],0],[0,0]],c=[],d=u[1]/(n.count()-1),f=0,p=Math.round(n.count()/e[0]);n.each([a],function(t,e){if(p>0&&e%p)f+=d;else{var i=null==t||isNaN(t)||""===t,n=i?0:WL(t,r,l,!0);i&&!s&&e?(h.push([h[h.length-1][0],0]),c.push([c[c.length-1][0],0])):!i&&s&&(h.push([f,0]),c.push([f,0])),h.push([f,n]),c.push([f,n]),f+=d,s=i}});var g=this.dataZoomModel;this._displayables.barGroup.add(new Dp.Polygon({shape:{points:h},style:du.defaults({fill:g.get("dataBackgroundColor")},g.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new Dp.Polyline({shape:{points:c},style:g.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var i,n=this.ecModel;return t.eachTargetAxis(function(a,r){var o=t.getAxisProxy(a.name,r).getTargetSeriesModels();du.each(o,function(t){if(!(i||!0!==e&&du.indexOf(qL,t.get("type"))<0)){var o,s=n.getComponent(a.axis,r).axis,l=function(t){return{x:"y",y:"x",radius:"angle",angle:"radius"}[t]}(a.name),u=t.coordinateSystem;null!=l&&u.getOtherAxis&&(o=u.getOtherAxis(s).inverse),l=t.getData().mapDimension(l),i={thisAxis:s,series:t,thisDim:a.name,otherDim:l,otherAxisInverse:o}}},this)},this),i}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],i=t.handleLabels=[],n=this._displayables.barGroup,a=this._size,r=this.dataZoomModel;n.add(t.filler=new FL({draggable:!0,cursor:Fs(this._orient),drift:ZL(this._onDragMove,this,"all"),onmousemove:function(t){mc.stop(t.event)},ondragstart:ZL(this._showDataInfo,this,!0),ondragend:ZL(this._onDragEnd,this),onmouseover:ZL(this._showDataInfo,this,!0),onmouseout:ZL(this._showDataInfo,this,!1),style:{fill:r.get("fillerColor"),textPosition:"inside"}})),n.add(new FL(Dp.subPixelOptimizeRect({silent:!0,shape:{x:0,y:0,width:a[0],height:a[1]},style:{stroke:r.get("dataBackgroundColor")||r.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}}))),jL([0,1],function(t){var a=Dp.createIcon(r.get("handleIcon"),{cursor:Fs(this._orient),draggable:!0,drift:ZL(this._onDragMove,this,t),onmousemove:function(t){mc.stop(t.event)},ondragend:ZL(this._onDragEnd,this),onmouseover:ZL(this._showDataInfo,this,!0),onmouseout:ZL(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),o=a.getBoundingRect();this._handleHeight=Up.parsePercent(r.get("handleSize"),this._size[1]),this._handleWidth=o.width/o.height*this._handleHeight,a.setStyle(r.getModel("handleStyle").getItemStyle());var s=r.get("handleColor");null!=s&&(a.style.fill=s),n.add(e[t]=a);var l=r.textStyleModel;this.group.add(i[t]=new Dp.Text({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[WL(t[0],[0,100],e,!0),WL(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var i=this.dataZoomModel,n=this._handleEnds,a=this._getViewExtent(),r=i.findRepresentativeAxisProxy().getMinMaxSpan(),o=[0,100];KI(e,n,a,i.get("zoomLock")?"all":t,null!=r.minSpan?WL(r.minSpan,o,a,!0):null,null!=r.maxSpan?WL(r.maxSpan,o,a,!0):null);var s=this._range,l=this._range=UL([WL(n[0],a,o,!0),WL(n[1],a,o,!0)]);return!s||s[0]!==l[0]||s[1]!==l[1]},_updateView:function(t){var e=this._displayables,i=this._handleEnds,n=UL(i.slice()),a=this._size;jL([0,1],function(t){var n=e.handles[t],r=this._handleHeight;n.attr({scale:[r/2,r/2],position:[i[t],a[1]/2-r/2]})},this),e.filler.setShape({x:n[0],y:0,width:n[1]-n[0],height:a[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=Dp.getTransform(n.handles[t].parent,this.group),i=Dp.transformDirection(0===t?"right":"left",e),s=this._handleWidth/2+XL,l=Dp.applyTransform([c[t]+(0===t?-s:s),this._size[1]/2],e);a[t].setStyle({x:l[0],y:l[1],textVerticalAlign:r===YL?"middle":i,textAlign:r===YL?i:"center",text:o[t]})}var i=this.dataZoomModel,n=this._displayables,a=n.handleLabels,r=this._orient,o=["",""];if(i.get("showDetail")){var s=i.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,u=this._range,h=t?s.calculateDataWindow({start:u[0],end:u[1]}).valueWindow:s.getDataValueWindow();o=[this._formatLabel(h[0],l),this._formatLabel(h[1],l)]}}var c=UL(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var i=this.dataZoomModel,n=i.get("labelFormatter"),a=i.get("labelPrecision");null!=a&&"auto"!==a||(a=e.getPixelPrecision());var r=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(a,20));return du.isFunction(n)?n(t,r):du.isString(n)?n.replace("{value}",r):r},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,i){this._dragging=!0;var n=this._displayables.barGroup.getLocalTransform(),a=Dp.applyTransform([e,i],n,!0),r=this._updateInterval(t,a[0]),o=this.dataZoomModel.get("realtime");this._updateView(!o),r&&o&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1);!this.dataZoomModel.get("realtime")&&this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,i=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(i[0]<0||i[0]>e[0]||i[1]<0||i[1]>e[1])){var n=this._handleEnds,a=(n[0]+n[1])/2,r=this._updateInterval("all",i[0]-a);this._updateView(),r&&this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(jL(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var i=e[0].model.coordinateSystem;t=i.getRect&&i.getRect()}}),!t){var e=this.api.getWidth(),i=this.api.getHeight();t={x:.2*e,y:.2*i,width:.6*e,height:.6*i}}return t}}),KL=(GL.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}}),du.curry),JL="\0_ec_dataZoom_roams",QL={register:function(t,e){var i=Ws(t),n=e.dataZoomId,a=e.coordId;du.each(i,function(t,i){var r=t.dataZoomInfos;r[n]&&du.indexOf(e.allCoordIds,a)<0&&(delete r[n],t.count--)}),Us(i);var r=i[a];r||((r=i[a]={coordId:a,dataZoomInfos:{},count:0}).controller=function(t,e){var i=new _S(t.getZr());return i.on("pan",KL(function(t,e,i,n,a,r,o){Zs(t,function(s){return s.panGetRange(t.controller,e,i,n,a,r,o)})},e)),i.on("zoom",KL(function(t,e,i,n){Zs(t,function(a){return a.zoomGetRange(t.controller,e,i,n)})},e)),i}(t,r),r.dispatchAction=du.curry(function(t,e){t.dispatchAction({type:"dataZoom",batch:e})},t)),!r.dataZoomInfos[n]&&r.count++,r.dataZoomInfos[n]=e;var o=function(t){var e,i={},n={type_true:2,type_move:1,type_false:0,type_undefined:-1};return du.each(t,function(t){var a=!t.disabled&&(!t.zoomLock||"move");n["type_"+a]>n["type_"+e]&&(e=a),du.extend(i,t.roamControllerOpt)}),{controlType:e,opt:i}}(r.dataZoomInfos);r.controller.enable(o.controlType,o.opt),r.controller.setPointerChecker(e.containsPoint),Nv.createOrUpdate(r,"dispatchAction",e.throttleRate,"fixRate")},unregister:function(t,e){var i=Ws(t);du.each(i,function(t){t.controller.dispose();var i=t.dataZoomInfos;i[e]&&(delete i[e],t.count--)}),Us(i)},generateCoordId:function(t){return t.type+"\0_"+t.id}},tP=du.bind,eP=HL.extend({type:"dataZoom.inside",init:function(t,e){this._range},render:function(t,e,i,n){eP.superApply(this,"render",arguments),this._range=t.getPercentRange(),du.each(this.getTargetCoordInfo(),function(e,n){var a=du.map(e,function(t){return QL.generateCoordId(t.model)});du.each(e,function(e){var r=e.model,o=t.option;QL.register(i,{coordId:QL.generateCoordId(r),allCoordIds:a,containsPoint:function(t,e,i){return r.coordinateSystem.containPoint([e,i])},dataZoomId:t.id,throttleRate:t.get("throttle",!0),panGetRange:tP(this._onPan,this,e,n),zoomGetRange:tP(this._onZoom,this,e,n),zoomLock:o.zoomLock,disabled:o.disabled,roamControllerOpt:{zoomOnMouseWheel:o.zoomOnMouseWheel,moveOnMouseMove:o.moveOnMouseMove,preventDefaultMouseMove:o.preventDefaultMouseMove}})},this)},this)},dispose:function(){QL.unregister(this.api,this.dataZoomModel.id),eP.superApply(this,"dispose",arguments),this._range=null},_onPan:function(t,e,i,n,a,r,o,s,l){var u=this._range,h=u.slice(),c=t.axisModels[0];if(c){var d=iP[e]([r,o],[s,l],c,i,t),f=d.signal*(h[1]-h[0])*d.pixel/d.pixelLength;return KI(f,h,[0,100],"all"),this._range=h,u[0]!==h[0]||u[1]!==h[1]?h:void 0}},_onZoom:function(t,e,i,n,a,r){var o=this._range,s=o.slice(),l=t.axisModels[0];if(l){var u=iP[e](null,[a,r],l,i,t),h=(u.signal>0?u.pixelStart+u.pixelLength-u.pixel:u.pixel-u.pixelStart)/u.pixelLength*(s[1]-s[0])+s[0];n=Math.max(1/n,0),s[0]=(s[0]-h)*n+h,s[1]=(s[1]-h)*n+h;var c=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return KI(0,s,[0,100],0,c.minSpan,c.maxSpan),this._range=s,o[0]!==s[0]||o[1]!==s[1]?s:void 0}}}),iP={grid:function(t,e,i,n,a){var r=i.axis,o={},s=a.model.coordinateSystem.getRect();return t=t||[0,0],"x"===r.dim?(o.pixel=e[0]-t[0],o.pixelLength=s.width,o.pixelStart=s.x,o.signal=r.inverse?1:-1):(o.pixel=e[1]-t[1],o.pixelLength=s.height,o.pixelStart=s.y,o.signal=r.inverse?-1:1),o},polar:function(t,e,i,n,a){var r=i.axis,o={},s=a.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===i.mainType?(o.pixel=e[0]-t[0],o.pixelLength=l[1]-l[0],o.pixelStart=l[0],o.signal=r.inverse?1:-1):(o.pixel=e[1]-t[1],o.pixelLength=u[1]-u[0],o.pixelStart=u[0],o.signal=r.inverse?-1:1),o},singleAxis:function(t,e,i,n,a){var r=i.axis,o=a.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===r.orient?(s.pixel=e[0]-t[0],s.pixelLength=o.width,s.pixelStart=o.x,s.signal=r.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=o.height,s.pixelStart=o.y,s.signal=r.inverse?-1:1),s}},nP=du.createHashMap,aP=du.each;C_.registerProcessor({getTargetSeries:function(t){var e=nP();return t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){var a=n.getAxisProxy(t.name,i);aP(a.getTargetSeriesModels(),function(t){e.set(t.uid,t)})})}),e},modifyOutputEnd:!0,overallReset:function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).reset(n,e)}),t.eachTargetAxis(function(t,i,n){n.getAxisProxy(t.name,i).filterData(n,e)})}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),i=e.getDataPercentWindow(),n=e.getDataValueWindow();t.setRawRange({start:i[0],end:i[1],startValue:n[0],endValue:n[1]},!0)})}}),C_.registerAction("dataZoom",function(t,e){var i=OL.createLinkedNodesFinder(du.bind(e.eachComponent,e,"dataZoom"),OL.eachAxisDim,function(t,e){return t.get(e.axisIndex)}),n=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){n.push.apply(n,i(t).nodes)}),du.each(n,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})});var rP=du.each,oP=function(t){var e=t&&t.visualMap;du.isArray(e)||(e=e?[e]:[]),rP(e,function(t){if(t){js(t,"splitList")&&!js(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&du.isArray(e)&&rP(e,function(t){du.isObject(t)&&(js(t,"start")&&!js(t,"min")&&(t.min=t.start),js(t,"end")&&!js(t,"max")&&(t.max=t.end))})}})};ug.registerSubTypeDefaulter("visualMap",function(t){return t.categories||(t.pieces?t.pieces.length>0:t.splitNumber>0)&&!t.calculable?"piecewise":"continuous"});var sP=C_.PRIORITY.VISUAL.COMPONENT;C_.registerVisual(sP,{createOnAllSeries:!0,reset:function(t,e){var i=[];return e.eachComponent("visualMap",function(e){var n=t.pipelineContext;!e.isTargetSeries(t)||n&&n.large||i.push(eL.incrementalApplyVisual(e.stateList,e.targetVisuals,du.bind(e.getValueState,e),e.getDataDimension(t.getData())))}),i}}),C_.registerVisual(sP,{createOnAllSeries:!0,reset:function(t,e){var i=t.getData(),n=[];e.eachComponent("visualMap",function(e){if(e.isTargetSeries(t)){var a=e.getVisualMeta(du.bind(function(t,e,i,n){for(var a=e.targetVisuals[n],r=TM.prepareVisualTypes(a),o={color:t.getData().getVisual("color")},s=0,l=r.length;s<l;s++){var u=r[s],h=a["opacity"===u?"__alphaForOpacity":u];h&&h.applyVisual(i,function(t){return o[t]},function(t,e){o[t]=e})}return o.color},null,t,e))||{stops:[],outerColors:[]},r=e.getDataDimension(i),o=i.getDimensionInfo(r);null!=o&&(a.dimension=o.index,n.push(a))}}),t.getData().setVisual("visualMeta",n)}});var lP={get:function(t,e,i){var n=du.clone((uP[t]||{})[e]);return i&&du.isArray(n)?n[n.length-1]:n}},uP={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},hP=lP,cP=TM.mapVisual,dP=TM.eachVisual,fP=du.isArray,pP=du.each,gP=Up.asc,mP=Up.linearMap,vP=du.noop,yP=C_.extendComponentModel({type:"visualMap",dependencies:["series"],stateList:["inRange","outOfRange"],replacableOptionKeys:["inRange","outOfRange","target","controller","color"],dataBound:[-1/0,1/0],layoutMode:{type:"box",ignoreSize:!0},defaultOption:{show:!0,zlevel:0,z:4,seriesIndex:"all",min:0,max:200,dimension:null,inRange:null,outOfRange:null,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,color:null,formatter:null,text:null,textStyle:{color:"#333"}},init:function(t,e,i){this._dataExtent,this.targetVisuals={},this.controllerVisuals={},this.textStyleModel,this.itemSize,this.mergeDefaultAndTheme(t,i)},optionUpdated:function(t,e){var i=this.option;Jl.canvasSupported||(i.realtime=!1),!e&&eL.replaceVisualOption(i,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},resetVisual:function(t){var e=this.stateList;t=du.bind(t,this),this.controllerVisuals=eL.createVisualMappings(this.option.controller,e,t),this.targetVisuals=eL.createVisualMappings(this.option.target,e,t)},getTargetSeriesIndices:function(){var t=this.option.seriesIndex,e=[];return null==t||"all"===t?this.ecModel.eachSeries(function(t,i){e.push(i)}):e=Wc.normalizeToArray(t),e},eachTargetSeries:function(t,e){du.each(this.getTargetSeriesIndices(),function(i){t.call(e,this.ecModel.getSeriesByIndex(i))},this)},isTargetSeries:function(t){var e=!1;return this.eachTargetSeries(function(i){i===t&&(e=!0)}),e},formatValueText:function(t,e,i){function n(t){return t===l[0]?"min":t===l[1]?"max":(+t).toFixed(Math.min(s,20))}var a,r,o=this.option,s=o.precision,l=this.dataBound,u=o.formatter;return i=i||["<",">"],du.isArray(t)&&(t=t.slice(),a=!0),r=e?t:a?[n(t[0]),n(t[1])]:n(t),du.isString(u)?u.replace("{value}",a?r[0]:r).replace("{value2}",a?r[1]:r):du.isFunction(u)?a?u(t[0],t[1]):u(t):a?t[0]===l[0]?i[0]+" "+r[1]:t[1]===l[1]?i[1]+" "+r[0]:r[0]+" - "+r[1]:r},resetExtent:function(){var t=this.option,e=gP([t.min,t.max]);this._dataExtent=e},getDataDimension:function(t){var e=this.option.dimension,i=t.dimensions;if(null!=e||i.length){if(null!=e)return t.getDimension(e);for(var n=t.dimensions,a=n.length-1;a>=0;a--){var r=n[a];if(!t.getDimensionInfo(r).isCalculationCoord)return r}}},getExtent:function(){return this._dataExtent.slice()},completeVisualOption:function(){function t(t){fP(i.color)&&!t.inRange&&(t.inRange={color:i.color.slice().reverse()}),t.inRange=t.inRange||{color:e.get("gradientColor")},pP(this.stateList,function(e){var i=t[e];if(du.isString(i)){var n=hP.get(i,"active",o);n?(t[e]={},t[e][i]=n):delete t[e]}},this)}var e=this.ecModel,i=this.option,n={inRange:i.inRange,outOfRange:i.outOfRange},a=i.target||(i.target={}),r=i.controller||(i.controller={});du.merge(a,n),du.merge(r,n);var o=this.isCategory();t.call(this,a),t.call(this,r),function(t,e,i){var n=t[e],a=t[i];n&&!a&&(a=t[i]={},pP(n,function(t,e){if(TM.isValidType(e)){var i=hP.get(e,"inactive",o);null!=i&&(a[e]=i,"color"!==e||a.hasOwnProperty("opacity")||a.hasOwnProperty("colorAlpha")||(a.opacity=[0,0]))}}))}.call(this,a,"inRange","outOfRange"),function(t){var e=(t.inRange||{}).symbol||(t.outOfRange||{}).symbol,i=(t.inRange||{}).symbolSize||(t.outOfRange||{}).symbolSize,n=this.get("inactiveColor");pP(this.stateList,function(a){var r=this.itemSize,s=t[a];s||(s=t[a]={color:o?n:[n]}),null==s.symbol&&(s.symbol=e&&du.clone(e)||(o?"roundRect":["roundRect"])),null==s.symbolSize&&(s.symbolSize=i&&du.clone(i)||(o?r[0]:[r[0],r[0]])),s.symbol=cP(s.symbol,function(t){return"none"===t||"square"===t?"roundRect":t});var l=s.symbolSize;if(null!=l){var u=-1/0;dP(l,function(t){t>u&&(u=t)}),s.symbolSize=cP(l,function(t){return mP(t,[0,u],[0,r[0]],!0)})}},this)}.call(this,r)},resetItemSize:function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},isCategory:function(){return!!this.option.categories},setSelected:vP,getValueState:vP,getVisualMeta:vP}),xP=[20,140],_P=yP.extend({type:"visualMap.continuous",defaultOption:{align:"auto",calculable:!1,range:null,realtime:!0,itemHeight:null,itemWidth:null,hoverLink:!0,hoverLinkDataSize:null,hoverLinkOnHandle:null},optionUpdated:function(t,e){_P.superApply(this,"optionUpdated",arguments),this.resetExtent(),this.resetVisual(function(t){t.mappingMethod="linear",t.dataExtent=this.getExtent()}),this._resetRange()},resetItemSize:function(){_P.superApply(this,"resetItemSize",arguments);var t=this.itemSize;"horizontal"===this._orient&&t.reverse(),(null==t[0]||isNaN(t[0]))&&(t[0]=xP[0]),(null==t[1]||isNaN(t[1]))&&(t[1]=xP[1])},_resetRange:function(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):du.isArray(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]))},completeVisualOption:function(){yP.prototype.completeVisualOption.apply(this,arguments),du.each(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=0)},this)},setSelected:function(t){this.option.range=t.slice(),this._resetRange()},getSelected:function(){var t=this.getExtent(),e=Up.asc((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},getValueState:function(t){var e=this.option.range,i=this.getExtent();return(e[0]<=i[0]||e[0]<=t)&&(e[1]>=i[1]||t<=e[1])?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],a=i.getData();a.each(this.getDataDimension(a),function(e,i){t[0]<=e&&e<=t[1]&&n.push(i)},this),e.push({seriesId:i.id,dataIndex:n})},this),e},getVisualMeta:function(t){function e(e,i){a.push({value:e,color:t(e,i)})}for(var i=Ys(0,0,this.getExtent()),n=Ys(0,0,this.option.range.slice()),a=[],r=0,o=0,s=n.length,l=i.length;o<l&&(!n.length||i[o]<=n[0]);o++)i[o]<n[r]&&e(i[o],"outOfRange");for(u=1;r<s;r++,u=0)u&&a.length&&e(n[r],"outOfRange"),e(n[r],"inRange");for(var u=1;o<l;o++)(!n.length||n[n.length-1]<i[o])&&(u&&(a.length&&e(a[a.length-1].value,"outOfRange"),u=0),e(i[o],"outOfRange"));var h=a.length;return{stops:a,outerColors:[h?a[0].color:"transparent",h?a[h-1].color:"transparent"]}}}),bP=C_.extendComponentView({type:"visualMap",autoPositionValues:{left:1,right:1,top:1,bottom:1},init:function(t,e){this.ecModel=t,this.api=e,this.visualMapModel},render:function(t,e,i,n){this.visualMapModel=t,!1!==t.get("show")?this.doRender.apply(this,arguments):this.group.removeAll()},renderBackground:function(t){var e=this.visualMapModel,i=qp.normalizeCssArray(e.get("padding")||0),n=t.getBoundingRect();t.add(new Dp.Rect({z2:-1,silent:!0,shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[3]+i[1],height:n.height+i[0]+i[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}))},getControllerVisual:function(t,e,i){var n=(i=i||{}).forceState,a=this.visualMapModel,r={};if("symbol"===e&&(r.symbol=a.get("itemSymbol")),"color"===e){var o=a.get("contentColor");r.color=o}var s=a.controllerVisuals[n||a.getValueState(t)],l=TM.prepareVisualTypes(s);return du.each(l,function(n){var a=s[n];i.convertOpacityToAlpha&&"opacity"===n&&(n="colorAlpha",a=s.__alphaForOpacity),TM.dependsOn(n,e)&&a&&a.applyVisual(t,function(t){return r[t]},function(t,e){r[t]=e})}),r[e]},positionGroup:function(t){var e=this.visualMapModel,i=this.api;ng.positionElement(t,e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()})},doRender:du.noop}),wP=ng.getLayoutRect,SP={getItemAlign:function(t,e,i){var n=t.option,a=n.align;if(null!=a&&"auto"!==a)return a;for(var r={width:e.getWidth(),height:e.getHeight()},o="horizontal"===n.orient?1:0,s=[["left","right","width"],["top","bottom","height"]],l=s[o],u=[0,null,10],h={},c=0;c<3;c++)h[s[1-o][c]]=u[c],h[l[c]]=2===c?i[0]:n[l[c]];var d=[["x","width",3],["y","height",0]][o],f=wP(h,r,n.padding);return l[(f.margin[d[2]]||0)+f[d[0]]+.5*f[d[1]]<.5*r[d[1]]?0:1]},convertDataIndex:function(t){return du.each(t||[],function(e){null!=t.dataIndex&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null)}),t}},MP=Up.linearMap,IP=du.each,AP=Math.min,TP=Math.max,DP=12,CP=6,LP=bP.extend({type:"visualMap.continuous",init:function(){LP.superApply(this,"init",arguments),this._shapes={},this._dataInterval=[],this._handleEnds=[],this._orient,this._useHandle,this._hoverLinkDataIndices=[],this._dragging,this._hovering},doRender:function(t,e,i,n){n&&"selectDataRange"===n.type&&n.from===this.uid||this._buildView()},_buildView:function(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var i=t.get("text");this._renderEndsText(e,i,0),this._renderEndsText(e,i,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e)},_renderEndsText:function(t,e,i){if(e){var n=e[1-i];n=null!=n?n+"":"";var a=this.visualMapModel,r=a.get("textGap"),o=a.itemSize,s=this._shapes.barGroup,l=this._applyTransform([o[0]/2,0===i?-r:o[1]+r],s),u=this._applyTransform(0===i?"bottom":"top",s),h=this._orient,c=this.visualMapModel.textStyleModel;this.group.add(new Dp.Text({style:{x:l[0],y:l[1],textVerticalAlign:"horizontal"===h?"middle":u,textAlign:"horizontal"===h?u:"center",text:n,textFont:c.getFont(),textFill:c.getTextColor()}}))}},_renderBar:function(t){var e=this.visualMapModel,i=this._shapes,n=e.itemSize,a=this._orient,r=this._useHandle,o=SP.getItemAlign(e,this.api,n),s=i.barGroup=this._createBarGroup(o);s.add(i.outOfRange=Xs()),s.add(i.inRange=Xs(null,r?$s(this._orient):null,du.bind(this._dragHandle,this,"all",!1),du.bind(this._dragHandle,this,"all",!0)));var l=e.textStyleModel.getTextRect("国"),u=TP(l.width,l.height);r&&(i.handleThumbs=[],i.handleLabels=[],i.handleLabelPoints=[],this._createHandle(s,0,n,u,a,o),this._createHandle(s,1,n,u,a,o)),this._createIndicator(s,n,u,a),t.add(s)},_createHandle:function(t,e,i,n,a){var r=du.bind(this._dragHandle,this,e,!1),o=du.bind(this._dragHandle,this,e,!0),s=Xs(function(t,e){return 0===t?[[0,0],[e,0],[e,-e]]:[[0,0],[e,0],[e,e]]}(e,n),$s(this._orient),r,o);s.position[0]=i[0],t.add(s);var l=this.visualMapModel.textStyleModel,u=new Dp.Text({draggable:!0,drift:r,onmousemove:function(t){mc.stop(t.event)},ondragend:o,style:{x:0,y:0,text:"",textFont:l.getFont(),textFill:l.getTextColor()}});this.group.add(u);var h=["horizontal"===a?n/2:1.5*n,"horizontal"===a?0===e?-1.5*n:1.5*n:0===e?-n/2:n/2],c=this._shapes;c.handleThumbs[e]=s,c.handleLabelPoints[e]=h,c.handleLabels[e]=u},_createIndicator:function(t,e,i,n){var a=Xs([[0,0]],"move");a.position[0]=e[0],a.attr({invisible:!0,silent:!0}),t.add(a);var r=this.visualMapModel.textStyleModel,o=new Dp.Text({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textFont:r.getFont(),textFill:r.getTextColor()}});this.group.add(o);var s=["horizontal"===n?i/2:CP+3,0],l=this._shapes;l.indicator=a,l.indicatorLabel=o,l.indicatorLabelPoint=s},_dragHandle:function(t,e,i,n){if(this._useHandle){if(this._dragging=!e,!e){var a=this._applyTransform([i,n],this._shapes.barGroup,!0);this._updateInterval(t,a[1]),this._updateView()}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():qs(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1)}},_resetInterval:function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),i=t.getExtent(),n=[0,t.itemSize[1]];this._handleEnds=[MP(e[0],i,n,!0),MP(e[1],i,n,!0)]},_updateInterval:function(t,e){e=e||0;var i=this.visualMapModel,n=this._handleEnds,a=[0,i.itemSize[1]];KI(e,n,a,t,0);var r=i.getExtent();this._dataInterval=[MP(n[0],a,r,!0),MP(n[1],a,r,!0)]},_updateView:function(t){var e=this.visualMapModel,i=e.getExtent(),n=this._shapes,a=[0,e.itemSize[1]],r=t?a:this._handleEnds,o=this._createBarVisual(this._dataInterval,i,r,"inRange"),s=this._createBarVisual(i,i,a,"outOfRange");n.inRange.setStyle({fill:o.barColor,opacity:o.opacity}).setShape("points",o.barPoints),n.outOfRange.setStyle({fill:s.barColor,opacity:s.opacity}).setShape("points",s.barPoints),this._updateHandle(r,o)},_createBarVisual:function(t,e,i,n){var a={forceState:n,convertOpacityToAlpha:!0},r=this._makeColorGradient(t,a),o=[this.getControllerVisual(t[0],"symbolSize",a),this.getControllerVisual(t[1],"symbolSize",a)],s=this._createBarPoints(i,o);return{barColor:new ep(0,0,0,1,r),barPoints:s,handlesColor:[r[0].color,r[r.length-1].color]}},_makeColorGradient:function(t,e){var i=[],n=(t[1]-t[0])/100;i.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var a=1;a<100;a++){var r=t[0]+n*a;if(r>t[1])break;i.push({color:this.getControllerVisual(r,"color",e),offset:a/100})}return i.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),i},_createBarPoints:function(t,e){var i=this.visualMapModel.itemSize;return[[i[0]-e[0],t[0]],[i[0],t[0]],[i[0],t[1]],[i[0]-e[1],t[1]]]},_createBarGroup:function(t){var e=this._orient,i=this.visualMapModel.get("inverse");return new Dp.Group("horizontal"!==e||i?"horizontal"===e&&i?{scale:"bottom"===t?[-1,1]:[1,1],rotation:-Math.PI/2}:"vertical"!==e||i?{scale:"left"===t?[1,1]:[-1,1]}:{scale:"left"===t?[1,-1]:[-1,-1]}:{scale:"bottom"===t?[1,1]:[-1,1],rotation:Math.PI/2})},_updateHandle:function(t,e){if(this._useHandle){var i=this._shapes,n=this.visualMapModel,a=i.handleThumbs,r=i.handleLabels;IP([0,1],function(o){var s=a[o];s.setStyle("fill",e.handlesColor[o]),s.position[1]=t[o];var l=Dp.applyTransform(i.handleLabelPoints[o],Dp.getTransform(s,this.group));r[o].setStyle({x:l[0],y:l[1],text:n.formatValueText(this._dataInterval[o]),textVerticalAlign:"middle",textAlign:this._applyTransform("horizontal"===this._orient?0===o?"bottom":"top":"left",i.barGroup)})},this)}},_showIndicator:function(t,e,i,n){var a=this.visualMapModel,r=a.getExtent(),o=a.itemSize,s=[0,o[1]],l=MP(t,r,s,!0),u=this._shapes,h=u.indicator;if(h){h.position[1]=l,h.attr("invisible",!1),h.setShape("points",function(t,e,i,n){return t?[[0,-AP(e,TP(i,0))],[CP,0],[0,AP(e,TP(n-i,0))]]:[[0,0],[5,-5],[5,5]]}(!!i,n,l,o[1]));var c=this.getControllerVisual(t,"color",{convertOpacityToAlpha:!0});h.setStyle("fill",c);var d=Dp.applyTransform(u.indicatorLabelPoint,Dp.getTransform(h,this.group)),f=u.indicatorLabel;f.attr("invisible",!1);var p=this._applyTransform("left",u.barGroup),g=this._orient;f.setStyle({text:(i||"")+a.formatValueText(e),textVerticalAlign:"horizontal"===g?p:"middle",textAlign:"horizontal"===g?"center":p,x:d[0],y:d[1]})}},_enableHoverLinkToSeries:function(){var t=this;this._shapes.barGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var i=t.visualMapModel.itemSize,n=t._applyTransform([e.offsetX,e.offsetY],t._shapes.barGroup,!0,!0);n[1]=AP(TP(0,n[1]),i[1]),t._doHoverLinkToSeries(n[1],0<=n[0]&&n[0]<=i[0])}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries()})},_enableHoverLinkFromSeries:function(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},_doHoverLinkToSeries:function(t,e){var i=this.visualMapModel,n=i.itemSize;if(i.option.hoverLink){var a=[0,n[1]],r=i.getExtent();t=AP(TP(a[0],t),a[1]);var o=function(t,e,i){var n=DP/2,a=t.get("hoverLinkDataSize");return a&&(n=MP(a,e,i,!0)/2),n}(i,r,a),s=[t-o,t+o],l=MP(t,a,r,!0),u=[MP(s[0],a,r,!0),MP(s[1],a,r,!0)];s[0]<a[0]&&(u[0]=-1/0),s[1]>a[1]&&(u[1]=1/0),e&&(u[0]===-1/0?this._showIndicator(l,u[1],"< ",o):u[1]===1/0?this._showIndicator(l,u[0],"> ",o):this._showIndicator(l,l,"≈ ",o));var h=this._hoverLinkDataIndices,c=[];(e||qs(i))&&(c=this._hoverLinkDataIndices=i.findTargetDataIndices(u));var d=Wc.compressBatches(h,c);this._dispatchHighDown("downplay",SP.convertDataIndex(d[0])),this._dispatchHighDown("highlight",SP.convertDataIndex(d[1]))}},_hoverLinkFromSeriesMouseOver:function(t){var e=t.target,i=this.visualMapModel;if(e&&null!=e.dataIndex){var n=this.ecModel.getSeriesByIndex(e.seriesIndex);if(i.isTargetSeries(n)){var a=n.getData(e.dataType),r=a.get(i.getDataDimension(a),e.dataIndex,!0);isNaN(r)||this._showIndicator(r,r)}}},_hideIndicator:function(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0)},_clearHoverLinkToSeries:function(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",SP.convertDataIndex(t)),t.length=0},_clearHoverLinkFromSeries:function(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator)},_applyTransform:function(t,e,i,n){var a=Dp.getTransform(e,n?null:this.group);return Dp[du.isArray(t)?"applyTransform":"transformDirection"](t,a,i)},_dispatchHighDown:function(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e})},dispose:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},remove:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()}});C_.registerAction({type:"selectDataRange",event:"dataRangeSelected",update:"update"},function(t,e){e.eachComponent({mainType:"visualMap",query:t},function(e){e.setSelected(t.selected)})}),C_.registerPreprocessor(oP);var PP=Up.reformIntervals,kP=yP.extend({type:"visualMap.piecewise",defaultOption:{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieceList:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0,showLabel:null},optionUpdated:function(t,e){kP.superApply(this,"optionUpdated",arguments),this._pieceList=[],this.resetExtent();var i=this._mode=this._determineMode();OP[this._mode].call(this),this._resetSelected(t,e);var n=this.option.categories;this.resetVisual(function(t,e){"categories"===i?(t.mappingMethod="category",t.categories=du.clone(n)):(t.dataExtent=this.getExtent(),t.mappingMethod="piecewise",t.pieceList=du.map(this._pieceList,function(t){t=du.clone(t);return"inRange"!==e&&(t.visual=null),t}))})},completeVisualOption:function(){function t(t,e,i){return t&&t[e]&&(du.isObject(t[e])?t[e].hasOwnProperty(i):t[e]===i)}var e=this.option,i={},n=TM.listVisualTypes(),a=this.isCategory();du.each(e.pieces,function(t){du.each(n,function(e){t.hasOwnProperty(e)&&(i[e]=1)})}),du.each(i,function(i,n){var r=0;du.each(this.stateList,function(i){r|=t(e,i,n)||t(e.target,i,n)},this),!r&&du.each(this.stateList,function(t){(e[t]||(e[t]={}))[n]=hP.get(n,"inRange"===t?"active":"inactive",a)})},this),yP.prototype.completeVisualOption.apply(this,arguments)},_resetSelected:function(t,e){var i=this.option,n=this._pieceList,a=(e?i:t).selected||{};if(i.selected=a,du.each(n,function(t,e){var i=this.getSelectedMapKey(t);a.hasOwnProperty(i)||(a[i]=!0)},this),"single"===i.selectedMode){var r=!1;du.each(n,function(t,e){var i=this.getSelectedMapKey(t);a[i]&&(r?a[i]=!1:r=!0)},this)}},getSelectedMapKey:function(t){return"categories"===this._mode?t.value+"":t.index+""},getPieceList:function(){return this._pieceList},_determineMode:function(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},setSelected:function(t){this.option.selected=du.clone(t)},getValueState:function(t){var e=TM.findPieceIndex(t,this._pieceList);return null!=e&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],a=i.getData();a.each(this.getDataDimension(a),function(e,i){TM.findPieceIndex(e,this._pieceList)===t&&n.push(i)},this),e.push({seriesId:i.id,dataIndex:n})},this),e},getRepresentValue:function(t){var e;if(this.isCategory())e=t.value;else if(null!=t.value)e=t.value;else{var i=t.interval||[];e=i[0]===-1/0&&i[1]===1/0?0:(i[0]+i[1])/2}return e},getVisualMeta:function(t){function e(e,r){var o=a.getRepresentValue({interval:e});r||(r=a.getValueState(o));var s=t(o,r);e[0]===-1/0?n[0]=s:e[1]===1/0?n[1]=s:i.push({value:e[0],color:s},{value:e[1],color:s})}if(!this.isCategory()){var i=[],n=[],a=this,r=this._pieceList.slice();if(r.length){var o=r[0].interval[0];o!==-1/0&&r.unshift({interval:[-1/0,o]}),(o=r[r.length-1].interval[1])!==1/0&&r.push({interval:[o,1/0]})}else r.push({interval:[-1/0,1/0]});var s=-1/0;return du.each(r,function(t){var i=t.interval;i&&(i[0]>s&&e([s,i[0]],"outOfRange"),e(i.slice()),s=i[1])},this),{stops:i,outerColors:n}}}}),OP={splitNumber:function(){var t=this.option,e=this._pieceList,i=Math.min(t.precision,20),n=this.getExtent(),a=t.splitNumber;a=Math.max(parseInt(a,10),1),t.splitNumber=a;for(var r=(n[1]-n[0])/a;+r.toFixed(i)!==r&&i<5;)i++;t.precision=i,r=+r.toFixed(i);var o=0;t.minOpen&&e.push({index:o++,interval:[-1/0,n[0]],close:[0,0]});for(var s=n[0],l=o+a;o<l;s+=r){var u=o===a-1?n[1]:s+r;e.push({index:o++,interval:[s,u],close:[1,1]})}t.maxOpen&&e.push({index:o++,interval:[n[1],1/0],close:[0,0]}),PP(e),du.each(e,function(t){t.text=this.formatValueText(t.interval)},this)},categories:function(){var t=this.option;du.each(t.categories,function(t){this._pieceList.push({text:this.formatValueText(t,!0),value:t})},this),Ks(t,this._pieceList)},pieces:function(){var t=this.option,e=this._pieceList;du.each(t.pieces,function(t,i){du.isObject(t)||(t={value:t});var n={text:"",index:i};if(null!=t.label&&(n.text=t.label),t.hasOwnProperty("value")){var a=n.value=t.value;n.interval=[a,a],n.close=[1,1]}else{for(var r=n.interval=[],o=n.close=[0,0],s=[1,0,1],l=[-1/0,1/0],u=[],h=0;h<2;h++){for(var c=[["gte","gt","min"],["lte","lt","max"]][h],d=0;d<3&&null==r[h];d++)r[h]=t[c[d]],o[h]=s[d],u[h]=2===d;null==r[h]&&(r[h]=l[h])}u[0]&&r[1]===1/0&&(o[0]=0),u[1]&&r[0]===-1/0&&(o[1]=0),r[0]===r[1]&&o[0]&&o[1]&&(n.value=r[0])}n.visual=TM.retrieveVisuals(t),e.push(n)},this),Ks(t,e),PP(e),du.each(e,function(t){var e=t.close,i=[["<","≤"][e[1]],[">","≥"][e[0]]];t.text=t.text||this.formatValueText(null!=t.value?t.value:t.interval,!1,i)},this)}},RP=Fx.createSymbol;bP.extend({type:"visualMap.piecewise",doRender:function(){var t=this.group;t.removeAll();var e=this.visualMapModel,i=e.get("textGap"),n=e.textStyleModel,a=n.getFont(),r=n.getTextColor(),o=this._getItemAlign(),s=e.itemSize,l=this._getViewData(),u=l.endsText,h=du.retrieve(e.get("showLabel",!0),!u);u&&this._renderEndsText(t,u[0],s,h,o),du.each(l.viewPieceList,function(n){var l=n.piece,u=new Dp.Group;u.onclick=du.bind(this._onItemClick,this,l),this._enableHoverLink(u,n.indexInModelPieceList);var c=e.getRepresentValue(l);if(this._createItemSymbol(u,c,[0,0,s[0],s[1]]),h){var d=this.visualMapModel.getValueState(c);u.add(new Dp.Text({style:{x:"right"===o?-i:s[0]+i,y:s[1]/2,text:l.text,textVerticalAlign:"middle",textAlign:o,textFont:a,textFill:r,opacity:"outOfRange"===d?.5:1}}))}t.add(u)},this),u&&this._renderEndsText(t,u[1],s,h,o),ng.box(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t)},_enableHoverLink:function(t,e){function i(t){var i=this.visualMapModel;i.option.hoverLink&&this.api.dispatchAction({type:t,batch:SP.convertDataIndex(i.findTargetDataIndices(e))})}t.on("mouseover",du.bind(i,this,"highlight")).on("mouseout",du.bind(i,this,"downplay"))},_getItemAlign:function(){var t=this.visualMapModel,e=t.option;if("vertical"===e.orient)return SP.getItemAlign(t,this.api,t.itemSize);var i=e.align;return i&&"auto"!==i||(i="left"),i},_renderEndsText:function(t,e,i,n,a){if(e){var r=new Dp.Group,o=this.visualMapModel.textStyleModel;r.add(new Dp.Text({style:{x:n?"right"===a?i[0]:0:i[0]/2,y:i[1]/2,textVerticalAlign:"middle",textAlign:n?a:"center",text:e,textFont:o.getFont(),textFill:o.getTextColor()}})),t.add(r)}},_getViewData:function(){var t=this.visualMapModel,e=du.map(t.getPieceList(),function(t,e){return{piece:t,indexInModelPieceList:e}}),i=t.get("text"),n=t.get("orient"),a=t.get("inverse");return("horizontal"===n?a:!a)?e.reverse():i&&(i=i.slice().reverse()),{viewPieceList:e,endsText:i}},_createItemSymbol:function(t,e,i){t.add(RP(this.getControllerVisual(e,"symbol"),i[0],i[1],i[2],i[3],this.getControllerVisual(e,"color")))},_onItemClick:function(t){var e=this.visualMapModel,i=e.option,n=du.clone(i.selected),a=e.getSelectedMapKey(t);"single"===i.selectedMode?(n[a]=!0,du.each(n,function(t,e){n[e]=e===a})):n[a]=!n[a],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:n})}});C_.registerPreprocessor(oP);var NP=qp.addCommas,EP=qp.encodeHTML,zP=C_.extendComponentModel({type:"marker",dependencies:["series","grid","polar","geo"],init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0)},isAnimationEnabled:function(){if(Jl.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled()},mergeOption:function(t,e,i,n){var a=this.constructor,r=this.mainType+"Model";i||e.eachSeries(function(t){var i=t.get(this.mainType,!0),o=t[r];i&&i.data?(o?o.mergeOption(i,e,!0):(n&&Js(i),du.each(i.data,function(t){t instanceof Array?(Js(t[0]),Js(t[1])):Js(t)}),o=new a(i,this,e),du.extend(o,{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),o.__hostSeries=t),t[r]=o):t[r]=null},this)},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=du.isArray(i)?du.map(i,NP).join(", "):NP(i),a=e.getName(t),r=EP(this.name);return(null!=i||a)&&(r+="<br />"),a&&(r+=EP(a),null!=i&&(r+=" : ")),null!=i&&(r+=EP(n)),r},getData:function(){return this._data},setData:function(t){this._data=t}});du.mixin(zP,iv);var VP=zP,BP=(VP.extend({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}}}),Fy.isDimensionStacked),GP=du.indexOf,HP=du.curry,FP={min:HP(Qs,"min"),max:HP(Qs,"max"),average:HP(Qs,"average")},WP={dataTransform:function(t,e){var i=t.getData(),n=t.coordinateSystem;if(e&&!function(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y))}(e)&&!du.isArray(e.coord)&&n){var a=n.dimensions,r=tl(e,i,n,t);if((e=du.clone(e)).type&&FP[e.type]&&r.baseAxis&&r.valueAxis){var o=GP(a,r.baseAxis.dim),s=GP(a,r.valueAxis.dim);e.coord=FP[e.type](i,r.baseDataDim,r.valueDataDim,o,s),e.value=e.coord[s]}else{for(var l=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],u=0;u<2;u++)FP[l[u]]&&(l[u]=el(i,i.mapDimension(a[u]),l[u]));e.coord=l}}return e},getAxisInfo:tl,dataFilter:function(t,e){return!(t&&t.containData&&e.coord&&!function(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)))}(e))||t.containData(e.coord)},dimValueGetter:function(t,e,i,n){return n<2?t.coord&&t.coord[n]:t.value},numCalculate:el},UP=C_.extendComponentView({type:"marker",init:function(){this.markerGroupMap=du.createHashMap()},render:function(t,e,i){var n=this.markerGroupMap;n.each(function(t){t.__keep=!1});var a=this.type+"Model";e.eachSeries(function(t){var n=t[a];n&&this.renderSeries(t,n,e,i)},this),n.each(function(t){!t.__keep&&this.group.remove(t.group)},this)},renderSeries:function(){}});UP.extend({type:"markPoint",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markPointModel;e&&(il(e.getData(),t,i),this.markerGroupMap.get(t.id).updateLayout(e))},this)},renderSeries:function(t,e,i,n){var a=t.coordinateSystem,r=t.id,o=t.getData(),s=this.markerGroupMap,l=s.get(r)||s.set(r,new U_),u=function(t,e,i){var n;n=t?du.map(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.getData().mapDimension(t))||{};return du.defaults({name:t},i)}):[{name:"value",type:"float"}];var a=new Ty(n,i),r=du.map(i.get("data"),du.curry(WP.dataTransform,e));return t&&(r=du.filter(r,du.curry(WP.dataFilter,t))),a.initData(r,null,t?WP.dimValueGetter:function(t){return t.value}),a}(a,t,e);e.setData(u),il(e.getData(),t,n),u.each(function(t){var i=u.getItemModel(t),n=i.getShallow("symbolSize");"function"==typeof n&&(n=n(e.getRawValue(t),e.getDataParams(t))),u.setItemVisual(t,{symbolSize:n,color:i.get("itemStyle.color")||o.getVisual("color"),symbol:i.getShallow("symbol")})}),l.updateData(u),this.group.add(l.group),u.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e})}),l.__keep=!0,l.group.silent=e.get("silent")||t.get("silent")}});C_.registerPreprocessor(function(t){t.markPoint=t.markPoint||{}});VP.extend({type:"markLine",defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{show:!0,position:"end"},lineStyle:{type:"dashed"},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:"linear"}});var ZP=function(t,e,i,n){var a=t.getData(),r=n.type;if(!du.isArray(n)&&("min"===r||"max"===r||"average"===r||"median"===r||null!=n.xAxis||null!=n.yAxis)){var o,s;if(null!=n.yAxis||null!=n.xAxis)o=null!=n.yAxis?"y":"x",e.getAxis(o),s=du.retrieve(n.yAxis,n.xAxis);else{var l=WP.getAxisInfo(n,a,e,t);o=l.valueDataDim,l.valueAxis,s=WP.numCalculate(a,o,r)}var u="x"===o?0:1,h=1-u,c=du.clone(n),d={};c.type=null,c.coord=[],d.coord=[],c.coord[h]=-1/0,d.coord[h]=1/0;var f=i.get("precision");f>=0&&"number"==typeof s&&(s=+s.toFixed(Math.min(f,20))),c.coord[u]=d.coord[u]=s,n=[c,d,{type:r,valueIndex:n.valueIndex,value:s}]}return n=[WP.dataTransform(t,n[0]),WP.dataTransform(t,n[1]),du.extend({},n[2])],n[2].type=n[2].type||"",du.merge(n[2],n[0]),du.merge(n[2],n[1]),n};UP.extend({type:"markLine",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markLineModel;if(e){var n=e.getData(),a=e.__from,r=e.__to;a.each(function(e){rl(a,e,!0,t,i),rl(r,e,!1,t,i)}),n.each(function(t){n.setItemLayout(t,[a.getItemLayout(t),r.getItemLayout(t)])}),this.markerGroupMap.get(t.id).updateLayout()}},this)},renderSeries:function(t,e,i,n){function a(e,i,a){var r=e.getItemModel(i);rl(e,i,a,t,n),e.setItemVisual(i,{symbolSize:r.get("symbolSize")||g[a?0:1],symbol:r.get("symbol",!0)||p[a?0:1],color:r.get("itemStyle.color")||s.getVisual("color")})}var r=t.coordinateSystem,o=t.id,s=t.getData(),l=this.markerGroupMap,u=l.get(o)||l.set(o,new rI);this.group.add(u.group);var h=function(t,e,i){var n;n=t?du.map(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.getData().mapDimension(t))||{};return du.defaults({name:t},i)}):[{name:"value",type:"float"}];var a=new Ty(n,i),r=new Ty(n,i),o=new Ty([],i),s=du.map(i.get("data"),du.curry(ZP,e,t,i));t&&(s=du.filter(s,du.curry(function(t,e){if("cartesian2d"===t.type){var i=e[0].coord,n=e[1].coord;if(i&&n&&(al(1,i,n,t)||al(0,i,n,t)))return!0}return WP.dataFilter(t,e[0])&&WP.dataFilter(t,e[1])},t)));var l=t?WP.dimValueGetter:function(t){return t.value};return a.initData(du.map(s,function(t){return t[0]}),null,l),r.initData(du.map(s,function(t){return t[1]}),null,l),o.initData(du.map(s,function(t){return t[2]})),o.hasItemOption=!0,{from:a,to:r,line:o}}(r,t,e),c=h.from,d=h.to,f=h.line;e.__from=c,e.__to=d,e.setData(f);var p=e.get("symbol"),g=e.get("symbolSize");du.isArray(p)||(p=[p,p]),"number"==typeof g&&(g=[g,g]),h.from.each(function(t){a(c,t,!0),a(d,t,!1)}),f.each(function(t){var e=f.getItemModel(t).get("lineStyle.color");f.setItemVisual(t,{color:e||c.getItemVisual(t,"color")}),f.setItemLayout(t,[c.getItemLayout(t),d.getItemLayout(t)]),f.setItemVisual(t,{fromSymbolSize:c.getItemVisual(t,"symbolSize"),fromSymbol:c.getItemVisual(t,"symbol"),toSymbolSize:d.getItemVisual(t,"symbolSize"),toSymbol:d.getItemVisual(t,"symbol")})}),u.updateData(f),h.line.eachItemGraphicEl(function(t,i){t.traverse(function(t){t.dataModel=e})}),u.__keep=!0,u.group.silent=e.get("silent")||t.get("silent")}});C_.registerPreprocessor(function(t){t.markLine=t.markLine||{}});VP.extend({type:"markArea",defaultOption:{zlevel:0,z:1,tooltip:{trigger:"item"},animation:!1,label:{show:!0,position:"top"},itemStyle:{borderWidth:0},emphasis:{label:{show:!0,position:"top"}}}});var jP=function(t,e,i,n){var a=WP.dataTransform(t,n[0]),r=WP.dataTransform(t,n[1]),o=du.retrieve,s=a.coord,l=r.coord;s[0]=o(s[0],-1/0),s[1]=o(s[1],-1/0),l[0]=o(l[0],1/0),l[1]=o(l[1],1/0);var u=du.mergeAll([{},a,r]);return u.coord=[a.coord,r.coord],u.x0=a.x,u.y0=a.y,u.x1=r.x,u.y1=r.y,u},YP=[["x0","y0"],["x1","y0"],["x1","y1"],["x0","y1"]];UP.extend({type:"markArea",updateTransform:function(t,e,i){e.eachSeries(function(t){var e=t.markAreaModel;if(e){var n=e.getData();n.each(function(e){var a=du.map(YP,function(a){return ll(n,e,a,t,i)});n.setItemLayout(e,a);n.getItemGraphicEl(e).setShape("points",a)})}},this)},renderSeries:function(t,e,i,n){var a=t.coordinateSystem,r=t.id,o=t.getData(),s=this.markerGroupMap,l=s.get(r)||s.set(r,{group:new Dp.Group});this.group.add(l.group),l.__keep=!0;var u=function(t,e,i){var n,a;t?(n=du.map(t&&t.dimensions,function(t){var i=e.getData(),n=i.getDimensionInfo(i.mapDimension(t))||{};return du.defaults({name:t},n)}),a=new Ty(du.map(["x0","y0","x1","y1"],function(t,e){return{name:t,type:n[e%2].type}}),i)):a=new Ty(n=[{name:"value",type:"float"}],i);var r=du.map(i.get("data"),du.curry(jP,e,t,i));t&&(r=du.filter(r,du.curry(function(t,e){var i=e.coord[0],n=e.coord[1];return!("cartesian2d"!==t.type||!i||!n||!sl(1,i,n)&&!sl(0,i,n))||WP.dataFilter(t,{coord:i,x:e.x0,y:e.y0})||WP.dataFilter(t,{coord:n,x:e.x1,y:e.y1})},t)));var o=t?function(t,e,i,n){return t.coord[Math.floor(n/2)][n%2]}:function(t){return t.value};return a.initData(r,null,o),a.hasItemOption=!0,a}(a,t,e);e.setData(u),u.each(function(e){u.setItemLayout(e,du.map(YP,function(i){return ll(u,e,i,t,n)})),u.setItemVisual(e,{color:o.getVisual("color")})}),u.diff(l.__data).add(function(t){var e=new Dp.Polygon({shape:{points:u.getItemLayout(t)}});u.setItemGraphicEl(t,e),l.group.add(e)}).update(function(t,i){var n=l.__data.getItemGraphicEl(i);Dp.updateProps(n,{shape:{points:u.getItemLayout(t)}},e,t),l.group.add(n),u.setItemGraphicEl(t,n)}).remove(function(t){var e=l.__data.getItemGraphicEl(t);l.group.remove(e)}).execute(),u.eachItemGraphicEl(function(t,i){var n=u.getItemModel(i),a=n.getModel("label"),r=n.getModel("emphasis.label"),o=u.getItemVisual(i,"color");t.useStyle(du.defaults(n.getModel("itemStyle").getItemStyle(),{fill:Wu.modifyAlpha(o,.4),stroke:o})),t.hoverStyle=n.getModel("emphasis.itemStyle").getItemStyle(),Dp.setLabelStyle(t.style,t.hoverStyle,a,r,{labelFetcher:e,labelDataIndex:i,defaultText:u.getName(i)||"",isRectText:!0,autoColor:o}),Dp.setHoverStyle(t,{}),t.dataModel=e}),l.__data=u,l.group.silent=e.get("silent")||t.get("silent")}}),C_.registerPreprocessor(function(t){t.markArea=t.markArea||{}});var XP=function(t){var e=t&&t.timeline;du.isArray(e)||(e=e?[e]:[]),du.each(e,function(t){t&&function(t){var e=t.type,i={number:"value",time:"time"};if(i[e]&&(t.axisType=i[e],delete t.type),ul(t),hl(t,"controlPosition")){var n=t.controlStyle||(t.controlStyle={});hl(n,"position")||(n.position=t.controlPosition),"none"!==n.position||hl(n,"show")||(n.show=!1,delete n.position),delete t.controlPosition}du.each(t.data||[],function(t){du.isObject(t)&&!du.isArray(t)&&(!hl(t,"value")&&hl(t,"name")&&(t.value=t.name),ul(t))})}(t)})};ug.registerSubTypeDefaulter("timeline",function(){return"slider"}),C_.registerAction({type:"timelineChange",event:"timelineChanged",update:"prepareAndUpdate"},function(t,e){var i=e.getComponent("timeline");return i&&null!=t.currentIndex&&(i.setCurrentIndex(t.currentIndex),!i.get("loop",!0)&&i.isIndexMax()&&i.setPlayState(!1)),e.resetOption("timeline"),du.defaults({currentIndex:i.option.currentIndex},t)}),C_.registerAction({type:"timelinePlayChange",event:"timelinePlayChanged",update:"update"},function(t,e){var i=e.getComponent("timeline");i&&null!=t.playState&&i.setPlayState(t.playState)});var qP=ug.extend({type:"timeline",layoutMode:"box",defaultOption:{zlevel:0,z:4,show:!0,axisType:"time",realtime:!0,left:"20%",top:null,right:"20%",bottom:0,width:null,height:40,padding:5,controlPosition:"left",autoPlay:!1,rewind:!1,loop:!0,playInterval:2e3,currentIndex:0,itemStyle:{},label:{color:"#000"},data:[]},init:function(t,e,i){this._data,this._names,this.mergeDefaultAndTheme(t,i),this._initData()},mergeOption:function(t){qP.superApply(this,"mergeOption",arguments),this._initData()},setCurrentIndex:function(t){null==t&&(t=this.option.currentIndex);var e=this._data.count();this.option.loop?t=(t%e+e)%e:(t>=e&&(t=e-1),t<0&&(t=0)),this.option.currentIndex=t},getCurrentIndex:function(){return this.option.currentIndex},isIndexMax:function(){return this.getCurrentIndex()>=this._data.count()-1},setPlayState:function(t){this.option.autoPlay=!!t},getPlayState:function(){return!!this.option.autoPlay},_initData:function(){var t=this.option,e=t.data||[],i=t.axisType,n=this._names=[];if("category"===i){var a=[];du.each(e,function(t,e){var i,r=Wc.getDataItemValue(t);du.isObject(t)?(i=du.clone(t)).value=e:i=e,a.push(i),du.isString(r)||null!=r&&!isNaN(r)||(r=""),n.push(r+"")}),e=a}var r={category:"ordinal",time:"time"}[i]||"number";(this._data=new Ty([{name:"value",type:r}],this)).initData(e,n)},getData:function(){return this._data},getCategories:function(){if("category"===this.get("axisType"))return this._names.slice()}}),$P=qP.extend({type:"timeline.slider",defaultOption:{backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,orient:"horizontal",inverse:!1,tooltip:{trigger:"item"},symbol:"emptyCircle",symbolSize:10,lineStyle:{show:!0,width:2,color:"#304654"},label:{position:"auto",show:!0,interval:"auto",rotate:0,color:"#304654"},itemStyle:{color:"#304654",borderWidth:1},checkpointStyle:{symbol:"circle",symbolSize:13,color:"#c23531",borderWidth:5,borderColor:"rgba(194,53,49, 0.5)",animation:!0,animationDuration:300,animationEasing:"quinticInOut"},controlStyle:{show:!0,showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,itemSize:22,itemGap:12,position:"left",playIcon:"path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",stopIcon:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",nextIcon:"path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",prevIcon:"path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",color:"#304654",borderColor:"#304654",borderWidth:1},emphasis:{label:{show:!0,color:"#c23531"},itemStyle:{color:"#c23531"},controlStyle:{color:"#c23531",borderColor:"#c23531",borderWidth:2}},data:[]}});du.mixin($P,iv);var KP=wv.extend({type:"timeline"}),JP=function(t,e,i,n){c_.call(this,t,e,i),this.type=n||"value",this.model=null};JP.prototype={constructor:JP,getLabelModel:function(){return this.model.getModel("label")},isHorizontal:function(){return"horizontal"===this.model.get("orient")}},du.inherits(JP,c_);var QP=JP,tk=Fx.createSymbol,ek=qp.encodeHTML,ik=du.bind,nk=du.each,ak=Math.PI;KP.extend({type:"timeline.slider",init:function(t,e){this.api=e,this._axis,this._viewRect,this._timer,this._currentPointer,this._mainGroup,this._labelGroup},render:function(t,e,i,n){if(this.model=t,this.api=i,this.ecModel=e,this.group.removeAll(),t.get("show",!0)){var a=this._layout(t,i),r=this._createGroup("mainGroup"),o=this._createGroup("labelGroup"),s=this._axis=this._createAxis(a,t);t.formatTooltip=function(t){return ek(s.scale.getLabel(t))},nk(["AxisLine","AxisTick","Control","CurrentPointer"],function(e){this["_render"+e](a,r,s,t)},this),this._renderAxisLabel(a,o,s,t),this._position(a,t)}this._doPlayStop()},remove:function(){this._clearTimer(),this.group.removeAll()},dispose:function(){this._clearTimer()},_layout:function(t,e){var i=t.get("label.position"),n=t.get("orient"),a=function(t,e){return ng.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()},t.get("padding"))}(t,e);null==i||"auto"===i?i="horizontal"===n?a.y+a.height/2<e.getHeight()/2?"-":"+":a.x+a.width/2<e.getWidth()/2?"+":"-":isNaN(i)&&(i={horizontal:{top:"-",bottom:"+"},vertical:{left:"-",right:"+"}}[n][i]);var r={horizontal:"center",vertical:i>=0||"+"===i?"left":"right"},o={horizontal:i>=0||"+"===i?"top":"bottom",vertical:"middle"},s={horizontal:0,vertical:ak/2},l="vertical"===n?a.height:a.width,u=t.getModel("controlStyle"),h=u.get("show",!0),c=h?u.get("itemSize"):0,d=h?u.get("itemGap"):0,f=c+d,p=t.get("label.rotate")||0;p=p*ak/180;var g,m,v,y,x=u.get("position",!0),_=h&&u.get("showPlayBtn",!0),b=h&&u.get("showPrevBtn",!0),w=h&&u.get("showNextBtn",!0),S=0,M=l;return"left"===x||"bottom"===x?(_&&(g=[0,0],S+=f),b&&(m=[S,0],S+=f),w&&(v=[M-c,0],M-=f)):(_&&(g=[M-c,0],M-=f),b&&(m=[0,0],S+=f),w&&(v=[M-c,0],M-=f)),y=[S,M],t.get("inverse")&&y.reverse(),{viewRect:a,mainLength:l,orient:n,rotation:s[n],labelRotation:p,labelPosOpt:i,labelAlign:t.get("label.align")||r[n],labelBaseline:t.get("label.verticalAlign")||t.get("label.baseline")||o[n],playPosition:g,prevBtnPosition:m,nextBtnPosition:v,axisExtent:y,controlSize:c,controlGap:d}},_position:function(t,e){function i(t){var e=t.position;t.origin=[c[0][0]-e[0],c[1][0]-e[1]]}function n(t){return[[t.x,t.x+t.width],[t.y,t.y+t.height]]}function a(t,e,i,n,a){t[n]+=i[n][a]-e[n][a]}var r=this._mainGroup,o=this._labelGroup,s=t.viewRect;if("vertical"===t.orient){var l=Mu.create(),u=s.x,h=s.y+s.height;Mu.translate(l,l,[-u,-h]),Mu.rotate(l,l,-ak/2),Mu.translate(l,l,[u,h]),(s=s.clone()).applyTransform(l)}var c=n(s),d=n(r.getBoundingRect()),f=n(o.getBoundingRect()),p=r.position,g=o.position;g[0]=p[0]=c[0][0];var m=t.labelPosOpt;if(isNaN(m)){a(p,d,c,1,v="+"===m?0:1),a(g,f,c,1,1-v)}else{var v=m>=0?0:1;a(p,d,c,1,v),g[1]=p[1]+m}r.attr("position",p),o.attr("position",g),r.rotation=o.rotation=t.rotation,i(r),i(o)},_createAxis:function(t,e){var i=e.getData(),n=e.get("axisType"),a=kx.createScaleByModel(e,n);a.getTicks=function(){return i.mapArray(["value"],function(t){return t})};var r=i.getDataExtent("value");a.setExtent(r[0],r[1]),a.niceTicks();var o=new QP("value",a,t.axisExtent,n);return o.model=e,o},_createGroup:function(t){var e=this["_"+t]=new Dp.Group;return this.group.add(e),e},_renderAxisLine:function(t,e,i,n){var a=i.getExtent();n.get("lineStyle.show")&&e.add(new Dp.Line({shape:{x1:a[0],y1:0,x2:a[1],y2:0},style:du.extend({lineCap:"round"},n.getModel("lineStyle").getLineStyle()),silent:!0,z2:1}))},_renderAxisTick:function(t,e,i,n){var a=n.getData(),r=i.scale.getTicks();nk(r,function(t){var r=i.dataToCoord(t),o=a.getItemModel(t),s=o.getModel("itemStyle"),l=o.getModel("emphasis.itemStyle"),u={position:[r,0],onclick:ik(this._changeTimeline,this,t)},h=cl(o,s,e,u);Dp.setHoverStyle(h,l.getItemStyle()),o.get("tooltip")?(h.dataIndex=t,h.dataModel=n):h.dataIndex=h.dataModel=null},this)},_renderAxisLabel:function(t,e,i,n){if(i.getLabelModel().get("show")){var a=n.getData(),r=i.getViewLabels();nk(r,function(n){var r=n.tickValue,o=a.getItemModel(r),s=o.getModel("label"),l=o.getModel("emphasis.label"),u=i.dataToCoord(n.tickValue),h=new Dp.Text({position:[u,0],rotation:t.labelRotation-t.rotation,onclick:ik(this._changeTimeline,this,r),silent:!1});Dp.setTextStyle(h.style,s,{text:n.formattedLabel,textAlign:t.labelAlign,textVerticalAlign:t.labelBaseline}),e.add(h),Dp.setHoverStyle(h,Dp.setTextStyle({},l))},this)}},_renderControl:function(t,e,i,n){function a(t,i,a,h){if(t){var c=function(t,e,i,n){return Dp.makePath(t.get(e).replace(/^path:\/\//,""),du.clone(n||{}),new ch(i[0],i[1],i[2],i[3]),"center")}(n,i,u,{position:t,origin:[r/2,0],rotation:h?-o:0,rectHover:!0,style:s,onclick:a});e.add(c),Dp.setHoverStyle(c,l)}}var r=t.controlSize,o=t.rotation,s=n.getModel("controlStyle").getItemStyle(),l=n.getModel("emphasis.controlStyle").getItemStyle(),u=[0,-r/2,r,r],h=n.getPlayState(),c=n.get("inverse",!0);a(t.nextBtnPosition,"controlStyle.nextIcon",ik(this._changeTimeline,this,c?"-":"+")),a(t.prevBtnPosition,"controlStyle.prevIcon",ik(this._changeTimeline,this,c?"+":"-")),a(t.playPosition,"controlStyle."+(h?"stopIcon":"playIcon"),ik(this._handlePlayClick,this,!h),!0)},_renderCurrentPointer:function(t,e,i,n){var a=n.getData(),r=n.getCurrentIndex(),o=a.getItemModel(r).getModel("checkpointStyle"),s=this,l={onCreate:function(t){t.draggable=!0,t.drift=ik(s._handlePointerDrag,s),t.ondragend=ik(s._handlePointerDragend,s),dl(t,r,i,n,!0)},onUpdate:function(t){dl(t,r,i,n)}};this._currentPointer=cl(o,o,this._mainGroup,{},this._currentPointer,l)},_handlePlayClick:function(t){this._clearTimer(),this.api.dispatchAction({type:"timelinePlayChange",playState:t,from:this.uid})},_handlePointerDrag:function(t,e,i){this._clearTimer(),this._pointerChangeTimeline([i.offsetX,i.offsetY])},_handlePointerDragend:function(t){this._pointerChangeTimeline([t.offsetX,t.offsetY],!0)},_pointerChangeTimeline:function(t,e){var i=this._toAxisCoord(t)[0],n=this._axis,a=Up.asc(n.getExtent().slice());i>a[1]&&(i=a[1]),i<a[0]&&(i=a[0]),this._currentPointer.position[0]=i,this._currentPointer.dirty();var r=this._findNearestTick(i),o=this.model;(e||r!==o.getCurrentIndex()&&o.get("realtime"))&&this._changeTimeline(r)},_doPlayStop:function(){this._clearTimer(),this.model.getPlayState()&&(this._timer=setTimeout(ik(function(){var t=this.model;this._changeTimeline(t.getCurrentIndex()+(t.get("rewind",!0)?-1:1))},this),this.model.get("playInterval")))},_toAxisCoord:function(t){var e=this._mainGroup.getLocalTransform();return Dp.applyTransform(t,e,!0)},_findNearestTick:function(t){var e,i=this.model.getData(),n=1/0,a=this._axis;return i.each(["value"],function(i,r){var o=a.dataToCoord(i),s=Math.abs(o-t);s<n&&(n=s,e=r)}),e},_clearTimer:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_changeTimeline:function(t){var e=this.model.getCurrentIndex();"+"===t?t=e+1:"-"===t&&(t=e-1),this.api.dispatchAction({type:"timelineChange",currentIndex:t,from:this.uid})}});C_.registerPreprocessor(XP);var rk=C_.extendComponentModel({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},optionUpdated:function(){rk.superApply(this,"optionUpdated",arguments),du.each(this.option.feature,function(t,e){var i=wL.get(e);i&&du.merge(t,i.defaultOption)})},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{borderColor:"#666",color:"none"},emphasis:{iconStyle:{borderColor:"#3E98C5"}}}}),ok=(C_.extendComponentView({type:"toolbox",render:function(t,e,i,n){function a(a,h){var c,d=u[a],f=u[h],p=s[d],g=new Vp(p,t,t.ecModel);if(d&&!f){if(function(t){return 0===t.indexOf("my")}(d))c={model:g,onclick:g.option.onclick,featureName:d};else{var m=wL.get(d);if(!m)return;c=new m(g,e,i)}l[d]=c}else{if(!(c=l[f]))return;c.model=g,c.ecModel=e,c.api=i}d||!f?g.get("show")&&!c.unusable?(!function(n,a,s){var l=n.getModel("iconStyle"),u=n.getModel("emphasis.iconStyle"),h=a.getIcons?a.getIcons():n.get("icon"),c=n.get("title")||{};if("string"==typeof h){var d=h,f=c;c={},(h={})[s]=d,c[s]=f}var p=n.iconPaths={};du.each(h,function(s,h){var d=Dp.createIcon(s,{},{x:-o/2,y:-o/2,width:o,height:o});d.setStyle(l.getItemStyle()),d.hoverStyle=u.getItemStyle(),Dp.setHoverStyle(d),t.get("showTitle")&&(d.__title=c[h],d.on("mouseover",function(){var t=u.getItemStyle();d.setStyle({text:c[h],textPosition:t.textPosition||"bottom",textFill:t.fill||t.stroke||"#000",textAlign:t.textAlign||"center"})}).on("mouseout",function(){d.setStyle({textFill:null})})),d.trigger(n.get("iconStatus."+h)||"normal"),r.add(d),d.on("click",du.bind(a.onclick,a,e,i,h)),p[h]=d})}(g,c,d),g.setIconStatus=function(t,e){var i=this.option,n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t].trigger(e)},c.render&&c.render(g,e,i,n)):c.remove&&c.remove(e,i):c.dispose&&c.dispose(e,i)}var r=this.group;if(r.removeAll(),t.get("show")){var o=+t.get("itemSize"),s=t.get("feature")||{},l=this._features||(this._features={}),u=[];du.each(s,function(t,e){u.push(e)}),new hy(this._featureNames||[],u).add(a).update(a).remove(du.curry(a,null)).execute(),this._featureNames=u,uC.layout(r,t,i),r.add(uC.makeBackground(r.getBoundingRect(),t)),r.eachChild(function(t){var e=t.__title,n=t.hoverStyle;if(n&&e){var a=jh.getBoundingRect(e,jh.makeFont(n)),s=t.position[0]+r.position[0],l=!1;t.position[1]+r.position[1]+o+a.height>i.getHeight()&&(n.textPosition="top",l=!0);var u=l?-5-a.height:o+8;s+a.width/2>i.getWidth()?(n.textPosition=["100%",u],n.textAlign="right"):s-a.width/2<0&&(n.textPosition=[0,u],n.textAlign="left")}})}},updateView:function(t,e,i,n){du.each(this._features,function(t){t.updateView&&t.updateView(t.model,e,i,n)})},remove:function(t,e){du.each(this._features,function(i){i.remove&&i.remove(t,e)}),this.group.removeAll()},dispose:function(t,e){du.each(this._features,function(i){i.dispose&&i.dispose(t,e)})}}),zv.toolbox.saveAsImage);fl.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:ok.title,type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:ok.lang.slice()},fl.prototype.unusable=!Jl.canvasSupported;fl.prototype.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",a=document.createElement("a"),r=i.get("type",!0)||"png";a.download=n+"."+r,a.target="_blank";var o=e.getConnectedDataURL({type:r,backgroundColor:i.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(a.href=o,"function"!=typeof MouseEvent||Jl.browser.ie||Jl.browser.edge)if(window.navigator.msSaveOrOpenBlob){for(var s=atob(o.split(",")[1]),l=s.length,u=new Uint8Array(l);l--;)u[l]=s.charCodeAt(l);var h=new Blob([u]);window.navigator.msSaveOrOpenBlob(h,n+"."+r)}else{var c=i.get("lang"),d='<body style="margin:0;"><img src="'+o+'" style="max-width:100%;" title="'+(c&&c[0]||"")+'" /></body>';window.open().document.write(d)}else{var f=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});a.dispatchEvent(f)}},wL.register("saveAsImage",fl);var sk=zv.toolbox.magicType;pl.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:du.clone(sk.title),option:{},seriesIndex:{}};var lk=pl.prototype;lk.getIcons=function(){var t=this.model,e=t.get("icon"),i={};return du.each(t.get("type"),function(t){e[t]&&(i[t]=e[t])}),i};var uk={line:function(t,e,i,n){if("bar"===t)return du.merge({id:e,type:"line",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},n.get("option.line")||{},!0)},bar:function(t,e,i,n){if("line"===t)return du.merge({id:e,type:"bar",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},n.get("option.bar")||{},!0)},stack:function(t,e,i,n){if("line"===t||"bar"===t)return du.merge({id:e,stack:"__ec_magicType_stack__"},n.get("option.stack")||{},!0)},tiled:function(t,e,i,n){if("line"===t||"bar"===t)return du.merge({id:e,stack:""},n.get("option.tiled")||{},!0)}},hk=[["line","bar"],["stack","tiled"]];lk.onclick=function(t,e,i){var n=this.model,a=n.get("seriesIndex."+i);if(uk[i]){var r={series:[]};du.each(hk,function(t){du.indexOf(t,i)>=0&&du.each(t,function(t){n.setIconStatus(t,"normal")})}),n.setIconStatus(i,"emphasis"),t.eachComponent({mainType:"series",query:null==a?null:{seriesIndex:a}},function(e){var a=e.subType,o=e.id,s=uk[i](a,o,e,n);s&&(du.defaults(s,e.option),r.series.push(s));var l=e.coordinateSystem;if(l&&"cartesian2d"===l.type&&("line"===i||"bar"===i)){var u=l.getAxesByScale("ordinal")[0];if(u){var h=u.dim+"Axis",c=t.queryComponents({mainType:h,index:e.get(name+"Index"),id:e.get(name+"Id")})[0].componentIndex;r[h]=r[h]||[];for(var d=0;d<=c;d++)r[h][c]=r[h][c]||{};r[h][c].boundaryGap="bar"===i}}}),e.dispatchAction({type:"changeMagicType",currentType:i,newOption:r})}},C_.registerAction({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption)}),wL.register("magicType",pl);var ck=zv.toolbox.dataView,dk=new Array(60).join("-"),fk="\t",pk=new RegExp("["+fk+"]+","g");ml.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:du.clone(ck.title),lang:du.clone(ck.lang),backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},ml.prototype.onclick=function(t,e){function i(){n.removeChild(r),x._dom=null}var n=e.getDom(),a=this.model;this._dom&&n.removeChild(this._dom);var r=document.createElement("div");r.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",r.style.backgroundColor=a.get("backgroundColor")||"#fff";var o=document.createElement("h4"),s=a.get("lang")||[];o.innerHTML=s[0]||a.get("title"),o.style.cssText="margin: 10px 20px;",o.style.color=a.get("textColor");var l=document.createElement("div"),u=document.createElement("textarea");l.style.cssText="display:block;width:100%;overflow:auto;";var h=a.get("optionToContent"),c=a.get("contentToOption"),d=function(t){var e=function(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var a=t.coordinateSystem;if(!a||"cartesian2d"!==a.type&&"polar"!==a.type)i.push(t);else{var r=a.getBaseAxis();if("category"===r.type){var o=r.dim+"_"+r.index;e[o]||(e[o]={categoryAxis:r,valueAxis:a.getOtherAxis(r),series:[]},n.push({axisDim:r.dim,axisIndex:r.index})),e[o].series.push(t)}else i.push(t)}}),{seriesGroupByCategoryAxis:e,other:i,meta:n}}(t);return{value:du.filter([function(t){var e=[];return du.each(t,function(t,i){var n=t.categoryAxis,a=t.valueAxis.dim,r=[" "].concat(du.map(t.series,function(t){return t.name})),o=[n.model.getCategories()];du.each(t.series,function(t){o.push(t.getRawData().mapArray(a,function(t){return t}))});for(var s=[r.join(fk)],l=0;l<o[0].length;l++){for(var u=[],h=0;h<o.length;h++)u.push(o[h][l]);s.push(u.join(fk))}e.push(s.join("\n"))}),e.join("\n\n"+dk+"\n\n")}(e.seriesGroupByCategoryAxis),function(t){return du.map(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e.dimensions,function(){for(var t=arguments,a=arguments.length,r=arguments[a-1],o=e.getName(r),s=0;s<a-1;s++)n[s]=t[s];i.push((o?o+fk:"")+n.join(fk))}),i.join("\n")}).join("\n\n"+dk+"\n\n")}(e.other)],function(t){return t.replace(/[\n\t\s]/g,"")}).join("\n\n"+dk+"\n\n"),meta:e.meta}}(t);if("function"==typeof h){var f=h(e.getOption());"string"==typeof f?l.innerHTML=f:du.isDom(f)&&l.appendChild(f)}else l.appendChild(u),u.readOnly=a.get("readOnly"),u.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",u.style.color=a.get("textColor"),u.style.borderColor=a.get("textareaBorderColor"),u.style.backgroundColor=a.get("textareaColor"),u.value=d.value;var p=d.meta,g=document.createElement("div");g.style.cssText="position:absolute;bottom:0;left:0;right:0;";var m="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",v=document.createElement("div"),y=document.createElement("div");m+=";background-color:"+a.get("buttonColor"),m+=";color:"+a.get("buttonTextColor");var x=this;mc.addEventListener(v,"click",i),mc.addEventListener(y,"click",function(){var t;try{t="function"==typeof c?c(l,e.getOption()):function(t,e){var i=t.split(new RegExp("\n*"+dk+"\n*","g")),n={series:[]};return du.each(i,function(t,i){if(function(t){if(t.slice(0,t.indexOf("\n")).indexOf(fk)>=0)return!0}(t)){var a=function(e){for(var i=t.split(/\n+/g),n=gl(i.shift()).split(pk),a=[],r=du.map(n,function(t){return{name:t,data:[]}}),o=0;o<i.length;o++){var s=gl(i[o]).split(pk);a.push(s.shift());for(var l=0;l<s.length;l++)r[l]&&(r[l].data[o]=s[l])}return{series:r,categories:a}}(),r=e[i],o=r.axisDim+"Axis";r&&(n[o]=n[o]||[],n[o][r.axisIndex]={data:a.categories},n.series=n.series.concat(a.series))}else a=function(e){for(var i=t.split(/\n+/g),n=gl(i.shift()),a=[],r=0;r<i.length;r++){var o,s=gl(i[r]).split(pk),l="",u=!1;isNaN(s[0])?(u=!0,l=s[0],s=s.slice(1),a[r]={name:l,value:[]},o=a[r].value):o=a[r]=[];for(var h=0;h<s.length;h++)o.push(+s[h]);1===o.length&&(u?a[r].value=o[0]:a[r]=o[0])}return{name:n,data:a}}(),n.series.push(a)}),n}(u.value,p)}catch(t){throw i(),new Error("Data view format error "+t)}t&&e.dispatchAction({type:"changeDataView",newOption:t}),i()}),v.innerHTML=s[1],y.innerHTML=s[2],y.style.cssText=m,v.style.cssText=m,!a.get("readOnly")&&g.appendChild(y),g.appendChild(v),mc.addEventListener(u,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+fk+e.substring(n),this.selectionStart=this.selectionEnd=i+1,mc.stop(t)}}),r.appendChild(o),r.appendChild(l),r.appendChild(g),l.style.height=n.clientHeight-80+"px",n.appendChild(r),this._dom=r},ml.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom)},ml.prototype.dispose=function(t,e){this.remove(t,e)},wL.register("dataView",ml),C_.registerAction({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];du.each(t.newOption.series,function(t){var n=e.getSeriesByName(t.name)[0];if(n){var a=n.get("data");i.push({name:t.name,data:function(t,e){return du.map(t,function(t,i){var n=e&&e[i];return du.isObject(n)&&!du.isArray(n)?(du.isObject(t)&&!du.isArray(t)&&(t=t.value),du.defaults({value:t},n)):t})}(t.data,a)})}else i.push(du.extend({type:"scatter"},t))}),e.mergeOption(du.defaults({series:i},t.newOption))});var gk=du.each,mk="\0_ec_hist_store",vk={push:function(t,e){var i=vl(t);gk(e,function(e,n){for(var a=i.length-1;a>=0&&!i[a][n];a--);if(a<0){var r=t.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(r){var o=r.getPercentRange();i[0][n]={dataZoomId:n,start:o[0],end:o[1]}}}}),i.push(e)},pop:function(t){var e=vl(t),i=e[e.length-1];e.length>1&&e.pop();var n={};return gk(i,function(t,i){for(var a=e.length-1;a>=0;a--)if(t=e[a][i]){n[i]=t;break}}),n},clear:function(t){t[mk]=null},count:function(t){return vl(t).length}},yk=(GL.extend({type:"dataZoom.select"}),HL.extend({type:"dataZoom.select"}),zv.toolbox.dataZoom),xk=du.each,_k="\0_ec_\0toolbox-dataZoom_";yl.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:du.clone(yk.title)};var bk=yl.prototype;bk.render=function(t,e,i,n){this.model=t,this.ecModel=e,this.api=i,function(t,e,i,n,a){var r=i._isZoomActive;n&&"takeGlobalCursor"===n.type&&(r="dataZoomSelect"===n.key&&n.dataZoomSelectActive),i._isZoomActive=r,t.setIconStatus("zoom",r?"emphasis":"normal");var o=new pL(xl(t.option),e,{include:["grid"]});i._brushController.setPanels(o.makePanelOpts(a,function(t){return t.xAxisDeclared&&!t.yAxisDeclared?"lineX":!t.xAxisDeclared&&t.yAxisDeclared?"lineY":"rect"})).enableBrush(!!r&&{brushType:"auto",brushStyle:{lineWidth:0,fill:"rgba(0,0,0,0.2)"}})}(t,e,this,n,i),function(t,e){t.setIconStatus("back",vk.count(e)>1?"emphasis":"normal")}(t,e)},bk.onclick=function(t,e,i){wk[i].call(this)},bk.remove=function(t,e){this._brushController.unmount()},bk.dispose=function(t,e){this._brushController.dispose()};var wk={zoom:function(){var t=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:t})},back:function(){this._dispatchZoomAction(vk.pop(this.ecModel))}};bk._onBrush=function(t,e){function i(t,e,i){var r=e.getAxis(t),o=r.model,s=function(t,e,i){var n;return i.eachComponent({mainType:"dataZoom",subType:"select"},function(i){i.getAxisModel(t,e.componentIndex)&&(n=i)}),n}(t,o,a),l=s.findRepresentativeAxisProxy(o).getMinMaxSpan();null==l.minValueSpan&&null==l.maxValueSpan||(i=KI(0,i.slice(),r.scale.getExtent(),0,l.minValueSpan,l.maxValueSpan)),s&&(n[s.id]={dataZoomId:s.id,startValue:i[0],endValue:i[1]})}if(e.isEnd&&t.length){var n={},a=this.ecModel;this._brushController.updateCovers([]);new pL(xl(this.model.option),a,{include:["grid"]}).matchOutputRanges(t,a,function(t,e,n){if("cartesian2d"===n.type){var a=t.brushType;"rect"===a?(i("x",n,e[0]),i("y",n,e[1])):i({lineX:"x",lineY:"y"}[a],n,e)}}),vk.push(a,n),this._dispatchZoomAction(n)}},bk._dispatchZoomAction=function(t){var e=[];xk(t,function(t,i){e.push(du.clone(t))}),e.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:e})},wL.register("dataZoom",yl),C_.registerPreprocessor(function(t){function e(e,n){if(n){var a=e+"Index",r=n[a];null==r||"all"==r||du.isArray(r)||(r=!1===r||"none"===r?[]:[r]),function(e,i){var n=t[e];du.isArray(n)||(n=n?[n]:[]);xk(n,i)}(e,function(t,n){if(null==r||"all"==r||-1!==du.indexOf(r,n)){var o={type:"select",$fromToolbox:!0,id:_k+e+n};o[a]=n,i.push(o)}})}}if(t){var i=t.dataZoom||(t.dataZoom=[]);du.isArray(i)||(t.dataZoom=i=[i]);var n=t.toolbox;if(n&&(du.isArray(n)&&(n=n[0]),n&&n.feature)){var a=n.feature.dataZoom;e("xAxis",a),e("yAxis",a)}}});var Sk=zv.toolbox.restore;_l.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:Sk.title};_l.prototype.onclick=function(t,e,i){vk.clear(t),e.dispatchAction({type:"restore",from:this.uid})},wL.register("restore",_l),C_.registerAction({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate")});var Mk,Ik="urn:schemas-microsoft-com:vml",Ak="undefined"==typeof window?null:window,Tk=!1,Dk=Ak&&Ak.document;if(Dk&&!Jl.canvasSupported)try{!Dk.namespaces.zrvml&&Dk.namespaces.add("zrvml",Ik),Mk=function(t){return Dk.createElement("<zrvml:"+t+' class="zrvml">')}}catch(t){Mk=function(t){return Dk.createElement("<"+t+' xmlns="'+Ik+'" class="zrvml">')}}var Ck={doc:Dk,createNode:function(t){return Mk(t)},initVML:function(){if(!Tk&&Dk){Tk=!0;var t=Dk.styleSheets;t.length<31?Dk.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}}},Lk=pu.applyTransform,Pk=Ed.CMD,kk=Math.round,Ok=Math.sqrt,Rk=Math.abs,Nk=Math.cos,Ek=Math.sin,zk=Math.max;if(!Jl.canvasSupported){var Vk=21600,Bk=Vk/2,Gk=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=Vk+","+Vk,t.coordorigin="0,0"},Hk=function(t,e,i){return"rgb("+[t,e,i].join(",")+")"},Fk=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},Wk=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},Uk=function(t,e,i){return 1e5*(parseFloat(t)||0)+1e3*(parseFloat(e)||0)+i},Zk=function(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},jk=function(t,e,i){var n=Wu.parse(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=Hk(n[0],n[1],n[2]),t.opacity=i*n[3])},Yk=function(t,e,i,n){var a="fill"==e,r=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(a||!a&&i.lineWidth)?(t[a?"filled":"stroked"]="true",i[e]instanceof Qf&&Wk(t,r),r||(r=Ck.createNode(e)),a?function(t,e,i){var n=e.fill;if(null!=n)if(n instanceof Qf){var a,r=0,o=[0,0],s=0,l=1,u=i.getBoundingRect(),h=u.width,c=u.height;if("linear"===n.type){a="gradient";var d=i.transform,f=[n.x*h,n.y*c],p=[n.x2*h,n.y2*c];d&&(Lk(f,f,d),Lk(p,p,d));var g=p[0]-f[0],m=p[1]-f[1];(r=180*Math.atan2(g,m)/Math.PI)<0&&(r+=360),r<1e-6&&(r=0)}else{a="gradientradial";var f=[n.x*h,n.y*c],d=i.transform,v=i.scale,y=h,x=c;o=[(f[0]-u.x)/y,(f[1]-u.y)/x],d&&Lk(f,f,d),y/=v[0]*Vk,x/=v[1]*Vk;var _=zk(y,x);s=0/_,l=2*n.r/_-s}var b=n.colorStops.slice();b.sort(function(t,e){return t.offset-e.offset});for(var w=b.length,S=[],M=[],I=0;I<w;I++){var A=b[I],T=function(t){var e=Wu.parse(t);return[Hk(e[0],e[1],e[2]),e[3]]}(A.color);M.push(A.offset*l+s+" "+T[0]),0!==I&&I!==w-1||S.push(T)}if(w>=2){var D=S[0][0],C=S[1][0],L=S[0][1]*e.opacity,P=S[1][1]*e.opacity;t.type=a,t.method="none",t.focus="100%",t.angle=r,t.color=D,t.color2=C,t.colors=M.join(","),t.opacity=P,t.opacity2=L}"radial"===a&&(t.focusposition=o.join(","))}else jk(t,n,e.opacity)}(r,i,n):function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof Qf||jk(t,e.stroke,e.opacity)}(r,i),Fk(t,r)):(t[a?"filled":"stroked"]="false",Wk(t,r))},Xk=[[],[],[]];af.prototype.brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=Ck.createNode("shape"),Gk(i),this._vmlEl=i),Yk(i,"fill",e,this),Yk(i,"stroke",e,this);var n=this.transform,a=null!=n,r=i.getElementsByTagName("stroke")[0];if(r){var o=e.lineWidth;if(a&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];o*=Ok(Rk(s))}r.weight=o+"px"}var l=this.path||(this.path=new Ed);this.__dirtyPath&&(l.beginPath(),this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),i.path=function(t,e){var i,n,a,r,o,s,l=Pk.M,u=Pk.C,h=Pk.L,c=Pk.A,d=Pk.Q,f=[],p=t.data,g=t.len();for(r=0;r<g;){switch(a=p[r++],n="",i=0,a){case l:n=" m ",i=1,o=p[r++],s=p[r++],Xk[0][0]=o,Xk[0][1]=s;break;case h:n=" l ",i=1,o=p[r++],s=p[r++],Xk[0][0]=o,Xk[0][1]=s;break;case d:case u:n=" c ",i=3;var m,v,y=p[r++],x=p[r++],_=p[r++],b=p[r++];a===d?(m=_,v=b,_=(_+2*y)/3,b=(b+2*x)/3,y=(o+2*y)/3,x=(s+2*x)/3):(m=p[r++],v=p[r++]),Xk[0][0]=y,Xk[0][1]=x,Xk[1][0]=_,Xk[1][1]=b,Xk[2][0]=m,Xk[2][1]=v,o=m,s=v;break;case c:var w=0,S=0,M=1,I=1,A=0;e&&(w=e[4],S=e[5],M=Ok(e[0]*e[0]+e[1]*e[1]),I=Ok(e[2]*e[2]+e[3]*e[3]),A=Math.atan2(-e[1]/I,e[0]/M));var T=p[r++],D=p[r++],C=p[r++],L=p[r++],P=p[r++]+A,k=p[r++]+P+A;r++;var O=p[r++],R=T+Nk(P)*C,N=D+Ek(P)*L,y=T+Nk(k)*C,x=D+Ek(k)*L,E=O?" wa ":" at ";Math.abs(R-y)<1e-4&&(Math.abs(k-P)>.01?O&&(R+=.0125):Math.abs(N-D)<1e-4?O&&R<T||!O&&R>T?x-=.0125:x+=.0125:O&&N<D||!O&&N>D?y+=.0125:y-=.0125),f.push(E,kk(((T-C)*M+w)*Vk-Bk),",",kk(((D-L)*I+S)*Vk-Bk),",",kk(((T+C)*M+w)*Vk-Bk),",",kk(((D+L)*I+S)*Vk-Bk),",",kk((R*M+w)*Vk-Bk),",",kk((N*I+S)*Vk-Bk),",",kk((y*M+w)*Vk-Bk),",",kk((x*I+S)*Vk-Bk)),o=y,s=x;break;case Pk.R:var z=Xk[0],V=Xk[1];z[0]=p[r++],z[1]=p[r++],V[0]=z[0]+p[r++],V[1]=z[1]+p[r++],e&&(Lk(z,z,e),Lk(V,V,e)),z[0]=kk(z[0]*Vk-Bk),V[0]=kk(V[0]*Vk-Bk),z[1]=kk(z[1]*Vk-Bk),V[1]=kk(V[1]*Vk-Bk),f.push(" m ",z[0],",",z[1]," l ",V[0],",",z[1]," l ",V[0],",",V[1]," l ",z[0],",",V[1]);break;case Pk.Z:f.push(" x ")}if(i>0){f.push(n);for(var B=0;B<i;B++){var G=Xk[B];e&&Lk(G,G,e),f.push(kk(G[0]*Vk-Bk),",",kk(G[1]*Vk-Bk),B<i-1?",":"")}}}return f.join("")}(l,this.transform),i.style.zIndex=Uk(this.zlevel,this.z,this.z2),Fk(t,i),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t)},af.prototype.onRemove=function(t){Wk(t,this._vmlEl),this.removeRectText(t)},af.prototype.onAdd=function(t){Fk(t,this._vmlEl),this.appendRectText(t)};sc.prototype.brushVML=function(t){var e,i,n=this.style,a=n.image;if(function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()}(a)){var r=a.src;if(r===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var o=a.runtimeStyle,s=o.width,l=o.height;o.width="auto",o.height="auto",e=a.width,i=a.height,o.width=s,o.height=l,this._imageSrc=r,this._imageWidth=e,this._imageHeight=i}a=r}else a===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(a){var u=n.x||0,h=n.y||0,c=n.width,d=n.height,f=n.sWidth,p=n.sHeight,g=n.sx||0,m=n.sy||0,v=f&&p,y=this._vmlEl;y||(y=Ck.doc.createElement("div"),Gk(y),this._vmlEl=y);var x,_=y.style,b=!1,w=1,S=1;if(this.transform&&(x=this.transform,w=Ok(x[0]*x[0]+x[1]*x[1]),S=Ok(x[2]*x[2]+x[3]*x[3]),b=x[1]||x[2]),b){var M=[u,h],I=[u+c,h],A=[u,h+d],T=[u+c,h+d];Lk(M,M,x),Lk(I,I,x),Lk(A,A,x),Lk(T,T,x);var D=zk(M[0],I[0],A[0],T[0]),C=zk(M[1],I[1],A[1],T[1]),L=[];L.push("M11=",x[0]/w,",","M12=",x[2]/S,",","M21=",x[1]/w,",","M22=",x[3]/S,",","Dx=",kk(u*w+x[4]),",","Dy=",kk(h*S+x[5])),_.padding="0 "+kk(D)+"px "+kk(C)+"px 0",_.filter="progid:DXImageTransform.Microsoft.Matrix("+L.join("")+", SizingMethod=clip)"}else x&&(u=u*w+x[4],h=h*S+x[5]),_.filter="",_.left=kk(u)+"px",_.top=kk(h)+"px";var P=this._imageEl,k=this._cropEl;P||(P=Ck.doc.createElement("div"),this._imageEl=P);var O=P.style;if(v){if(e&&i)O.width=kk(w*e*c/f)+"px",O.height=kk(S*i*d/p)+"px";else{var R=new Image,N=this;R.onload=function(){R.onload=null,e=R.width,i=R.height,O.width=kk(w*e*c/f)+"px",O.height=kk(S*i*d/p)+"px",N._imageWidth=e,N._imageHeight=i,N._imageSrc=a},R.src=a}k||((k=Ck.doc.createElement("div")).style.overflow="hidden",this._cropEl=k);var E=k.style;E.width=kk((c+g*c/f)*w),E.height=kk((d+m*d/p)*S),E.filter="progid:DXImageTransform.Microsoft.Matrix(Dx="+-g*c/f*w+",Dy="+-m*d/p*S+")",k.parentNode||y.appendChild(k),P.parentNode!=k&&k.appendChild(P)}else O.width=kk(w*c)+"px",O.height=kk(S*d)+"px",y.appendChild(P),k&&k.parentNode&&(y.removeChild(k),this._cropEl=null);var z="",V=n.opacity;V<1&&(z+=".Alpha(opacity="+kk(100*V)+") "),z+="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+a+", SizingMethod=scale)",O.filter=z,y.style.zIndex=Uk(this.zlevel,this.z,this.z2),Fk(t,y),null!=n.text&&this.drawRectText(t,this.getBoundingRect())}},sc.prototype.onRemove=function(t){Wk(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},sc.prototype.onAdd=function(t){Fk(t,this._vmlEl),this.appendRectText(t)};var qk,$k={},Kk=0,Jk=document.createElement("div");jh.$override("measureText",function(t,e){var i=Ck.doc;qk||((qk=i.createElement("div")).style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",Ck.doc.body.appendChild(qk));try{qk.style.font=e}catch(t){}return qk.innerHTML="",qk.appendChild(i.createTextNode(t)),{width:qk.offsetWidth}});for(var Qk=new ch,tO=[rc,oc,sc,af,bf],eO=0;eO<tO.length;eO++){var iO=tO[eO].prototype;iO.drawRectText=function(t,e,i,n){var a=this.style;this.__dirty&&ic.normalizeTextStyle(a,!0);var r=a.text;if(null!=r&&(r+=""),r){if(a.rich){var o=jh.parseRichText(r,a);r=[];for(var s=0;s<o.lines.length;s++){for(var l=o.lines[s].tokens,u=[],h=0;h<l.length;h++)u.push(l[h].text);r.push(u.join(""))}r=r.join("\n")}var c,d,f=a.textAlign,p=a.textVerticalAlign,g=function(t){var e=$k[t];if(!e){Kk>100&&(Kk=0,$k={});var i,n=Jk.style;try{n.font=t,i=n.fontFamily.split(",")[0]}catch(t){}e={style:n.fontStyle||"normal",variant:n.fontVariant||"normal",weight:n.fontWeight||"normal",size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},$k[t]=e,Kk++}return e}(a.font),m=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';i=i||jh.getBoundingRect(r,m,f,p);var v=this.transform;if(v&&!n&&(Qk.copy(e),Qk.applyTransform(v),e=Qk),n)c=e.x,d=e.y;else{var y=a.textPosition,x=a.textDistance;if(y instanceof Array)c=e.x+Zk(y[0],e.width),d=e.y+Zk(y[1],e.height),f=f||"left";else{var _=jh.adjustTextPositionOnRect(y,e,x);c=_.x,d=_.y,f=f||_.textAlign,p=p||_.textVerticalAlign}}c=jh.adjustTextX(c,i.width,f),d=jh.adjustTextY(d,i.height,p),d+=i.height/2;var b,w,S,M=Ck.createNode,I=this._textVmlEl;I?w=(b=(S=I.firstChild).nextSibling).nextSibling:(I=M("line"),b=M("path"),w=M("textpath"),S=M("skew"),w.style["v-text-align"]="left",Gk(I),b.textpathok=!0,w.on=!0,I.from="0 0",I.to="1000 0.05",Fk(I,S),Fk(I,b),Fk(I,w),this._textVmlEl=I);var A=[c,d],T=I.style;v&&n?(Lk(A,A,v),S.on=!0,S.matrix=v[0].toFixed(3)+","+v[2].toFixed(3)+","+v[1].toFixed(3)+","+v[3].toFixed(3)+",0,0",S.offset=(kk(A[0])||0)+","+(kk(A[1])||0),S.origin="0 0",T.left="0px",T.top="0px"):(S.on=!1,T.left=kk(c)+"px",T.top=kk(d)+"px"),w.string=function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}(r);try{w.style.font=m}catch(t){}Yk(I,"fill",{fill:a.textFill,opacity:a.opacity},this),Yk(I,"stroke",{stroke:a.textStroke,opacity:a.opacity,lineDash:a.lineDash},this),I.style.zIndex=Uk(this.zlevel,this.z,this.z2),Fk(t,I)}},iO.removeRectText=function(t){Wk(t,this._textVmlEl),this._textVmlEl=null},iO.appendRectText=function(t){Fk(t,this._textVmlEl)}}bf.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},bf.prototype.onRemove=function(t){this.removeRectText(t)},bf.prototype.onAdd=function(t){this.appendRectText(t)}}var nO=du.each;wl.prototype={constructor:wl,getType:function(){return"vml"},getViewportRoot:function(){return this._vmlViewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!=t||this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||bl(e.width))-bl(e.paddingLeft)-bl(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||bl(e.height))-bl(e.paddingTop)-bl(e.paddingBottom)|0}},nO(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){wl.prototype[t]=function(t){return function(){Ju('In IE8.0 VML mode painter not support method "'+t+'"')}}(t)});var aO=wl;(0,zc.registerPainter)("vml",aO);var rO="http://www.w3.org/2000/svg",oO={createElement:function(t){return document.createElementNS(rO,t)}},sO=oO.createElement,lO=Ed.CMD,uO=Array.prototype.join,hO="none",cO=Math.round,dO=Math.sin,fO=Math.cos,pO=Math.PI,gO=2*Math.PI,mO=180/pO,vO=1e-4,yO={};yO.brush=function(t){var e=t.style,i=t.__svgEl;i||(i=sO("path"),t.__svgEl=i),t.path||t.createPathProxy();var n=t.path;if(t.__dirtyPath){n.beginPath(),t.buildPath(n,t.shape),t.__dirtyPath=!1;var a=function(t){for(var e=[],i=t.data,n=t.len(),a=0;a<n;){var r="",o=0;switch(i[a++]){case lO.M:r="M",o=2;break;case lO.L:r="L",o=2;break;case lO.Q:r="Q",o=4;break;case lO.C:r="C",o=6;break;case lO.A:var s=i[a++],l=i[a++],u=i[a++],h=i[a++],c=i[a++],d=i[a++],f=i[a++],p=i[a++],g=Math.abs(d),m=Ml(g-gO)&&!Ml(g),v=!1;v=g>=gO||!Ml(g)&&(d>-pO&&d<0||d>pO)==!!p;var y=Sl(s+u*fO(c)),x=Sl(l+h*dO(c));m&&(d=p?gO-1e-4:1e-4-gO,v=!0,9===a&&e.push("M",y,x));var _=Sl(s+u*fO(c+d)),b=Sl(l+h*dO(c+d));e.push("A",Sl(u),Sl(h),cO(f*mO),+v,+p,_,b);break;case lO.Z:r="Z";break;case lO.R:var _=Sl(i[a++]),b=Sl(i[a++]),w=Sl(i[a++]),S=Sl(i[a++]);e.push("M",_,b,"L",_+w,b,"L",_+w,b+S,"L",_,b+S,"L",_,b)}r&&e.push(r);for(var M=0;M<o;M++)e.push(Sl(i[a++]))}return e.join(" ")}(n);a.indexOf("NaN")<0&&Al(i,"d",a)}Tl(i,e),Il(i,t.transform),null!=e.text&&wO(t,t.getBoundingRect())};var xO={};xO.brush=function(t){var e=t.style,i=e.image;if(i instanceof HTMLImageElement){i=i.src}if(i){var n=e.x||0,a=e.y||0,r=e.width,o=e.height,s=t.__svgEl;s||(s=sO("image"),t.__svgEl=s),i!==t.__imageSrc&&(!function(t,e,i){t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}(s,"href",i),t.__imageSrc=i),Al(s,"width",r),Al(s,"height",o),Al(s,"x",n),Al(s,"y",a),Il(s,t.transform),null!=e.text&&wO(t,t.getBoundingRect())}};var _O={},bO=new ch,wO=function(t,e,i){var n=t.style;t.__dirty&&ic.normalizeTextStyle(n,!0);var a=n.text;if(null!=a){a+="";var r=t.__textSvgEl;r||(r=sO("text"),t.__textSvgEl=r);var o,s,l=n.textPosition,u=n.textDistance,h=n.textAlign||"left";"number"==typeof n.fontSize&&(n.fontSize+="px");var c=n.font||[n.fontStyle||"",n.fontWeight||"",n.fontSize||"",n.fontFamily||""].join(" ")||jh.DEFAULT_FONT,d=Dl(n.textVerticalAlign),f=(i=jh.getBoundingRect(a,c,h,d)).lineHeight;if(l instanceof Array)o=e.x+l[0],s=e.y+l[1];else{var p=jh.adjustTextPositionOnRect(l,e,u);o=p.x,s=p.y,d=Dl(p.textVerticalAlign),h=p.textAlign}Al(r,"alignment-baseline",d),c&&(r.style.font=c);var g=n.textPadding;if(Al(r,"x",o),Al(r,"y",s),Tl(r,n,!0),t instanceof bf||t.style.transformText)Il(r,t.transform);else{if(t.transform)bO.copy(e),bO.applyTransform(t.transform),e=bO;else{var m=t.transformCoordToGlobal(e.x,e.y);e.x=m[0],e.y=m[1]}var v=n.textOrigin;"center"===v?(o=i.width/2+o,s=i.height/2+s):v&&(o=v[0]+o,s=v[1]+s);var y=-n.textRotation||0,x=Mu.create();Mu.rotate(x,t.transform,y),Il(r,x)}var _=a.split("\n"),b=_.length,w=h;"left"===w?(w="start",g&&(o+=g[3])):"right"===w?(w="end",g&&(o-=g[1])):"center"===w&&(w="middle",g&&(o+=(g[3]-g[1])/2));var S=0;if("baseline"===d?(S=-i.height+f,g&&(S-=g[2])):"middle"===d?(S=(-i.height+f)/2,g&&(s+=(g[0]-g[2])/2)):g&&(S+=g[0]),t.__text!==a||t.__textFont!==c){var M=t.__tspanList||[];t.__tspanList=M;for(A=0;A<b;A++){(T=M[A])?T.innerHTML="":(T=M[A]=sO("tspan"),r.appendChild(T),Al(T,"alignment-baseline",d),Al(T,"text-anchor",w)),Al(T,"x",o),Al(T,"y",s+A*f+S),T.appendChild(document.createTextNode(_[A]))}for(;A<M.length;A++)r.removeChild(M[A]);M.length=b,t.__text=a,t.__textFont=c}else if(t.__tspanList.length)for(var I=t.__tspanList.length,A=0;A<I;++A){var T=t.__tspanList[A];T&&(Al(T,"x",o),Al(T,"y",s+A*f+S))}}};_O.drawRectText=wO,_O.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],wO(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()))};var SO={path:yO,image:xO,text:_O};Cl.prototype={diff:function(t,e,i){i||(i=function(t,e){return t===e}),this.equals=i;var n=this;t=t.slice();var a=(e=e.slice()).length,r=t.length,o=1,s=a+r,l=[{newPos:-1,components:[]}],u=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=a&&u+1>=r){for(var h=[],c=0;c<e.length;c++)h.push(c);return[{indices:h,count:e.length}]}for(;o<=s;){var d=function(){for(var i=-1*o;i<=o;i+=2){var s,u=l[i-1],h=l[i+1],c=(h?h.newPos:0)-i;u&&(l[i-1]=void 0);var d=u&&u.newPos+1<a,f=h&&0<=c&&c<r;if(d||f){if(!d||f&&u.newPos<h.newPos?(s=function(t){return{newPos:t.newPos,components:t.components.slice(0)}}(h),n.pushComponent(s.components,void 0,!0)):((s=u).newPos++,n.pushComponent(s.components,!0,void 0)),c=n.extractCommon(s,e,t,i),s.newPos+1>=a&&c+1>=r)return function(t,e,i,n){for(var a=0,r=e.length,o=0,s=0;a<r;a++){var l=e[a];if(l.removed){for(var u=[],h=s;h<s+l.count;h++)u.push(h);l.indices=u,s+=l.count}else{for(var u=[],h=o;h<o+l.count;h++)u.push(h);l.indices=u,o+=l.count,l.added||(s+=l.count)}}return e}(0,s.components);l[i]=s}else l[i]=void 0}o++}();if(d)return d}},pushComponent:function(t,e,i){var n=t[t.length-1];n&&n.added===e&&n.removed===i?t[t.length-1]={count:n.count+1,added:e,removed:i}:t.push({count:1,added:e,removed:i})},extractCommon:function(t,e,i,n){for(var a=e.length,r=i.length,o=t.newPos,s=o-n,l=0;o+1<a&&s+1<r&&this.equals(e[o+1],i[s+1]);)o++,s++,l++;return l&&t.components.push({count:l}),t.newPos=o,s},tokenize:function(t){return t.slice()},join:function(t){return t.slice()}};var MO=new Cl,IO=function(t,e,i){return MO.diff(t,e,i)},AO=oO.createElement,TO=SO.path,DO=SO.image,CO=SO.text;Ll.prototype.createElement=AO,Ll.prototype.getDefs=function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(this.createElement("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},Ll.prototype.update=function(t,e){if(t){var i=this.getDefs(!1);if(t[this._domName]&&i.contains(t[this._domName]))"function"==typeof e&&e(t);else{var n=this.add(t);n&&(t[this._domName]=n)}}},Ll.prototype.addDom=function(t){this.getDefs(!0).appendChild(t)},Ll.prototype.removeDom=function(t){var e=this.getDefs(!1);e&&t[this._domName]&&(e.removeChild(t[this._domName]),t[this._domName]=null)},Ll.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return du.each(this._tagNames,function(i){var n=t.getElementsByTagName(i);e=e.concat([].slice.call(n))}),e},Ll.prototype.markAllUnused=function(){var t=this.getDoms(),e=this;du.each(t,function(t){t[e._markLabel]="0"})},Ll.prototype.markUsed=function(t){t&&(t[this._markLabel]="1")},Ll.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this.getDoms(),i=this;du.each(e,function(e){"1"!==e[i._markLabel]&&t.removeChild(e)})}},Ll.prototype.getSvgProxy=function(t){return t instanceof af?TO:t instanceof sc?DO:t instanceof bf?CO:TO},Ll.prototype.getTextSvgElement=function(t){return t.__textSvgEl},Ll.prototype.getSvgElement=function(t){return t.__svgEl};var LO=Ll;du.inherits(Pl,LO),Pl.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var i=this;du.each(["fill","stroke"],function(n){if(e.style[n]&&("linear"===e.style[n].type||"radial"===e.style[n].type)){var a,r=e.style[n],o=i.getDefs(!0);r._dom?(a=r._dom,o.contains(r._dom)||i.addDom(a)):a=i.add(r),i.markUsed(e);var s=a.getAttribute("id");t.setAttribute(n,"url(#"+s+")")}})}},Pl.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return Ju("Illegal gradient type."),null;e=this.createElement("radialGradient")}return t.id=t.id||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e},Pl.prototype.update=function(t){var e=this;LO.prototype.update.call(this,t,function(){var i=t.type,n=t._dom.tagName;"linear"===i&&"linearGradient"===n||"radial"===i&&"radialGradient"===n?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t))})},Pl.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void Ju("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r)}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var i=t.colorStops,n=0,a=i.length;n<a;++n){var r=this.createElement("stop");r.setAttribute("offset",100*i[n].offset+"%"),r.setAttribute("stop-color",i[n].color),e.appendChild(r)}t._dom=e},Pl.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&LO.prototype.markUsed.call(this,e._dom),(e=t.style.stroke)&&e._dom&&LO.prototype.markUsed.call(this,e._dom)}};var PO=Pl;du.inherits(kl,LO),kl.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var i=this.getTextSvgElement(t);i&&this.updateDom(i,t.__clipPaths,!0),this.markUsed(t)},kl.prototype.updateDom=function(t,e,i){if(e&&e.length>0){var n,a,r=this.getDefs(!0),o=e[0],s=i?"_textDom":"_dom";o[s]?(a=o[s].getAttribute("id"),n=o[s],r.contains(n)||r.appendChild(n)):(a="zr"+this._zrId+"-clip-"+this.nextId,++this.nextId,(n=this.createElement("clipPath")).setAttribute("id",a),r.appendChild(n),o[s]=n);var l=this.getSvgProxy(o);if(o.transform&&o.parent.invTransform&&!i){var u=Array.prototype.slice.call(o.transform);Mu.mul(o.transform,o.parent.invTransform,o.transform),l.brush(o),o.transform=u}else l.brush(o);var h=this.getSvgElement(o);n.innerHTML="",n.appendChild(h.cloneNode()),t.setAttribute("clip-path","url(#"+a+")"),e.length>1&&this.updateDom(n,e.slice(1),i)}else t&&t.setAttribute("clip-path","none")},kl.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&du.each(t.__clipPaths,function(t){t._dom&&LO.prototype.markUsed.call(e,t._dom),t._textDom&&LO.prototype.markUsed.call(e,t._textDom)})};var kO=kl;du.inherits(Ol,LO),Ol.prototype.addWithoutUpdate=function(t,e){if(e&&Rl(e.style)){var i,n=e.style;if(n._shadowDom){i=n._shadowDom;this.getDefs(!0).contains(n._shadowDom)||this.addDom(i)}else i=this.add(e);this.markUsed(e);var a=i.getAttribute("id");t.style.filter="url(#"+a+")"}},Ol.prototype.add=function(t){var e=this.createElement("filter"),i=t.style;return i._shadowDomId=i._shadowDomId||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-shadow-"+i._shadowDomId),this.updateDom(t,e),this.addDom(e),e},Ol.prototype.update=function(t,e){var i=e.style;if(Rl(i)){var n=this;LO.prototype.update.call(this,e,function(t){n.updateDom(e,t._shadowDom)})}else this.remove(t,i)},Ol.prototype.remove=function(t,e){null!=e._shadowDomId&&(this.removeDom(e),t.style.filter="")},Ol.prototype.updateDom=function(t,e){var i=e.getElementsByTagName("feDropShadow");i=0===i.length?this.createElement("feDropShadow"):i[0];var n,a,r,o,s=t.style,l=t.scale?t.scale[0]||1:1,u=t.scale?t.scale[1]||1:1;if(s.shadowBlur||s.shadowOffsetX||s.shadowOffsetY)n=s.shadowOffsetX||0,a=s.shadowOffsetY||0,r=s.shadowBlur,o=s.shadowColor;else{if(!s.textShadowBlur)return void this.removeDom(e,s);n=s.textShadowOffsetX||0,a=s.textShadowOffsetY||0,r=s.textShadowBlur,o=s.textShadowColor}i.setAttribute("dx",n/l),i.setAttribute("dy",a/u),i.setAttribute("flood-color",o);var h=r/2/l+" "+r/2/u;i.setAttribute("stdDeviation",h),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width",Math.ceil(r/2*200)+"%"),e.setAttribute("height",Math.ceil(r/2*200)+"%"),e.appendChild(i),s._shadowDom=e},Ol.prototype.markUsed=function(t){var e=t.style;e&&e._shadowDom&&LO.prototype.markUsed.call(this,e._shadowDom)};var OO=Ol,RO=oO.createElement,NO=du.each,EO=SO.path,zO=SO.image,VO=SO.text,BO=function(t,e,i,n){this.root=t,this.storage=e,this._opts=i=du.extend({},i||{});var a=RO("svg");a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("version","1.1"),a.setAttribute("baseProfile","full"),a.style.cssText="user-select:none;position:absolute;left:0;top:0;",this.gradientManager=new PO(n,a),this.clipPathManager=new kO(n,a),this.shadowManager=new OO(n,a);var r=document.createElement("div");r.style.cssText="overflow:hidden;position:relative",this._svgRoot=a,this._viewport=r,t.appendChild(r),r.appendChild(a),this.resize(i.width,i.height),this._visibleList=[]};BO.prototype={constructor:BO,getType:function(){return"svg"},getViewportRoot:function(){return this._viewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0);this._paintList(t)},setBackgroundColor:function(t){this._viewport.style.background=t},_paintList:function(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused(),this.shadowManager.markAllUnused();var e,i=this._svgRoot,n=this._visibleList,a=t.length,r=[];for(e=0;e<a;e++){var o=function(t){return t instanceof af?EO:t instanceof sc?zO:t instanceof bf?VO:EO}(f=t[e]),s=Hl(f)||Gl(f);f.invisible||(f.__dirty&&(o&&o.brush(f),this.clipPathManager.update(f),f.style&&(this.gradientManager.update(f.style.fill),this.gradientManager.update(f.style.stroke),this.shadowManager.update(s,f)),f.__dirty=!1),r.push(f))}var l,u=IO(n,r);for(e=0;e<u.length;e++){if((c=u[e]).removed)for(d=0;d<c.count;d++){var s=Hl(f=n[c.indices[d]]),h=Gl(f);Bl(i,s),Bl(i,h)}}for(e=0;e<u.length;e++){var c=u[e];if(c.added)for(d=0;d<c.count;d++){var s=Hl(f=r[c.indices[d]]),h=Gl(f);l?zl(i,s,l):Vl(i,s),s?zl(i,h,s):l?zl(i,h,l):Vl(i,h),zl(i,h,s),l=h||s||l,this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.addWithoutUpdate(l,f),this.clipPathManager.markUsed(f)}else if(!c.removed)for(var d=0;d<c.count;d++){var f=r[c.indices[d]];l=s=Gl(f)||Hl(f)||l,this.gradientManager.markUsed(f),this.gradientManager.addWithoutUpdate(s,f),this.shadowManager.markUsed(f),this.shadowManager.addWithoutUpdate(s,f),this.clipPathManager.markUsed(f)}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this.shadowManager.removeUnused(),this._visibleList=r},_getDefs:function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");if(0===i.length){if(t){return(i=e.insertBefore(RO("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i}return null}return i[0]},resize:function(t,e){var i=this._viewport;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||this._height!==e){this._width=t,this._height=e;var a=i.style;a.width=t+"px",a.height=e+"px";var r=this._svgRoot;r.setAttribute("width",t),r.setAttribute("height",e)}},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],a=["paddingLeft","paddingTop"][t],r=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var o=this.root,s=document.defaultView.getComputedStyle(o);return(o[n]||Nl(s[i])||Nl(o.style[i]))-(Nl(s[a])||0)-(Nl(s[r])||0)|0},dispose:function(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null},clear:function(){this._viewport&&this.root.removeChild(this._viewport)},pathToDataUrl:function(){this.refresh();return"data:image/svg+xml;charset=UTF-8,"+this._svgRoot.outerHTML}},NO(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){BO.prototype[t]=function(t){return function(){Ju('In SVG mode painter not support method "'+t+'"')}}(t)});var GO=BO;(0,zc.registerPainter)("svg",GO);!function(t){t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")&&t.default}(t(function(t,e){!function(){for(var t in C_){if(null==C_||!C_.hasOwnProperty(t)||"default"===t||"__esModule"===t)return;e[t]=C_[t]}}(),function(){for(var t in D_){if(null==D_||!D_.hasOwnProperty(t)||"default"===t||"__esModule"===t)return;e[t]=D_[t]}}()}));var HO=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},FO="object"==typeof Xl&&Xl&&Xl===Object&&Xl,WO="object"==typeof self&&self&&self.Object===Object&&self,UO=FO||WO||Function("return this")(),ZO=function(){return UO.Date.now()},jO=UO.Symbol,YO=Object.prototype,XO=YO.hasOwnProperty,qO=YO.toString,$O=jO?jO.toStringTag:void 0,KO=function(t){var e=XO.call(t,$O),i=t[$O];try{t[$O]=void 0;var n=!0}catch(t){}var a=qO.call(t);return n&&(e?t[$O]=i:delete t[$O]),a},JO=Object.prototype.toString,QO=function(t){return JO.call(t)},tR="[object Null]",eR="[object Undefined]",iR=jO?jO.toStringTag:void 0,nR=function(t){return null==t?void 0===t?eR:tR:iR&&iR in Object(t)?KO(t):QO(t)},aR=function(t){return null!=t&&"object"==typeof t},rR="[object Symbol]",oR=function(t){return"symbol"==typeof t||aR(t)&&nR(t)==rR},sR=NaN,lR=/^\s+|\s+$/g,uR=/^[-+]0x[0-9a-f]+$/i,hR=/^0b[01]+$/i,cR=/^0o[0-7]+$/i,dR=parseInt,fR=function(t){if("number"==typeof t)return t;if(oR(t))return sR;if(HO(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=HO(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(lR,"");var i=hR.test(t);return i||cR.test(t)?dR(t.slice(2),i?2:8):uR.test(t)?sR:+t},pR="Expected a function",gR=Math.max,mR=Math.min,vR=function(t,e,i){function n(e){var i=l,n=u;return l=u=void 0,p=e,c=t.apply(n,i)}function a(t){var i=t-f;return void 0===f||i>=e||i<0||m&&t-p>=h}function r(){var t=ZO();if(a(t))return o(t);d=setTimeout(r,function(t){var i=e-(t-f);return m?mR(i,h-(t-p)):i}(t))}function o(t){return d=void 0,v&&l?n(t):(l=u=void 0,c)}function s(){var t=ZO(),i=a(t);if(l=arguments,u=this,f=t,i){if(void 0===d)return function(t){return p=t,d=setTimeout(r,e),g?n(t):c}(f);if(m)return d=setTimeout(r,e),n(f)}return void 0===d&&(d=setTimeout(r,e)),c}var l,u,h,c,d,f,p=0,g=!1,m=!1,v=!0;if("function"!=typeof t)throw new TypeError(pR);return e=fR(e)||0,HO(i)&&(g=!!i.leading,h=(m="maxWait"in i)?gR(fR(i.maxWait)||0,e):h,v="trailing"in i?!!i.trailing:v),s.cancel=function(){void 0!==d&&clearTimeout(d),p=0,l=f=u=d=void 0},s.flush=function(){return void 0===d?c:o(ZO())},s},yR=null,xR=null,_R='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',bR=0,wR=null;!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),i=" .echarts { width: 600px; height: 400px; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}}();var SR=["legendselectchanged","legendselected","legendunselected","legendunscroll","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","focusnodeadjacency","unfocusnodeadjacency","brush","brushselected","rendered","finished","click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"];return{render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"echarts"})},staticRenderFns:[],props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoResize:Boolean,watchShallow:Boolean,manualUpdate:Boolean},data:function(){return{lastArea:0}},watch:{group:function(t){this.chart.group=t}},methods:{mergeOptions:function(t,e,i){this.manualUpdate&&(this.manualOptions=t),this.chart?this.delegateMethod("setOption",t,e,i):this.init()},appendData:function(t){this.delegateMethod("appendData",t)},resize:function(t){this.delegateMethod("resize",t)},dispatchAction:function(t){this.delegateMethod("dispatchAction",t)},convertToPixel:function(t,e){return this.delegateMethod("convertToPixel",t,e)},convertFromPixel:function(t,e){return this.delegateMethod("convertFromPixel",t,e)},containPixel:function(t,e){return this.delegateMethod("containPixel",t,e)},showLoading:function(t,e){this.delegateMethod("showLoading",t,e)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(t){return this.delegateMethod("getDataURL",t)},getConnectedDataURL:function(t){return this.delegateMethod("getConnectedDataURL",t)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];return this.chart||this.init(),(n=this.chart)[t].apply(n,e);var n},delegateGet:function(t,e){return this.chart||this.init(),this.chart[e]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(){var t=this;if(!this.chart){var e=C_.init(this.$el,this.theme,this.initOptions);this.group&&(e.group=this.group),e.setOption(this.manualOptions||this.options||{},!0),SR.forEach(function(i){e.on(i,function(e){t.$emit(i,e)})}),this.autoResize&&(this.lastArea=this.getArea(),this.__resizeHandler=vR(function(){0===t.lastArea?(t.mergeOptions({},!0),t.resize(),t.mergeOptions(t.options||t.manualOptions||{},!0)):t.resize(),t.lastArea=t.getArea()},100,{leading:!0}),function(t,e){if(t.__resize_mutation_handler__||(t.__resize_mutation_handler__=function(){var t=Wl(this),e=t.rendered,i=t.detached;e!==this.__resize_rendered__&&(!i&&this.__resize_triggers__&&(jl(this),this.addEventListener("scroll",Ul,!0)),this.__resize_rendered__=e,Zl(this))}.bind(t)),!t.__resize_listeners__)if(t.__resize_listeners__=[],window.ResizeObserver){var i=t.offsetWidth,n=t.offsetHeight,a=new ResizeObserver(function(){(t.__resize_observer_triggered__||(t.__resize_observer_triggered__=!0,t.offsetWidth!==i||t.offsetHeight!==n))&&Zl(t)}),r=Wl(t),o=r.detached,s=r.rendered;t.__resize_observer_triggered__=!1===o&&!1===s,t.__resize_observer__=a,a.observe(t)}else if(t.attachEvent&&t.addEventListener)t.__resize_legacy_resize_handler__=function(){Zl(t)},t.attachEvent("onresize",t.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",t.__resize_mutation_handler__);else if(bR||(wR=function(t){var e=document.createElement("style");return e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),(document.querySelector("head")||document.body).appendChild(e),e}(_R)),function(t){var e=getComputedStyle(t).position;"static"===e&&(t.style.position="relative"),t.__resize_old_position__=e,t.__resize_last__={};var i=Fl("div",{className:"resize-triggers"}),n=Fl("div",{className:"resize-expand-trigger"}),a=Fl("div"),r=Fl("div",{className:"resize-contract-trigger"});n.appendChild(a),i.appendChild(n),i.appendChild(r),t.appendChild(i),t.__resize_triggers__={triggers:i,expand:n,expandChild:a,contract:r},jl(t),t.addEventListener("scroll",Ul,!0),t.__resize_last__={width:t.offsetWidth,height:t.offsetHeight}}(t),t.__resize_rendered__=Wl(t).rendered,window.MutationObserver){var l=new MutationObserver(t.__resize_mutation_handler__);l.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t.__resize_mutation_observer__=l}t.__resize_listeners__.push(e),bR++}(this.$el,this.__resizeHandler)),Object.defineProperties(this,{width:{configurable:!0,get:function(){return t.delegateGet("width","getWidth")}},height:{configurable:!0,get:function(){return t.delegateGet("height","getHeight")}},isDisposed:{configurable:!0,get:function(){return!!t.delegateGet("isDisposed","isDisposed")}},computedOptions:{configurable:!0,get:function(){return t.delegateGet("computedOptions","getOption")}}}),this.chart=e}},destroy:function(){this.autoResize&&function(t,e){if(t.detachEvent&&t.removeEventListener)return t.detachEvent("onresize",t.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",t.__resize_mutation_handler__);var i=t.__resize_listeners__;i.splice(i.indexOf(e),1),i.length||(t.__resize_observer__?(t.__resize_observer__.unobserve(t),t.__resize_observer__.disconnect(),t.__resize_observer__=null):(t.__resize_mutation_observer__&&(t.__resize_mutation_observer__.disconnect(),t.__resize_mutation_observer__=null),t.removeEventListener("scroll",Ul),t.removeChild(t.__resize_triggers__.triggers),t.__resize_triggers__=null),t.__resize_listeners__=null),!--bR&&wR&&wR.parentNode.removeChild(wR)}(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.chart&&(this.destroy(),this.init())}},created:function(){var t=this;this.manualUpdate||this.$watch("options",function(e,i){!t.chart&&e?t.init():t.chart.setOption(e,e!==i)},{deep:!this.watchShallow});["theme","initOptions","autoResize","manualUpdate","watchShallow"].forEach(function(e){t.$watch(e,function(){t.refresh()},{deep:!0})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoResize&&this.chart&&this.chart.resize()},beforeDestroy:function(){this.chart&&this.destroy()},connect:function(t){"string"!=typeof t&&(t=t.map(function(t){return t.chart})),C_.connect(t)},disconnect:function(t){C_.disConnect(t)},registerMap:function(t,e,i){C_.registerMap(t,e,i)},registerTheme:function(t,e){C_.registerTheme(t,e)},graphic:C_.graphic}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-i18n v5.0.3 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */


/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

function warn (msg, err) {
  if (window.console) {
    console.warn('[vue-i18n] ' + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}

var Asset = function (Vue, langVM) {
  /**
   * Register or retrieve a global locale definition.
   *
   * @param {String} id
   * @param {Object | Function | Promise} definition
   * @param {Function} cb
   */

  Vue.locale = function (id, definition, cb) {
    if (definition === undefined) { // getter
      return langVM.locales[id]
    } else { // setter
      if (definition === null) {
        langVM.locales[id] = undefined;
        delete langVM.locales[id];
      } else {
        setLocale(id, definition, function (locale) {
          if (locale) {
            langVM.$set(langVM.locales, id, locale);
          } else {
            warn('failed set `' + id + '` locale');
          }
          cb && cb();
        });
      }
    }
  };
};


function setLocale (id, definition, cb) {
  if (typeof definition === 'object') { // sync
    cb(definition);
  } else {
    var future = definition.call(this);
    if (typeof future === 'function') {
      if (future.resolved) {
        // cached
        cb(future.resolved);
      } else if (future.requested) {
        // pool callbacks
        future.pendingCallbacks.push(cb);
      } else {
        future.requested = true;
        var cbs = future.pendingCallbacks = [cb];
        future(function (locale) { // resolve
          future.resolved = locale;
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](locale);
          }
        }, function () { // reject
          cb();
        });
      }
    } else if (isPromise(future)) { // promise
      future.then(function (locale) { // resolve
        cb(locale);
      }, function () { // reject
        cb();
      }).catch(function (err) {
        console.error(err);
        cb();
      });
    }
  }
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise (p) {
  return p && typeof p.then === 'function'
}

var Override = function (Vue, langVM) {
  // override _init
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var this$1 = this;

    init.call(this, options);

    if (!this.$parent) { // root
      this._$lang = langVM;
      this._langUnwatch = this._$lang.$watch('$data', function (val, old) {
        this$1.$forceUpdate();
      }, { deep: true });
    }
  };

  // override _destroy
  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this.$parent && this._langUnwatch) {
      this._langUnwatch();
      this._langUnwatch = null;
      this._$lang = null;
    }

    destroy.apply(this, arguments);
  };
};

/**
 * Observer
 */

var Watcher;
/**
 * getWatcher
 *
 * @param {Vue} vm
 * @return {Watcher}
 */

function getWatcher (vm) {
  if (!Watcher) {
    var unwatch = vm.$watch('__watcher__', function (a) {});
    Watcher = vm._watchers[0].constructor;
    unwatch();
  }
  return Watcher
}

var Dep;
/**
 * getDep
 *
 * @param {Vue} vm
 * @return {Dep}
 */

function getDep (vm) {
  if (!Dep && vm && vm._data && vm._data.__ob__ && vm._data.__ob__.dep) {
    Dep = vm._data.__ob__.dep.constructor;
  }
  return Dep
}

/**
 * utilites
 */

/**
 * isNil
 *
 * @param {*} val
 * @return Boolean
 */
function isNil (val) {
  return val === null || val === undefined
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return Function
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {Object} obj
 * @return Boolean
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {Object} obj
 * @return Boolean
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return Boolean
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

var fallback; // fallback lang
var missingHandler = null; // missing handler
var i18nFormatter = null; // custom formatter

var Config = function (Vue, langVM, lang) {
  var Watcher = getWatcher(langVM);
  var Dep = getDep(langVM);

  function makeComputedGetter (getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });

    return function computedGetter () {
      watcher.dirty && watcher.evaluate();
      Dep && Dep.target && watcher.depend();
      return watcher.value
    }
  }

  // define Vue.config.lang configration
  Object.defineProperty(Vue.config, 'lang', {
    enumerable: true,
    configurable: true,
    get: makeComputedGetter(function () { return langVM.lang }, langVM),
    set: bind(function (val) { langVM.lang = val; }, langVM)
  });

  // define Vue.config.fallbackLang configration
  fallback = lang;
  Object.defineProperty(Vue.config, 'fallbackLang', {
    enumerable: true,
    configurable: true,
    get: function () { return fallback },
    set: function (val) { fallback = val; }
  });

  // define Vue.config.missingHandler configration
  Object.defineProperty(Vue.config, 'missingHandler', {
    enumerable: true,
    configurable: true,
    get: function () { return missingHandler },
    set: function (val) { missingHandler = val; }
  });

  // define Vue.config.i18Formatter configration
  Object.defineProperty(Vue.config, 'i18nFormatter', {
    enumerable: true,
    configurable: true,
    get: function () { return i18nFormatter },
    set: function (val) { i18nFormatter = val; }
  });
};

/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;


var Format = function (Vue) {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template (string) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0];
    } else {
      args = {};
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result;

      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : match;
        if (isNil(result)) {
          return ''
        }

        return result
      }
    })
  }

  return template
};

/**
 *  Path paerser
 *  - Inspired:
 *    Vue.js Path parser
 */

// cache
var pathCache = Object.create(null);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType (ch) {
  if (ch === undefined) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) { return 'number' }

  return 'else'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath (path) {
  var hit = pathCache[path];
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache[path] = hit;
    }
  }
  return hit
}

var Path = function (Vue) {
  function empty (target) {
    if (target === null || target === undefined) { return true }

    if (Array.isArray(target)) {
      if (target.length > 0) { return false }
      if (target.length === 0) { return true }
    } else if (isPlainObject(target)) {
      /* eslint-disable prefer-const */
      for (var key in target) {
        if (hasOwn(target, key)) { return false }
      }
      /* eslint-enable prefer-const */
    }

    return true
  }

  /**
   * Get value from path string
   *
   * @param {Object} obj
   * @param {String} path
   * @return value
   */

  function getValue (obj, path) {
    if (!isObject(obj)) { return null }

    var paths = parsePath(path);
    if (empty(paths)) { return null }

    var length = paths.length;
    var ret = null;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        last = null;
        break
      }
      last = value;
      i++;
    }

    ret = last;
    return ret
  }

  return getValue
};

/**
 * extend
 *
 * @param {Vue} Vue
 * @return {Vue}
 */

var Extend = function (Vue) {
  var format = Format(Vue);
  var getValue = Path(Vue);

  function parseArgs () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var lang = Vue.config.lang;
    var fallback = Vue.config.fallbackLang;

    if (args.length === 1) {
      if (isObject(args[0]) || Array.isArray(args[0])) {
        args = args[0];
      } else if (typeof args[0] === 'string') {
        lang = args[0];
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        lang = args[0];
      }
      if (isObject(args[1]) || Array.isArray(args[1])) {
        args = args[1];
      }
    }

    return { lang: lang, fallback: fallback, params: args }
  }

  function exist (locale, key) {
    if (!locale || !key) { return false }
    return !isNil(getValue(locale, key))
  }

  function interpolate (locale, key, args) {
    if (!locale) { return null }

    var val = getValue(locale, key);
    if (Array.isArray(val)) { return val }
    if (isNil(val)) { val = locale[key]; }
    if (isNil(val)) { return null }
    if (typeof val !== 'string') { warn("Value of key '" + key + "' is not a string!"); return null }

    // Check for the existance of links within the translated string
    if (val.indexOf('@:') >= 0) {
      // Match all the links within the local
      // We are going to replace each of
      // them with its translation
      var matches = val.match(/(@:[\w|.]+)/g);
      for (var idx in matches) {
        var link = matches[idx];
        // Remove the leading @:
        var linkPlaceholder = link.substr(2);
        // Translate the link
        var translatedstring = interpolate(locale, linkPlaceholder, args);
        // Replace the link with the translated string
        val = val.replace(link, translatedstring);
      }
    }

    return !args
      ? val
      : Vue.config.i18nFormatter
        ? Vue.config.i18nFormatter.apply(null, [val].concat(args))
        : format(val, args)
  }

  function translate (getter, lang, fallback, key, params) {
    var res = null;
    res = interpolate(getter(lang), key, params);
    if (!isNil(res)) { return res }

    res = interpolate(getter(fallback), key, params);
    if (!isNil(res)) {
      if (false) {
        warn('Fall back to translate the keypath "' + key + '" with "' +
          fallback + '" language.');
      }
      return res
    } else {
      return null
    }
  }


  function warnDefault (lang, key, vm, result) {
    if (!isNil(result)) { return result }
    if (Vue.config.missingHandler) {
      Vue.config.missingHandler.apply(null, [lang, key, vm]);
    } else {
      if (false) {
        warn('Cannot translate the value of keypath "' + key + '". ' +
          'Use the value of keypath as default');
      }
    }
    return key
  }

  function getAssetLocale (lang) {
    return Vue.locale(lang)
  }

  function getComponentLocale (lang) {
    return this.$options.locales[lang]
  }

  function getOldChoiceIndexFixed (choice) {
    return choice ? choice > 1 ? 1 : 0 : 1
  }

  function getChoiceIndex (choice, choicesLength) {
    choice = Math.abs(choice);

    if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

    return choice ? Math.min(choice, 2) : 0
  }

  function fetchChoice (locale, choice) {
    if (!locale && typeof locale !== 'string') { return null }
    var choices = locale.split('|');

    choice = getChoiceIndex(choice, choices.length);
    if (!choices[choice]) { return locale }
    return choices[choice].trim()
  }

  /**
   * Vue.t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    return warnDefault(lang, key, null, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * Vue.tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    return fetchChoice(Vue.t.apply(Vue, [ key ].concat( args )), choice)
  };

  /**
   * Vue.te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   */

  Vue.te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    return exist(getAssetLocale(lang), key)
  };

  /**
   * $t
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$t = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (!key) { return '' }
    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var fallback = ref.fallback;
    var params = ref.params;
    var res = null;
    if (this.$options.locales) {
      res = translate(
        bind(getComponentLocale, this), lang, fallback, key, params
      );
      if (res) { return res }
    }
    return warnDefault(lang, key, this, translate(getAssetLocale, lang, fallback, key, params))
  };

  /**
   * $tc
   *
   * @param {String} key
   * @param {number|undefined} choice
   * @param {Array} ...args
   * @return {String}
   */

  Vue.prototype.$tc = function (key, choice) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    if (typeof choice !== 'number' && typeof choice !== 'undefined') {
      return key
    }
    return fetchChoice((ref = this).$t.apply(ref, [ key ].concat( args )), choice)
    var ref;
  };

  /**
   * $te
   *
   * @param {String} key
   * @param {Array} ...args
   * @return {Boolean}
   *
   */

  Vue.prototype.$te = function (key) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var ref = parseArgs.apply(void 0, args);
    var lang = ref.lang;
    var found = false;
    if (this.$options.locales) { // exist component locale
      found = exist(bind(getComponentLocale)(lang), key);
    }
    if (!found) {
      found = exist(getAssetLocale(lang), key);
    }
    return found
  };

  Vue.mixin({
    computed: {
      $lang: function $lang () {
        return Vue.config.lang
      }
    }
  });

  return Vue
};

var langVM; // singleton


/**
 * plugin
 *
 * @param {Object} Vue
 * @param {Object} opts
 */

function plugin (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;

  if (false) {
    warn('already installed.');
    return
  }

  if (false) {
    warn(("vue-i18n (" + (plugin.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  var lang = 'en';
  setupLangVM(Vue, lang);

  Asset(Vue, langVM);
  Override(Vue, langVM);
  Config(Vue, langVM, lang);
  Extend(Vue);
}

function setupLangVM (Vue, lang) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  if (!langVM) {
    langVM = new Vue({ data: { lang: lang, locales: {} } });
  }
  Vue.config.silent = silent;
}

plugin.version = '__VERSION__';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
}
var normalizeComponent = __webpack_require__(28)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ef48958", Component.options)
  } else {
    hotAPI.reload("data-v-5ef48958", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(120);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(119);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(38);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "main" }, [_c("common-header"), _vm._v(" "), _c("div", { staticClass: "single-page-con" }, [_c("div", { staticClass: "single-page" }, [_c("keep-alive", [_c("router-view")], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-567ae6d4", esExports);
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "app-main", attrs: { id: "main" } }, [_c("router-view")], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-5ef48958", esExports);
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "common-header" }, [_c("a", { attrs: { href: "/#/intelligence" } }, [_c("img", { staticClass: "systemlogo", attrs: { src: _vm.imgUrl } })])]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-d356fb26", esExports);
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(148);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(47);
module.exports = __webpack_require__(147);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(150);
__webpack_require__(152);
__webpack_require__(153);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(76);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(73);
var toAbsoluteIndex = __webpack_require__(146);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(34);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(38);
var gOPS = __webpack_require__(70);
var pIE = __webpack_require__(39);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(10);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(68);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(40);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(44);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(66);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(69).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(74);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var get = __webpack_require__(75);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(64);
var $export = __webpack_require__(31);
var toObject = __webpack_require__(74);
var call = __webpack_require__(137);
var isArrayIter = __webpack_require__(135);
var toLength = __webpack_require__(73);
var createProperty = __webpack_require__(131);
var getIterFn = __webpack_require__(75);

$export($export.S + $export.F * !__webpack_require__(139)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(128);
var step = __webpack_require__(140);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(67)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 150 */
/***/ (function(module, exports) {



/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(72);
var META = __webpack_require__(141).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(42);
var setToStringTag = __webpack_require__(40);
var uid = __webpack_require__(22);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(45);
var enumKeys = __webpack_require__(132);
var isArray = __webpack_require__(136);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(15);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(44);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(68);
var gOPNExt = __webpack_require__(143);
var $GOPD = __webpack_require__(142);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(38);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f = $propertyIsEnumerable;
  __webpack_require__(70).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(37)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('asyncIterator');


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('observable');


/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\nhtml,body{\n    width: 100%;\n    /* /* height: 100%; */\n    background: #f0f0f0;\n    /* overflow: hidden;  */\n}\n.app-main{\n    width: 100%;\n    height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\n.common-header {\n  width: 100%;\n  height: 56px;\n  margin-bottom: 4px;\n  background-color: #fff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.common-header .systemlogo {\n  width: 344px;\n  height: 38px;\n  margin: 9px 6px;\n}\n", ""]);

// exports


/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "production";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vueEcharts = __webpack_require__(90);

var _vueEcharts2 = _interopRequireDefault(_vueEcharts);

var _iview = __webpack_require__(19);

var _iview2 = _interopRequireDefault(_iview);

var _index = __webpack_require__(85);

var _router = __webpack_require__(27);

var _store = __webpack_require__(86);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(92);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(83);

var _vueI18n = __webpack_require__(91);

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _util = __webpack_require__(18);

var _util2 = _interopRequireDefault(_util);

__webpack_require__(84);

var _es6Promise = __webpack_require__(51);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();

_vue2.default.use(_vueI18n2.default);
_vue2.default.use(_iview2.default);
_vue2.default.component('v-chart', _vueEcharts2.default);

function checkIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
}

new _vue2.default({
  el: '#app',
  router: _index.router,
  store: _store2.default,
  render: function render(h) {
    return h(_app2.default);
  },
  data: {
    currentPageName: ''
  },
  mounted: function mounted() {
    var _this = this;

    this.currentPageName = this.$route.name;

    if (checkIE()) {
      window.addEventListener('hashchange', function () {
        var currentPath = window.location.hash.slice(1);
        if (_this.$route.path !== currentPath) {
          _this.$router.push(currentPath);
        }
      }, false);
    }
  },
  created: function created() {
    var tagsList = [];
    _router.appRouter.map(function (item) {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0]);
      } else {
        tagsList.push.apply(tagsList, (0, _toConsumableArray3.default)(item.children));
      }
    });
    this.$store.commit('setTagsList', tagsList);
  }
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(93);

var _stringify2 = _interopRequireDefault(_stringify);

var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _router = __webpack_require__(27);

var _util = __webpack_require__(18);

var _util2 = _interopRequireDefault(_util);

var _jsCookie = __webpack_require__(14);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = {
    state: {
        cachePage: [],
        lang: '',
        isFullScreen: false,
        openedSubmenuArr: [],
        menuTheme: 'dark',
        themeColor: '',
        pageOpenedList: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
        currentPageName: '',
        currentPath: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
        menuList: [],
        routers: [_router.otherRouter].concat((0, _toConsumableArray3.default)(_router.appRouter)),
        tagsList: [].concat((0, _toConsumableArray3.default)(_router.otherRouter.children)),
        messageCount: 0,
        dontCache: ['text-editor', 'artical-publish'] },
    mutations: {
        setTagsList: function setTagsList(state, list) {
            var _state$tagsList;

            (_state$tagsList = state.tagsList).push.apply(_state$tagsList, (0, _toConsumableArray3.default)(list));
        },
        updateMenulist: function updateMenulist(state) {
            var accessCode = parseInt(_jsCookie2.default.get('access'));
            var menuList = [];
            _router.appRouter.forEach(function (item, index) {
                if (item.access !== undefined) {
                    if (_util2.default.showThisRoute(item.access, accessCode)) {
                        if (item.children.length === 1) {
                            menuList.push(item);
                        } else {
                            var len = menuList.push(item);
                            var childrenArr = [];
                            childrenArr = item.children.filter(function (child) {
                                if (child.access !== undefined) {
                                    if (child.access === accessCode) {
                                        return child;
                                    }
                                } else {
                                    return child;
                                }
                            });
                            menuList[len - 1].children = childrenArr;
                        }
                    }
                } else {
                    if (item.children.length === 1) {
                        menuList.push(item);
                    } else {
                        var _len = menuList.push(item);
                        var _childrenArr = [];
                        _childrenArr = item.children.filter(function (child) {
                            if (child.access !== undefined) {
                                if (_util2.default.showThisRoute(child.access, accessCode)) {
                                    return child;
                                }
                            } else {
                                return child;
                            }
                        });
                        if (_childrenArr === undefined || _childrenArr.length === 0) {
                            menuList.splice(_len - 1, 1);
                        } else {
                            var handledItem = JSON.parse((0, _stringify2.default)(menuList[_len - 1]));
                            handledItem.children = _childrenArr;
                            menuList.splice(_len - 1, 1, handledItem);
                        }
                    }
                }
            });
            state.menuList = menuList;
        },
        changeMenuTheme: function changeMenuTheme(state, theme) {
            state.menuTheme = theme;
        },
        changeMainTheme: function changeMainTheme(state, mainTheme) {
            state.themeColor = mainTheme;
        },
        addOpenSubmenu: function addOpenSubmenu(state, name) {
            var hasThisName = false;
            var isEmpty = false;
            if (name.length === 0) {
                isEmpty = true;
            }
            if (state.openedSubmenuArr.indexOf(name) > -1) {
                hasThisName = true;
            }
            if (!hasThisName && !isEmpty) {
                state.openedSubmenuArr.push(name);
            }
        },
        closePage: function closePage(state, name) {
            state.cachePage.forEach(function (item, index) {
                if (item === name) {
                    state.cachePage.splice(index, 1);
                }
            });
        },
        initCachepage: function initCachepage(state) {
            if (localStorage.cachePage) {
                state.cachePage = JSON.parse(localStorage.cachePage);
            }
        },
        removeTag: function removeTag(state, name) {
            state.pageOpenedList.map(function (item, index) {
                if (item.name === name) {
                    state.pageOpenedList.splice(index, 1);
                }
            });
        },
        pageOpenedList: function pageOpenedList(state, get) {
            var openedPage = state.pageOpenedList[get.index];
            if (get.argu) {
                openedPage.argu = get.argu;
            }
            if (get.query) {
                openedPage.query = get.query;
            }
            state.pageOpenedList.splice(get.index, 1, openedPage);
            localStorage.pageOpenedList = (0, _stringify2.default)(state.pageOpenedList);
        },
        clearAllTags: function clearAllTags(state) {
            state.pageOpenedList.splice(1);
            state.cachePage.length = 0;
            localStorage.pageOpenedList = (0, _stringify2.default)(state.pageOpenedList);
        },
        clearOtherTags: function clearOtherTags(state, vm) {
            var currentName = vm.$route.name;
            var currentIndex = 0;
            state.pageOpenedList.forEach(function (item, index) {
                if (item.name === currentName) {
                    currentIndex = index;
                }
            });
            if (currentIndex === 0) {
                state.pageOpenedList.splice(1);
            } else {
                state.pageOpenedList.splice(currentIndex + 1);
                state.pageOpenedList.splice(1, currentIndex - 1);
            }
            var newCachepage = state.cachePage.filter(function (item) {
                return item === currentName;
            });
            state.cachePage = newCachepage;
            localStorage.pageOpenedList = (0, _stringify2.default)(state.pageOpenedList);
        },
        setOpenedList: function setOpenedList(state) {
            state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : [_router.otherRouter.children[0]];
        },
        setCurrentPath: function setCurrentPath(state, pathArr) {
            state.currentPath = pathArr;
        },
        setCurrentPageName: function setCurrentPageName(state, name) {
            state.currentPageName = name;
        },
        setAvator: function setAvator(state, path) {
            localStorage.avatorImgPath = path;
        },
        switchLang: function switchLang(state, lang) {
            state.lang = lang;
            _vue2.default.config.lang = lang;
        },
        clearOpenedSubmenu: function clearOpenedSubmenu(state) {
            state.openedSubmenuArr.length = 0;
        },
        setMessageCount: function setMessageCount(state, count) {
            state.messageCount = count;
        },
        increateTag: function increateTag(state, tagObj) {
            if (!_util2.default.oneOf(tagObj.name, state.dontCache)) {
                state.cachePage.push(tagObj.name);
                localStorage.cachePage = (0, _stringify2.default)(state.cachePage);
            }
            state.pageOpenedList.push(tagObj);
            localStorage.pageOpenedList = (0, _stringify2.default)(state.pageOpenedList);
        }
    }
};

exports.default = app;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsCookie = __webpack_require__(14);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
    state: {},
    mutations: {
        logout: function logout(state, vm) {
            _jsCookie2.default.remove('user');
            _jsCookie2.default.remove('password');
            _jsCookie2.default.remove('access');

            var themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');

            var theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        }
    }
};

exports.default = user;

/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ __webpack_require__.i({"NODE_ENV":"production"}) &&
    /* nomin */ __webpack_require__.i({"NODE_ENV":"production"}).NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(__webpack_require__.i({"NODE_ENV":"production"}).NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function(comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, loose) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, loose) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function(range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  })
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  })
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose)
  r2 = new Range(r2, loose)
  return r1.intersects(r2)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "760cc9ac514b45bbd441a0d31502fa4d.png";

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d356fb26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d356fb26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d356fb26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(28)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d356fb26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/main/components/header/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d356fb26", Component.options)
  } else {
    hotAPI.reload("data-v-d356fb26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_567ae6d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_567ae6d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_567ae6d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(198)
}
var normalizeComponent = __webpack_require__(28)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_567ae6d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/main/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-567ae6d4", Component.options)
  } else {
    hotAPI.reload("data-v-567ae6d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("3c50ad39", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-567ae6d4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-567ae6d4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("1a6844aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef48958\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef48958\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("849da486", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d356fb26\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d356fb26\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 202 */,
/* 203 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 204 */,
/* 205 */
/***/ (function(module, exports) {

module.exports = {"name":"iview-admin","version":"1.3.1","description":"a management bases on iview","main":"index.js","scripts":{"start":"node server/dev-server.js","dev":"npm run start","build":"webpack --progress --hide-modules --config build/webpack.prod.config.js","lint":"eslint --fix --ext .js,.vue src","test":"npm run lint"},"repository":{"type":"git","url":"https://github.com/iview/iview-admin.git"},"author":"Lison<zhigang.li@tendcloud.com>","license":"MIT","dependencies":{"area-data":"^1.0.0","axios":"^0.17.1","babel-polyfill":"^6.26.0","clipboard":"^1.7.1","countup":"^1.8.2","cropperjs":"^1.2.2","echarts":"^3.8.5","es6-promise":"^4.2.5","html2canvas":"^0.5.0-beta4","isomorphic-fetch":"^2.2.1","iview":"^2.8.0","iview-area":"^1.5.16","js-cookie":"^2.2.0","promise-polyfill":"^8.1.0","rasterizehtml":"^1.2.4","simplemde":"^1.11.2","sortablejs":"^1.7.0","tinymce":"^4.7.4","vue":"^2.5.13","vue-router":"^3.0.1","vue-virtual-scroller":"^0.10.6","vuedraggable":"^2.16.0","vuex":"^3.0.1","xlsx":"^0.11.17"},"devDependencies":{"autoprefixer-loader":"^3.2.0","babel":"^6.23.0","babel-core":"^6.26.3","babel-eslint":"^8.2.1","babel-loader":"^7.1.2","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-transform-runtime":"^6.12.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.9.0","babel-preset-stage-3":"^6.24.1","babel-runtime":"^6.11.6","clean-webpack-plugin":"^0.1.17","copy-webpack-plugin":"^4.5.2","css-hot-loader":"^1.3.5","css-loader":"^0.28.8","ejs-loader":"^0.3.1","eslint":"^4.15.0","eslint-config-google":"^0.9.1","eslint-config-standard":"^10.2.1","eslint-plugin-html":"^4.0.1","eslint-plugin-import":"^2.8.0","eslint-plugin-node":"^5.2.1","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^3.0.1","express":"^4.16.3","extract-text-webpack-plugin":"^2.0.0","file-loader":"^1.1.6","happypack":"^4.0.0","html-loader":"^0.5.4","html-webpack-plugin":"^2.28.0","less":"^3.8.1","less-loader":"^4.0.5","semver":"^5.4.1","shelljs":"^0.8.1","style-loader":"^0.19.1","unsupported":"^1.1.0","url-loader":"^0.6.2","vue-echarts":"^3.1.2","vue-hot-reload-api":"^2.2.4","vue-html-loader":"^1.2.3","vue-i18n":"^5.0.3","vue-loader":"^13.7.0","vue-style-loader":"^3.0.3","vue-template-compiler":"^2.5.13","webpack":"^2.5.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-dev-server":"^3.1.8","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0","webpack-uglify-parallel":"^0.1.4"},"engines":{"node":">= 4.0.0","npm":">= 3.0.0"},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}

/***/ })
],[174]);