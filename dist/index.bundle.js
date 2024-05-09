"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./metadata/HammersmithOne-Regular.ttf */ "./src/metadata/HammersmithOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./metadata/BungeeShade-Regular.ttf */ "./src/metadata/BungeeShade-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --black: #41444B;
  --background: #3D405B;
  --text: #F4F1DE;
  --orange: rgb(255, 223, 186);
  --yellow: #ffffba;
  --green: #baffc9;
  --red: #f38ba8;
  --blue: #bae1ff;
}

@font-face {
  font-family: 'regular';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: 'display';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

html {
  width: 100%;
  scroll-behavior: smooth;
}
body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  background-color: var(--background);
  font-family: 'regular';
  color: var(--text);
  overflow-x: hidden;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: var(--black);
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.selected {
  border-bottom: 2px solid var(--orange) !important;
}

header {
  position: fixed;
  top: 0;
  left: 50%;
  width: 90%;
  transform: translate(-50%, 0);
  background-color: var(--background);
  z-index: 100;
}

header nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px;
}

header nav button {
  background: none;
  border: none;
  padding-bottom: 4px;
  color: var(--text);
  font-family: 'display';
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  width: 80px;
}
header nav button:hover {
  opacity: 0.69;
}
header nav button:active {
  opacity: 1;
}

.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  padding: 24px;
}

h1 {
  align-self: center;
  font-family: 'display';
  font-size: 48px;
  color: var(--text);
  letter-spacing: 2px;
}

.reservation {
  align-self: flex-end;
  font-size: 14px;
  text-align: end;
}

#reservationBtn {
  margin-top: 32px;
  align-self: center;
  position: relative;
  border: none;
  font-family: 'display';
  color: var(--orange);
  font-size: 18px;
  letter-spacing: 2px;
  background-color: var(--black);
  padding: 6px 8px;
  border: 3px solid var(--text);
  cursor: pointer;
}
#reservationBtn:hover {
  color: var(--black);
  background-color: var(--orange);
  border: 3px solid var(--black);
}
#reservationBtn:active {
  color: var(--orange);
  background-color: var(--black);
  border: 3px solid var(--text);
}
#reservationBtn::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: var(--text);
  border-right: 3px solid var(--text);
  border-bottom: 3px solid var(--text);
}
#reservationBtn:hover::before {
  background-color: var(--orange);
  border-right: 3px solid var(--orange);
  border-bottom: 3px solid var(--orange);
}

footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: var(--orange);
  z-index: 100;
}

footer button {
  cursor: pointer;
  opacity: 1;
}
footer button:hover {
  opacity: 0.69;
}
footer button:active {
  opacity: 1;
}
#instagramBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  padding: 0;
  background: none;
  border: none;
}
#instagramBtn img {
  width: 16px;
  margin: 0;
  padding: 0;
}
#jobBoardBtn {
  background: none;
  border: none;
  font-family: 'regular';
  color: var(--black);
  margin-right: 16px;
  padding: 0;
}

.menu-content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  padding: 24px; 
}

#menuSwitcher {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
#menuSwitcher button {
  background: none;
  border: none;
  font-family: 'regular';
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: var(--text);
  width: 80px;
  cursor: pointer;
}

#menuContainer {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
}

.menuPage h2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'regular';
  font-size: 32px;
}
.menuPage span {
  font-family: 'regular';
  font-size: 18px;
  text-align: center;
  line-height: 1;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  padding: 24px; 
}
.about-content p {
  font-family: 'regular';
}

.shop-desc {
  font-size: 14px;
  text-align: center;
  line-height: 1;
  font-family: 'regular';
}
.leadership {
  font-size: 14px;
  text-align: center;
  line-height: 2;
  font-family: 'regular';
}

#hourLoco {
  width: 336px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 8px;
}
#hourLoco span {
  font-family: 'regular';
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#scrollIndicator {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 34px;
  background-color: var(--orange);
  z-index: 101;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --black: #41444B;\n  --background: #3D405B;\n  --text: #F4F1DE;\n  --orange: rgb(255, 223, 186);\n  --yellow: #ffffba;\n  --green: #baffc9;\n  --red: #f38ba8;\n  --blue: #bae1ff;\n}\n\n@font-face {\n  font-family: 'regular';\n  src: url('./metadata/HammersmithOne-Regular.ttf');\n}\n@font-face {\n  font-family: 'display';\n  src: url('./metadata/BungeeShade-Regular.ttf');\n}\n\nhtml {\n  width: 100%;\n  scroll-behavior: smooth;\n}\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  background-color: var(--background);\n  font-family: 'regular';\n  color: var(--text);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n::-webkit-scrollbar {\n  width: 2px;\n}\n::-webkit-scrollbar-track {\n  background: var(--black);\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.selected {\n  border-bottom: 2px solid var(--orange) !important;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, 0);\n  background-color: var(--background);\n  z-index: 100;\n}\n\nheader nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 14px;\n}\n\nheader nav button {\n  background: none;\n  border: none;\n  padding-bottom: 4px;\n  color: var(--text);\n  font-family: 'display';\n  font-size: 16px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  width: 80px;\n}\nheader nav button:hover {\n  opacity: 0.69;\n}\nheader nav button:active {\n  opacity: 1;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  padding: 24px;\n}\n\nh1 {\n  align-self: center;\n  font-family: 'display';\n  font-size: 48px;\n  color: var(--text);\n  letter-spacing: 2px;\n}\n\n.reservation {\n  align-self: flex-end;\n  font-size: 14px;\n  text-align: end;\n}\n\n#reservationBtn {\n  margin-top: 32px;\n  align-self: center;\n  position: relative;\n  border: none;\n  font-family: 'display';\n  color: var(--orange);\n  font-size: 18px;\n  letter-spacing: 2px;\n  background-color: var(--black);\n  padding: 6px 8px;\n  border: 3px solid var(--text);\n  cursor: pointer;\n}\n#reservationBtn:hover {\n  color: var(--black);\n  background-color: var(--orange);\n  border: 3px solid var(--black);\n}\n#reservationBtn:active {\n  color: var(--orange);\n  background-color: var(--black);\n  border: 3px solid var(--text);\n}\n#reservationBtn::before {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background-color: var(--text);\n  border-right: 3px solid var(--text);\n  border-bottom: 3px solid var(--text);\n}\n#reservationBtn:hover::before {\n  background-color: var(--orange);\n  border-right: 3px solid var(--orange);\n  border-bottom: 3px solid var(--orange);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, 0);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  background-color: var(--orange);\n  z-index: 100;\n}\n\nfooter button {\n  cursor: pointer;\n  opacity: 1;\n}\nfooter button:hover {\n  opacity: 0.69;\n}\nfooter button:active {\n  opacity: 1;\n}\n#instagramBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: 16px;\n  padding: 0;\n  background: none;\n  border: none;\n}\n#instagramBtn img {\n  width: 16px;\n  margin: 0;\n  padding: 0;\n}\n#jobBoardBtn {\n  background: none;\n  border: none;\n  font-family: 'regular';\n  color: var(--black);\n  margin-right: 16px;\n  padding: 0;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  padding: 24px; \n}\n\n#menuSwitcher {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: row;\n  gap: 24px;\n}\n#menuSwitcher button {\n  background: none;\n  border: none;\n  font-family: 'regular';\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 1px;\n  color: var(--text);\n  width: 80px;\n  cursor: pointer;\n}\n\n#menuContainer {\n  margin-top: 16px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.menuPage h2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  font-family: 'regular';\n  font-size: 32px;\n}\n.menuPage span {\n  font-family: 'regular';\n  font-size: 18px;\n  text-align: center;\n  line-height: 1;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  padding: 24px; \n}\n.about-content p {\n  font-family: 'regular';\n}\n\n.shop-desc {\n  font-size: 14px;\n  text-align: center;\n  line-height: 1;\n  font-family: 'regular';\n}\n.leadership {\n  font-size: 14px;\n  text-align: center;\n  line-height: 2;\n  font-family: 'regular';\n}\n\n#hourLoco {\n  width: 336px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: start;\n  gap: 8px;\n}\n#hourLoco span {\n  font-family: 'regular';\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n#scrollIndicator {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  margin-bottom: 34px;\n  background-color: var(--orange);\n  z-index: 101;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function aboutSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.add("about-content");
  contentContainer.classList.remove("home-content");
  contentContainer.classList.remove("menu-content");

  const shopDesc = document.createElement('p');
  shopDesc.classList.add("shop-desc");
  shopDesc.innerHTML = `Roman’s serves spirited, Italian-influenced food that reflects a longstanding commitment to local agriculture and sustainability. Our menu celebrates our relationships with area farmers, tradition-based artisans, agricultural-based Italian importers, and winemakers.<br><br>While the experience at Roman’s showcases our focus on procuring the highest quality food and wine, we are, above all, committed to making our industry a more equitable and sustainable home for all of those who work in it.`;
  contentContainer.appendChild(shopDesc);

  const leadership = document.createElement('span');
  leadership.classList.add("leadership");
  leadership.innerHTML = `Chef: Hannah Shizgal-Paris<br>Sous Chefs: Jose Genao & Steve Handy<br>General Manager: Brittany Tinelli<br>Assistant General Manager: Fernando Cambeiro`;
  contentContainer.appendChild(leadership);

  const hourLocContainer = document.createElement('div'); 
  hourLocContainer.id = "hourLoco";
  contentContainer.appendChild(hourLocContainer);
  const hours = document.createElement('span');
  hours.innerHTML = `HOURS<br><br>DINNER: Monday - Sunday, 5 pm - 10:30 pm<br>LUNCH: Saturday & Sunday, 11 am - 3 pm`;
  hourLocContainer.appendChild(hours);
  const location = document.createElement('span');
  location.innerHTML = `LOCATION<br><br>243 Dekalb Ave, Brooklyn, NY 11205<br>718.622.5300<br>hello@romansnyc.com`;
  hourLocContainer.appendChild(location);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutSection);

/***/ }),

/***/ "./src/dinnerMenu.js":
/*!***************************!*\
  !*** ./src/dinnerMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dinnerMenu() {
  const dinnerPage = document.createElement('div');
  dinnerPage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "FIRST"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `OLIVES<br><span style="font-size: 16px;">$9</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `ANTIPASTI PLATE<br><span style="font-size: 16px;">$22</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `FAVA BEAN PUREE<br><span style="font-size: 16px;">$18</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `CROSTINI OF SNAP PEAS, MINT AND FINOCCHIONA<br><span style="font-size: 16px;">$16</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `SQUACQUERONE, ASPARAGUS, WHITE BEANS AND BOTTARGA<br><span style="font-size: 16px;">$22</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `LETTUCES, HAZELNUTS, MUSTARD VINAIGRETTE AND PECORINO<br><span style="font-size: 16px;">$23</span>`;
  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6];
  dinnerPage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  }); 

  const heading2 = document.createElement('h2');
  heading2.textContent = "SECOND"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `TAGLIATELLE, FAVA LEAF PESTO AND ASPARAGUS<br><span style="font-size: 16px;">$27</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `LINGUINE, CLAMS, WILD FENNEL AND CHILE<br><span style="font-size: 16px;">$28</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `MEZZE RIGATONI, PORK RAGU, TOMATO AND OLIVES<br><span style="font-size: 16px;">$28</span>`;
  const heading2span = [h2sp1, h2sp2, h2sp3];
  dinnerPage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  const heading3 = document.createElement('h2');
  heading3.textContent = "THIRD"
  const h3sp1 = document.createElement('span');
  h3sp1.innerHTML = `SWORDFISH, POTATOES, SUN DRIED TOMATOES AND PINE NUTS<br><span style="font-size: 16px;">$39</span>`;
  const h3sp2 = document.createElement('span');
  h3sp2.innerHTML = `CHICKEN DIAVOLO WITH BROCCOLINI<br><span style="font-size: 16px;">$44</span>`;
  const h3sp3 = document.createElement('span');
  h3sp3.innerHTML = `PORK PORTERHOUSE, GRILLED RAMPS AND CHICKPEAS<br><span style="font-size: 16px;">$43</span>`;
  const heading3span = [h3sp1, h3sp2, h3sp3];
  dinnerPage.appendChild(heading3);
  heading3span.forEach(span => {
    heading3.appendChild(span);
  });

  const heading4 = document.createElement('h2');
  heading4.textContent = "DESERT"
  const h4sp1 = document.createElement('span');
  h4sp1.innerHTML = `CREMA CAPRINO, WALNUTS AND HONEY<br><span style="font-size: 16px;">$13</span>`;
  const h4sp2 = document.createElement('span');
  h4sp2.innerHTML = `PANNA COTTA WITH STRAWBERRIES AND APPLE BALSAMIC<br><span style="font-size: 16px;">$13</span>`;
  const h4sp3 = document.createElement('span');
  h4sp3.innerHTML = `OLIVE OIL CAKE, ROASTED RHUBARB AND CREME FRAICHE<br><span style="font-size: 16px;">$15</span>`;
  const h4sp4 = document.createElement('span');
  h4sp4.innerHTML = `MINT STRACCIATELLA ICE CREAM<br><span style="font-size: 16px;">$9</span>`;
  const h4sp5 = document.createElement('span');
  h4sp5.innerHTML = `CHOCOLATE SORBETTO<br><span style="font-size: 16px;">$9</span>`;
  const h4sp6 = document.createElement('span');
  h4sp6.innerHTML = `AFFOGATO<br><span style="font-size: 16px;">$12</span>`;
  const heading4span = [h4sp1, h4sp2, h4sp3, h4sp4, h4sp5, h4sp6];
  dinnerPage.appendChild(heading4);
  heading4span.forEach(span => {
    heading4.appendChild(span);
  });

  return dinnerPage;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dinnerMenu);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.add("home-content");
  contentContainer.classList.remove("menu-content");
  contentContainer.classList.remove("about-content");

  const title = document.createElement('h1');
  title.textContent = "Roman's";
  contentContainer.appendChild(title);

  const reservationDetail = document.createElement('p');
  reservationDetail.textContent = "Reservations available via Resy, and we always welcome walk-ins. For groups larger than 4 guests, please reach out to us directly at hello@romansnyc.com";
  reservationDetail.classList.add("reservation");
  contentContainer.appendChild(reservationDetail);

  const reservationBtn = document.createElement('button');
  reservationBtn.id = "reservationBtn";
  reservationBtn.innerHTML = "RESERVE";
  contentContainer.appendChild(reservationBtn);
  reservationBtn.addEventListener('click', function() {
    window.open('https://www.romansnyc.com/#/form-reservations', '_self');
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeSection);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _metadata_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata/instagram.svg */ "./src/metadata/instagram.svg");






const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavBtns = headerNav.querySelectorAll('button');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu"; 
aboutBtn.textContent = "About";

function clearElement(elementID) {
  let element = document.getElementById(elementID);
  
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function handleHeaderNav() {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // home section - default
  homeBtn.classList.add("selected");

  headerNavBtns.forEach(button => {
    button.addEventListener('click', function() {
      if (button.id === "homeBtn") {
        clearElement('content');
        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        homeBtn.classList.add('selected');
        menuBtn.classList.remove('selected');
        aboutBtn.classList.remove('selected');
      } else if (button.id === "menuBtn") {
        clearElement('content');
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        homeBtn.classList.remove('selected');
        menuBtn.classList.add('selected');
        aboutBtn.classList.remove('selected');
      } else if (button.id === "aboutBtn") {
        clearElement('content');
        (0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        homeBtn.classList.remove('selected');
        menuBtn.classList.remove('selected');
        aboutBtn.classList.add('selected');
      }
    });
  });
}
handleHeaderNav();

const instaBtn = document.getElementById('instagramBtn');
const instaImg = document.createElement('img');
instaImg.src = _metadata_instagram_svg__WEBPACK_IMPORTED_MODULE_4__;
instaBtn.appendChild(instaImg);
instaBtn.addEventListener('click', function() {
  window.open('https://www.instagram.com/romansnyc/', '_self');
});

const jobBoardBtn = document.getElementById('jobBoardBtn');
jobBoardBtn.textContent = "Work With Us";
jobBoardBtn.addEventListener('click', function() {
  window.open('https://www.romansnyc.com/work-with-us/#/form', '_self');
});

function scrollIndicator() {
  const footer = document.querySelector('footer');

  const scrollTop = window.scrollY || document.documentElement.scrollTop; 
  const windowHeight = window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= totalHeight) {
    footer.style.boxShadow = `none`;
  } else {
    footer.style.boxShadow = `inset 0 1px 0 rgba(255, 255, 255, 0.0), 0 22px 70px 8px rgba(255, 223, 186, 0.69), 0 0 0 1px rgba(0, 0, 0, 0.0)`;
  }
}
window.addEventListener('scroll', scrollIndicator);
scrollIndicator(); // initial check for page bottom on load

/***/ }),

/***/ "./src/lunchMenu.js":
/*!**************************!*\
  !*** ./src/lunchMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lunchMenu() {
  const lunchPage = document.createElement('div');
  lunchPage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "LUNCH"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `OLIVES<br><span style="font-size: 16px;">$9</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `GNOCCO FRITTO WITH SALUMI<br><span style="font-size: 16px;">$21</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `FAVA BEAN PUREE<br><span style="font-size: 16px;">$18</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `LETTUCES, PEPPERS, OLIVES AND RICOTTA DI CAPRA<br><span style="font-size: 16px;">$18</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `EGG SALAD, RAMPS AND CRUDITES<br><span style="font-size: 16px;">$19</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `BROCCOLI, GARLIC CONFIT, CALABRIAN CHILE AND PECORINO<br><span style="font-size: 16px;">$16</span>`;
  const h1sp7 = document.createElement('span');
  h1sp7.innerHTML = `CAVATELLI, NETTLE PESTO AND SNAP PEAS<br><span style="font-size: 16px;">$22</span>`; 
  const h1sp8 = document.createElement('span');
  h1sp8.innerHTML = `CHITARRA, PORK SAUSAGE AND DANDELION GREENS<br><span style="font-size: 16px;">$23</span>`; 
  const h1sp9 = document.createElement('span');
  h1sp9.innerHTML = `SWORDFISH SPIEDINI, WHITE BEANS, ASPARAGUS AND OLIVE SALSA<br><span style="font-size: 16px;">$25</span>`; 

  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6, h1sp7, h1sp8, h1sp9];
  lunchPage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  });

  const heading2 = document.createElement('h2');
  heading2.textContent = "CHEESE & DESSERT"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `CREMA CAPRINO, WALNUTS AND HONEY<br><span style="font-size: 16px;">$13</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `OLIVE OIL CAKE, ROASTED RHUBARB AND CREME FRAICHE<br><span style="font-size: 16px;">$15</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `PANNA COTTA WITH STRAWBERRIES AND APPLE BALSAMIC<br><span style="font-size: 16px;">$13</span>`;
  const h2sp4 = document.createElement('span');
  h2sp4.innerHTML = `CHOCOLATE SORBETTO<br><span style="font-size: 16px;">$9</span>`;
  const h2sp5 = document.createElement('span');
  h2sp5.innerHTML = `AFFOGATO<br><span style="font-size: 16px;">$12</span>`;

  const heading2span = [h2sp1, h2sp2, h2sp3, h2sp4, h2sp5];
  lunchPage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  return lunchPage;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lunchMenu);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dinnerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dinnerMenu.js */ "./src/dinnerMenu.js");
/* harmony import */ var _lunchMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunchMenu.js */ "./src/lunchMenu.js");
/* harmony import */ var _wineMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wineMenu.js */ "./src/wineMenu.js");




function menuSection() {
  const contentContainer = document.getElementById('content');
  contentContainer.classList.remove("home-content");
  contentContainer.classList.remove("about-content");
  contentContainer.classList.add("menu-content");

  const menuSwitcherNav = document.createElement('nav');
  menuSwitcherNav.id = "menuSwitcher";
  contentContainer.appendChild(menuSwitcherNav);

  const menuContainer = document.createElement('div');
  menuContainer.id = "menuContainer";
  contentContainer.appendChild(menuContainer);

  // dinner menu
  const dinnerBtn = document.createElement('button');
  dinnerBtn.id = "dinnerBtn";
  dinnerBtn.innerHTML = "DINNER";
  menuSwitcherNav.appendChild(dinnerBtn);

  // lunch menu
  const lunchBtn = document.createElement('button');
  lunchBtn.id = "lunchBtn";
  lunchBtn.innerHTML = "LUNCH";
  menuSwitcherNav.appendChild(lunchBtn);

  const lunchPage = document.createElement('div');
  lunchPage.textContent = "lunch";

  // wine menu
  const wineBtn = document.createElement('button');
  wineBtn.id = "wineBtn";
  wineBtn.innerHTML = "WINE";
  menuSwitcherNav.appendChild(wineBtn);

  const winePage = document.createElement('div');
  winePage.textContent = "wine";

  const menuSwitcherNavBtns = [dinnerBtn, lunchBtn, wineBtn];
  function handleMenuNav() {

    menuContainer.appendChild((0,_dinnerMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    dinnerBtn.classList.add('selected');

    menuSwitcherNavBtns.forEach(button => {
      button.addEventListener('click', function() {

        if (button.id === "dinnerBtn") {
          lunchBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          dinnerBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild((0,_dinnerMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

        } else if (button.id === "lunchBtn") {
          dinnerBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          lunchBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild((0,_lunchMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

        } else if (button.id === "wineBtn") {
          dinnerBtn.classList.remove('selected');
          lunchBtn.classList.remove('selected');
          wineBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild((0,_wineMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
      });
    });
  }
  handleMenuNav();

  function clearElement(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);

/***/ }),

/***/ "./src/wineMenu.js":
/*!*************************!*\
  !*** ./src/wineMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function wineMenu() {
  const winePage = document.createElement('div');
  winePage.classList.add("menuPage");

  const heading1 = document.createElement('h2');
  heading1.textContent = "SPARKLING"
  const h1sp1 = document.createElement('span');
  h1sp1.innerHTML = `KOI 'ORSU'<br><span style="font-size: 16px;">TREBBIANO, MOSCATO | EMILIA-ROMAGNA 2021<br>$86</span>`;
  const h1sp2 = document.createElement('span');
  h1sp2.innerHTML = `ANTICA FRATTA FRANCIACORTA BRUT<br><span style="font-size: 16px;">CHARDONNAY, PINOT NOIR | LOMBARDIA NV<br>$96</span>`;
  const h1sp3 = document.createElement('span');
  h1sp3.innerHTML = `CIECK 'SAN GIORGIO'<br><span style="font-size: 16px;">ERBALUCE | PIEMONTE 2018<br>$94</span>`;
  const h1sp4 = document.createElement('span');
  h1sp4.innerHTML = `MUNI DI DANIELE PICCININ 'ARIONE'<br><span style="font-size: 16px;">DURELLA | VENETO 2018<br>$110</span>`;
  const h1sp5 = document.createElement('span');
  h1sp5.innerHTML = `RUGE 'L'ESSENZIALE' COL FONDO<br><span style="font-size: 16px;">GLERA | VENETO 2022<br>$68</span>`;
  const h1sp6 = document.createElement('span');
  h1sp6.innerHTML = `COSTADILA 'MOZ'<br><span style="font-size: 16px;">MOSCATO FIOR D'ARANCIO, GLERA | VENETO NV<br>$74</span>`;
  const h1sp7 = document.createElement('span');
  h1sp7.innerHTML = `TANCA NICA 'GHRIBI'<br><span style="font-size: 16px;">ZIBBIBO | PANTELLERIA 2022<br>$155</span>`; 
  const h1sp8 = document.createElement('span');
  h1sp8.innerHTML = `LELARGE-PUGEOT 'LUNA VOL.2' CHAMPAGNE<br><span style="font-size: 16px;">CHARDONNAY, PINOT NOIR | FRANCE 2015<br>$298</span>`; 
  const h1sp9 = document.createElement('span');
  h1sp9.innerHTML = `VILLA PICTA 'SOGNARE! SOGNARE!'<br><span style="font-size: 16px;">LAMBRUSCO SORBARA | LOMBARDIA 2020<br>$98</span>`; 
  const h1sp10 = document.createElement('span');
  h1sp10.innerHTML = `KOI 'VISIO'<br><span style="font-size: 16px;">LAMBRUSCO SORBARA AND MAESTRI, TREBBIANO | EMILIA-ROMAGNA 2021<br>$96</span>`;
  const h1sp11 = document.createElement('span');
  h1sp11.innerHTML = `SILVIO MESSANA 'GHAZII'<br><span style="font-size: 16px;">SANGIOVESE | TOSCANA 2021<br>$72</span>`;
  const h1sp12 = document.createElement('span');
  h1sp12.innerHTML = `PODERE SOTTOILNOCE 'SALDALAMA'<br><span style="font-size: 16px;">LAMBRUSCO BLEND | EMILIA-ROMAGNA 2021<br>$76</span>`;
  const h1sp13 = document.createElement('span');
  h1sp13.innerHTML = `TERREVIVE 'STIOLOROSSO'<br><span style="font-size: 16px;">LMABRUSCO DI SORBARA | EMILIA-ROMAGNA 2021<br>$90</span>`;

  const heading1span = [h1sp1, h1sp2, h1sp3, h1sp4, h1sp5, h1sp6, h1sp7, h1sp8, h1sp9, h1sp10, h1sp11, h1sp12, h1sp13];
  winePage.appendChild(heading1);
  heading1span.forEach(span => {
    heading1.appendChild(span);
  });

  const heading2 = document.createElement('h2');
  heading2.textContent = "WHITE"
  const h2sp1 = document.createElement('span');
  h2sp1.innerHTML = `BURGERHOF MESSNER ‘ACKERLEN’<br><span style="font-size: 16px;">SOLARIS, MUSCARIS | ALTO ADIGE 2019<br>$96</span>`;
  const h2sp2 = document.createElement('span');
  h2sp2.innerHTML = `MARCO SARA 'MONTE DELLA GUARDA'<br><span style="font-size: 16px;">TOCAI FRIULANO, PICOLIT | FRIULI 2019<br>$104</span>`;
  const h2sp3 = document.createElement('span');
  h2sp3.innerHTML = `LA GUGLIA<br><span style="font-size: 16px;">GARGANEGA | VENETO 2021<br>$76</span>`;
  const h2sp4 = document.createElement('span');
  h2sp4.innerHTML = `CANTINA ROENO 'REPANDA'<br><span style="font-size: 16px;">SOLARIS | VENETO 2021<br>$68</span>`;
  const h2sp5 = document.createElement('span');
  h2sp5.innerHTML = `GIOVANNI EDERLE 'DONNA FRANCESCA'<br><span style="font-size: 16px;">GARGANEGA, CHARDONNAY | VENETO 2020<br>$84</span>`;
  const h2sp6 = document.createElement('span');
  h2sp6.innerHTML = `CANTRINA 'RINÉ'<br><span style="font-size: 16px;">RIESLING, CHARDONNAY, INCROCIO MANZONI | LOMBARDIA 2020<br>$66</span>`;
  const h2sp7 = document.createElement('span');
  h2sp7.innerHTML = `GIRO DI VITE 'ELIANTA'<br><span style="font-size: 16px;">MALVASIA MOSCATA | PIEMONTE 2021<br>$70</span>`; 
  const h2sp8 = document.createElement('span');
  h2sp8.innerHTML = `CIECK<br><span style="font-size: 16px;">ERBALUCE DI CALUSO | PIEMONTE 2022<br>$70</span>`; 
  const h2sp9 = document.createElement('span');
  h2sp9.innerHTML = `LA COLOMBERA 'DERTHONA'<br><span style="font-size: 16px;">TIMORASSO | PIEMONTE 2022<br>$68</span>`; 
  const h2sp10 = document.createElement('span');
  h2sp10.innerHTML = `I PASTINI 'FARAONE'<br><span style="font-size: 16px;">VERDECA | PUGLIA 2021<br>$64</span>`;
  const h2sp11 = document.createElement('span');
  h2sp11.innerHTML = `SALVATORE MARINO ‘TURI’<br><span style="font-size: 16px;">CATARATTO | SICILIA 2022<br>$68</span>`;
  const h2sp12 = document.createElement('span');
  h2sp12.innerHTML = `EDUARDO TORRES ACOSTA ‘VERSANTE NORD’<br><span style="font-size: 16px;">FIELD BLEND | SICILIA 2022<br>$98</span>`;

  const heading2span = [h2sp1, h2sp2, h2sp3, h2sp4, h2sp5, h2sp6, h2sp7, h2sp8, h2sp9, h2sp10, h2sp11, h2sp12];
  winePage.appendChild(heading2);
  heading2span.forEach(span => {
    heading2.appendChild(span);
  });

  return winePage;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wineMenu);

/***/ }),

/***/ "./src/metadata/BungeeShade-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/metadata/BungeeShade-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65113b6b47a5bd986255.ttf";

/***/ }),

/***/ "./src/metadata/HammersmithOne-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/metadata/HammersmithOne-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d81de6e618c5a022ebcc.ttf";

/***/ }),

/***/ "./src/metadata/instagram.svg":
/*!************************************!*\
  !*** ./src/metadata/instagram.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f4c7a4f2d8d8e54c7be.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLGlKQUFxRDtBQUNqRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtB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RUFBZ0U7QUFDaEU7QUFDQSxxRkFBcUY7QUFDckY7QUFDQSx5RUFBeUU7QUFDekU7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQSxxRUFBcUU7QUFDckU7QUFDQSx5RUFBeUU7QUFDekU7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQSxxRkFBcUY7QUFDckY7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxxRkFBcUY7QUFDckY7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQSxxRkFBcUY7QUFDckY7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxxRUFBcUU7QUFDckU7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSw0RkFBNEY7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGlubmVyTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2x1bmNoTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2luZU1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbWV0YWRhdGEvSGFtbWVyc21pdGhPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21ldGFkYXRhL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsYWNrOiAjNDE0NDRCO1xuICAtLWJhY2tncm91bmQ6ICMzRDQwNUI7XG4gIC0tdGV4dDogI0Y0RjFERTtcbiAgLS1vcmFuZ2U6IHJnYigyNTUsIDIyMywgMTg2KTtcbiAgLS15ZWxsb3c6ICNmZmZmYmE7XG4gIC0tZ3JlZW46ICNiYWZmYzk7XG4gIC0tcmVkOiAjZjM4YmE4O1xuICAtLWJsdWU6ICNiYWUxZmY7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2Rpc3BsYXknO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAycHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSkgIWltcG9ydGFudDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmhlYWRlciBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuaGVhZGVyIG5hdiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdkaXNwbGF5JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA4MHB4O1xufVxuaGVhZGVyIG5hdiBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjY5O1xufVxuaGVhZGVyIG5hdiBidXR0b246YWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhvbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuaDEge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4ucmVzZXJ2YXRpb24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbiNyZXNlcnZhdGlvbkJ0biB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNyZXNlcnZhdGlvbkJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cbiNyZXNlcnZhdGlvbkJ0bjphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcbn1cbiNyZXNlcnZhdGlvbkJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLXRleHQpO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGV4dCk7XG59XG4jcmVzZXJ2YXRpb25CdG46aG92ZXI6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmZvb3RlciBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42OTtcbn1cbmZvb3RlciBidXR0b246YWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNpbnN0YWdyYW1CdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNpbnN0YWdyYW1CdG4gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNqb2JCb2FyZEJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBhZGRpbmc6IDI0cHg7IFxufVxuXG4jbWVudVN3aXRjaGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyNHB4O1xufVxuI21lbnVTd2l0Y2hlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHdpZHRoOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLm1lbnVQYWdlIGgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLm1lbnVQYWdlIHNwYW4ge1xuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBhZGRpbmc6IDI0cHg7IFxufVxuLmFib3V0LWNvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG59XG5cbi5zaG9wLWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG59XG4ubGVhZGVyc2hpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbn1cblxuI2hvdXJMb2NvIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBnYXA6IDhweDtcbn1cbiNob3VyTG9jbyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzY3JvbGxJbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgei1pbmRleDogMTAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFpRDtBQUNuRDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7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a0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsYWNrOiAjNDE0NDRCO1xcbiAgLS1iYWNrZ3JvdW5kOiAjM0Q0MDVCO1xcbiAgLS10ZXh0OiAjRjRGMURFO1xcbiAgLS1vcmFuZ2U6IHJnYigyNTUsIDIyMywgMTg2KTtcXG4gIC0teWVsbG93OiAjZmZmZmJhO1xcbiAgLS1ncmVlbjogI2JhZmZjOTtcXG4gIC0tcmVkOiAjZjM4YmE4O1xcbiAgLS1ibHVlOiAjYmFlMWZmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBzcmM6IHVybCgnLi9tZXRhZGF0YS9IYW1tZXJzbWl0aE9uZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XFxuICBzcmM6IHVybCgnLi9tZXRhZGF0YS9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmJvZHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAycHg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1vcmFuZ2UpICFpbXBvcnRhbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuaGVhZGVyIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdkaXNwbGF5JztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogODBweDtcXG59XFxuaGVhZGVyIG5hdiBidXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMC42OTtcXG59XFxuaGVhZGVyIG5hdiBidXR0b246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdkaXNwbGF5JztcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuI3Jlc2VydmF0aW9uQnRuIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ2Rpc3BsYXknO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jcmVzZXJ2YXRpb25CdG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcbiNyZXNlcnZhdGlvbkJ0bjphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG59XFxuI3Jlc2VydmF0aW9uQnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDNweDtcXG4gIGxlZnQ6IDNweDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXRleHQpO1xcbn1cXG4jcmVzZXJ2YXRpb25CdG46aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbmZvb3RlciBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY5O1xcbn1cXG5mb290ZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4jaW5zdGFncmFtQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2luc3RhZ3JhbUJ0biBpbWcge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jam9iQm9hcmRCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBhZGRpbmc6IDI0cHg7IFxcbn1cXG5cXG4jbWVudVN3aXRjaGVyIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjRweDtcXG59XFxuI21lbnVTd2l0Y2hlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtZW51Q29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5tZW51UGFnZSBoMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcbi5tZW51UGFnZSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgcGFkZGluZzogMjRweDsgXFxufVxcbi5hYm91dC1jb250ZW50IHAge1xcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcXG59XFxuXFxuLnNob3AtZGVzYyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxufVxcbi5sZWFkZXJzaGlwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcXG59XFxuXFxuI2hvdXJMb2NvIHtcXG4gIHdpZHRoOiAzMzZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDhweDtcXG59XFxuI2hvdXJMb2NvIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2Nyb2xsSW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICB6LWluZGV4OiAxMDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFib3V0U2VjdGlvbigpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhvbWUtY29udGVudFwiKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1jb250ZW50XCIpO1xuXG4gIGNvbnN0IHNob3BEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaG9wRGVzYy5jbGFzc0xpc3QuYWRkKFwic2hvcC1kZXNjXCIpO1xuICBzaG9wRGVzYy5pbm5lckhUTUwgPSBgUm9tYW7igJlzIHNlcnZlcyBzcGlyaXRlZCwgSXRhbGlhbi1pbmZsdWVuY2VkIGZvb2QgdGhhdCByZWZsZWN0cyBhIGxvbmdzdGFuZGluZyBjb21taXRtZW50IHRvIGxvY2FsIGFncmljdWx0dXJlIGFuZCBzdXN0YWluYWJpbGl0eS4gT3VyIG1lbnUgY2VsZWJyYXRlcyBvdXIgcmVsYXRpb25zaGlwcyB3aXRoIGFyZWEgZmFybWVycywgdHJhZGl0aW9uLWJhc2VkIGFydGlzYW5zLCBhZ3JpY3VsdHVyYWwtYmFzZWQgSXRhbGlhbiBpbXBvcnRlcnMsIGFuZCB3aW5lbWFrZXJzLjxicj48YnI+V2hpbGUgdGhlIGV4cGVyaWVuY2UgYXQgUm9tYW7igJlzIHNob3djYXNlcyBvdXIgZm9jdXMgb24gcHJvY3VyaW5nIHRoZSBoaWdoZXN0IHF1YWxpdHkgZm9vZCBhbmQgd2luZSwgd2UgYXJlLCBhYm92ZSBhbGwsIGNvbW1pdHRlZCB0byBtYWtpbmcgb3VyIGluZHVzdHJ5IGEgbW9yZSBlcXVpdGFibGUgYW5kIHN1c3RhaW5hYmxlIGhvbWUgZm9yIGFsbCBvZiB0aG9zZSB3aG8gd29yayBpbiBpdC5gO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNob3BEZXNjKTtcblxuICBjb25zdCBsZWFkZXJzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsZWFkZXJzaGlwLmNsYXNzTGlzdC5hZGQoXCJsZWFkZXJzaGlwXCIpO1xuICBsZWFkZXJzaGlwLmlubmVySFRNTCA9IGBDaGVmOiBIYW5uYWggU2hpemdhbC1QYXJpczxicj5Tb3VzIENoZWZzOiBKb3NlIEdlbmFvICYgU3RldmUgSGFuZHk8YnI+R2VuZXJhbCBNYW5hZ2VyOiBCcml0dGFueSBUaW5lbGxpPGJyPkFzc2lzdGFudCBHZW5lcmFsIE1hbmFnZXI6IEZlcm5hbmRvIENhbWJlaXJvYDtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJzaGlwKTtcblxuICBjb25zdCBob3VyTG9jQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICBob3VyTG9jQ29udGFpbmVyLmlkID0gXCJob3VyTG9jb1wiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJMb2NDb250YWluZXIpO1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cnMuaW5uZXJIVE1MID0gYEhPVVJTPGJyPjxicj5ESU5ORVI6IE1vbmRheSAtIFN1bmRheSwgNSBwbSAtIDEwOjMwIHBtPGJyPkxVTkNIOiBTYXR1cmRheSAmIFN1bmRheSwgMTEgYW0gLSAzIHBtYDtcbiAgaG91ckxvY0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBgTE9DQVRJT048YnI+PGJyPjI0MyBEZWthbGIgQXZlLCBCcm9va2x5biwgTlkgMTEyMDU8YnI+NzE4LjYyMi41MzAwPGJyPmhlbGxvQHJvbWFuc255Yy5jb21gO1xuICBob3VyTG9jQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGFib3V0U2VjdGlvbjsiLCJmdW5jdGlvbiBkaW5uZXJNZW51KCkge1xuICBjb25zdCBkaW5uZXJQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lclBhZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzEudGV4dENvbnRlbnQgPSBcIkZJUlNUXCJcbiAgY29uc3QgaDFzcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AxLmlubmVySFRNTCA9IGBPTElWRVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDk8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AyLmlubmVySFRNTCA9IGBBTlRJUEFTVEkgUExBVEU8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDIyPC9zcGFuPmA7XG4gIGNvbnN0IGgxc3AzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwMy5pbm5lckhUTUwgPSBgRkFWQSBCRUFOIFBVUkVFPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxODwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDQuaW5uZXJIVE1MID0gYENST1NUSU5JIE9GIFNOQVAgUEVBUywgTUlOVCBBTkQgRklOT0NDSElPTkE8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDE2PC9zcGFuPmA7XG4gIGNvbnN0IGgxc3A1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwNS5pbm5lckhUTUwgPSBgU1FVQUNRVUVST05FLCBBU1BBUkFHVVMsIFdISVRFIEJFQU5TIEFORCBCT1RUQVJHQTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMjI8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A2LmlubmVySFRNTCA9IGBMRVRUVUNFUywgSEFaRUxOVVRTLCBNVVNUQVJEIFZJTkFJR1JFVFRFIEFORCBQRUNPUklOTzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMjM8L3NwYW4+YDtcbiAgY29uc3QgaGVhZGluZzFzcGFuID0gW2gxc3AxLCBoMXNwMiwgaDFzcDMsIGgxc3A0LCBoMXNwNSwgaDFzcDZdO1xuICBkaW5uZXJQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgaGVhZGluZzFzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pOyBcblxuICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcyLnRleHRDb250ZW50ID0gXCJTRUNPTkRcIlxuICBjb25zdCBoMnNwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDEuaW5uZXJIVE1MID0gYFRBR0xJQVRFTExFLCBGQVZBIExFQUYgUEVTVE8gQU5EIEFTUEFSQUdVUzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMjc8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AyLmlubmVySFRNTCA9IGBMSU5HVUlORSwgQ0xBTVMsIFdJTEQgRkVOTkVMIEFORCBDSElMRTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMjg8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AzLmlubmVySFRNTCA9IGBNRVpaRSBSSUdBVE9OSSwgUE9SSyBSQUdVLCBUT01BVE8gQU5EIE9MSVZFUzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMjg8L3NwYW4+YDtcbiAgY29uc3QgaGVhZGluZzJzcGFuID0gW2gyc3AxLCBoMnNwMiwgaDJzcDNdO1xuICBkaW5uZXJQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcbiAgaGVhZGluZzJzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzMudGV4dENvbnRlbnQgPSBcIlRISVJEXCJcbiAgY29uc3QgaDNzcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgzc3AxLmlubmVySFRNTCA9IGBTV09SREZJU0gsIFBPVEFUT0VTLCBTVU4gRFJJRUQgVE9NQVRPRVMgQU5EIFBJTkUgTlVUUzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMzk8L3NwYW4+YDtcbiAgY29uc3QgaDNzcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgzc3AyLmlubmVySFRNTCA9IGBDSElDS0VOIERJQVZPTE8gV0lUSCBCUk9DQ09MSU5JPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQ0NDwvc3Bhbj5gO1xuICBjb25zdCBoM3NwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDNzcDMuaW5uZXJIVE1MID0gYFBPUksgUE9SVEVSSE9VU0UsIEdSSUxMRUQgUkFNUFMgQU5EIENISUNLUEVBUzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kNDM8L3NwYW4+YDtcbiAgY29uc3QgaGVhZGluZzNzcGFuID0gW2gzc3AxLCBoM3NwMiwgaDNzcDNdO1xuICBkaW5uZXJQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmczKTtcbiAgaGVhZGluZzNzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzMuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRpbmc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzQudGV4dENvbnRlbnQgPSBcIkRFU0VSVFwiXG4gIGNvbnN0IGg0c3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoNHNwMS5pbm5lckhUTUwgPSBgQ1JFTUEgQ0FQUklOTywgV0FMTlVUUyBBTkQgSE9ORVk8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDEzPC9zcGFuPmA7XG4gIGNvbnN0IGg0c3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoNHNwMi5pbm5lckhUTUwgPSBgUEFOTkEgQ09UVEEgV0lUSCBTVFJBV0JFUlJJRVMgQU5EIEFQUExFIEJBTFNBTUlDPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMzwvc3Bhbj5gO1xuICBjb25zdCBoNHNwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDMuaW5uZXJIVE1MID0gYE9MSVZFIE9JTCBDQUtFLCBST0FTVEVEIFJIVUJBUkIgQU5EIENSRU1FIEZSQUlDSEU8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDE1PC9zcGFuPmA7XG4gIGNvbnN0IGg0c3A0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoNHNwNC5pbm5lckhUTUwgPSBgTUlOVCBTVFJBQ0NJQVRFTExBIElDRSBDUkVBTTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kOTwvc3Bhbj5gO1xuICBjb25zdCBoNHNwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDUuaW5uZXJIVE1MID0gYENIT0NPTEFURSBTT1JCRVRUTzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kOTwvc3Bhbj5gO1xuICBjb25zdCBoNHNwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDYuaW5uZXJIVE1MID0gYEFGRk9HQVRPPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMjwvc3Bhbj5gO1xuICBjb25zdCBoZWFkaW5nNHNwYW4gPSBbaDRzcDEsIGg0c3AyLCBoNHNwMywgaDRzcDQsIGg0c3A1LCBoNHNwNl07XG4gIGRpbm5lclBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZzQpO1xuICBoZWFkaW5nNHNwYW4uZm9yRWFjaChzcGFuID0+IHtcbiAgICBoZWFkaW5nNC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpbm5lclBhZ2U7XG59XG5leHBvcnQgZGVmYXVsdCBkaW5uZXJNZW51OyIsImZ1bmN0aW9uIGhvbWVTZWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUm9tYW4nc1wiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVzZXJ2YXRpb25EZXRhaWwudGV4dENvbnRlbnQgPSBcIlJlc2VydmF0aW9ucyBhdmFpbGFibGUgdmlhIFJlc3ksIGFuZCB3ZSBhbHdheXMgd2VsY29tZSB3YWxrLWlucy4gRm9yIGdyb3VwcyBsYXJnZXIgdGhhbiA0IGd1ZXN0cywgcGxlYXNlIHJlYWNoIG91dCB0byB1cyBkaXJlY3RseSBhdCBoZWxsb0Byb21hbnNueWMuY29tXCI7XG4gIHJlc2VydmF0aW9uRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvblwiKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRldGFpbCk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXJ2YXRpb25CdG4uaWQgPSBcInJlc2VydmF0aW9uQnRuXCI7XG4gIHJlc2VydmF0aW9uQnRuLmlubmVySFRNTCA9IFwiUkVTRVJWRVwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnRuKTtcbiAgcmVzZXJ2YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cucm9tYW5zbnljLmNvbS8jL2Zvcm0tcmVzZXJ2YXRpb25zJywgJ19zZWxmJyk7XG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgaG9tZVNlY3Rpb247IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZVNlY3Rpb24gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51U2VjdGlvbiBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGFib3V0U2VjdGlvbiBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vbWV0YWRhdGEvaW5zdGFncmFtLnN2Zyc7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgaGVhZGVyTmF2ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuY29uc3QgaGVhZGVyTmF2QnRucyA9IGhlYWRlck5hdi5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ0bicpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJyk7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dEJ0bicpO1xuXG5ob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5tZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7IFxuYWJvdXRCdG4udGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50SUQpIHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpO1xuICBcbiAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUhlYWRlck5hdigpIHtcbiAgaG9tZVNlY3Rpb24oKTsgLy8gaG9tZSBzZWN0aW9uIC0gZGVmYXVsdFxuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICBoZWFkZXJOYXZCdG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChidXR0b24uaWQgPT09IFwiaG9tZUJ0blwiKSB7XG4gICAgICAgIGNsZWFyRWxlbWVudCgnY29udGVudCcpO1xuICAgICAgICBob21lU2VjdGlvbigpO1xuICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYWJvdXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIm1lbnVCdG5cIikge1xuICAgICAgICBjbGVhckVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICAgICAgbWVudVNlY3Rpb24oKTtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGFib3V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5pZCA9PT0gXCJhYm91dEJ0blwiKSB7XG4gICAgICAgIGNsZWFyRWxlbWVudCgnY29udGVudCcpO1xuICAgICAgICBhYm91dFNlY3Rpb24oKTtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuaGFuZGxlSGVhZGVyTmF2KCk7XG5cbmNvbnN0IGluc3RhQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RhZ3JhbUJ0bicpO1xuY29uc3QgaW5zdGFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmluc3RhSW1nLnNyYyA9IGluc3RhZ3JhbUljb247XG5pbnN0YUJ0bi5hcHBlbmRDaGlsZChpbnN0YUltZyk7XG5pbnN0YUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yb21hbnNueWMvJywgJ19zZWxmJyk7XG59KTtcblxuY29uc3Qgam9iQm9hcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9iQm9hcmRCdG4nKTtcbmpvYkJvYXJkQnRuLnRleHRDb250ZW50ID0gXCJXb3JrIFdpdGggVXNcIjtcbmpvYkJvYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5yb21hbnNueWMuY29tL3dvcmstd2l0aC11cy8jL2Zvcm0nLCAnX3NlbGYnKTtcbn0pO1xuXG5mdW5jdGlvbiBzY3JvbGxJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7IFxuICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHRvdGFsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICBpZiAoc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0ID49IHRvdGFsSGVpZ2h0KSB7XG4gICAgZm9vdGVyLnN0eWxlLmJveFNoYWRvdyA9IGBub25lYDtcbiAgfSBlbHNlIHtcbiAgICBmb290ZXIuc3R5bGUuYm94U2hhZG93ID0gYGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApLCAwIDIycHggNzBweCA4cHggcmdiYSgyNTUsIDIyMywgMTg2LCAwLjY5KSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wKWA7XG4gIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxJbmRpY2F0b3IpO1xuc2Nyb2xsSW5kaWNhdG9yKCk7IC8vIGluaXRpYWwgY2hlY2sgZm9yIHBhZ2UgYm90dG9tIG9uIGxvYWQiLCJmdW5jdGlvbiBsdW5jaE1lbnUoKSB7XG4gIGNvbnN0IGx1bmNoUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaFBhZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzEudGV4dENvbnRlbnQgPSBcIkxVTkNIXCJcbiAgY29uc3QgaDFzcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AxLmlubmVySFRNTCA9IGBPTElWRVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDk8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AyLmlubmVySFRNTCA9IGBHTk9DQ08gRlJJVFRPIFdJVEggU0FMVU1JPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQyMTwvc3Bhbj5gO1xuICBjb25zdCBoMXNwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDMuaW5uZXJIVE1MID0gYEZBVkEgQkVBTiBQVVJFRTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMTg8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A0LmlubmVySFRNTCA9IGBMRVRUVUNFUywgUEVQUEVSUywgT0xJVkVTIEFORCBSSUNPVFRBIERJIENBUFJBPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxODwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDUuaW5uZXJIVE1MID0gYEVHRyBTQUxBRCwgUkFNUFMgQU5EIENSVURJVEVTPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxOTwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDYuaW5uZXJIVE1MID0gYEJST0NDT0xJLCBHQVJMSUMgQ09ORklULCBDQUxBQlJJQU4gQ0hJTEUgQU5EIFBFQ09SSU5PPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxNjwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDcuaW5uZXJIVE1MID0gYENBVkFURUxMSSwgTkVUVExFIFBFU1RPIEFORCBTTkFQIFBFQVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDIyPC9zcGFuPmA7IFxuICBjb25zdCBoMXNwOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDguaW5uZXJIVE1MID0gYENISVRBUlJBLCBQT1JLIFNBVVNBR0UgQU5EIERBTkRFTElPTiBHUkVFTlM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDIzPC9zcGFuPmA7IFxuICBjb25zdCBoMXNwOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDkuaW5uZXJIVE1MID0gYFNXT1JERklTSCBTUElFRElOSSwgV0hJVEUgQkVBTlMsIEFTUEFSQUdVUyBBTkQgT0xJVkUgU0FMU0E8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDI1PC9zcGFuPmA7IFxuXG4gIGNvbnN0IGhlYWRpbmcxc3BhbiA9IFtoMXNwMSwgaDFzcDIsIGgxc3AzLCBoMXNwNCwgaDFzcDUsIGgxc3A2LCBoMXNwNywgaDFzcDgsIGgxc3A5XTtcbiAgbHVuY2hQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgaGVhZGluZzFzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkNIRUVTRSAmIERFU1NFUlRcIlxuICBjb25zdCBoMnNwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDEuaW5uZXJIVE1MID0gYENSRU1BIENBUFJJTk8sIFdBTE5VVFMgQU5EIEhPTkVZPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMzwvc3Bhbj5gO1xuICBjb25zdCBoMnNwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDIuaW5uZXJIVE1MID0gYE9MSVZFIE9JTCBDQUtFLCBST0FTVEVEIFJIVUJBUkIgQU5EIENSRU1FIEZSQUlDSEU8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDE1PC9zcGFuPmA7XG4gIGNvbnN0IGgyc3AzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwMy5pbm5lckhUTUwgPSBgUEFOTkEgQ09UVEEgV0lUSCBTVFJBV0JFUlJJRVMgQU5EIEFQUExFIEJBTFNBTUlDPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMzwvc3Bhbj5gO1xuICBjb25zdCBoMnNwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDQuaW5uZXJIVE1MID0gYENIT0NPTEFURSBTT1JCRVRUTzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kOTwvc3Bhbj5gO1xuICBjb25zdCBoMnNwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDUuaW5uZXJIVE1MID0gYEFGRk9HQVRPPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMjwvc3Bhbj5gO1xuXG4gIGNvbnN0IGhlYWRpbmcyc3BhbiA9IFtoMnNwMSwgaDJzcDIsIGgyc3AzLCBoMnNwNCwgaDJzcDVdO1xuICBsdW5jaFBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZzIpO1xuICBoZWFkaW5nMnNwYW4uZm9yRWFjaChzcGFuID0+IHtcbiAgICBoZWFkaW5nMi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGx1bmNoUGFnZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGx1bmNoTWVudTsiLCJpbXBvcnQgZGlubmVyTWVudSBmcm9tIFwiLi9kaW5uZXJNZW51LmpzXCI7XG5pbXBvcnQgbHVuY2hNZW51IGZyb20gXCIuL2x1bmNoTWVudS5qc1wiO1xuaW1wb3J0IHdpbmVNZW51IGZyb20gXCIuL3dpbmVNZW51LmpzXCI7XG5cbmZ1bmN0aW9uIG1lbnVTZWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZS1jb250ZW50XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhYm91dC1jb250ZW50XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgbWVudVN3aXRjaGVyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG1lbnVTd2l0Y2hlck5hdi5pZCA9IFwibWVudVN3aXRjaGVyXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVN3aXRjaGVyTmF2KTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuaWQgPSBcIm1lbnVDb250YWluZXJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICAvLyBkaW5uZXIgbWVudVxuICBjb25zdCBkaW5uZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGlubmVyQnRuLmlkID0gXCJkaW5uZXJCdG5cIjtcbiAgZGlubmVyQnRuLmlubmVySFRNTCA9IFwiRElOTkVSXCI7XG4gIG1lbnVTd2l0Y2hlck5hdi5hcHBlbmRDaGlsZChkaW5uZXJCdG4pO1xuXG4gIC8vIGx1bmNoIG1lbnVcbiAgY29uc3QgbHVuY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbHVuY2hCdG4uaWQgPSBcImx1bmNoQnRuXCI7XG4gIGx1bmNoQnRuLmlubmVySFRNTCA9IFwiTFVOQ0hcIjtcbiAgbWVudVN3aXRjaGVyTmF2LmFwcGVuZENoaWxkKGx1bmNoQnRuKTtcblxuICBjb25zdCBsdW5jaFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2hQYWdlLnRleHRDb250ZW50ID0gXCJsdW5jaFwiO1xuXG4gIC8vIHdpbmUgbWVudVxuICBjb25zdCB3aW5lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHdpbmVCdG4uaWQgPSBcIndpbmVCdG5cIjtcbiAgd2luZUJ0bi5pbm5lckhUTUwgPSBcIldJTkVcIjtcbiAgbWVudVN3aXRjaGVyTmF2LmFwcGVuZENoaWxkKHdpbmVCdG4pO1xuXG4gIGNvbnN0IHdpbmVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmVQYWdlLnRleHRDb250ZW50ID0gXCJ3aW5lXCI7XG5cbiAgY29uc3QgbWVudVN3aXRjaGVyTmF2QnRucyA9IFtkaW5uZXJCdG4sIGx1bmNoQnRuLCB3aW5lQnRuXTtcbiAgZnVuY3Rpb24gaGFuZGxlTWVudU5hdigpIHtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlubmVyTWVudSgpKTtcbiAgICBkaW5uZXJCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIG1lbnVTd2l0Y2hlck5hdkJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJkaW5uZXJCdG5cIikge1xuICAgICAgICAgIGx1bmNoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgd2luZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIGRpbm5lckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgY2xlYXJFbGVtZW50KG1lbnVDb250YWluZXIpOyBcbiAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpbm5lck1lbnUoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwibHVuY2hCdG5cIikge1xuICAgICAgICAgIGRpbm5lckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHdpbmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBsdW5jaEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgY2xlYXJFbGVtZW50KG1lbnVDb250YWluZXIpOyBcbiAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGx1bmNoTWVudSgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5pZCA9PT0gXCJ3aW5lQnRuXCIpIHtcbiAgICAgICAgICBkaW5uZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBsdW5jaEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHdpbmVCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIGNsZWFyRWxlbWVudChtZW51Q29udGFpbmVyKTsgXG4gICAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5lTWVudSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlTWVudU5hdigpO1xuXG4gIGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBtZW51U2VjdGlvbjsiLCJmdW5jdGlvbiB3aW5lTWVudSgpIHtcbiAgY29uc3Qgd2luZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZVBhZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzEudGV4dENvbnRlbnQgPSBcIlNQQVJLTElOR1wiXG4gIGNvbnN0IGgxc3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwMS5pbm5lckhUTUwgPSBgS09JICdPUlNVJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5UUkVCQklBTk8sIE1PU0NBVE8gfCBFTUlMSUEtUk9NQUdOQSAyMDIxPGJyPiQ4Njwvc3Bhbj5gO1xuICBjb25zdCBoMXNwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDIuaW5uZXJIVE1MID0gYEFOVElDQSBGUkFUVEEgRlJBTkNJQUNPUlRBIEJSVVQ8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+Q0hBUkRPTk5BWSwgUElOT1QgTk9JUiB8IExPTUJBUkRJQSBOVjxicj4kOTY8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AzLmlubmVySFRNTCA9IGBDSUVDSyAnU0FOIEdJT1JHSU8nPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkVSQkFMVUNFIHwgUElFTU9OVEUgMjAxODxicj4kOTQ8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A0LmlubmVySFRNTCA9IGBNVU5JIERJIERBTklFTEUgUElDQ0lOSU4gJ0FSSU9ORSc8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+RFVSRUxMQSB8IFZFTkVUTyAyMDE4PGJyPiQxMTA8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A1LmlubmVySFRNTCA9IGBSVUdFICdMJ0VTU0VOWklBTEUnIENPTCBGT05ETzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5HTEVSQSB8IFZFTkVUTyAyMDIyPGJyPiQ2ODwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDYuaW5uZXJIVE1MID0gYENPU1RBRElMQSAnTU9aJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5NT1NDQVRPIEZJT1IgRCdBUkFOQ0lPLCBHTEVSQSB8IFZFTkVUTyBOVjxicj4kNzQ8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A3LmlubmVySFRNTCA9IGBUQU5DQSBOSUNBICdHSFJJQkknPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPlpJQkJJQk8gfCBQQU5URUxMRVJJQSAyMDIyPGJyPiQxNTU8L3NwYW4+YDsgXG4gIGNvbnN0IGgxc3A4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwOC5pbm5lckhUTUwgPSBgTEVMQVJHRS1QVUdFT1QgJ0xVTkEgVk9MLjInIENIQU1QQUdORTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5DSEFSRE9OTkFZLCBQSU5PVCBOT0lSIHwgRlJBTkNFIDIwMTU8YnI+JDI5ODwvc3Bhbj5gOyBcbiAgY29uc3QgaDFzcDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A5LmlubmVySFRNTCA9IGBWSUxMQSBQSUNUQSAnU09HTkFSRSEgU09HTkFSRSEnPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkxBTUJSVVNDTyBTT1JCQVJBIHwgTE9NQkFSRElBIDIwMjA8YnI+JDk4PC9zcGFuPmA7IFxuICBjb25zdCBoMXNwMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AxMC5pbm5lckhUTUwgPSBgS09JICdWSVNJTyc8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+TEFNQlJVU0NPIFNPUkJBUkEgQU5EIE1BRVNUUkksIFRSRUJCSUFOTyB8IEVNSUxJQS1ST01BR05BIDIwMjE8YnI+JDk2PC9zcGFuPmA7XG4gIGNvbnN0IGgxc3AxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDExLmlubmVySFRNTCA9IGBTSUxWSU8gTUVTU0FOQSAnR0hBWklJJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5TQU5HSU9WRVNFIHwgVE9TQ0FOQSAyMDIxPGJyPiQ3Mjwvc3Bhbj5gO1xuICBjb25zdCBoMXNwMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3AxMi5pbm5lckhUTUwgPSBgUE9ERVJFIFNPVFRPSUxOT0NFICdTQUxEQUxBTUEnPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkxBTUJSVVNDTyBCTEVORCB8IEVNSUxJQS1ST01BR05BIDIwMjE8YnI+JDc2PC9zcGFuPmA7XG4gIGNvbnN0IGgxc3AxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDEzLmlubmVySFRNTCA9IGBURVJSRVZJVkUgJ1NUSU9MT1JPU1NPJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5MTUFCUlVTQ08gREkgU09SQkFSQSB8IEVNSUxJQS1ST01BR05BIDIwMjE8YnI+JDkwPC9zcGFuPmA7XG5cbiAgY29uc3QgaGVhZGluZzFzcGFuID0gW2gxc3AxLCBoMXNwMiwgaDFzcDMsIGgxc3A0LCBoMXNwNSwgaDFzcDYsIGgxc3A3LCBoMXNwOCwgaDFzcDksIGgxc3AxMCwgaDFzcDExLCBoMXNwMTIsIGgxc3AxM107XG4gIHdpbmVQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcxKTtcbiAgaGVhZGluZzFzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIldISVRFXCJcbiAgY29uc3QgaDJzcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AxLmlubmVySFRNTCA9IGBCVVJHRVJIT0YgTUVTU05FUiDigJhBQ0tFUkxFTuKAmTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5TT0xBUklTLCBNVVNDQVJJUyB8IEFMVE8gQURJR0UgMjAxOTxicj4kOTY8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AyLmlubmVySFRNTCA9IGBNQVJDTyBTQVJBICdNT05URSBERUxMQSBHVUFSREEnPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPlRPQ0FJIEZSSVVMQU5PLCBQSUNPTElUIHwgRlJJVUxJIDIwMTk8YnI+JDEwNDwvc3Bhbj5gO1xuICBjb25zdCBoMnNwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDMuaW5uZXJIVE1MID0gYExBIEdVR0xJQTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5HQVJHQU5FR0EgfCBWRU5FVE8gMjAyMTxicj4kNzY8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3A0LmlubmVySFRNTCA9IGBDQU5USU5BIFJPRU5PICdSRVBBTkRBJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5TT0xBUklTIHwgVkVORVRPIDIwMjE8YnI+JDY4PC9zcGFuPmA7XG4gIGNvbnN0IGgyc3A1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwNS5pbm5lckhUTUwgPSBgR0lPVkFOTkkgRURFUkxFICdET05OQSBGUkFOQ0VTQ0EnPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkdBUkdBTkVHQSwgQ0hBUkRPTk5BWSB8IFZFTkVUTyAyMDIwPGJyPiQ4NDwvc3Bhbj5gO1xuICBjb25zdCBoMnNwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDJzcDYuaW5uZXJIVE1MID0gYENBTlRSSU5BICdSSU7DiSc8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+UklFU0xJTkcsIENIQVJET05OQVksIElOQ1JPQ0lPIE1BTlpPTkkgfCBMT01CQVJESUEgMjAyMDxicj4kNjY8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3A3LmlubmVySFRNTCA9IGBHSVJPIERJIFZJVEUgJ0VMSUFOVEEnPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPk1BTFZBU0lBIE1PU0NBVEEgfCBQSUVNT05URSAyMDIxPGJyPiQ3MDwvc3Bhbj5gOyBcbiAgY29uc3QgaDJzcDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3A4LmlubmVySFRNTCA9IGBDSUVDSzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5FUkJBTFVDRSBESSBDQUxVU08gfCBQSUVNT05URSAyMDIyPGJyPiQ3MDwvc3Bhbj5gOyBcbiAgY29uc3QgaDJzcDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3A5LmlubmVySFRNTCA9IGBMQSBDT0xPTUJFUkEgJ0RFUlRIT05BJzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5USU1PUkFTU08gfCBQSUVNT05URSAyMDIyPGJyPiQ2ODwvc3Bhbj5gOyBcbiAgY29uc3QgaDJzcDEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwMTAuaW5uZXJIVE1MID0gYEkgUEFTVElOSSAnRkFSQU9ORSc8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+VkVSREVDQSB8IFBVR0xJQSAyMDIxPGJyPiQ2NDwvc3Bhbj5gO1xuICBjb25zdCBoMnNwMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AxMS5pbm5lckhUTUwgPSBgU0FMVkFUT1JFIE1BUklOTyDigJhUVVJJ4oCZPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkNBVEFSQVRUTyB8IFNJQ0lMSUEgMjAyMjxicj4kNjg8L3NwYW4+YDtcbiAgY29uc3QgaDJzcDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwMTIuaW5uZXJIVE1MID0gYEVEVUFSRE8gVE9SUkVTIEFDT1NUQSDigJhWRVJTQU5URSBOT1JE4oCZPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPkZJRUxEIEJMRU5EIHwgU0lDSUxJQSAyMDIyPGJyPiQ5ODwvc3Bhbj5gO1xuXG4gIGNvbnN0IGhlYWRpbmcyc3BhbiA9IFtoMnNwMSwgaDJzcDIsIGgyc3AzLCBoMnNwNCwgaDJzcDUsIGgyc3A2LCBoMnNwNywgaDJzcDgsIGgyc3A5LCBoMnNwMTAsIGgyc3AxMSwgaDJzcDEyXTtcbiAgd2luZVBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZzIpO1xuICBoZWFkaW5nMnNwYW4uZm9yRWFjaChzcGFuID0+IHtcbiAgICBoZWFkaW5nMi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdpbmVQYWdlO1xufVxuZXhwb3J0IGRlZmF1bHQgd2luZU1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9