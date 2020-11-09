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
                e.preventDefault(); // prevent page reload everytime form submission is done

                console.log("InputFields", inputFields);
                _context.next = 4;
                return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(inputFields)
                });

              case 4:
                result = _context.sent;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 139,
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
        lineNumber: 146,
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
        lineNumber: 153,
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
        lineNumber: 160,
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
        lineNumber: 167,
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
        lineNumber: 174,
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
        lineNumber: 181,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
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
      lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJQb3N0dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dEZpZWxkcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwiQ29tcG9uZW50IiwiRm9ybSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImRhdGUiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsIkRldGFpbHMiLCJkZWxpdmVyU3RhdHVzIiwicGFyZW50X3NjaGVkdWxlSUQiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkcyIsImhhcmRjb2RlIiwicG9zdHRvcmV2aWV3IiwicG9zdHJlcyIsImpzb24iLCJwb3N0cmVzdWx0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJpbmRleCIsImV2ZW50IiwidmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwiaGFuZGxlUmVtb3ZlRmllbGRzIiwic3BsaWNlIiwibWFwIiwiaW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixL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Q0YsRUFtREUsTUFBQyxxRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1NLGtCQUFrQixDQUFDUCxLQUFELENBQXhCO0FBQUEsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FuREYsRUF3REUsTUFBQyxxRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1NLGVBQWUsRUFBckI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQXhERixDQURhO0FBQUEsR0FBaEIsQ0FERCxFQWlFQSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFekIsT0FBTyxDQUFDaEIsTUFEckI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsUUFBSSxFQUFDLFFBSlAsQ0FLRTtBQUNBO0FBTkY7QUFPRSxXQUFPLEVBQUU2QixZQUFZLENBQUNELFFBQUQsQ0FQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpFQSxDQUZGLENBREY7QUFtRkQ7O0dBN0tRYixJO1VBR1NyQixTOzs7S0FIVHFCLEk7QUErS01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS5jN2U0MWM1NTkxYmMyMTlmY2U0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cblxufSkpXG5cbmNsYXNzIFBvc3R0IGV4dGVuZHMgQ29tcG9uZW50e1xuICBhc3luYyBwb3N0RGF0YShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGlucHV0RmllbGRzKTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXRGaWVsZHMpLFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gICAgeyBkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICBbXG4gICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICB9XG4gICAgXX0sXG4gIF0pO1xuXG5cbiAgY29uc3QgaGFyZGNvZGUgPSB7IFxuICAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gICAgICAgIH1cbiAgICBdXG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0RmllbGRzKSxcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAvLyB9IGNhdGNoKGUpe1xuICAgIC8vICAgY29uc29sZS5sb2coZSlcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gICAgICAvLyB9LFxuICAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgICAgW1xuICAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICBdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5EZXRhaWxzLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwidm9sdW50ZWVyX3VzZXJJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVm9sdW50ZWVyIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnZvbHVudGVlcl91c2VySUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJCZW5lZmljaWFyeSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5iZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiRm9vZF9CYXNrZXRJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9vZCBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5Gb29kX0Jhc2tldElEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgLy8gb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICBvbkNsaWNrPXtwb3N0dG9yZXZpZXcoaGFyZGNvZGUpfVxuICAgICAgPlBvc3Q8L0J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9