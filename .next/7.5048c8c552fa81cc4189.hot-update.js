webpackHotUpdate(7,{

/***/ "./pages/work.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("./node_modules/react-spring/dist/web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom__ = __webpack_require__("./node_modules/react-reveal/Zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade__ = __webpack_require__("./node_modules/react-reveal/Fade.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PetFam__ = __webpack_require__("./components/PetFam.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_WouldYouRather__ = __webpack_require__("./components/WouldYouRather.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_DevMuse__ = __webpack_require__("./components/DevMuse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_QuizU__ = __webpack_require__("./components/QuizU.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Portfolio__ = __webpack_require__("./components/Portfolio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Newzette__ = __webpack_require__("./components/Newzette.js");
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/pages/work.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }















var Work =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Work);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Work.__proto__ || Object.getPrototypeOf(Work)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        petFamShow: false,
        devMuseShow: false,
        portfolioShow: false,
        wouldYouRatherShow: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderPetFam", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (window.scrollY > 300) {
          _this.setState({
            petFamShow: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderDevMuse", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (window.scrollY > 700) {
          _this.setState({
            devMuseShow: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderPortfolio", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (window.scrollY > 1000) {
          _this.setState({
            portfolioShow: true
          });
        }
      }
    }), _temp));
  }

  _createClass(Work, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(function (err) {
          return console.error("Service worker registration failed", err);
        });
      } else {
        console.log("Service worker not supported");
      }

      this.setState({
        wouldYouRatherShow: true
      });
      window.addEventListener("scroll", this.renderPetFam);
      window.addEventListener("scroll", this.renderDevMuse);
      window.addEventListener("scroll", this.renderPortfolio);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          petFamShow = _state.petFamShow,
          portfolioShow = _state.portfolioShow,
          devMuseShow = _state.devMuseShow,
          wouldYouRatherShow = _state.wouldYouRatherShow;
      var work = "current";
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Header__["a" /* default */], {
        work: work,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("main", {
        id: "work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h3", {
        className: "bio-heading text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "My ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Work")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h2", {
        className: "sm-bio-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Check Out A Few Of My Projects.."), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("hr", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
        className: "projects",
        style: {
          padding: "20px"
        },
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom___default.a, {
        when: wouldYouRatherShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_WouldYouRather__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade___default.a, {
        big: true,
        when: petFamShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_PetFam__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom___default.a, {
        duration: 500,
        when: devMuseShow,
        delay: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_DevMuse__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade___default.a, {
        delay: 500,
        duration: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_QuizU__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom___default.a, {
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Newzette__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade___default.a, {
        duration: 500,
        delay: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Portfolio__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("footer", {
        id: "main-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Copyright \xA9 2018"));
    }
  }]);

  return Work;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Work);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/work")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.5048c8c552fa81cc4189.hot-update.js.map