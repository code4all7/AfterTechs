/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/skin/skin-1.css */ \"./css/skin/skin-1.css\");\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/ashishshokeen/dev/aftertechs/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //import Slider from \"react-rangeslider\";\n//import \"react-rangeslider/lib/index.css\";\n\n\n //import useScrollPosition from \"use-scroll-position\";\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: header,\n    1: setHeader\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('fixed');\n  const {\n    0: header_,\n    1: setHeader_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setbody_(document.querySelector('body'));\n    setHeader_(document.getElementsByClassName('main-bar-wraper'));\n  }, []); //let scrollPosition = useScrollPosition();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === 'fixed') {\n      header_[0].classList.add('sticky-header');\n      header_[0].classList.remove('sticky-no');\n    } else {\n      header_[0].classList.add('sticky-no');\n      header_[0].classList.remove('sticky-header');\n      header_[0].classList.remove('is-fixed');\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + 'px';\n  };\n  /*  header === \"fixed\" && scrollPosition > 10\r\n    ? header_ && header_[0].classList.add(\"is-fixed\")\r\n    : header_ && header_[0].classList.remove(\"is-fixed\"); */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"AfterTechs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"icon\" // type='image/png'\n        ,\n        sizes: \"16x16\",\n        href: \"/images/fevicon2.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"#top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n        className: \"scroltop icon-up\",\n        type: \"button\",\n        style: {\n          display: 'inline-block'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n          className: \"fa fa-arrow-up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFLRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkY7QUFBQSxrQkFERjtBQTBDRDs7QUFFRCxpRUFBZXhCLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnRlcnRlY2hzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vL2ltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbi8vaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXHJcbi8vaW1wb3J0IHVzZVNjcm9sbFBvc2l0aW9uIGZyb20gXCJ1c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0ICcuLi9jc3Mvc2tpbi9za2luLTEuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3dpdGNoZXIuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3RvZ2dsZTEsIHNldFRvZ2dsZTFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvZHlfLCBzZXRib2R5X10gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKCdmaXhlZCcpXHJcbiAgY29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Ym9keV8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKVxyXG4gICAgc2V0SGVhZGVyXyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLWJhci13cmFwZXInKSlcclxuICB9LCBbXSlcclxuXHJcbiAgLy9sZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SGVhZGVyKHZhbHVlKVxyXG4gICAgaWYgKHZhbHVlID09PSAnZml4ZWQnKSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZCgnc3RpY2t5LWhlYWRlcicpXHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LW5vJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZCgnc3RpY2t5LW5vJylcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3ktaGVhZGVyJylcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSlcclxuICAgIGJvZHlfLnN0eWxlLnBhZGRpbmcgPSB2YWx1ZSArICdweCdcclxuICB9XHJcblxyXG4gIC8qICBoZWFkZXIgPT09IFwiZml4ZWRcIiAmJiBzY3JvbGxQb3NpdGlvbiA+IDEwXHJcbiAgICA/IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwiaXMtZml4ZWRcIilcclxuICAgIDogaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTsgKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BZnRlclRlY2hzPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdpY29uJ1xyXG4gICAgICAgICAgLy8gdHlwZT0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgc2l6ZXM9JzE2eDE2J1xyXG4gICAgICAgICAgaHJlZj0nL2ltYWdlcy9mZXZpY29uMi5wbmcnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS13cmFwZXInPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGFcclxuICAgICAgICBocmVmPSdodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9jYXJ0L2NvbmZpZ3VyZV9iZWZvcmVfYWRkaW5nLzMyOTUwNzQyLz9saWNlbnNlPXJlZ3VsYXI7J1xyXG4gICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgIGNsYXNzTmFtZT0nYnQtYnV5LW5vdyB0aGVtZS1idG4nXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9J3RpLXNob3BwaW5nLWNhcnQnIC8+XHJcbiAgICAgICAgPHNwYW4+QnV5IE5vdzwvc3Bhbj5cclxuICAgICAgPC9hPiAqL31cclxuICAgICAgey8qIDxhXHJcbiAgICAgICAgaHJlZj0naHR0cHM6Ly9zdXBwb3J0LnczaXRleHBlcnRzLmNvbSdcclxuICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICBjbGFzc05hbWU9J2J0LXN1cHBvcnQtbm93IHRoZW1lLWJ0bidcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0ndGktaGVhZHBob25lLWFsdCcgLz5cclxuICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxyXG4gICAgICA8L2E+ICovfVxyXG4gICAgICA8YSBocmVmPScjdG9wJz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3Njcm9sdG9wIGljb24tdXAnXHJcbiAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYXJyb3ctdXAnIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJib2R5XyIsInNldGJvZHlfIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-1.css":
/*!*****************************!*\
  !*** ./css/skin/skin-1.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();