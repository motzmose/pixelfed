(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/compose"],{

/***/ "./node_modules/@trevoreyre/autocomplete-vue/dist/autocomplete.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@trevoreyre/autocomplete-vue/dist/autocomplete.esm.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

// Polyfill for element.matches, to support Internet Explorer. It's a relatively
// simple polyfill, so we'll just include it rather than require the user to
// include the polyfill themselves. Adapted from
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
var matches = function matches(element, selector) {
  return element.matches ? element.matches(selector) : element.msMatchesSelector ? element.msMatchesSelector(selector) : element.webkitMatchesSelector ? element.webkitMatchesSelector(selector) : null;
};

// Polyfill for element.closest, to support Internet Explorer. It's a relatively

var closestPolyfill = function closestPolyfill(el, selector) {
  var element = el;

  while (element && element.nodeType === 1) {
    if (matches(element, selector)) {
      return element;
    }

    element = element.parentNode;
  }

  return null;
};

var closest = function closest(element, selector) {
  return element.closest ? element.closest(selector) : closestPolyfill(element, selector);
};

// Returns true if the value has a "then" function. Adapted from
// https://github.com/graphql/graphql-js/blob/499a75939f70c4863d44149371d6a99d57ff7c35/src/jsutils/isPromise.js
var isPromise = function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
};

var AutocompleteCore = function AutocompleteCore() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      search = _ref.search,
      _ref$autoSelect = _ref.autoSelect,
      autoSelect = _ref$autoSelect === void 0 ? false : _ref$autoSelect,
      _ref$setValue = _ref.setValue,
      setValue = _ref$setValue === void 0 ? function () {} : _ref$setValue,
      _ref$setAttribute = _ref.setAttribute,
      setAttribute = _ref$setAttribute === void 0 ? function () {} : _ref$setAttribute,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
      _ref$onShow = _ref.onShow,
      onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      _ref$onLoading = _ref.onLoading,
      onLoading = _ref$onLoading === void 0 ? function () {} : _ref$onLoading,
      _ref$onLoaded = _ref.onLoaded,
      onLoaded = _ref$onLoaded === void 0 ? function () {} : _ref$onLoaded;

  _classCallCheck(this, AutocompleteCore);

  _defineProperty(this, "value", '');

  _defineProperty(this, "searchCounter", 0);

  _defineProperty(this, "results", []);

  _defineProperty(this, "selectedIndex", -1);

  _defineProperty(this, "handleInput", function (event) {
    var value = event.target.value;

    _this.updateResults(value);

    _this.value = value;
  });

  _defineProperty(this, "handleKeyDown", function (event) {
    var key = event.key;

    switch (key) {
      case 'Up': // IE/Edge

      case 'Down': // IE/Edge

      case 'ArrowUp':
      case 'ArrowDown':
        {
          var selectedIndex = key === 'ArrowUp' || key === 'Up' ? _this.selectedIndex - 1 : _this.selectedIndex + 1;
          event.preventDefault();

          _this.handleArrows(selectedIndex);

          break;
        }

      case 'Tab':
        {
          _this.selectResult();

          break;
        }

      case 'Enter':
        {
          var selectedResult = _this.results[_this.selectedIndex];

          _this.selectResult();

          _this.onSubmit(selectedResult);

          break;
        }

      case 'Esc': // IE/Edge

      case 'Escape':
        {
          _this.hideResults();

          _this.setValue();

          break;
        }

      default:
        return;
    }
  });

  _defineProperty(this, "handleFocus", function (event) {
    var value = event.target.value;

    _this.updateResults(value);

    _this.value = value;
  });

  _defineProperty(this, "handleBlur", function () {
    _this.hideResults();
  });

  _defineProperty(this, "handleResultMouseDown", function (event) {
    event.preventDefault();
  });

  _defineProperty(this, "handleResultClick", function (event) {
    var target = event.target;
    var result = closest(target, '[data-result-index]');

    if (result) {
      _this.selectedIndex = parseInt(result.dataset.resultIndex, 10);
      var selectedResult = _this.results[_this.selectedIndex];

      _this.selectResult();

      _this.onSubmit(selectedResult);
    }
  });

  _defineProperty(this, "handleArrows", function (selectedIndex) {
    // Loop selectedIndex back to first or last result if out of bounds
    var resultsCount = _this.results.length;
    _this.selectedIndex = (selectedIndex % resultsCount + resultsCount) % resultsCount; // Update results and aria attributes

    _this.onUpdate(_this.results, _this.selectedIndex);
  });

  _defineProperty(this, "selectResult", function () {
    var selectedResult = _this.results[_this.selectedIndex];

    if (selectedResult) {
      _this.setValue(selectedResult);
    }

    _this.hideResults();
  });

  _defineProperty(this, "updateResults", function (value) {
    var currentSearch = ++_this.searchCounter;

    _this.onLoading();

    _this.search(value).then(function (results) {
      if (currentSearch !== _this.searchCounter) {
        return;
      }

      _this.results = results;

      _this.onLoaded();

      if (_this.results.length === 0) {
        _this.hideResults();

        return;
      }

      _this.selectedIndex = _this.autoSelect ? 0 : -1;

      _this.onUpdate(_this.results, _this.selectedIndex);

      _this.showResults();
    });
  });

  _defineProperty(this, "showResults", function () {
    _this.setAttribute('aria-expanded', true);

    _this.onShow();
  });

  _defineProperty(this, "hideResults", function () {
    _this.selectedIndex = -1;
    _this.results = [];

    _this.setAttribute('aria-expanded', false);

    _this.setAttribute('aria-activedescendant', '');

    _this.onUpdate(_this.results, _this.selectedIndex);

    _this.onHide();
  });

  _defineProperty(this, "checkSelectedResultVisible", function (resultsElement) {
    var selectedResultElement = resultsElement.querySelector("[data-result-index=\"".concat(_this.selectedIndex, "\"]"));

    if (!selectedResultElement) {
      return;
    }

    var resultsPosition = resultsElement.getBoundingClientRect();
    var selectedPosition = selectedResultElement.getBoundingClientRect();

    if (selectedPosition.top < resultsPosition.top) {
      // Element is above viewable area
      resultsElement.scrollTop -= resultsPosition.top - selectedPosition.top;
    } else if (selectedPosition.bottom > resultsPosition.bottom) {
      // Element is below viewable area
      resultsElement.scrollTop += selectedPosition.bottom - resultsPosition.bottom;
    }
  });

  this.search = isPromise(search) ? search : function (value) {
    return Promise.resolve(search(value));
  };
  this.autoSelect = autoSelect;
  this.setValue = setValue;
  this.setAttribute = setAttribute;
  this.onUpdate = onUpdate;
  this.onSubmit = onSubmit;
  this.onShow = onShow;
  this.onHide = onHide;
  this.onLoading = onLoading;
  this.onLoaded = onLoaded;
};

// Generates a unique ID, with optional prefix. Adapted from
// https://github.com/lodash/lodash/blob/61acdd0c295e4447c9c10da04e287b1ebffe452c/uniqueId.js
var idCounter = 0;

var uniqueId = function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(prefix).concat(++idCounter);
};

// Calculates whether element2 should be above or below element1. Always
// places element2 below unless all of the following:
// 1. There isn't enough visible viewport below to fit element2
// 2. There is more room above element1 than there is below
// 3. Placing elemen2 above 1 won't overflow window
var getRelativePosition = function getRelativePosition(element1, element2) {
  var position1 = element1.getBoundingClientRect();
  var position2 = element2.getBoundingClientRect();
  var positionAbove =
  /* 1 */
  position1.bottom + position2.height > window.innerHeight &&
  /* 2 */
  window.innerHeight - position1.bottom < position1.top &&
  /* 3 */
  window.pageYOffset + position1.top - position2.height > 0;
  return positionAbove ? 'above' : 'below';
};

// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var script = {
  name: 'Autocomplete',
  inheritAttrs: false,
  props: {
    search: {
      type: Function,
      required: true
    },
    baseClass: {
      type: String,
      "default": 'autocomplete'
    },
    autoSelect: {
      type: Boolean,
      "default": false
    },
    getResultValue: {
      type: Function,
      "default": function _default(result) {
        return result;
      }
    },
    defaultValue: {
      type: String,
      "default": ''
    },
    debounceTime: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    var core = new AutocompleteCore({
      search: this.search,
      autoSelect: this.autoSelect,
      setValue: this.setValue,
      onUpdate: this.handleUpdate,
      onSubmit: this.handleSubmit,
      onShow: this.handleShow,
      onHide: this.handleHide,
      onLoading: this.handleLoading,
      onLoaded: this.handleLoaded
    });

    if (this.debounceTime > 0) {
      core.handleInput = debounce(core.handleInput, this.debounceTime);
    }

    return {
      core: core,
      value: this.defaultValue,
      resultListId: uniqueId("".concat(this.baseClass, "-result-list-")),
      results: [],
      selectedIndex: -1,
      expanded: false,
      loading: false,
      position: 'below',
      resetPosition: true
    };
  },
  computed: {
    rootProps: function rootProps() {
      return {
        "class": this.baseClass,
        style: {
          position: 'relative'
        },
        'data-expanded': this.expanded,
        'data-loading': this.loading,
        'data-position': this.position
      };
    },
    inputProps: function inputProps() {
      return _objectSpread2({
        "class": "".concat(this.baseClass, "-input"),
        value: this.value,
        role: 'combobox',
        autocomplete: 'off',
        autocapitalize: 'off',
        autocorrect: 'off',
        spellcheck: 'false',
        'aria-autocomplete': 'list',
        'aria-haspopup': 'listbox',
        'aria-owns': this.resultListId,
        'aria-expanded': this.expanded ? 'true' : 'false',
        'aria-activedescendant': this.selectedIndex > -1 ? this.resultProps[this.selectedIndex].id : ''
      }, this.$attrs);
    },
    inputListeners: function inputListeners() {
      return {
        input: this.handleInput,
        keydown: this.core.handleKeyDown,
        focus: this.core.handleFocus,
        blur: this.core.handleBlur
      };
    },
    resultListProps: function resultListProps() {
      var yPosition = this.position === 'below' ? 'top' : 'bottom';
      return {
        id: this.resultListId,
        "class": "".concat(this.baseClass, "-result-list"),
        role: 'listbox',
        style: _defineProperty({
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          visibility: this.expanded ? 'visible' : 'hidden',
          pointerEvents: this.expanded ? 'auto' : 'none'
        }, yPosition, '100%')
      };
    },
    resultListListeners: function resultListListeners() {
      return {
        mousedown: this.core.handleResultMouseDown,
        click: this.core.handleResultClick
      };
    },
    resultProps: function resultProps() {
      var _this = this;

      return this.results.map(function (result, index) {
        return _objectSpread2({
          id: "".concat(_this.baseClass, "-result-").concat(index),
          "class": "".concat(_this.baseClass, "-result"),
          'data-result-index': index,
          role: 'option'
        }, _this.selectedIndex === index ? {
          'aria-selected': 'true'
        } : {});
      });
    }
  },
  mounted: function mounted() {
    document.body.addEventListener('click', this.handleDocumentClick);
  },
  beforeDestroy: function beforeDestroy() {
    document.body.removeEventListener('click', this.handleDocumentClick);
  },
  updated: function updated() {
    if (!this.$refs.input || !this.$refs.resultList) {
      return;
    }

    if (this.resetPosition && this.results.length > 0) {
      this.resetPosition = false;
      this.position = getRelativePosition(this.$refs.input, this.$refs.resultList);
    }

    this.core.checkSelectedResultVisible(this.$refs.resultList);
  },
  methods: {
    setValue: function setValue(result) {
      this.value = result ? this.getResultValue(result) : '';
    },
    handleUpdate: function handleUpdate(results, selectedIndex) {
      this.results = results;
      this.selectedIndex = selectedIndex;
      this.$emit('update', results, selectedIndex);
    },
    handleShow: function handleShow() {
      this.expanded = true;
    },
    handleHide: function handleHide() {
      this.expanded = false;
      this.resetPosition = true;
    },
    handleLoading: function handleLoading() {
      this.loading = true;
    },
    handleLoaded: function handleLoaded() {
      this.loading = false;
    },
    handleInput: function handleInput(event) {
      this.value = event.target.value;
      this.core.handleInput(event);
    },
    handleSubmit: function handleSubmit(selectedResult) {
      this.$emit('submit', selectedResult);
    },
    handleDocumentClick: function handleDocumentClick(event) {
      if (this.$refs.root.contains(event.target)) {
        return;
      }

      this.core.hideResults();
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"root"},[_vm._t("default",[_c('div',_vm._b({},'div',_vm.rootProps,false),[_c('input',_vm._g(_vm._b({ref:"input",on:{"input":_vm.handleInput,"keydown":_vm.core.handleKeyDown,"focus":_vm.core.handleFocus,"blur":_vm.core.handleBlur}},'input',_vm.inputProps,false),_vm.$listeners)),_vm._v(" "),_c('ul',_vm._g(_vm._b({ref:"resultList"},'ul',_vm.resultListProps,false),_vm.resultListListeners),[_vm._l((_vm.results),function(result,index){return [_vm._t("result",[_c('li',_vm._b({key:_vm.resultProps[index].id},'li',_vm.resultProps[index],false),[_vm._v("\n              "+_vm._s(_vm.getResultValue(result))+"\n            ")])],{"result":result,"props":_vm.resultProps[index]})]})],2)])],{"rootProps":_vm.rootProps,"inputProps":_vm.inputProps,"inputListeners":_vm.inputListeners,"resultListProps":_vm.resultListProps,"resultListListeners":_vm.resultListListeners,"results":_vm.results,"resultProps":_vm.resultProps})],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;
  Vue.component('Autocomplete', __vue_component__);
}

var plugin = {
  install: install
}; // Auto install if Vue is found

var GlobalVue;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Inject install function into component. Allows component to be registered via
// Vue.use() as well as Vue.component()


__vue_component__.install = install;

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@trevoreyre/autocomplete-vue/dist/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/@trevoreyre/autocomplete-vue/dist/style.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--10-1!../../../postcss-loader/src??ref--10-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@trevoreyre/autocomplete-vue/dist/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trevoreyre_autocomplete_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trevoreyre/autocomplete-vue */ "./node_modules/@trevoreyre/autocomplete-vue/dist/autocomplete.esm.js");
/* harmony import */ var _trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trevoreyre/autocomplete-vue/dist/style.css */ "./node_modules/@trevoreyre/autocomplete-vue/dist/style.css");
/* harmony import */ var _trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_tribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-tribute */ "./node_modules/vue-tribute/dist/vue-tribute.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a,
    Autocomplete: _trevoreyre_autocomplete_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueTribute: vue_tribute__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      config: window.App.config,
      pageLoading: false,
      profile: window._sharedData.curUser,
      composeText: '',
      composeTextLength: 0,
      nsfw: false,
      filters: [],
      currentFilter: false,
      ids: [],
      media: [],
      carouselCursor: 0,
      uploading: false,
      uploadProgress: 100,
      mode: 'photo',
      modes: ['photo', 'video', 'plain'],
      page: 1,
      composeState: 'publish',
      visibility: 'public',
      visibilityTag: 'Public',
      place: false,
      commentsDisabled: false,
      optimizeMedia: true,
      mediaCropped: false,
      pageTitle: '',
      cropper: {
        aspectRatio: 1,
        viewMode: 1,
        zoomable: true,
        zoom: 0
      },
      namedPages: ['cropPhoto', 'tagPeople', 'addLocation', 'advancedSettings', 'visibility', 'altText', 'addToCollection', 'schedulePost', 'mediaMetadata', 'addToStory', 'editMedia', 'cameraRoll', 'tagPeopleHelp', 'textOptions', 'licensePicker'],
      cameraRollMedia: [],
      taggedUsernames: [],
      taggedPeopleSearch: null,
      textMode: false,
      tributeSettings: {
        collection: [{
          trigger: '@',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/mention';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          trigger: '#',
          menuShowMinLength: 2,
          values: function values(text, cb) {
            var url = '/api/compose/v0/search/hashtag';
            axios.get(url, {
              params: {
                q: text
              }
            }).then(function (res) {
              cb(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]
      },
      availableLicenses: [{
        id: 1,
        name: "All Rights Reserved",
        title: ""
      }, {
        id: 5,
        name: "Public Domain Work",
        title: ""
      }, {
        id: 6,
        name: "Public Domain Dedication (CC0)",
        title: "CC0"
      }, {
        id: 11,
        name: "Attribution",
        title: "CC BY"
      }, {
        id: 12,
        name: "Attribution-ShareAlike",
        title: "CC BY-SA"
      }, {
        id: 13,
        name: "Attribution-NonCommercial",
        title: "CC BY-NC"
      }, {
        id: 14,
        name: "Attribution-NonCommercial-ShareAlike",
        title: "CC BY-NC-SA"
      }, {
        id: 15,
        name: "Attribution-NoDerivs",
        title: "CC BY-ND"
      }, {
        id: 16,
        name: "Attribution-NonCommercial-NoDerivs",
        title: "CC BY-NC-ND"
      }],
      licenseIndex: 0,
      video: {
        title: '',
        description: ''
      },
      composeSettings: {
        default_license: null,
        media_descriptions: false
      },
      licenseId: 1,
      licenseTitle: null,
      maxAltTextLength: 140,
      pollOptionModel: null,
      pollOptions: [],
      pollExpiry: 1440,
      postingPoll: false
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this.fetchProfile();
    this.filters = window.App.util.filters;
    axios.get('/api/compose/v0/settings').then(function (res) {
      _this.composeSettings = res.data;
      _this.licenseId = _this.composeSettings.default_license;
      _this.maxAltTextLength = res.data.max_altext_length;

      if (_this.licenseId > 10) {
        _this.licenseTitle = _this.availableLicenses.filter(function (l) {
          return l.id == _this.licenseId;
        }).map(function (l) {
          return l.title;
        })[0];
      }
    });
  },
  mounted: function mounted() {
    this.mediaWatcher();
  },
  methods: {
    fetchProfile: function fetchProfile() {
      var _this2 = this;

      if (window._sharedData.curUser.id) {
        this.profile = window._sharedData.curUser;

        if (this.profile.locked == true) {
          this.visibility = 'private';
          this.visibilityTag = 'Followers Only';
        }
      } else {
        axios.get('/api/pixelfed/v1/accounts/verify_credentials').then(function (res) {
          window._sharedData.currentUser = res.data;
          _this2.profile = res.data;

          if (_this2.profile.locked == true) {
            _this2.visibility = 'private';
            _this2.visibilityTag = 'Followers Only';
          }
        })["catch"](function (err) {});
      }
    },
    addMedia: function addMedia(event) {
      var el = $(event.target);
      el.attr('disabled', '');
      var fi = $('.file-input[name="media"]');
      fi.trigger('click');
      el.blur();
      el.removeAttr('disabled');
    },
    addText: function addText(event) {
      this.pageTitle = 'New Text Post';
      this.page = 'addText';
      this.textMode = true;
      this.mode = 'text';
    },
    mediaWatcher: function mediaWatcher() {
      var self = this;
      $(document).on('change', '#pf-dz', function (e) {
        self.mediaUpload();
      });
    },
    mediaUpload: function mediaUpload() {
      var self = this;
      self.uploading = true;
      var io = document.querySelector('#pf-dz');

      if (!io.files.length) {
        self.uploading = false;
      }

      Array.prototype.forEach.call(io.files, function (io, i) {
        if (self.media && self.media.length + i >= self.config.uploader.album_limit) {
          swal('Error', 'You can only upload ' + self.config.uploader.album_limit + ' photos per album', 'error');
          self.uploading = false;
          self.page = 2;
          return;
        }

        var type = io.type;
        var acceptedMimes = self.config.uploader.media_types.split(',');
        var validated = $.inArray(type, acceptedMimes);

        if (validated == -1) {
          swal('Invalid File Type', 'The file you are trying to add is not a valid mime type. Please upload a ' + self.config.uploader.media_types + ' only.', 'error');
          self.uploading = false;
          self.page = 2;
          return;
        }

        var form = new FormData();
        form.append('file', io);
        var xhrConfig = {
          onUploadProgress: function onUploadProgress(e) {
            var progress = Math.round(e.loaded * 100 / e.total);
            self.uploadProgress = progress;
          }
        };
        axios.post('/api/compose/v0/media/upload', form, xhrConfig).then(function (e) {
          self.uploadProgress = 100;
          self.ids.push(e.data.id);
          self.media.push(e.data);
          self.uploading = false;
          setTimeout(function () {
            // if(type === 'video/mp4') {
            // 	self.pageTitle = 'Edit Video Details';
            // 	self.mode = 'video';
            // 	self.page = 'video-2';
            // } else {
            // 	self.page = 2;
            // }
            self.page = 3;
          }, 300);
        })["catch"](function (e) {
          switch (e.response.status) {
            case 451:
              self.uploading = false;
              io.value = null;
              swal('Banned Content', 'This content has been banned and cannot be uploaded.', 'error');
              self.page = 2;
              break;

            case 429:
              self.uploading = false;
              io.value = null;
              swal('Limit Reached', 'You can upload up to 250 photos or videos per day and you\'ve reached that limit. Please try again later.', 'error');
              self.page = 2;
              break;

            default:
              self.uploading = false;
              io.value = null;
              swal('Oops, something went wrong!', 'An unexpected error occurred.', 'error');
              self.page = 2;
              break;
          }
        });
        io.value = null;
        self.uploadProgress = 0;
      });
    },
    toggleFilter: function toggleFilter(e, filter) {
      this.media[this.carouselCursor].filter_class = filter;
      this.currentFilter = filter;
    },
    deleteMedia: function deleteMedia() {
      var _this3 = this;

      if (window.confirm('Are you sure you want to delete this media?') == false) {
        return;
      }

      var id = this.media[this.carouselCursor].id;
      axios["delete"]('/api/compose/v0/media/delete', {
        params: {
          id: id
        }
      }).then(function (res) {
        _this3.ids.splice(_this3.carouselCursor, 1);

        _this3.media.splice(_this3.carouselCursor, 1);

        if (_this3.media.length == 0) {
          _this3.ids = [];
          _this3.media = [];
          _this3.carouselCursor = 0;
        } else {
          _this3.carouselCursor = 0;
        }
      })["catch"](function (err) {
        swal('Whoops!', 'An error occured when attempting to delete this, please try again', 'error');
      });
    },
    compose: function compose() {
      var state = this.composeState;

      if (this.uploadProgress != 100 || this.ids.length == 0) {
        return;
      }

      if (this.composeText.length > this.config.uploader.max_caption_length) {
        swal('Error', 'Caption is too long', 'error');
        return;
      }

      switch (state) {
        case 'publish':
          if (this.composeSettings.media_descriptions === true) {
            var count = this.media.filter(function (m) {
              return !m.hasOwnProperty('alt') || m.alt.length < 2;
            });

            if (count.length) {
              swal('Missing media descriptions', 'You have enabled mandatory media descriptions. Please add media descriptions under Advanced settings to proceed. For more information, please see the media settings page.', 'warning');
              return;
            }
          }

          if (this.media.length == 0) {
            swal('Whoops!', 'You need to add media before you can save this!', 'warning');
            return;
          }

          if (this.composeText == 'Add optional caption...') {
            this.composeText = '';
          }

          var data = {
            media: this.media,
            caption: this.composeText,
            visibility: this.visibility,
            cw: this.nsfw,
            comments_disabled: this.commentsDisabled,
            place: this.place,
            tagged: this.taggedUsernames,
            optimize_media: this.optimizeMedia,
            license: this.licenseId,
            video: this.video
          };
          axios.post('/api/compose/v0/publish', data).then(function (res) {
            var data = res.data;
            window.location.href = data;
          })["catch"](function (err) {
            var msg = err.response.data.message ? err.response.data.message : 'An unexpected error occured.';
            swal('Oops, something went wrong!', msg, 'error');
          });
          return;
          break;

        case 'delete':
          this.ids = [];
          this.media = [];
          this.carouselCursor = 0;
          this.composeText = '';
          this.composeTextLength = 0;
          $('#composeModal').modal('hide');
          return;
          break;
      }
    },
    composeTextPost: function composeTextPost() {
      var state = this.composeState;

      if (this.composeText.length > this.config.uploader.max_caption_length) {
        swal('Error', 'Caption is too long', 'error');
        return;
      }

      switch (state) {
        case 'publish':
          var data = {
            caption: this.composeText,
            visibility: this.visibility,
            cw: this.nsfw,
            comments_disabled: this.commentsDisabled,
            place: this.place,
            tagged: this.taggedUsernames
          };
          axios.post('/api/compose/v0/publish/text', data).then(function (res) {
            var data = res.data;
            window.location.href = data;
          })["catch"](function (err) {
            var msg = err.response.data.message ? err.response.data.message : 'An unexpected error occured.';
            swal('Oops, something went wrong!', msg, 'error');
          });
          return;
          break;

        case 'delete':
          this.ids = [];
          this.media = [];
          this.carouselCursor = 0;
          this.composeText = '';
          this.composeTextLength = 0;
          $('#composeModal').modal('hide');
          return;
          break;
      }
    },
    closeModal: function closeModal() {
      $('#composeModal').modal('hide');
    },
    goBack: function goBack() {
      this.pageTitle = '';

      switch (this.mode) {
        case 'photo':
          switch (this.page) {
            case 'addText':
              this.page = 1;
              break;

            case 'textOptions':
              this.page = 'addText';
              break;

            case 'cropPhoto':
            case 'editMedia':
              this.page = 2;
              break;

            case 'tagPeopleHelp':
              this.showTagCard();
              break;

            case 'licensePicker':
              this.page = 3;
              break;

            case 'video-2':
              this.page = 1;
              break;

            default:
              this.namedPages.indexOf(this.page) != -1 ? this.page = 3 : this.page--;
              break;
          }

          break;

        case 'video':
          switch (this.page) {
            case 'licensePicker':
              this.page = 'video-2';
              break;

            case 'video-2':
              this.page = 'video-2';
              break;

            default:
              this.page = 'video-2';
              break;
          }

          break;

        default:
          switch (this.page) {
            case 'addText':
              this.page = 1;
              break;

            case 'textOptions':
              this.page = 'addText';
              break;

            case 'cropPhoto':
            case 'editMedia':
              this.page = 2;
              break;

            case 'tagPeopleHelp':
              this.showTagCard();
              break;

            case 'licensePicker':
              this.page = 3;
              break;

            case 'video-2':
              this.page = 1;
              break;

            default:
              this.namedPages.indexOf(this.page) != -1 ? this.page = this.mode == 'text' ? 'addText' : 3 : this.mode == 'text' ? 'addText' : this.page--;
              break;
          }

          break;
      }
    },
    nextPage: function nextPage() {
      this.pageTitle = '';

      switch (this.page) {
        case 1:
          this.page = 2;
          break;

        case 'cropPhoto':
          this.pageLoading = true;
          var self = this;
          this.$refs.cropper.getCroppedCanvas({
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high'
          }).toBlob(function (blob) {
            self.mediaCropped = true;
            var data = new FormData();
            data.append('file', blob);
            data.append('id', self.ids[self.carouselCursor]);
            var url = '/api/compose/v0/media/update';
            axios.post(url, data).then(function (res) {
              self.media[self.carouselCursor].url = res.data.url;
              self.pageLoading = false;
              self.page = 2;
            })["catch"](function (err) {});
          });
          break;

        case 2:
          if (this.currentFilter) {
            if (window.confirm('Are you sure you want to apply this filter?')) {
              this.applyFilterToMedia();
              this.page++;
            }
          } else {
            this.page++;
          }

          break;

        case 3:
          this.page++;
          break;
      }
    },
    rotate: function rotate() {
      this.$refs.cropper.rotate(90);
    },
    changeAspect: function changeAspect(ratio) {
      this.cropper.aspectRatio = ratio;
      this.$refs.cropper.setAspectRatio(ratio);
    },
    showTagCard: function showTagCard() {
      this.pageTitle = 'Tag People';
      this.page = 'tagPeople';
    },
    showTagHelpCard: function showTagHelpCard() {
      this.pageTitle = 'About Tag People';
      this.page = 'tagPeopleHelp';
    },
    showLocationCard: function showLocationCard() {
      this.pageTitle = 'Add Location';
      this.page = 'addLocation';
    },
    showAdvancedSettingsCard: function showAdvancedSettingsCard() {
      this.pageTitle = 'Advanced Settings';
      this.page = 'advancedSettings';
    },
    locationSearch: function locationSearch(input) {
      if (input.length < 1) {
        return [];
      }

      ;
      var results = [];
      return axios.get('/api/compose/v0/search/location', {
        params: {
          q: input
        }
      }).then(function (res) {
        return res.data;
      });
    },
    getResultValue: function getResultValue(result) {
      return result.name + ', ' + result.country;
    },
    onSubmitLocation: function onSubmitLocation(result) {
      this.place = result;

      switch (this.mode) {
        case 'photo':
          this.pageTitle = '';
          this.page = 3;
          break;

        case 'video':
          this.pageTitle = 'Edit Video Details';
          this.page = 'video-2';
          break;

        case 'text':
          this.pageTitle = 'New Text Post';
          this.page = 'addText';
          break;
      }

      return;
    },
    showVisibilityCard: function showVisibilityCard() {
      this.pageTitle = 'Post Visibility';
      this.page = 'visibility';
    },
    showAddToStoryCard: function showAddToStoryCard() {
      this.pageTitle = 'Add to Story';
      this.page = 'addToStory';
    },
    showCropPhotoCard: function showCropPhotoCard() {
      this.pageTitle = 'Edit Photo';
      this.page = 'cropPhoto';
    },
    toggleVisibility: function toggleVisibility(state) {
      var tags = {
        "public": 'Public',
        "private": 'Followers Only',
        unlisted: 'Unlisted'
      };
      this.visibility = state;
      this.visibilityTag = tags[state];

      switch (this.mode) {
        case 'photo':
          this.pageTitle = '';
          this.page = 3;
          break;

        case 'video':
          this.pageTitle = 'Edit Video Details';
          this.page = 'video-2';
          break;

        case 'text':
          this.pageTitle = 'New Text Post';
          this.page = 'addText';
          break;
      }
    },
    showMediaDescriptionsCard: function showMediaDescriptionsCard() {
      this.pageTitle = 'Media Descriptions';
      this.page = 'altText';
    },
    showAddToCollectionsCard: function showAddToCollectionsCard() {
      this.pageTitle = 'Add to Collection';
      this.page = 'addToCollection';
    },
    showSchedulePostCard: function showSchedulePostCard() {
      this.pageTitle = 'Schedule Post';
      this.page = 'schedulePost';
    },
    showEditMediaCard: function showEditMediaCard() {
      this.pageTitle = 'Edit Media';
      this.page = 'editMedia';
    },
    fetchCameraRollDrafts: function fetchCameraRollDrafts() {
      var _this4 = this;

      axios.get('/api/pixelfed/local/drafts').then(function (res) {
        _this4.cameraRollMedia = res.data;
      });
    },
    applyFilterToMedia: function applyFilterToMedia() {
      // this is where the magic happens
      var ua = navigator.userAgent.toLowerCase();

      if (ua.indexOf('firefox') == -1 && ua.indexOf('chrome') == -1) {
        swal('Oops!', 'Your browser does not support the filter feature.', 'error');
        return;
      }

      var medias = this.media;
      var media = null;
      var canvas = document.getElementById('pr_canvas');
      var ctx = canvas.getContext('2d');
      var image = document.getElementById('pr_img');
      var blob = null;
      var data = null;

      for (var i = medias.length - 1; i >= 0; i--) {
        media = medias[i];

        if (media.filter_class) {
          image.src = media.url;
          image.addEventListener('load', function (e) {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.filter = App.util.filterCss[media.filter_class];
            ctx.drawImage(image, 0, 0, image.width, image.height);
            ctx.save();
            canvas.toBlob(function (blob) {
              data = new FormData();
              data.append('file', blob);
              data.append('id', media.id);
              axios.post('/api/compose/v0/media/update', data).then(function (res) {})["catch"](function (err) {});
            });
          }, media.mime, 0.9);
          ctx.clearRect(0, 0, image.width, image.height);
        }
      }
    },
    tagSearch: function tagSearch(input) {
      if (input.length < 1) {
        return [];
      }

      ;
      var self = this;
      var results = [];
      return axios.get('/api/compose/v0/search/tag', {
        params: {
          q: input
        }
      }).then(function (res) {
        if (!res.data.length) {
          return;
        }

        return res.data.filter(function (d) {
          return self.taggedUsernames.filter(function (r) {
            return r.id == d.id;
          }).length == 0;
        });
      });
    },
    getTagResultValue: function getTagResultValue(result) {
      return '@' + result.name;
    },
    onTagSubmitLocation: function onTagSubmitLocation(result) {
      if (this.taggedUsernames.filter(function (r) {
        return r.id == result.id;
      }).length) {
        return;
      }

      this.taggedUsernames.push(result);
      this.$refs.autocomplete.value = '';
      return;
    },
    untagUsername: function untagUsername(index) {
      this.taggedUsernames.splice(index, 1);
    },
    showTextOptions: function showTextOptions() {
      this.page = 'textOptions';
      this.pageTitle = 'Text Post Options';
    },
    showLicenseCard: function showLicenseCard() {
      this.pageTitle = 'Select a License';
      this.page = 'licensePicker';
    },
    toggleLicense: function toggleLicense(license) {
      var _this5 = this;

      this.licenseId = license.id;

      if (this.licenseId > 10) {
        this.licenseTitle = this.availableLicenses.filter(function (l) {
          return l.id == _this5.licenseId;
        }).map(function (l) {
          return l.title;
        })[0];
      } else {
        this.licenseTitle = null;
      }

      switch (this.mode) {
        case 'photo':
          this.pageTitle = '';
          this.page = 3;
          break;

        case 'video':
          this.pageTitle = 'Edit Video Details';
          this.page = 'video-2';
          break;

        case 'text':
          this.pageTitle = 'New Text Post';
          this.page = 'addText';
          break;
      }
    },
    newPoll: function newPoll() {
      this.page = 'poll';
    },
    savePollOption: function savePollOption() {
      if (this.pollOptions.indexOf(this.pollOptionModel) != -1) {
        this.pollOptionModel = null;
        return;
      }

      this.pollOptions.push(this.pollOptionModel);
      this.pollOptionModel = null;
    },
    deletePollOption: function deletePollOption(index) {
      this.pollOptions.splice(index, 1);
    },
    postNewPoll: function postNewPoll() {
      var _this6 = this;

      this.postingPoll = true;
      axios.post('/api/compose/v0/poll', {
        caption: this.composeText,
        cw: false,
        visibility: this.visibility,
        comments_disabled: false,
        expiry: this.pollExpiry,
        pollOptions: this.pollOptions
      }).then(function (res) {
        if (!res.data.hasOwnProperty('url')) {
          swal('Oops!', 'An error occured while attempting to create this poll. Please refresh the page and try again.', 'error');
          _this6.postingPoll = false;
          return;
        }

        window.location.href = res.data.url;
      })["catch"](function (err) {
        console.log(err.response.data.error);

        if (err.response.data.hasOwnProperty('error')) {
          if (err.response.data.error == 'Duplicate detected.') {
            _this6.postingPoll = false;
            swal('Oops!', 'The poll you are trying to create is similar to an existing poll you created. Please make the poll question (caption) unique.', 'error');
            return;
          }
        }

        _this6.postingPoll = false;
        swal('Oops!', 'An error occured while attempting to create this poll. Please refresh the page and try again.', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--10-1!../../postcss-loader/src??ref--10-2!./cropper.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cropperjs/dist/cropper.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.11
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-02-17T11:53:27.572Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@trevoreyre/autocomplete-vue/dist/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/@trevoreyre/autocomplete-vue/dist/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autocomplete-input{border:1px solid #eee;border-radius:8px;width:100%;padding:12px 12px 12px 48px;box-sizing:border-box;position:relative;font-size:16px;line-height:1.5;flex:1;background-color:#eee;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC00Ii8+PC9zdmc+\");background-repeat:no-repeat;background-position:12px}.autocomplete-input:focus,.autocomplete-input[aria-expanded=true]{border-color:rgba(0,0,0,.12);background-color:#fff;outline:none;box-shadow:0 2px 2px rgba(0,0,0,.16)}[data-position=below] .autocomplete-input[aria-expanded=true]{border-bottom-color:transparent;border-radius:8px 8px 0 0}[data-position=above] .autocomplete-input[aria-expanded=true]{border-top-color:transparent;border-radius:0 0 8px 8px;z-index:2}.autocomplete[data-loading=true]:after{content:\"\";border:3px solid rgba(0,0,0,.12);border-right-color:rgba(0,0,0,.48);border-radius:100%;width:20px;height:20px;position:absolute;right:12px;top:50%;transform:translateY(-50%);-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}.autocomplete-result-list{margin:0;border:1px solid rgba(0,0,0,.12);padding:0;box-sizing:border-box;max-height:296px;overflow-y:auto;background:#fff;list-style:none;box-shadow:0 2px 2px rgba(0,0,0,.16)}[data-position=below] .autocomplete-result-list{margin-top:-1px;border-top-color:transparent;border-radius:0 0 8px 8px;padding-bottom:8px}[data-position=above] .autocomplete-result-list{margin-bottom:-1px;border-bottom-color:transparent;border-radius:8px 8px 0 0;padding-top:8px}.autocomplete-result{cursor:default;padding:12px 12px 12px 48px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC00Ii8+PC9zdmc+\");background-repeat:no-repeat;background-position:12px}.autocomplete-result:hover,.autocomplete-result[aria-selected=true]{background-color:rgba(0,0,0,.06)}@-webkit-keyframes rotate{0%{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(359deg)}}@keyframes rotate{0%{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(359deg)}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cropperjs/dist/cropper.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/cropperjs/dist/cropper.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Cropper.js v1.5.11\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-02-17T11:53:21.992Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.media-drawer-filters[data-v-4ec34072] {\n\t\toverflow-x: scroll;\n\t\tflex-wrap:unset;\n}\n.media-drawer-filters[data-v-4ec34072]::-webkit-scrollbar {\n\t\twidth: 0px;\n\t\tbackground: transparent;\n}\n.media-drawer-filters .nav-link[data-v-4ec34072] {\n\t\tmin-width:100px;\n\t\tpadding-top: 1rem;\n\t\tpadding-bottom: 1rem;\n}\n.media-drawer-filters .active[data-v-4ec34072] {\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n}\n@media (hover: none) and (pointer: coarse) {\n.media-drawer-filters[data-v-4ec34072]::-webkit-scrollbar {\n\t        display: none;\n}\n}\n.no-focus[data-v-4ec34072] {\n\t\tborder-color: none;\n\t\toutline: 0;\n\t\tbox-shadow: none;\n}\na.list-group-item[data-v-4ec34072] {\n\t\ttext-decoration: none;\n}\na.list-group-item[data-v-4ec34072]:hover {\n\t\ttext-decoration: none;\n\t\tbackground-color: #f8f9fa !important;\n}\n.compose-action[data-v-4ec34072]:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: #f8f9fa !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--10-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tributejs/dist/tribute.min.js":
/*!****************************************************!*\
  !*** ./node_modules/tributejs/dist/tribute.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(i=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}if(Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),i=n.length>>>0,r=arguments[1],o=0;o<i;o++)if(t=n[o],e.call(r,t,o,n))return t}),window&&"function"!=typeof window.CustomEvent){var r=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};void 0!==window.Event&&(r.prototype=window.Event.prototype),window.CustomEvent=r}var o=function(){function t(n){e(this,t),this.tribute=n,this.tribute.events=this}return n(t,[{key:"bind",value:function(e){e.boundKeydown=this.keydown.bind(e,this),e.boundKeyup=this.keyup.bind(e,this),e.boundInput=this.input.bind(e,this),e.addEventListener("keydown",e.boundKeydown,!1),e.addEventListener("keyup",e.boundKeyup,!1),e.addEventListener("input",e.boundInput,!1)}},{key:"unbind",value:function(e){e.removeEventListener("keydown",e.boundKeydown,!1),e.removeEventListener("keyup",e.boundKeyup,!1),e.removeEventListener("input",e.boundInput,!1),delete e.boundKeydown,delete e.boundKeyup,delete e.boundInput}},{key:"keydown",value:function(e,n){e.shouldDeactivate(n)&&(e.tribute.isActive=!1,e.tribute.hideMenu());var i=this;e.commandEvent=!1,t.keys().forEach((function(t){t.key===n.keyCode&&(e.commandEvent=!0,e.callbacks()[t.value.toLowerCase()](n,i))}))}},{key:"input",value:function(e,t){e.inputEvent=!0,e.keyup.call(this,e,t)}},{key:"click",value:function(e,t){var n=e.tribute;if(n.menu&&n.menu.contains(t.target)){var i=t.target;for(t.preventDefault(),t.stopPropagation();"li"!==i.nodeName.toLowerCase();)if(!(i=i.parentNode)||i===n.menu)throw new Error("cannot find the <li> container for the click");n.selectItemAtIndex(i.getAttribute("data-index"),t),n.hideMenu()}else n.current.element&&!n.current.externalTrigger&&(n.current.externalTrigger=!1,setTimeout((function(){return n.hideMenu()})))}},{key:"keyup",value:function(e,t){if(e.inputEvent&&(e.inputEvent=!1),e.updateSelection(this),27!==t.keyCode){if(!e.tribute.allowSpaces&&e.tribute.hasTrailingSpace)return e.tribute.hasTrailingSpace=!1,e.commandEvent=!0,void e.callbacks().space(t,this);if(!e.tribute.isActive)if(e.tribute.autocompleteMode)e.callbacks().triggerChar(t,this,"");else{var n=e.getKeyCode(e,this,t);if(isNaN(n)||!n)return;var i=e.tribute.triggers().find((function(e){return e.charCodeAt(0)===n}));void 0!==i&&e.callbacks().triggerChar(t,this,i)}e.tribute.current.mentionText.length<e.tribute.current.collection.menuShowMinLength||((e.tribute.current.trigger||e.tribute.autocompleteMode)&&!1===e.commandEvent||e.tribute.isActive&&8===t.keyCode)&&e.tribute.showMenuFor(this,!0)}}},{key:"shouldDeactivate",value:function(e){if(!this.tribute.isActive)return!1;if(0===this.tribute.current.mentionText.length){var n=!1;return t.keys().forEach((function(t){e.keyCode===t.key&&(n=!0)})),!n}return!1}},{key:"getKeyCode",value:function(e,t,n){var i=e.tribute,r=i.range.getTriggerInfo(!1,i.hasTrailingSpace,!0,i.allowSpaces,i.autocompleteMode);return!!r&&r.mentionTriggerChar.charCodeAt(0)}},{key:"updateSelection",value:function(e){this.tribute.current.element=e;var t=this.tribute.range.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);t&&(this.tribute.current.selectedPath=t.mentionSelectedPath,this.tribute.current.mentionText=t.mentionText,this.tribute.current.selectedOffset=t.mentionSelectedOffset)}},{key:"callbacks",value:function(){var e=this;return{triggerChar:function(t,n,i){var r=e.tribute;r.current.trigger=i;var o=r.collection.find((function(e){return e.trigger===i}));r.current.collection=o,r.current.mentionText.length>=r.current.collection.menuShowMinLength&&r.inputEvent&&r.showMenuFor(n,!0)},enter:function(t,n){e.tribute.isActive&&e.tribute.current.filteredItems&&(t.preventDefault(),t.stopPropagation(),setTimeout((function(){e.tribute.selectItemAtIndex(e.tribute.menuSelected,t),e.tribute.hideMenu()}),0))},escape:function(t,n){e.tribute.isActive&&(t.preventDefault(),t.stopPropagation(),e.tribute.isActive=!1,e.tribute.hideMenu())},tab:function(t,n){e.callbacks().enter(t,n)},space:function(t,n){e.tribute.isActive&&(e.tribute.spaceSelectsMatch?e.callbacks().enter(t,n):e.tribute.allowSpaces||(t.stopPropagation(),setTimeout((function(){e.tribute.hideMenu(),e.tribute.isActive=!1}),0)))},up:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length,r=e.tribute.menuSelected;i>r&&r>0?(e.tribute.menuSelected--,e.setActiveLi()):0===r&&(e.tribute.menuSelected=i-1,e.setActiveLi(),e.tribute.menu.scrollTop=e.tribute.menu.scrollHeight)}},down:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length-1,r=e.tribute.menuSelected;i>r?(e.tribute.menuSelected++,e.setActiveLi()):i===r&&(e.tribute.menuSelected=0,e.setActiveLi(),e.tribute.menu.scrollTop=0)}},delete:function(t,n){e.tribute.isActive&&e.tribute.current.mentionText.length<1?e.tribute.hideMenu():e.tribute.isActive&&e.tribute.showMenuFor(n)}}}},{key:"setActiveLi",value:function(e){var t=this.tribute.menu.querySelectorAll("li"),n=t.length>>>0;e&&(this.tribute.menuSelected=parseInt(e));for(var i=0;i<n;i++){var r=t[i];if(i===this.tribute.menuSelected){r.classList.add(this.tribute.current.collection.selectClass);var o=r.getBoundingClientRect(),u=this.tribute.menu.getBoundingClientRect();if(o.bottom>u.bottom){var l=o.bottom-u.bottom;this.tribute.menu.scrollTop+=l}else if(o.top<u.top){var s=u.top-o.top;this.tribute.menu.scrollTop-=s}}else r.classList.remove(this.tribute.current.collection.selectClass)}}},{key:"getFullHeight",value:function(e,t){var n=e.getBoundingClientRect().height;if(t){var i=e.currentStyle||window.getComputedStyle(e);return n+parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}}],[{key:"keys",value:function(){return[{key:9,value:"TAB"},{key:8,value:"DELETE"},{key:13,value:"ENTER"},{key:27,value:"ESCAPE"},{key:32,value:"SPACE"},{key:38,value:"UP"},{key:40,value:"DOWN"}]}}]),t}(),u=function(){function t(n){e(this,t),this.tribute=n,this.tribute.menuEvents=this,this.menu=this.tribute.menu}return n(t,[{key:"bind",value:function(e){var t=this;this.menuClickEvent=this.tribute.events.click.bind(null,this),this.menuContainerScrollEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.showMenuFor(t.tribute.current.element,!1)}),300,!1),this.windowResizeEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.range.positionMenuAtCaret(!0)}),300,!1),this.tribute.range.getDocument().addEventListener("MSPointerDown",this.menuClickEvent,!1),this.tribute.range.getDocument().addEventListener("mousedown",this.menuClickEvent,!1),window.addEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.addEventListener("scroll",this.menuContainerScrollEvent,!1):window.addEventListener("scroll",this.menuContainerScrollEvent)}},{key:"unbind",value:function(e){this.tribute.range.getDocument().removeEventListener("mousedown",this.menuClickEvent,!1),this.tribute.range.getDocument().removeEventListener("MSPointerDown",this.menuClickEvent,!1),window.removeEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.removeEventListener("scroll",this.menuContainerScrollEvent,!1):window.removeEventListener("scroll",this.menuContainerScrollEvent)}},{key:"debounce",value:function(e,t,n){var i,r=arguments,o=this;return function(){var u=o,l=r,s=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||e.apply(u,l)}),t),s&&e.apply(u,l)}}}]),t}(),l=function(){function t(n){e(this,t),this.tribute=n,this.tribute.range=this}return n(t,[{key:"getDocument",value:function(){var e;return this.tribute.current.collection&&(e=this.tribute.current.collection.iframe),e?e.contentWindow.document:document}},{key:"positionMenuAtCaret",value:function(e){var t,n=this,i=this.tribute.current,r=this.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==r){if(!this.tribute.positionMenu)return void(this.tribute.menu.style.cssText="display: block;");t=this.isContentEditable(i.element)?this.getContentEditableCaretPosition(r.mentionPosition):this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element,r.mentionPosition),this.tribute.menu.style.cssText="top: ".concat(t.top,"px;\n                                     left: ").concat(t.left,"px;\n                                     right: ").concat(t.right,"px;\n                                     bottom: ").concat(t.bottom,"px;\n                                     position: absolute;\n                                     display: block;"),"auto"===t.left&&(this.tribute.menu.style.left="auto"),"auto"===t.top&&(this.tribute.menu.style.top="auto"),e&&this.scrollIntoView(),window.setTimeout((function(){var i={width:n.tribute.menu.offsetWidth,height:n.tribute.menu.offsetHeight},r=n.isMenuOffScreen(t,i),o=window.innerWidth>i.width&&(r.left||r.right),u=window.innerHeight>i.height&&(r.top||r.bottom);(o||u)&&(n.tribute.menu.style.cssText="display: none",n.positionMenuAtCaret(e))}),0)}else this.tribute.menu.style.cssText="display: none"}},{key:"selectElement",value:function(e,t,n){var i,r=e;if(t)for(var o=0;o<t.length;o++){if(void 0===(r=r.childNodes[t[o]]))return;for(;r.length<n;)n-=r.length,r=r.nextSibling;0!==r.childNodes.length||r.length||(r=r.previousSibling)}var u=this.getWindowSelection();(i=this.getDocument().createRange()).setStart(r,n),i.setEnd(r,n),i.collapse(!0);try{u.removeAllRanges()}catch(e){}u.addRange(i),e.focus()}},{key:"replaceTriggerText",value:function(e,t,n,i,r){var o=this.getTriggerInfo(!0,n,t,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==o){var u=this.tribute.current,l=new CustomEvent("tribute-replaced",{detail:{item:r,instance:u,context:o,event:i}});if(this.isContentEditable(u.element)){e+="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";var s=o.mentionPosition+o.mentionText.length;this.tribute.autocompleteMode||(s+=o.mentionTriggerChar.length),this.pasteHtml(e,o.mentionPosition,s)}else{var a=this.tribute.current.element,c="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";e+=c;var h=o.mentionPosition,d=o.mentionPosition+o.mentionText.length+c.length;this.tribute.autocompleteMode||(d+=o.mentionTriggerChar.length-1),a.value=a.value.substring(0,h)+e+a.value.substring(d,a.value.length),a.selectionStart=h+e.length,a.selectionEnd=h+e.length}u.element.dispatchEvent(new CustomEvent("input",{bubbles:!0})),u.element.dispatchEvent(l)}}},{key:"pasteHtml",value:function(e,t,n){var i,r;r=this.getWindowSelection(),(i=this.getDocument().createRange()).setStart(r.anchorNode,t),i.setEnd(r.anchorNode,n),i.deleteContents();var o=this.getDocument().createElement("div");o.innerHTML=e;for(var u,l,s=this.getDocument().createDocumentFragment();u=o.firstChild;)l=s.appendChild(u);i.insertNode(s),l&&((i=i.cloneRange()).setStartAfter(l),i.collapse(!0),r.removeAllRanges(),r.addRange(i))}},{key:"getWindowSelection",value:function(){return this.tribute.collection.iframe?this.tribute.collection.iframe.contentWindow.getSelection():window.getSelection()}},{key:"getNodePositionInParent",value:function(e){if(null===e.parentNode)return 0;for(var t=0;t<e.parentNode.childNodes.length;t++){if(e.parentNode.childNodes[t]===e)return t}}},{key:"getContentEditableSelectedPath",value:function(e){var t=this.getWindowSelection(),n=t.anchorNode,i=[];if(null!=n){for(var r,o=n.contentEditable;null!==n&&"true"!==o;)r=this.getNodePositionInParent(n),i.push(r),null!==(n=n.parentNode)&&(o=n.contentEditable);return i.reverse(),{selected:n,path:i,offset:t.getRangeAt(0).startOffset}}}},{key:"getTextPrecedingCurrentSelection",value:function(){var e=this.tribute.current,t="";if(this.isContentEditable(e.element)){var n=this.getWindowSelection().anchorNode;if(null!=n){var i=n.textContent,r=this.getWindowSelection().getRangeAt(0).startOffset;i&&r>=0&&(t=i.substring(0,r))}}else{var o=this.tribute.current.element;if(o){var u=o.selectionStart;o.value&&u>=0&&(t=o.value.substring(0,u))}}return t}},{key:"getLastWordInText",value:function(e){var t=(e=e.replace(/\u00A0/g," ")).split(/\s+/);return t[t.length-1].trim()}},{key:"getTriggerInfo",value:function(e,t,n,i,r){var o,u,l,s=this,a=this.tribute.current;if(this.isContentEditable(a.element)){var c=this.getContentEditableSelectedPath(a);c&&(o=c.selected,u=c.path,l=c.offset)}else o=this.tribute.current.element;var h=this.getTextPrecedingCurrentSelection(),d=this.getLastWordInText(h);if(r)return{mentionPosition:h.length-d.length,mentionText:d,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l};if(null!=h){var f,m=-1;if(this.tribute.collection.forEach((function(e){var t=e.trigger,i=e.requireLeadingSpace?s.lastIndexWithLeadingSpace(h,t):h.lastIndexOf(t);i>m&&(m=i,f=t,n=e.requireLeadingSpace)})),m>=0&&(0===m||!n||/[\xA0\s]/g.test(h.substring(m-1,m)))){var p=h.substring(m+f.length,h.length);f=h.substring(m,m+f.length);var v=p.substring(0,1),g=p.length>0&&(" "===v||" "===v);t&&(p=p.trim());var b=i?/[^\S ]/g:/[\xA0\s]/g;if(this.tribute.hasTrailingSpace=b.test(p),!g&&(e||!b.test(p)))return{mentionPosition:m,mentionText:p,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l,mentionTriggerChar:f}}}}},{key:"lastIndexWithLeadingSpace",value:function(e,t){for(var n=e.split("").reverse().join(""),i=-1,r=0,o=e.length;r<o;r++){for(var u=r===e.length-1,l=/\s/.test(n[r+1]),s=!0,a=t.length-1;a>=0;a--)if(t[a]!==n[r-a]){s=!1;break}if(s&&(u||l)){i=e.length-1-r;break}}return i}},{key:"isContentEditable",value:function(e){return"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName}},{key:"isMenuOffScreen",value:function(e,t){var n=window.innerWidth,i=window.innerHeight,r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l="number"==typeof e.top?e.top:u+i-e.bottom-t.height,s="number"==typeof e.right?e.right:e.left+t.width,a="number"==typeof e.bottom?e.bottom:e.top+t.height,c="number"==typeof e.left?e.left:o+n-e.right-t.width;return{top:l<Math.floor(u),right:s>Math.ceil(o+n),bottom:a>Math.ceil(u+i),left:c<Math.floor(o)}}},{key:"getMenuDimensions",value:function(){var e={width:null,height:null};return this.tribute.menu.style.cssText="top: 0px;\n                                 left: 0px;\n                                 position: fixed;\n                                 display: block;\n                                 visibility; hidden;",e.width=this.tribute.menu.offsetWidth,e.height=this.tribute.menu.offsetHeight,this.tribute.menu.style.cssText="display: none;",e}},{key:"getTextAreaOrInputUnderlinePosition",value:function(e,t,n){var i=null!==window.mozInnerScreenX,r=this.getDocument().createElement("div");r.id="input-textarea-caret-position-mirror-div",this.getDocument().body.appendChild(r);var o=r.style,u=window.getComputedStyle?getComputedStyle(e):e.currentStyle;o.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(o.wordWrap="break-word"),o.position="absolute",o.visibility="hidden",["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach((function(e){o[e]=u[e]})),i?(o.width="".concat(parseInt(u.width)-2,"px"),e.scrollHeight>parseInt(u.height)&&(o.overflowY="scroll")):o.overflow="hidden",r.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(r.textContent=r.textContent.replace(/\s/g," "));var l=this.getDocument().createElement("span");l.textContent=e.value.substring(t)||".",r.appendChild(l);var s=e.getBoundingClientRect(),a=document.documentElement,c=(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0),h=(window.pageYOffset||a.scrollTop)-(a.clientTop||0),d=0,f=0;this.menuContainerIsBody&&(d=s.top,f=s.left);var m={top:d+h+l.offsetTop+parseInt(u.borderTopWidth)+parseInt(u.fontSize)-e.scrollTop,left:f+c+l.offsetLeft+parseInt(u.borderLeftWidth)},p=window.innerWidth,v=window.innerHeight,g=this.getMenuDimensions(),b=this.isMenuOffScreen(m,g);b.right&&(m.right=p-m.left,m.left="auto");var y=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(b.bottom){var w=y-(v-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);m.bottom=w+(v-s.top-l.offsetTop),m.top="auto"}return(b=this.isMenuOffScreen(m,g)).left&&(m.left=p>g.width?c+p-g.width:c,delete m.right),b.top&&(m.top=v>g.height?h+v-g.height:h,delete m.bottom),this.getDocument().body.removeChild(r),m}},{key:"getContentEditableCaretPosition",value:function(e){var t,n=this.getWindowSelection();(t=this.getDocument().createRange()).setStart(n.anchorNode,e),t.setEnd(n.anchorNode,e),t.collapse(!1);var i=t.getBoundingClientRect(),r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l={left:i.left+o,top:i.top+i.height+u},s=window.innerWidth,a=window.innerHeight,c=this.getMenuDimensions(),h=this.isMenuOffScreen(l,c);h.right&&(l.left="auto",l.right=s-i.left-o);var d=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(h.bottom){var f=d-(a-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);l.top="auto",l.bottom=f+(a-i.top)}return(h=this.isMenuOffScreen(l,c)).left&&(l.left=s>c.width?o+s-c.width:o,delete l.right),h.top&&(l.top=a>c.height?u+a-c.height:u,delete l.bottom),this.menuContainerIsBody||(l.left=l.left?l.left-this.tribute.menuContainer.offsetLeft:l.left,l.top=l.top?l.top-this.tribute.menuContainer.offsetTop:l.top),l}},{key:"scrollIntoView",value:function(e){var t,n=this.menu;if(void 0!==n){for(;void 0===t||0===t.height;)if(0===(t=n.getBoundingClientRect()).height&&(void 0===(n=n.childNodes[0])||!n.getBoundingClientRect))return;var i=t.top,r=i+t.height;if(i<0)window.scrollTo(0,window.pageYOffset+t.top-20);else if(r>window.innerHeight){var o=window.pageYOffset+t.top-20;o-window.pageYOffset>100&&(o=window.pageYOffset+100);var u=window.pageYOffset-(window.innerHeight-r);u>o&&(u=o),window.scrollTo(0,u)}}}},{key:"menuContainerIsBody",get:function(){return this.tribute.menuContainer===document.body||!this.tribute.menuContainer}}]),t}(),s=function(){function t(n){e(this,t),this.tribute=n,this.tribute.search=this}return n(t,[{key:"simpleFilter",value:function(e,t){var n=this;return t.filter((function(t){return n.test(e,t)}))}},{key:"test",value:function(e,t){return null!==this.match(e,t)}},{key:"match",value:function(e,t,n){n=n||{};t.length;var i=n.pre||"",r=n.post||"",o=n.caseSensitive&&t||t.toLowerCase();if(n.skip)return{rendered:t,score:0};e=n.caseSensitive&&e||e.toLowerCase();var u=this.traverse(o,e,0,0,[]);return u?{rendered:this.render(t,u.cache,i,r),score:u.score}:null}},{key:"traverse",value:function(e,t,n,i,r){if(t.length===i)return{score:this.calculateScore(r),cache:r.slice()};if(!(e.length===n||t.length-i>e.length-n)){for(var o,u,l=t[i],s=e.indexOf(l,n);s>-1;){if(r.push(s),u=this.traverse(e,t,s+1,i+1,r),r.pop(),!u)return o;(!o||o.score<u.score)&&(o=u),s=e.indexOf(l,s+1)}return o}}},{key:"calculateScore",value:function(e){var t=0,n=1;return e.forEach((function(i,r){r>0&&(e[r-1]+1===i?n+=n+1:n=1),t+=n})),t}},{key:"render",value:function(e,t,n,i){var r=e.substring(0,t[0]);return t.forEach((function(o,u){r+=n+e[o]+i+e.substring(o+1,t[u+1]?t[u+1]:e.length)})),r}},{key:"filter",value:function(e,t,n){var i=this;return n=n||{},t.reduce((function(t,r,o,u){var l=r;n.extract&&((l=n.extract(r))||(l=""));var s=i.match(e,l,n);return null!=s&&(t[t.length]={string:s.rendered,score:s.score,index:o,original:r}),t}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))}}]),t}();return function(){function t(n){var i,r=this,a=n.values,c=void 0===a?null:a,h=n.iframe,d=void 0===h?null:h,f=n.selectClass,m=void 0===f?"highlight":f,p=n.containerClass,v=void 0===p?"tribute-container":p,g=n.itemClass,b=void 0===g?"":g,y=n.trigger,w=void 0===y?"@":y,T=n.autocompleteMode,C=void 0!==T&&T,S=n.selectTemplate,E=void 0===S?null:S,k=n.menuItemTemplate,x=void 0===k?null:k,M=n.lookup,A=void 0===M?"key":M,L=n.fillAttr,I=void 0===L?"value":L,N=n.collection,O=void 0===N?null:N,D=n.menuContainer,P=void 0===D?null:D,R=n.noMatchTemplate,W=void 0===R?null:R,H=n.requireLeadingSpace,B=void 0===H||H,F=n.allowSpaces,_=void 0!==F&&F,j=n.replaceTextSuffix,Y=void 0===j?null:j,z=n.positionMenu,K=void 0===z||z,q=n.spaceSelectsMatch,U=void 0!==q&&q,X=n.searchOpts,Q=void 0===X?{}:X,V=n.menuItemLimit,G=void 0===V?null:V,J=n.menuShowMinLength,Z=void 0===J?0:J;if(e(this,t),this.autocompleteMode=C,this.menuSelected=0,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=P,this.allowSpaces=_,this.replaceTextSuffix=Y,this.positionMenu=K,this.hasTrailingSpace=!1,this.spaceSelectsMatch=U,this.autocompleteMode&&(w="",_=!1),c)this.collection=[{trigger:w,iframe:d,selectClass:m,containerClass:v,itemClass:b,selectTemplate:(E||t.defaultSelectTemplate).bind(this),menuItemTemplate:(x||t.defaultMenuItemTemplate).bind(this),noMatchTemplate:(i=W,"string"==typeof i?""===i.trim()?null:i:"function"==typeof i?i.bind(r):W||function(){return"<li>No Match Found!</li>"}.bind(r)),lookup:A,fillAttr:I,values:c,requireLeadingSpace:B,searchOpts:Q,menuItemLimit:G,menuShowMinLength:Z}];else{if(!O)throw new Error("[Tribute] No collection specified.");this.autocompleteMode&&console.warn("Tribute in autocomplete mode does not work for collections"),this.collection=O.map((function(e){return{trigger:e.trigger||w,iframe:e.iframe||d,selectClass:e.selectClass||m,containerClass:e.containerClass||v,itemClass:e.itemClass||b,selectTemplate:(e.selectTemplate||t.defaultSelectTemplate).bind(r),menuItemTemplate:(e.menuItemTemplate||t.defaultMenuItemTemplate).bind(r),noMatchTemplate:function(e){return"string"==typeof e?""===e.trim()?null:e:"function"==typeof e?e.bind(r):W||function(){return"<li>No Match Found!</li>"}.bind(r)}(W),lookup:e.lookup||A,fillAttr:e.fillAttr||I,values:e.values,requireLeadingSpace:e.requireLeadingSpace,searchOpts:e.searchOpts||Q,menuItemLimit:e.menuItemLimit||G,menuShowMinLength:e.menuShowMinLength||Z}}))}new l(this),new o(this),new u(this),new s(this)}return n(t,[{key:"triggers",value:function(){return this.collection.map((function(e){return e.trigger}))}},{key:"attach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._attach(e[n]);else this._attach(e)}},{key:"_attach",value:function(e){e.hasAttribute("data-tribute")&&console.warn("Tribute was already bound to "+e.nodeName),this.ensureEditable(e),this.events.bind(e),e.setAttribute("data-tribute",!0)}},{key:"ensureEditable",value:function(e){if(-1===t.inputTypes().indexOf(e.nodeName)){if(!e.contentEditable)throw new Error("[Tribute] Cannot bind to "+e.nodeName);e.contentEditable=!0}}},{key:"createMenu",value:function(e){var t=this.range.getDocument().createElement("div"),n=this.range.getDocument().createElement("ul");return t.className=e,t.appendChild(n),this.menuContainer?this.menuContainer.appendChild(t):this.range.getDocument().body.appendChild(t)}},{key:"showMenuFor",value:function(e,t){var n=this;if(!this.isActive||this.current.element!==e||this.current.mentionText!==this.currentMentionTextSnapshot){this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(this.current.collection.containerClass),e.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");var r=function(e){if(n.isActive){var r=n.search.filter(n.current.mentionText,e,{pre:n.current.collection.searchOpts.pre||"<span>",post:n.current.collection.searchOpts.post||"</span>",skip:n.current.collection.searchOpts.skip,extract:function(e){if("string"==typeof n.current.collection.lookup)return e[n.current.collection.lookup];if("function"==typeof n.current.collection.lookup)return n.current.collection.lookup(e,n.current.mentionText);throw new Error("Invalid lookup attribute, lookup must be string or function.")}});n.current.collection.menuItemLimit&&(r=r.slice(0,n.current.collection.menuItemLimit)),n.current.filteredItems=r;var o=n.menu.querySelector("ul");if(n.range.positionMenuAtCaret(t),!r.length){var u=new CustomEvent("tribute-no-match",{detail:n.menu});return n.current.element.dispatchEvent(u),void("function"==typeof n.current.collection.noMatchTemplate&&!n.current.collection.noMatchTemplate()||!n.current.collection.noMatchTemplate?n.hideMenu():"function"==typeof n.current.collection.noMatchTemplate?o.innerHTML=n.current.collection.noMatchTemplate():o.innerHTML=n.current.collection.noMatchTemplate)}o.innerHTML="";var l=n.range.getDocument().createDocumentFragment();r.forEach((function(e,t){var r=n.range.getDocument().createElement("li");r.setAttribute("data-index",t),r.className=n.current.collection.itemClass,r.addEventListener("mousemove",(function(e){var t=i(n._findLiTarget(e.target),2),r=(t[0],t[1]);0!==e.movementY&&n.events.setActiveLi(r)})),n.menuSelected===t&&r.classList.add(n.current.collection.selectClass),r.innerHTML=n.current.collection.menuItemTemplate(e),l.appendChild(r)})),o.appendChild(l)}};"function"==typeof this.current.collection.values?this.current.collection.values(this.current.mentionText,r):r(this.current.collection.values)}}},{key:"_findLiTarget",value:function(e){if(!e)return[];var t=e.getAttribute("data-index");return t?[e,t]:this._findLiTarget(e.parentNode)}},{key:"showMenuForCollection",value:function(e,t){e!==document.activeElement&&this.placeCaretAtEnd(e),this.current.collection=this.collection[t||0],this.current.externalTrigger=!0,this.current.element=e,e.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(e,this.current.collection.trigger),this.showMenuFor(e)}},{key:"placeCaretAtEnd",value:function(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}}},{key:"insertTextAtCursor",value:function(e){var t,n;(n=(t=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(e);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),t.removeAllRanges(),t.addRange(n)}},{key:"insertAtCaret",value:function(e,t){var n=e.scrollTop,i=e.selectionStart,r=e.value.substring(0,i),o=e.value.substring(e.selectionEnd,e.value.length);e.value=r+t+o,i+=t.length,e.selectionStart=i,e.selectionEnd=i,e.focus(),e.scrollTop=n}},{key:"hideMenu",value:function(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}},{key:"selectItemAtIndex",value:function(e,t){if("number"==typeof(e=parseInt(e))&&!isNaN(e)){var n=this.current.filteredItems[e],i=this.current.collection.selectTemplate(n);null!==i&&this.replaceText(i,t,n)}}},{key:"replaceText",value:function(e,t,n){this.range.replaceTriggerText(e,!0,!0,t,n)}},{key:"_append",value:function(e,t,n){if("function"==typeof e.values)throw new Error("Unable to append to values, as it is a function.");e.values=n?t:e.values.concat(t)}},{key:"append",value:function(e,t,n){var i=parseInt(e);if("number"!=typeof i)throw new Error("please provide an index for the collection to update.");var r=this.collection[i];this._append(r,t,n)}},{key:"appendCurrent",value:function(e,t){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,e,t)}},{key:"detach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._detach(e[n]);else this._detach(e)}},{key:"_detach",value:function(e){var t=this;this.events.unbind(e),e.tributeMenu&&this.menuEvents.unbind(e.tributeMenu),setTimeout((function(){e.removeAttribute("data-tribute"),t.isActive=!1,e.tributeMenu&&e.tributeMenu.remove()}))}},{key:"isActive",get:function(){return this._isActive},set:function(e){if(this._isActive!=e&&(this._isActive=e,this.current.element)){var t=new CustomEvent("tribute-active-".concat(e));this.current.element.dispatchEvent(t)}}}],[{key:"defaultSelectTemplate",value:function(e){return void 0===e?"".concat(this.current.collection.trigger).concat(this.current.mentionText):this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+e.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+e.original[this.current.collection.fillAttr]}},{key:"defaultMenuItemTemplate",value:function(e){return e.string}},{key:"inputTypes",value:function(){return["TEXTAREA","INPUT"]}}]),t}()}));
//# sourceMappingURL=tribute.min.js.map


/***/ }),

/***/ "./node_modules/vue-cropperjs/dist/VueCropper.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-cropperjs/dist/VueCropper.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cropperjs = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports.default = {
  render: function render(h) {
    var crossorigin = this.crossorigin || undefined;

    return h('div', { style: this.containerStyle }, [h('img', {
      ref: 'img',
      attrs: {
        src: this.src,
        alt: this.alt || 'image',
        style: 'max-width: 100%',
        crossorigin: crossorigin
      },
      on: this.$listeners,
      style: this.imgStyle
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    crossorigin: {
      type: String
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      staticClass: "w-100 h-100 d-none file-input",
      attrs: {
        type: "file",
        id: "pf-dz",
        name: "media",
        accept: _vm.config.uploader.media_types
      }
    }),
    _vm._v(" "),
    _c("canvas", { staticClass: "d-none", attrs: { id: "pr_canvas" } }),
    _vm._v(" "),
    _c("img", { staticClass: "d-none", attrs: { id: "pr_img" } }),
    _vm._v(" "),
    _c("div", { staticClass: "timeline" }, [
      _vm.uploading
        ? _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "card status-card card-md-rounded-0 w-100 h-100 bg-light py-3",
                staticStyle: { "border-bottom": "1px solid #f1f1f1" }
              },
              [
                _c(
                  "div",
                  { staticClass: "p-5 mt-2" },
                  [
                    _c("b-progress", {
                      attrs: {
                        value: _vm.uploadProgress,
                        max: 100,
                        striped: "",
                        animated: true
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-center mb-0 font-weight-bold" },
                      [
                        _vm._v(
                          "Uploading ... (" + _vm._s(_vm.uploadProgress) + "%)"
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        : _vm.page == "cameraRoll"
        ? _c("div", [
            _c(
              "div",
              {
                staticClass: "card status-card card-md-rounded-0",
                staticStyle: { display: "flex" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "h-100 card-body p-0 border-top",
                    staticStyle: { width: "100%", "min-height": "400px" }
                  },
                  [
                    _vm.cameraRollMedia.length > 0
                      ? _c(
                          "div",
                          { staticClass: "row p-0 m-0" },
                          _vm._l(_vm.cameraRollMedia, function(m, index) {
                            return _c(
                              "div",
                              {
                                class: [index == 0 ? "col-12 p-0" : "col-3 p-0"]
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card info-overlay p-0 rounded-0 shadow-none border"
                                  },
                                  [
                                    _c("div", { staticClass: "square" }, [
                                      _c("img", {
                                        staticClass: "square-content",
                                        attrs: { src: m.preview_url }
                                      })
                                    ])
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      : _c(
                          "div",
                          {
                            staticClass:
                              "w-100 h-100 d-flex justify-content-center align-items-center"
                          },
                          [
                            _c("span", { staticClass: "w-100 h-100" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" }
                                },
                                [_vm._v("Upload")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.fetchCameraRollDrafts()
                                    }
                                  }
                                },
                                [_vm._v("Load Camera Roll")]
                              )
                            ])
                          ]
                        )
                  ]
                )
              ]
            )
          ])
        : _vm.page == "poll"
        ? _c("div", [
            _c(
              "div",
              {
                staticClass: "card status-card card-md-rounded-0",
                staticStyle: { display: "flex" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header d-inline-flex align-items-center justify-content-between bg-white"
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v("\n\t\t\t\t\t\tNew Poll\n\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _vm.postingPoll
                      ? _c("span", [_vm._m(2)])
                      : !_vm.postingPoll &&
                        _vm.pollOptions.length > 1 &&
                        _vm.composeText.length
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary btn-sm font-weight-bold",
                            on: { click: _vm.postNewPoll }
                          },
                          [_c("span", [_vm._v("Create Poll")])]
                        )
                      : _c(
                          "span",
                          { staticClass: "font-weight-bold text-lighter" },
                          [_vm._v("\n\t\t\t\t\t\tCreate Poll\n\t\t\t\t\t")]
                        )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "h-100 card-body p-0 border-top",
                    staticStyle: { width: "100%", "min-height": "400px" }
                  },
                  [
                    _c("div", { staticClass: "border-bottom mt-2" }, [
                      _c("div", { staticClass: "media px-3" }, [
                        _c("img", {
                          staticClass: "rounded-circle",
                          attrs: {
                            src: _vm.profile.avatar,
                            width: "42px",
                            height: "42px"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "font-weight-bold text-muted small d-none"
                                },
                                [_vm._v("Caption")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vue-tribute",
                                { attrs: { options: _vm.tributeSettings } },
                                [
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.composeText,
                                        expression: "composeText"
                                      }
                                    ],
                                    staticClass:
                                      "form-control border-0 rounded-0 no-focus",
                                    attrs: {
                                      rows: "3",
                                      placeholder: "Write a poll question..."
                                    },
                                    domProps: { value: _vm.composeText },
                                    on: {
                                      keyup: function($event) {
                                        _vm.composeTextLength =
                                          _vm.composeText.length
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.composeText = $event.target.value
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "help-text small text-right text-muted mb-0"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.composeTextLength) +
                                      "/" +
                                      _vm._s(
                                        _vm.config.uploader.max_caption_length
                                      )
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "p-3" },
                      [
                        _c(
                          "p",
                          { staticClass: "font-weight-bold text-muted small" },
                          [_vm._v("\n\t\t\t\t\t\t\tPoll Options\n\t\t\t\t\t\t")]
                        ),
                        _vm._v(" "),
                        _vm.pollOptions.length < 4
                          ? _c("div", { staticClass: "form-group mb-4" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.pollOptionModel,
                                    expression: "pollOptionModel"
                                  }
                                ],
                                staticClass: "form-control rounded-pill",
                                attrs: {
                                  type: "text",
                                  placeholder:
                                    "Add a poll option, press enter to save"
                                },
                                domProps: { value: _vm.pollOptionModel },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.savePollOption($event)
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.pollOptionModel = $event.target.value
                                  }
                                }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.pollOptions, function(option, index) {
                          return _c(
                            "div",
                            {
                              staticClass:
                                "form-group mb-4 d-flex align-items-center",
                              staticStyle: {
                                "max-width": "400px",
                                position: "relative"
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "font-weight-bold mr-2",
                                  staticStyle: {
                                    position: "absolute",
                                    left: "10px"
                                  }
                                },
                                [_vm._v(_vm._s(index + 1) + ".")]
                              ),
                              _vm._v(" "),
                              _vm.pollOptions[index].length < 50
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.pollOptions[index],
                                        expression: "pollOptions[index]"
                                      }
                                    ],
                                    staticClass: "form-control rounded-pill",
                                    staticStyle: {
                                      "padding-left": "30px",
                                      "padding-right": "90px"
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder:
                                        "Add a poll option, press enter to save"
                                    },
                                    domProps: { value: _vm.pollOptions[index] },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.pollOptions,
                                          index,
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                : _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.pollOptions[index],
                                        expression: "pollOptions[index]"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    staticStyle: {
                                      "padding-left": "30px",
                                      "padding-right": "90px"
                                    },
                                    attrs: {
                                      placeholder:
                                        "Add a poll option, press enter to save",
                                      rows: "3"
                                    },
                                    domProps: { value: _vm.pollOptions[index] },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.pollOptions,
                                          index,
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger btn-sm rounded-pill font-weight-bold",
                                  staticStyle: {
                                    position: "absolute",
                                    right: "5px"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deletePollOption(index)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-trash" }),
                                  _vm._v(" Delete\n\t\t\t\t\t\t\t")
                                ]
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-between" },
                          [
                            _c("div", [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-weight-bold text-muted small"
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\tPoll Expiry\n\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.pollExpiry,
                                        expression: "pollExpiry"
                                      }
                                    ],
                                    staticClass: "form-control rounded-pill",
                                    staticStyle: { width: "200px" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.pollExpiry = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "60" } }, [
                                      _vm._v("1 hour")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "360" } }, [
                                      _vm._v("6 hours")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: { value: "1440", selected: "" }
                                      },
                                      [_vm._v("24 hours")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "10080" } },
                                      [_vm._v("7 days")]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-weight-bold text-muted small"
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\tPoll Visibility\n\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.visibility,
                                        expression: "visibility"
                                      }
                                    ],
                                    staticClass: "form-control rounded-pill",
                                    staticStyle: { "max-width": "200px" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.visibility = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { value: "public" } },
                                      [_vm._v("Public")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "private" } },
                                      [_vm._v("Followers Only")]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      2
                    )
                  ]
                )
              ]
            )
          ])
        : _c("div", [
            _c(
              "div",
              {
                staticClass: "card status-card card-md-rounded-0 w-100 h-100",
                staticStyle: { display: "flex" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header d-inline-flex align-items-center justify-content-between bg-white"
                  },
                  [
                    _c("div", [
                      _vm.page == 1
                        ? _c(
                            "a",
                            {
                              staticClass:
                                "font-weight-bold text-decoration-none text-muted",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.closeModal()
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-times fa-lg" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "font-weight-bold mb-0" },
                                [_vm._v(_vm._s(_vm.pageTitle))]
                              )
                            ]
                          )
                        : _vm.page == 2
                        ? _c(
                            "span",
                            [
                              _vm.config.uploader.album_limit > _vm.media.length
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-sm font-weight-bold",
                                      attrs: { id: "cm-add-media-btn" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.addMedia($event)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-plus" })]
                                  )
                                : _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-secondary btn-sm font-weight-bold",
                                      attrs: { disabled: "" }
                                    },
                                    [_c("i", { staticClass: "fas fa-plus" })]
                                  ),
                              _vm._v(" "),
                              _c(
                                "b-tooltip",
                                {
                                  attrs: {
                                    target: "cm-add-media-btn",
                                    triggers: "hover"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\tUpload another photo or video\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm.page == 3
                        ? _c("span", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-lighter text-decoration-none mr-3 d-flex align-items-center",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-long-arrow-alt-left fa-lg mr-2"
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "btn btn-outline-secondary btn-sm px-2 py-0 disabled",
                                    attrs: { disabled: "" }
                                  },
                                  [_vm._v(_vm._s(_vm.media.length))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "font-weight-bold mb-0" },
                              [_vm._v(_vm._s(_vm.pageTitle))]
                            )
                          ])
                        : _c("span", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-lighter text-decoration-none mr-3",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-long-arrow-alt-left fa-lg"
                                })
                              ]
                            )
                          ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold mb-0" }, [
                        _vm._v(_vm._s(_vm.pageTitle))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.page == 2
                      ? _c(
                          "div",
                          [
                            _vm.media.length == 1
                              ? _c(
                                  "a",
                                  {
                                    staticClass: "text-center text-dark",
                                    attrs: {
                                      href: "#",
                                      title: "Crop & Resize",
                                      id: "cm-crop-btn"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showCropPhotoCard($event)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-crop-alt fa-lg"
                                    })
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "b-tooltip",
                              {
                                attrs: {
                                  target: "cm-crop-btn",
                                  triggers: "hover"
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\tCrop & Resize\n\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [
                      _vm.pageLoading
                        ? _c("span", [_vm._m(3)])
                        : _c("span", [
                            (!_vm.pageLoading &&
                              _vm.page > 1 && _vm.page <= 2) ||
                            (_vm.page == 1 && _vm.ids.length != 0) ||
                            _vm.page == "cropPhoto"
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "font-weight-bold text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.nextPage($event)
                                      }
                                    }
                                  },
                                  [_vm._v("Next")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.pageLoading && _vm.page == 3
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "font-weight-bold text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.compose()
                                      }
                                    }
                                  },
                                  [_vm._v("Post")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.pageLoading && _vm.page == "addText"
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "font-weight-bold text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.composeTextPost()
                                      }
                                    }
                                  },
                                  [_vm._v("Post")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.pageLoading && _vm.page == "video-2"
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "font-weight-bold text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.compose()
                                      }
                                    }
                                  },
                                  [_vm._v("Post")]
                                )
                              : _vm._e()
                          ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body p-0 border-top" }, [
                  _vm.page == "licensePicker"
                    ? _c(
                        "div",
                        {
                          staticClass: "w-100 h-100",
                          staticStyle: { "min-height": "280px" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "list-group list-group-flush" },
                            _vm._l(_vm.availableLicenses, function(
                              item,
                              index
                            ) {
                              return _c(
                                "div",
                                {
                                  staticClass: "list-group-item cursor-pointer",
                                  class: {
                                    "text-primary": _vm.licenseId === item.id,
                                    "font-weight-bold":
                                      _vm.licenseId === item.id
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleLicense(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(item.name) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "textOptions"
                    ? _c("div", {
                        staticClass: "w-100 h-100",
                        staticStyle: { "min-height": "280px" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "addText"
                    ? _c(
                        "div",
                        {
                          staticClass: "w-100 h-100",
                          staticStyle: { "min-height": "280px" }
                        },
                        [
                          _c("div", { staticClass: "mt-2" }, [
                            _c("div", { staticClass: "media px-3" }, [
                              _c("div", { staticClass: "media-body" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "font-weight-bold text-muted small d-none"
                                    },
                                    [_vm._v("Body")]
                                  ),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.composeText,
                                        expression: "composeText"
                                      }
                                    ],
                                    staticClass:
                                      "form-control border-0 rounded-0 no-focus",
                                    staticStyle: {
                                      "font-size": "18px",
                                      resize: "none"
                                    },
                                    attrs: {
                                      rows: "7",
                                      placeholder: "What's happening?"
                                    },
                                    domProps: { value: _vm.composeText },
                                    on: {
                                      keyup: function($event) {
                                        _vm.composeTextLength =
                                          _vm.composeText.length
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.composeText = $event.target.value
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "border-bottom" }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "help-text small text-right text-muted mb-0 font-weight-bold"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.composeTextLength) +
                                          "/" +
                                          _vm._s(
                                            _vm.config.uploader
                                              .max_caption_length
                                          )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0 mt-2" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-primary rounded-pill mr-2",
                                        staticStyle: { height: "37px" },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showTextOptions()
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-palette px-3 text-white"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-lighter rounded-pill d-inline-flex align-items-center",
                                        staticStyle: { height: "37px" },
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showVisibilityCard()
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-eye mr-2"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-muted small font-weight-bold"
                                          },
                                          [_vm._v(_vm._s(_vm.visibilityTag))]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == 1
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "w-100 h-100 d-flex justify-content-center align-items-center",
                          staticStyle: { "min-height": "400px" }
                        },
                        [
                          _c("div", { staticClass: "text-center" }, [
                            _vm.media.length == 0
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card mx-md-5 my-md-3 shadow-none border compose-action text-decoration-none text-dark"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "card-body py-2",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.addMedia($event)
                                          }
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "media" }, [
                                          _vm._m(4),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "media-body text-left"
                                            },
                                            [
                                              _vm._m(5),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                {
                                                  staticClass: "mb-0 text-muted"
                                                },
                                                [
                                                  _vm._v(
                                                    "Share up to " +
                                                      _vm._s(
                                                        _vm.config.uploader
                                                          .album_limit
                                                      ) +
                                                      " photos or videos"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                             false
                              ? undefined
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.config.features.stories == true
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "card mx-md-5 my-md-3 shadow-none border compose-action text-decoration-none text-dark",
                                    attrs: { href: "/i/stories/new" }
                                  },
                                  [_vm._m(7)]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                             false
                              ? undefined
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(9),
                            _vm._v(" "),
                            _vm._m(10)
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "cropPhoto"
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _vm.ids.length > 0
                          ? _c(
                              "div",
                              [
                                _c("vue-cropper", {
                                  ref: "cropper",
                                  attrs: {
                                    relativeZoom: _vm.cropper.zoom,
                                    aspectRatio: _vm.cropper.aspectRatio,
                                    viewMode: _vm.cropper.viewMode,
                                    zoomable: _vm.cropper.zoomable,
                                    rotatable: true,
                                    src: _vm.media[_vm.carouselCursor].url
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == 2
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _vm.media.length == 1
                          ? _c("div", [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    "min-height": "420px",
                                    "align-items": "center"
                                  },
                                  attrs: { slot: "img" },
                                  slot: "img"
                                },
                                [
                                  _c("img", {
                                    class:
                                      "d-block img-fluid w-100 " +
                                      [
                                        _vm.media[_vm.carouselCursor]
                                          .filter_class
                                          ? _vm.media[_vm.carouselCursor]
                                              .filter_class
                                          : ""
                                      ],
                                    attrs: {
                                      src: _vm.media[_vm.carouselCursor].url,
                                      alt:
                                        _vm.media[_vm.carouselCursor]
                                          .description,
                                      title:
                                        _vm.media[_vm.carouselCursor]
                                          .description
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm.ids.length > 0 &&
                              _vm.media[_vm.carouselCursor].type == "Image"
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "align-items-center px-2 pt-2"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        {
                                          staticClass:
                                            "nav media-drawer-filters text-center"
                                        },
                                        [
                                          _c(
                                            "li",
                                            { staticClass: "nav-item" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "p-1 pt-3" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "cursor-pointer",
                                                    attrs: {
                                                      src:
                                                        _vm.media[
                                                          _vm.carouselCursor
                                                        ].url,
                                                      width: "100px",
                                                      height: "60px"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return _vm.toggleFilter(
                                                          $event,
                                                          null
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  class: [
                                                    _vm.media[
                                                      _vm.carouselCursor
                                                    ].filter_class == null
                                                      ? "nav-link text-primary active"
                                                      : "nav-link text-muted"
                                                  ],
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.toggleFilter(
                                                        $event,
                                                        null
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("No Filter")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.filters, function(
                                            filter,
                                            index
                                          ) {
                                            return _c(
                                              "li",
                                              { staticClass: "nav-item" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "p-1 pt-3" },
                                                  [
                                                    _c("img", {
                                                      class: filter[1],
                                                      attrs: {
                                                        src:
                                                          _vm.media[
                                                            _vm.carouselCursor
                                                          ].url,
                                                        width: "100px",
                                                        height: "60px"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.toggleFilter(
                                                            $event,
                                                            filter[1]
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    class: [
                                                      _vm.media[
                                                        _vm.carouselCursor
                                                      ].filter_class ==
                                                      filter[1]
                                                        ? "nav-link text-primary active"
                                                        : "nav-link text-muted"
                                                    ],
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return _vm.toggleFilter(
                                                          $event,
                                                          filter[1]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v(_vm._s(filter[0]))]
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _vm.media.length > 1
                          ? _c(
                              "div",
                              { staticClass: "d-flex-inline px-2 pt-2" },
                              [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "nav media-drawer-filters text-center"
                                  },
                                  [
                                    _c(
                                      "li",
                                      { staticClass: "nav-item mx-md-4" },
                                      [_vm._v(" ")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.media, function(m, i) {
                                      return _c(
                                        "li",
                                        { staticClass: "nav-item mx-md-4" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "nav-link",
                                              staticStyle: {
                                                display: "block",
                                                width: "300px",
                                                height: "300px"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.carouselCursor = i
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  class: [
                                                    m.filter_class
                                                      ? m.filter_class
                                                      : ""
                                                  ]
                                                },
                                                [
                                                  _c("span", {
                                                    class:
                                                      "rounded border " +
                                                      [
                                                        i == _vm.carouselCursor
                                                          ? " border-primary shadow"
                                                          : ""
                                                      ],
                                                    style:
                                                      "display:block;padding:5px;width:100%;height:100%;background-image: url(" +
                                                      m.url +
                                                      ");background-size:cover;border-width:3px !important;"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          i == _vm.carouselCursor
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-center mb-0 small text-lighter font-weight-bold pt-2"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "cursor-pointer",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.showCropPhotoCard(
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Crop")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "cursor-pointer px-3",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.showEditMediaCard()
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Edit")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "cursor-pointer",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteMedia()
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Delete")]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      { staticClass: "nav-item mx-md-4" },
                                      [_vm._v(" ")]
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _vm.ids.length > 0 &&
                                _vm.media[_vm.carouselCursor].type == "Image"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "align-items-center px-2 pt-2"
                                      },
                                      [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "nav media-drawer-filters text-center"
                                          },
                                          [
                                            _c(
                                              "li",
                                              { staticClass: "nav-item" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "p-1 pt-3" },
                                                  [
                                                    _c("img", {
                                                      staticClass:
                                                        "cursor-pointer",
                                                      attrs: {
                                                        src:
                                                          _vm.media[
                                                            _vm.carouselCursor
                                                          ].url,
                                                        width: "100px",
                                                        height: "60px"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.toggleFilter(
                                                            $event,
                                                            null
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    class: [
                                                      _vm.media[
                                                        _vm.carouselCursor
                                                      ].filter_class == null
                                                        ? "nav-link text-primary active"
                                                        : "nav-link text-muted"
                                                    ],
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return _vm.toggleFilter(
                                                          $event,
                                                          null
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("No Filter")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.filters, function(
                                              filter,
                                              index
                                            ) {
                                              return _c(
                                                "li",
                                                { staticClass: "nav-item" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "p-1 pt-3" },
                                                    [
                                                      _c("img", {
                                                        class: filter[1],
                                                        attrs: {
                                                          src:
                                                            _vm.media[
                                                              _vm.carouselCursor
                                                            ].url,
                                                          width: "100px",
                                                          height: "60px"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.toggleFilter(
                                                              $event,
                                                              filter[1]
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      class: [
                                                        _vm.media[
                                                          _vm.carouselCursor
                                                        ].filter_class ==
                                                        filter[1]
                                                          ? "nav-link text-primary active"
                                                          : "nav-link text-muted"
                                                      ],
                                                      attrs: { href: "#" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.toggleFilter(
                                                            $event,
                                                            filter[1]
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(filter[0]))]
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _c("div", [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "mb-0 p-5 text-center font-weight-bold"
                                },
                                [
                                  _vm._v(
                                    "An error occured, please refresh the page."
                                  )
                                ]
                              )
                            ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == 3
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _c("div", { staticClass: "border-bottom mt-2" }, [
                          _c("div", { staticClass: "media px-3" }, [
                            _c("img", {
                              class: [
                                _vm.media[0].filter_class
                                  ? "mr-2 " + _vm.media[0].filter_class
                                  : "mr-2"
                              ],
                              attrs: {
                                src: _vm.media[0].url,
                                width: "42px",
                                height: "42px"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "font-weight-bold text-muted small d-none"
                                    },
                                    [_vm._v("Caption")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vue-tribute",
                                    { attrs: { options: _vm.tributeSettings } },
                                    [
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.composeText,
                                            expression: "composeText"
                                          }
                                        ],
                                        staticClass:
                                          "form-control border-0 rounded-0 no-focus",
                                        attrs: {
                                          rows: "3",
                                          placeholder: "Write a caption..."
                                        },
                                        domProps: { value: _vm.composeText },
                                        on: {
                                          keyup: function($event) {
                                            _vm.composeTextLength =
                                              _vm.composeText.length
                                          },
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.composeText =
                                              $event.target.value
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "help-text small text-right text-muted mb-0"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.composeTextLength) +
                                          "/" +
                                          _vm._s(
                                            _vm.config.uploader
                                              .max_caption_length
                                          )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          _c(
                            "p",
                            {
                              staticClass: "px-4 mb-0 py-2 cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.showTagCard()
                                }
                              }
                            },
                            [_vm._v("Tag people")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          _c(
                            "p",
                            {
                              staticClass: "px-4 mb-0 py-2 cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.showLicenseCard()
                                }
                              }
                            },
                            [
                              _vm._m(11),
                              _vm._v(" "),
                              _c("span", { staticClass: "float-right" }, [
                                _vm.licenseTitle
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-secondary btn-sm small mr-3 mt-n1 disabled",
                                        staticStyle: {
                                          "font-size": "10px",
                                          padding: "3px",
                                          "text-transform": "uppercase"
                                        },
                                        attrs: { href: "#", disabled: "" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showLicenseCard()
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.licenseTitle))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-decoration-none",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showLicenseCard()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fas fa-chevron-right fa-lg text-lighter"
                                    })
                                  ]
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          !_vm.place
                            ? _c(
                                "p",
                                {
                                  staticClass: "px-4 mb-0 py-2 cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.showLocationCard()
                                    }
                                  }
                                },
                                [_vm._v("Add location")]
                              )
                            : _c("p", { staticClass: "px-4 mb-0 py-2" }, [
                                _c("span", { staticClass: "text-lighter" }, [
                                  _vm._v("Location:")
                                ]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.place.name) +
                                    ", " +
                                    _vm._s(_vm.place.country) +
                                    "\n\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "float-right" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-outline-secondary btn-sm small mr-2",
                                      staticStyle: {
                                        "font-size": "10px",
                                        padding: "3px",
                                        "text-transform": "uppercase"
                                      },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.showLocationCard()
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-outline-secondary btn-sm small",
                                      staticStyle: {
                                        "font-size": "10px",
                                        padding: "3px",
                                        "text-transform": "uppercase"
                                      },
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.place = false
                                        }
                                      }
                                    },
                                    [_vm._v("Remove")]
                                  )
                                ])
                              ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("p", { staticClass: "px-4 mb-0 py-2" }, [
                            _c("span", [_vm._v("Audience")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-outline-secondary btn-sm small mr-3 mt-n1 disabled",
                                  staticStyle: {
                                    "font-size": "10px",
                                    padding: "3px",
                                    "text-transform": "uppercase"
                                  },
                                  attrs: { href: "#", disabled: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showVisibilityCard()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.visibilityTag))]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-decoration-none",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showVisibilityCard()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fas fa-chevron-right fa-lg text-lighter"
                                  })
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticStyle: { "min-height": "200px" } }, [
                          _c(
                            "p",
                            {
                              staticClass:
                                "px-4 mb-0 py-2 small font-weight-bold text-muted cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.showAdvancedSettingsCard()
                                }
                              }
                            },
                            [_vm._v("Advanced settings")]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "tagPeople"
                    ? _c(
                        "div",
                        { staticClass: "w-100 h-100 p-3" },
                        [
                          _c("autocomplete", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.taggedUsernames.length < 10,
                                expression: "taggedUsernames.length < 10"
                              }
                            ],
                            ref: "autocomplete",
                            attrs: {
                              search: _vm.tagSearch,
                              placeholder: "@pixelfed",
                              "aria-label": "Search usernames",
                              "get-result-value": _vm.getTagResultValue
                            },
                            on: { submit: _vm.onTagSubmitLocation }
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.taggedUsernames.length < 10,
                                  expression: "taggedUsernames.length < 10"
                                }
                              ],
                              staticClass: "font-weight-bold text-muted small"
                            },
                            [
                              _vm._v(
                                "You can tag " +
                                  _vm._s(10 - _vm.taggedUsernames.length) +
                                  " more " +
                                  _vm._s(
                                    _vm.taggedUsernames.length == 9
                                      ? "person"
                                      : "people"
                                  ) +
                                  "!"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "font-weight-bold text-center mt-3"
                            },
                            [_vm._v("Tagged People")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "list-group" },
                            [
                              _vm._l(_vm.taggedUsernames, function(tag, index) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "list-group-item d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", { staticClass: "media" }, [
                                      _c("img", {
                                        staticClass:
                                          "mr-2 rounded-circle border",
                                        attrs: {
                                          src: tag.avatar,
                                          width: "24px",
                                          height: "24px"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "media-body" }, [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v(_vm._s(tag.name))]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-switch"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: tag.privacy,
                                              expression: "tag.privacy"
                                            }
                                          ],
                                          staticClass:
                                            "custom-control-input disabled",
                                          attrs: {
                                            type: "checkbox",
                                            id:
                                              "cci-tagged-privacy-switch" +
                                              index,
                                            disabled: ""
                                          },
                                          domProps: {
                                            checked: Array.isArray(tag.privacy)
                                              ? _vm._i(tag.privacy, null) > -1
                                              : tag.privacy
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = tag.privacy,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = null,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      tag,
                                                      "privacy",
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      tag,
                                                      "privacy",
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(tag, "privacy", $$c)
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "custom-control-label font-weight-bold text-lighter",
                                            attrs: {
                                              for:
                                                "cci-tagged-privacy-switch" +
                                                index
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                tag.privacy
                                                  ? "Public"
                                                  : "Private"
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "ml-3",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.untagUsername(index)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-times text-muted"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.taggedUsernames.length == 0
                                ? _c(
                                    "div",
                                    { staticClass: "list-group-item p-3" },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-center mb-0 font-weight-bold text-lighter"
                                        },
                                        [_vm._v("Search usernames to tag.")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "font-weight-bold text-center small text-muted pt-3 mb-0"
                            },
                            [
                              _vm._v(
                                "When you tag someone, they are sent a notification."
                              ),
                              _c("br"),
                              _vm._v("For more information on tagging, "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-primary",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showTagHelpCard()
                                    }
                                  }
                                },
                                [_vm._v("click here")]
                              ),
                              _vm._v(".")
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "tagPeopleHelp"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c(
                          "p",
                          { staticClass: "mb-0 text-center py-3 px-2 lead" },
                          [
                            _vm._v(
                              "Tagging someone is like mentioning them, with the option to make it private between you."
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "mb-3 py-3 px-2 font-weight-lighter" },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\tYou can choose to tag someone in public or private mode. Public mode will allow others to see who you tagged in the post and private mode tagged users will not be shown to others.\n\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "addLocation"
                    ? _c(
                        "div",
                        { staticClass: "w-100 h-100 p-3" },
                        [
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v("Add Location")
                          ]),
                          _vm._v(" "),
                          _c("autocomplete", {
                            attrs: {
                              search: _vm.locationSearch,
                              placeholder: "Search locations ...",
                              "aria-label": "Search locations ...",
                              "get-result-value": _vm.getResultValue
                            },
                            on: { submit: _vm.onSubmitLocation }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "advancedSettings"
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _c(
                          "div",
                          { staticClass: "list-group list-group-flush" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "list-group-item d-flex justify-content-between"
                              },
                              [
                                _vm._m(12),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-switch",
                                      staticStyle: { "z-index": "9999" }
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.commentsDisabled,
                                            expression: "commentsDisabled"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "asdisablecomments"
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.commentsDisabled
                                          )
                                            ? _vm._i(
                                                _vm.commentsDisabled,
                                                null
                                              ) > -1
                                            : _vm.commentsDisabled
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.commentsDisabled,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.commentsDisabled = $$a.concat(
                                                    [$$v]
                                                  ))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.commentsDisabled = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.commentsDisabled = $$c
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "custom-control-label",
                                        attrs: { for: "asdisablecomments" }
                                      })
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "list-group-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showMediaDescriptionsCard()
                                  }
                                }
                              },
                              [_vm._m(13)]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "visibility"
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _c(
                          "div",
                          { staticClass: "list-group list-group-flush" },
                          [
                            !_vm.profile.locked
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "list-group-item lead cursor-pointer",
                                    class: {
                                      "text-primary": _vm.visibility == "public"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleVisibility("public")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tPublic\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.profile.locked
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "list-group-item lead cursor-pointer",
                                    class: {
                                      "text-primary":
                                        _vm.visibility == "unlisted"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleVisibility("unlisted")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tUnlisted\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "list-group-item lead cursor-pointer",
                                class: {
                                  "text-primary": _vm.visibility == "private"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleVisibility("private")
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tFollowers Only\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "altText"
                    ? _c(
                        "div",
                        { staticClass: "w-100 h-100 p-3" },
                        [
                          _vm._l(_vm.media, function(m, index) {
                            return _c("div", [
                              _c("div", { staticClass: "media" }, [
                                _c("img", {
                                  staticClass: "mr-3",
                                  attrs: {
                                    src: m.preview_url,
                                    width: "50px",
                                    height: "50px"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "media-body" }, [
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: m.alt,
                                        expression: "m.alt"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      placeholder:
                                        "Add a media description here...",
                                      maxlength: _vm.maxAltTextLength,
                                      rows: "4"
                                    },
                                    domProps: { value: m.alt },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(m, "alt", $event.target.value)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "help-text small text-right text-muted mb-0"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(m.alt ? m.alt.length : 0) +
                                          "/" +
                                          _vm._s(_vm.maxAltTextLength)
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr")
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "d-flex justify-content-between mb-0"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-link text-muted font-weight-bold text-decoration-none",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.goBack()
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary font-weight-bold",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.goBack()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            ]
                          )
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "addToCollection"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c("div", { staticClass: "list-group mb-3" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "list-group-item cursor-pointer compose-action border",
                              on: {
                                click: function($event) {
                                  return _vm.goBack()
                                }
                              }
                            },
                            [_vm._m(14)]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "d-flex justify-content-between mb-0"
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-link text-muted font-weight-bold text-decoration-none",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary font-weight-bold",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [_vm._v("Save")]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "schedulePost"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c(
                          "p",
                          {
                            staticClass: "text-center lead text-muted mb-0 py-5"
                          },
                          [_vm._v("This feature is not available yet.")]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "mediaMetadata"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c(
                          "p",
                          {
                            staticClass: "text-center lead text-muted mb-0 py-5"
                          },
                          [_vm._v("This feature is not available yet.")]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "addToStory"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c(
                          "p",
                          {
                            staticClass: "text-center lead text-muted mb-0 py-5"
                          },
                          [_vm._v("This feature is not available yet.")]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "editMedia"
                    ? _c("div", { staticClass: "w-100 h-100 p-3" }, [
                        _c("div", { staticClass: "media" }, [
                          _c("img", {
                            staticClass: "mr-3",
                            attrs: {
                              src: _vm.media[_vm.carouselCursor].preview_url,
                              width: "50px",
                              height: "50px"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "font-weight-bold text-muted small"
                                },
                                [_vm._v("Media Description")]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.media[_vm.carouselCursor].alt,
                                    expression: "media[carouselCursor].alt"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder:
                                    "Add a media description here...",
                                  maxlength: "140"
                                },
                                domProps: {
                                  value: _vm.media[_vm.carouselCursor].alt
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.media[_vm.carouselCursor],
                                      "alt",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "help-text small text-muted mb-0 d-flex justify-content-between"
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      "Describe your photo for people with visual impairments."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.media[_vm.carouselCursor].alt
                                          ? _vm.media[_vm.carouselCursor].alt
                                              .length
                                          : 0
                                      ) + "/140"
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "font-weight-bold text-muted small"
                                },
                                [_vm._v("License")]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.licenseId,
                                      expression: "licenseId"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.licenseId = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                _vm._l(_vm.availableLicenses, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: item.id,
                                        selected: item.id == _vm.licenseId
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.name) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "d-flex justify-content-between mb-0"
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-link text-muted font-weight-bold text-decoration-none",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary font-weight-bold",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.goBack()
                                  }
                                }
                              },
                              [_vm._v("Save")]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.page == "video-2"
                    ? _c("div", { staticClass: "w-100 h-100" }, [
                        _vm.video.title.length
                          ? _c("div", { staticClass: "border-bottom" }, [
                              _c("div", { staticClass: "media p-3" }, [
                                _c("img", {
                                  class: [
                                    _vm.media[0].filter_class
                                      ? "mr-2 " + _vm.media[0].filter_class
                                      : "mr-2"
                                  ],
                                  attrs: {
                                    src: _vm.media[0].url,
                                    width: "100px",
                                    height: "70px"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "media-body" }, [
                                  _c(
                                    "p",
                                    { staticClass: "font-weight-bold mb-1" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.video.title
                                            ? _vm.video.title.slice(0, 70)
                                            : "Untitled"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "mb-0 text-muted small" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.video.description
                                            ? _vm.video.description.slice(0, 90)
                                            : "No description"
                                        )
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          _c(
                            "p",
                            {
                              staticClass: "px-4 mb-0 py-2 cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.showLicenseCard()
                                }
                              }
                            },
                            [_vm._v("Add license")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("p", { staticClass: "px-4 mb-0 py-2" }, [
                            _c("span", [_vm._v("Audience")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-outline-secondary btn-sm small mr-3 mt-n1 disabled",
                                  staticStyle: {
                                    "font-size": "10px",
                                    padding: "3px",
                                    "text-transform": "uppercase"
                                  },
                                  attrs: { href: "#", disabled: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showVisibilityCard()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.visibilityTag))]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-decoration-none",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showVisibilityCard()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fas fa-chevron-right fa-lg text-lighter"
                                  })
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "p-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "small font-weight-bold text-muted mb-0"
                              },
                              [_vm._v("Title")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.video.title,
                                  expression: "video.title"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { placeholder: "Add a good title" },
                              domProps: { value: _vm.video.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.video,
                                    "title",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "help-text mb-0 small text-muted"
                              },
                              [_vm._v(_vm._s(_vm.video.title.length) + "/70")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group mb-0" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "small font-weight-bold text-muted mb-0"
                              },
                              [_vm._v("Description")]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.video.description,
                                  expression: "video.description"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Add an optional description",
                                maxlength: "5000",
                                rows: "5"
                              },
                              domProps: { value: _vm.video.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.video,
                                    "description",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "help-text mb-0 small text-muted"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.video.description.length) + "/5000"
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm.page == "cropPhoto"
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "card-footer bg-white d-flex justify-content-between"
                      },
                      [
                        _c("div", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: { type: "button" },
                              on: { click: _vm.rotate }
                            },
                            [_c("i", { staticClass: "fas fa-redo" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "div",
                            { staticClass: "d-inline-block button-group" },
                            [
                              _c(
                                "button",
                                {
                                  class:
                                    "btn font-weight-bold " +
                                    [
                                      _vm.cropper.aspectRatio == 16 / 9
                                        ? "btn-primary"
                                        : "btn-light"
                                    ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changeAspect(16 / 9)
                                    }
                                  }
                                },
                                [_vm._v("16:9")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  class:
                                    "btn font-weight-bold " +
                                    [
                                      _vm.cropper.aspectRatio == 4 / 3
                                        ? "btn-primary"
                                        : "btn-light"
                                    ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changeAspect(4 / 3)
                                    }
                                  }
                                },
                                [_vm._v("4:3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  class:
                                    "btn font-weight-bold " +
                                    [
                                      _vm.cropper.aspectRatio == 3 / 2
                                        ? "btn-primary"
                                        : "btn-light"
                                    ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changeAspect(3 / 2)
                                    }
                                  }
                                },
                                [_vm._v("3:2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  class:
                                    "btn font-weight-bold " +
                                    [
                                      _vm.cropper.aspectRatio == 1
                                        ? "btn-primary"
                                        : "btn-light"
                                    ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changeAspect(1)
                                    }
                                  }
                                },
                                [_vm._v("1:1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  class:
                                    "btn font-weight-bold " +
                                    [
                                      _vm.cropper.aspectRatio == 2 / 3
                                        ? "btn-primary"
                                        : "btn-light"
                                    ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changeAspect(2 / 3)
                                    }
                                  }
                                },
                                [_vm._v("2:3")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  : _vm._e()
              ]
            )
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card-header d-inline-flex align-items-center justify-content-between bg-white"
      },
      [
        _c("span", { staticClass: "pr-3" }, [
          _c("i", { staticClass: "fas fa-cog fa-lg text-muted" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "font-weight-bold" }, [
          _vm._v("\n\t\t\t\t\t\tCamera Roll\n\t\t\t\t\t")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-primary font-weight-bold" }, [
          _vm._v("Upload")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "pr-3" }, [
      _c("i", { staticClass: "fas fa-info-circle fa-lg text-primary" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "spinner-border spinner-border-sm",
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "spinner-border spinner-border-sm",
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "mr-3 align-items-center justify-content-center",
        staticStyle: {
          display: "inline-flex",
          width: "40px",
          height: "40px",
          "border-radius": "100%",
          "background-color": "#008DF5"
        }
      },
      [_c("i", { staticClass: "fas fa-bolt text-white fa-lg" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("span", { staticClass: "h5 mt-0 font-weight-bold text-primary" }, [
        _vm._v("New Post")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media" }, [
      _c(
        "div",
        {
          staticClass: "mr-3 align-items-center justify-content-center",
          staticStyle: {
            display: "inline-flex",
            width: "40px",
            height: "40px",
            "border-radius": "100%",
            border: "2px solid #008DF5"
          }
        },
        [_c("i", { staticClass: "far fa-edit text-primary fa-lg" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "media-body text-left" }, [
        _c("p", { staticClass: "mb-0" }, [
          _c("span", { staticClass: "h5 mt-0 font-weight-bold text-primary" }, [
            _vm._v("New Text Post")
          ]),
          _vm._v(" "),
          _c("sup", { staticClass: "float-right mt-2" }, [
            _c(
              "span",
              {
                staticClass:
                  "btn btn-outline-lighter p-1 btn-sm font-weight-bold py-0",
                staticStyle: { "font-size": "10px", "line-height": "0.6" }
              },
              [_vm._v("BETA")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0 text-muted" }, [
          _vm._v("Share a text only post")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body py-2" }, [
      _c("div", { staticClass: "media" }, [
        _c(
          "div",
          {
            staticClass: "mr-3 align-items-center justify-content-center",
            staticStyle: {
              display: "inline-flex",
              width: "40px",
              height: "40px",
              "border-radius": "100%",
              border: "1px solid #008DF5"
            }
          },
          [_c("i", { staticClass: "fas fa-history text-primary fa-lg" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "media-body text-left" }, [
          _c("p", { staticClass: "mb-0" }, [
            _c(
              "span",
              { staticClass: "h5 mt-0 font-weight-bold text-primary" },
              [_vm._v("New Story")]
            ),
            _vm._v(" "),
            _c("sup", { staticClass: "float-right mt-2" }, [
              _c(
                "span",
                {
                  staticClass:
                    "btn btn-outline-lighter p-1 btn-sm font-weight-bold py-0",
                  staticStyle: { "font-size": "10px", "line-height": "0.6" }
                },
                [_vm._v("BETA")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 text-muted" }, [
            _vm._v("Add to your story")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body py-2" }, [
      _c("div", { staticClass: "media" }, [
        _c(
          "div",
          {
            staticClass: "mr-3 align-items-center justify-content-center",
            staticStyle: {
              display: "inline-flex",
              width: "40px",
              height: "40px",
              "border-radius": "100%",
              border: "2px solid #008DF5"
            }
          },
          [_c("i", { staticClass: "fas fa-poll-h text-primary fa-lg" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "media-body text-left" }, [
          _c("p", { staticClass: "mb-0" }, [
            _c(
              "span",
              { staticClass: "h5 mt-0 font-weight-bold text-primary" },
              [_vm._v("New Poll")]
            ),
            _vm._v(" "),
            _c("sup", { staticClass: "float-right mt-2" }, [
              _c(
                "span",
                {
                  staticClass:
                    "btn btn-outline-lighter p-1 btn-sm font-weight-bold py-0",
                  staticStyle: { "font-size": "10px", "line-height": "0.6" }
                },
                [_vm._v("BETA")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 text-muted" }, [_vm._v("Create a poll")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "card mx-md-5 my-md-3 shadow-none border compose-action text-decoration-none text-dark",
        attrs: { href: "/i/collections/create" }
      },
      [
        _c("div", { staticClass: "card-body py-2" }, [
          _c("div", { staticClass: "media" }, [
            _c(
              "div",
              {
                staticClass: "mr-3 align-items-center justify-content-center",
                staticStyle: {
                  display: "inline-flex",
                  width: "40px",
                  height: "40px",
                  "border-radius": "100%",
                  border: "1px solid #008DF5"
                }
              },
              [_c("i", { staticClass: "fas fa-images text-primary fa-lg" })]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "media-body text-left" }, [
              _c("p", { staticClass: "mb-0" }, [
                _c(
                  "span",
                  { staticClass: "h5 mt-0 font-weight-bold text-primary" },
                  [_vm._v("New Collection")]
                ),
                _vm._v(" "),
                _c("sup", { staticClass: "float-right mt-2" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "btn btn-outline-lighter p-1 btn-sm font-weight-bold py-0",
                      staticStyle: { "font-size": "10px", "line-height": "0.6" }
                    },
                    [_vm._v("BETA")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0 text-muted" }, [
                _vm._v("New collection of posts")
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-3" }, [
      _c(
        "a",
        { staticClass: "font-weight-bold", attrs: { href: "/site/help" } },
        [_vm._v("Help")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Add license "),
      _c("span", { staticClass: "ml-2 badge badge-primary" }, [_vm._v("NEW")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "text-dark " }, [_vm._v("Turn off commenting")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted small mb-0" }, [
        _vm._v("Disables comments for this post, you can change this later.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center" },
      [
        _c("div", [
          _c("div", { staticClass: "text-dark" }, [
            _vm._v("Media Descriptions")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted small mb-0" }, [
            _vm._v("Describe your photos for people with visual impairments.")
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-chevron-right fa-lg text-lighter" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media" }, [
      _c("img", {
        staticClass: "mr-3",
        attrs: { src: "", alt: "", width: "50px", height: "50px" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "media-body" }, [
        _c("h5", { staticClass: "mt-0" }, [_vm._v("collection title")]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0 text-muted small" }, [
          _vm._v("3 Photos - Created 2h ago")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-tribute/dist/vue-tribute.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-tribute/dist/vue-tribute.es.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_0__);


var VueTribute = {
  name: "vue-tribute",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      immediate: false,
      deep: true,
      handler: function handler() {
        var _this = this;

        if (this.tribute) {
          setTimeout(function () {
            var $el = _this.$slots.default[0].elm;

            _this.tribute.detach($el);

            setTimeout(function () {
              $el = _this.$slots.default[0].elm;
              _this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this.options);

              _this.tribute.attach($el);

              $el.tributeInstance = _this.tribute;
            }, 0);
          }, 0);
        }
      }
    }
  },
  mounted: function mounted() {
    if (typeof tributejs__WEBPACK_IMPORTED_MODULE_0___default.a === "undefined") {
      throw new Error("[vue-tribute] cannot locate tributejs!");
    }

    var $el = this.$slots.default[0].elm;
    this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_0___default.a(this.options);
    this.tribute.attach($el);
    $el.tributeInstance = this.tribute;
    $el.addEventListener("tribute-replaced", function (e) {
      e.target.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    var $el = this.$slots.default[0].elm;

    if (this.tribute) {
      this.tribute.detach($el);
    }
  },
  render: function render(h) {
    return h("div", {
      staticClass: "v-tribute"
    }, this.$slots.default);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(VueTribute.name, VueTribute);
}

/* harmony default export */ __webpack_exports__["default"] = (VueTribute);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/js/components/ComposeModal.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/ComposeModal.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true& */ "./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true&");
/* harmony import */ var _ComposeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComposeModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& */ "./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComposeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ec34072",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ComposeModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComposeModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=style&index=0&id=4ec34072&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_style_index_0_id_4ec34072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ComposeModal.vue?vue&type=template&id=4ec34072&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposeModal_vue_vue_type_template_id_4ec34072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/compose.js":
/*!****************************************!*\
  !*** ./resources/assets/js/compose.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('compose-modal', __webpack_require__(/*! ./components/ComposeModal.vue */ "./resources/assets/js/components/ComposeModal.vue")["default"]);

/***/ }),

/***/ 7:
/*!**********************************************!*\
  !*** multi ./resources/assets/js/compose.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kaimann/Docker/girlsinnovationclub/pixelfed/resources/assets/js/compose.js */"./resources/assets/js/compose.js");


/***/ })

},[[7,"/js/manifest"]]]);