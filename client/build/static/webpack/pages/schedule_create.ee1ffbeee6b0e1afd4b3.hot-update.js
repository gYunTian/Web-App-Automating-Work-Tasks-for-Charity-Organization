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
      setInputFieldsFood_BasketID = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    "date": '',
    startTime: '',
    charity_charityID: '',
    parent_scheduleID: '',
    // deliverStatus: "NotCompleted", 
    volunteer_userID: '',
    beneficiary_beneficiaryID: '',
    Food_BasketID: ''
  }]),
      inputFields = _useState7[0],
      setInputFields = _useState7[1]; // const [inputFields, setInputFields] = useState([
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
              _context.next = 4;
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

_s(Form, "AjoH1bZp0tT1lvGoKjn5aBvQqPE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsInBhcmVudF9zY2hlZHVsZUlEIiwidm9sdW50ZWVyX3VzZXJJRCIsImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJGb29kX0Jhc2tldElEIiwiaW5wdXRGaWVsZHMiLCJzZXRJbnB1dEZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlucHV0RmllbGRzZGF0ZSIsImlucHV0RmllbGRzVGltZSIsInJlc3VsdCIsImhhbmRsZUNoYW5nZUlucHV0IiwiaW5kZXgiLCJldmVudCIsInRhcmdldCIsImlkIiwic2V0SW5wdXRGaWVsZHNkYXRlIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJkYXRlIiwiRGV0YWlscyIsImRlbGl2ZXJTdGF0dXMiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJtYXAiLCJpbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0osOEJBQXdCO0FBQ3RCQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEYztBQURwQixLQURpQztBQU12Q0MsVUFBTSxFQUFFO0FBQ05GLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGO0FBTitCLEdBQVo7QUFBQSxDQUFELENBQTVCLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBR2QsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCLENBSGMsQ0FJZDs7QUFKYyxrQkFNMENTLHNEQUFRLENBQUMsSUFBRCxDQU5sRDtBQUFBLE1BTVBDLG9CQU5PO0FBQUEsTUFNZUMsdUJBTmY7O0FBQUEsbUJBTzBERixzREFBUSxDQUFDLElBQUQsQ0FQbEU7QUFBQSxNQU9QRyw0QkFQTztBQUFBLE1BT3VCQywrQkFQdkI7O0FBQUEsbUJBUTBESixzREFBUSxDQUFDLElBQUQsQ0FSbEU7QUFBQSxNQVFQSyw0QkFSTztBQUFBLE1BUXVCQywrQkFSdkI7O0FBQUEsbUJBU3dETixzREFBUSxDQUFDLElBQUQsQ0FUaEU7QUFBQSxNQVNQTywyQkFUTztBQUFBLE1BU3NCQyw4QkFUdEI7O0FBQUEsbUJBVTBFUixzREFBUSxDQUFDLElBQUQsQ0FWbEY7QUFBQSxNQVVQUyxvQ0FWTztBQUFBLE1BVStCQyx1Q0FWL0I7O0FBQUEsbUJBV2tEVixzREFBUSxDQUFDLElBQUQsQ0FYMUQ7QUFBQSxNQVdQVyx3QkFYTztBQUFBLE1BV21CQywyQkFYbkI7O0FBQUEsbUJBY3dCWixzREFBUSxDQUFDLENBQzdDO0FBQUUsWUFBUSxFQUFWO0FBQ0FhLGFBQVMsRUFBRSxFQURYO0FBRUFDLHFCQUFpQixFQUFDLEVBRmxCO0FBR0FDLHFCQUFpQixFQUFFLEVBSG5CO0FBSUE7QUFDQUMsb0JBQWdCLEVBQUUsRUFMbEI7QUFNQUMsNkJBQXlCLEVBQUUsRUFOM0I7QUFPQUMsaUJBQWEsRUFBRTtBQVBmLEdBRDZDLENBQUQsQ0FkaEM7QUFBQSxNQWNQQyxXQWRPO0FBQUEsTUFjTUMsY0FkTixrQkF5QmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE5RGMsV0ErRENDLFlBL0REO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFNQStEZCxpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUYsR0FERixDQUVFOztBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQk4sV0FBM0I7QUFIRjtBQUFBLHFCQUt1Qk8sS0FBSyxDQUFFLCtHQUFGLEVBQW1IO0FBQ3pJQyxzQkFBTSxFQUFFLE1BRGlJO0FBRXpJQyx1QkFBTyxFQUFFO0FBQUMsa0NBQWdCO0FBQWpCLGlCQUZnSTtBQUd6SUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDZiwwQkFBU0MsZUFETTtBQUVmLCtCQUFhQyxlQUZFO0FBR2YsdUNBQXNCLFlBSFA7QUFJZiw2QkFBVyxDQUNQO0FBQ0EscUNBQWlCLGNBRGpCO0FBRUEseUNBQXFCLFNBRnJCO0FBR0Esd0NBQXFCLFNBSHJCO0FBSUEsaURBQThCLFNBSjlCO0FBS0EscUNBQWlCO0FBTGpCLG1CQURPO0FBSkksaUJBQWY7QUFIbUksZUFBbkgsQ0FMNUI7O0FBQUE7QUFLUUMsb0JBTFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvRGM7QUFBQTtBQUFBOztBQTBGZCxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsRUFBYixJQUFtQixNQUF2QixFQUErQkMsa0JBQWtCLENBQUNILEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxLQUFkLENBQWxCO0FBQy9CLFFBQUlKLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxFQUFiLElBQW1CLFdBQXZCLEVBQW9DckMsdUJBQXVCLENBQUNtQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsS0FBZCxDQUF2QjtBQUNwQyxRQUFJSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsRUFBYixJQUFtQixXQUF2QixFQUFvQ25DLCtCQUErQixDQUFDaUMsS0FBSyxDQUFDQyxNQUFOLENBQWFHLEtBQWQsQ0FBL0I7QUFDcEMsUUFBSUosS0FBSyxDQUFDQyxNQUFOLENBQWFDLEVBQWIsSUFBbUIsWUFBdkIsRUFBcUNqQywrQkFBK0IsQ0FBQytCLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxLQUFkLENBQS9CO0FBQ3JDLFFBQUlKLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxFQUFiLElBQW1CLGFBQXZCLEVBQXNDL0IsOEJBQThCLENBQUM2QixLQUFLLENBQUNDLE1BQU4sQ0FBYUcsS0FBZCxDQUE5QjtBQUN0QyxRQUFJSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsRUFBYixJQUFtQixlQUF2QixFQUF3QzdCLHVDQUF1QyxDQUFDMkIsS0FBSyxDQUFDQyxNQUFOLENBQWFHLEtBQWQsQ0FBdkM7QUFDeEMsUUFBSUosS0FBSyxDQUFDQyxNQUFOLENBQWFDLEVBQWIsSUFBbUIsUUFBdkIsRUFBaUMzQiwyQkFBMkIsQ0FBQ3lCLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxLQUFkLENBQTNCO0FBR2xDLEdBYkQ7O0FBZUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCdEIsa0JBQWMsd0dBQUtELFdBQUwsSUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQ3dCLFVBQUksRUFBRSxFQUFQO0FBQVc5QixlQUFTLEVBQUUsRUFBdEI7QUFBMkJDLHVCQUFpQixFQUFDLEVBQTdDO0FBQWlEOEIsYUFBTyxFQUN4RCxDQUNFO0FBQUNDLHFCQUFhLEVBQUUsY0FBaEI7QUFDQTlCLHlCQUFpQixFQUFFLEVBRG5CO0FBRUFDLHdCQUFnQixFQUFFLEVBRmxCO0FBR0FDLGlDQUF5QixFQUFFLEVBSDNCO0FBSUFDLHFCQUFhLEVBQUU7QUFKZixPQURGO0FBREEsS0FOWSxHQUFkO0FBZ0JELEdBakJELENBekdjLENBMkhkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTRCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1YsS0FBRCxFQUFXO0FBQ3BDLFFBQU1XLE1BQU0sZ0dBQVE1QixXQUFSLENBQVo7O0FBQ0E0QixVQUFNLENBQUNDLE1BQVAsQ0FBY1osS0FBZCxFQUFxQixDQUFyQjtBQUNBaEIsa0JBQWMsQ0FBQzJCLE1BQUQsQ0FBZDtBQUNELEdBSkQ7O0FBS0EsU0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFNLGFBQVMsRUFBSWhELE9BQU8sQ0FBQ0wsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDeUIsV0FBVyxDQUFDOEIsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWFkLEtBQWI7QUFBQSxXQUNiO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLG1FQUFELENBQ0U7QUFERjtBQUVFLFFBQUUsRUFBRyxNQUZQO0FBR0UsVUFBSSxFQUFDLE1BSFA7QUFJRSxXQUFLLEVBQUMsTUFKUjtBQUtFLGFBQU8sRUFBQyxRQUxWLENBTUU7QUFORjtBQU9FLGNBQVEsRUFBRSxrQkFBQUMsS0FBSztBQUFBLGVBQUlGLGlCQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBckI7QUFBQSxPQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFXRSxNQUFDLG1FQUFEO0FBQ0UsUUFBRSxFQUFHLFdBRFA7QUFFRSxVQUFJLEVBQUMsV0FGUDtBQUdFLFdBQUssRUFBQyxZQUhSO0FBSUUsYUFBTyxFQUFDLFFBSlYsQ0FLRTtBQUxGO0FBTUUsY0FBUSxFQUFFLGtCQUFBQSxLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixFQW1CRSxNQUFDLG1FQUFEO0FBQ0UsUUFBRSxFQUFHLFlBRFA7QUFFRSxVQUFJLEVBQUMsbUJBRlA7QUFHRSxXQUFLLEVBQUMsWUFIUjtBQUlFLGFBQU8sRUFBQyxRQUpWLENBS0U7QUFMRjtBQU1FLGNBQVEsRUFBRSxrQkFBQUEsS0FBSztBQUFBLGVBQUlGLGlCQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBckI7QUFBQSxPQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJGLEVBMkJFLE1BQUMsbUVBQUQ7QUFDRSxRQUFFLEVBQUcsWUFEUDtBQUVFLFVBQUksRUFBQyxtQkFGUDtBQUdFLFdBQUssRUFBQyxhQUhSO0FBSUUsYUFBTyxFQUFDLFFBSlYsQ0FLRTtBQUxGO0FBTUUsY0FBUSxFQUFFLGtCQUFBQSxLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQkYsRUFtQ0UsTUFBQyxtRUFBRDtBQUNFLFFBQUUsRUFBRyxhQURQO0FBRUUsVUFBSSxFQUFDLGtCQUZQO0FBR0UsV0FBSyxFQUFDLGNBSFI7QUFJRSxhQUFPLEVBQUMsUUFKVixDQUtFO0FBTEY7QUFNRSxjQUFRLEVBQUUsa0JBQUFBLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5DRixFQTJDRSxNQUFDLG1FQUFEO0FBQ0UsUUFBRSxFQUFHLGVBRFA7QUFFRSxVQUFJLEVBQUMsMkJBRlA7QUFHRSxXQUFLLEVBQUMsZ0JBSFI7QUFJRSxhQUFPLEVBQUMsUUFKVixDQUtFO0FBTEY7QUFNRSxjQUFRLEVBQUUsa0JBQUFBLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTNDRixFQW1ERSxNQUFDLG1FQUFEO0FBQ0UsUUFBRSxFQUFHLFFBRFA7QUFFRSxVQUFJLEVBQUMsZUFGUDtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsYUFBTyxFQUFDLFFBSlYsQ0FLRTtBQUxGO0FBTUUsY0FBUSxFQUFFLGtCQUFBQSxLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFuREYsRUE0REUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1TLGtCQUFrQixDQUFDVixLQUFELENBQXhCO0FBQUEsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0E1REYsRUFpRUUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1NLGVBQWUsRUFBckI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQWpFRixDQURhO0FBQUEsR0FBaEIsQ0FERCxFQTBFQSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFM0MsT0FBTyxDQUFDRixNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxXQUFPLEVBQUV3QixZQU5YLENBT0U7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUVBLENBRkYsQ0FERjtBQTRGRDs7R0E5T1F2QixJO1VBR1NQLFM7OztLQUhUTyxJO0FBZ1BNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zY2hlZHVsZV9jcmVhdGUuZWUxZmZiZWVlNmIwZTFhZmQ0YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG5cbn0pKVxuXG4vLyBjbGFzcyBQb3N0dCBleHRlbmRzIENvbXBvbmVudHtcbi8vICAgYXN5bmMgcG9zdERhdGEoZSkge1xuLy8gICAgIHRyeXtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuLy8gICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbi8vICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKVxuLy8gICAgICAgICB9KTtcbiAgICAgIFxuLy8gICAgIH0gY2F0Y2goZSl7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgLy8gY29uc3QgW2lucHV0RmllbGRzZGF0ZSwgc2V0SW5wdXRGaWVsZHNkYXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW2lucHV0RmllbGRzU3RhcnRUaW1lLCBzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRCwgc2V0SW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCwgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklELCBzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCwgc2V0SW5wdXRGaWVsZHNCZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQsIHNldElucHV0RmllbGRzRm9vZF9CYXNrZXRJRF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgXCJkYXRlXCI6ICcnLCBcbiAgICBzdGFydFRpbWU6ICcnICwgXG4gICAgY2hhcml0eV9jaGFyaXR5SUQ6JycsIFxuICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gICAgLy8gZGVsaXZlclN0YXR1czogXCJOb3RDb21wbGV0ZWRcIiwgXG4gICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgIEZvb2RfQmFza2V0SUQ6ICcnXG4gICAgfSxcbiAgXSk7XG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG5cbiAgLy8gY29uc3QgaGFyZGNvZGUgPSB7IFxuICAvLyAgIFwiZGF0ZVwiIDogXCIyMDIwLTExLTA4XCIsXG4gIC8vICAgXCJzdGFydFRpbWVcIjogXCI5OjAwIEFNXCIsXG4gIC8vICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogXCJjaGFyaXR5MDAxXCIsXG4gIC8vICAgXCJEZXRhaWxzXCI6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gIC8vICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAvLyAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgLy8gICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gIC8vICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gIC8vICAgICAgIH1cbiAgLy8gICBdXG4gIC8vIH1cbiAgLy8gYXN5bmMgZnVuY3Rpb24gcG9zdHRvcmV2aWV3KGUpIHtcbiAgLy8gICBjb25zdCBwb3N0cmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIixcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIG9yICdQVVQnXG4gIC8vICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlKSxcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnN0IHBvc3RyZXN1bHQgPSBhd2FpdCBwb3N0cmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gcG9zdHJlc3VsdDtcbiAgLy8gfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiIDogaW5wdXRGaWVsZHNkYXRlLFxuICAgICAgICAgICAgICBcInN0YXJ0VGltZVwiOiBpbnB1dEZpZWxkc1RpbWUsXG4gICAgICAgICAgICAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAgICAgICAgICAgICBcIkRldGFpbHNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gICAgICAgICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IFwibmV3dGVzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBcInVzZXIwMDFcIixcbiAgICAgICAgICAgICAgICAgIFwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRFwiIDogXCJiZW5lMDAxXCIsXG4gICAgICAgICAgICAgICAgICBcIkZvb2RfQmFza2V0SURcIjogXCIwMVwiXG4gICAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAvLyB9IGNhdGNoKGUpe1xuICAgIC8vICAgY29uc29sZS5sb2coZSlcbiAgICAvLyB9XG4gICAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGluZGV4LCBldmVudCkgPT4ge1xuICAgIC8vIGNvbnN0IHZhbHVlcyA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgLy8gdmFsdWVzW2luZGV4XVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgLy8gc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdkYXRlJykgc2V0SW5wdXRGaWVsZHNkYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnc3RhcnRUaW1lJykgc2V0SW5wdXRGaWVsZHNTdGFydFRpbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdjaGFyaXR5SUQnKSBzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEKGV2ZW50LnRhcmdldC52YWx1ZSk7ICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3NjaGVkdWxlSUQnKSBzZXRJbnB1dEZpZWxkc1BhcmVudF9zY2hlZHVsZUlEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAndm9sdW50ZWVySUQnKSBzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdiZW5lZmljaWFyeUlEJykgc2V0SW5wdXRGaWVsZHNCZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnZm9vZElEJykgc2V0SW5wdXRGaWVsZHNGb29kX0Jhc2tldElEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAgICAgLy8gfSxcbiAgICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICAgIFtcbiAgICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgXSlcbiAgfVxuICAvLyBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gIC8vICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgLy8gICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgLy8gICAgIC8vIH0sXG4gIC8vICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gIC8vICAgICBbXG4gIC8vICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICBdfVxuICAvLyAgIF0pXG4gIC8vIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgLy8ga2V5ID0ge2luZGV4fVxuICAgICAgICAgICAgICBpZCA9ICdkYXRlJ1xuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5kYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkID0gJ3N0YXJ0VGltZSdcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIGlkID0gJ3NjaGVkdWxlSUQnXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGFyaXR5X2NoYXJpdHlJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hhcml0eSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5jaGFyaXR5X2NoYXJpdHlJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSAnc2NoZWR1bGVJRCdcbiAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9zY2hlZHVsZUlEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2hlZHVsZSBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5wYXJlbnRfc2NoZWR1bGVJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSAndm9sdW50ZWVySUQnXG4gICAgICAgICAgICAgIG5hbWU9XCJ2b2x1bnRlZXJfdXNlcklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWb2x1bnRlZXIgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQudm9sdW50ZWVyX3VzZXJJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgaWQgPSAnYmVuZWZpY2lhcnlJRCdcbiAgICAgICAgICAgICAgbmFtZT1cImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkJlbmVmaWNpYXJ5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIGlkID0gXCJmb29kSURcIlxuICAgICAgICAgICAgICBuYW1lPVwiRm9vZF9CYXNrZXRJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9vZCBJRFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW5wdXRGaWVsZC5Gb29kX0Jhc2tldElEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAvLyBvbkNsaWNrPXsoKT0+IHRoaXMucG9zdERhdGEoaGFyZGNvZGUpfVxuICAgICAgPlBvc3Q8L0J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9