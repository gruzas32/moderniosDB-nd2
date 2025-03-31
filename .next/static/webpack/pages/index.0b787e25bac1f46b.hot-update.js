"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FileUpload = ()=>{\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFileChange = (event)=>{\n        setFile(event.target.files[0]);\n    };\n    const handleUpload = async ()=>{\n        if (!file) {\n            alert(\"Pasirink failą!\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        try {\n            const response = await fetch(\"http://localhost:3001/api/upload\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                throw new Error(\"Nepavyko įkelti failo!\");\n            }\n            const data = await response.json();\n            setMessage(data.message);\n        } catch (error) {\n            console.error(\"Įkėlimo klaida:\", error);\n            setMessage(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Įkelk failą į Snowflake\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\OneDrive - Fortevento\\\\Desktop\\\\modernios db\\\\frontend\\\\components\\\\FileUpload.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange,\n                className: \"mb-2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\OneDrive - Fortevento\\\\Desktop\\\\modernios db\\\\frontend\\\\components\\\\FileUpload.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleUpload,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400\",\n                disabled: loading,\n                children: loading ? \"Įkeliama...\" : \"Įkelti\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\OneDrive - Fortevento\\\\Desktop\\\\modernios db\\\\frontend\\\\components\\\\FileUpload.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-lg text-gray-700\",\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\OneDrive - Fortevento\\\\Desktop\\\\modernios db\\\\frontend\\\\components\\\\FileUpload.js\",\n                lineNumber: 51,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\OneDrive - Fortevento\\\\Desktop\\\\modernios db\\\\frontend\\\\components\\\\FileUpload.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileUpload, \"wgTWfQiRIGxuU0PgmqAORiph63w=\");\n_c = FileUpload;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLG1CQUFtQixDQUFDQztRQUN4Qk4sUUFBUU0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtJQUMvQjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIsSUFBSSxDQUFDVixNQUFNO1lBQ1RXLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFFBQVFkO1FBRXhCLElBQUk7WUFDRixNQUFNZSxXQUFXLE1BQU1DLE1BQU0sb0NBQW9DO2dCQUMvREMsUUFBUTtnQkFDUkMsTUFBTU47WUFDUjtZQUVBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENuQixXQUFXa0IsS0FBS25CLE9BQU87UUFDekIsRUFBRSxPQUFPcUIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsbUJBQW1CQTtZQUNqQ3BCLFdBQVdvQixNQUFNckIsT0FBTztRQUMxQjtJQUNGO0lBR0EscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBTUMsTUFBSztnQkFBT0MsVUFBVXhCO2dCQUFrQm9CLFdBQVU7Ozs7OzswQkFDekQsOERBQUNLO2dCQUNDQyxTQUFTdEI7Z0JBQ1RnQixXQUFVO2dCQUNWTyxVQUFVN0I7MEJBRVRBLFVBQVUsZ0JBQWdCOzs7Ozs7WUFFNUJGLHlCQUFXLDhEQUFDZ0M7Z0JBQUVSLFdBQVU7MEJBQThCeEI7Ozs7Ozs7Ozs7OztBQUc3RDtHQW5ETUg7S0FBQUE7QUFxRE4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUENcXE9uZURyaXZlIC0gRm9ydGV2ZW50b1xcRGVza3RvcFxcbW9kZXJuaW9zIGRiXFxmcm9udGVuZFxcY29tcG9uZW50c1xcRmlsZVVwbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGFzaXJpbmsgZmFpbMSFIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91cGxvYWRcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmVwYXZ5a28gxK9rZWx0aSBmYWlsbyFcIik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIsSua8SXbGltbyBrbGFpZGE6XCIsIGVycm9yKTtcclxuICAgICAgc2V0TWVzc2FnZShlcnJvci5tZXNzYWdlKTsgXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj7ErmtlbGsgZmFpbMSFIMSvIFNub3dmbGFrZTwvaDI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBjbGFzc05hbWU9XCJtYi0yXCIgLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGRpc2FibGVkOmJnLWdyYXktNDAwXCJcclxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgPlxyXG4gICAgICAgIHtsb2FkaW5nID8gXCLErmtlbGlhbWEuLi5cIiA6IFwixK5rZWx0aVwifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj57bWVzc2FnZX08L3A+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmlsZVVwbG9hZCIsImZpbGUiLCJzZXRGaWxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVXBsb2FkIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/FileUpload.js\n"));

/***/ })

});