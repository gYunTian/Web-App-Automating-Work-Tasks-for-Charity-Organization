webpackHotUpdate_N_E("pages/schedule_create",{

/***/ "./components/schedule/ScheduleForm.js":
/*!*********************************************!*\
  !*** ./components/schedule/ScheduleForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "/mnt/d/G1T3-frontend/client/components/schedule/ScheduleForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
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

function Form() {
  _s();

  var _this = this,
      _jsx;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
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

  function posttoreview(_x) {
    return _posttoreview.apply(this, arguments);
  }

  function _posttoreview() {
    _posttoreview = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var postres, postresult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'POST',
                // or 'PUT'
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
              });

            case 2:
              postres = _context.sent;
              _context.next = 5;
              return postres.json();

            case 5:
              postresult = _context.sent;
              return _context.abrupt("return", postresult);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _posttoreview.apply(this, arguments);
  }

  function handleSubmit(_x2) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault(); // prevent page reload everytime form submission is done

              console.log("InputFields", inputFields);
              _context2.next = 4;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputFields)
              });

            case 4:
              result = _context2.sent;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  ;

  var handleChangeInput = function handleChangeInput(index, event) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputFields);

    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  var handleAddFields = function handleAddFields() {
    setInputFields([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputFields), [// { firstName: '', 
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
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputFields);

    values.splice(index, 1);
    setInputFields(values);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 121,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 128,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 135,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 142,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 149,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 156,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 163,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    })));
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], (_jsx = {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit" // endIcon={<Icon>send</Icon>}
    ,
    onClick: handleSubmit
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "onClick", posttoreview), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 7
  }), _jsx), "Post")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsImNoYXJpdHlfY2hhcml0eUlEIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJwYXJlbnRfc2NoZWR1bGVJRCIsInZvbHVudGVlcl91c2VySUQiLCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEIiwiRm9vZF9CYXNrZXRJRCIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYXJkY29kZSIsInBvc3R0b3JldmlldyIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RyZXMiLCJqc29uIiwicG9zdHJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInZhbHVlcyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRGM7QUFE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Q0FEYTtBQUFBLEdBQWhCLENBREQsRUFpRUEsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRXJDLE9BQU8sQ0FBQ0YsTUFEckI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsUUFBSSxFQUFDLFFBSlAsQ0FLRTtBQUxGO0FBTUUsV0FBTyxFQUFFMkI7QUFOWCxnSEFPV1gsWUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpFQSxDQUZGLENBREY7QUFtRkQ7O0dBN0tRZixJO1VBR1NQLFM7OztLQUhUTyxJO0FBK0tNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zY2hlZHVsZV9jcmVhdGUuOTkyM2Q5M2YzZWY2OTEwYzc0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gICAgeyBkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICBbXG4gICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICB9XG4gICAgXX0sXG4gIF0pO1xuXG5cbiAgY29uc3QgaGFyZGNvZGUgPSB7IFxuICAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gICAgICAgIH1cbiAgICBdXG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0RmllbGRzKSxcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAvLyB9IGNhdGNoKGUpe1xuICAgIC8vICAgY29uc29sZS5sb2coZSlcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gICAgICAvLyB9LFxuICAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgICAgW1xuICAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICBdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5EZXRhaWxzLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwidm9sdW50ZWVyX3VzZXJJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVm9sdW50ZWVyIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnZvbHVudGVlcl91c2VySUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJCZW5lZmljaWFyeSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5iZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiRm9vZF9CYXNrZXRJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9vZCBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5Gb29kX0Jhc2tldElEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICBvbkNsaWNrPXtwb3N0dG9yZXZpZXd9XG4gICAgICA+UG9zdDwvQnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=