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
exports.id = "pages/users/[users]";
exports.ids = ["pages/users/[users]"];
exports.modules = {

/***/ "./pages/users/[users].js":
/*!********************************!*\
  !*** ./pages/users/[users].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\gabri\\\\Desktop\\\\next\\\\pages\\\\users\\\\[users].js\";\n\n\nfunction Users({\n  users\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [user.name, \" --- \", user.address.city, \" --- \", user.email]\n      }, user.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticPaths() {\n  return {\n    paths: [{\n      params: {\n        id: \"1\"\n      }\n    }, {\n      params: {\n        id: \"2\"\n      }\n    }, {\n      params: {\n        id: \"3\"\n      }\n    }],\n    fallback: true\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const data = await fetch(`https://jsonplaceholder.typicode.com/users=${params.id}`);\n  const users = await data.json();\n  return {\n    props: {\n      users\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bdXNlcnNdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLEVBQUFBO0FBQUYsQ0FBZixFQUEwQjtBQUN2QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLG1CQUFtQkEsSUFBSSxDQUFDQyxJQUF4QixXQUFtQ0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWhELFdBQTJESCxJQUFJLENBQUNJLEtBQWhFO0FBQUEsU0FBU0osSUFBSSxDQUFDSyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBVUQ7QUFFTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUVILFFBQUFBLEVBQUUsRUFBRTtBQUFOO0FBQVYsS0FESyxFQUVMO0FBQUVHLE1BQUFBLE1BQU0sRUFBRTtBQUFFSCxRQUFBQSxFQUFFLEVBQUU7QUFBTjtBQUFWLEtBRkssRUFHTDtBQUFFRyxNQUFBQSxNQUFNLEVBQUU7QUFBRUgsUUFBQUEsRUFBRSxFQUFFO0FBQU47QUFBVixLQUhLLENBREY7QUFNTEksSUFBQUEsUUFBUSxFQUFFO0FBTkwsR0FBUDtBQVFEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFRixFQUFBQTtBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1HLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUUsOENBQTZDSixNQUFNLENBQUNILEVBQUcsRUFBekQsQ0FBeEI7QUFDQSxRQUFNUCxLQUFLLEdBQUcsTUFBTWEsSUFBSSxDQUFDRSxJQUFMLEVBQXBCO0FBRUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTGhCLE1BQUFBO0FBREs7QUFERixHQUFQO0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvdXNlcnMvW3VzZXJzXS5qcz85ZWZkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5Vc2VyczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8aDMga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfSAtLS0ge3VzZXIuYWRkcmVzcy5jaXR5fSAtLS0ge3VzZXIuZW1haWx9PC9oMz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiMVwiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiMlwiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiM1wiIH0gfVxyXG4gICAgXSxcclxuICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzPSR7cGFyYW1zLmlkfWApXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcnNcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJuYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJlbWFpbCIsImlkIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[users].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/users/[users].js"));
module.exports = __webpack_exports__;

})();