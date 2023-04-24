"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./helper.jsx


function useJsx() {
    return (0,external_react_.useRef)([
        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            children: "a"
        }),
        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            children: "b"
        }),
        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            children: "c"
        }),
        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            children: "d"
        }),
        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
            children: "e"
        }), 
    ]).current;
}

;// CONCATENATED MODULE: ./Hello.jsx


const jsxs = (/* unused pure expression or super */ null && ([]));
function Hello() {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: "Hello!"
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: useJsx()
            })
        ]
    });
}

;// CONCATENATED MODULE: ./World.jsx


function World() {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: "World!"
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: useJsx()
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.jsx



function HomePage() {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(HelloWorld, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(HelloWorld, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(HelloWorld, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(HelloWorld, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(HelloWorld, {})
        ]
    });
}
function HelloWorld() {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Hello, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(World, {})
        ]
    });
}
function getServerSideProps() {
    return {
        props: {}
    };
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(615));
module.exports = __webpack_exports__;

})();