"use strict";
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
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\gabri\\\\Desktop\\\\next\\\\pages\\\\users.js\";\n\n\nfunction Users({\n  users\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [user.name, \" --- \", user.address.city, \" --- \", user.email]\n      }, user.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticProps() {\n  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);\n  const users = await data.json();\n  return {\n    props: {\n      users\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLEVBQUFBO0FBQUYsQ0FBZixFQUEwQjtBQUN2QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLG1CQUFtQkEsSUFBSSxDQUFDQyxJQUF4QixXQUFtQ0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWhELFdBQTJESCxJQUFJLENBQUNJLEtBQWhFO0FBQUEsU0FBU0osSUFBSSxDQUFDSyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBVUQ7QUFHTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUUsNENBQUYsQ0FBeEI7QUFDQSxRQUFNVixLQUFLLEdBQUcsTUFBTVMsSUFBSSxDQUFDRSxJQUFMLEVBQXBCO0FBRUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTFosTUFBQUE7QUFESztBQURGLEdBQVA7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy91c2Vycy5qcz8wMDYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8aDMga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfSAtLS0ge3VzZXIuYWRkcmVzcy5jaXR5fSAtLS0ge3VzZXIuZW1haWx9PC9oMz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNgKVxyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZGF0YS5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXJzXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwibmFtZSIsImFkZHJlc3MiLCJjaXR5IiwiZW1haWwiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users.js"));
module.exports = __webpack_exports__;

})();