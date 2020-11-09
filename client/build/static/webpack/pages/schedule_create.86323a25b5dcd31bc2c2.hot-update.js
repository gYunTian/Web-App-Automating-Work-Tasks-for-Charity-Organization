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
      setInputFields = _useState[1]; // const [inputFields, setInputFields] = useState([
  //   { date: '', 
  //     startTime: '' , charity_charityID:'', 
  //     deliverStatus: "NotCompleted", 
  //     parent_scheduleID: '', 
  //     volunteer_userID: '', 
  //     beneficiary_beneficiaryID: '',
  //     Food_BasketID: ""
  //   },
  // ]);


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
  }; // async function posttoreview(e) {
  //   const postres = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule",
  //     {
  //       method: 'POST', // or 'PUT'
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(e),
  //     }
  //   );
  //   const postresult = await postres.json();
  //   return postresult;
  // }

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
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
        lineNumber: 152,
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
        lineNumber: 159,
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
        lineNumber: 166,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "parent_scheduleID",
      label: "Schedule ID",
      variant: "filled",
      value: inputField.parent_scheduleID,
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
        lineNumber: 180,
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
        lineNumber: 187,
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
        lineNumber: 194,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }
    })));
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit" // endIcon={<Icon>send</Icon>}
    ,
    onClick: handleSubmit // onClick={()=> this.postData(hardcode)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "tGjkYdXj5vUDbQNEdCD3+u3H9KY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsImNoYXJpdHlfY2hhcml0eUlEIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJwYXJlbnRfc2NoZWR1bGVJRCIsInZvbHVudGVlcl91c2VySUQiLCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEIiwiRm9vZF9CYXNrZXRJRCIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYXJkY29kZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInZhbHVlcyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSiw4QkFBd0I7QUFDdEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURjO0FBRHBCLEtBRGlDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkYsWUFBTSxFQUFFRixLQUFL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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NoZWR1bGVfY3JlYXRlLjg2MzIzYTI1YjVkY2QzMWJjMmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuLy8gY2xhc3MgUG9zdHQgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgIGFzeW5jIHBvc3REYXRhKGUpIHtcbi8vICAgICB0cnl7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbi8vICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4vLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbi8vICAgICAgICAgfSk7XG4gICAgICBcbi8vICAgICB9IGNhdGNoKGUpe1xuLy8gICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgZGF0ZTogJycsIFxuICAgIHN0YXJ0VGltZTogJycgLCBcbiAgICBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gICAgRGV0YWlsczogXG4gICAgW1xuICAgICAge1xuICAgICAgICBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgIH1cbiAgICBdfSxcbiAgXSk7XG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG5cbiAgY29uc3QgaGFyZGNvZGUgPSB7IFxuICAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gICAgICAgIH1cbiAgICBdXG4gIH1cbiAgLy8gYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgLy8gICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgLy8gfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0RmllbGRzKSxcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAvLyB9IGNhdGNoKGUpe1xuICAgIC8vICAgY29uc29sZS5sb2coZSlcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gICAgICAvLyB9LFxuICAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgICAgW1xuICAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICBdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5wYXJlbnRfc2NoZWR1bGVJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cIkZvb2RfQmFza2V0SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZvb2QgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuRm9vZF9CYXNrZXRJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWVsZHMoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRmllbGRzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgLy8gZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgLy8gb25DbGljaz17KCk9PiB0aGlzLnBvc3REYXRhKGhhcmRjb2RlKX1cbiAgICAgID5Qb3N0PC9CdXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==