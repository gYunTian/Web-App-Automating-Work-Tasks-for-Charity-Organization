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
    deliverStatus: "NotCompleted",
    parent_scheduleID: '',
    volunteer_userID: '',
    beneficiary_beneficiaryID: '',
    Food_BasketID: ''
  }]),
      inputFields = _useState[0],
      setInputFields = _useState[1]; //{ 
  //  date: '', 
  //  startTime: '' , 
  //  charity_charityID:'', 
  //  Details: 
  //  [
  //    {
  //      deliverStatus: "NotCompleted", 
  //      parent_scheduleID: '', 
  //      volunteer_userID: '', 
  //      beneficiary_beneficiaryID: '',
  //      Food_BasketID: ''
  //    }
  //  ]
  //},
  //]  
  //);
  //const test = { 
  //  date : inputFields.data,
  //  startTime : ,
  //  charity_charityID : ,
  //  Details: [
  //      {
  //          deliverStatus: ,
  //          parent_scheduleID: ,
  //          volunteer_userID : ,
  //          beneficiary_beneficiaryID : ,
  //          Food_BasketID: inputFields.Food_BasketID,
  //      }
  //  ]
  //} 
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


  var hardcode = {
    "date": date,
    "startTime": inputFields.startTime,
    "charity_charityID": inputFields.charity_charityID,
    "Details": [{
      "deliverStatus": "NotCompleted",
      "parent_scheduleID": inputFields.parent_scheduleID,
      "volunteer_userID": inputFields.volunteer_userID,
      "beneficiary_beneficiaryID": inputFields.beneficiary_beneficiaryID,
      "Food_BasketID": inputFields.Food_BasketID
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

              console.log("InputFields", hardcode);
              _context.next = 4;
              return fetch("https://cors-anywhere.herokuapp.com/https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Schedule", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(hardcode)
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
  }; // const handleAddFields = () => {
  //   setInputFields([...inputFields, 
  //     {
  //     date: '', 
  //     startTime: '' , 
  //     charity_charityID:'', 
  //     deliverStatus: "NotCompleted", 
  //     parent_scheduleID: '', 
  //     volunteer_userID: '', 
  //     beneficiary_beneficiaryID: '',
  //     Food_BasketID: ""
  //     }
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
      lineNumber: 202,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
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
        lineNumber: 207,
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
        lineNumber: 214,
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
        lineNumber: 221,
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
        lineNumber: 228,
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
        lineNumber: 235,
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
        lineNumber: 242,
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
        lineNumber: 249,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
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
      lineNumber: 269,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "j8DN2O1G8ULoyISY79YLLTTaVNs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsImNoYXJpdHlfY2hhcml0eUlEIiwiZGVsaXZlclN0YXR1cyIsInBhcmVudF9zY2hlZHVsZUlEIiwidm9sdW50ZWVyX3VzZXJJRCIsImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQiLCJGb29kX0Jhc2tldElEIiwiaW5wdXRGaWVsZHMiLCJzZXRJbnB1dEZpZWxkcyIsImhhcmRjb2RlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJpbmRleCIsImV2ZW50IiwidmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQWRkRmllbGRzIiwiRGV0YWlscyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSiw4QkFBd0I7QUFDdEJDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURjO0FBRHBCLEtBRGlDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkYsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFOK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIsQyxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFHZCxNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7O0FBSGMsa0JBSXdCUyxzREFBUSxDQUFDLENBQzdDO0FBQ0lDLFFBQUksRUFBRSxFQURWO0FBRUlDLGFBQVMsRUFBRSxFQUZmO0FBR0lDLHFCQUFpQixFQUFDLEVBSHRCO0FBSUlDLGlCQUFhLEVBQUUsY0FKbkI7QUFLSUMscUJBQWlCLEVBQUUsRUFMdkI7QUFNSUMsb0JBQWdCLEVBQUUsRUFOdEI7QUFPSUMsNkJBQXlCLEVBQUUsRUFQL0I7QUFRSUMsaUJBQWEsRUFBRTtBQVJuQixHQUQ2QyxDQUFELENBSmhDO0FBQUEsTUFJUEMsV0FKTztBQUFBLE1BSU1DLGNBSk4saUJBZ0JoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2YsWUFBU1YsSUFETTtBQUVmLGlCQUFhUSxXQUFXLENBQUNQLFNBRlY7QUFHZix5QkFBc0JPLFdBQVcsQ0FBQ04saUJBSG5CO0FBSWYsZUFBVyxDQUNQO0FBQ0ksdUJBQWlCLGNBRHJCO0FBRUksMkJBQXFCTSxXQUFXLENBQUNKLGlCQUZyQztBQUdJLDBCQUFxQkksV0FBVyxDQUFDSCxnQkFIckM7QUFJSSxtQ0FBOEJHLFdBQVcsQ0FBQ0YseUJBSjlDO0FBS0ksdUJBQWlCRSxXQUFXLENBQUNEO0FBTGpDLEtBRE87QUFKSSxHQUFqQixDQXpFYyxDQXVGZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbEdjLFdBbUdDSSxZQW5HRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTUFtR2QsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGLEdBREYsQ0FFRTs7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJMLFFBQTNCO0FBSEY7QUFBQSxxQkFLdUJNLEtBQUssQ0FBRSwrR0FBRixFQUFtSDtBQUN6SUMsc0JBQU0sRUFBRSxNQURpSTtBQUV6SUMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZnSTtBQUl2SUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLFFBQWY7QUFKaUksZUFBbkgsQ0FMNUI7O0FBQUE7QUFLUVksb0JBTFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuR2M7QUFBQTtBQUFBOztBQWtIYjs7QUFFRCxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxQyxRQUFNQyxNQUFNLEdBQUcsNkZBQUlsQixXQUFQLENBQVo7O0FBQ0FrQixVQUFNLENBQUNGLEtBQUQsQ0FBTixDQUFjQyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFBM0IsSUFBbUNILEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxLQUFoRDtBQUNBcEIsa0JBQWMsQ0FBQ2lCLE1BQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCckIsa0JBQWMsd0dBQUtELFdBQUwsSUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQ1IsVUFBSSxFQUFFLEVBQVA7QUFBV0MsZUFBUyxFQUFFLEVBQXRCO0FBQTJCQyx1QkFBaUIsRUFBQyxFQUE3QztBQUFpRDZCLGFBQU8sRUFDeEQsQ0FDRTtBQUFDNUIscUJBQWEsRUFBRSxjQUFoQjtBQUNBQyx5QkFBaUIsRUFBRSxFQURuQjtBQUVBQyx3QkFBZ0IsRUFBRSxFQUZsQjtBQUdBQyxpQ0FBeUIsRUFBRSxFQUgzQjtBQUlBQyxxQkFBYSxFQUFFO0FBSmYsT0FERjtBQURBLEtBTlksR0FBZDtBQWdCRCxHQWpCRCxDQTFIYyxDQTRJZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNeUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDUixLQUFELEVBQVc7QUFDcEMsUUFBTUUsTUFBTSxnR0FBUWxCLFdBQVIsQ0FBWjs7QUFDQWtCLFVBQU0sQ0FBQ08sTUFBUCxDQUFjVCxLQUFkLEVBQXFCLENBQXJCO0FBQ0FmLGtCQUFjLENBQUNpQixNQUFELENBQWQ7QUFDRCxHQUpEOztBQUtBLFNBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBTSxhQUFTLEVBQUk1QixPQUFPLENBQUNMLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ2UsV0FBVyxDQUFDMEIsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWFYLEtBQWI7QUFBQSxXQUNiO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1FQUFEO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLGFBQU8sRUFBQyxRQUhWO0FBSUUsV0FBSyxFQUFFVyxVQUFVLENBQUNuQyxJQUpwQjtBQUtFLGNBQVEsRUFBRSxrQkFBQXlCLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUUsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxhQUFPLEVBQUMsUUFIVjtBQUlFLFdBQUssRUFBRVUsVUFBVSxDQUFDbEMsU0FKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUF3QixLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQWVFLE1BQUMsbUVBQUQ7QUFDRSxVQUFJLEVBQUMsbUJBRFA7QUFFRSxXQUFLLEVBQUMsWUFGUjtBQUdFLGFBQU8sRUFBQyxRQUhWO0FBSUUsV0FBSyxFQUFFVSxVQUFVLENBQUNqQyxpQkFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUF1QixLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFmRixFQXNCRSxNQUFDLG1FQUFEO0FBQ0UsVUFBSSxFQUFDLG1CQURQO0FBRUUsV0FBSyxFQUFDLGFBRlI7QUFHRSxhQUFPLEVBQUMsUUFIVjtBQUlFLFdBQUssRUFBRVUsVUFBVSxDQUFDL0IsaUJBSnBCO0FBS0UsY0FBUSxFQUFFLGtCQUFBcUIsS0FBSztBQUFBLGVBQUlGLGlCQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBckI7QUFBQSxPQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEJGLEVBNkJFLE1BQUMsbUVBQUQ7QUFDRSxVQUFJLEVBQUMsa0JBRFA7QUFFRSxXQUFLLEVBQUMsY0FGUjtBQUdFLGFBQU8sRUFBQyxRQUhWO0FBSUUsV0FBSyxFQUFFVSxVQUFVLENBQUM5QixnQkFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFvQixLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE3QkYsRUFvQ0UsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQywyQkFEUDtBQUVFLFdBQUssRUFBQyxnQkFGUjtBQUdFLGFBQU8sRUFBQyxRQUhWO0FBSUUsV0FBSyxFQUFFVSxVQUFVLENBQUM3Qix5QkFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFtQixLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwQ0YsRUEyQ0UsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxlQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFPLEVBQUMsUUFIVjtBQUlFLFdBQUssRUFBRVUsVUFBVSxDQUFDNUIsYUFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFrQixLQUFLO0FBQUEsZUFBSUYsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFyQjtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQ0YsRUFtREUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1PLGtCQUFrQixDQUFDUixLQUFELENBQXhCO0FBQUEsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FuREYsRUF3REUsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1NLGVBQWUsRUFBckI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQXhERixDQURhO0FBQUEsR0FBaEIsQ0FERCxFQWlFQSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFaEMsT0FBTyxDQUFDRixNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxXQUFPLEVBQUVlLFlBTlgsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRUEsQ0FGRixDQURGO0FBbUZEOztHQWxQUWQsSTtVQUdTUCxTOzs7S0FIVE8sSTtBQW9QTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NoZWR1bGVfY3JlYXRlLjcxYWJkNTliNWE5OWUyNTg0ODU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuLy8gY2xhc3MgUG9zdHQgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgIGFzeW5jIHBvc3REYXRhKGUpIHtcbi8vICAgICB0cnl7XG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbi8vICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4vLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZSlcbi8vICAgICAgICAgfSk7XG4gICAgICBcbi8vICAgICB9IGNhdGNoKGUpe1xuLy8gICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgXG4gICAgICAgIGRhdGU6ICcnLCBcbiAgICAgICAgc3RhcnRUaW1lOiAnJyAsIFxuICAgICAgICBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gICAgICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAgICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuICAgICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gICAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAgICAgICBGb29kX0Jhc2tldElEOiAnJ1xuICAgICAgfVxuICAgIF0pICBcbi8veyBcbi8vICBkYXRlOiAnJywgXG4vLyAgc3RhcnRUaW1lOiAnJyAsIFxuLy8gIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbi8vICBEZXRhaWxzOiBcbi8vICBbXG4vLyAgICB7XG4vLyAgICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuLy8gICAgICBwYXJlbnRfc2NoZWR1bGVJRDogJycsIFxuLy8gICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4vLyAgICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuLy8gICAgICBGb29kX0Jhc2tldElEOiAnJ1xuLy8gICAgfVxuLy8gIF1cbi8vfSxcbi8vXSAgXG4vLyk7XG4vL2NvbnN0IHRlc3QgPSB7IFxuLy8gIGRhdGUgOiBpbnB1dEZpZWxkcy5kYXRhLFxuLy8gIHN0YXJ0VGltZSA6ICxcbi8vICBjaGFyaXR5X2NoYXJpdHlJRCA6ICxcbi8vICBEZXRhaWxzOiBbXG4vLyAgICAgIHtcbi8vICAgICAgICAgIGRlbGl2ZXJTdGF0dXM6ICxcbi8vICAgICAgICAgIHBhcmVudF9zY2hlZHVsZUlEOiAsXG4vLyAgICAgICAgICB2b2x1bnRlZXJfdXNlcklEIDogLFxuLy8gICAgICAgICAgYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRCA6ICxcbi8vICAgICAgICAgIEZvb2RfQmFza2V0SUQ6IGlucHV0RmllbGRzLkZvb2RfQmFza2V0SUQsXG4vLyAgICAgIH1cbi8vICBdXG4vL30gXG4gIC8vIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAvLyAgIHsgZGF0ZTogJycsIFxuICAvLyAgICAgc3RhcnRUaW1lOiAnJyAsIGNoYXJpdHlfY2hhcml0eUlEOicnLCBcbiAgLy8gICAgIGRlbGl2ZXJTdGF0dXM6IFwiTm90Q29tcGxldGVkXCIsIFxuICAvLyAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgLy8gICAgIHZvbHVudGVlcl91c2VySUQ6ICcnLCBcbiAgLy8gICAgIGJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUQ6ICcnLFxuICAvLyAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAvLyAgIH0sXG4gIC8vIF0pO1xuXG4gIC8vIGNvbnN0IGhhcmRjb2RlID0geyBcbiAgLy8gICBcImRhdGVcIiA6IFwiMjAyMC0xMS0wOFwiLFxuICAvLyAgIFwic3RhcnRUaW1lXCI6IFwiOTowMCBBTVwiLFxuICAvLyAgIFwiY2hhcml0eV9jaGFyaXR5SURcIiA6IFwiY2hhcml0eTAwMVwiLFxuICAvLyAgIFwiRGV0YWlsc1wiOiBbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICAgIFwiZGVsaXZlclN0YXR1c1wiOiBcIk5vdENvbXBsZXRlZFwiLFxuICAvLyAgICAgICAgICAgXCJwYXJlbnRfc2NoZWR1bGVJRFwiOiBcIm5ld3Rlc3RcIixcbiAgLy8gICAgICAgICAgIFwidm9sdW50ZWVyX3VzZXJJRFwiIDogXCJ1c2VyMDAxXCIsXG4gIC8vICAgICAgICAgICBcImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIiA6IFwiYmVuZTAwMVwiLFxuICAvLyAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IFwiMDFcIlxuICAvLyAgICAgICB9XG4gIC8vICAgXVxuICAvLyB9XG5cbiAgY29uc3QgaGFyZGNvZGUgPSB7IFxuICAgIFwiZGF0ZVwiIDogZGF0ZSxcbiAgICBcInN0YXJ0VGltZVwiOiBpbnB1dEZpZWxkcy5zdGFydFRpbWUsXG4gICAgXCJjaGFyaXR5X2NoYXJpdHlJRFwiIDogaW5wdXRGaWVsZHMuY2hhcml0eV9jaGFyaXR5SUQsXG4gICAgXCJEZXRhaWxzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJkZWxpdmVyU3RhdHVzXCI6IFwiTm90Q29tcGxldGVkXCIsXG4gICAgICAgICAgICBcInBhcmVudF9zY2hlZHVsZUlEXCI6IGlucHV0RmllbGRzLnBhcmVudF9zY2hlZHVsZUlELFxuICAgICAgICAgICAgXCJ2b2x1bnRlZXJfdXNlcklEXCIgOiBpbnB1dEZpZWxkcy52b2x1bnRlZXJfdXNlcklELFxuICAgICAgICAgICAgXCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEXCIgOiBpbnB1dEZpZWxkcy5iZW5lZmljaWFyeV9iZW5lZmljaWFyeUlELFxuICAgICAgICAgICAgXCJGb29kX0Jhc2tldElEXCI6IGlucHV0RmllbGRzLkZvb2RfQmFza2V0SURcbiAgICAgICAgfVxuICAgIF1cbiAgfVxuICAvLyBhc3luYyBmdW5jdGlvbiBwb3N0dG9yZXZpZXcoZSkge1xuICAvLyAgIGNvbnN0IHBvc3RyZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICAgIFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9zbXVjZi1kZXYtZWJzLWcxdDMtc3J2LmNmYXBwcy51czEwLmhhbmEub25kZW1hbmQuY29tL2FwaS9TY2hlZHVsZVwiLFxuICAvLyAgICAge1xuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgLy8gICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGUpLFxuICAvLyAgICAgfVxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgcG9zdHJlc3VsdCA9IGF3YWl0IHBvc3RyZXMuanNvbigpO1xuICAvLyAgIHJldHVybiBwb3N0cmVzdWx0O1xuICAvLyB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBldmVyeXRpbWUgZm9ybSBzdWJtaXNzaW9uIGlzIGRvbmVcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGhhcmRjb2RlKTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCggXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3NtdWNmLWRldi1lYnMtZzF0My1zcnYuY2ZhcHBzLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vYXBpL1NjaGVkdWxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaGFyZGNvZGUpLFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgIC8vIH0gY2F0Y2goZSl7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpbmRleCwgZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlc1tpbmRleF1bZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCBcbiAgICAgIC8vIHsgZmlyc3ROYW1lOiAnJywgXG4gICAgICAvLyBsYXN0TmFtZTogJycsIFxuICAgICAgLy8gdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgLy8gYmVuZWZpY2lhcnlfYmVuZWZpY2lhcnlJRDonJyBcbiAgICAgIC8vIH0sXG4gICAgICB7ZGF0ZTogJycsIHN0YXJ0VGltZTogJycgLCBjaGFyaXR5X2NoYXJpdHlJRDonJywgRGV0YWlsczogXG4gICAgICBbXG4gICAgICAgIHtkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgICAgICAgcGFyZW50X3NjaGVkdWxlSUQ6ICcnLCBcbiAgICAgICAgdm9sdW50ZWVyX3VzZXJJRDogJycsIFxuICAgICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgICAgICAgRm9vZF9CYXNrZXRJRDogXCJcIlxuICAgICAgICB9XG4gICAgICBdfVxuICAgIF0pXG4gIH1cbiAgLy8gY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAvLyAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgXG4gIC8vICAgICB7XG4gIC8vICAgICBkYXRlOiAnJywgXG4gIC8vICAgICBzdGFydFRpbWU6ICcnICwgXG4gIC8vICAgICBjaGFyaXR5X2NoYXJpdHlJRDonJywgXG4gIC8vICAgICBkZWxpdmVyU3RhdHVzOiBcIk5vdENvbXBsZXRlZFwiLCBcbiAgLy8gICAgIHBhcmVudF9zY2hlZHVsZUlEOiAnJywgXG4gIC8vICAgICB2b2x1bnRlZXJfdXNlcklEOiAnJywgXG4gIC8vICAgICBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJyxcbiAgLy8gICAgIEZvb2RfQmFza2V0SUQ6IFwiXCJcbiAgLy8gICAgIH1cbiAgLy8gICBdKVxuICAvLyB9XG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyAgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5yb290fT5cbiAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGlucHV0RmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmRhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGFydFRpbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IFRpbWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuc3RhcnRUaW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5kZXgsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICBuYW1lPVwiY2hhcml0eV9jaGFyaXR5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkNoYXJpdHkgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuY2hhcml0eV9jaGFyaXR5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfc2NoZWR1bGVJRFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2NoZWR1bGUgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQucGFyZW50X3NjaGVkdWxlSUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJ2b2x1bnRlZXJfdXNlcklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWb2x1bnRlZXIgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQudm9sdW50ZWVyX3VzZXJJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkJlbmVmaWNpYXJ5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJGb29kX0Jhc2tldElEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGb29kIElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLkZvb2RfQmFza2V0SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEZpZWxkcygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgIC8vIGVuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8vIG9uQ2xpY2s9eygpPT4gdGhpcy5wb3N0RGF0YShoYXJkY29kZSl9XG4gICAgICA+UG9zdDwvQnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=