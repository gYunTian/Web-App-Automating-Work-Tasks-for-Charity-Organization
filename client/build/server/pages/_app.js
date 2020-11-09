module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Auth */ "./providers/Auth.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_schedule_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/schedule.css */ "./styles/schedule.css");
/* harmony import */ var _styles_schedule_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_schedule_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/d/G1T3-frontend/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // override default initialization of each page

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_providers_Auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 4
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./providers/Auth.js":
/*!***************************!*\
  !*** ./providers/Auth.js ***!
  \***************************/
/*! exports provided: AuthProvider, useAuth, useIsAuthenticated, getName, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsAuthenticated", function() { return useIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/d/G1T3-frontend/client/providers/Auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // set context

const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  name: null,
  role: null,
  isAuthenticated: false,
  isLoading: true // setAuthenticated: () => {},

}); // wraps around children component and add context

const AuthProvider = ({
  children
}) => {
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [isAuthenticated, setAuthenticated] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [isLoading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);

  const setAuth = value => setAuthenticated(value); // verify cookie against server


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const initializeAuth = async () => {
      if (isAuthenticated) {
        console.log('already authenticated');
        return;
      }

      try {
        // const response = await fetch('http://localhost:8080/mylocalfunction/', {credentials: 'include'});
        // const response = await fetch('http://localhost:5000/api/auth/verify', {credentials: 'include'});
        //const response = await fetch('https://67590a5d-49be-4eb3-a302-c90be94feb62-faas-http.tenant.us10.functions.xfs.cloud.sap/mylocalhttptrigger/', {credentials: 'include'});
        const response = await fetch('/api/auth/verify', {
          credentials: 'include'
        });

        if (response.status === 200) {
          console.log('server okay');
          const data = await response.json();
          setAuthenticated(true);
          setLoading(false);
          setName(data.name);
          let role = data.role;
          setRole(role);
        } else {
          // console.log(response.statusText);
          console.log('not authenticated');
          setLoading(false);
        }
      } catch (error) {
        console.log('server might be down');
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);
  return __jsx(AuthContext.Provider, {
    value: {
      isAuthenticated,
      isLoading,
      name,
      role,
      setAuth,
      setName,
      setRole
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  }, children);
};
function useAuth() {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('missing AuthProvider');
  }

  return context;
}
function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}
function getName() {
  const context = useAuth();
  return context.name;
}
function getRole() {
  const context = useAuth();
  return context.role;
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/schedule.css":
/*!*****************************!*\
  !*** ./styles/schedule.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL0F1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicHJvcHMiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJuYW1lIiwicm9sZSIsImlzQXV0aGVudGljYXRlZCIsImlzTG9hZGluZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0TmFtZSIsInVzZVN0YXRlIiwic2V0Um9sZSIsInNldEF1dGhlbnRpY2F0ZWQiLCJzZXRMb2FkaW5nIiwic2V0QXV0aCIsInZhbHVlIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUF1dGgiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVycm9yIiwidXNlQXV0aCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJ1c2VJc0F1dGhlbnRpY2F0ZWQiLCJnZXROYW1lIiwiZ2V0Um9sZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTs7Ozs7QUFJQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNQSxTQUFTLEdBQUcsTUFBTSwyQ0FBeEIsR0FBd0IsQ0FB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TUwsT0FBTyxHQUFHRCxPQUFPLEVBQXZCO0FBQ0EsU0FBT0MsT0FBTyxDQUFDeEIsSUFBZjtBQUNBO0FBRU0sU0FBUzhCLE9BQVQsR0FBbUI7QUFDekIsUUFBTU4sT0FBTyxHQUFHRCxPQUFPLEVBQXZCO0FBQ0EsU0FBT0MsT0FBTyxDQUFDdkIsSUFBZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGRCxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvQXV0aCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zY2hlZHVsZS5jc3MnO1xuXG4vLyBvdmVycmlkZSBkZWZhdWx0IGluaXRpYWxpemF0aW9uIG9mIGVhY2ggcGFnZVxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXV0aFByb3ZpZGVyPlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L0F1dGhQcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBzZXQgY29udGV4dFxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcblx0bmFtZTogbnVsbCxcblx0cm9sZTogbnVsbCxcblx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcblx0aXNMb2FkaW5nOiB0cnVlLFxuXHQvLyBzZXRBdXRoZW50aWNhdGVkOiAoKSA9PiB7fSxcbn0pO1xuXG4vLyB3cmFwcyBhcm91bmQgY2hpbGRyZW4gY29tcG9uZW50IGFuZCBhZGQgY29udGV4dFxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblx0XG5cdGNvbnN0IHNldEF1dGggPSAodmFsdWUpID0+IHNldEF1dGhlbnRpY2F0ZWQodmFsdWUpO1xuXG5cdC8vIHZlcmlmeSBjb29raWUgYWdhaW5zdCBzZXJ2ZXJcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBpbml0aWFsaXplQXV0aCA9IGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2FscmVhZHkgYXV0aGVudGljYXRlZCcpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9teWxvY2FsZnVuY3Rpb24vJywge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KTtcblx0XHRcdFx0Ly8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hdXRoL3ZlcmlmeScsIHtjcmVkZW50aWFsczogJ2luY2x1ZGUnfSk7XG5cdFx0XHRcdC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly82NzU5MGE1ZC00OWJlLTRlYjMtYTMwMi1jOTBiZTk0ZmViNjItZmFhcy1odHRwLnRlbmFudC51czEwLmZ1bmN0aW9ucy54ZnMuY2xvdWQuc2FwL215bG9jYWxodHRwdHJpZ2dlci8nLCB7Y3JlZGVudGlhbHM6ICdpbmNsdWRlJ30pO1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvdmVyaWZ5Jywge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KTtcblxuXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnc2VydmVyIG9rYXknKTtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHRcdHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0c2V0TmFtZShkYXRhLm5hbWUpO1xuXHRcdFx0XHRcdGxldCByb2xlID0gZGF0YS5yb2xlO1xuXHRcdFx0XHRcdHNldFJvbGUocm9sZSk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbm90IGF1dGhlbnRpY2F0ZWQnKTtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnc2VydmVyIG1pZ2h0IGJlIGRvd24nKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cblx0XHRcdH1cblx0XHR9O1xuXHRcdGluaXRpYWxpemVBdXRoKCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0F1dGhlbnRpY2F0ZWQsIGlzTG9hZGluZywgbmFtZSwgcm9sZSwgc2V0QXV0aCwgc2V0TmFtZSwgc2V0Um9sZSB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBBdXRoUHJvdmlkZXInKTtcblx0fVxuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzQXV0aGVudGljYXRlZCgpIHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUF1dGgoKTtcblx0cmV0dXJuIGNvbnRleHQuaXNBdXRoZW50aWNhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUF1dGgoKTtcblx0cmV0dXJuIGNvbnRleHQubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvbGUoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSB1c2VBdXRoKCk7XG5cdHJldHVybiBjb250ZXh0LnJvbGU7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==