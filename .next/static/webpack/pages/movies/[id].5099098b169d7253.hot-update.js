"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[id]",{

/***/ "./pages/movies/[id].js":
/*!******************************!*\
  !*** ./pages/movies/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ TheMovie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\gabri\\\\Desktop\\\\next\\\\pages\\\\movies\\\\[id].js\";\n\n// import '../../styles/globals'\n// A QUESTÃO 1 DA RECEITA 9 ESTÁ NO ARQUIVO USERS.JS \n// A QUESTÃO 3 ESTÁ NA LINHA 9 \n// A QUESTÃO 4 ESTÁ ESCRITA A PARTIR DA LINHA 11\nvar __N_SSG = true;\nfunction TheMovie(_ref) {\n  var data = _ref.data;\n  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"carregando...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 22\n  }, this); // questão 3\n\n  if (data.Title) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {},\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [data.Title, \" --- \", data.Year]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Plot\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: data.Poster,\n          width: \"300\",\n          height: \"400\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"N\\xE3o h\\xE1 o recurso solicitado no sistema\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this); // CASO O TÍTULO NÃO SEJA ENCONTRADO, O SISTEMA EXIBE ESSA MENSAGEM\n  }\n}\n_c = TheMovie;\n\nvar _c;\n\n$RefreshReg$(_c, \"TheMovie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxPQUE0QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV6QyxNQUFJLENBQUNBLElBQUwsRUFBVyxvQkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSLENBRjhCLENBRUk7O0FBRTdDLE1BQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNkLHdCQUNFO0FBQUssV0FBSyxFQUFFLEVBQVo7QUFBQSw4QkFDRTtBQUFBLG1CQUFNRCxJQUFJLENBQUNDLEtBQVgsV0FBdUJELElBQUksQ0FBQ0UsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFNRixJQUFJLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUgsSUFBSSxDQUFDSSxNQUFmO0FBQXVCLGVBQUssRUFBQyxLQUE3QjtBQUFtQyxnQkFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFTRCxHQVZELE1BVU87QUFDTCx3QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSLENBREssQ0FDc0Q7QUFDNUQ7QUFFRjtLQWxCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9baWRdLmpzPzhhNzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscydcclxuXHJcbi8vIEEgUVVFU1TDg08gMSBEQSBSRUNFSVRBIDkgRVNUw4EgTk8gQVJRVUlWTyBVU0VSUy5KUyBcclxuLy8gQSBRVUVTVMODTyAzIEVTVMOBIE5BIExJTkhBIDkgXHJcbi8vIEEgUVVFU1TDg08gNCBFU1TDgSBFU0NSSVRBIEEgUEFSVElSIERBIExJTkhBIDExXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVNb3ZpZSh7IGRhdGEgfSkge1xyXG4gIFxyXG4gIGlmICghZGF0YSkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pIC8vIHF1ZXN0w6NvIDNcclxuXHJcbiAgaWYgKGRhdGEuVGl0bGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICA8ZGl2PntkYXRhLlRpdGxlfSAtLS0ge2RhdGEuWWVhcn08L2Rpdj5cclxuICAgICAgICA8ZGl2PntkYXRhLlBsb3R9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0gd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCI0MDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoPGRpdj5Ow6NvIGjDoSBvIHJlY3Vyc28gc29saWNpdGFkbyBubyBzaXN0ZW1hPC9kaXY+KSAvLyBDQVNPIE8gVMONVFVMTyBOw4NPIFNFSkEgRU5DT05UUkFETywgTyBTSVNURU1BIEVYSUJFIEVTU0EgTUVOU0FHRU1cclxuICB9XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7IHBhcmFtczogeyBpZDogXCJ0dDAwOTU4MDFcIiB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcInR0MDAzMzE1MlwiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwidHQwMDE1NDAwXCIgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBpZDogXCJ0dDAwNDExNDlcIiB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcInR0MDA0NDM4OFwiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwidHQwMDk4NzQ2XCIgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBpZDogXCJ0dDAwNDYzMjJcIiB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcInR0MDA0NjQ5N1wiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwidHQwMDQ0Mzg5XCIgfSB9XHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWYxY2JjNDFlJmk9JHtwYXJhbXMuaWR9YClcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJUaGVNb3ZpZSIsImRhdGEiLCJUaXRsZSIsIlllYXIiLCJQbG90IiwiUG9zdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[id].js\n");

/***/ })

});