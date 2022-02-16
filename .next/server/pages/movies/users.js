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
exports.id = "pages/movies/users";
exports.ids = ["pages/movies/users"];
exports.modules = {

/***/ "./pages/movies/users.js":
/*!*******************************!*\
  !*** ./pages/movies/users.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\gabri\\\\Desktop\\\\next\\\\pages\\\\movies\\\\users.js\";\n\n\n// ARQUIVO COM A REQUISIÇÃO A API DE MINHA PREFERÊNCIA, QUESTÃO DO EXERCÍCIO 1 DA RECEITA 9\nfunction Users({\n  users\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [user.name, \" --- \", user.address.city, \" --- \", user.email]\n      }, user.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticProps() {\n  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);\n  const users = await data.json();\n  return {\n    props: {\n      users\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLEVBQUFBO0FBQUYsQ0FBZixFQUEwQjtBQUN2QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLG1CQUFtQkEsSUFBSSxDQUFDQyxJQUF4QixXQUFtQ0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWhELFdBQTJESCxJQUFJLENBQUNJLEtBQWhFO0FBQUEsU0FBU0osSUFBSSxDQUFDSyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBVUQ7QUFHTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUUsNENBQUYsQ0FBeEI7QUFDQSxRQUFNVixLQUFLLEdBQUcsTUFBTVMsSUFBSSxDQUFDRSxJQUFMLEVBQXBCO0FBRUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTFosTUFBQUE7QUFESztBQURGLEdBQVA7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9tb3ZpZXMvdXNlcnMuanM/N2ZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUlFVSVZPIENPTSBBIFJFUVVJU0nDh8ODTyBBIEFQSSBERSBNSU5IQSBQUkVGRVLDik5DSUEsIFFVRVNUw4NPIERPIEVYRVJDw41DSU8gMSBEQSBSRUNFSVRBIDlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+VXNlcnM8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPGgzIGtleT17dXNlci5pZH0+e3VzZXIubmFtZX0gLS0tIHt1c2VyLmFkZHJlc3MuY2l0eX0gLS0tIHt1c2VyLmVtYWlsfTwvaDM+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzYClcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IGRhdGEuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2Vyc1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJVc2VycyIsInVzZXJzIiwibWFwIiwidXNlciIsIm5hbWUiLCJhZGRyZXNzIiwiY2l0eSIsImVtYWlsIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/users.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/users.js"));
module.exports = __webpack_exports__;

})();