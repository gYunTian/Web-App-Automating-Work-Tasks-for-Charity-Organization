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
  }, __jsx("div", {
    key: index,
    __self: this,
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "startTime",
    label: "Start Time",
    variant: "filled" // value={inputField.startTime}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "charity_charityID",
    label: "Charity ID",
    variant: "filled" // value={inputField.charity_charityID}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "parent_scheduleID",
    label: "Schedule ID",
    variant: "filled" // value={inputField.parent_scheduleID}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "volunteer_userID",
    label: "Volunteer ID",
    variant: "filled" // value={inputField.volunteer_userID}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "beneficiary_beneficiaryID",
    label: "Beneficiary ID",
    variant: "filled" // value={inputField.beneficiary_beneficiaryID}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Food_BasketID",
    label: "Food ID",
    variant: "filled" // value={inputField.Food_BasketID}
    ,
    onChange: function onChange(event) {
      return handleChangeInput(index, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleRemoveFields(index);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleAddFields();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHNTdGFydFRpbWUiLCJzZXRJbnB1dEZpZWxkc1N0YXJ0VGltZSIsImlucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQiLCJzZXRJbnB1dEZpZWxkc0NoYXJpdHlfY2hhcml0eUlEIiwiaW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRCIsInNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQiLCJpbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJzZXRJbnB1dEZpZWxkc1ZvbHVudGVlcl91c2VySUQiLCJpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJzZXRJbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJpbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SUQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRGaWVsZHMiLCJkYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dEZpZWxkc2RhdGUiLCJpbnB1dEZpZWxkc1RpbWUiLCJyZXN1bHQiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInNldElucHV0RmllbGRzZGF0ZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJzdGFydFRpbWUiLCJjaGFyaXR5X2NoYXJpdHlJRCIsIkRldGFpbHMiLCJkZWxpdmVyU3RhdHVzIiwicGFyZW50X3NjaGVkdWxlSUQiLCJ2b2x1bnRlZXJfdXNlcklEIiwiYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCIsIkZvb2RfQmFza2V0SUQiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSiw4QkFBd0I7QUFDdEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURjO0FBRHBCLEtBRGlDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkYsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFOK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIsQyxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFHZCxNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekIsQ0FIYyxDQUlkOztBQUpjLGtCQU0wQ1Msc0RBQVEsQ0FBQyxJQUFELENBTmxEO0FBQUEsTUFNUEMsb0JBTk87QUFBQSxNQU1lQyx1QkFOZjs7QUFBQSxtQkFPMERGLHNEQUFRLENBQUMsSUFBRCxDQVBsRTtBQUFBLE1BT1BHLDRCQVBPO0FBQUEsTUFPdUJDLCtCQVB2Qjs7QUFBQSxtQkFRMERKLHNEQUFRLENBQUMsSUFBRCxDQVJsRTtBQUFBLE1BUVBLLDRCQVJPO0FBQUEsTUFRdUJDLCtCQVJ2Qjs7QUFBQSxtQkFTd0ROLHNEQUFRLENBQUMsSUFBRCxDQVRoRTtBQUFBLE1BU1BPLDJCQVRPO0FBQUEsTUFTc0JDLDhCQVR0Qjs7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RixDQUZKLEVBbUVBLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVyQyxPQUFPLENBQUNGLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFFBQUksRUFBQyxRQUpQLENBS0U7QUFMRjtBQU1FLFdBQU8sRUFBRWdCLFlBTlgsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuRUEsQ0FGRixDQURGO0FBcUZEOztHQXhPUWYsSTtVQUdTUCxTOzs7S0FIVE8sSTtBQTBPTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NoZWR1bGVfY3JlYXRlLjA3MDE2MzBiM2EyOTUxNjcxMDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuLy8gY2xhc3MgUG9zdHQgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgIGFzeW5jIHBvc3REYXRhKGUpIHtcbi8vICAgICB0cnl7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbi8vICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4vLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbi8vICAgICAgICAgfSk7XG4gICAgICBcbi8vICAgICB9IGNhdGNoKGUpe1xuLy8gICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkc2RhdGUsIHNldElucHV0RmllbGRzZGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpbnB1dEZpZWxkc1N0YXJ0VGltZSwgc2V0SW5wdXRGaWVsZHNTdGFydFRpbWVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SUQsIHNldElucHV0RmllbGRzQ2hhcml0eV9jaGFyaXR5SURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSUQsIHNldElucHV0RmllbGRzUGFyZW50X3NjaGVkdWxlSURdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0RmllbGRzVm9sdW50ZWVyX3VzZXJJRCwgc2V0SW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklEXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dEZpZWxkc0JlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQsIHNldElucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5wdXRGaWVsZHNGb29kX0Jhc2tldElELCBzZXRJbnB1dEZpZWxkc0Zvb2RfQmFza2V0SURdID0gdXNlU3RhdGUobnVsbClcblxuICAgIFxuICAvLyBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7IFwiZGF0ZVwiOiAnJywgXG4gIC8vICAgc3RhcnRUaW1lOiAnJyAsIFxuICAvLyAgIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAvLyAgIC8vIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICBGb29kX0Jhc2tldElEOiAnJ1xuICAvLyAgIH0sXG4gIC8vIF0pO1xuICAvLyBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgLy8gICB7IGRhdGU6ICcnLCBcbiAgLy8gICAgIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gIC8vICAgICBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICB9LFxuICAvLyBdKTtcblxuXG4gIC8vIGNvbnN0IGhhcmRjb2RlID0geyBcbiAgLy8gICBcImRhdGVcIiA6IFwiMjAyMC0xMS0wOFwiLFxuICAvLyAgIFwic3RhcnRUaW1lXCI6IFwiOTowMCBBTVwiLFxuICAvLyAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAvLyAgIFwiRGV0YWlsc1wiOiBbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAvLyAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgLy8gICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gIC8vICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAvLyAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAvLyAgICAgICB9XG4gIC8vICAgXVxuICAvLyB9XG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHBvc3R0b3JldmlldyhlKSB7XG4gIC8vICAgY29uc3QgcG9zdHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgICAgXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsXG4gIC8vICAgICB7XG4gIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJ1xuICAvLyAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSksXG4gIC8vICAgICB9XG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBwb3N0cmVzdWx0ID0gYXdhaXQgcG9zdHJlcy5qc29uKCk7XG4gIC8vICAgcmV0dXJuIHBvc3RyZXN1bHQ7XG4gIC8vIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIGV2ZXJ5dGltZSBmb3JtIHN1Ym1pc3Npb24gaXMgZG9uZVxuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICAgIGNvbnNvbGUubG9nKFwidHN0XCIsIGlucHV0RmllbGRzLmRhdGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCBcImh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vc211Y2YtZGV2LWVicy1nMXQzLXNydi5jZmFwcHMudXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9hcGkvU2NoZWR1bGVcIiwge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcImRhdGVcIiA6IGlucHV0RmllbGRzZGF0ZSxcbiAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogaW5wdXRGaWVsZHNUaW1lLFxuICAgICAgICAgICAgICBcImNoYXJpdHlfY2hhcml0eUlEXCIgOiBcImNoYXJpdHkwMDFcIixcbiAgICAgICAgICAgICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgICAgICAgICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gICAgICAgICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAgICAgICAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgLy8gfSBjYXRjaChlKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gfVxuICAgIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpbmRleCwgZXZlbnQpID0+IHtcbiAgICAvLyBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIC8vIHZhbHVlc1tpbmRleF1bZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnZGF0ZScpIHNldElucHV0RmllbGRzZGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3N0YXJ0VGltZScpIHNldElucHV0RmllbGRzU3RhcnRUaW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnY2hhcml0eUlEJykgc2V0SW5wdXRGaWVsZHNDaGFyaXR5X2NoYXJpdHlJRChldmVudC50YXJnZXQudmFsdWUpOyAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09ICdzY2hlZHVsZUlEJykgc2V0SW5wdXRGaWVsZHNQYXJlbnRfc2NoZWR1bGVJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ3ZvbHVudGVlcklEJykgc2V0SW5wdXRGaWVsZHNWb2x1bnRlZXJfdXNlcklEKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSAnYmVuZWZpY2lhcnlJRCcpIHNldElucHV0RmllbGRzQmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2Zvb2RJRCcpIHNldElucHV0RmllbGRzRm9vZF9CYXNrZXRJRChldmVudC50YXJnZXQudmFsdWUpO1xuXG5cbiAgICBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIFxuICAgICAgLy8geyBmaXJzdE5hbWU6ICcnLCBcbiAgICAgIC8vIGxhc3ROYW1lOiAnJywgXG4gICAgICAvLyB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAvLyBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIFxuICAgICAgLy8gfSxcbiAgICAgIHtkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBEZXRhaWxzOiBcbiAgICAgIFtcbiAgICAgICAge2RlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgXSlcbiAgfVxuICAvLyBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gIC8vICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgLy8gICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gIC8vICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAvLyAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgLy8gICAgIC8vIH0sXG4gIC8vICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gIC8vICAgICBbXG4gIC8vICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAvLyAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICBdfVxuICAvLyAgIF0pXG4gIC8vIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAgey8qIHtpbnB1dEZpZWxkcy5tYXAoKGlucHV0RmllbGQsIGluZGV4KSA9PiAoICovfVxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICAvLyBrZXkgPSB7aW5kZXh9XG4gICAgICAgICAgICAgIGlkID0gJ2RhdGUnXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmRhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGFydFRpbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IFRpbWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQuc3RhcnRUaW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiY2hhcml0eV9jaGFyaXR5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkNoYXJpdHkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQuY2hhcml0eV9jaGFyaXR5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfc2NoZWR1bGVJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2NoZWR1bGUgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQucGFyZW50X3NjaGVkdWxlSUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJ2b2x1bnRlZXJfdXNlcklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWb2x1bnRlZXIgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgLy8gdmFsdWU9e2lucHV0RmllbGQudm9sdW50ZWVyX3VzZXJJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkJlbmVmaWNpYXJ5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLmJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJGb29kX0Jhc2tldElEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGb29kIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnB1dEZpZWxkLkZvb2RfQmFza2V0SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEZpZWxkcygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgey8qICkpfSAqL31cbiAgICAgIDxCdXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgLy8gZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgLy8gb25DbGljaz17KCk9PiB0aGlzLnBvc3REYXRhKGhhcmRjb2RlKX1cbiAgICAgID5Qb3N0PC9CdXR0b24+XG5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==