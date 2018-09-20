webpackJsonp([5],{

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(939);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("8afb6570", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-488d9680\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-488d9680\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_488d9680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_488d9680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_488d9680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1288)
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_488d9680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/main/children/intelligence/detail/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-488d9680", Component.options)
  } else {
    hotAPI.reload("data-v-488d9680", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = exports.drop = exports.get = exports.makeUrlString = undefined;

var _stringify = __webpack_require__(93);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(94);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIPS_DURATION = 2;
var TIPS_INTERFACE_SUCCESS = '请求成功';
var TIPS_INTERFACE_ERROR = '接口获取数据失败，详情请查看控制台';

var makeUrlString = exports.makeUrlString = function makeUrlString(pathStr, paramObj) {

    var str = '';
    if ((typeof paramObj === 'undefined' ? 'undefined' : (0, _typeof3.default)(paramObj)) !== 'object') {
        return pathStr;
    }
    for (var key in paramObj) {
        str += key + '=' + encodeURIComponent(paramObj[key]) + '&';
    }
    var result = pathStr + '?' + str.replace(/&$/, '');
    return result;
};

var responseHandler = function responseHandler(response) {
    var successConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { msg: '', callback: null };
    var failConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { msg: '', callback: null };

    if (response.status === 0) {

        if (successConfig.callback) {
            return successConfig.callback(response.data);
        }
    } else {
        if (failConfig.callback) {
            return failConfig.callback(response.data);
        }
    }
};

var get = exports.get = function get(url, successConfig, failConfig) {
    return fetch(url, {
        method: 'GET',

        credentials: 'same-origin'
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        return responseHandler(data, successConfig, failConfig);
    }).catch(function (err) {
        console.log(err);
    });
};

var drop = exports.drop = function drop(url, successConfig, failConfig) {
    return fetch(url, {
        method: 'DELETE',

        credentials: 'same-origin'
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        return responseHandler(data, successConfig, failConfig);
    }).catch(function (err) {
        console.log(err);
    });
};

var post = exports.post = function post(url, bodyData, successConfig, failConfig) {
    var contentType = '';

    if (!(bodyData instanceof FormData)) {
        bodyData = (0, _stringify2.default)(bodyData);
        contentType = 'application/json';
    }
    return fetch(url, {
        method: 'POST',

        credentials: 'same-origin',
        headers: contentType ? new Headers({ 'content-type': contentType }) : {},
        body: bodyData
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        return responseHandler(data, successConfig, failConfig);
    }).catch(function (err) {
        console.log('catch error' + err);
    });
};

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            breadlist: [{ key: 'intelligence', name: '首页', url: '/#/intelligence' }, { key: 'search', name: '金融知识检索', url: '/#/intelligence/search' }, { key: 'detail', name: '详情', url: '/#/intelligence/detail' }, { key: 'forecast', name: '监管预测预警', url: '/#/intelligence/forecast' }],
            pagelist: []
        };
    },

    methods: {
        getBread: function getBread() {
            var _this = this;

            var breadlist = this.breadlist;
            this.$route.matched.forEach(function (item, index) {
                breadlist.forEach(function (page, list) {
                    if (page.key == item.name) {
                        _this.pagelist = _this.pagelist.concat(page);
                    }
                });
            });
        }
    },
    watch: {},
    created: function created() {
        this.getBread();
    }
};

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(281);

var getHotList = function getHotList(query, successConfig, failConfig) {
    var url = (0, _common.makeUrlString)('/bqd/api/query/hotspot', { offset: query.offset, count: query.count });
    return (0, _common.get)(url, successConfig, failConfig);
};
var getHistoryList = function getHistoryList(query, successConfig, failConfig) {
    var url = (0, _common.makeUrlString)('/bqd/api/query/history', { offset: query.offset, count: query.count });
    return (0, _common.get)(url, successConfig, failConfig);
};
var getPrediction = function getPrediction(query, successConfig, failConfig) {
    var url = (0, _common.makeUrlString)('/bqd/api/query/prediction', { type: query.type });
    return (0, _common.get)(url, successConfig, failConfig);
};


var getSearchData = function getSearchData(query, successConfig, failConfig) {
    var url = (0, _common.makeUrlString)('/bqd/api/query/knowledge', { keyWord: query.keyWord, dataType: query.dataType, offset: query.offset, count: query.count });
    return (0, _common.get)(url, successConfig, failConfig);
};
exports.default = {
    getHotList: getHotList,
    getHistoryList: getHistoryList,
    getPrediction: getPrediction,
    getSearchData: getSearchData
};

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ol", { staticClass: "breadcrumb" }, _vm._l(_vm.pagelist, function (page, list) {
    return _c("li", { key: list, staticClass: "breadcrumb-item" }, [_c("a", { attrs: { href: page.url } }, [_vm._v(_vm._s(page.name))])]);
  }));
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-fdbe2c3a", esExports);
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\n.breadcrumb {\n  margin: 24px 0 16px;\n  list-style: none;\n  font-size: 12px;\n}\n.breadcrumb .breadcrumb-item {\n  color: #BDBDBD;\n  display: inline-block;\n}\n.breadcrumb .breadcrumb-item a {\n  color: #BDBDBD;\n}\n.breadcrumb .breadcrumb-item:after {\n  content: \" > \";\n}\n.breadcrumb .breadcrumb-item:last-child {\n  color: #767676;\n}\n.breadcrumb .breadcrumb-item:last-child:after {\n  content: \"\";\n}\n.breadcrumb .breadcrumb-item:last-child a {\n  color: #767676;\n  cursor: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdbe2c3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdbe2c3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdbe2c3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(375)
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdbe2c3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/main/components/breadcrumb/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdbe2c3a", Component.options)
  } else {
    hotAPI.reload("data-v-fdbe2c3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("4bb8504d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fdbe2c3a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fdbe2c3a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(374);

var _index2 = _interopRequireDefault(_index);

var _intelligence = __webpack_require__(329);

var _intelligence2 = _interopRequireDefault(_intelligence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        breadcrumb: _index2.default
    },
    data: function data() {
        return {
            types: ['law', 'rule', 'business', 'risk', 'extend'],
            seachKeyWord: '',
            show: false,
            query: {
                offset: 0,
                count: 5,
                dataType: '',
                keyWord: ''
            },
            searchValues: {
                law: { name: '法律或监管规定：', data: { datas: [] } },
                rule: { name: '行内制度流程规定：', data: { datas: [] } },
                business: { name: '行内相关业务：', data: { datas: [] } },
                risk: { name: '风险提示：', data: { datas: [] } },
                extend: { name: '', data: { datas: [] } }
            }
        };
    },
    created: function created() {
        this.query.keyWord = this.$route.query.keyWord;
        this.query.dataType = this.$route.query.type;
    },
    mounted: function mounted() {
        this.getSearchData();
    },

    methods: {
        getSearchData: function getSearchData() {
            var _this2 = this;

            var _this = this;
            _intelligence2.default.getSearchData(this.query, {
                callback: function callback(data) {
                    _this2.searchValues[_this2.query.dataType].data = data;
                    _this.show = true;
                }
            });
        },
        emphasizeKey: function emphasizeKey(string, key) {
            var reg = new RegExp(key, "g");
            return string.replace(reg, '<span class="strong">' + key + '</span>');
        }
    }
};

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "detail-page" }, [_c("ol", { staticClass: "breadcrumb" }, [_vm._m(0), _vm._v(" "), _c("li", { staticClass: "breadcrumb-item" }, [_c("a", {
    attrs: {
      href: "/#/intelligence/result?keyWord=" + _vm.query.keyWord
    }
  }, [_vm._v("金融知识检索")])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", { staticClass: "detail-content" }, [_c("div", { staticClass: "detail-body" }, [_c("div", { staticClass: "title" }, [_vm._v(_vm._s(this.searchValues[this.query.dataType].name))]), _vm._v(" "), _vm._l(_vm.searchValues[_vm.query.dataType].data.datas, function (item, index) {
    return _vm.show ? _c("div", { staticClass: "value-item" }, [_c("div", {
      staticClass: "title",
      domProps: {
        innerHTML: _vm._s(index + 1 + ". " + _vm.emphasizeKey(item.title, _vm.query.keyWord))
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "content",
      domProps: {
        innerHTML: _vm._s(_vm.emphasizeKey(item.content, _vm.query.keyWord))
      }
    })]) : _vm._e();
  })], 2)])]);
};
var staticRenderFns = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { staticClass: "breadcrumb-item" }, [_c("a", { attrs: { href: "/#/" } }, [_vm._v("首页")])]);
}, function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { staticClass: "breadcrumb-item" }, [_c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("详情")])]);
}];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-488d9680", esExports);
  }
}

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\n.breadcrumb {\n  margin: 24px 0 16px;\n  list-style: none;\n  font-size: 12px;\n}\n.breadcrumb .breadcrumb-item {\n  color: #BDBDBD;\n  display: inline-block;\n}\n.breadcrumb .breadcrumb-item a {\n  color: #BDBDBD;\n}\n.breadcrumb .breadcrumb-item:after {\n  content: \" > \";\n}\n.breadcrumb .breadcrumb-item:last-child {\n  color: #767676;\n}\n.breadcrumb .breadcrumb-item:last-child:after {\n  content: \"\";\n}\n.breadcrumb .breadcrumb-item:last-child a {\n  color: #767676;\n  cursor: auto;\n}\n.detail-page {\n  width: 970px;\n  margin: 0 auto;\n}\n.detail-page .detail-content {\n  width: 100%;\n  margin-top: 10px;\n}\n.detail-page .detail-content .detail-body {\n  box-sizing: border-box;\n  background: #fff;\n  padding: 24px 16px;\n  width: 100%;\n  min-height: 500px;\n  margin-top: 10px;\n}\n.detail-page .detail-content .detail-body > .title {\n  padding-bottom: 16px;\n  border-bottom: 1px solid #F0F2F3;\n  font-size: 18px;\n  color: #333333;\n}\n.detail-page .detail-content .detail-body .value-item {\n  margin-top: 12px;\n}\n.detail-page .strong {\n  color: #E25555;\n}\n", ""]);

// exports


/***/ })

});