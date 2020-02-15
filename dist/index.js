/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@frontend.js/core/dist/component.js":
/*!**********************************************************!*\
  !*** ./node_modules/@frontend.js/core/dist/component.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse { var i, a; }\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/component.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/component.js\":\n/*!**************************!*\\\n  !*** ./src/component.js ***!\n  \\**************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/styles.js\");\n\n\n\nconst _root = Symbol('root')\nconst _dom = Symbol('dom')\n\nclass Component {\n\tconstructor({\n\t\troot,\n\t\ttemplate,\n\t\tdata = {},\n\t\tstyles = ''\n\t}) {\n\t\tlet rootEl = root\n\n\t\tif (typeof root === 'string') {\n\t\t\trootEl = document.querySelector(root)\n\t\t}\n\t\tif (root && typeof rootEl === 'undefined') {\n\t\t\treturn console.error('unable to find root element')\n\t\t}\n\n\t\tconst dom = new _template__WEBPACK_IMPORTED_MODULE_0__[\"Template\"](template, data).data\n\t\t\n\t\tif (styles) {\n\t\t\tconst css = new _styles__WEBPACK_IMPORTED_MODULE_1__[\"Styles\"](styles)\n\t\n\t\t\tdom.classList.add(css.className)\n\t\t\tdom.appendChild(css.data)\n\t\t}\n\n\t\tif (rootEl) {\n\t\t\trootEl.appendChild(dom)\n\t\t}\n\n\t\tthis[_root] = rootEl\n\t\tthis[_dom] = dom\n\t}\n\n\tget root() {\n\t\treturn this[_root]\n\t}\n\n\tget dom() {\n\t\treturn this[_dom]\n\t}\n\n\tappendChild(child) {\n\t\tif (child instanceof Component) {\n\t\t\tchild = child.dom\n\t\t}\n\n\t\tif (typeof child === 'string') {\n\t\t\tchild = new _template__WEBPACK_IMPORTED_MODULE_0__[\"Template\"](child, data).data\n\t\t}\n\n\t\tif (this[_dom]) {\n\t\t\tthis[_dom].appendChild(child)\n\t\t}\n\t}\n\n\treplace(dom, data) {\n\t\tif (typeof dom === 'string') {\n\t\t\tdom = new _template__WEBPACK_IMPORTED_MODULE_0__[\"Template\"](dom, data).data\n\t\t}\n\n\t\tif (!dom) return console.error('dom element is required when replacing')\n\n\t\tthis[_dom].innerHTML = ''\n\t\tthis[_dom].append(dom)\n\t}\n\n\tdestroy(removeDom) {\n\t\tif (removeDom) {\n\t\t\tthis[_dom].outerHTML = ''\n\t\t}\n\n\t\tthis[_dom] = undefined\n\t\tthis[_root] = undefined\n\t}\n}\n\n\n/***/ }),\n\n/***/ \"./src/styles.js\":\n/*!***********************!*\\\n  !*** ./src/styles.js ***!\n  \\***********************/\n/*! exports provided: Styles */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Styles\", function() { return Styles; });\nclass Styles {\n\tconstructor(styles) {\n\t\tconst element = document.createElement('style')\n\t\tconst className = `frontend_${Math.floor(Math.random() * 100000) + 1}`\n\n\t\tstyles = styles.replace(/(\\r\\n|\\n|\\r)/gm, '')\n\t\tstyles = styles.replace(/:scope\\b/g, '.' + className)\n\n\t\telement.innerText = styles\n\n\t\treturn {\n\t\t\tdata: element,\n\t\t\tclassName: className\n\t\t}\n\t}\n}\n\n\n/***/ }),\n\n/***/ \"./src/template.js\":\n/*!*************************!*\\\n  !*** ./src/template.js ***!\n  \\*************************/\n/*! exports provided: Template */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Template\", function() { return Template; });\nconst _getNode = Symbol('getNode')\nconst _processTemplate = Symbol('_processTemplate')\n\nclass Template {\n\tconstructor(template, data = {}) {\n\t\tif (!template) {\n\t\t\treturn console.error('component template required')\n\t\t}\n\n\t\tif (template instanceof Element) {\n\t\t\treturn this[_getNode](template)\n\t\t}\n\n\t\tif (typeof template !== 'string') return console.error('invalid template passed in')\n\n\t\treturn {\n\t\t\tdata: this[_processTemplate](template, data)\n\t\t}\n\t}\n\n\t[_getNode](node) {\n\t\tif (template.childNodes.length === 1) {\n\t\t\treturn template\n\t\t} else {\n\t\t\tconst wrapper = document.createElement('div')\n\t\t\treturn wrapper.append(...node)\n\t\t}\n\t}\n\n\t[_processTemplate](template, data) {\n\t\tconst wrapper = document.createElement('div')\n\t\ttemplate = template.replace(/(\\r\\n|\\n|\\r)/gm, '')\n\n\t\tObject.keys(data).forEach((key) => {\n\t\t\ttemplate = template.replace(new RegExp('\\\\{\\\\{\\\\s*' + key + '\\\\s*\\\\}\\\\}', \"gm\"), data[key])\n\t\t})\n\n\t\ttemplate = template.replace(/\\{\\{.*?\\}\\}/gm, '')\n\t\twrapper.innerHTML = template\n\n\t\treturn wrapper.childNodes.length > 1 ? wrapper[0] : wrapper.childNodes[0]\n\t}\n\n\tdestroy() {\n\t\tthis[_processTemplate] = undefined\n\t\tthis[_getNode] = undefined\n\n\t\t_processTemplate = undefined\n\t\t_getNode = undefined\n\t}\n}\n\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///./node_modules/@frontend.js/core/dist/component.js?");

/***/ }),

/***/ "./node_modules/@frontend.js/router/dist/router.js":
/*!*********************************************************!*\
  !*** ./node_modules/@frontend.js/router/dist/router.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse { var i, a; }\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/router.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/router.js\":\n/*!***********************!*\\\n  !*** ./src/router.js ***!\n  \\***********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\nconst _routes = Symbol('routes')\nconst _callRoute = Symbol('callRoute')\nconst _routeParams = Symbol('routeParams')\nconst _currentRoute = Symbol('currentRoute')\nconst _currentParams = Symbol('currentParams')\n\nclass Router {\n\tconstructor(routes = []) {\n\t\tthis[_routes] = routes\n\t\tthis[_callRoute](location.hash)\n\t\twindow.addEventListener('hashchange', (e) => this[_callRoute](location.hash))\n\t}\n\n\t[_callRoute](hash) {\n\t\tif (this[_currentRoute] && this[_currentRoute].unload) {\n\t\t\tthis[_currentRoute].unload()\n\t\t}\n\n\t\tconst path = hash.replace(/(#\\/|#|\\/(?!.))/g, '')\n\n\t\tthis[_currentRoute] = this[_routes].find(x => {\n\t\t\tif (x.route === '*') return true\n\n\t\t\treturn this[_routeParams](x.route, path) === path\n\t\t})\n\n\t\tthis[_currentRoute].load(this[_currentParams])\n\t}\n\n\t[_routeParams](route, path) {\n\t\tconst routeArr = route.split('/')\n\t\tconst pathArr = path.split('/')\n\n\t\tif (routeArr.length === 0 || routeArr.length !== pathArr.length) return route\n\n\t\tthis[_currentParams] = {}\n\t\tconst didPass = routeArr.every((fragment, i) => {\n\t\t\tconst param = fragment.replace(/({|})/g, '')\n\n\t\t\tif (param !== fragment) {\n\t\t\t\tfragment = pathArr[i]\n\t\t\t\tthis[_currentParams][param] = pathArr[i]\n\t\t\t}\n\n\t\t\treturn fragment === pathArr[i]\n\t\t})\n\n\t\tif (!didPass) {\n\t\t\tthis[_currentParams] = {}\n\t\t} else {\n\t\t\troute = path\n\t\t}\n\n\t\treturn route\n\t}\n}\n\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///./node_modules/@frontend.js/router/dist/router.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontend_js_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend.js/router */ \"./node_modules/@frontend.js/router/dist/router.js\");\n/* harmony import */ var _frontend_js_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_frontend_js_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontend_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend.js/core */ \"./node_modules/@frontend.js/core/dist/component.js\");\n/* harmony import */ var _frontend_js_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_frontend_js_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nnew _frontend_js_router__WEBPACK_IMPORTED_MODULE_0___default.a([{\n  route: '',\n  load: function load() {\n    location.hash = '/home';\n  },\n  unload: function unload() {\n    console.log('leaving /');\n  }\n}, {\n  route: 'home',\n  load: function load(params) {\n    console.log('home route', params);\n  },\n  unload: function unload() {\n    console.log('leaving home route');\n  }\n}, {\n  route: 'test1/{{foo}}/{{bar}}',\n  load: function load(params) {\n    console.log('test 1 route', params);\n  },\n  unload: function unload() {\n    console.log('leaving test 1 route');\n  }\n}, {\n  route: '*',\n  load: function load() {\n    console.log('unknown route');\n  },\n  unload: function unload() {\n    console.log('leaving unknown route');\n  }\n}]);\nnew _frontend_js_core__WEBPACK_IMPORTED_MODULE_1___default.a({\n  root: '#app',\n  template: _index_html__WEBPACK_IMPORTED_MODULE_2___default.a\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n\\t<meta charset=\\\"UTF-8\\\">\\n\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\\t<meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n\\t<meta name=\\\"Description\\\" content=\\\"Demo page for frontend.js\\\">\\n\\t<title>Rock Hopper</title>\\n</head>\\n<body>\\n  <div id=\\\"app\\\"></div>\\n\\t<script src=\\\"index.js\\\"></script>\\n</body>\\n</html>\\n\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });