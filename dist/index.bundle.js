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
  --orange: #ffdfba;
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

html { width: 100%; }
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
  width: 90%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: var(--background);
  z-index: 100;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),
                    0 22px 70px 4px rgba(61, 64, 91, 0.96),
                    0 0 0 1px rgba(0, 0, 0, 0.0);
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
  margin: 0;
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
  color: var(--text);
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
  gap: 4px;
  font-family: 'regular';
  font-size: 32px;
}
.menuPage span {
  font-family: 'regular';
  font-size: 18px;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --black: #41444B;\n  --background: #3D405B;\n  --text: #F4F1DE;\n  --orange: #ffdfba;\n  --yellow: #ffffba;\n  --green: #baffc9;\n  --red: #f38ba8;\n  --blue: #bae1ff;\n}\n\n@font-face {\n  font-family: 'regular';\n  src: url('./metadata/HammersmithOne-Regular.ttf');\n}\n@font-face {\n  font-family: 'display';\n  src: url('./metadata/BungeeShade-Regular.ttf');\n}\n\nhtml { width: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  background-color: var(--background);\n  font-family: 'regular';\n  color: var(--text);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n::-webkit-scrollbar {\n  width: 2px;\n}\n::-webkit-scrollbar-track {\n  background: var(--black);\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.selected {\n  border-bottom: 2px solid var(--orange) !important;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, 0);\n  background-color: var(--background);\n  z-index: 100;\n}\n\nheader nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 14px;\n}\n\nheader nav button {\n  background: none;\n  border: none;\n  padding-bottom: 4px;\n  color: var(--text);\n  font-family: 'display';\n  font-size: 16px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  width: 80px;\n}\nheader nav button:hover {\n  opacity: 0.69;\n}\nheader nav button:active {\n  opacity: 1;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  padding: 24px;\n}\n\nh1 {\n  align-self: center;\n  font-family: 'display';\n  font-size: 48px;\n  color: var(--text);\n  letter-spacing: 2px;\n}\n\n.reservation {\n  align-self: flex-end;\n  font-size: 14px;\n  text-align: end;\n}\n\n#reservationBtn {\n  margin-top: 32px;\n  align-self: center;\n  position: relative;\n  border: none;\n  font-family: 'display';\n  color: var(--orange);\n  font-size: 18px;\n  letter-spacing: 2px;\n  background-color: var(--black);\n  padding: 6px 8px;\n  border: 3px solid var(--text);\n  cursor: pointer;\n}\n#reservationBtn:hover {\n  color: var(--black);\n  background-color: var(--orange);\n  border: 3px solid var(--black);\n}\n#reservationBtn:active {\n  color: var(--orange);\n  background-color: var(--black);\n  border: 3px solid var(--text);\n}\n#reservationBtn::before {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background-color: var(--text);\n  border-right: 3px solid var(--text);\n  border-bottom: 3px solid var(--text);\n}\n#reservationBtn:hover::before {\n  background-color: var(--orange);\n  border-right: 3px solid var(--orange);\n  border-bottom: 3px solid var(--orange);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, 0);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  background-color: var(--background);\n  z-index: 100;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(61, 64, 91, 0.96),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nfooter button {\n  cursor: pointer;\n  opacity: 1;\n}\nfooter button:hover {\n  opacity: 0.69;\n}\nfooter button:active {\n  opacity: 1;\n}\n#instagramBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n}\n#instagramBtn img {\n  width: 16px;\n  margin: 0;\n  padding: 0;\n}\n#jobBoardBtn {\n  background: none;\n  border: none;\n  font-family: 'regular';\n  color: var(--text);\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  padding: 24px; \n}\n\n#menuSwitcher {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: row;\n  gap: 24px;\n}\n#menuSwitcher button {\n  background: none;\n  border: none;\n  font-family: 'regular';\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 1px;\n  color: var(--text);\n  width: 80px;\n  cursor: pointer;\n}\n\n#menuContainer {\n  margin-top: 16px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.menuPage h2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  font-family: 'regular';\n  font-size: 32px;\n}\n.menuPage span {\n  font-family: 'regular';\n  font-size: 18px;\n  text-align: center;\n}"],"sourceRoot":""}]);
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

  console.log(`About Section`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutSection);

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
  reservationDetail.textContent = "Reservations available via Resy, and we always welcome walk-ins. For groups larger than 4 guests, please reach out to us directly at hello@romansnyc.com.";
  reservationDetail.classList.add("reservation");
  contentContainer.appendChild(reservationDetail);

  const reservationBtn = document.createElement('button');
  reservationBtn.id = "reservationBtn";
  reservationBtn.innerHTML = "RESERVE";
  contentContainer.appendChild(reservationBtn);
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
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // home section - default
  menuBtn.classList.add("selected");

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
})

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

    menuContainer.appendChild(dinnerPage);
    dinnerBtn.classList.add('selected');

    menuSwitcherNavBtns.forEach(button => {
      button.addEventListener('click', function() {

        if (button.id === "dinnerBtn") {
          lunchBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          dinnerBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(dinnerPage);

        } else if (button.id === "lunchBtn") {
          dinnerBtn.classList.remove('selected');
          wineBtn.classList.remove('selected');
          lunchBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(lunchPage);

        } else if (button.id === "wineBtn") {
          dinnerBtn.classList.remove('selected');
          lunchBtn.classList.remove('selected');
          wineBtn.classList.add('selected');

          clearElement(menuContainer); 
          menuContainer.appendChild(winePage);
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

module.exports = __webpack_require__.p + "7eb7d8ad18037bc20332.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLGlKQUFxRDtBQUNqRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLG9CQUFvQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZ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VjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21ldGFkYXRhL0hhbW1lcnNtaXRoT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tZXRhZGF0YS9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1ibGFjazogIzQxNDQ0QjtcbiAgLS1iYWNrZ3JvdW5kOiAjM0Q0MDVCO1xuICAtLXRleHQ6ICNGNEYxREU7XG4gIC0tb3JhbmdlOiAjZmZkZmJhO1xuICAtLXllbGxvdzogI2ZmZmZiYTtcbiAgLS1ncmVlbjogI2JhZmZjOTtcbiAgLS1yZWQ6ICNmMzhiYTg7XG4gIC0tYmx1ZTogI2JhZTFmZjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5odG1sIHsgd2lkdGg6IDEwMCU7IH1cbmJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAycHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSkgIWltcG9ydGFudDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmhlYWRlciBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuaGVhZGVyIG5hdiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdkaXNwbGF5JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA4MHB4O1xufVxuaGVhZGVyIG5hdiBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjY5O1xufVxuaGVhZGVyIG5hdiBidXR0b246YWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhvbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuaDEge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4ucmVzZXJ2YXRpb24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbiNyZXNlcnZhdGlvbkJ0biB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNyZXNlcnZhdGlvbkJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcbn1cbiNyZXNlcnZhdGlvbkJ0bjphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcbn1cbiNyZXNlcnZhdGlvbkJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLXRleHQpO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGV4dCk7XG59XG4jcmVzZXJ2YXRpb25CdG46aG92ZXI6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApLFxuICAgICAgICAgICAgICAgICAgICAwIDIycHggNzBweCA0cHggcmdiYSg2MSwgNjQsIDkxLCAwLjk2KSxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wKTtcbn1cblxuZm9vdGVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbn1cbmZvb3RlciBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjY5O1xufVxuZm9vdGVyIGJ1dHRvbjphY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuI2luc3RhZ3JhbUJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNpbnN0YWdyYW1CdG4gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNqb2JCb2FyZEJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBhZGRpbmc6IDI0cHg7IFxufVxuXG4jbWVudVN3aXRjaGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyNHB4O1xufVxuI21lbnVTd2l0Y2hlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHdpZHRoOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLm1lbnVQYWdlIGgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xuICBmb250LXNpemU6IDMycHg7XG59XG4ubWVudVBhZ2Ugc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFD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QUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmxhY2s6ICM0MTQ0NEI7XFxuICAtLWJhY2tncm91bmQ6ICMzRDQwNUI7XFxuICAtLXRleHQ6ICNGNEYxREU7XFxuICAtLW9yYW5nZTogI2ZmZGZiYTtcXG4gIC0teWVsbG93OiAjZmZmZmJhO1xcbiAgLS1ncmVlbjogI2JhZmZjOTtcXG4gIC0tcmVkOiAjZjM4YmE4O1xcbiAgLS1ibHVlOiAjYmFlMWZmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XFxuICBzcmM6IHVybCgnLi9tZXRhZGF0YS9IYW1tZXJzbWl0aE9uZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XFxuICBzcmM6IHVybCgnLi9tZXRhZGF0YS9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5odG1sIHsgd2lkdGg6IDEwMCU7IH1cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMnB4O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tb3JhbmdlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbmhlYWRlciBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNjk7XFxufVxcbmhlYWRlciBuYXYgYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnZGlzcGxheSc7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbiNyZXNlcnZhdGlvbkJ0biB7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdkaXNwbGF5JztcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Jlc2VydmF0aW9uQnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG4jcmVzZXJ2YXRpb25CdG46YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dCk7XFxufVxcbiNyZXNlcnZhdGlvbkJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiAzcHg7XFxuICB6LWluZGV4OiAtMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG59XFxuI3Jlc2VydmF0aW9uQnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCksXFxuICAgICAgICAgICAgICAgICAgICAwIDIycHggNzBweCA0cHggcmdiYSg2MSwgNjQsIDkxLCAwLjk2KSxcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMCk7XFxufVxcblxcbmZvb3RlciBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY5O1xcbn1cXG5mb290ZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4jaW5zdGFncmFtQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNpbnN0YWdyYW1CdG4gaW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2pvYkJvYXJkQnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgcGFkZGluZzogMjRweDsgXFxufVxcblxcbiNtZW51U3dpdGNoZXIge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG4jbWVudVN3aXRjaGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21lbnVDb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLm1lbnVQYWdlIGgyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4ubWVudVBhZ2Ugc3BhbiB7XFxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhYm91dFNlY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnNvbGUubG9nKGBBYm91dCBTZWN0aW9uYCk7XG59XG5leHBvcnQgZGVmYXVsdCBhYm91dFNlY3Rpb247IiwiZnVuY3Rpb24gaG9tZVNlY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtY29udGVudFwiKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXQtY29udGVudFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJSb21hbidzXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZXNlcnZhdGlvbkRldGFpbC50ZXh0Q29udGVudCA9IFwiUmVzZXJ2YXRpb25zIGF2YWlsYWJsZSB2aWEgUmVzeSwgYW5kIHdlIGFsd2F5cyB3ZWxjb21lIHdhbGstaW5zLiBGb3IgZ3JvdXBzIGxhcmdlciB0aGFuIDQgZ3Vlc3RzLCBwbGVhc2UgcmVhY2ggb3V0IHRvIHVzIGRpcmVjdGx5IGF0IGhlbGxvQHJvbWFuc255Yy5jb20uXCI7XG4gIHJlc2VydmF0aW9uRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvblwiKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRldGFpbCk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXJ2YXRpb25CdG4uaWQgPSBcInJlc2VydmF0aW9uQnRuXCI7XG4gIHJlc2VydmF0aW9uQnRuLmlubmVySFRNTCA9IFwiUkVTRVJWRVwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnRuKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhvbWVTZWN0aW9uOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWVTZWN0aW9uIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVNlY3Rpb24gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dFNlY3Rpb24gZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgaW5zdGFncmFtSWNvbiBmcm9tICcuL21ldGFkYXRhL2luc3RhZ3JhbS5zdmcnO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IGhlYWRlck5hdiA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbmNvbnN0IGhlYWRlck5hdkJ0bnMgPSBoZWFkZXJOYXYucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ0bicpO1xuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRCdG4nKTtcblxuaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xubWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiOyBcbmFib3V0QnRuLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudElEKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElEKTtcbiAgXG4gIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVIZWFkZXJOYXYoKSB7XG4gIG1lbnVTZWN0aW9uKCk7IC8vIGhvbWUgc2VjdGlvbiAtIGRlZmF1bHRcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgaGVhZGVyTmF2QnRucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYnV0dG9uLmlkID09PSBcImhvbWVCdG5cIikge1xuICAgICAgICBjbGVhckVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICAgICAgaG9tZVNlY3Rpb24oKTtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGFib3V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5pZCA9PT0gXCJtZW51QnRuXCIpIHtcbiAgICAgICAgY2xlYXJFbGVtZW50KCdjb250ZW50Jyk7XG4gICAgICAgIG1lbnVTZWN0aW9uKCk7XG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBhYm91dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwiYWJvdXRCdG5cIikge1xuICAgICAgICBjbGVhckVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICAgICAgYWJvdXRTZWN0aW9uKCk7XG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbmhhbmRsZUhlYWRlck5hdigpO1xuXG5cbmNvbnN0IGluc3RhQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RhZ3JhbUJ0bicpO1xuY29uc3QgaW5zdGFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmluc3RhSW1nLnNyYyA9IGluc3RhZ3JhbUljb247XG5pbnN0YUJ0bi5hcHBlbmRDaGlsZChpbnN0YUltZyk7XG5pbnN0YUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yb21hbnNueWMvJywgJ19zZWxmJyk7XG59KTtcblxuY29uc3Qgam9iQm9hcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9iQm9hcmRCdG4nKTtcbmpvYkJvYXJkQnRuLnRleHRDb250ZW50ID0gXCJXb3JrIFdpdGggVXNcIjtcbmpvYkJvYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5yb21hbnNueWMuY29tL3dvcmstd2l0aC11cy8jL2Zvcm0nLCAnX3NlbGYnKTtcbn0pIiwiZnVuY3Rpb24gbWVudVNlY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJob21lLWNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0LWNvbnRlbnRcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcblxuICBjb25zdCBtZW51U3dpdGNoZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbWVudVN3aXRjaGVyTmF2LmlkID0gXCJtZW51U3dpdGNoZXJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U3dpdGNoZXJOYXYpO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5pZCA9IFwibWVudUNvbnRhaW5lclwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gIC8vIGRpbm5lciBtZW51XG4gIGNvbnN0IGRpbm5lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkaW5uZXJCdG4uaWQgPSBcImRpbm5lckJ0blwiO1xuICBkaW5uZXJCdG4uaW5uZXJIVE1MID0gXCJESU5ORVJcIjtcbiAgbWVudVN3aXRjaGVyTmF2LmFwcGVuZENoaWxkKGRpbm5lckJ0bik7XG5cbiAgY29uc3QgZGlubmVyUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaW5uZXJQYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51UGFnZVwiKTtcblxuICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcxLnRleHRDb250ZW50ID0gXCJGSVJTVFwiXG4gIGNvbnN0IGgxc3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwMS5pbm5lckhUTUwgPSBgT0xJVkVTPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQ5PC9zcGFuPmA7XG4gIGNvbnN0IGgxc3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwMi5pbm5lckhUTUwgPSBgQU5USVBBU1RJIFBMQVRFPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQyMjwvc3Bhbj5gO1xuICBjb25zdCBoMXNwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDMuaW5uZXJIVE1MID0gYEZBVkEgQkVBTiBQVVJFRTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMTg8L3NwYW4+YDtcbiAgY29uc3QgaDFzcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgxc3A0LmlubmVySFRNTCA9IGBDUk9TVElOSSBPRiBTTkFQIFBFQVMsIE1JTlQgQU5EIEZJTk9DQ0hJT05BPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxNjwvc3Bhbj5gO1xuICBjb25zdCBoMXNwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDFzcDUuaW5uZXJIVE1MID0gYFNRVUFDUVVFUk9ORSwgQVNQQVJBR1VTLCBXSElURSBCRUFOUyBBTkQgQk9UVEFSR0E8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDIyPC9zcGFuPmA7XG4gIGNvbnN0IGgxc3A2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMXNwNi5pbm5lckhUTUwgPSBgTEVUVFVDRVMsIEhBWkVMTlVUUywgTVVTVEFSRCBWSU5BSUdSRVRURSBBTkQgUEVDT1JJTk88YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDIzPC9zcGFuPmA7XG4gIGNvbnN0IGhlYWRpbmcxc3BhbiA9IFtoMXNwMSwgaDFzcDIsIGgxc3AzLCBoMXNwNCwgaDFzcDUsIGgxc3A2XTtcbiAgZGlubmVyUGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG4gIGhlYWRpbmcxc3Bhbi5mb3JFYWNoKHNwYW4gPT4ge1xuICAgIGhlYWRpbmcxLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9KTsgXG5cbiAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nMi50ZXh0Q29udGVudCA9IFwiU0VDT05EXCJcbiAgY29uc3QgaDJzcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgyc3AxLmlubmVySFRNTCA9IGBUQUdMSUFURUxMRSwgRkFWQSBMRUFGIFBFU1RPIEFORCBBU1BBUkFHVVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDI3PC9zcGFuPmA7XG4gIGNvbnN0IGgyc3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwMi5pbm5lckhUTUwgPSBgTElOR1VJTkUsIENMQU1TLCBXSUxEIEZFTk5FTCBBTkQgQ0hJTEU8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDI4PC9zcGFuPmA7XG4gIGNvbnN0IGgyc3AzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoMnNwMy5pbm5lckhUTUwgPSBgTUVaWkUgUklHQVRPTkksIFBPUksgUkFHVSwgVE9NQVRPIEFORCBPTElWRVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDI4PC9zcGFuPmA7XG4gIGNvbnN0IGhlYWRpbmcyc3BhbiA9IFtoMnNwMSwgaDJzcDIsIGgyc3AzXTtcbiAgZGlubmVyUGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nMik7XG4gIGhlYWRpbmcyc3Bhbi5mb3JFYWNoKHNwYW4gPT4ge1xuICAgIGhlYWRpbmcyLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9KTtcblxuICBjb25zdCBoZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmczLnRleHRDb250ZW50ID0gXCJUSElSRFwiXG4gIGNvbnN0IGgzc3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoM3NwMS5pbm5lckhUTUwgPSBgU1dPUkRGSVNILCBQT1RBVE9FUywgU1VOIERSSUVEIFRPTUFUT0VTIEFORCBQSU5FIE5VVFM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDM5PC9zcGFuPmA7XG4gIGNvbnN0IGgzc3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoM3NwMi5pbm5lckhUTUwgPSBgQ0hJQ0tFTiBESUFWT0xPIFdJVEggQlJPQ0NPTElOSTxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kNDQ8L3NwYW4+YDtcbiAgY29uc3QgaDNzcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGgzc3AzLmlubmVySFRNTCA9IGBQT1JLIFBPUlRFUkhPVVNFLCBHUklMTEVEIFJBTVBTIEFORCBDSElDS1BFQVM8YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDQzPC9zcGFuPmA7XG4gIGNvbnN0IGhlYWRpbmczc3BhbiA9IFtoM3NwMSwgaDNzcDIsIGgzc3AzXTtcbiAgZGlubmVyUGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nMyk7XG4gIGhlYWRpbmczc3Bhbi5mb3JFYWNoKHNwYW4gPT4ge1xuICAgIGhlYWRpbmczLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9KTtcblxuICBjb25zdCBoZWFkaW5nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmc0LnRleHRDb250ZW50ID0gXCJERVNFUlRcIlxuICBjb25zdCBoNHNwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDEuaW5uZXJIVE1MID0gYENSRU1BIENBUFJJTk8sIFdBTE5VVFMgQU5EIEhPTkVZPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxMzwvc3Bhbj5gO1xuICBjb25zdCBoNHNwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDIuaW5uZXJIVE1MID0gYFBBTk5BIENPVFRBIFdJVEggU1RSQVdCRVJSSUVTIEFORCBBUFBMRSBCQUxTQU1JQzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMTM8L3NwYW4+YDtcbiAgY29uc3QgaDRzcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGg0c3AzLmlubmVySFRNTCA9IGBPTElWRSBPSUwgQ0FLRSwgUk9BU1RFRCBSSFVCQVJCIEFORCBDUkVNRSBGUkFJQ0hFPGJyPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPiQxNTwvc3Bhbj5gO1xuICBjb25zdCBoNHNwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaDRzcDQuaW5uZXJIVE1MID0gYE1JTlQgU1RSQUNDSUFURUxMQSBJQ0UgQ1JFQU08YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDk8L3NwYW4+YDtcbiAgY29uc3QgaDRzcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGg0c3A1LmlubmVySFRNTCA9IGBDSE9DT0xBVEUgU09SQkVUVE88YnI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+JDk8L3NwYW4+YDtcbiAgY29uc3QgaDRzcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGg0c3A2LmlubmVySFRNTCA9IGBBRkZPR0FUTzxicj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj4kMTI8L3NwYW4+YDtcbiAgY29uc3QgaGVhZGluZzRzcGFuID0gW2g0c3AxLCBoNHNwMiwgaDRzcDMsIGg0c3A0LCBoNHNwNSwgaDRzcDZdO1xuICBkaW5uZXJQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmc0KTtcbiAgaGVhZGluZzRzcGFuLmZvckVhY2goc3BhbiA9PiB7XG4gICAgaGVhZGluZzQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG5cbiAgLy8gbHVuY2ggbWVudVxuICBjb25zdCBsdW5jaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsdW5jaEJ0bi5pZCA9IFwibHVuY2hCdG5cIjtcbiAgbHVuY2hCdG4uaW5uZXJIVE1MID0gXCJMVU5DSFwiO1xuICBtZW51U3dpdGNoZXJOYXYuYXBwZW5kQ2hpbGQobHVuY2hCdG4pO1xuXG4gIGNvbnN0IGx1bmNoUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaFBhZ2UudGV4dENvbnRlbnQgPSBcImx1bmNoXCI7XG5cbiAgLy8gd2luZSBtZW51XG4gIGNvbnN0IHdpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgd2luZUJ0bi5pZCA9IFwid2luZUJ0blwiO1xuICB3aW5lQnRuLmlubmVySFRNTCA9IFwiV0lORVwiO1xuICBtZW51U3dpdGNoZXJOYXYuYXBwZW5kQ2hpbGQod2luZUJ0bik7XG5cbiAgY29uc3Qgd2luZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZVBhZ2UudGV4dENvbnRlbnQgPSBcIndpbmVcIjtcblxuICBjb25zdCBtZW51U3dpdGNoZXJOYXZCdG5zID0gW2Rpbm5lckJ0biwgbHVuY2hCdG4sIHdpbmVCdG5dO1xuICBmdW5jdGlvbiBoYW5kbGVNZW51TmF2KCkge1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaW5uZXJQYWdlKTtcbiAgICBkaW5uZXJCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIG1lbnVTd2l0Y2hlck5hdkJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJkaW5uZXJCdG5cIikge1xuICAgICAgICAgIGx1bmNoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgd2luZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIGRpbm5lckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgY2xlYXJFbGVtZW50KG1lbnVDb250YWluZXIpOyBcbiAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpbm5lclBhZ2UpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcImx1bmNoQnRuXCIpIHtcbiAgICAgICAgICBkaW5uZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB3aW5lQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgbHVuY2hCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIGNsZWFyRWxlbWVudChtZW51Q29udGFpbmVyKTsgXG4gICAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsdW5jaFBhZ2UpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIndpbmVCdG5cIikge1xuICAgICAgICAgIGRpbm5lckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIGx1bmNoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgd2luZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgY2xlYXJFbGVtZW50KG1lbnVDb250YWluZXIpOyBcbiAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlTWVudU5hdigpO1xuXG4gIGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBtZW51U2VjdGlvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=