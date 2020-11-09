webpackHotUpdate_N_E("pages/schedule_create",{

/***/ "./components/schedule/ScheduleForm.js":
/*!*********************************************!*\
  !*** ./components/schedule/ScheduleForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "/mnt/d/G1T3-frontend/client/components/schedule/ScheduleForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import React, { useContext, useState, useEffect } from "react";
// import { ScheduleListContext } from "./context/ScheduleListContext";
// const ScheduleForm = () => {
//   const { addSchedule, editItem, editSchedule } = useContext(
//     ScheduleListContext
//   );
//   const [title, setTitle] = useState("");
//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!editItem) {
//       addSchedule(title);
//       setTitle("");
//     } else {
//       editSchedule(title, editItem.id);
//     }
//   };
//   useEffect(() => {
//     if (editItem !== null) {
//       setTitle(editItem.title);
//       console.log(editItem);
//     } else {
//       setTitle("");
//     }
//   }, [editItem]);
//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input
//         onChange={handleChange}
//         value={title}
//         type="text"
//         className="task-input focus:bg-white border-transparent focus:border-gray-400"
//         placeholder="Add Title..."
//         required
//       />
//       <div className="buttons">
//         <button type="submit" className="btn add-schedule-btn hover:bg-gray-400 px-2 py-2">
//           {editItem ? "Save Schedule" : "Add Schedule"}
//         </button>
//         <button className="btn clear-btn hover:bg-gray-400 px-2 py-2">Clear</button>
//       </div>
//     </form>
//   );
// };
// export default ScheduleForm;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
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
});

function Form() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    date: '',
    startTime: '',
    volunteer_userID: '',
    beneficiary_beneficiaryID: ''
  }]),
      inputFields = _useState[0],
      setInputFields = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // prevent page reload everytime form submission is done

    console.log("InputFields", inputFields);
  };

  var handleChangeInput = function handleChangeInput(index, event) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields);

    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  var handleAddFields = function handleAddFields() {
    setInputFields([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields), [{
      firstName: '',
      lastName: '',
      volunteer_userID: '',
      beneficiary_beneficiaryID: ''
    }]));
  };

  var handleRemoveFields = function handleRemoveFields(index) {
    var values = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields);

    values.splice(index, 1);
    setInputFields(values);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, inputFields.map(function (inputField, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 115,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 122,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 129,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 136,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        return handleRemoveFields(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        return handleAddFields();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    })));
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit" // endIcon={<Icon>send</Icon>}
    ,
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, "Post")));
}

_s(Form, "bzwBJ8kan7i98/5YMXRMeovjWp4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY2hlZHVsZS9TY2hlZHVsZUZvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b24iLCJGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZGF0ZSIsInN0YXJ0VGltZSIsInZvbHVudGVlcl91c2VySUQiLCJiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEIiwiaW5wdXRGaWVsZHMiLCJzZXRJbnB1dEZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImluZGV4IiwiZXZlbnQiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInNwbGljZSIsIm1hcCIsImlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKLDhCQUF3QjtBQUN0QkMsY0FBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRGM7QUFEcEIsS0FEaUM7QUFNdkNDLFVBQU0sRUFBRTtBQUNORixZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFERjtBQU4rQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFjQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBR2QsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCOztBQUhjLGtCQUl3QlMsc0RBQVEsQ0FBQyxDQUM3QztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxhQUFTLEVBQUUsRUFBdkI7QUFBNEJDLG9CQUFnQixFQUFFLEVBQTlDO0FBQWtEQyw2QkFBeUIsRUFBRTtBQUE3RSxHQUQ2QyxDQUFELENBSmhDO0FBQUEsTUFJUEMsV0FKTztBQUFBLE1BSU1DLGNBSk47O0FBUWQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUYsR0FEMEIsQ0FFMUI7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJOLFdBQTNCO0FBRUQsR0FMRDs7QUFPQSxNQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxQyxRQUFNQyxNQUFNLEdBQUcsNkZBQUlWLFdBQVAsQ0FBWjs7QUFDQVUsVUFBTSxDQUFDRixLQUFELENBQU4sQ0FBY0MsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBQTNCLElBQW1DSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUUsS0FBaEQ7QUFDQVosa0JBQWMsQ0FBQ1MsTUFBRCxDQUFkO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJiLGtCQUFjLHdHQUFLRCxXQUFMLElBQWtCO0FBQUVlLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxjQUFRLEVBQUUsRUFBM0I7QUFBK0JsQixzQkFBZ0IsRUFBRSxFQUFqRDtBQUFxREMsK0JBQXlCLEVBQUM7QUFBL0UsS0FBbEIsR0FBZDtBQUNELEdBRkQ7O0FBSUEsTUFBTWtCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1QsS0FBRCxFQUFXO0FBQ3BDLFFBQU1FLE1BQU0sZ0dBQVFWLFdBQVIsQ0FBWjs7QUFDQVUsVUFBTSxDQUFDUSxNQUFQLENBQWNWLEtBQWQsRUFBcUIsQ0FBckI7QUFDQVAsa0JBQWMsQ0FBQ1MsTUFBRCxDQUFkO0FBQ0QsR0FKRDs7QUFLQSxTQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQU0sYUFBUyxFQUFJaEIsT0FBTyxDQUFDTCxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NXLFdBQVcsQ0FBQ21CLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhWixLQUFiO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxhQUFPLEVBQUMsUUFIVjtBQUlFLFdBQUssRUFBRVksVUFBVSxDQUFDeEIsSUFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFhLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUUsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFlBRlI7QUFHRSxhQUFPLEVBQUMsUUFIVjtBQUlFLFdBQUssRUFBRVcsVUFBVSxDQUFDdkIsU0FKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFZLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBZUUsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxrQkFEUDtBQUVFLFdBQUssRUFBQyxjQUZSO0FBR0UsYUFBTyxFQUFDLFFBSFY7QUFJRSxXQUFLLEVBQUVXLFVBQVUsQ0FBQ3RCLGdCQUpwQjtBQUtFLGNBQVEsRUFBRSxrQkFBQVcsS0FBSztBQUFBLGVBQUlGLGlCQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBckI7QUFBQSxPQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZkYsRUFzQkUsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQywyQkFEUDtBQUVFLFdBQUssRUFBQyxnQkFGUjtBQUdFLGFBQU8sRUFBQyxRQUhWO0FBSUUsV0FBSyxFQUFFVyxVQUFVLENBQUNyQix5QkFKcEI7QUFLRSxjQUFRLEVBQUUsa0JBQUFVLEtBQUs7QUFBQSxlQUFJRixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQXJCO0FBQUEsT0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXRCRixFQTZCRSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTVEsa0JBQWtCLENBQUNULEtBQUQsQ0FBeEI7QUFBQSxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQTdCRixFQWtDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTU0sZUFBZSxFQUFyQjtBQUFBLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBbENGLENBRGE7QUFBQSxHQUFoQixDQURELEVBMkNBLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVwQixPQUFPLENBQUNGLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFFBQUksRUFBQyxRQUpQLENBS0U7QUFMRjtBQU1FLFdBQU8sRUFBRVUsWUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NBLENBRkYsQ0FERjtBQTRERDs7R0ExRlFULEk7VUFHU1AsUzs7O0tBSFRPLEk7QUE0Rk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NjaGVkdWxlX2NyZWF0ZS5kMmExOWMwZjdiMTU0NmZiYWIwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFNjaGVkdWxlTGlzdENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L1NjaGVkdWxlTGlzdENvbnRleHRcIjtcblxuLy8gY29uc3QgU2NoZWR1bGVGb3JtID0gKCkgPT4ge1xuLy8gICBjb25zdCB7IGFkZFNjaGVkdWxlLCBlZGl0SXRlbSwgZWRpdFNjaGVkdWxlIH0gPSB1c2VDb250ZXh0KFxuLy8gICAgIFNjaGVkdWxlTGlzdENvbnRleHRcbi8vICAgKTtcbi8vICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuLy8gICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuLy8gICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgfTtcbi8vICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgaWYgKCFlZGl0SXRlbSkge1xuLy8gICAgICAgYWRkU2NoZWR1bGUodGl0bGUpO1xuLy8gICAgICAgc2V0VGl0bGUoXCJcIik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGVkaXRTY2hlZHVsZSh0aXRsZSwgZWRpdEl0ZW0uaWQpO1xuLy8gICAgIH1cbi8vICAgfTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGlmIChlZGl0SXRlbSAhPT0gbnVsbCkge1xuLy8gICAgICAgc2V0VGl0bGUoZWRpdEl0ZW0udGl0bGUpO1xuLy8gICAgICAgY29uc29sZS5sb2coZWRpdEl0ZW0pO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBzZXRUaXRsZShcIlwiKTtcbi8vICAgICB9XG4vLyAgIH0sIFtlZGl0SXRlbV0pO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm1cIj5cbi8vICAgICAgIDxpbnB1dFxuLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICB2YWx1ZT17dGl0bGV9XG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwidGFzay1pbnB1dCBmb2N1czpiZy13aGl0ZSBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLWdyYXktNDAwXCJcbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgVGl0bGUuLi5cIlxuLy8gICAgICAgICByZXF1aXJlZFxuLy8gICAgICAgLz5cblxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4vLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBhZGQtc2NoZWR1bGUtYnRuIGhvdmVyOmJnLWdyYXktNDAwIHB4LTIgcHktMlwiPlxuLy8gICAgICAgICAgIHtlZGl0SXRlbSA/IFwiU2F2ZSBTY2hlZHVsZVwiIDogXCJBZGQgU2NoZWR1bGVcIn1cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGNsZWFyLWJ0biBob3ZlcjpiZy1ncmF5LTQwMCBweC0yIHB5LTJcIj5DbGVhcjwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG5cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBTY2hlZHVsZUZvcm07XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxuXG59KSlcblxuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gICAgeyBkYXRlOiAnJywgc3RhcnRUaW1lOiAnJyAsIHZvbHVudGVlcl91c2VySUQ6ICcnLCBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOiAnJ30sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgZXZlcnl0aW1lIGZvcm0gc3VibWlzc2lvbiBpcyBkb25lXG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXNbaW5kZXhdW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgeyBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycsIHZvbHVudGVlcl91c2VySUQ6ICcnLCBiZW5lZmljaWFyeV9iZW5lZmljaWFyeUlEOicnIH1dKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnJvb3R9PlxuICAgICAge2lucHV0RmllbGRzLm1hcCgoaW5wdXRGaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VGltZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgVGltZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5zdGFydFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgIG5hbWU9XCJ2b2x1bnRlZXJfdXNlcklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJWb2x1bnRlZXIgSURcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQudm9sdW50ZWVyX3VzZXJJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGluZGV4LCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgbmFtZT1cImJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkJlbmVmaWNpYXJ5IElEXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmJlbmVmaWNpYXJ5X2JlbmVmaWNpYXJ5SUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbmRleCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRGaWVsZHMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgPlBvc3Q8L0J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9