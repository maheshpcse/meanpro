function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row main-page\">\n        <div class=\"col-md-4 offset-4\">\n            <div>\n                <span class=\"app-title\">Expense System</span>\n                <p class=\"app-info\">Please Login to continue</p>\n            </div>\n            <form #loginForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"username\" class=\"field-required\">Username</label>\n                    <div class=\"input-group user-input\">\n                        <input type=\"text\" class=\"form-control\" name=\"userName\" id=\"userId\" placeholder=\"Enter username\" [(ngModel)]=\"username\" minlength=\"0\" maxlength=\"20\" #userName=\"ngModel\" (keypress)=\"onKeyPress()\" (input)=\"onKeyInput()\" autocomplete=\"off\" required>\n                        <span><i class=\"fa fa-user\" aria-hidden=\"false\"></i></span>\n                    </div>\n                    <span class=\"err-msg\" *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\">\n                        <span *ngIf=\"userName.errors?.required\">Username is required.</span>\n                    </span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"field-required\">Password</label>\n                    <div class=\"input-group password-input\">\n                        <input type=\"password\" class=\"form-control\" name=\"pwdName\" id=\"pwdId\" placeholder=\"Enter password\" [(ngModel)]=\"password\" minlength=\"0\" maxlength=\"20\" #pwdName=\"ngModel\" (keypress)=\"onKeyPress()\" (input)=\"onKeyInput()\" autocomplete=\"off\" required>\n                        <span><i class=\"fa fa-lock\" aria-hidden=\"false\"></i></span>\n                    </div>\n                    <span class=\"err-msg\" *ngIf=\"pwdName.invalid && (pwdName.dirty || pwdName.touched)\">\n                        <span *ngIf=\"pwdName.errors?.required\">Password is required.</span>\n                    </span>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-login col-md-12\" (click)=\"userLogin()\">Login</button>\n                </div>\n            </form>\n            <div class=\"card alert-info text-center\" *ngIf=\"errorMessage\">\n                <span><i class=\"fa fa-check-circle\" aria-hidden=\"false\"></i></span>\n                <span class=\"ml-2\">{{errorMessage}}</span>\n                <span class=\"ml-2\"><i class=\"fa fa-close\"></i></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr>\n            <footer>\n                <p class=\"cp-text text-center\">\n                    © Copyright 2021 Expense System. Powered by www.expenseapp.com. All rights reserved.\n                </p>\n            </footer>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" >\n    <div class=\"container\">\n        <div class=\"row\">\n            <p>profile works!</p>\n        </div>\n        <hr>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/settings/settings.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/settings/settings.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" >\n    <div class=\"container\">\n        <div class=\"row\">\n            <p>settings works!</p>\n        </div>\n        <hr>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n<ng-container>\r\n    <app-chat-boat></app-chat-boat>\r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-boat/chat-boat.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-boat/chat-boat.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatBoatChatBoatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chatbox\">\n    <div class=\"chat\" (click)=\"showChat()\">\n        <i class=\"fa fa-comments-o comment-icon\" aria-hidden=\"false\"></i>\n        <i class=\"fa fa-times close-icon\" aria-hidden=\"false\"></i>\n    </div>\n    <div class=\"card chat-card\">\n        <div class=\"card-header\">\n            <i class=\"fa fa-comments-o\" aria-hidden=\"false\"></i> <span class=\"ml-2\">VAAS</span>\n            <span class=\"ml-2 online\"> <i class=\"fa fa-circle\" aria-hidden=\"false\"></i> online</span>\n        </div>\n        <div class=\"card-body\">\n            <ul class=\"list-group\" *ngFor=\"let item of chatMsgs; let i=index\">\n                <li class=\"list-group-item mr-5 chat-item\" [ngClass]=\"{'class': true}\">\n                    <img src=\"../../assets/images/admin-avatar.png\" alt=\"_vaas\" class=\"img-responsive\" width=\"30\" height=\"30\">\n                    <span class=\"ml-2\">\n                        <div class=\"chat-data\">{{ item.msg }}</div>\n                    </span>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-footer\">\n            <input type=\"text\"class=\"form-control\" name=\"message\" id=\"msg\" [(ngModel)]=\"message\" (keyup.enter)=\"sendMessage()\" placeholder=\"Enter message\">\n            <i class=\"fa fa-send\" aria-hidden=\"false\" (click)=\"sendMessage()\"></i>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" >\n    <div class=\"container\">\n        <div class=\"row\"></div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"ng-autocomplete\">\n                    <ng-autocomplete [data]=\"data\" [searchKeyword]=\"keyword\" (selected)='selectEvent($event)'\n                        (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)'\n                        [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\">\n                    </ng-autocomplete>\n    \n                    <ng-template #itemTemplate let-item>\n                        <a [innerHTML]=\"item.name\"></a>\n                    </ng-template>\n    \n                    <ng-template #notFoundTemplate let-notFound>\n                        <div [innerHTML]=\"notFound\"></div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-form/expense-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-form/expense-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExpenseFormExpenseFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\">\n\n    <div class=\"container\" *ngIf=\"viewType === 'table'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 view-table-page\">\n                <div>\n                    <span class=\"table-title\">Expenses</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"viewType = 'add'\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Add New</span>\n                        </button>\n                    </span>\n                </div>\n                <div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group input-search\">\n                            <input type=\"text\" class=\"form-control\" name=\"searchName\" id=\"searchId\" placeholder=\"Search\">\n                            <span><i class=\"fa fa-search\" aria-hidden=\"false\"></i></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card table-card\">\n                    <div class=\"card-body p-0\">\n                        <table class=\"table table-border table-hover table-scroll\" [mfData]=\"expenseList\"\n                            #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [mfSortBy]=\"sortBy\" [mfSortOrder]=\"sortOrder\">\n                            <thead>\n                                <tr>\n                                    <th>\n                                        <mfDefaultSorter by=\"expense\">Expense</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"cost\">Cost</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"quantity\">Quantity</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"type\">Type</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"paidOn\">Paid On</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"rating\">Rating</mfDefaultSorter>\n                                    </th>\n                                    <th class=\"text-center\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of mf.data | paginate: { itemsPerPage: rowsOnPage,\n                                currentPage: page,\n                                totalItems: expenseList.length }; let i=index\">\n                                    <td>{{item.expense}}</td>\n                                    <td>{{item.cost}}</td>\n                                    <td>{{item.quantity}}</td>\n                                    <td>{{item.type}}</td>\n                                    <td>{{item.paidOn | date}}</td>\n                                    <td>{{item.rating}}</td>\n                                    <td class=\"text-center\" style=\"cursor: pointer;\">\n                                        <span><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <td colspan=\"7\">\n                                        <div class=\"dynamic-pagination\">\n                                            <div class=\"pagination-text\">\n                                                Showing 1 - {{rowsOnPage}} out of {{expenseList.length}} Result(s)\n                                            </div>\n                                            <div class=\"pagination-box\">\n                                                <!-- <mfBootstrapPaginator [rowsOnPageSet]=\"rowsOnPageSet\">\n                                                </mfBootstrapPaginator> -->\n                                                <pagination-controls (pageChange)=\"pageChanged($event)\"\n                                                    (pageBoundsCorrection)=\"pageChanged($event)\" maxSize=\"7\"\n                                                    directionLinks=\"true\" autoHide=\"false\" responsive=\"true\"\n                                                    previousLabel=\"Previous\" nextLabel=\"Next\"\n                                                    screenReaderPaginationLabel=\"Pagination\"\n                                                    screenReaderPageLabel=\"page\"\n                                                    screenReaderCurrentLabel=\"You're on page\">\n                                                </pagination-controls>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\" *ngIf=\"viewType === 'add' || viewType === 'update'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 add-form-page\">\n                <div>\n                    <span class=\"table-title\">Expenses</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3 form-title\">Add Expense</span>\n                </div>\n                <div>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"viewType = 'table'\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Back</span>\n                        </button>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card add-card\">\n                    <div class=\"card-body p-3\">\n                        <form #expenseForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"expense\" class=\"field-required\">Expense Name</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"expenseName\" id=\"expenseId\" [(ngModel)]=\"expense\"\n                                            placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"amount\" class=\"field-required\">Amount</label>\n                                        <div class=\"input-group\">\n                                            <select class=\"form-control col-md-4\" name=\"currencyName\" id=\"currencyId\"\n                                                [(ngModel)]=\"currency\" required>\n                                                <option value=\"null\" selected disabled>Select Currency</option>\n                                                <option value=\"default\">Default Currency (INR)</option>\n                                                <option value=\"aus\">AUS</option>\n                                                <option value=\"usa\">USA</option>\n                                                <option value=\"inr\">INR</option>\n                                            </select>\n                                            <input type=\"number\" class=\"form-control col-md-8\" name=\"amount\"\n                                                [(ngModel)]=\"amount\" placeholder=\"Type here...\" required>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\" class=\"field-required\">Description</label>\n                                        <input class=\"form-control\" name=\"descriptionName\" id=\"descriptionId\" [(ngModel)]=\"description\" placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"paiddate\" class=\"field-required\">Paid On</label>\n                                        <my-date-picker name=\"mydate\"\n                                            [options]=\"myDatePickerOptions\" [(ngModel)]=\"paidOn\"\n                                            (dateChanged)=\"onDateChanged($event)\" required></my-date-picker>\n                                    </div>\n                                </div>\n                                <br>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"proof\" class=\"field-required\">Upload Proof</label>\n                                        <input type=\"file\" class=\"form-control\" name=\"proofName\" id=\"proofId\" [(ngModel)]=\"proof\"\n                                            required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"rating\" class=\"field-required\">Rating</label>\n                                        <div class=\"input-group\">\n                                            <select class=\"form-control col-md-4\" name=\"rating\" id=\"rating\"\n                                                [(ngModel)]=\"rating\" (change)=\"onSelectRating(rating)\" required>\n                                                <option value=\"null\" selected disabled>Select Rating</option>\n                                                <option value=\"1\">1</option>\n                                                <option value=\"2\">2</option>\n                                                <option value=\"3\">3</option>\n                                                <option value=\"4\">4</option>\n                                                <option value=\"5\">5</option>\n                                            </select>\n                                            <input type=\"text\" class=\"form-control col-md-8\" name=\"ratingname\" id=\"ratingid\"\n                                                [(ngModel)]=\"ratingName\" disabled required>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer submit-card-footer\">\n                        <button class=\"btn btn-action float-right\" type=\"submit\">Submit</button>\n                        <button class=\"btn btn-cancel float-right ml-2\" (click)=\"viewType = 'table'\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer-nav/footer-nav.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer-nav/footer-nav.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterNavFooterNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"w3-container w3-padding-16 w3-light-grey\">\n    <h4>FOOTER</h4>\n    <p>Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a></p>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/google-forms/google-forms.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-forms/google-forms.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGoogleFormsGoogleFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"true\">\n    <div class=\"row mt-5\" *ngFor=\"let item of inputCards; let i=index\">\n        <div class=\"col-md-9\">\n            <div class=\"card form-card\" id=\"multiple-card-forms\">\n                <div class=\"card-header\">\n                    <div class=\"card-title\">\n                        Section - I\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"container\">\n                        <form [formGroup]=\"inputForm\">\n                            <div formArrayName=\"forms\">\n                                <div class=\"row\"\n                                    *ngFor=\"let items of inputForm.controls['forms'].controls; let j=index\"\n                                    [formGroupName]=\"j\">\n                                    <div class=\"col-md-9\" *ngFor=\"let input of inputsArr; let k=index\">\n                                        <form [formGroup]=\"inputFormArr\">\n                                            <div formArrayName=\"inputs\">\n                                                <div class=\"row\" *ngFor=\"let item of inputFormArr.controls['inputs'].controls; let l=index\" [formGroupName]=\"l\">\n                                                    <div class=\"col-md-9\">\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'text'\">\n                                                            <input [type]=\"input.type\" class=\"form-control\"\n                                                                name=\"fields\" id=\"fieldsId\" formControlName=\"inputTextName\"\n                                                                placeholder=\"Type here...\">\n                                                        </div>\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'number'\">\n                                                            <input [type]=\"input.type\" class=\"form-control\"\n                                                                name=\"fields\" id=\"fieldsId\" formControlName=\"inputNumberName\"\n                                                                placeholder=\"Enter any number...\">\n                                                        </div>\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'file'\">\n                                                            <input [type]=\"input.type\" class=\"form-control\"\n                                                                name=\"fields\" id=\"fieldsId\" formControlName=\"inputFileName\">\n                                                        </div>\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'radio'\">\n                                                            <div class=\"form-check-inline\">\n                                                                <label class=\"form-check-label\" for=\"radio1\">\n                                                                    <input [type]=\"input.type\" class=\"form-check-input\"\n                                                                        id=\"radio1\" name=\"optradio\" value=\"option1\"\n                                                                        formControlName=\"inputRadioName\" checked>Option 1\n                                                                </label>\n                                                            </div>\n                                                            <div class=\"form-check-inline\">\n                                                                <label class=\"form-check-label\" for=\"radio2\">\n                                                                    <input [type]=\"input.type\" class=\"form-check-input\"\n                                                                        id=\"radio2\" name=\"optradio\" value=\"option2\"\n                                                                        formControlName=\"inputRadioName\">Option 2\n                                                                </label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'checkbox'\">\n                                                            <div class=\"form-check-inline\">\n                                                                <label class=\"form-check-label\">\n                                                                    <input [type]=\"input.type\" class=\"form-check-input\"\n                                                                        id=\"checkbox1\" name=\"optcheckbox\"\n                                                                        value=\"option1\"\n                                                                        formControlName=\"inputCheckboxName\">Option 1\n                                                                </label>\n                                                            </div>\n                                                            <div class=\"form-check-inline\">\n                                                                <label class=\"form-check-label\">\n                                                                    <input [type]=\"input.type\" class=\"form-check-input\"\n                                                                        id=\"checkbox2\" name=\"optcheckbox\"\n                                                                        value=\"option2\"\n                                                                        formControlName=\"inputCheckboxName\">Option 2\n                                                                </label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\" *ngIf=\"input.type === 'dropdown'\">\n                                                            <select class=\"form-control\" name=\"fields\" id=\"fieldsId\"\n                                                                formControlName=\"inputDropdownName\">\n                                                                <option value=\"\" selected disabled>Select Item :\n                                                                </option>\n                                                                <option>1</option>\n                                                                <option>2</option>\n                                                                <option>3</option>\n                                                                <option>4</option>\n                                                                <option>5</option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-3\">\n                                                        <div class=\"form-group input-group btns-add\">\n                                                            <a (click)=\"addInput(l, input)\">\n                                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                                            </a>\n                                                            <a class=\"ml-2\" (click)=\"removeInput(l, input)\" *ngIf=\"l>=1\">\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                                                            </a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group\">\n                                            <select class=\"form-control\" name=\"typess\" id=\"typessId\"\n                                                formControlName=\"inputType\" (change)=\"onSelectInput(i, j, items)\">\n                                                <option value=\"null\" selected disabled>Select Input Type :\n                                                </option>\n                                                <option [value]=\"types.name\"\n                                                    *ngFor=\"let types of inputFields; let m=index\">\n                                                    {{ types.name | titlecase }}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"btn-action\">\n                        <a><i class=\"fa fa-clone ml-5\" aria-hidden=\"true\"></i></a>\n                        <a (click)=\"removeCard(i, item)\" *ngIf=\"i>=1\"><i class=\"fa fa-trash-o ml-5\"\n                                aria-hidden=\"true\"></i></a>\n                        <label class=\"switch ml-5\">\n                            <input type=\"checkbox\">\n                            <span class=\"slider round\"></span>\n                        </label>\n                        <a>\n                            <i class=\"fa fa-ellipsis-v ml-5\" aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-1\" *ngIf=\"i==0\">\n            <div class=\"card add-card\">\n                <div class=\"card-holder\">\n                    <ul>\n                        <li>\n                            <a (click)=\"addCard(i, item)\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-save\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"false\">\n    <div class=\"row mt-5\">\n        <div class=\"col-md-6\">\n            <form action=\"\">\n                <div class=\"form-group\">\n                    <label for=\"phoneNum\">Phone Number</label>\n                    <input type=\"number\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"phoneNum\" pattern=\"^((\\\\+91-?)|0)?[0-9]{10}$\" #phone=\"ngModel\">\n                    <span *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" style=\"color: maroon;\">\n                        <span *ngIf=\"phone.errors.pattern\">Phone number is invalid</span>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\" *ngIf=\"false\">\n    <div class=\"row mt-5\">\n        <div class=\"col-md-12\">\n            <table class=\"table\">\n                <thead>\n                    <tr *ngFor=\"let key of headers; let i=index\">\n                        <th scope=\"col\">{{key}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let value of employeesList; let j=index\">\n                        <td>{{value}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group-form/group-form.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-form/group-form.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupFormGroupFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" >\n\n    <div class=\"container\" *ngIf=\"viewType === 'table'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 view-table-page\">\n                <div>\n                    <span class=\"table-title\">Groups</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"viewType = 'add'\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Add New</span>\n                        </button>\n                    </span>\n                </div>\n                <div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group input-search\">\n                            <input type=\"text\" class=\"form-control\" name=\"searchName\" id=\"searchId\" placeholder=\"Search\">\n                            <span><i class=\"fa fa-search\" aria-hidden=\"false\"></i></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card table-card\">\n                    <div class=\"card-body p-0\">\n                        <table class=\"table table-border table-hover table-scroll\" [mfData]=\"groupsList\"\n                            #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [mfSortBy]=\"sortBy\" [mfSortOrder]=\"sortOrder\">\n                            <thead>\n                                <tr>\n                                    <th>\n                                        <mfDefaultSorter by=\"group_name\">Group Name</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"created_at\">Joined Date</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n                                    </th>\n                                    <th class=\"text-center\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of mf.data | paginate: { itemsPerPage: rowsOnPage,\n                                currentPage: page,\n                                totalItems: groupsList.length }; let i=index\">\n                                    <td>{{item.group_name}}</td>\n                                    <td>{{item.created_at | date}}</td>\n                                    <td>{{item.status}}</td>\n                                    <td class=\"text-center\" style=\"cursor: pointer;\">\n                                        <span><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <td colspan=\"7\">\n                                        <div class=\"dynamic-pagination\">\n                                            <div class=\"pagination-text\">\n                                                Showing 1 - {{rowsOnPage}} out of {{groupsList.length}} Result(s)\n                                            </div>\n                                            <div class=\"pagination-box\">\n                                                <!-- <mfBootstrapPaginator [rowsOnPageSet]=\"rowsOnPageSet\">\n                                                </mfBootstrapPaginator> -->\n                                                <pagination-controls (pageChange)=\"pageChanged($event)\"\n                                                    (pageBoundsCorrection)=\"pageChanged($event)\" maxSize=\"7\"\n                                                    directionLinks=\"true\" autoHide=\"false\" responsive=\"true\"\n                                                    previousLabel=\"Previous\" nextLabel=\"Next\"\n                                                    screenReaderPaginationLabel=\"Pagination\"\n                                                    screenReaderPageLabel=\"page\"\n                                                    screenReaderCurrentLabel=\"You're on page\">\n                                                </pagination-controls>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\" *ngIf=\"viewType === 'add' || viewType === 'update'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 add-form-page\">\n                <div>\n                    <span class=\"table-title\">Groups</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3 form-title\">Add group</span>\n                </div>\n                <div>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"viewType = 'table'\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Back</span>\n                        </button>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card add-card\">\n                    <div class=\"card-body p-3\">\n                        <form #groupsForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"profile\" class=\"field-required\">Group Profile</label>\n                                        <input type=\"file\" class=\"form-control\" name=\"profile\" id=\"profileId\" [(ngModel)]=\"groupProfile\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"groupname\" class=\"field-required\">Group Name</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"groupname\" id=\"groupid\" [(ngModel)]=\"groupName\"\n                                            placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"users\" class=\"field-required\">Group Users</label>\n                                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                                            [ngModelOptions]=\"{standalone: true}\"\n                                            [settings]=\" dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n                                            (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                            (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer submit-card-footer\">\n                        <button class=\"btn btn-action float-right\">Save</button>\n                        <button class=\"btn btn-cancel float-right ml-2\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderNavHeaderNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Top container -->\n<div class=\"w3-bar w3-top w3-black w3-large\" style=\"z-index:4\">\n    <span class=\"w3-bar-item w3-left\">\n        <img src=\"../../assets/images/expense-icon.png\" alt=\"_icon\" class=\"img-responsive rounded-image\" width=\"35\"\n            height=\"35\">\n        <span class=\"ml-2\">Expense System</span>\n        <span class=\"ml-5\" (click)=\"showHideSideNav()\"><i class=\"fa fa-bars\" aria-hidden=\"false\"></i></span>\n    </span>\n    <button class=\"w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey\" onclick=\"w3_open();\"><i\n            class=\"fa fa-bars\"></i>  Menu</button>\n    <span class=\"w3-bar-item w3-right dropdown\" style=\"cursor: pointer;\">\n        <i class=\"fa fa-power-off\" data-toggle=\"dropdown\" aria-hidden=\"true\"></i>\n        <div class=\"dropdown-menu dropdown-card\">\n            <a class=\"dropdown-item text-center profile-card\">\n                <img src=\"../../assets/images/admin-avatar.png\" alt=\"_profile\" class=\"img-responsive rounded-image\" width=\"35\" height=\"35\">\n                <div class=\"profile-details\">\n                    <span class=\"ml-2 user-name\">{{ username | titlecase }}</span>\n                    <span class=\"ml-2 role-name\">{{ role }}</span>\n                </div>\n            </a>\n            <a class=\"dropdown-item text-center user-profile\" [ngClass]=\"{'is-active': href == '/admin/profile'}\" [routerLink]=\"['/admin/profile']\">\n                <span><i class=\"fa fa-user\"></i></span>\n                <span class=\"ml-2\">Profile</span>\n            </a>\n            <a class=\"dropdown-item text-center user-settings\" [ngClass]=\"{'is-active': href == '/admin/settings'}\" [routerLink]=\"['/admin/settings']\">\n                <span><i class=\"fa fa-gear\"></i></span>\n                <span class=\"ml-2\">Settings</span>\n            </a>\n            <a class=\"dropdown-item text-center user-logout\" (click)=\"signOut()\">\n                <span><i class=\"fa fa-sign-out\"></i></span>\n                <span class=\"ml-2\">Logout</span>\n            </a>\n        </div>\n    </span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" >\n    <div class=\"container\">\n        <div class=\"row\">\n            <p>history works!</p>\n        </div>\n        <hr>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Sidebar/menu -->\n<nav class=\"w3-sidebar w3-collapse w3-white w3-animate-left\" style=\"z-index:3;width:250px;\" id=\"mySidebar\"><br>\n    <div class=\"w3-container w3-row\">\n        <div class=\"w3-col s4\">\n            <img src=\"/assets/w3images/avatar2.png\" class=\"w3-circle w3-margin-right\" style=\"width:46px\">\n        </div>\n        <div class=\"w3-col s8 w3-bar sidemenu-title\">\n            <span>Welcome, <strong>Admin</strong></span><br>\n            <!-- <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-envelope\"></i></a>\n            <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-user\"></i></a>\n            <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-cog\"></i></a> -->\n        </div>\n    </div>\n    <hr>\n    <div class=\"w3-col\">\n        <div class=\"form-group input-group search-box\">\n            <input type=\"text\" class=\"form-control\" name=\"linkName\" id=\"linkId\" placeholder=\"Quick search\">\n            <span><i class=\"fa fa-search\" aria-hidden=\"false\"></i></span>\n        </div>\n    </div>\n    <div class=\"w3-bar-block side-links\" *ngIf=\"role == 'admin'\">\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black\"\n            onclick=\"w3_close()\" title=\"close menu\"><i class=\"fa fa-remove fa-fw\"></i>  Close Menu</a>\n        <a [routerLink]=\"['/home']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'home'}\"><i class=\"fa fa-tachometer fa-fw\"></i>  Dashboard</a>\n        <a [routerLink]=\"['/expense/add']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'expense/add'}\"><i class=\"fa fa-money fa-fw\"></i>  Expense</a>\n        <a [routerLink]=\"['/groups/add']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'groups/add'}\"><i class=\"fa fa-users fa-fw\"></i>  Group</a>\n        <a [routerLink]=\"['/users/add']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'users/add'}\"><i class=\"fa fa-user fa-fw\"></i>  User</a>\n        <a [routerLink]=\"['/history/view']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'history/view'}\"><i class=\"fa fa-history fa-fw\"></i>  History</a>\n    </div>\n    <div class=\"w3-bar-block side-links\" *ngIf=\"role == 'user'\">\n        <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black\"\n            onclick=\"w3_close()\" title=\"close menu\"><i class=\"fa fa-remove fa-fw\"></i>  Close Menu</a>\n        <a [routerLink]=\"['/home']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'home'}\"><i class=\"fa fa-tachometer fa-fw\"></i>  Dashboard</a>\n        <a [routerLink]=\"['/expense/add']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'expense/add'}\"><i class=\"fa fa-user-o fa-fw\"></i>  Profile</a>\n        <a [routerLink]=\"['/groups/add']\" class=\"w3-bar-item w3-button w3-padding\"\n            [ngClass]=\"{'w3-blue': pageType == 'groups/add'}\"><i class=\"fa fa-gears fa-fw\"></i>  Settings</a>\n    </div>\n</nav>\n\n<!-- Overlay effect when opening sidebar on small screens -->\n<div class=\"w3-overlay w3-hide-large w3-animate-opacity\" onclick=\"w3_close()\" style=\"cursor:pointer\"\n    title=\"close side menu\" id=\"myOverlay\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/add-user/add-user.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/add-user/add-user.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFormAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <!-- <div class=\"row mt-5\">\n        <h3>Register a User</h3>\n        <hr class=\"style-one\">\n    </div> -->\n    <!-- <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"field-required\">Full Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"fullname\">\n            </div>\n        </div>\n    </div> -->\n    <div class=\"row mt-5\">\n        <div class=\"col-md-6\">\n            <input type=\"file\" class=\"form-control\" (change)=\"handleFileInput($event.target.files)\">\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFormUserFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-nav></app-header-nav>\n\n<app-side-nav></app-side-nav>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\">\n\n    <div class=\"container\" *ngIf=\"viewType === 'table'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 view-table-page\">\n                <div>\n                    <span class=\"table-title\">Users</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"viewType = 'add'\">\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Add New</span>\n                        </button>\n                    </span>\n                </div>\n                <div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group input-search\">\n                            <input type=\"text\" class=\"form-control\" name=\"searchName\" id=\"searchId\"\n                                [(ngModel)]=\"filterQuery\" placeholder=\"Search\">\n                            <span *ngIf=\"!filterQuery\"><i class=\"fa fa-search\" aria-hidden=\"false\"></i></span>\n                            <span *ngIf=\"filterQuery\" (click)=\"search()\"><i class=\"fa fa-check\"\n                                    aria-hidden=\"false\"></i></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"search-result text-center\" *ngIf=\"searchEnable\">\n                    {{ usersList.length }} result(s) found.\n                    <span class=\"ml-2\"><a class=\"search-clear\" (click)=\"resetFilters()\">Clear all</a></span>\n                </div>\n                <div class=\"card table-card\">\n                    <div class=\"card-body p-0\" *ngIf=\"!spinner\">\n                        <table class=\"table table-border table-hover table-scroll\" [mfData]=\"usersList\"\n                            #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [mfSortBy]=\"sortBy\" [mfSortOrder]=\"sortOrder\">\n                            <thead class=\"table-thead\">\n                                <tr>\n                                    <th>\n                                        <mfDefaultSorter by=\"fullname\">Fullname</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"username\">Username</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"mobile\">Phonenumber</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"created_at\">Joined Date</mfDefaultSorter>\n                                    </th>\n                                    <th>\n                                        <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n                                    </th>\n                                    <th class=\"text-center\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody class=\"table-tbody\">\n                                <tr *ngFor=\"let item of mf.data | paginate: { itemsPerPage: rowsOnPage,\n                                currentPage: page,\n                                totalItems: count }; let i=index\">\n                                    <!-- <td class=\"table-profile\">\n                                        <div><img src=\"../../assets/images/user-avatar.png\" alt=\"_profile\" class=\"img-responsive rounded-image\" width=\"35\" height=\"35\"></div>\n                                        <div class=\"profile-details ml-3\">\n                                            <p>{{item.fullname | titlecase}}</p>\n                                            <p>{{item.username | uppercase}}</p>\n                                        </div>\n                                    </td> -->\n                                    <td>{{item.fullname}}</td>\n                                    <td>{{item.username}}</td>\n                                    <td>{{item.email}}</td>\n                                    <td>{{item.mobile}}</td>\n                                    <td>{{item.created_at | date}}</td>\n                                    <td>{{item.status === 1 ? 'Active' : 'Inactive'}}</td>\n                                    <td class=\"text-center\" style=\"cursor: pointer;\">\n                                        <span class=\"dropdown\">\n                                            <i class=\"fa fa-ellipsis-v\" data-toggle=\"dropdown\" aria-hidden=\"true\"></i>\n                                            <div class=\"dropdown-menu dropdown-card\">\n                                                <a class=\"dropdown-item text-center\">\n                                                    <span><i class=\"fa fa-eye\"></i></span>\n                                                    <span class=\"ml-2\">View details</span>\n                                                </a>\n                                                <a class=\"dropdown-item text-center\" *ngIf=\"item.status === 1\" (click)=\"onSelectEditUser(item)\">\n                                                    <span><i class=\"fa fa-edit\"></i></span>\n                                                    <span class=\"ml-2\">Edit</span>\n                                                </a>\n                                                <a class=\"dropdown-item text-center\" *ngIf=\"item.status === 1\">\n                                                    <span><i class=\"fa fa-ban\"></i></span>\n                                                    <span class=\"ml-2\">Deactive</span>\n                                                </a>\n                                                <a class=\"dropdown-item text-center\" *ngIf=\"item.status === 0\">\n                                                    <span><i class=\"fa fa-reply\"></i></span>\n                                                    <span class=\"ml-2\">Restore</span>\n                                                </a>\n                                            </div>\n                                        </span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tfoot class=\"table-tfoot\">\n                                <tr>\n                                    <td colspan=\"7\">\n                                        <div class=\"dynamic-pagination\">\n                                            <div class=\"pagination-text\">\n                                                Showing {{pager.startCount}} - {{pager.endCount}} out of {{count}}\n                                                Result(s)\n                                            </div>\n                                            <div class=\"pagination-box\">\n                                                <!-- <mfBootstrapPaginator [rowsOnPageSet]=\"rowsOnPageSet\">\n                                                </mfBootstrapPaginator> -->\n                                                <pagination-controls (pageChange)=\"pageChanged($event)\"\n                                                    (pageBoundsCorrection)=\"pageChanged($event)\" maxSize=\"7\"\n                                                    directionLinks=\"true\" autoHide=\"false\" responsive=\"true\"\n                                                    previousLabel=\"Previous\" nextLabel=\"Next\"\n                                                    screenReaderPaginationLabel=\"Pagination\"\n                                                    screenReaderPageLabel=\"page\"\n                                                    screenReaderCurrentLabel=\"You're on page\">\n                                                </pagination-controls>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                    <div class=\"card-body p-0\" *ngIf=\"spinner\">\n                        <div class=\"table-shimmer\" *ngFor=\"let item of rows; let i=index\">\n                            <div class=\"line shimmer\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\" *ngIf=\"viewType === 'add' || viewType === 'update'\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12 add-form-page\">\n                <div>\n                    <span class=\"table-title\">Users</span>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n                    <span class=\"ml-3 form-title\">Add User</span>\n                </div>\n                <div>\n                    <span class=\"ml-3\">\n                        <button class=\"btn btn-add-back\" (click)=\"resetForm()\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                            <span class=\"ml-2\">Back</span>\n                        </button>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card add-card\">\n                    <div class=\"card-body p-3\">\n                        <form #usersForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"fullname\" class=\"field-required\">Fullname</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullNameId\"\n                                            [(ngModel)]=\"fullname\" placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"email\" class=\"field-required\">Email</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"emailName\" id=\"emailId\"\n                                            [(ngModel)]=\"email\" placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"username\" class=\"field-required\">Username</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"userName\" id=\"userId\"\n                                            [(ngModel)]=\"username\" placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"password\" class=\"field-required\">Password</label>\n                                        <div class=\"input-group\">\n                                            <button class=\"btn btn-generate\" (click)=\"generateCode()\">Generate\n                                                Password</button>\n                                            <input type=\"text\" class=\"form-control\" name=\"pwdName\" id=\"pwdId\"\n                                                [(ngModel)]=\"password\" disabled required>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"phonenumber\" class=\"field-required\">Phonenumber</label>\n                                        <input type=\"number\" class=\"form-control\" name=\"number\" id=\"numberId\"\n                                            [(ngModel)]=\"mobile\" placeholder=\"Type here...\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"profile\" class=\"field-required\">Profile</label>\n                                        <input type=\"file\" class=\"form-control\" name=\"profileName\" id=\"profileId\"\n                                            [(ngModel)]=\"profile\" (change)=\"onSelectFile($event)\" required>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer submit-card-footer\">\n                        <button class=\"btn btn-action float-right\" type=\"submit\" [disabled]=\"usersForm.invalid\"\n                            (click)=\"saveUserForm()\">Save</button>\n                        <button class=\"btn btn-cancel float-right ml-2\" (click)=\"resetForm();\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <app-footer-nav></app-footer-nav> -->\n\n</div>\n<!-- End page content -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/access/login/login.component.css":
  /*!**************************************************!*\
    !*** ./src/app/access/login/login.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-page {\r\n  margin-top: 100px;\r\n}\r\n\r\n.app-title {\r\n  font-size: 1.2em;\r\n  color: #5f9ea0;\r\n}\r\n\r\n.app-info {\r\n  font-size: 0.8em;\r\n  color: #ccc;\r\n}\r\n\r\nlabel {\r\n  font-size: 0.9em;\r\n  color: #accbcc;\r\n}\r\n\r\n.user-input {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.user-input .fa-user {\r\n  font-size: 1em;\r\n  padding: 18px;\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 0.8em;\r\n  height: 50px;\r\n}\r\n\r\n.password-input {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.password-input .fa-lock {\r\n  font-size: 1em;\r\n  padding: 18px;\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  font-size: 0.8em;\r\n  height: 50px;\r\n}\r\n\r\n.btn-login {\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n  font-size: 1em;\r\n  text-align: center;\r\n}\r\n\r\n.btn-login:hover {\r\n  background-color: #539294;\r\n}\r\n\r\n.cp-text {\r\n  color: #b1d0d1;\r\n  text-shadow: 0 1px rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.alert-info {\r\n  background-color: white;\r\n  font-size: 0.8em;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  display: inline;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n.alert-info .fa-check-circle {\r\n  font-size: 1em;\r\n  color: rgb(63, 180, 63);\r\n}\r\n\r\n.alert-info .fa-close {\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  color: white;\r\n}\r\n\r\n.alert-info .fa-close:hover {\r\n  cursor: pointer;\r\n  color: #ccc;\r\n}\r\n\r\n.err-msg {\r\n  color: maroon;\r\n  font-size: 0.8em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICM1ZjllYTA7XHJcbn1cclxuXHJcbi5hcHAtaW5mbyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgY29sb3I6ICNhY2NiY2M7XHJcbn1cclxuXHJcbi51c2VyLWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItaW5wdXQgLmZhLXVzZXIge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IC5mYS1sb2NrIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWxvZ2luIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tbG9naW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzkyOTQ7XHJcbn1cclxuXHJcbi5jcC10ZXh0IHtcclxuICBjb2xvcjogI2IxZDBkMTtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uYWxlcnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYWxlcnQtaW5mbyAuZmEtY2hlY2stY2lyY2xlIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogcmdiKDYzLCAxODAsIDYzKTtcclxufVxyXG5cclxuLmFsZXJ0LWluZm8gLmZhLWNsb3NlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxlcnQtaW5mbyAuZmEtY2xvc2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLmVyci1tc2cge1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/access/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/access/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccessLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService, toastr) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.username = null;
        this.password = null;
        this.errorMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onKeyPress",
        value: function onKeyPress() {
          this.errorMessage = '';
        }
      }, {
        key: "onKeyInput",
        value: function onKeyInput() {
          this.errorMessage = '';
        }
      }, {
        key: "userLogin",
        value: function userLogin() {
          var _this = this;

          if (!this.username && !this.password) {
            this.errorMessage = 'Username and Password is required.';
            return;
          }

          if (!this.username) {
            this.errorMessage = 'Username is required.';
            return;
          }

          if (!this.password) {
            this.errorMessage = 'Password is required.';
            return;
          }

          var userPayload = {
            username: this.username,
            password: this.password
          };
          console.log('Post payload to user login', userPayload);
          this.authService.userLogin(userPayload).subscribe(function (response) {
            console.log('Get user login response', response);

            if (response.success) {
              sessionStorage.setItem('token', response.data.token);
              sessionStorage.setItem('userid', response.data.user_id);
              sessionStorage.setItem('fullname', response.data.fullname);
              sessionStorage.setItem('username', response.data.username);
              sessionStorage.setItem('email', response.data.email);
              sessionStorage.setItem('mobile', response.data.mobile);
              sessionStorage.setItem('profile', response.data.profile);
              sessionStorage.setItem('role', response.data.role);
              sessionStorage.setItem('status', response.data.status);
              sessionStorage.setItem('group_id', response.data.group_id);
              sessionStorage.setItem('created_at', moment__WEBPACK_IMPORTED_MODULE_5__(response.data.created_at).format('YYYY-MM-DD HH:mm:ss'));
              sessionStorage.setItem('updated_at', moment__WEBPACK_IMPORTED_MODULE_5__(response.data.updated_at).format('YYYY-MM-DD HH:mm:ss'));

              _this.toastr.successToastr(response.message);

              _this.router.navigate(['/home']);
            } else {
              _this.toastr.errorToastr(response.message);

              _this.errorMessage = response.message;
            }

            _this.resetForm();
          }, function (error) {
            _this.toastr.errorToastr('Network failed, Please try again.');

            _this.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.loginFormRef) {
            this.loginFormRef.reset();
          }

          this.username = null;
          this.password = null;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', {
      "static": false
    })], LoginComponent.prototype, "loginFormRef", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/access/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/admin/profile/profile.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admin/profile/profile.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppAdminProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/admin/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/admin/settings/settings.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/settings/settings.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/settings/settings.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/settings/settings.component.ts ***!
    \******************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppAdminSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/settings/settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/admin/settings/settings.component.css"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/api.services.ts":
  /*!*********************************!*\
    !*** ./src/app/api.services.ts ***!
    \*********************************/

  /*! exports provided: API */

  /***/
  function srcAppApiServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API", function () {
      return API;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var API = {
      GET_SERVER_CONNECTION: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/server',
      LOGIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/login',
      ADD_NEW_USER: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/addNewUser',
      GET_USERS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/getUsers',
      ADD_NEW_GROUP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/addNewGroup',
      GET_GROUPS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/getGroups'
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _access_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./access/login/login.component */
    "./src/app/access/login/login.component.ts");
    /* harmony import */


    var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/profile/profile.component */
    "./src/app/admin/profile/profile.component.ts");
    /* harmony import */


    var _admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/settings/settings.component */
    "./src/app/admin/settings/settings.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./expense-form/expense-form.component */
    "./src/app/expense-form/expense-form.component.ts");
    /* harmony import */


    var _google_forms_google_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./google-forms/google-forms.component */
    "./src/app/google-forms/google-forms.component.ts");
    /* harmony import */


    var _group_form_group_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./group-form/group-form.component */
    "./src/app/group-form/group-form.component.ts");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/history/history.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _access_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'admin/profile',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }, {
      path: 'admin/settings',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]
    }, {
      path: 'home',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
      path: 'google-form',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _google_forms_google_forms_component__WEBPACK_IMPORTED_MODULE_9__["GoogleFormsComponent"]
    }, {
      path: 'expense/add',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_8__["ExpenseFormComponent"]
    }, {
      path: 'groups/add',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _group_form_group_form_component__WEBPACK_IMPORTED_MODULE_10__["GroupFormComponent"]
    }, {
      path: 'users/add',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"]
    }, {
      path: 'history/view',
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
      component: _history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, route) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.route = route;
        this.title = 'expense';
        this.pageType = null;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageType = this.route.snapshot; // console.log('current page type issss ==>', this.pageType); 
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! mydatepicker */
    "./node_modules/mydatepicker/index.js");
    /* harmony import */


    var ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-mydatepicker */
    "./node_modules/ngx-mydatepicker/index.js");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./expense-form/expense-form.component */
    "./src/app/expense-form/expense-form.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _group_form_group_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./group-form/group-form.component */
    "./src/app/group-form/group-form.component.ts");
    /* harmony import */


    var _user_form_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-form/add-user/add-user.component */
    "./src/app/user-form/add-user/add-user.component.ts");
    /* harmony import */


    var _google_forms_google_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./google-forms/google-forms.component */
    "./src/app/google-forms/google-forms.component.ts");
    /* harmony import */


    var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header-nav/header-nav.component */
    "./src/app/header-nav/header-nav.component.ts");
    /* harmony import */


    var _footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./footer-nav/footer-nav.component */
    "./src/app/footer-nav/footer-nav.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/history/history.component.ts");
    /* harmony import */


    var angular_6_datatable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! angular-6-datatable */
    "./node_modules/angular-6-datatable/index.js");
    /* harmony import */


    var angular_6_datatable__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var _chat_boat_chat_boat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./chat-boat/chat-boat.component */
    "./src/app/chat-boat/chat-boat.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _access_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./access/login/login.component */
    "./src/app/access/login/login.component.ts");
    /* harmony import */


    var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./auth-interceptor.service */
    "./src/app/auth-interceptor.service.ts");
    /* harmony import */


    var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/profile/profile.component */
    "./src/app/admin/profile/profile.component.ts");
    /* harmony import */


    var _admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/settings/settings.component */
    "./src/app/admin/settings/settings.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseFormComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_14__["UserFormComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"], _group_form_group_form_component__WEBPACK_IMPORTED_MODULE_16__["GroupFormComponent"], _user_form_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"], _google_forms_google_forms_component__WEBPACK_IMPORTED_MODULE_18__["GoogleFormsComponent"], _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_19__["HeaderNavComponent"], _footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_20__["FooterNavComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_21__["SideNavComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_23__["HistoryComponent"], _chat_boat_chat_boat_component__WEBPACK_IMPORTED_MODULE_25__["ChatBoatComponent"], _access_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"], _admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_32__["SettingsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({
        warnOnNgModelWithFormControl: 'never'
      }), ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"], ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_8__["NgxMyDatePickerModule"].forRoot(), angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__["AutocompleteLibModule"], angular_6_datatable__WEBPACK_IMPORTED_MODULE_24__["DataTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_26__["NgxPaginationModule"]],
      providers: [_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_30__["AuthInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService, router) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.router = router;
        this.userId = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/auth-interceptor.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth-interceptor.service.ts ***!
    \*********************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptorService = /*#__PURE__*/function () {
      function AuthInterceptorService() {
        _classCallCheck(this, AuthInterceptorService);
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = sessionStorage.getItem('token');
          var id = sessionStorage.getItem('userid');
          var username = sessionStorage.getItem('username');
          var email = sessionStorage.getItem('email');
          var role = sessionStorage.getItem('role');

          if (!token) {
            return next.handle(req);
          }

          var req1 = req.clone({
            headers: req.headers.set('Authorization', ["Bearer ".concat(token), id, role]),
            setHeaders: {
              userid: id,
              username: username,
              email: email
            }
          });
          return next.handle(req1);
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.services */
    "./src/app/api.services.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "userLogin",
        value: function userLogin(data) {
          return this.http.post(_api_services__WEBPACK_IMPORTED_MODULE_3__["API"].LOGIN, data);
        }
      }, {
        key: "getUserToken",
        value: function getUserToken() {
          return sessionStorage.getItem('token');
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return sessionStorage.getItem('userid');
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return sessionStorage.getItem('role');
        }
      }, {
        key: "getUserPayload",
        value: function getUserPayload() {
          var token = this.getUserToken();

          if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayload = this.getUserPayload();

          if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }, {
        key: "addNewUser",
        value: function addNewUser(data) {
          return this.http.post(_api_services__WEBPACK_IMPORTED_MODULE_3__["API"].ADD_NEW_USER, data);
        }
      }, {
        key: "getUsers",
        value: function getUsers(data) {
          return this.http.post(_api_services__WEBPACK_IMPORTED_MODULE_3__["API"].GET_USERS, data);
        }
      }, {
        key: "addNewGroup",
        value: function addNewGroup(data) {
          return this.http.post(_api_services__WEBPACK_IMPORTED_MODULE_3__["API"].ADD_NEW_GROUP, data);
        }
      }, {
        key: "getGroups",
        value: function getGroups(data) {
          return this.http.post(_api_services__WEBPACK_IMPORTED_MODULE_3__["API"].GET_GROUPS, data);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/chat-boat/chat-boat.component.css":
  /*!***************************************************!*\
    !*** ./src/app/chat-boat/chat-boat.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatBoatChatBoatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chatbox {\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 90%;\r\n    z-index: 9999;\r\n}\r\n\r\n.chat {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat i {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.close-icon {\r\n    display: block;\r\n}\r\n\r\n.card {\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0%;\r\n    position: absolute;\r\n    bottom: -500px;\r\n    right: 20px;\r\n    margin-bottom: 10px;\r\n    width: 800%;\r\n    height: 800%;\r\n    transition: 0.75s all ease-in-out;\r\n}\r\n\r\n/* .open-chat > .chat-card {\r\n    bottom: 52px;\r\n} */\r\n\r\n.card-header {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-bottom: 1px solid #dee2e6;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n}\r\n\r\n.fa-circle {\r\n    font-size: 0.5rem !important;\r\n    color: #6dab25;\r\n}\r\n\r\n.card-body {\r\n    /* width: 100%; */\r\n    /* height: 100vh; */\r\n    background-color: #dee2e6;\r\n    padding: 0 !important;\r\n    /* overflow: scroll; */\r\n}\r\n\r\n.card-footer {\r\n    border-top: 1px solid #dee2e6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\ninput[type=text] {\r\n    border: none;\r\n    border-radius: 0%;\r\n}\r\n\r\n.fa-send {\r\n    font-size: 1.5rem !important;\r\n    color: #5F9EA0 !important;\r\n    padding: 5px;\r\n}\r\n\r\n.card:after {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 7px solid transparent;\r\n    border-right: 7px solid transparent;\r\n    border-top: 9px solid #d2d2d2;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 0;\r\n}\r\n\r\n.chat-item:nth-child(odd) {\r\n    border: none;\r\n    display: flex;\r\n    /* justify-content: left; */\r\n    /* align-content: center; */\r\n    background: none;\r\n}\r\n\r\n.chat-data:nth-child(odd) {\r\n    border: 1px solid #dee2e6;\r\n    padding: 5px;\r\n    color: #5F9EA0;\r\n    background-color: white;\r\n}\r\n\r\n.chat-item:nth-child(even) {\r\n    border: none;\r\n    display: flex;\r\n    justify-content: right;\r\n    background: none;\r\n}\r\n\r\n.chat-data:nth-child(even) {\r\n    border: 1px solid #dee2e6;\r\n    padding: 5px;\r\n    color: #6dab25;\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1ib2F0L2NoYXQtYm9hdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1ib2F0L2NoYXQtYm9hdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRib3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgdG9wOiA5MCU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY5RUEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXQgaSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDgwMCU7XHJcbiAgICBoZWlnaHQ6IDgwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjc1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIC5vcGVuLWNoYXQgPiAuY2hhdC1jYXJkIHtcclxuICAgIGJvdHRvbTogNTJweDtcclxufSAqL1xyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjlFQTA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmEtY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzZkYWIyNTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxufVxyXG5cclxuLmZhLXNlbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNUY5RUEwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiA5cHggc29saWQgI2QyZDJkMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2hhdC1pdGVtOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7ICovXHJcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2hhdC1kYXRhOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzVGOUVBMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hhdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGF0LWRhdGE6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzZkYWIyNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chat-boat/chat-boat.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/chat-boat/chat-boat.component.ts ***!
    \**************************************************/

  /*! exports provided: ChatBoatComponent */

  /***/
  function srcAppChatBoatChatBoatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBoatComponent", function () {
      return ChatBoatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChatBoatComponent = /*#__PURE__*/function () {
      function ChatBoatComponent(router, route) {
        _classCallCheck(this, ChatBoatComponent);

        this.router = router;
        this.route = route;
        this.chatShow = true;
        this.chatHide = false;
        this.chatMsgs = [];
      }

      _createClass(ChatBoatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chatMsgs = [{
            msg: "Hello, I'm VASS!"
          }, {
            msg: "Hi, My name is Mahesh!"
          }, {
            msg: "How are you doing?"
          }, {
            msg: "I'm fine thank you."
          }, {
            msg: "Great. How can I help you?"
          }]; // this.chatService.getMessage().subscribe(res => {
          //   this.chatMsgs.push({msg: res});
          // });
        }
      }, {
        key: "showChat",
        value: function showChat(item) {
          $("body").toggleClass("open-chat");

          if ($("body").hasClass("open-chat")) {
            $(".chat-card").css("bottom", "50px");
            $(".comment-icon").css("display", "none");
            $(".close-icon").css("display", "inline-block");
          } else {
            $(".chat-card").css("bottom", "-500px");
            $(".comment-icon").css("display", "inline-block");
            $(".close-icon").css("display", "none");
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          // this.chatService.sendMessage(this.message);
          this.message = '';
        }
      }, {
        key: "getMessage",
        value: function getMessage() {}
      }]);

      return ChatBoatComponent;
    }();

    ChatBoatComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ChatBoatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-boat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-boat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-boat/chat-boat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-boat.component.css */
      "./src/app/chat-boat/chat-boat.component.css"))["default"]]
    })], ChatBoatComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-autocomplete {\r\n    width: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1hdXRvY29tcGxldGUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(router) {
        _classCallCheck(this, DashboardComponent);

        this.router = router;
        this.keyword = 'name';
        this.data = [{
          id: 1,
          name: 'Usa'
        }, {
          id: 2,
          name: 'England'
        }];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {// do something with selected item
        }
      }, {
        key: "onChangeSearch",
        value: function onChangeSearch(val) {// fetch remote data from here
          // And reassign the 'data' which is binded to 'data' property.
        }
      }, {
        key: "onFocused",
        value: function onFocused(e) {// do something when input is focused
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/expense-form/expense-form.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/expense-form/expense-form.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExpenseFormExpenseFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* view table styles */\r\n.table-title {\r\n    font-size: 0.9em;\r\n}\r\n.view-table-page {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.input-search {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n.input-search .fa-search {\r\n    font-size: 0.8em;\r\n    padding: 10px;\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n}\r\n/* end view table styles */\r\n/* add form styles */\r\n.add-form-page {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.form-title {\r\n    color: rgb(161, 159, 159);\r\n    font-size: 0.9em;\r\n}\r\nlabel {\r\n    font-size: 0.8em;\r\n    font-weight: 400;\r\n}\r\n.field-required:after {\r\n    content: '*';\r\n    color: orangered;\r\n}\r\ninput[type=text] {\r\n    font-size: 0.8em;\r\n}\r\nselect {\r\n    font-size: 0.8em;\r\n}\r\ninput[type=number] {\r\n    font-size: 0.8em;\r\n}\r\ninput[type=file] {\r\n    font-size: 0.8em;\r\n}\r\n.submit-card-footer {\r\n    background: none !important;\r\n}\r\n.btn {\r\n    border-radius: 20px;\r\n}\r\n.btn-add-back {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 20px;\r\n    font-size: 0.8em;\r\n}\r\n.btn-add-back:hover {\r\n    background-color: #4f9294;\r\n}\r\n.btn-action {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 20px;\r\n    font-size: 0.8em;\r\n}\r\n.btn-action:hover {\r\n    background-color: #4f9294;\r\n}\r\n.btn-cancel {\r\n    color: rgb(161, 159, 159);\r\n    border: none;\r\n}\r\n/* end add form styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS1mb3JtL2V4cGVuc2UtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQSwwQkFBMEI7QUFFMUIsb0JBQW9CO0FBQ3BCO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQSx3QkFBd0IiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlLWZvcm0vZXhwZW5zZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB2aWV3IHRhYmxlIHN0eWxlcyAqL1xyXG4udGFibGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLnZpZXctdGFibGUtcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LXNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1zZWFyY2ggLmZhLXNlYXJjaCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjlFQTA7XHJcbn1cclxuLyogZW5kIHZpZXcgdGFibGUgc3R5bGVzICovXHJcblxyXG4vKiBhZGQgZm9ybSBzdHlsZXMgKi9cclxuLmFkZC1mb3JtLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2IoMTYxLCAxNTksIDE1OSk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmZpZWxkLXJlcXVpcmVkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcqJztcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tYWRkLWJhY2sge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVGOUVBMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uYnRuLWFkZC1iYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjkyOTQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjlFQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmOTI5NDtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gICAgY29sb3I6IHJnYigxNjEsIDE1OSwgMTU5KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4vKiBlbmQgYWRkIGZvcm0gc3R5bGVzICovIl19 */";
    /***/
  },

  /***/
  "./src/app/expense-form/expense-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/expense-form/expense-form.component.ts ***!
    \********************************************************/

  /*! exports provided: ExpenseFormComponent */

  /***/
  function srcAppExpenseFormExpenseFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseFormComponent", function () {
      return ExpenseFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ExpenseFormComponent = /*#__PURE__*/function () {
      function ExpenseFormComponent(router) {
        _classCallCheck(this, ExpenseFormComponent);

        this.router = router;
        this.expense = null;
        this.currency = null;
        this.amount = null;
        this.description = null;
        this.paidOn = null;
        this.proof = null;
        this.rating = null;
        this.ratingName = null;
        this.myDatePickerOptions = {
          todayBtnTxt: 'Today',
          dateFormat: 'yyyy-mm-dd',
          firstDayOfWeek: 'mo',
          sunHighlight: true,
          inline: false,
          disableUntil: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() - 1,
            day: new Date().getDate()
          }
        };
        this.viewType = 'table';
        this.sortBy = '';
        this.sortOrder = 'asc';
        this.rowsOnPage = 10;
        this.rowsOnPageSet = [5, 10, 25];
        this.page = 1;
        this.expenseList = [];
      }

      _createClass(ExpenseFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < 25; i++) {
            this.expenseList.push({
              expense: "test_item ".concat(i + 1),
              cost: Math.abs(Math.round(Math.random() * 999)),
              // tslint:disable-next-line:max-line-length
              quantity: Math.abs(Math.round(Math.random() * 999)) / 2 === 0 ? "".concat(Math.abs(Math.round(Math.random() * 999)), " gms") : "".concat(Math.abs(Math.round(Math.random() * 999)), " kgs"),
              type: '-',
              paidOn: "2021-01-".concat(i + 1),
              rating: Math.abs(Math.round(Math.random() * 9))
            });
          }
        }
      }, {
        key: "onDateChanged",
        value: function onDateChanged(event) {
          console.log(event);
        }
      }, {
        key: "onSelectRating",
        value: function onSelectRating(value) {
          this.ratingName = Number(value) === 1 ? 'Bad' : Number(value) === 2 ? 'Average' : Number(value) === 3 ? 'Good' : Number(value) === 4 ? 'Exellent' : Number(value) === 5 ? 'Outstanding' : '';
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log(event);
          this.page = event;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.expenseFormRef) {
            this.expenseFormRef.reset();
          }

          this.expense = null;
          this.currency = null;
          this.amount = null;
          this.description = null;
          this.paidOn = null;
          this.proof = null;
          this.rating = null;
          this.ratingName = null;
        }
      }]);

      return ExpenseFormComponent;
    }();

    ExpenseFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expenseForm', {
      "static": false
    })], ExpenseFormComponent.prototype, "expenseFormRef", void 0);
    ExpenseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expense-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-form/expense-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expense-form.component.css */
      "./src/app/expense-form/expense-form.component.css"))["default"]]
    })], ExpenseFormComponent);
    /***/
  },

  /***/
  "./src/app/footer-nav/footer-nav.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/footer-nav/footer-nav.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterNavFooterNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1uYXYvZm9vdGVyLW5hdi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/footer-nav/footer-nav.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/footer-nav/footer-nav.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterNavComponent */

  /***/
  function srcAppFooterNavFooterNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterNavComponent", function () {
      return FooterNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterNavComponent = /*#__PURE__*/function () {
      function FooterNavComponent() {
        _classCallCheck(this, FooterNavComponent);
      }

      _createClass(FooterNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterNavComponent;
    }();

    FooterNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer-nav/footer-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-nav.component.css */
      "./src/app/footer-nav/footer-nav.component.css"))["default"]]
    })], FooterNavComponent);
    /***/
  },

  /***/
  "./src/app/google-forms/google-forms.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/google-forms/google-forms.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGoogleFormsGoogleFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card,\r\n.form-card {\r\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\r\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n  border-radius: 0%;\r\n}\r\n\r\n.form-card .card-header {\r\n  background-color: #b7e7e7;\r\n}\r\n\r\na {\r\n  /* color: #b7e7e7; */\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  color: #b7e7e7;\r\n}\r\n\r\n.form-card .card-footer .btn-action {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.add-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn-sidemenu {\r\n  display: grid;\r\n}\r\n\r\n.card.add-card .card-holder ul{\r\n  padding: 0px;\r\n  margin: 0px;\r\n  list-style: none;\r\n}\r\n\r\n.card.add-card .card-holder ul li{\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.card.add-card .card-holder ul li a{\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card.add-card .card-holder ul li:last-child{\r\n  margin-bottom: 0px;\r\n\r\n}\r\n\r\n/* switch input styles */\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 15px;\r\n  height: 15px;\r\n  bottom: 3px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked+.slider {\r\n  background-color: #b7e7e7;\r\n}\r\n\r\ninput:focus+.slider {\r\n  box-shadow: 0 0 1px #b7e7e7;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n  transform: translateX(26px);\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(18px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n  \r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n  width: 15px;\r\n  height: 15px;\r\n  bottom: 3px;\r\n  left: 4px;\r\n}\r\n\r\n/* dynamic form input styles */\r\n\r\ninput[type=text] {\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom-right-radius: none;\r\n  border-bottom-left-radius: none;\r\n}\r\n\r\nselect {\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom-right-radius: none;\r\n  border-bottom-left-radius: none;\r\n}\r\n\r\n.btns-add a {\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  width: 35px;\r\n  border: 1px solid;\r\n}\r\n\r\n.btns-add a:hover {\r\n  background-color: #b7e7e7;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLWZvcm1zL2dvb2dsZS1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtGQUFrRjtFQUNsRix1R0FBdUc7RUFDdkcsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUdBLG9CQUFvQjs7QUFDcEI7RUFDRSxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFHQSw4QkFBOEI7O0FBQzlCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlLWZvcm1zL2dvb2dsZS1mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQsXHJcbi5mb3JtLWNhcmQge1xyXG4gIC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcclxuICBib3JkZXItcmFkaXVzOiAwJTtcclxufVxyXG5cclxuLmZvcm0tY2FyZCAuY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2U3ZTc7XHJcbn1cclxuXHJcbmEge1xyXG4gIC8qIGNvbG9yOiAjYjdlN2U3OyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICNiN2U3ZTc7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQgLmNhcmQtZm9vdGVyIC5idG4tYWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIFxyXG5cclxuLmJ0bi1zaWRlbWVudSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmNhcmQuYWRkLWNhcmQgLmNhcmQtaG9sZGVyIHVse1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5cclxuLmNhcmQuYWRkLWNhcmQgLmNhcmQtaG9sZGVyIHVsIGxpe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5jYXJkLmFkZC1jYXJkIC5jYXJkLWhvbGRlciB1bCBsaSBhe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLmFkZC1jYXJkIC5jYXJkLWhvbGRlciB1bCBsaTpsYXN0LWNoaWxke1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbn1cclxuXHJcbi8qIHN3aXRjaCBpbnB1dCBzdHlsZXMgKi9cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAzcHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2U3ZTc7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzKy5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2I3ZTdlNztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG59XHJcblxyXG5cclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIGxlZnQ6IDRweDtcclxufVxyXG5cclxuXHJcbi8qIGR5bmFtaWMgZm9ybSBpbnB1dCBzdHlsZXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogbm9uZTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBub25lO1xyXG59XHJcblxyXG4uYnRucy1hZGQgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYnRucy1hZGQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZTdlNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/google-forms/google-forms.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/google-forms/google-forms.component.ts ***!
    \********************************************************/

  /*! exports provided: GoogleFormsComponent */

  /***/
  function srcAppGoogleFormsGoogleFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleFormsComponent", function () {
      return GoogleFormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var GoogleFormsComponent = /*#__PURE__*/function () {
      function GoogleFormsComponent(fb) {
        _classCallCheck(this, GoogleFormsComponent);

        this.fb = fb;
        this.inputCards = [1];
        this.inputFields = [{
          name: 'text',
          type: 'text',
          icon: 'fa-file-text'
        }, {
          name: 'number',
          type: 'number',
          icon: 'fa-phone'
        }, {
          name: 'file',
          type: 'file',
          icon: 'fa-file'
        }, {
          name: 'radio',
          type: 'radio',
          icon: 'fa-dot-circle-o'
        }, {
          name: 'checkbox',
          type: 'checkbox',
          icon: 'fa-check-square-o'
        }, {
          name: 'dropdown',
          type: 'dropdown',
          icon: 'fa-angle-down'
        }];
        this.inputsArr = [{
          name: 'text',
          type: 'text',
          icon: 'fa-file-text'
        }];
        this.indexJ = 0;
        this.phoneNum = '';
        this.allalerts = [];
        this.tempAllAlerts = [];
        this.employeesList = [];
        this.headers = [];
      }

      _createClass(GoogleFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inputForm = this.fb.group({
            forms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([this.initForm()])
          });
          this.inputFormArr = this.fb.group({
            inputs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([this.initFormArr()])
          });
          this.getCode();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          return this.fb.group({
            // inputName: new FormControl('', Validators.required),
            inputType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "addCard",
        value: function addCard(i, item) {
          console.log(i, item);
          i = this.inputCards.length;
          this.inputCards.push(i);
        }
      }, {
        key: "removeCard",
        value: function removeCard(i, item) {
          console.log(i, item);
          var index = this.inputCards.indexOf(item);

          if (index > -1) {
            this.inputCards.splice(index, 1);
          }
        }
      }, {
        key: "onSelectInput",
        value: function onSelectInput(i, j, items) {
          var _this2 = this;

          console.log(i, j, items);
          this.indexJ = this.inputCards.length;
          console.log(this.inputForm.controls['forms'].value[0]['inputType']);
          var filterItem = underscore__WEBPACK_IMPORTED_MODULE_3__["filter"](this.inputFields, function (e) {
            return e.name === _this2.inputForm.controls['forms'].value[0]['inputType'];
          });
          console.log("filter item issssss", filterItem);
          this.inputsArr.push(filterItem[0]);
          console.log('selected inputs array isssssss', this.inputsArr);
        }
      }, {
        key: "initFormArr",
        value: function initFormArr() {
          return this.fb.group({
            inputTextName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inputNumberName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inputFileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inputRadioName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inputCheckboxName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inputDropdownName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "addInput",
        value: function addInput(i, input) {
          console.log(input, "selected input item isssssss");
          console.log(this.inputFormArr.controls['inputs']);
          var control = this.inputFormArr.controls['inputs'];
          control.push(this.initFormArr());
        }
      }, {
        key: "removeInput",
        value: function removeInput(i, input) {
          var control = this.inputFormArr.controls['inputs'];
          control.removeAt(i);
        }
      }, {
        key: "getCode",
        value: function getCode() {
          var reports = [{
            emp_id: 'TES001',
            sc_id: 8,
            salary_component: 'Provident Fund Employee',
            amount: 4444
          }, {
            emp_id: 'TES001',
            sc_id: 9,
            salary_component: 'Professional Tax',
            amount: 5555
          }, {
            emp_id: 'TES002',
            sc_id: 8,
            salary_component: 'Provident Fund Employee',
            amount: 6666
          }, {
            emp_id: 'TES002',
            sc_id: 9,
            salary_component: 'Professional Tax',
            amount: 7777
          }, {
            emp_id: 'TES003',
            sc_id: 8,
            salary_component: 'Provident Fund Employee',
            amount: 8888
          }, {
            emp_id: 'TES003',
            sc_id: 9,
            salary_component: 'Professional Tax',
            amount: 9999
          }];
          var uniqArr = underscore__WEBPACK_IMPORTED_MODULE_3__["uniq"](reports, 'emp_id');
          var groupArr = underscore__WEBPACK_IMPORTED_MODULE_3__["groupBy"](reports, 'emp_id');
          var resultArr = [];

          for (var i = 0; i < uniqArr.length; i++) {
            var obj = {};
            this.headers[i] = [];
            var element = uniqArr[i].emp_id;
            this.headers[i].push('emp_id');
            obj['emp_id'] = element;

            for (var j = 0; j < groupArr[element].length; j++) {
              var element1 = groupArr[element][j].salary_component;
              obj["component_".concat(j + 1)] = groupArr[element][j].amount;
              this.headers[i].push(element1);
              resultArr.push(obj);
            }
          }

          var filterArr = underscore__WEBPACK_IMPORTED_MODULE_3__["uniq"](resultArr, 'emp_id');

          var _iterator = _createForOfIteratorHelper(filterArr),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i = _step.value;
              this.employeesList.push(Object.values(_i));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log(this.employeesList);
          console.log(this.headers);
        }
      }]);

      return GoogleFormsComponent;
    }();

    GoogleFormsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    GoogleFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/google-forms/google-forms.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-forms.component.css */
      "./src/app/google-forms/google-forms.component.css"))["default"]]
    })], GoogleFormsComponent);
    /***/
  },

  /***/
  "./src/app/group-form/group-form.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/group-form/group-form.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupFormGroupFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* view table styles */\r\n.table-title {\r\n    font-size: 0.9em;\r\n}\r\n.view-table-page {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.input-search {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n.input-search .fa-search {\r\n    font-size: 0.8em;\r\n    padding: 10px;\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n}\r\n/* end view table styles */\r\n/* add form styles */\r\n.add-form-page {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.form-title {\r\n    color: rgb(161, 159, 159);\r\n    font-size: 0.9em;\r\n}\r\nlabel {\r\n    font-size: 0.8em;\r\n    font-weight: 400;\r\n}\r\n.field-required:after {\r\n    content: '*';\r\n    color: orangered;\r\n}\r\ninput[type=text] {\r\n    font-size: 0.8em;\r\n}\r\ninput[type=file] {\r\n    font-size: 0.8em;\r\n}\r\nangular2-multiselect {\r\n    font-size: 0.8em;\r\n}\r\n.submit-card-footer {\r\n    background: none !important;\r\n}\r\n.btn {\r\n    border-radius: 20px;\r\n}\r\n.btn-generate {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 20px;\r\n    font-size: 0.8em;\r\n}\r\n.btn-add-back {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 20px;\r\n    font-size: 0.8em;\r\n}\r\n.btn-add-back:hover {\r\n    background-color: #4f9294;\r\n}\r\n.btn-action {\r\n    color: white;\r\n    background-color: #5F9EA0;\r\n    border-radius: 20px;\r\n    font-size: 0.8em;\r\n}\r\n.btn-action:hover {\r\n    background-color: #4f9294;\r\n}\r\n.btn-cancel {\r\n    color: rgb(161, 159, 159);\r\n    border: none;\r\n}\r\n/* end add form styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtZm9ybS9ncm91cC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBLDBCQUEwQjtBQUUxQixvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBLHdCQUF3QiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwLWZvcm0vZ3JvdXAtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdmlldyB0YWJsZSBzdHlsZXMgKi9cclxuLnRhYmxlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi52aWV3LXRhYmxlLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1zZWFyY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtc2VhcmNoIC5mYS1zZWFyY2gge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY5RUEwO1xyXG59XHJcbi8qIGVuZCB2aWV3IHRhYmxlIHN0eWxlcyAqL1xyXG5cclxuLyogYWRkIGZvcm0gc3R5bGVzICovXHJcbi5hZGQtZm9ybS1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDE2MSwgMTU5LCAxNTkpO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5maWVsZC1yZXF1aXJlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnKic7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuYW5ndWxhcjItbXVsdGlzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1jYXJkLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJ0bi1nZW5lcmF0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY5RUEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5idG4tYWRkLWJhY2sge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVGOUVBMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uYnRuLWFkZC1iYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjkyOTQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjlFQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmOTI5NDtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gICAgY29sb3I6IHJnYigxNjEsIDE1OSwgMTU5KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4vKiBlbmQgYWRkIGZvcm0gc3R5bGVzICovIl19 */";
    /***/
  },

  /***/
  "./src/app/group-form/group-form.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/group-form/group-form.component.ts ***!
    \****************************************************/

  /*! exports provided: GroupFormComponent */

  /***/
  function srcAppGroupFormGroupFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupFormComponent", function () {
      return GroupFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var GroupFormComponent = /*#__PURE__*/function () {
      function GroupFormComponent(router, authService, toastr) {
        _classCallCheck(this, GroupFormComponent);

        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('user_id');
        this.groupProfile = null;
        this.groupName = null;
        this.groupUsers = [];
        this.dropdownList = [{
          id: 1,
          itemName: 'India'
        }, {
          id: 2,
          itemName: 'Singapore'
        }, {
          id: 3,
          itemName: 'Australia'
        }, {
          id: 4,
          itemName: 'Canada'
        }, {
          id: 5,
          itemName: 'South Korea'
        }, {
          id: 6,
          itemName: 'Germany'
        }, {
          id: 7,
          itemName: 'France'
        }, {
          id: 8,
          itemName: 'Russia'
        }, {
          id: 9,
          itemName: 'Italy'
        }, {
          id: 10,
          itemName: 'Sweden'
        }];
        this.selectedItems = [];
        this.dropdownSettings = {
          singleSelection: false,
          text: 'Select Countries',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          classes: 'myclass custom-class',
          badgeShowLimit: 2
        };
        this.viewType = 'table';
        this.sortBy = '';
        this.sortOrder = 'asc';
        this.rowsOnPage = 10;
        this.rowsOnPageSet = [5, 10, 25];
        this.pager = {};
        this.page = 1;
        this.count = 0;
        this.searchEnable = false;
        this.filterQuery = '';
        this.spinner = false;
        this.groupsList = [];
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }

      _createClass(GroupFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < 10; i++) {
            this.groupsList.push({
              group_name: "test_group ".concat(i + 1),
              status: Math.abs(Math.round(Math.random() * 999)) / 2 === 0 ? 'Active' : 'Inactive',
              created_at: "2021-01-".concat(i + 1)
            });
          }

          this.spinner = true;
          this.getGroupsList();
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "search",
        value: function search() {
          this.searchEnable = true;
          this.getGroupsList();
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log(event);
          this.page = event;
          this.getGroupsList();
        }
      }, {
        key: "getGroupsList",
        value: function getGroupsList() {
          var _this3 = this;

          this.spinner = true;
          var userPayload = {
            limit: Number(this.rowsOnPage),
            page: Number(this.page),
            query: this.filterQuery
          };
          console.log('Post payload to get users list', userPayload);
          this.authService.getUsers(userPayload).subscribe(function (response) {
            console.log('Ger users list response', response);

            if (response.success) {
              _this3.groupsList = response.data.data;
              _this3.count = response.data.count;

              _this3.createPager();
            } else {
              _this3.toastr.errorToastr(response.message);
            }

            _this3.spinner = false;
          }, function (error) {
            _this3.toastr.errorToastr('Network failed, Please try again.');

            _this3.spinner = false;
          });
        }
      }, {
        key: "createPager",
        value: function createPager() {
          this.pager.startCount = this.groupsList.length > 0 && Number(this.page) === 1 ? 1 : this.groupsList.length > 0 ? Number(this.rowsOnPage) * Number(this.page - 1) + 1 : 0;
          this.pager.endCount = Number(this.rowsOnPage) === this.groupsList.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          console.log(this.pager);
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          console.log(event);
        }
      }, {
        key: "saveUserForm",
        value: function saveUserForm() {
          var _this4 = this;

          var userPayload = {
            group_id: null,
            profile_img: this.groupProfile,
            group_name: this.groupName,
            group_user: this.groupUsers,
            user_id: this.userId,
            status: 1
          };
          console.log('Post payload to add new user', userPayload);
          this.authService.addNewUser(userPayload).subscribe(function (response) {
            console.log('Get response of add new user', response);

            if (response.success) {
              _this4.toastr.successToastr(response.message);

              _this4.resetForm();
            } else {
              _this4.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this4.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.rowsOnPage = 10;
          this.page = 1;
          this.pager = {};
          this.count = 0;
          this.filterQuery = '';
          this.searchEnable = false;
          this.getGroupsList();
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.groupsFormRef) {
            this.groupsFormRef.reset();
          }

          this.groupProfile = null;
          this.groupName = null;
          this.groupUsers = [];
          this.rowsOnPage = 10;
          this.page = 1;
          this.pager = {};
          this.count = 0;
          this.filterQuery = '';
          this.searchEnable = false;
        }
      }]);

      return GroupFormComponent;
    }();

    GroupFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupsForm', {
      "static": false
    })], GroupFormComponent.prototype, "groupsFormRef", void 0);
    GroupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group-form/group-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group-form.component.css */
      "./src/app/group-form/group-form.component.css"))["default"]]
    })], GroupFormComponent);
    /***/
  },

  /***/
  "./src/app/header-nav/header-nav.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/header-nav/header-nav.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderNavHeaderNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w3-black {\r\n    background-color: #5F9EA0 !important;\r\n}\r\n\r\n.fa-bars {\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-card {\r\n    padding: 0;\r\n}\r\n\r\n.dropdown-card a {\r\n    cursor: pointer;\r\n    padding: 7px;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.dropdown-card a:hover {\r\n    background: honeydew !important;\r\n}\r\n\r\n.profile-card {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.profile-details {\r\n    display: grid;\r\n}\r\n\r\n.profile-details .user-name {\r\n    font-size: 1.2em;\r\n}\r\n\r\n.profile-details .role-name {\r\n    color: #5F9EA0;\r\n}\r\n\r\n.user-profile {\r\n    border-top: 1px solid #ccc;\r\n}\r\n\r\n.user-settings {\r\n    border-top: 1px solid #ccc;\r\n}\r\n\r\n.user-logout {\r\n    border-top: 1px solid #ccc;\r\n}\r\n\r\n.is-active {\r\n    background: honeydew;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzMtYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVGOUVBMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtYmFycyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jYXJkIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNhcmQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBob25leWRldyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnByb2ZpbGUtZGV0YWlscyAudXNlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWRldGFpbHMgLnJvbGUtbmFtZSB7XHJcbiAgICBjb2xvcjogIzVGOUVBMDtcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnVzZXItc2V0dGluZ3Mge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi51c2VyLWxvZ291dCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBob25leWRldztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header-nav/header-nav.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/header-nav/header-nav.component.ts ***!
    \****************************************************/

  /*! exports provided: HeaderNavComponent */

  /***/
  function srcAppHeaderNavHeaderNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function () {
      return HeaderNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderNavComponent = /*#__PURE__*/function () {
      function HeaderNavComponent(router) {
        _classCallCheck(this, HeaderNavComponent);

        this.router = router;
        this.username = sessionStorage.getItem('username');
        this.role = sessionStorage.getItem('role');
        this.href = '';
      }

      _createClass(HeaderNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.href = this.router.url;
          console.log(this.href);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }
      }, {
        key: "showHideSideNav",
        value: function showHideSideNav() {
          $('body').toggleClass('w3-sidebar');

          if ($('body').hasClass('w3-sidebar')) {
            $('w3-sidebar').css('display', 'none !important');
            $('w3-main').css('margin-left', '0 !important');
          } else {
            $('w3-sidebar').css('display', 'block !important');
            $('w3-main').css('margin-left', '250px !important');
          }
        }
      }]);

      return HeaderNavComponent;
    }();

    HeaderNavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-nav.component.css */
      "./src/app/header-nav/header-nav.component.css"))["default"]]
    })], HeaderNavComponent);
    /***/
  },

  /***/
  "./src/app/history/history.component.css":
  /*!***********************************************!*\
    !*** ./src/app/history/history.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistoryHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/history/history.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/history/history.component.ts ***!
    \**********************************************/

  /*! exports provided: HistoryComponent */

  /***/
  function srcAppHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistoryComponent = /*#__PURE__*/function () {
      function HistoryComponent() {
        _classCallCheck(this, HistoryComponent);
      }

      _createClass(HistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistoryComponent;
    }();

    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.component.css */
      "./src/app/history/history.component.css"))["default"]]
    })], HistoryComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/side-nav/side-nav.component.css":
  /*!*************************************************!*\
    !*** ./src/app/side-nav/side-nav.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideNavSideNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidemenu-title {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.side-links a {\r\n  text-decoration: none !important;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.w3-blue {\r\n  background-color: #5f9ea0 !important;\r\n}\r\n\r\n.side-links a:hover {\r\n  background-color: honeydew !important;\r\n}\r\n\r\n.search-box {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search-box .fa-search {\r\n  font-size: larger;\r\n  padding: 8px;\r\n  border: 1px solid #5f9ea0;\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVtZW51LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5zaWRlLWxpbmtzIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi53My1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWxpbmtzIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IC5mYS1zZWFyY2gge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNWY5ZWEwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/side-nav/side-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/side-nav/side-nav.component.ts ***!
    \************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent(router, route) {
        _classCallCheck(this, SideNavComponent);

        this.router = router;
        this.route = route;
        this.pageType = null;
        this.role = sessionStorage.getItem('role');
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageType = this.route.snapshot.routeConfig.path;
          console.log('current page type issss ==>', this.pageType);
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side-nav/side-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.css */
      "./src/app/side-nav/side-nav.component.css"))["default"]]
    })], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/user-form/add-user/add-user.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/user-form/add-user/add-user.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFormAddUserAddUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  color: teal;\r\n  font-family: 'Comfortaa';\r\n  font-weight: 400;\r\n}\r\n\r\nhr.style-one {\r\n  border: 0;\r\n  height: 1px;\r\n  background: #333;\r\n  background-image: linear-gradient(to right, #ccc, #333, #ccc);\r\n}\r\n\r\nlabel {\r\n  font-family: 'VarelaRound';\r\n  font-weight: 200;\r\n}\r\n\r\ninput[type=text] {\r\n  border-top: none;\r\n  border-right: none;\r\n  border-left: none;\r\n  border-bottom: 1px solid teal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZvcm0vYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBjb2xvcjogdGVhbDtcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaHIuc3R5bGUtb25lIHtcclxuICBib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMzMzMsICNjY2MpO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGFSb3VuZCc7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRlYWw7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user-form/add-user/add-user.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user-form/add-user/add-user.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppUserFormAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // var FileSaver = require('file-saver');


    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent() {
        _classCallCheck(this, AddUserComponent);
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          // how to use FileSaver here ? 
          var data = new Blob([files.item(0)], {}); // FileSaver.saveAs(data, files.item(0).name);  
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/add-user/add-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.css */
      "./src/app/user-form/add-user/add-user.component.css"))["default"]]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-form/user-form.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFormUserFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* view table styles */\r\n/* .table-card {\r\n    position: sticky;\r\n    height: 100%;\r\n} */\r\n.table-title {\r\n  font-size: 0.9em;\r\n}\r\n.search-result {\r\n  background-color: #dee2e6;\r\n  padding: 5px;\r\n  font-size: 0.8em;\r\n}\r\n.search-clear {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  font-size: 0.9em;\r\n  color: #5f9ea0;\r\n}\r\n.view-table-page {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n/* .table-thead {\r\n    position: sticky;\r\n}\r\n\r\n.table-tbody {\r\n    position: sticky;\r\n    overflow: scroll;\r\n}\r\n\r\n/* .table-profile {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n} */\r\n/* .profile-details {\r\n    display: flex;\r\n} */\r\n/* .table-tfoot {\r\n    position: sticky;\r\n} */\r\n.input-search {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n.input-search span .fa-search {\r\n  font-size: 0.8em;\r\n  padding: 10px;\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n}\r\n.input-search span .fa-check {\r\n  cursor: pointer;\r\n  font-size: 0.8em;\r\n  padding: 10px;\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n}\r\n/* end view table styles */\r\n/* add form styles */\r\n.add-form-page {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.form-title {\r\n  color: rgb(161, 159, 159);\r\n  font-size: 0.9em;\r\n}\r\nlabel {\r\n  font-size: 0.8em;\r\n  font-weight: 400;\r\n}\r\n.field-required:after {\r\n  content: \"*\";\r\n  color: orangered;\r\n}\r\ninput[type=\"text\"] {\r\n  font-size: 0.8em;\r\n}\r\n.submit-card-footer {\r\n  background: none !important;\r\n}\r\n.btn {\r\n  border-radius: 20px;\r\n}\r\n.btn-generate {\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n  border-radius: 0% !important;\r\n  font-size: 0.8em;\r\n}\r\n.btn-add-back {\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n  border-radius: 20px;\r\n  font-size: 0.8em;\r\n}\r\n.btn-add-back:hover {\r\n  background-color: #4f9294;\r\n}\r\n.btn-action {\r\n  color: white;\r\n  background-color: #5f9ea0;\r\n  border-radius: 20px;\r\n  font-size: 0.8em;\r\n}\r\n.btn-action:hover {\r\n  background-color: #4f9294;\r\n}\r\n.btn-cancel {\r\n  color: rgb(161, 159, 159);\r\n  border: none;\r\n}\r\n/* end add form styles */\r\n.dropdown-card {\r\n  padding: 0;\r\n  left: -100px !important;\r\n}\r\n.dropdown-card a {\r\n  cursor: pointer;\r\n  font-size: 0.8em;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  /* padding: 7px; */\r\n}\r\n.dropdown-card a:hover {\r\n  background: honeydew !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0Qjs7O0dBR0c7QUFFSDtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVIOztHQUVHO0FBRUg7O0dBRUc7QUFFSDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQSwwQkFBMEI7QUFFMUIsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0Esd0JBQXdCO0FBRXhCO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHZpZXcgdGFibGUgc3R5bGVzICovXHJcbi8qIC50YWJsZS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi50YWJsZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtY2xlYXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogIzVmOWVhMDtcclxufVxyXG5cclxuLnZpZXctdGFibGUtcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLnRhYmxlLXRoZWFkIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuXHJcbi50YWJsZS10Ym9keSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLyogLnRhYmxlLXByb2ZpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi8qIC5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSAqL1xyXG5cclxuLyogLnRhYmxlLXRmb290IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbn0gKi9cclxuXHJcbi5pbnB1dC1zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtc2VhcmNoIHNwYW4gLmZhLXNlYXJjaCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xyXG59XHJcblxyXG4uaW5wdXQtc2VhcmNoIHNwYW4gLmZhLWNoZWNrIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xyXG59XHJcbi8qIGVuZCB2aWV3IHRhYmxlIHN0eWxlcyAqL1xyXG5cclxuLyogYWRkIGZvcm0gc3R5bGVzICovXHJcbi5hZGQtZm9ybS1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgY29sb3I6IHJnYigxNjEsIDE1OSwgMTU5KTtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZmllbGQtcmVxdWlyZWQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiKlwiO1xyXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uc3VibWl0LWNhcmQtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ2VuZXJhdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmJ0bi1hZGQtYmFjayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uYnRuLWFkZC1iYWNrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY5Mjk0O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmOTI5NDtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gIGNvbG9yOiByZ2IoMTYxLCAxNTksIDE1OSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi8qIGVuZCBhZGQgZm9ybSBzdHlsZXMgKi9cclxuXHJcbi5kcm9wZG93bi1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxlZnQ6IC0xMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY2FyZCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIHBhZGRpbmc6IDdweDsgKi9cclxufVxyXG5cclxuLmRyb3Bkb3duLWNhcmQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogaG9uZXlkZXcgIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-form/user-form.component.ts ***!
    \**************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var UserFormComponent = /*#__PURE__*/function () {
      function UserFormComponent(router, authService, toastr) {
        _classCallCheck(this, UserFormComponent);

        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.fullname = null;
        this.username = null;
        this.email = null;
        this.password = null;
        this.mobile = null;
        this.profile = null;
        this.formData = new FormData();
        this.editItem = {};
        this.viewType = 'table';
        this.sortBy = '';
        this.sortOrder = 'asc';
        this.rowsOnPage = 10;
        this.rowsOnPageSet = [5, 10, 25];
        this.pager = {};
        this.page = 1;
        this.count = 0;
        this.searchEnable = false;
        this.filterQuery = '';
        this.spinner = false;
        this.usersList = [];
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spinner = true;
          this.getUsersList();
        }
      }, {
        key: "generateCode",
        value: function generateCode() {
          this.password = "user".concat(Math.abs(Math.round(Math.random() * 1000)));
        }
      }, {
        key: "search",
        value: function search() {
          this.searchEnable = true;
          this.getUsersList();
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log(event);
          this.page = event;
          this.getUsersList();
        }
      }, {
        key: "getUsersList",
        value: function getUsersList() {
          var _this5 = this;

          this.spinner = true;
          var userPayload = {
            limit: Number(this.rowsOnPage),
            page: Number(this.page),
            query: this.filterQuery
          };
          console.log('Post payload to get users list', userPayload);
          this.authService.getUsers(userPayload).subscribe(function (response) {
            console.log('Ger users list response', response);

            if (response.success) {
              _this5.usersList = response.data.data;
              _this5.count = response.data.count;

              _this5.createPager();
            } else {
              _this5.toastr.errorToastr(response.message);
            }

            _this5.spinner = false;
          }, function (error) {
            _this5.toastr.errorToastr('Network failed, Please try again.');

            _this5.spinner = false;
          });
        }
      }, {
        key: "createPager",
        value: function createPager() {
          this.pager.startCount = this.usersList.length > 0 && Number(this.page) === 1 ? 1 : this.usersList.length > 0 ? Number(this.rowsOnPage) * Number(this.page - 1) + 1 : 0;
          this.pager.endCount = Number(this.rowsOnPage) === this.usersList.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          console.log(this.pager);
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          console.log(event);
        }
      }, {
        key: "saveUserForm",
        value: function saveUserForm() {
          var _this6 = this;

          var userPayload = {
            user_id: this.editItem.user_id ? this.editItem.user_id : null,
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            password: this.password,
            mobile: this.mobile.toString(),
            profile: null,
            role: this.editItem.role ? this.editItem.role : 'user',
            status: this.editItem.status ? this.editItem.status : 1
          };
          console.log('Post payload to add new user', userPayload);
          this.authService.addNewUser(userPayload).subscribe(function (response) {
            console.log('Get response of add new user', response);

            if (response.success) {
              _this6.toastr.successToastr(response.message);

              _this6.resetForm();
            } else {
              _this6.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this6.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.rowsOnPage = 10;
          this.page = 1;
          this.pager = {};
          this.count = 0;
          this.filterQuery = '';
          this.searchEnable = false;
          this.getUsersList();
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.viewType = 'table';

          if (this.usersFormRef) {
            this.usersFormRef.reset();
          }

          this.username = null;
          this.password = null;
          this.rowsOnPage = 10;
          this.page = 1;
          this.pager = {};
          this.count = 0;
          this.filterQuery = '';
          this.searchEnable = false;
          this.getUsersList();
        }
      }, {
        key: "onSelectEditUser",
        value: function onSelectEditUser(item) {
          console.log('Selecte item isss', item);
          this.viewType = 'update';
          this.editItem = item;
          this.fullname = item.fullname;
          this.username = item.username;
          this.email = item.email;
          this.password = item.password;
          this.mobile = Number(item.mobile);
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('usersForm', {
      "static": false
    })], UserFormComponent.prototype, "usersFormRef", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-form.component.css */
      "./src/app/user-form/user-form.component.css"))["default"]]
    })], UserFormComponent);
    /***/
  },

  /***/
  "./src/assets/env.ts":
  /*!***************************!*\
    !*** ./src/assets/env.ts ***!
    \***************************/

  /*! exports provided: serverIP */

  /***/
  function srcAssetsEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serverIP", function () {
      return serverIP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var serverIP = {
      apiUrl: 'api'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _assets_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/env */
    "./src/assets/env.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: _assets_env__WEBPACK_IMPORTED_MODULE_1__["serverIP"].apiUrl
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\AKRIVIA\expense\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map