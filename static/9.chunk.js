webpackJsonp([9],{

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(951);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(30)("70da2a5a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9f66d4e8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9f66d4e8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f66d4e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f66d4e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f66d4e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1300)
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
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f66d4e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/main/children/intelligence/result/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f66d4e8", Component.options)
  } else {
    hotAPI.reload("data-v-9f66d4e8", Component.options)
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

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _intelligence = __webpack_require__(329);

var _intelligence2 = _interopRequireDefault(_intelligence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {},
    data: function data() {
        return {
            types: ['law', 'rule', 'business', 'risk', 'extend'],
            seachKeyWord: '',
            query: {
                offset: 0,
                count: 5,
                dataType: 'law',
                keyWord: ''
            },
            searchValues: {
                law: { data: { datas: [] } },
                rule: { data: { datas: [] } },
                business: { data: { datas: [] } },
                risk: { data: { datas: [] } },
                extend: { data: { datas: [] } }
            },
            historyOptions: {
                title: '历史查询内容',
                show: false,
                headers: [{ name: 'id', label: '序号' }, { name: 'keyWord', label: '标题' }, { name: 'queryTimeAlias', label: '查询时间' }]
            },
            hotpointOptions: {
                title: '热门推荐',
                show: false,
                headers: [{ name: 'id', label: '序号' }, { name: 'keyWord', label: '热点' }, { name: 'heat', label: '热度' }]
            },
            recommendData: null
        };
    },
    created: function created() {
        this.query.keyWord = this.$route.query.keyWord;
    },
    mounted: function mounted() {
        this.getSearchData();
    },

    computed: {
        getFullPath: function getFullPath() {
            return this.$route.path;
        }
    },
    route: {
        canReuse: false
    },
    watch: {
        '$route.query.keyWord': function $routeQueryKeyWord(keyWord) {
            this.query.keyWord = keyWord;
            this.getSearchData();
        }

    },
    methods: {
        getSearchData: function getSearchData() {
            var _this = this;

            this.types.forEach(function (type) {
                _this.query.dataType = type;
                _intelligence2.default.getSearchData(_this.query, {
                    callback: function callback(data) {
                        _this.searchValues[type].data = data;
                    }
                });
            });
        },
        emphasizeKey: function emphasizeKey(string, key) {
            var reg = new RegExp(key, "g");
            return string.replace(reg, '<span class="strong">' + key + '</span>');
        }
    }
};

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "result-page" }, [_vm._m(0), _vm._v(" "), _c("div", { staticClass: "result-content" }, [_c("div", { staticClass: "input-area" }, [_c("div", { staticClass: "result-inputbox" }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query.keyWord,
      expression: "query.keyWord"
    }],
    ref: "inputSearch",
    staticClass: "input result-input",
    attrs: { type: "text", placeholder: "请输入关键字" },
    domProps: { value: _vm.query.keyWord },
    on: {
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }
        _vm.$set(_vm.query, "keyWord", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "result-input-btn iconfont icon-SearchBox",
    attrs: { href: "javascript: void(0);" },
    on: {
      click: function click($event) {
        _vm.getSearchData();
      }
    }
  })])]), _vm._v(" "), _c("div", { staticClass: "result-body" }, [_c("div", { staticClass: "title" }, [_vm._v(_vm._s(this.query.keyWord))]), _vm._v(" "), _c("div", { staticClass: "card half" }, [_c("div", { staticClass: "label" }, [_vm._v("法律或监管规定：")]), _vm._v(" "), _c("div", { staticClass: "value" }, _vm._l(_vm.searchValues.law.data.datas, function (item, index) {
    return index < 3 ? _c("div", { staticClass: "value-item" }, [_c("div", {
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
  }))]), _vm._v(" "), _c("div", { staticClass: "card half" }, [_c("div", { staticClass: "label" }, [_vm._v("行内制度流程规定：")]), _vm._v(" "), _c("div", { staticClass: "value" }, _vm._l(_vm.searchValues.rule.data.datas, function (item, index) {
    return index < 3 ? _c("div", { staticClass: "value-item" }, [_c("div", {
      staticClass: "title",
      domProps: {
        innerHTML: _vm._s(index + 1 + ". " + _vm.emphasizeKey(item.title, _vm.query.keyWord))
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "content",
      domProps: {
        innerHTML: _vm._s(_vm.emphasizeKey(item.content, _vm.query.keyWord))
      }
    }), _vm._v(" "), 3 <= index + 1 ? _c("div", [_c("a", { staticClass: "search-details" }, [_vm._v("<...查看详情>")])]) : _vm._e()]) : _vm._e();
  }))]), _vm._v(" "), _c("div", { staticClass: "card " }, [_c("div", { staticClass: "label" }, [_vm._v("行内相关业务：")]), _vm._v(" "), _c("div", { staticClass: "value" }, _vm._l(_vm.searchValues.business.data.datas, function (item, index) {
    return index < 1 ? _c("div", { staticClass: "value-item" }, [_c("div", {
      staticClass: "title",
      domProps: {
        innerHTML: _vm._s(index + 1 + ". " + _vm.emphasizeKey(item.title, _vm.query.keyWord))
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "content",
      domProps: {
        innerHTML: _vm._s(_vm.emphasizeKey(item.content, _vm.query.keyWord))
      }
    }), _vm._v(" "), 1 < _vm.searchValues.business.data.datas.length ? _c("div", [_c("a", { staticClass: "search-details" }, [_vm._v("<...查看详情>")])]) : _vm._e()]) : _vm._e();
  }))]), _vm._v(" "), _c("div", { staticClass: "card " }, [_c("div", { staticClass: "label" }, [_vm._v("风险提示：")]), _vm._v(" "), _c("div", { staticClass: "value" }, _vm._l(_vm.searchValues.risk.data.datas, function (item, index) {
    return index < 1 ? _c("div", { staticClass: "value-item" }, [_c("div", {
      staticClass: "title",
      domProps: {
        innerHTML: _vm._s(index + 1 + ". " + _vm.emphasizeKey(item.title, _vm.query.keyWord))
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "content",
      domProps: {
        innerHTML: _vm._s(_vm.emphasizeKey(item.content, _vm.query.keyWord))
      }
    }), _vm._v(" "), 1 < _vm.searchValues.risk.data.datas.length ? _c("div", [_c("a", {
      staticClass: "search-details",
      attrs: {
        href: "/#/intelligence/detail?type=risk&keyWord=" + _vm.query.keyWord
      }
    }, [_vm._v("<...查看详情>")])]) : _vm._e()]) : _vm._e();
  }))]), _vm._v(" "), _c("div", { staticClass: "card " }, [_c("div", { staticClass: "label" }, [_vm._v("延伸阅读：")]), _vm._v(" "), _c("div", { staticClass: "value links" }, [_c("div", [_c("router-link", {
    staticClass: "link-item",
    attrs: { to: "/intelligence/result?keyWord=授信集中度" }
  }, [_vm._v("授信集中度")]), _vm._v(" "), _c("router-link", {
    staticClass: "link-item",
    attrs: { to: "/intelligence/result?keyWord=关联客户" }
  }, [_vm._v("关联客户")]), _vm._v(" "), _c("router-link", {
    staticClass: "link-item",
    attrs: { to: "/intelligence/result?keyWord=实际控制人" }
  }, [_vm._v("实际控制人")]), _vm._v(" "), _c("router-link", {
    staticClass: "link-item",
    attrs: { to: "/intelligence/result?keyWord=股权关系" }
  }, [_vm._v("股权关系")])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ol", { staticClass: "breadcrumb" }, [_c("li", { staticClass: "breadcrumb-item" }, [_c("a", { attrs: { href: "/#/intelligence/nav" } }, [_vm._v("首页")])]), _vm._v(" "), _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("金融知识检索")])]);
}];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-9f66d4e8", esExports);
  }
}

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "\n.breadcrumb {\n  margin: 24px 0 16px;\n  list-style: none;\n  font-size: 12px;\n}\n.breadcrumb .breadcrumb-item {\n  color: #BDBDBD;\n  display: inline-block;\n}\n.breadcrumb .breadcrumb-item a {\n  color: #BDBDBD;\n}\n.breadcrumb .breadcrumb-item:after {\n  content: \" > \";\n}\n.breadcrumb .breadcrumb-item:last-child {\n  color: #767676;\n}\n.breadcrumb .breadcrumb-item:last-child:after {\n  content: \"\";\n}\n.result-page {\n  width: 970px;\n  margin: 0 auto;\n}\n.result-page .result-content {\n  width: 100%;\n  margin-top: 10px;\n}\n.result-page .result-content .input-area {\n  background: #fff;\n  height: 96px;\n  padding: 24px 0 24px 16px;\n  text-align: left;\n}\n.result-page .result-content .input-area .result-inputbox {\n  position: relative;\n  background: #fff;\n  width: 720px;\n  height: 48px;\n  border: 1px solid #E3E3E3;\n  border-radius: 28px;\n  margin-bottom: 40px;\n}\n.result-page .result-content .input-area .result-inputbox .result-input {\n  display: block;\n  position: absolute;\n  top: 12px;\n  left: 30px;\n  width: 630px;\n  height: 24px;\n  border: none;\n  outline: medium;\n  font-size: 16px;\n}\n.result-page .result-content .input-area .result-inputbox .result-input::-webkit-input-placeholder {\n  color: #BDBDBD;\n}\n.result-page .result-content .input-area .result-inputbox .result-input:-moz-placeholder {\n  color: #BDBDBD;\n}\n.result-page .result-content .input-area .result-inputbox .result-input:-moz-placeholder {\n  color: #BDBDBD;\n}\n.result-page .result-content .input-area .result-inputbox .result-input:-ms-input-placeholder {\n  color: #BDBDBD;\n}\n.result-page .result-content .input-area .result-inputbox .result-input-btn {\n  position: absolute;\n  top: 2px;\n  right: 25px;\n  width: 24px;\n  height: 24px;\n  font-size: 30px;\n  color: #999;\n}\n.result-page .result-content .result-body {\n  box-sizing: border-box;\n  background: #fff;\n  padding: 24px 16px;\n  width: 100%;\n  margin-top: 10px;\n}\n.result-page .result-content .result-body > .title {\n  padding-bottom: 16px;\n  border-bottom: 1px solid #F0F2F3;\n  font-size: 18px;\n  color: #333333;\n}\n.result-page .result-content .result-body .card.half {\n  display: inline-block;\n  vertical-align: top;\n  width: 464px;\n}\n.result-page .result-content .result-body .card.half > .value {\n  height: 220px;\n}\n.result-page .result-content .result-body .card > .label {\n  padding: 28px 0;\n  font-size: 14px;\n  color: #333333;\n}\n.result-page .result-content .result-body .card > .value {\n  box-sizing: border-box;\n  width: 100%;\n  height: 86px;\n  padding: 16px;\n  border: 1px solid #E3E3E3;\n  overflow: hidden;\n}\n.result-page .result-content .result-body .card > .value > .value-item {\n  margin-bottom: 10px;\n}\n.result-page .result-content .result-body .card > .value > .value-item > .title {\n  font-weight: bold;\n}\n.result-page .result-content .result-body .card > .value .strong {\n  color: #E25555;\n}\n.result-page .result-content .result-body .card > .value .search-details {\n  color: #E25555;\n  cursor: pointer;\n}\n.result-page .result-content .result-body .card > .value.links {\n  height: 46px;\n}\n.result-page .result-content .result-body .card > .value.links .link-item {\n  font-size: 14px;\n  color: #D24545;\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ })

});