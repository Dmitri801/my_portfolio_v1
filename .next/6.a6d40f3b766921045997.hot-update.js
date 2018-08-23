webpackHotUpdate(6,{

/***/ "./pages/bio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/pages/bio.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Bio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bio, _React$Component);

  function Bio() {
    _classCallCheck(this, Bio);

    return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).apply(this, arguments));
  }

  _createClass(Bio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(function (err) {
          return console.error("Service worker registration failed", err);
        });
      } else {
        console.log("Service worker not supported");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var bio = "current";
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
        bio: bio,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        id: "bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "bio-heading text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "My ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Bio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "sm-bio-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Dmitriy Sharshiner", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bio-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../static/portrait.jpg",
        alt: "Its Me",
        className: "bio-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Bio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Hey there, welcome to my page! My names Dmitriy, and I have been developing websites for around 2 years. My specializations include HTML, CSS, and various Javascript libraries and frameworks. The main technologies i'm working with currently are ReactJS, React Native, and NodeJS. My passion is to build engaging, interactive, and inspiring user interfaces, while having a ton of fun doing it. I plan to continue expanding my skills and be a part of the technologies that will shape our lives in the future. Enjoy your stay!")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "job job-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Udacity React Nanodegree"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "React Certified"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "In July of 2018 I graduated from the Udacity React Nanodegree, check out my rendition of the Would You Rather? Project", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        href: "https://would-you-rather--bydmi.herokuapp.com",
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, " ", "here"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "job job-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "DMI Web Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Freelance Development"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Over the past few months I have worked on numerous freelance projects. Check out", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        href: "https://expo.io/@dmitriy88/pet-fam",
        className: "text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, " ", "Pet Fam"), ", a native application that will help you find that special friend you were looking for \uD83D\uDC36")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "job job-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Netflix"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Customer Service"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "I'm currently working for Netflix Customer Service, and have been apart of their Technical Support Research training. I have also had the opportunity to mentor multiple new hires on my team, this has given me the experience of working on teams, and even taking up the leadership role of the team I'm on.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        id: "main-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Copyright \xA9 2018"));
    }
  }]);

  return Bio;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bio);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bio")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.a6d40f3b766921045997.hot-update.js.map