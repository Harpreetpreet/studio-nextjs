module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dell\\Desktop\\studio\\components\\Banner.js";



var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2734991621" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2734991621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2734991621" + " " + "head column is-3 is-offset-7 is-size-5 has-text-white has-text-centered has-text-weight-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "MODEL PHOTOGRAPY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2734991621" + " " + "column is-3 is-offset-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2734991621" + " " + " hint has-text-white is-size-2 has-text-weight-bold  has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "CREATIVE", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2734991621" + " " + "color has-text-danger is-size-2 has-text-weight-bold has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "STUDIO"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2734991621" + " " + " item has-text-centered has-text-white column is-3 is-offset-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Capturing moments from today")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2734991621" + " " + "view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2734991621" + " " + " line column is-3 is-offset-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-2734991621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2734991621" + " " + "bottm has-text-centered has-text-white has-text-weight-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " VIEW WORK"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2734991621",
    __self: this
  }, ".back.jsx-2734991621{background-image:url(\"https://colorlib.com/preview/theme/shotgear/img/banner_bg.png\");background-size:cover;background-repeat :no-repeat;height:40rem;background-position:center;}.color.jsx-2734991621{margin-top:-3.75rem;padding-left:15px;}.head.jsx-2734991621{padding-top:17rem;}.bottm.jsx-2734991621{margin-top:-3.25rem;}view.jsx-2734991621:hover{color:#ff4800;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxcRGVza3RvcFxcc3R1ZGlvXFxjb21wb25lbnRzXFxCYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JZLEFBRzBGLEFBT2pFLEFBSUgsQUFHRyxBQUdQLGNBQ2pCLElBTkEsRUFKc0IsQUFPdEIsa0JBTkEsZ0RBUnlCLHNCQUNRLDZCQUNsQixhQUNlLDJCQUM5QiIsImZpbGUiOiJDOlxcVXNlcnNcXGRlbGxcXERlc2t0b3BcXHN0dWRpb1xcY29tcG9uZW50c1xcQmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFubmVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWQgY29sdW1uIGlzLTMgaXMtb2Zmc2V0LTcgaXMtc2l6ZS01IGhhcy10ZXh0LXdoaXRlIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgTU9ERUwgUEhPVE9HUkFQWVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTMgaXMtb2Zmc2V0LTdcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBoaW50IGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtMiBoYXMtdGV4dC13ZWlnaHQtYm9sZCAgaGFzLXRleHQtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIENSRUFUSVZFXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yIGhhcy10ZXh0LWRhbmdlciBpcy1zaXplLTIgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtY2VudGVyZWRcIj5TVFVESU88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCIgaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13aGl0ZSBjb2x1bW4gaXMtMyBpcy1vZmZzZXQtN1wiPlxyXG4gICAgICAgICAgICBDYXB0dXJpbmcgbW9tZW50cyBmcm9tIHRvZGF5XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxyXG4gICAgICAgICA8YSBjbGFzc05hbWU9XCIgbGluZSBjb2x1bW4gaXMtMyBpcy1vZmZzZXQtN1wiPlxyXG4gICAgICAgICA8aHIgLz5cclxuICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJvdHRtIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdoaXRlIGhhcy10ZXh0LXdlaWdodC1zZW1pYm9sZFwiPiBWSUVXIFdPUks8L2gzPlxyXG4gICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuPHN0eWxlIGpzeD57YFxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vcHJldmlldy90aGVtZS9zaG90Z2Vhci9pbWcvYmFubmVyX2JnLnBuZ1wiKTtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0IDogbm8tcmVwZWF0O1xyXG4gICBoZWlnaHQ6NDByZW07XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uY29sb3J7XHJcbiAgICBtYXJnaW4tdG9wOiAtMy43NXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uaGVhZHtcclxuICAgIHBhZGRpbmctdG9wOjE3cmVtO1xyXG59XHJcbi5ib3R0bXtcclxuICAgIG1hcmdpbi10b3A6IC0zLjI1cmVtO1xyXG59XHJcbnZpZXc6aG92ZXJ7XHJcbiAgICBjb2xvcjojZmY0ODAwO1xyXG59XHJcbmB9XHJcblxyXG48L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\dell\\Desktop\\studio\\components\\Banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Feature.js":
/*!*******************************!*\
  !*** ./components/Feature.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dell\\Desktop\\studio\\components\\Feature.js";



var Feature = function Feature() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4064868202" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "class": "flaticon-love-and-romance",
    className: "jsx-4064868202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4064868202" + " " + "columns ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4064868202" + " " + "bgcolor column is-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-4064868202" + " " + "paragraph has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " WEDDING PHOTOGRAPHY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-4064868202" + " " + "paragraph has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "World the end of summer the sweltering heat makes human sweat in the night and man plants and trees wilt even")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4064868202" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://colorlib.com/preview/theme/shotgear/img/single_offer_img_1.png",
    alt: "",
    className: "jsx-4064868202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://colorlib.com/preview/theme/shotgear/img/single_offer_img_2.png",
    className: "jsx-4064868202",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4064868202",
    __self: this
  }, ".bgcolor.jsx-4064868202{background-color :#FCF7F7;margin-top :.75rem;margin-bottom :15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxcRGVza3RvcFxcc3R1ZGlvXFxjb21wb25lbnRzXFxGZWF0dXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFLLEFBR2dDLDBCQUNQLG1CQUNFLHFCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGRlbGxcXERlc2t0b3BcXHN0dWRpb1xcY29tcG9uZW50c1xcRmVhdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZlYXR1cmUgPSAoKSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbjxzcGFuIGNsYXNzPVwiZmxhdGljb24tbG92ZS1hbmQtcm9tYW5jZVwiPjwvc3Bhbj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZ2NvbG9yIGNvbHVtbiBpcy00XCI+PGg0IGNsYXNzTmFtZT1cInBhcmFncmFwaCBoYXMtdGV4dC1jZW50ZXJlZFwiPiBXRURESU5HIFBIT1RPR1JBUEhZPC9oND5cclxuPGg2IGNsYXNzTmFtZT1cInBhcmFncmFwaCBoYXMtdGV4dC1jZW50ZXJlZFwiPldvcmxkIHRoZSBlbmQgb2Ygc3VtbWVyIHRoZSBzd2VsdGVyaW5nIGhlYXQgbWFrZXMgaHVtYW4gc3dlYXQgaW4gdGhlIG5pZ2h0IGFuZCBtYW4gcGxhbnRzIGFuZCB0cmVlcyB3aWx0IGV2ZW48L2g2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj4gXHJcbjxpbWcgc3JjPVwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vcHJldmlldy90aGVtZS9zaG90Z2Vhci9pbWcvc2luZ2xlX29mZmVyX2ltZ18xLnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+XHJcbjwvZGl2PlxyXG48aW1nIHNyYz1cImh0dHBzOi8vY29sb3JsaWIuY29tL3ByZXZpZXcvdGhlbWUvc2hvdGdlYXIvaW1nL3NpbmdsZV9vZmZlcl9pbWdfMi5wbmdcIj48L2ltZz5cclxuPHN0eWxlIGpzeD5cclxuICAgIHtgXHJcbiAgIC5iZ2NvbG9ye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3IgOiAjRkNGN0Y3O1xyXG4gICAgIG1hcmdpbi10b3AgOiAuNzVyZW07XHJcbiAgICAgbWFyZ2luLWJvdHRvbSA6IDE1cmVtO1xyXG4gICB9XHJcblxyXG4gICAgYH1cclxuPC9zdHlsZT5cclxuPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSA7Il19 */\n/*@ sourceURL=C:\\Users\\dell\\Desktop\\studio\\components\\Feature.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dell\\Desktop\\studio\\components\\Header.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2013852668" + " " + "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    role: "navigation",
    "aria-label": "main navigation",
    className: "jsx-2013852668" + " " + "navbar top is-fixed-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "img is-size-4 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://colorlib.com/preview/theme/shotgear/img/logo.png",
    className: "jsx-2013852668",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    role: "button",
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample",
    className: "jsx-2013852668" + " " + "navbar-burger burger  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "jsx-2013852668",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "jsx-2013852668",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "jsx-2013852668",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "navbarBasicExample",
    className: "jsx-2013852668" + " " + "navbar-menu  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "HOME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "SERVICE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-item has-dropdown is-hoverable ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-dropdown ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Protofolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Protofolio Details"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-item has-dropdown is-hoverable ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-dropdown ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "] Single Blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-item has-dropdown is-hoverable ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "PAGES"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2013852668" + " " + "navbar-dropdown ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Elements"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2013852668" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2013852668" + " " + "fas fa-shopping-bag store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2013852668",
    __self: this
  }, ".store.jsx-2013852668{margin-top:1.15rem;}.top.jsx-2013852668{padding-top:2rem;padding-bottom:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxcRGVza3RvcFxcc3R1ZGlvXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VZLEFBR3dCLEFBR0YsaUJBQ0ksRUFIekIsbUJBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxkZWxsXFxEZXNrdG9wXFxzdHVkaW9cXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj4gXHJcbjxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHRvcCBpcy1maXhlZC10b3BcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cclxuICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBpcy1zaXplLTQgaGFzLXRleHQtY2VudGVyZWRcIiA+IDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vcHJldmlldy90aGVtZS9zaG90Z2Vhci9pbWcvbG9nby5wbmdcIj48L2ltZz48L2Rpdj5cclxuICAgXHJcbiAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJ1cmdlciBidXJnZXIgIFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS10YXJnZXQ9XCJuYXZiYXJCYXNpY0V4YW1wbGVcIj5cclxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICBcclxuICA8ZGl2IGlkPVwibmF2YmFyQmFzaWNFeGFtcGxlXCIgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnUgIFwiPlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XHJcbiAgICAgICAgSE9NRVxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgIEFCT1VUXHJcbiAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XHJcbiAgICAgU0VSVklDRVxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGhhcy1kcm9wZG93biBpcy1ob3ZlcmFibGUgXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5cclxuICAgICAgICAgIFBPUlRGT0xJT1xyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd24gXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICBQcm90b2ZvbGlvXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICBQcm90b2ZvbGlvIERldGFpbHNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlIFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCI+XHJcbiAgICAgICAgICBCTE9HXHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93biBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XVxyXG4gICAgICAgICBTaW5nbGUgQmxvZ1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlIFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCI+XHJcbiAgICAgICAgICBQQUdFU1xyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd24gXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICBFbGVtZW50c1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctYmFnIHN0b3JlXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvbmF2PlxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG4uc3RvcmV7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjE1cmVtO1xyXG59XHJcbi50b3B7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxufVxyXG5gfVxyXG4gIDwvc3R5bGU+XHJcbiAgPC9zZWN0aW9uPlxyXG5cclxuIFxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Users\\dell\\Desktop\\studio\\components\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Feature */ "./components/Feature.js");
var _jsxFileName = "C:\\Users\\dell\\Desktop\\studio\\pages\\index.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Desktop\studio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map