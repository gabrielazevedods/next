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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\gabri\\\\Desktop\\\\next\\\\pages\\\\movies.js\";\n\n\nfunction Movies({\n  data\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: data.Search.map(transformar)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\n\nfunction transformar(elemento) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [elemento.Title, \" --- \", elemento.Year, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: elemento.Poster,\n      width: \"300\",\n      height: \"400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\nasync function getServerSideProps(context) {\n  const res = await fetch(`http://www.omdbapi.com/?apikey=ed926521&s=bagdad`);\n  const data = await res.json();\n  return {\n    props: {\n      data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsRUFBQUE7QUFBRixDQUFoQixFQUEwQjtBQUV2QyxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBQ0dBLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCQyxXQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7QUFFRCxTQUFTQSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QixzQkFDRTtBQUFBLDRCQUNBO0FBQUEsaUJBQU1BLFFBQVEsQ0FBQ0MsS0FBZixXQUEyQkQsUUFBUSxDQUFDRSxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQUssU0FBRyxFQUFFRixRQUFRLENBQUNHLE1BQW5CO0FBQTJCLFdBQUssRUFBQyxLQUFqQztBQUF1QyxZQUFNLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBO0FBQUEsa0JBREY7QUFNRDs7QUFDTSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFFaEQsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxrREFBRixDQUF2QjtBQUNBLFFBQU1YLElBQUksR0FBRyxNQUFNVSxHQUFHLENBQUNFLElBQUosRUFBbkI7QUFFQSxTQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBRTtBQUNMYixNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7IGRhdGEgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKHRyYW5zZm9ybWFyKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybWFyKGVsZW1lbnRvKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PntlbGVtZW50by5UaXRsZX0gLS0tIHtlbGVtZW50by5ZZWFyfSA8L2Rpdj5cclxuICAgIDxpbWcgc3JjPXtlbGVtZW50by5Qb3N0ZXJ9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNDAwXCIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1lZDkyNjUyMSZzPWJhZ2RhZGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGFcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTW92aWVzIiwiZGF0YSIsIlNlYXJjaCIsIm1hcCIsInRyYW5zZm9ybWFyIiwiZWxlbWVudG8iLCJUaXRsZSIsIlllYXIiLCJQb3N0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();