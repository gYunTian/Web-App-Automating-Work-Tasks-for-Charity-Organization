webpackHotUpdate_N_E("pages/schedule_create",{

/***/ "./components/schedule/ScheduleForm.js":
/*!*********************************************!*\
  !*** ./components/schedule/ScheduleForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");









var _jsxFileName = "/mnt/d/G1T3-frontend/client/components/schedule/ScheduleForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["makeStyles"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    },
    button: {
      margin: theme.spacing(1)
    }
  };
});

var Postt = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Postt, _Component);

  var _super = _createSuper(Postt);

  function Postt() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Postt);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Postt, [{
    key: "postData",
    value: function () {
      var _postData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(e)
                });

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function postData(_x) {
        return _postData.apply(this, arguments);
      }

      return postData;
    }()
  }]);

  return Postt;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

function Form() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([{
    date: '',
    startTime: '',
    charity_charityID: '',
    Details: [{
      deliverStatus: "NotCompleted",
      parent_scheduleID: '',
      volunteer_userID: '',
      beneficiary_beneficiaryID: '',
      Food_BasketID: ""
    }]
  }]),
      inputFields = _useState[0],
      setInputFields = _useState[1];

  var hardcode = {
    "date": "2020-11-08",
    "startTime": "9:00 AM",
    "charity_charityID": "charity001",
    "Details": [{
      "deliverStatus": "NotCompleted",
      "parent_scheduleID": "newtest",
      "volunteer_userID": "user001",
      "beneficiary_beneficiaryID": "bene001",
      "Food_BasketID": "01"
    }]
  };

  function posttoreview(_x2) {
    return _posttoreview.apply(this, arguments);
  }

  function _posttoreview() {
    _posttoreview = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var postres, postresult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'POST',
                // or 'PUT'
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
              });

            case 2:
              postres = _context2.sent;
              _context2.next = 5;
              return postres.json();

            case 5:
              postresult = _context2.sent;
              return _context2.abrupt("return", postresult);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _posttoreview.apply(this, arguments);
  }

  function handleSubmit(_x3) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(e) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault(); // prevent page reload everytime form submission is done

              console.log("InputFields", inputFields);
              _context3.next = 4;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputFields)
              });

            case 4:
              result = _context3.sent;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  ;

  var handleChangeInput = function handleChangeInput(index, event) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields);

    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  var handleAddFields = function handleAddFields() {
    setInputFields([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields), [// { firstName: '', 
    // lastName: '', 
    // volunteer_userID: '', 
    // beneficiary_beneficiaryID:'' 
    // },
    {
      date: '',
      startTime: '',
      charity_charityID: '',
      Details: [{
        deliverStatus: "NotCompleted",
        parent_scheduleID: '',
        volunteer_userID: '',
        beneficiary_beneficiaryID: '',
        Food_BasketID: ""
      }]
    }]));
  };

  var handleRemoveFields = function handleRemoveFields(index) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields);

    values.splice(index, 1);
    setInputFields(values);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "date",
      label: "Date",
      variant: "filled",
      value: inputField.date,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "startTime",
      label: "Start Time",
      variant: "filled",
      value: inputField.startTime,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "charity_charityID",
      label: "Charity ID",
      variant: "filled",
      value: inputField.charity_charityID,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "parent_scheduleID",
      label: "Schedule ID",
      variant: "filled",
      value: inputField.Details.parent_scheduleID,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "volunteer_userID",
      label: "Volunteer ID",
      variant: "filled",
      value: inputField.volunteer_userID,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "beneficiary_beneficiaryID",
      label: "Beneficiary ID",
      variant: "filled",
      value: inputField.beneficiary_beneficiaryID,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "Food_BasketID",
      label: "Food ID",
      variant: "filled",
      value: inputField.Food_BasketID,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    })));
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit" // endIcon={<Icon>send</Icon>}
    // onClick={handleSubmit}
    ,
    onClick: posttoreview(hardcode),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "2h6/hK66LFsecsiMvTg3SzZQysU=", false, function () {
  return [useStyles];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJQb3N0dCIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsImNoYXJpdHlfY2hhcml0eUlEIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJwYXJlbnRfc2NoZWR1bGVJRCIsInZvbHVudGVlcl91c2VySUQiLCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEIiwiRm9vZF9CYXNrZXRJRCIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYXJkY29kZSIsInBvc3R0b3JldmlldyIsInBvc3RyZXMiLCJqc29uIiwicG9zdHJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJpbmRleCIsImV2ZW50IiwidmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwiaGFuZGxlUmVtb3ZlRmllbGRzIiwic3BsaWNlIiwibWFwIiwiaW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixL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QWtCLENBQUNQLEtBQUQsQ0FBeEI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQW5ERixFQXdERSxNQUFDLHFFQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTU0sZUFBZSxFQUFyQjtBQUFBLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBeERGLENBRGE7QUFBQSxHQUFoQixDQURELEVBaUVBLE1BQUMsaUVBQUQ7QUFDRSxhQUFTLEVBQUUzQixPQUFPLENBQUNkLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFFBQUksRUFBQyxRQUpQLENBS0U7QUFDQTtBQU5GO0FBT0UsV0FBTyxFQUFFNEIsWUFBWSxDQUFDRCxRQUFELENBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRUEsQ0FGRixDQURGO0FBbUZEOztHQTdLUWQsSTtVQUdTbkIsUzs7O0tBSFRtQixJO0FBK0tNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zY2hlZHVsZV9jcmVhdGUuZGU3MjkwODE2M2RlOTFhYzk1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG5cbn0pKVxuXG5jbGFzcyBQb3N0dCBleHRlbmRzIENvbXBvbmVudHtcbiAgYXN5bmMgcG9zdERhdGEoZSkge1xuICAgIHRyeXtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gICAgW1xuICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAgICAgfVxuICAgIF19LFxuICBdKTtcblxuXG4gIGNvbnN0IGhhcmRjb2RlID0geyBcbiAgICBcImRhdGVcIiA6IFwiMjAyMC0xMS0wOFwiLFxuICAgIFwic3RhcnRUaW1lXCI6IFwiOTowMCBBTVwiLFxuICAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAgIFwiRGV0YWlsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAgICAgICB9XG4gICAgXVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3R0b3JldmlldyhlKSB7XG4gICAgY29uc3QgcG9zdHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJ1xuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBwb3N0cmVzdWx0ID0gYXdhaXQgcG9zdHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHBvc3RyZXN1bHQ7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dEZpZWxkcyksXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgLy8gfSBjYXRjaChlKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGluZGV4LCBldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzW2luZGV4XVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAgICAgLy8gfSxcbiAgICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICAgIFtcbiAgICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgXSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyAgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5yb290fT5cbiAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGlucHV0RmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmRhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGFydFRpbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IFRpbWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuc3RhcnRUaW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiY2hhcml0eV9jaGFyaXR5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkNoYXJpdHkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuY2hhcml0eV9jaGFyaXR5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfc2NoZWR1bGVJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2NoZWR1bGUgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuRGV0YWlscy5wYXJlbnRfc2NoZWR1bGVJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cIkZvb2RfQmFza2V0SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZvb2QgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuRm9vZF9CYXNrZXRJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWVsZHMoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRmllbGRzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgLy8gZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgb25DbGljaz17cG9zdHRvcmV2aWV3KGhhcmRjb2RlKX1cbiAgICAgID5Qb3N0PC9CdXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==