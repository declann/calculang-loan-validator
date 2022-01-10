(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v_pow_term", function() { return v_pow_term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment_amount", function() { return repayment_amount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balance", function() { return balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment_made", function() { return repayment_made; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment", function() { return repayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interest", function() { return interest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "principal", function() { return principal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "term", function() { return term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
const v = ({ i_in }) => 1 / (1 + i({ i_in }));

const v_pow_term = ({ i_in, term_in }) => Math.pow(v({ i_in }), term({ term_in }));

const repayment_amount = ({ principal_in, i_in, term_in }) => principal({ principal_in }) * i({ i_in }) / (1 - v_pow_term({ i_in, term_in }));

const balance = ({ year_in, principal_in, i_in, term_in }) => {
  if (year({ year_in }) == 0) return principal({ principal_in });else
  return balance({ principal_in, i_in, term_in, year_in: year({ year_in }) - 1 }) + interest({ year_in, principal_in, term_in, i_in }) - repayment({ year_in, term_in, principal_in, i_in });
};

const repayment_made = ({ year_in, term_in }) => year({ year_in }) <= term({ term_in }) && year({ year_in }) != 0;
const repayment = ({ year_in, term_in, principal_in, i_in }) => repayment_made({ year_in, term_in }) * repayment_amount({ principal_in, i_in, term_in });

const interest = ({ year_in, principal_in, term_in, i_in }) => balance({ principal_in, i_in, term_in, year_in: year({ year_in }) - 1 }) * i({ i_in });

// inputs:
const principal = ({ principal_in }) => principal_in;
const i = ({ i_in }) => i_in;
const term = ({ term_in }) => term_in;
const year = ({ year_in }) => year_in;

/***/ })
/******/ ]);
});
//# sourceMappingURL=simple-loan.js.map