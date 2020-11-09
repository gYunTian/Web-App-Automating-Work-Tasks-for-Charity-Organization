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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");




var _jsxFileName = "/mnt/d/G1T3-frontend/client/components/schedule/ScheduleForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
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
}); // class Postt extends Component{
//   async postData(e) {
//     try{
//       e.preventDefault();
//     // prevent page reload everytime form submission is done
//       let result = await fetch( "https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json' },
//           body: JSON.stringify(e)
//         });
//     } catch(e){
//       console.log(e)
//     }
//   }
// }

function Form() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
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
    _posttoreview = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
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
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
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
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields);

    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  var handleAddFields = function handleAddFields() {
    setInputFields([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields), [// { firstName: '', 
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
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields);

    values.splice(index, 1);
    setInputFields(values);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    })));
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit" // endIcon={<Icon>send</Icon>}
    // onClick={handleSubmit}
    // onClick={()=> this.postData(hardcode)}
    ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsImNoYXJpdHlfY2hhcml0eUlEIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJwYXJlbnRfc2NoZWR1bGVJRCIsInZvbHVudGVlcl91c2VySUQiLCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEIiwiRm9vZF9CYXNrZXRJRCIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYXJkY29kZSIsInBvc3R0b3JldmlldyIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RyZXMiLCJqc29uIiwicG9zdHJlc3VsdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInZhbHVlcyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSiw4QkFBd0I7QUFDdEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURjO0FBRHBC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QUE7QUFBQTtBQUFBLE9BR0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0F4REYsQ0FEYTtBQUFBLEdBQWhCLENBREQsRUFpRUEsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRXJDLE9BQU8sQ0FBQ0YsTUFEckI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsUUFBSSxFQUFDLFFBSlAsQ0FLRTtBQUNBO0FBQ0E7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakVBLENBRkYsQ0FERjtBQW1GRDs7R0E3S1FDLEk7VUFHU1AsUzs7O0tBSFRPLEk7QUErS01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS5lMDAzMGYwYmZhOTExNmFhN2FlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cblxufSkpXG5cbi8vIGNsYXNzIFBvc3R0IGV4dGVuZHMgQ29tcG9uZW50e1xuLy8gICBhc3luYyBwb3N0RGF0YShlKSB7XG4vLyAgICAgdHJ5e1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4vLyAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuLy8gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpXG4vLyAgICAgICAgIH0pO1xuICAgICAgXG4vLyAgICAgfSBjYXRjaChlKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGRhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgIFtcbiAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgIH1cbiAgICBdfSxcbiAgXSk7XG5cblxuICBjb25zdCBoYXJkY29kZSA9IHsgXG4gICAgXCJkYXRlXCIgOiBcIjIwMjAtMTEtMDhcIixcbiAgICBcInN0YXJ0VGltZVwiOiBcIjk6MDAgQU1cIixcbiAgICBcImNoYXJpdHlfY2hhcml0eUlEXCIgOiBcImNoYXJpdHkwMDFcIixcbiAgICBcIkRldGFpbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImRlbGl2ZXJTdGF0dXNcIjogXCJOb3RDb21wbGV0ZWRcIixcbiAgICAgICAgICAgIFwicGFyZW50X3NjaGVkdWxlSURcIjogXCJuZXd0ZXN0XCIsXG4gICAgICAgICAgICBcInZvbHVudGVlcl91c2VySURcIiA6IFwidXNlcjAwMVwiLFxuICAgICAgICAgICAgXCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCIgOiBcImJlbmUwMDFcIixcbiAgICAgICAgICAgIFwiRm9vZF9CYXNrZXRJRFwiOiBcIjAxXCJcbiAgICAgICAgfVxuICAgIF1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBwb3N0dG9yZXZpZXcoZSkge1xuICAgIGNvbnN0IHBvc3RyZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcG9zdHJlc3VsdCA9IGF3YWl0IHBvc3RyZXMuanNvbigpO1xuICAgIHJldHVybiBwb3N0cmVzdWx0O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGlucHV0RmllbGRzKTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXRGaWVsZHMpLFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpbmRleCwgZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlc1tpbmRleF1bZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgICAgIC8vIH0sXG4gICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gICAgICBbXG4gICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAgICAgICB9XG4gICAgICBdfVxuICAgIF0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lID0ge2NsYXNzZXMucm9vdH0+XG4gICAgICB7aW5wdXRGaWVsZHMubWFwKChpbnB1dEZpZWxkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5kYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJpdHlfY2hhcml0eUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGFyaXR5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmNoYXJpdHlfY2hhcml0eUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwicGFyZW50X3NjaGVkdWxlSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNjaGVkdWxlIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLkRldGFpbHMucGFyZW50X3NjaGVkdWxlSUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJ2b2x1bnRlZXJfdXNlcklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWb2x1bnRlZXIgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQudm9sdW50ZWVyX3VzZXJJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkJlbmVmaWNpYXJ5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJGb29kX0Jhc2tldElEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGb29kIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLkZvb2RfQmFza2V0SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEZpZWxkcygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgIC8vIGVuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8vIG9uQ2xpY2s9eygpPT4gdGhpcy5wb3N0RGF0YShoYXJkY29kZSl9XG4gICAgICA+UG9zdDwvQnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=