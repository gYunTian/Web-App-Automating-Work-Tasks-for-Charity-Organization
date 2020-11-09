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
      setInputFieldsdate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsStartTime = _useState2[0],
      setInputFieldsStartTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsCharity_charityID = _useState3[0],
      setInputFieldsCharity_charityID = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsParent_scheduleID = _useState4[0],
      setInputFieldsParent_scheduleID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsVolunteer_userID = _useState5[0],
      setInputFieldsVolunteer_userID = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsBeneficiary_beneficiaryID = _useState6[0],
      setInputFieldsBeneficiary_beneficiaryID = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsFood_BasketID = _useState7[0],
      setInputFieldsFood_BasketID = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    "date": '',
    startTime: '',
    charity_charityID: '',
    parent_scheduleID: '',
    // deliverStatus: "NotCompleted", 
    volunteer_userID: '',
    beneficiary_beneficiaryID: '',
    Food_BasketID: ''
  }]),
      inputFields = _useState8[0],
      setInputFields = _useState8[1]; // const [inputFields, setInputFields] = useState([
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
              // console.log("InputFields", inputFields);

              _context.next = 3;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "date": inputFieldsdate,
                  "startTime": inputFieldsStartTime,
                  "charity_charityID": inputFieldsCharity_charityID,
                  "Details": [{
                    "deliverStatus": "NotCompleted",
                    "parent_scheduleID": inputFieldsParent_scheduleID,
                    "volunteer_userID": inputFieldsVolunteer_userID,
                    "beneficiary_beneficiaryID": inputFieldsBeneficiary_beneficiaryID,
                    "Food_BasketID": inputFieldsFood_BasketID
                  }]
                })
              });

            case 3:
              result = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  var handleChangeInput = function handleChangeInput(index, event) {
    // const values = [...inputFields];
    // values[index][event.target.name] = event.target.value;
    // setInputFields(values);
    if (event.target.id == 'date') setInputFieldsdate(event.target.value);
    if (event.target.id == 'startTime') setInputFieldsStartTime(event.target.value);
    if (event.target.id == 'charityID') setInputFieldsCharity_charityID(event.target.value);
    if (event.target.id == 'scheduleID') setInputFieldsParent_scheduleID(event.target.value);
    if (event.target.id == 'volunteerID') setInputFieldsVolunteer_userID(event.target.value);
    if (event.target.id == 'beneficiaryID') setInputFieldsBeneficiary_beneficiaryID(event.target.value);
    if (event.target.id == 'foodID') setInputFieldsFood_BasketID(event.target.value);
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
      lineNumber: 189,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"] // key = {index}
    , {
      id: "date",
      name: "date",
      label: "Date",
      variant: "filled" // value={inputField.date}
      ,
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
      id: "startTime",
      name: "startTime",
      label: "Start Time",
      variant: "filled" // value={inputField.startTime}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "scheduleID",
      name: "charity_charityID",
      label: "Charity ID",
      variant: "filled" // value={inputField.charity_charityID}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "scheduleID",
      name: "parent_scheduleID",
      label: "Schedule ID",
      variant: "filled" // value={inputField.parent_scheduleID}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "volunteerID",
      name: "volunteer_userID",
      label: "Volunteer ID",
      variant: "filled" // value={inputField.volunteer_userID}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "beneficiaryID",
      name: "beneficiary_beneficiaryID",
      label: "Beneficiary ID",
      variant: "filled" // value={inputField.beneficiary_beneficiaryID}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "foodID",
      name: "Food_BasketID",
      label: "Food ID",
      variant: "filled" // value={inputField.Food_BasketID}
      ,
      onChange: function onChange(event) {
        return handleChangeInput(index, event);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
      lineNumber: 265,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "5ceoB6EiaogFcqJjkrYQ5sFBSNU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNkYXRlIiwic2V0SW5wdXRGaWVsZHNkYXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsInBhcmVudF9zY2hlZHVsZUlEIiwidm9sdW50ZWVyX3VzZXJJRCIsImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJGb29kX0Jhc2tldElEIiwiaW5wdXRGaWVsZHMiLCJzZXRJbnB1dEZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJpbmRleCIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImRhdGUiLCJEZXRhaWxzIiwiZGVsaXZlclN0YXR1cyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInZhbHVlcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSiw4QkFBd0I7QUFDdEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURjO0FBRHBCLEtBRGlDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkYsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFOK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIsQyxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFHZCxNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7O0FBSGMsa0JBSWdDUyxzREFBUSxDQUFDLElBQUQsQ0FKeEM7QUFBQSxNQUlQQyxlQUpPO0FBQUEsTUFJVUMsa0JBSlY7O0FBQUEsbUJBTTBDRixzREFBUSxDQUFDLElBQUQsQ0FObEQ7QUFBQSxNQU1QRyxvQkFOTztBQUFBLE1BTWVDLHVCQU5mOztBQUFBLG1CQU8wREosc0RBQVEsQ0FBQyxJQUFELENBUGxFO0FBQUEsTUFPUEssNEJBUE87QUFBQSxNQU91QkMsK0JBUHZCOztBQUFBLG1CQVEwRE4sc0RBQVEsQ0FBQyxJQUFELENBUmxFO0FBQUEsTUFRUE8sNEJBUk87QUFBQSxNQVF1QkMsK0JBUnZCOztBQUFBLG1CQVN3RFIsc0RBQVEsQ0FB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TUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1RLGtCQUFrQixDQUFDVCxLQUFELENBQXhCO0FBQUEsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0E1REYsRUFpRUUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1LLGVBQWUsRUFBckI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQWpFRixDQURhO0FBQUEsR0FBaEIsQ0FERCxFQTBFQSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFeEMsT0FBTyxDQUFDRixNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxXQUFPLEVBQUUwQixZQU5YLENBT0U7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUVBLENBRkYsQ0FERjtBQTRGRDs7R0E5T1F6QixJO1VBR1NQLFM7OztLQUhUTyxJO0FBZ1BNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zY2hlZHVsZV9jcmVhdGUuM2YwOTZkNmJmMDI2YTE1MmNkYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG5cbn0pKVxuXG4vLyBjbGFzcyBQb3N0dCBleHRlbmRzIENvbXBvbmVudHtcbi8vICAgYXN5bmMgcG9zdERhdGEoZSkge1xuLy8gICAgIHRyeXtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuLy8gICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbi8vICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKVxuLy8gICAgICAgICB9KTtcbiAgICAgIFxuLy8gICAgIH0gY2F0Y2goZSl7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzZGF0ZSwgc2V0SW5wdXRGaWVsZHNkYXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW2lucHV0RmllbGRzU3RhcnRUaW1lLCBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRCwgc2V0SW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCwgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklELCBzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCwgc2V0SW5wdXRGaWVsZHNCZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQsIHNldElucHV0RmllbGRzRm9vZF9CYXNrZXRJRF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgXCJkYXRlXCI6ICcnLCBcbiAgICBzdGFydFRpbWU6ICcnICwgXG4gICAgY2hhcml0eV9jaGFyaXR5SUQ6JycsIFxuICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgLy8gZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgIEZvb2RfQmFza2V0SUQ6ICcnXG4gICAgfSxcbiAgXSk7XG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG5cbiAgLy8gY29uc3QgaGFyZGNvZGUgPSB7IFxuICAvLyAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gIC8vICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gIC8vICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gIC8vICAgXCJEZXRhaWxzXCI6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gIC8vICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAvLyAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgLy8gICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gIC8vICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gIC8vICAgICAgIH1cbiAgLy8gICBdXG4gIC8vIH1cbiAgLy8gYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgLy8gICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgLy8gfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgLy8gY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiIDogaW5wdXRGaWVsZHNkYXRlLFxuICAgICAgICAgICAgICBcInN0YXJ0VGltZVwiOiBpbnB1dEZpZWxkc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogaW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRCxcbiAgICAgICAgICAgICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBpbnB1dEZpZWxkc1BhcmVudF9zY2hlZHVsZUlELFxuICAgICAgICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQsXG4gICAgICAgICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IGlucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCxcbiAgICAgICAgICAgICAgICAgIFwiRm9vZF9CYXNrZXRJRFwiOiBpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SURcbiAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICAvLyB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2RhdGUnKSBzZXRJbnB1dEZpZWxkc2RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzdGFydFRpbWUnKSBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2NoYXJpdHlJRCcpIHNldElucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTsgICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnc2NoZWR1bGVJRCcpIHNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICd2b2x1bnRlZXJJRCcpIHNldElucHV0RmllbGRzVm9sdW50ZWVyX3VzZXJJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2JlbmVmaWNpYXJ5SUQnKSBzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdmb29kSUQnKSBzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gICAgICAvLyB9LFxuICAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgICAgW1xuICAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICBdKVxuICB9XG4gIC8vIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgLy8gICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAvLyAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgLy8gICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAvLyAgICAgLy8gfSxcbiAgLy8gICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgLy8gICAgIFtcbiAgLy8gICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAvLyAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIF19XG4gIC8vICAgXSlcbiAgLy8gfVxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lID0ge2NsYXNzZXMucm9vdH0+XG4gICAgICB7aW5wdXRGaWVsZHMubWFwKChpbnB1dEZpZWxkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAvLyBrZXkgPSB7aW5kZXh9XG4gICAgICAgICAgICAgIGlkID0gJ2RhdGUnXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmRhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQgPSAnc3RhcnRUaW1lJ1xuICAgICAgICAgICAgICBuYW1lPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSAnc2NoZWR1bGVJRCdcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJpdHlfY2hhcml0eUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGFyaXR5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmNoYXJpdHlfY2hhcml0eUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICdzY2hlZHVsZUlEJ1xuICAgICAgICAgICAgICBuYW1lPVwicGFyZW50X3NjaGVkdWxlSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNjaGVkdWxlIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICd2b2x1bnRlZXJJRCdcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICdiZW5lZmljaWFyeUlEJ1xuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSBcImZvb2RJRFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJGb29kX0Jhc2tldElEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGb29kIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLkZvb2RfQmFza2V0SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEZpZWxkcygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgIC8vIGVuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8vIG9uQ2xpY2s9eygpPT4gdGhpcy5wb3N0RGF0YShoYXJkY29kZSl9XG4gICAgICA+UG9zdDwvQnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=