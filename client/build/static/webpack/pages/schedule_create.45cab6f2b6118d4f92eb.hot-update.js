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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsdate = _useState[0],
      setInputFieldsdate = _useState[1]; // const [inputFieldsStartTime, setInputFieldsStartTime] = useState([
  //   const [inputFields, setInputFields] = useState([
  //     const [inputFields, setInputFields] = useState([
  //       const [inputFields, setInputFields] = useState([
  //         const [inputFields, setInputFields] = useState([
  //           const [inputFields, setInputFields] = useState([
  //             const [inputFields, setInputFields] = useState([


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    "date": '',
    startTime: '',
    charity_charityID: '',
    parent_scheduleID: '',
    deliverStatus: "NotCompleted",
    volunteer_userID: '',
    beneficiary_beneficiaryID: '',
    Food_BasketID: ''
  }]),
      inputFields = _useState2[0],
      setInputFields = _useState2[1]; // const [inputFields, setInputFields] = useState([
  //   { date: '', 
  //     startTime: '' , charity_charityID:'', 
  //     deliverStatus: "NotCompleted", 
  //     parent_scheduleID: '', 
  //     volunteer_userID: '', 
  //     beneficiary_beneficiaryID: '',
  //     Food_BasketID: ""
  //   },
  // ]);
  // const hardcode = { 
  //   "date" : "2020-11-08",
  //   "startTime": "9:00 AM",
  //   "charity_charityID" : "charity001",
  //   "Details": [
  //       {
  //           "deliverStatus": "NotCompleted",
  //           "parent_scheduleID": "newtest",
  //           "volunteer_userID" : "user001",
  //           "beneficiary_beneficiaryID" : "bene001",
  //           "Food_BasketID": "01"
  //       }
  //   ]
  // }
  // async function posttoreview(e) {
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
              console.log("tst", inputFields.date);
              _context.next = 5;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputFields)
              });

            case 5:
              result = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  ;

  var handleChangeInput = function handleChangeInput(e, index, event) {
    // const values = [...inputFields];
    // values[index][event.target.name] = event.target.value;
    // setInputFields(values);
    if (e.target.id == 'date') setInputFieldsdate(event.target.value);
    console.log(inputFieldsdate);
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
  }; // const handleAddFields = () => {
  //   setInputFields([...inputFields, 
  //     // { firstName: '', 
  //     // lastName: '', 
  //     // volunteer_userID: '', 
  //     // beneficiary_beneficiaryID:'' 
  //     // },
  //     {date: '', startTime: '' , charity_charityID:'', Details: 
  //     [
  //       {deliverStatus: "NotCompleted", 
  //       parent_scheduleID: '', 
  //       volunteer_userID: '', 
  //       beneficiary_beneficiaryID: '',
  //       Food_BasketID: ""
  //       }
  //     ]}
  //   ])
  // }


  var handleRemoveFields = function handleRemoveFields(index) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields);

    values.splice(index, 1);
    setInputFields(values);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"] // key = {index}
    , {
      id: "date",
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
        lineNumber: 179,
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
        lineNumber: 188,
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
        lineNumber: 195,
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
        lineNumber: 202,
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
        lineNumber: 209,
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
        lineNumber: 216,
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
        lineNumber: 223,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
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
      lineNumber: 243,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "1uJReOoLBGWMvFXdNMxWquIDhGs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNkYXRlIiwic2V0SW5wdXRGaWVsZHNkYXRlIiwic3RhcnRUaW1lIiwiY2hhcml0eV9jaGFyaXR5SUQiLCJwYXJlbnRfc2NoZWR1bGVJRCIsImRlbGl2ZXJTdGF0dXMiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJpbnB1dEZpZWxkcyIsInNldElucHV0RmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJEZXRhaWxzIiwiaGFuZGxlUmVtb3ZlRmllbGRzIiwidmFsdWVzIiwic3BsaWNlIiwibWFwIiwiaW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRGM7QUFEcEIsS0FEaUM7QUFNdkNDLFVBQU0s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QUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxXQUFPLEVBQUVlLFlBTlgsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuRUEsQ0FGRixDQURGO0FBcUZEOztHQXhOUWQsSTtVQUdTUCxTOzs7S0FIVE8sSTtBQTBOTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NoZWR1bGVfY3JlYXRlLjQ1Y2FiNmYyYjYxMThkNGY5MmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuLy8gY2xhc3MgUG9zdHQgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgIGFzeW5jIHBvc3REYXRhKGUpIHtcbi8vICAgICB0cnl7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbi8vICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4vLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbi8vICAgICAgICAgfSk7XG4gICAgICBcbi8vICAgICB9IGNhdGNoKGUpe1xuLy8gICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc2RhdGUsIHNldElucHV0RmllbGRzZGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkc1N0YXJ0VGltZSwgc2V0SW5wdXRGaWVsZHNTdGFydFRpbWVdID0gdXNlU3RhdGUoW1xuICAvLyAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgICAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gIC8vICAgICAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgICAgICAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgICAgICAgICAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gIC8vICAgICAgICAgICAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuXG4gICAgXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgXCJkYXRlXCI6ICcnLCBcbiAgICBzdGFydFRpbWU6ICcnICwgXG4gICAgY2hhcml0eV9jaGFyaXR5SUQ6JycsIFxuICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgIEZvb2RfQmFza2V0SUQ6ICcnXG4gICAgfSxcbiAgXSk7XG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG5cbiAgLy8gY29uc3QgaGFyZGNvZGUgPSB7IFxuICAvLyAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gIC8vICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gIC8vICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gIC8vICAgXCJEZXRhaWxzXCI6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gIC8vICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAvLyAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgLy8gICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gIC8vICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gIC8vICAgICAgIH1cbiAgLy8gICBdXG4gIC8vIH1cbiAgLy8gYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgLy8gICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgLy8gfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgY29uc29sZS5sb2coXCJ0c3RcIiwgaW5wdXRGaWVsZHMuZGF0ZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0RmllbGRzKSxcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAvLyB9IGNhdGNoKGUpe1xuICAgIC8vICAgY29uc29sZS5sb2coZSlcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoZSwgaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICAvLyB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICAgIGlmIChlLnRhcmdldC5pZCA9PSAnZGF0ZScpIHNldElucHV0RmllbGRzZGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0RmllbGRzZGF0ZSk7XG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAgICAgLy8gfSxcbiAgICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICAgIFtcbiAgICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgXSlcbiAgfVxuICAvLyBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gIC8vICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgLy8gICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgLy8gICAgIC8vIH0sXG4gIC8vICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gIC8vICAgICBbXG4gIC8vICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICBdfVxuICAvLyAgIF0pXG4gIC8vIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgLy8ga2V5ID0ge2luZGV4fVxuICAgICAgICAgICAgICBpZCA9ICdkYXRlJ1xuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5kYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJpdHlfY2hhcml0eUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGFyaXR5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmNoYXJpdHlfY2hhcml0eUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwicGFyZW50X3NjaGVkdWxlSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNjaGVkdWxlIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwidm9sdW50ZWVyX3VzZXJJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVm9sdW50ZWVyIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnZvbHVudGVlcl91c2VySUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJCZW5lZmljaWFyeSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5iZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiRm9vZF9CYXNrZXRJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9vZCBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5Gb29kX0Jhc2tldElEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAvLyBvbkNsaWNrPXsoKT0+IHRoaXMucG9zdERhdGEoaGFyZGNvZGUpfVxuICAgICAgPlBvc3Q8L0J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9