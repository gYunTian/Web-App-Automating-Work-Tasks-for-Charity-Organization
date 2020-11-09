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
                body: JSON.stringify()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNkYXRlIiwic2V0SW5wdXRGaWVsZHNkYXRlIiwic3RhcnRUaW1lIiwiY2hhcml0eV9jaGFyaXR5SUQiLCJwYXJlbnRfc2NoZWR1bGVJRCIsImRlbGl2ZXJTdGF0dXMiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJpbnB1dEZpZWxkcyIsInNldElucHV0RmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJEZXRhaWxzIiwiaGFuZGxlUmVtb3ZlRmllbGRzIiwidmFsdWVzIiwic3BsaWNlIiwibWFwIiwiaW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRGM7QUFEcEIsS0FEaUM7QUFNdkNDLFVBQU0s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RTtBQUxGO0FBTUUsV0FBTyxFQUFFZSxZQU5YLENBT0U7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkVBLENBRkYsQ0FERjtBQXFGRDs7R0F4TlFkLEk7VUFHU1AsUzs7O0tBSFRPLEk7QUEwTk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS5mZGJkMmY5MDBjYTQ5NTE5ZGI1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cblxufSkpXG5cbi8vIGNsYXNzIFBvc3R0IGV4dGVuZHMgQ29tcG9uZW50e1xuLy8gICBhc3luYyBwb3N0RGF0YShlKSB7XG4vLyAgICAgdHJ5e1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4vLyAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuLy8gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpXG4vLyAgICAgICAgIH0pO1xuICAgICAgXG4vLyAgICAgfSBjYXRjaChlKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbaW5wdXRGaWVsZHNkYXRlLCBzZXRJbnB1dEZpZWxkc2RhdGVdID0gdXNlU3RhdGUobnVsbClcblxuICAvLyBjb25zdCBbaW5wdXRGaWVsZHNTdGFydFRpbWUsIHNldElucHV0RmllbGRzU3RhcnRUaW1lXSA9IHVzZVN0YXRlKFtcbiAgLy8gICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgICAgICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICAgICAgICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICAgICAgICAgIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgICAgICAgICAgICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcblxuICAgIFxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgICB7IFwiZGF0ZVwiOiAnJywgXG4gICAgc3RhcnRUaW1lOiAnJyAsIFxuICAgIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICBGb29kX0Jhc2tldElEOiAnJ1xuICAgIH0sXG4gIF0pO1xuICAvLyBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7IGRhdGU6ICcnLCBcbiAgLy8gICAgIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gIC8vICAgICBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICB9LFxuICAvLyBdKTtcblxuXG4gIC8vIGNvbnN0IGhhcmRjb2RlID0geyBcbiAgLy8gICBcImRhdGVcIiA6IFwiMjAyMC0xMS0wOFwiLFxuICAvLyAgIFwic3RhcnRUaW1lXCI6IFwiOTowMCBBTVwiLFxuICAvLyAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAvLyAgIFwiRGV0YWlsc1wiOiBbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAvLyAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgLy8gICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gIC8vICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAvLyAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAvLyAgICAgICB9XG4gIC8vICAgXVxuICAvLyB9XG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHBvc3R0b3JldmlldyhlKSB7XG4gIC8vICAgY29uc3QgcG9zdHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgICAgXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsXG4gIC8vICAgICB7XG4gIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJ1xuICAvLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSksXG4gIC8vICAgICB9XG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBwb3N0cmVzdWx0ID0gYXdhaXQgcG9zdHJlcy5qc29uKCk7XG4gIC8vICAgcmV0dXJuIHBvc3RyZXN1bHQ7XG4gIC8vIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICAgIGNvbnNvbGUubG9nKFwidHN0XCIsIGlucHV0RmllbGRzLmRhdGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgpLFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChlLCBpbmRleCwgZXZlbnQpID0+IHtcbiAgICAvLyBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIC8vIHZhbHVlc1tpbmRleF1bZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09ICdkYXRlJykgc2V0SW5wdXRGaWVsZHNkYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkc2RhdGUpO1xuXG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgICAgIC8vIH0sXG4gICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gICAgICBbXG4gICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAgICAgICB9XG4gICAgICBdfVxuICAgIF0pXG4gIH1cbiAgLy8gY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAvLyAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gIC8vICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgLy8gICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gIC8vICAgICAvLyB9LFxuICAvLyAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAvLyAgICAgW1xuICAvLyAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gIC8vICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gIC8vICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXX1cbiAgLy8gICBdKVxuICAvLyB9XG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyAgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5yb290fT5cbiAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGlucHV0RmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIC8vIGtleSA9IHtpbmRleH1cbiAgICAgICAgICAgICAgaWQgPSAnZGF0ZSdcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5wYXJlbnRfc2NoZWR1bGVJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cIkZvb2RfQmFza2V0SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZvb2QgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuRm9vZF9CYXNrZXRJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWVsZHMoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRmllbGRzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgLy8gZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgLy8gb25DbGljaz17KCk9PiB0aGlzLnBvc3REYXRhKGhhcmRjb2RlKX1cbiAgICAgID5Qb3N0PC9CdXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==