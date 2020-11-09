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
              _context.next = 2;
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

            case 2:
              result = _context.sent;

            case 3:
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
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
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
        lineNumber: 194,
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
        lineNumber: 203,
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
        lineNumber: 211,
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
        lineNumber: 219,
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
        lineNumber: 227,
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
        lineNumber: 235,
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
        lineNumber: 243,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
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
      lineNumber: 264,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNkYXRlIiwic2V0SW5wdXRGaWVsZHNkYXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsInBhcmVudF9zY2hlZHVsZUlEIiwidm9sdW50ZWVyX3VzZXJJRCIsImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJGb29kX0Jhc2tldElEIiwiaW5wdXRGaWVsZHMiLCJzZXRJbnB1dEZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJkYXRlIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJtYXAiLCJpbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0osOEJBQXdCO0FBQ3RCQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEYztBQURwQixLQURpQztBQU12Q0MsVUFBTSxFQUFFO0FBQ05GLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGO0FBTitCLEdBQVo7QUFBQSxDQUFELENBQTVCLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBR2QsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCOztBQUhjLGtCQUlnQ1Msc0RBQVEsQ0FBQyxJQUFELENBSnhDO0FBQUEsTUFJUEMsZUFKTztBQUFBLE1BSVVDLGtCQUpWOztBQUFBLG1CQUswQ0Ysc0RBQVEsQ0FBQyxJQUFELENBTGxEO0FBQUEsTUFLUEcsb0JBTE87QUFBQSxNQUtlQyx1QkFMZjs7QUFBQSxtQkFNMERKLHNEQUFRLENBQUMsSUFBRCxDQU5sRTtBQUFBLE1BTVBLLDRCQU5PO0FBQUEsTUFNdUJDLCtCQU52Qjs7QUFBQSxtQkFPMEROLHNEQUFRLENBQUMsSUFBRCxDQVBsRTtBQUFBLE1BT1BPLDRCQVBPO0FBQUEsTUFPdUJDLCtCQVB2Qjs7QUFBQSxtQkFRd0RSLHNEQUFRLENBQUMsSUFBRCxDQVJoRTtBQUFB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Q0FBeEI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQTVERixFQWlFRSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTUssZUFBZSxFQUFyQjtBQUFBLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBakVGLENBRGE7QUFBQSxHQUFoQixDQURELEVBMEVBLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUV2QyxPQUFPLENBQUNGLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFFBQUksRUFBQyxRQUpQLENBS0U7QUFMRjtBQU1FLFdBQU8sRUFBRTBCLFlBTlgsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExRUEsQ0FGRixDQURGO0FBNEZEOztHQTdPUXpCLEk7VUFHU1AsUzs7O0tBSFRPLEk7QUErT01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS45YzhlMzI1YWE1NjJmNzA1YzYwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cblxufSkpXG5cbi8vIGNsYXNzIFBvc3R0IGV4dGVuZHMgQ29tcG9uZW50e1xuLy8gICBhc3luYyBwb3N0RGF0YShlKSB7XG4vLyAgICAgdHJ5e1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4vLyAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuLy8gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpXG4vLyAgICAgICAgIH0pO1xuICAgICAgXG4vLyAgICAgfSBjYXRjaChlKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbaW5wdXRGaWVsZHNkYXRlLCBzZXRJbnB1dEZpZWxkc2RhdGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzU3RhcnRUaW1lLCBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRCwgc2V0SW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCwgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklELCBzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCwgc2V0SW5wdXRGaWVsZHNCZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQsIHNldElucHV0RmllbGRzRm9vZF9CYXNrZXRJRF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgXCJkYXRlXCI6ICcnLCBcbiAgICBzdGFydFRpbWU6ICcnICwgXG4gICAgY2hhcml0eV9jaGFyaXR5SUQ6JycsIFxuICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgLy8gZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgIEZvb2RfQmFza2V0SUQ6ICcnXG4gICAgfSxcbiAgXSk7XG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG5cbiAgLy8gY29uc3QgaGFyZGNvZGUgPSB7IFxuICAvLyAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gIC8vICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gIC8vICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gIC8vICAgXCJEZXRhaWxzXCI6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gIC8vICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAvLyAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgLy8gICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gIC8vICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gIC8vICAgICAgIH1cbiAgLy8gICBdXG4gIC8vIH1cbiAgLy8gYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgLy8gICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgLy8gfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgLy8gY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiIDogaW5wdXRGaWVsZHNkYXRlLFxuICAgICAgICAgICAgICBcInN0YXJ0VGltZVwiOiBpbnB1dEZpZWxkc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogaW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRCxcbiAgICAgICAgICAgICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBpbnB1dEZpZWxkc1BhcmVudF9zY2hlZHVsZUlELFxuICAgICAgICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQsXG4gICAgICAgICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IGlucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCxcbiAgICAgICAgICAgICAgICAgIFwiRm9vZF9CYXNrZXRJRFwiOiBpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SURcbiAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICAvLyB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2RhdGUnKSBzZXRJbnB1dEZpZWxkc2RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzdGFydFRpbWUnKSBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2NoYXJpdHlJRCcpIHNldElucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTsgICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnc2NoZWR1bGVJRCcpIHNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICd2b2x1bnRlZXJJRCcpIHNldElucHV0RmllbGRzVm9sdW50ZWVyX3VzZXJJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2JlbmVmaWNpYXJ5SUQnKSBzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdmb29kSUQnKSBzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gICAgICAvLyB9LFxuICAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAgICAgW1xuICAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICBdKVxuICB9XG4gIC8vIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgLy8gICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAvLyAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgLy8gICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAvLyAgICAgLy8gfSxcbiAgLy8gICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgLy8gICAgIFtcbiAgLy8gICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAvLyAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIF19XG4gIC8vICAgXSlcbiAgLy8gfVxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lID0ge2NsYXNzZXMucm9vdH0+XG4gICAgICB7aW5wdXRGaWVsZHMubWFwKChpbnB1dEZpZWxkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAvLyBrZXkgPSB7aW5kZXh9XG4gICAgICAgICAgICAgIGlkID0gJ2RhdGUnXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmRhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQgPSAnc3RhcnRUaW1lJ1xuICAgICAgICAgICAgICBuYW1lPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSAnc2NoZWR1bGVJRCdcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJpdHlfY2hhcml0eUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGFyaXR5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmNoYXJpdHlfY2hhcml0eUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICdzY2hlZHVsZUlEJ1xuICAgICAgICAgICAgICBuYW1lPVwicGFyZW50X3NjaGVkdWxlSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNjaGVkdWxlIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICd2b2x1bnRlZXJJRCdcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBpZCA9ICdiZW5lZmljaWFyeUlEJ1xuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSBcImZvb2RJRFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJGb29kX0Jhc2tldElEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGb29kIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLkZvb2RfQmFza2V0SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEZpZWxkcygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgIC8vIGVuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8vIG9uQ2xpY2s9eygpPT4gdGhpcy5wb3N0RGF0YShoYXJkY29kZSl9XG4gICAgICA+UG9zdDwvQnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=