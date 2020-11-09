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
      lineNumber: 190,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
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
        lineNumber: 204,
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
        lineNumber: 211,
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
        lineNumber: 218,
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
        lineNumber: 225,
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
        lineNumber: 232,
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
        lineNumber: 239,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
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
      lineNumber: 259,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRGaWVsZHMiLCJkYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dEZpZWxkc2RhdGUiLCJpbnB1dEZpZWxkc1RpbWUiLCJyZXN1bHQiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInNldElucHV0RmllbGRzZGF0ZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsIkRldGFpbHMiLCJkZWxpdmVyU3RhdHVzIiwicGFyZW50X3NjaGVkdWxlSUQiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJtYXAiLCJpbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0osOEJBQXdCO0FBQ3RCQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEYztBQURwQixLQURpQztBQU12Q0MsVUFBTSxFQUFFO0FBQ05GLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGO0FBTitCLEdBQVo7QUFBQSxDQUFELENBQTVCLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBR2QsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCLENBSGMsQ0FJZDs7QUFKYyxrQkFNMENTLHNEQUFRLENBQUMsSUFBRCxDQU5sRDtBQUFBLE1BTVBDLG9CQU5PO0FBQUEsTUFNZUMsdUJBTmY7O0FBQUEsbUJBTzBERixzREFBUSxDQUFDLElBQUQsQ0FQbEU7QUFBQSxNQU9QRyw0QkFQTztBQUFBLE1BT3VCQywrQkFQdkI7O0FBQUEsbUJBUTBESixzREFBUSxDQUFDLElBQUQsQ0FSbEU7QUFBQSxNQVFQSyw0QkFSTztBQUFBLE1BUXVCQywrQkFSdkI7O0FBQUEsbUJBU3dETixzREFBUSxDQUFDLElBQUQsQ0FUaEU7QUFBQSxNQVNQTywy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QUFBO0FBQUEsT0FHRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQXJERixFQTBERSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTU0sZUFBZSxFQUFyQjtBQUFBLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBMURGLENBRGE7QUFBQSxHQUFoQixDQURELEVBbUVBLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVyQyxPQUFPLENBQUNGLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFFBQUksRUFBQyxRQUpQLENBS0U7QUFMRjtBQU1FLFdBQU8sRUFBRWdCLFlBTlgsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuRUEsQ0FGRixDQURGO0FBcUZEOztHQXhPUWYsSTtVQUdTUCxTOzs7S0FIVE8sSTtBQTBPTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NoZWR1bGVfY3JlYXRlLmVkNDY0MjNjNjFiNjMyZTYyMGVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuLy8gY2xhc3MgUG9zdHQgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgIGFzeW5jIHBvc3REYXRhKGUpIHtcbi8vICAgICB0cnl7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbi8vICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4vLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbi8vICAgICAgICAgfSk7XG4gICAgICBcbi8vICAgICB9IGNhdGNoKGUpe1xuLy8gICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkc2RhdGUsIHNldElucHV0RmllbGRzZGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpbnB1dEZpZWxkc1N0YXJ0VGltZSwgc2V0SW5wdXRGaWVsZHNTdGFydFRpbWVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQsIHNldElucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQsIHNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzVm9sdW50ZWVyX3VzZXJJRCwgc2V0SW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQsIHNldElucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNGb29kX0Jhc2tldElELCBzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SURdID0gdXNlU3RhdGUobnVsbClcblxuICAgIFxuICAvLyBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7IFwiZGF0ZVwiOiAnJywgXG4gIC8vICAgc3RhcnRUaW1lOiAnJyAsIFxuICAvLyAgIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAvLyAgIC8vIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICBGb29kX0Jhc2tldElEOiAnJ1xuICAvLyAgIH0sXG4gIC8vIF0pO1xuICAvLyBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7IGRhdGU6ICcnLCBcbiAgLy8gICAgIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gIC8vICAgICBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICB9LFxuICAvLyBdKTtcblxuXG4gIC8vIGNvbnN0IGhhcmRjb2RlID0geyBcbiAgLy8gICBcImRhdGVcIiA6IFwiMjAyMC0xMS0wOFwiLFxuICAvLyAgIFwic3RhcnRUaW1lXCI6IFwiOTowMCBBTVwiLFxuICAvLyAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAvLyAgIFwiRGV0YWlsc1wiOiBbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAvLyAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgLy8gICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gIC8vICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAvLyAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAvLyAgICAgICB9XG4gIC8vICAgXVxuICAvLyB9XG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHBvc3R0b3JldmlldyhlKSB7XG4gIC8vICAgY29uc3QgcG9zdHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgICAgXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsXG4gIC8vICAgICB7XG4gIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJ1xuICAvLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSksXG4gIC8vICAgICB9XG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBwb3N0cmVzdWx0ID0gYXdhaXQgcG9zdHJlcy5qc29uKCk7XG4gIC8vICAgcmV0dXJuIHBvc3RyZXN1bHQ7XG4gIC8vIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICAgIGNvbnNvbGUubG9nKFwidHN0XCIsIGlucHV0RmllbGRzLmRhdGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcImRhdGVcIiA6IGlucHV0RmllbGRzZGF0ZSxcbiAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogaW5wdXRGaWVsZHNUaW1lLFxuICAgICAgICAgICAgICBcImNoYXJpdHlfY2hhcml0eUlEXCIgOiBcImNoYXJpdHkwMDFcIixcbiAgICAgICAgICAgICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgICAgICAgICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gICAgICAgICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAgICAgICAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgLy8gfSBjYXRjaChlKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gfVxuICAgIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpbmRleCwgZXZlbnQpID0+IHtcbiAgICAvLyBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIC8vIHZhbHVlc1tpbmRleF1bZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnZGF0ZScpIHNldElucHV0RmllbGRzZGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3N0YXJ0VGltZScpIHNldElucHV0RmllbGRzU3RhcnRUaW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnY2hhcml0eUlEJykgc2V0SW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRChldmVudC50YXJnZXQudmFsdWUpOyAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzY2hlZHVsZUlEJykgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3ZvbHVudGVlcklEJykgc2V0SW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnYmVuZWZpY2lhcnlJRCcpIHNldElucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2Zvb2RJRCcpIHNldElucHV0RmllbGRzRm9vZF9CYXNrZXRJRChldmVudC50YXJnZXQudmFsdWUpO1xuXG5cbiAgICBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAgICAgLy8gfSxcbiAgICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICAgIFtcbiAgICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgXSlcbiAgfVxuICAvLyBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gIC8vICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgLy8gICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgLy8gICAgIC8vIH0sXG4gIC8vICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gIC8vICAgICBbXG4gIC8vICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICBdfVxuICAvLyAgIF0pXG4gIC8vIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgLy8ga2V5ID0ge2luZGV4fVxuICAgICAgICAgICAgICBpZCA9ICdkYXRlJ1xuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5kYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImNoYXJpdHlfY2hhcml0eUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGFyaXR5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmNoYXJpdHlfY2hhcml0eUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwicGFyZW50X3NjaGVkdWxlSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNjaGVkdWxlIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnBhcmVudF9zY2hlZHVsZUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwidm9sdW50ZWVyX3VzZXJJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVm9sdW50ZWVyIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLnZvbHVudGVlcl91c2VySUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJCZW5lZmljaWFyeSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5iZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiRm9vZF9CYXNrZXRJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9vZCBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5Gb29kX0Jhc2tldElEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAvLyBvbkNsaWNrPXsoKT0+IHRoaXMucG9zdERhdGEoaGFyZGNvZGUpfVxuICAgICAgPlBvc3Q8L0J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9