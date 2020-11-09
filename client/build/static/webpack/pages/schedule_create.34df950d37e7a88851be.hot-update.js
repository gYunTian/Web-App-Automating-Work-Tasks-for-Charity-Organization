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

  var classes = useStyles(); // const [inputFieldsdate, setInputFieldsdate] = useState(null)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsStartTime = _useState[0],
      setInputFieldsStartTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsCharity_charityID = _useState2[0],
      setInputFieldsCharity_charityID = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsParent_scheduleID = _useState3[0],
      setInputFieldsParent_scheduleID = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsVolunteer_userID = _useState4[0],
      setInputFieldsVolunteer_userID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsBeneficiary_beneficiaryID = _useState5[0],
      setInputFieldsBeneficiary_beneficiaryID = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      inputFieldsFood_BasketID = _useState6[0],
      setInputFieldsFood_BasketID = _useState6[1]; // const [inputFields, setInputFields] = useState([
  //   { "date": '', 
  //   startTime: '' , 
  //   charity_charityID:'', 
  //   parent_scheduleID: '', 
  //   // deliverStatus: "NotCompleted", 
  //   volunteer_userID: '', 
  //   beneficiary_beneficiaryID: '',
  //   Food_BasketID: ''
  //   },
  // ]);
  // const [inputFields, setInputFields] = useState([
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
                body: JSON.stringify({
                  "date": inputFieldsdate,
                  "startTime": inputFieldsTime,
                  "charity_charityID": "charity001",
                  "Details": [{
                    "deliverStatus": "NotCompleted",
                    "parent_scheduleID": "newtest",
                    "volunteer_userID": "user001",
                    "beneficiary_beneficiaryID": "bene001",
                    "Food_BasketID": "01"
                  }]
                })
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
    if (event.target.id == 'date') setInputFieldsFood_BasketID(event.target.value);
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
      lineNumber: 195,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
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
        lineNumber: 200,
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
        lineNumber: 209,
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
        lineNumber: 216,
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
        lineNumber: 223,
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
        lineNumber: 230,
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
        lineNumber: 237,
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

_s(Form, "YS3YqY0Y+Wp7PzDiPSprooyhRC8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRGaWVsZHMiLCJkYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dEZpZWxkc2RhdGUiLCJpbnB1dEZpZWxkc1RpbWUiLCJyZXN1bHQiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInNldElucHV0RmllbGRzZGF0ZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsIkRldGFpbHMiLCJkZWxpdmVyU3RhdHVzIiwicGFyZW50X3NjaGVkdWxlSUQiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJtYXAiLCJpbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0osOEJBQXdCO0FBQ3RCQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEYztBQURwQixLQURpQztBQU12Q0MsVUFBTSxFQUFFO0FBQ05GLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGO0FBTitCLEdBQVo7QUFBQSxDQUFELENBQTVCLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBR2QsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCLENBSGMsQ0FJZDs7QUFKYyxrQkFNMENTLHNEQUFRLENBQUMsSUFBRCxDQU5sRDtBQUFBLE1BTVBDLG9CQU5PO0FBQUEsTUFNZUMsdUJBTmY7O0FBQUEsbUJBTzBERixzREFBUSxDQUFDLElBQUQsQ0FQbEU7QUFBQSxNQU9QRyw0QkFQTztBQUFBLE1BT3VCQywrQkFQdkI7O0FBQUEsbUJBUTBESixzREFBUSxDQUFDLElBQUQsQ0FSbEU7QUFBQSxNQVFQSyw0QkFSTztBQUFBLE1BUXVCQywrQkFSdkI7O0FBQUEsbUJBU3dETixzREFBUSxDQUFDLElBQUQsQ0FUaEU7QUFBQSxNQVNQTywy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QUFBQTtBQUFBLE9BR0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FyREYsRUEwREUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1NLGVBQWUsRUFBckI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQTFERixDQURhO0FBQUEsR0FBaEIsQ0FERCxFQW1FQSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFckMsT0FBTyxDQUFDRixNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxXQUFPLEVBQUVnQixZQU5YLENBT0U7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkVBLENBRkYsQ0FERjtBQXFGRDs7R0E3T1FmLEk7VUFHU1AsUzs7O0tBSFRPLEk7QUErT01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS4zNGRmOTUwZDM3ZTdhODg4NTFiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cblxufSkpXG5cbi8vIGNsYXNzIFBvc3R0IGV4dGVuZHMgQ29tcG9uZW50e1xuLy8gICBhc3luYyBwb3N0RGF0YShlKSB7XG4vLyAgICAgdHJ5e1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4vLyAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuLy8gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpXG4vLyAgICAgICAgIH0pO1xuICAgICAgXG4vLyAgICAgfSBjYXRjaChlKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAvLyBjb25zdCBbaW5wdXRGaWVsZHNkYXRlLCBzZXRJbnB1dEZpZWxkc2RhdGVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbaW5wdXRGaWVsZHNTdGFydFRpbWUsIHNldElucHV0RmllbGRzU3RhcnRUaW1lXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlELCBzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc1BhcmVudF9zY2hlZHVsZUlELCBzZXRJbnB1dEZpZWxkc1BhcmVudF9zY2hlZHVsZUlEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQsIHNldElucHV0RmllbGRzVm9sdW50ZWVyX3VzZXJJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNCZW5lZmljaWFyeV9iZW5lZmljaWFyeUlELCBzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzRm9vZF9CYXNrZXRJRCwgc2V0SW5wdXRGaWVsZHNGb29kX0Jhc2tldElEXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBcbiAgLy8gY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gIC8vICAgeyBcImRhdGVcIjogJycsIFxuICAvLyAgIHN0YXJ0VGltZTogJycgLCBcbiAgLy8gICBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gIC8vICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAvLyBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gIC8vICAgRm9vZF9CYXNrZXRJRDogJydcbiAgLy8gICB9LFxuICAvLyBdKTtcbiAgLy8gY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gIC8vICAgeyBkYXRlOiAnJywgXG4gIC8vICAgICBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIFxuICAvLyAgICAgZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gIC8vICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAvLyAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gIC8vICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gIC8vICAgfSxcbiAgLy8gXSk7XG5cblxuICAvLyBjb25zdCBoYXJkY29kZSA9IHsgXG4gIC8vICAgXCJkYXRlXCIgOiBcIjIwMjAtMTEtMDhcIixcbiAgLy8gICBcInN0YXJ0VGltZVwiOiBcIjk6MDAgQU1cIixcbiAgLy8gICBcImNoYXJpdHlfY2hhcml0eUlEXCIgOiBcImNoYXJpdHkwMDFcIixcbiAgLy8gICBcIkRldGFpbHNcIjogW1xuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgICBcImRlbGl2ZXJTdGF0dXNcIjogXCJOb3RDb21wbGV0ZWRcIixcbiAgLy8gICAgICAgICAgIFwicGFyZW50X3NjaGVkdWxlSURcIjogXCJuZXd0ZXN0XCIsXG4gIC8vICAgICAgICAgICBcInZvbHVudGVlcl91c2VySURcIiA6IFwidXNlcjAwMVwiLFxuICAvLyAgICAgICAgICAgXCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCIgOiBcImJlbmUwMDFcIixcbiAgLy8gICAgICAgICAgIFwiRm9vZF9CYXNrZXRJRFwiOiBcIjAxXCJcbiAgLy8gICAgICAgfVxuICAvLyAgIF1cbiAgLy8gfVxuICAvLyBhc3luYyBmdW5jdGlvbiBwb3N0dG9yZXZpZXcoZSkge1xuICAvLyAgIGNvbnN0IHBvc3RyZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICAgIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLFxuICAvLyAgICAge1xuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgLy8gICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpLFxuICAvLyAgICAgfVxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgcG9zdHJlc3VsdCA9IGF3YWl0IHBvc3RyZXMuanNvbigpO1xuICAvLyAgIHJldHVybiBwb3N0cmVzdWx0O1xuICAvLyB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGlucHV0RmllbGRzKTtcbiAgICBjb25zb2xlLmxvZyhcInRzdFwiLCBpbnB1dEZpZWxkcy5kYXRlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJkYXRlXCIgOiBpbnB1dEZpZWxkc2RhdGUsXG4gICAgICAgICAgICAgIFwic3RhcnRUaW1lXCI6IGlucHV0RmllbGRzVGltZSxcbiAgICAgICAgICAgICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gICAgICAgICAgICAgIFwiRGV0YWlsc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImRlbGl2ZXJTdGF0dXNcIjogXCJOb3RDb21wbGV0ZWRcIixcbiAgICAgICAgICAgICAgICAgIFwicGFyZW50X3NjaGVkdWxlSURcIjogXCJuZXd0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICBcInZvbHVudGVlcl91c2VySURcIiA6IFwidXNlcjAwMVwiLFxuICAgICAgICAgICAgICAgICAgXCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCIgOiBcImJlbmUwMDFcIixcbiAgICAgICAgICAgICAgICAgIFwiRm9vZF9CYXNrZXRJRFwiOiBcIjAxXCJcbiAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICAvLyB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2RhdGUnKSBzZXRJbnB1dEZpZWxkc2RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzdGFydFRpbWUnKSBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2NoYXJpdHlJRCcpIHNldElucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzY2hlZHVsZUlEJykgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3ZvbHVudGVlcklEJykgc2V0SW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnYmVuZWZpY2lhcnlJRCcpIHNldElucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2RhdGUnKSBzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuXG4gICAgXG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgICAgIC8vIH0sXG4gICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gICAgICBbXG4gICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAgICAgICB9XG4gICAgICBdfVxuICAgIF0pXG4gIH1cbiAgLy8gY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAvLyAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gIC8vICAgICAvLyB7IGZpcnN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gbGFzdE5hbWU6ICcnLCBcbiAgLy8gICAgIC8vIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIC8vIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6JycgXG4gIC8vICAgICAvLyB9LFxuICAvLyAgICAge2RhdGU6ICcnLCBzdGFydFRpbWU6ICcnICwgY2hhcml0eV9jaGFyaXR5SUQ6JycsIERldGFpbHM6IFxuICAvLyAgICAgW1xuICAvLyAgICAgICB7ZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gIC8vICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDogJycsXG4gIC8vICAgICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXX1cbiAgLy8gICBdKVxuICAvLyB9XG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyAgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5yb290fT5cbiAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGlucHV0RmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIC8vIGtleSA9IHtpbmRleH1cbiAgICAgICAgICAgICAgaWQgPSAnZGF0ZSdcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5wYXJlbnRfc2NoZWR1bGVJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInZvbHVudGVlcl91c2VySURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlZvbHVudGVlciBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC52b2x1bnRlZXJfdXNlcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQmVuZWZpY2lhcnkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cIkZvb2RfQmFza2V0SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZvb2QgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuRm9vZF9CYXNrZXRJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWVsZHMoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkRmllbGRzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgLy8gZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgLy8gb25DbGljaz17KCk9PiB0aGlzLnBvc3REYXRhKGhhcmRjb2RlKX1cbiAgICAgID5Qb3N0PC9CdXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==