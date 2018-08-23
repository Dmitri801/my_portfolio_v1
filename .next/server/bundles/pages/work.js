module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DevMuse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/DevMuse.js";



var DevMuse = function DevMuse() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "DevMuse"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "DevMuse is a social network designed for developers in the music industry. The site was developed using the MERN stack, with MongoDb as the database, NodeJS and Express handling the API/Routing on the backend, and React/Redux on the front end. The API is 100% scalable, and can compete with the big \"social guys\", if enough people fell in love with it of course.."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "ReactJS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Redux"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "MongoDb"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "NodeJS/Express"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Asynchronous Javascript w/ Axios"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "DevMuse Page",
    target: "_blank",
    href: "https://devmuse.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img",
    src: "../static/devmuse.jpg",
    alt: "WYR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "DevMuse Page",
    target: "_blank",
    href: "https://devmuse.herokuapp.com/",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), " DevMuse"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "DevMuse github Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/DevMuse",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), " GitHub"))));
};

/* harmony default export */ __webpack_exports__["a"] = (DevMuse);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        showMenu: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            showMenu: !prevState.showMenu
          };
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var showMenu = this.state.showMenu;
      var _props = this.props,
          index = _props.index,
          showCase = _props.showCase,
          bio = _props.bio,
          work = _props.work,
          contact = _props.contact;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, index || showMenu ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "downloadResume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "aria-label": "download resume",
        href: "/file/download",
        className: "download-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Download Resume")) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: showMenu ? "menu-btn close" : "menu-btn",
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: showMenu ? "menu show" : "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: showMenu ? "menu-branding show" : "menu-branding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, !bio && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "portrait",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: showMenu ? "menu-nav show" : "menu-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("nav-item", {
          show: showMenu,
          current: index
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "aria-label": "Home",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("nav-item", {
          show: showMenu,
          current: bio
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "aria-label": "Bio",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Bio"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("nav-item", {
          show: showMenu,
          current: work
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "aria-label": "Work",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Work"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("nav-item", {
          show: showMenu,
          current: contact
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "aria-label": "Contact",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Get In Touch")))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Newzette.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/Newzette.js";



var Newzette = function Newzette() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Newzette"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Newzette is the epitome of a single page application, offering 4 different views all on one route. I built this project in around 3 hours, and it lets you search the NewsAPI in a fun, quick way so you can get your daily news. Choose from searching top headlines, or random queries from one of the top news APIs in the world!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "NextJS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "React-Reveal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Sass"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "NodeJS/Express"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Asynchronous Javascript w/ isomorphic unfetch"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Newzette Page",
    target: "_blank",
    href: "https://newzette.now.sh/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img",
    src: "../static/newzette.png",
    alt: "NEWZ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Newzette Page",
    target: "_blank",
    href: "https://newzette.now.sh",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), " Newzette"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Newzette github Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/newzette",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), " GitHub"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Newzette);

/***/ }),

/***/ "./components/PetFam.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_spring__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/PetFam.js";




var PetFam = function PetFam(_ref) {
  var visible = _ref.visible;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Pet Fam Page",
    target: "_blank",
    href: "https://expo.io/@dmitriy88/pet-fam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img-petfam",
    src: "../static/petfam1.jpg",
    alt: "PetFam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Pet Fam Page",
    target: "_blank",
    href: "https://expo.io/@dmitriy88/pet-fam",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), " Pet Fam -"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Pet Fam Github Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/pet_fam",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), " GitHub")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Pet Fam"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Pet Fam is a mobile app, compatible with both Android and iOS devices, that lets you search the many animal shelters near the zip code you enter in. Choose from a wide array of animals including dogs, cats, reptiles, and even barnyard animals. Pet Fam uses one of the largest animal adoption APIs, and is slick and simple, letting you browse through animals looking for a new fam."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "React Native"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Redux"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Fetch API"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Reat Native Elements"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Petfinder API"))));
};

/* harmony default export */ __webpack_exports__["a"] = (PetFam);

/***/ }),

/***/ "./components/Portfolio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/Portfolio.js";




var Portfolio = function Portfolio() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Portfolio Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img",
    src: "../static/portfolio1.png",
    alt: "PetFam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Portfolio Page",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), " Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "Portfolio github Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/my_portfolio_v1",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), " GitHub")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "The website you see here..."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Guess this site is pretty cool right? This site uses NextJS on the front end, which is a minimalistic framework for server-rendered React applications. Its also plugged into a super simple express server that registers a service worker, and handles that resume download. NextJS , and technologies like it (PWAs or progressive web apps), might just be the next best thing in web development."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "NextJS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Nextjs-sass"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Service Workers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Sass"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "NodeJS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Express"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Now"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Portfolio);

/***/ }),

/***/ "./components/QuizU.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_spring__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/QuizU.js";




var PetFam = function PetFam(_ref) {
  var visible = _ref.visible;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "QuizU Page",
    target: "_blank",
    href: "https://expo.io/@dmitriy88/quizu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img-petfam",
    src: "../static/quizu.png",
    alt: "PetFam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "QuizU Page",
    target: "_blank",
    href: "https://expo.io/@dmitriy88/quizu",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), " QuizU"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "QuizU Github Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/quizU",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), " GitHub")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "QuizU"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "QuizU was the final project for the Udacity Nanodegree program, it has a pretty slick UI featuring the React-Native-Flip-Card library, which most likely is used in popular apps like Tinder. Check out the review from the Udacity Instructor -", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "\"Great job, impressive, congrats I love the flip animation, the input validations, the navigation experience, everything!\"")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "React Native"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Redux"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Async Storage"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Reat Native Elements"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Notifications"))));
};

/* harmony default export */ __webpack_exports__["a"] = (PetFam);

/***/ }),

/***/ "./components/WouldYouRather.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
var _jsxFileName = "/Users/dmi/Desktop/my_portfolio_v1/components/WouldYouRather.js";



var WouldYouRather = function WouldYouRather() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    className: "projects",
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "img-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Would You Rather?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Would You Rather? is the final project in the React/Redux portion of the Udacity nanodegree. This version of Would You Rather? features a fun user interface, that gives the option of signing in as a guest , or registering a new user surpassing the requirements of the project. To create an awesome user experience, all forms include a validation using revalidate, and many different animations using React CSS Transition Groups"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Technologies:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "ReactJS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Redux"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Revalidate"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Semantic UI React"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Asynchronous Javascript w/ Axios"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "WYR Page",
    target: "_blank",
    href: "https://would-you-rather--bydmi.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "showcase-img",
    src: "../static/wur.jpg",
    alt: "WYR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "WYR Page",
    target: "_blank",
    href: "https://would-you-rather--bydmi.herokuapp.com/",
    className: "btn btn-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), " Would You Rather?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "aria-label": "WYR Git hub Page",
    target: "_blank",
    href: "https://github.com/Dmitri801/udacity_final_wouldyourather",
    className: "btn btn-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), " GitHub")));
};

/* harmony default export */ __webpack_exports__["a"] = (WouldYouRather);

/***/ }),

/***/ "./pages/work.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom__ = __webpack_require__("react-reveal/Zoom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_reveal_Zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_reveal_Fade__ = __webpack_require__("react-reveal/Fade");
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
        spacing: 48,
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

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/work.js");


/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Zoom":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ "react-spring":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map