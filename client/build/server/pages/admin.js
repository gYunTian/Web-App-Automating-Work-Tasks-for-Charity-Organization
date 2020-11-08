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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IT5z");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5bMt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SubHeader({
  name,
  role
}) {
  return __jsx("div", {
    className: "max-w-7xl bg-gray-800 "
  }, __jsx("div", {
    className: "flex items-center h-10 mx-auto container"
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["AccountBox"], {
    className: "ml-auto",
    fontSize: "small",
    style: {
      color: 'white'
    }
  }), __jsx("span", {
    className: "text-l text-white float-right border-r-1 border-gray-400"
  }, __jsx("p", {
    className: "mr-2 ml-1"
  }, role == "" ? "Not set" : "Role: " + role), ' '), __jsx("span", {
    className: "ml-2 text-l text-white float-right cursor-pointer"
  }, ' ', __jsx("p", {
    className: ""
  }, "Welcome back, ", name), ' '), __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["FiberManualRecord"], {
    className: "animate-pulse ml-1 mr-8 py-1",
    fontSize: "small",
    style: {
      color: '#4bffc4'
    }
  })));
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "IT5z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "fetchUserData", function() { return /* binding */ fetchUserData; });
__webpack_require__.d(__webpack_exports__, "fetchRestockData", function() { return /* binding */ fetchRestockData; });
__webpack_require__.d(__webpack_exports__, "fetchRequestData", function() { return /* binding */ fetchRequestData; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// CONCATENATED MODULE: ./components/Admin/User.js
var __jsx = external_react_default.a.createElement;


function User({
  data
}) {
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])({});
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const editType = async e => {
    console.log("Sending");
    const url = "https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/User('" + e.target.id + "')";
    const payLoad = {};
    const id = e.target.id;
    const value = options[e.target.id];
    let op = options;
    op[id] = value;
    payLoad["userType"] = value; // console.log(payLoad);

    let requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payLoad)
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (response.ok) {
        setOptions(op);
        setShow(true);
        setError(false);
        setStatus("Edit complete");
        console.log("success");
      } else {
        console.log("some problem"); // console.log(data.error.message);

        setShow(false);
        setError(true);
        setStatus("Problem editing user!");
      }
    } catch (error) {
      console.log("error");
      setShow(false);
      setError(true);
      setStatus("Problem reaching server!");
    }

    console.log("Out");
  };

  const pushOptions = e => {
    let key = e.target.id;
    let value = e.target.value;
    options[key] = value;
    console.log(options);
  };

  const close = () => {
    setError(false);
    setShow(false);
  };

  const GreenAlert = () => {
    return __jsx("div", {
      className: "w-2/4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4  mx-auto",
      role: "alert"
    }, __jsx("span", {
      className: "block sm:inline"
    }, " ", status, "  "), __jsx("span", {
      className: "absolute top-0 bottom-0 right-0 px-4 py-3",
      onClick: close
    }, __jsx("svg", {
      className: "fill-current h-6 w-6 text-green-500",
      role: "button",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, __jsx("title", null, "Close"), __jsx("path", {
      d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
    }))));
  };

  const RedAlert = () => {
    return __jsx("div", {
      className: "w-2/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 mx-auto",
      role: "alert"
    }, __jsx("span", {
      className: "block sm:inline"
    }, status), __jsx("span", {
      className: "absolute top-0 bottom-0 right-0 px-4 py-3",
      onClick: close
    }, __jsx("svg", {
      className: "fill-current h-6 w-6 text-red-500",
      role: "button",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, __jsx("title", null, "Close"), __jsx("path", {
      d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
    }))));
  };

  return __jsx("div", null, show ? __jsx(GreenAlert, null) : null, error ? __jsx(RedAlert, null) : null, __jsx("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Name"), __jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Email"), __jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "UserType"), __jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Edit Type"), __jsx("th", {
    className: "px-6 py-3 bg-gray-50"
  }))), __jsx("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, data.map((row, i) => (options[row.userID] = row.userType, __jsx("tr", {
    key: i,
    className: "flex lg:table-row flex-wrap"
  }, __jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, __jsx("div", {
    className: "text-sm leading-5 text-gray-900"
  }, row.name)), __jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
  }, __jsx("p", null, row.email ? row.email : "None")), __jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, options[row.userID] == null ? __jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800"
  }, "None") : options[row.userID] == "volunteer" ? __jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800"
  }, options[row.userID]) : options[row.userID] == "Admin" ? __jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-blue-800"
  }, options[row.userID]) : __jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800"
  }, options[row.userID])), __jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
  }, __jsx("select", {
    name: "types",
    id: row.userID,
    className: "float-left",
    onChange: pushOptions
  }, __jsx("option", {
    value: true,
    "data-isdefault": "true"
  }, "--Edit--"), __jsx("option", {
    value: "volunteer"
  }, "Volunteer"), __jsx("option", {
    value: "admin"
  }, "Admin"), __jsx("option", {
    value: "msf"
  }, "MSF"), __jsx("option", {
    value: "none"
  }, "None"))), __jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
  }, __jsx("button", {
    className: "text-indigo-600 hover:text-indigo-900",
    id: row.userID,
    onClick: editType
  }, "Save"))))))));
}
// CONCATENATED MODULE: ./components/Admin/Restock.js

var Restock_jsx = external_react_default.a.createElement;
function Restock({
  data
}) {
  return Restock_jsx("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, Restock_jsx("thead", null, Restock_jsx("tr", null, Restock_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Beneficiary ID"), Restock_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Status"), Restock_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Others"), Restock_jsx("th", {
    className: "px-6 py-3 bg-gray-50"
  }))), Restock_jsx("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, data.map((row, i) => Restock_jsx("tr", {
    key: i
  }, Restock_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, Restock_jsx("div", {
    className: "text-sm leading-5 text-gray-900"
  }, row.beneficiaryID_beneficiaryID)), Restock_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
  }, Restock_jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800"
  }, "To " + row.status), Restock_jsx("div", {
    className: "text-sm leading-5 text-gray-500 pt-1"
  }, "Not started")), Restock_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, Restock_jsx("p", null, row.other != "null" ? row.other : "None")), Restock_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
  }, Restock_jsx("button", {
    className: "text-indigo-600 hover:text-indigo-900"
  }, "Edit"))))));
}
// CONCATENATED MODULE: ./components/Admin/DataReq.js

var DataReq_jsx = external_react_default.a.createElement;
function DataReq({
  data
}) {
  return DataReq_jsx("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, DataReq_jsx("thead", null, DataReq_jsx("tr", null, DataReq_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Beneficiary ID"), DataReq_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Status"), DataReq_jsx("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
  }, "Others"), DataReq_jsx("th", {
    className: "px-6 py-3 bg-gray-50"
  }))), DataReq_jsx("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, data.map((row, i) => DataReq_jsx("tr", {
    key: i
  }, DataReq_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, DataReq_jsx("div", {
    className: "text-sm leading-5 text-gray-900"
  }, row.beneficiaryID_beneficiaryID)), DataReq_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
  }, DataReq_jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-blue-800"
  }, "To " + row.status)), DataReq_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap"
  }, DataReq_jsx("p", null, row.other != "null" ? row.other : "None")), DataReq_jsx("td", {
    className: "px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
  }, DataReq_jsx("button", {
    className: "text-indigo-600 hover:text-indigo-900"
  }, "Edit"))))));
}
// CONCATENATED MODULE: ./components/Admin/Side.js
var Side_jsx = external_react_default.a.createElement;




function Side({
  userData,
  restockData,
  requestData
}) {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(null);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);

  const showData = () => {
    setShow("data");
  };

  const showRes = () => {
    setShow("restock");
  };

  const showUser = () => {
    setShow("user");
  };

  return Side_jsx("div", {
    className: "flex flex-wrap"
  }, Side_jsx("ul", {
    className: "border-1 rounded-lg w-auto"
  }, Side_jsx("li", {
    className: "my-px"
  }, Side_jsx("span", {
    className: "flex font-medium text-sm text-gray-800 px-4 my-4 uppercase justify-center"
  }, "Selection")), Side_jsx("li", {
    className: "my-px"
  }, Side_jsx("a", {
    href: "#",
    className: "flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-400 ",
    onClick: showData
  }, Side_jsx("span", {
    className: "flex items-center justify-center text-lg text-gray-400"
  }, Side_jsx("svg", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, Side_jsx("path", {
    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  }))), Side_jsx("span", {
    className: "ml-3 mr-2"
  }, "Data Requests"), Side_jsx("span", {
    className: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
  }, requestData.length > 0 ? requestData.length : 0))), Side_jsx("li", {
    className: "my-px"
  }, Side_jsx("a", {
    href: "#",
    className: "flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-400",
    onClick: showRes
  }, Side_jsx("span", {
    className: "flex items-center justify-center text-lg text-gray-400"
  }, Side_jsx("svg", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, Side_jsx("path", {
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  }))), Side_jsx("span", {
    className: "ml-3 mr-2"
  }, "Restock Requests"), Side_jsx("span", {
    className: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
  }, restockData.length > 0 ? restockData.length : 0))), Side_jsx("li", {
    className: "my-px"
  }, Side_jsx("a", {
    href: "#",
    className: "flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-400",
    onClick: showUser
  }, Side_jsx("span", {
    className: "flex items-center justify-center text-lg text-gray-400"
  }, Side_jsx("svg", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, Side_jsx("path", {
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }))), Side_jsx("span", {
    className: "ml-3 mr-2"
  }, "User Accounts"), Side_jsx("span", {
    className: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
  }, userData.length > 0 ? userData.length : 0)))), Side_jsx("div", {
    className: "ml-2 flex-grow border-1 rounded-lg w-3/4"
  }, Side_jsx("p", {
    className: "w-full text-center py-6 text-black font-bold text-lg"
  }, show == null ? "Select an option to display" : Side_jsx(external_react_default.a.Fragment, null), show == "user" ? "User Details" : Side_jsx(external_react_default.a.Fragment, null), show == "restock" ? "Restock Requests" : Side_jsx(external_react_default.a.Fragment, null), show == "data" ? "Data Requests" : Side_jsx(external_react_default.a.Fragment, null)), show == "user" ? Side_jsx(User, {
    data: userData
  }) : Side_jsx(external_react_default.a.Fragment, null), show == "restock" ? Side_jsx(Restock, {
    data: restockData
  }) : Side_jsx(external_react_default.a.Fragment, null), show == "data" ? Side_jsx(DataReq, {
    data: requestData
  }) : Side_jsx(external_react_default.a.Fragment, null)));
}
// EXTERNAL MODULE: ./components/front/Footer.js
var Footer = __webpack_require__("keR6");

// EXTERNAL MODULE: ./components/homepage/header/Header.js + 1 modules
var Header = __webpack_require__("YSbm");

// EXTERNAL MODULE: ./components/homepage/header/SubHeader.js
var SubHeader = __webpack_require__("5bMt");

// EXTERNAL MODULE: ./hocs/withAuth.js + 1 modules
var withAuth = __webpack_require__("krZT");

// EXTERNAL MODULE: ./providers/Auth.js
var Auth = __webpack_require__("tXIn");

// CONCATENATED MODULE: ./pages/admin.js

var admin_jsx = external_react_default.a.createElement;
//https://github.com/SAPConversationalAI/Webchat





 // use back with auth

/* harmony default export */ var admin = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(function Admin({
  userData,
  restockData,
  requestData
}) {
  const isAuthenticated = Object(Auth["e" /* useIsAuthenticated */])();
  const name = Object(Auth["b" /* getName */])();
  const role = Object(Auth["c" /* getRole */])();
  return admin_jsx("div", {
    className: "flex flex-col h-screen"
  }, admin_jsx(Header["a" /* default */], {
    name: name,
    role: role
  }), admin_jsx(SubHeader["a" /* default */], {
    name: name,
    role: role
  }), admin_jsx("div", {
    className: "antialiased bg-gray-200 flex-grow"
  }, admin_jsx("div", {
    className: "container mx-auto px-4 sm:px-8 mt-18"
  }, admin_jsx("div", {
    className: "py-8 flex-grow flex-col flex justify-center bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4"
  }, admin_jsx(Side, {
    userData: userData,
    restockData: restockData,
    requestData: requestData
  })))), admin_jsx(Footer["a" /* default */], null));
}));
async function getStaticProps() {
  let userData = await fetchUserData();
  let restockData = await fetchRestockData();
  let requestData = await fetchRequestData();
  return {
    props: {
      userData,
      restockData,
      requestData
    },
    revalidate: 3600
  };
}
async function fetchUserData() {
  try {
    const response = await fetch("https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/User");
    var data = await response.json();
    data = data.value;
  } catch (error) {
    let data = {};
    console.log("Error fetching odata");
  }

  return data;
}
async function fetchRestockData() {
  try {
    const response = await fetch("https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/ToReview?$filter=contains(status,%27restock%27)");
    var data = await response.json();
    data = data.value;
  } catch (error) {
    let data = {};
    console.log("Error fetching odata");
  }

  return data;
}
async function fetchRequestData() {
  try {
    const response = await fetch("https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/ToReview?$filter=contains(status,%27request%27)");
    var data = await response.json();
    data = data.value;
  } catch (error) {
    let data = {};
    console.log("Error fetching odata");
  }

  return data;
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RO1L":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdown": "DropDownMenu_dropdown__3g9Un"
};


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YSbm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/homepage/header/DropDownMenu.module.css
var DropDownMenu_module = __webpack_require__("RO1L");
var DropDownMenu_module_default = /*#__PURE__*/__webpack_require__.n(DropDownMenu_module);

// CONCATENATED MODULE: ./components/homepage/header/DropDownMenu.js
var __jsx = external_react_default.a.createElement;



function DropDownMenu(props) {
  const DropDownItem = props => {
    return __jsx("a", {
      className: "flex px-8 py-2 justify-left w-auto hover:bg-gray-800 hover:text-white text-black text-lg"
    }, __jsx("span", null, props.icon), props.children);
  };

  return __jsx("div", {
    className: external_classnames_default()(DropDownMenu_module_default.a.dropdown, 'bg-white py-2 border-2 rounded-lg z-10')
  }, props.data.map((value, i) => {
    return __jsx(DropDownItem, {
      key: i
    }, value);
  }));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/homepage/header/Header.js

var Header_jsx = external_react_default.a.createElement;





function Header({
  name,
  role
}) {
  const {
    0: openMenu,
    1: setopenMenu
  } = Object(external_react_["useState"])(false);

  const setOpen = () => {
    setopenMenu(!openMenu);
  };

  const onLogout = async () => {
    // let url = 'https://g1t3-node-auth-srv.cfapps.us10.hana.ondemand.com/api/auth/clear';
    // let url = 'http://localhost:5000/api/auth/clear';
    let url = '/api/auth/clear';
    console.log("attempting to logout");
    const response = await fetch(url, {
      credentials: 'include'
    });
    router_default.a.push('/front');
  };

  return Header_jsx("div", {
    className: "bg-white"
  }, Header_jsx("div", {
    className: "container mx-auto"
  }, Header_jsx("nav", {
    className: "flex items-center p-3 flex-wrap"
  }, Header_jsx("span", {
    className: "flex flex-row content-center border-r-1 border-gray-400"
  }, Header_jsx("img", {
    src: "images/logo2.png",
    className: "h-6 block mx-2",
    alt: "logo"
  })), Header_jsx("span", {
    className: "mt-1 mx-2 flex flex-row text-l text-black font-bold tracking-wide"
  }, " EBS G1T3 "), Header_jsx("div", {
    className: "ml-auto"
  }, Header_jsx("button", {
    type: "button",
    onClick: () => setOpen,
    className: "text-black font-bold font-size text-l items-center justify-center inline-flex px-3 py-2 rounded lg:hidden ml-auto outline-none nav-toggler mr-2 hover:bg-gray-900 hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150",
    id: "options-menu",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, Header_jsx("i", {
    className: ""
  }, "Menu")), openMenu && Header_jsx(DropDownMenu, {
    tabIndex: "0",
    data: ['Home', 'Analytics', 'Plan Schedule', 'Diet', 'Import Data', 'List']
  })), Header_jsx("div", {
    className: "hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto",
    id: "navigation"
  }, Header_jsx("div", {
    className: "lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mx-auto"
  }, Header_jsx(link_default.a, {
    href: "/home"
  }, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["Home"], {
    className: "py-1"
  }), Header_jsx("span", null, "Home"))), Header_jsx(link_default.a, {
    href: "/analytic"
  }, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["BarChart"], {
    className: "py-1"
  }), Header_jsx("span", null, "Analytics"))), Header_jsx(link_default.a, {
    href: "/schedule"
  }, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["ListAlt"], {
    className: "py-1"
  }), Header_jsx("span", null, "Plan Schedule"))), Header_jsx(link_default.a, {
    href: "/diet"
  }, Header_jsx("a", {
    href: "/diet",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["Fastfood"], {
    className: "py-1"
  }), Header_jsx("span", null, "Diet"))), Header_jsx(link_default.a, {
    href: "/import"
  }, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["ImportExport"], {
    className: "py-1"
  }), Header_jsx("span", null, "Import Data"))), Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["List"], {
    className: "py-1"
  }), Header_jsx("span", null, "List")), role == "admin" && Header_jsx(link_default.a, {
    href: "/admin"
  }, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white"
  }, Header_jsx(icons_["SupervisorAccount"], {
    className: "py-1"
  }), Header_jsx("span", null, "Admin"))))), Header_jsx("div", null, Header_jsx("a", {
    href: "#",
    className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white",
    onClick: onLogout
  }, Header_jsx(icons_["ArrowForward"], {
    className: "py-1"
  }), Header_jsx("span", {
    className: ""
  }, " Logout "))))));
} // class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             openMenu: false,
//             role: this.props['role']
//         }
//         this.onBlur = this.onBlur.bind(this);
//         this.onLogout = this.onLogout.bind(this);
//         console.log(this.props);
//         console.log(this);
//     }
//     onBlur = () => {
//         this.setState({
//             openMenu: false
//         });
//         console.log(this.state.openMenu);
//     }
//     onLogout = async () => {
//         // let url = 'https://g1t3-node-auth-srv.cfapps.us10.hana.ondemand.com/api/auth/clear';
//         let url = 'http://localhost:5000/api/auth/clear';
//         console.log("attempting to logout");
//         const response = await fetch(url, {credentials: 'include'});
//         Router.push('/front');
//     }
//     render () {
//         return (    
//             <div className="bg-white">
//             <div className="container mx-auto">
//             <nav className="flex items-center p-3 flex-wrap">
//                 <span className="flex flex-row content-center border-r-1 border-gray-400">
//                 <img
//                     src="images/logo2.png"
//                     className="h-6 block mx-2"
//                     alt="logo"
//                 />
//                 </span>
//                 <span className="mt-1 mx-2 flex flex-row text-l text-black font-bold tracking-wide"> EBS G1T3 </span>
//                 <div className="ml-auto">
//                 <button type="button"  onClick={() => this.setState({openMenu: !this.state.openMenu})}
//                 className="text-black font-bold font-size text-l items-center justify-center inline-flex px-3 py-2 rounded lg:hidden ml-auto outline-none nav-toggler mr-2 hover:bg-gray-900 hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
//                     <i className="">Menu</i>
//                 </button>
//                 {this.state.openMenu && <DropDownMenu tabIndex="0" onBlur={ this.onBlur } data={['Home', 'Analytics', 'Plan Schedule', 'Diet', 'Import Data', 'List']}/>}
//                 </div>
//                 <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">    
//                     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mx-auto" >
//                         <Link href="/home">
//                         <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white">
//                             <Home className="py-1" /><span>Home</span>
//                         </a>
//                         </Link>
//                         <Link href="/analytic">
//                         <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                             <BarChart className="py-1" /><span>Analytics</span>
//                         </a>
//                         </Link>
//                         <Link href="/schedule">
//                         <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                             <ListAlt className="py-1" /><span>Plan Schedule</span>
//                         </a>
//                         </Link>
//                         <Link href="/diet">
//                         <a href="/diet" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                             <Fastfood className="py-1" /><span>Diet</span>
//                         </a>
//                         </Link>
//                         <Link href="/import">
//                         <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                             <ImportExport className="py-1" /><span>Import Data</span>
//                         </a>
//                         </Link>
//                         <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                             <List className="py-1"/><span>List</span>
//                         </a>
//                         { this.role == "admin" &&
//                             <Link href="/admin">
//                             <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" >
//                                 <SupervisorAccount className="py-1"/><span>Admin</span>
//                             </a>
//                             </Link>
//                         }
//                     </div>
//                 </div>
//                 <div>
//                     <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold font-size text-l items-center justify-center hover:bg-gray-900 hover:text-white" 
//                     onClick={this.onLogout}
//                     >
//                         <ArrowForward className="py-1"/><span className=""> Logout </span>
//                     </a>
//                 </div>
//             </nav>
//             </div>
//             </div>
//             // {/* <div classNameName="logo" ><a href="#" classNameName="logo-text"> TESTVV </a></div> */}
//             // {/* <NavContainer /> */}
//         );
//     }
// }
// export default Header;

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "keR6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "flex justify-center border-t-2 z-100 bottom-0 inset-x-0"
    }, __jsx("p", {
      className: "text-center text-gray-500 text-xs mt-2 h-10"
    }, "2020 SMU EBS G1T3."));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "krZT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withAuth; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./providers/Auth.js
var Auth = __webpack_require__("tXIn");

// CONCATENATED MODULE: ./hocs/withAuthRedirect.js

var __jsx = external_react_default.a.createElement;

 // components rendering twice is because of strict mode

function DefaultLoadingFallback() {
  return __jsx("p", null, "Loading...");
}

function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location
}) {
  const WithAuthRedirectWrapper = props => {
    const router = Object(router_["useRouter"])();
    const {
      isLoading,
      isAuthenticated
    } = Object(Auth["d" /* useAuth */])();

    if (isLoading) {
      return __jsx(LoadingComponent, null);
    }

    if (false) {}

    return __jsx(WrappedComponent, props);
  };

  return WithAuthRedirectWrapper;
}
// CONCATENATED MODULE: ./hocs/withAuth.js
 // redirect to href if not authenticated

function withAuth(WrappedComponent, location = "/front") {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: true
  });
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "tXIn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRole; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });