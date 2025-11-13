"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutPage;
var _react = _interopRequireDefault(require("react"));
var _Layout = _interopRequireDefault(require("@/components/layout/Layout"));
var _PageTitle = _interopRequireDefault(require("@/components/sections/PageTitle"));
var _About = _interopRequireDefault(require("@/components/sections/Home4/About"));
var _Marquee = _interopRequireDefault(require("@/components/sections/Home4/Marquee"));
var _Features = _interopRequireDefault(require("@/components/sections/Home5/Features2"));
var _Funfact = _interopRequireDefault(require("@/components/sections/Home5/Funfact"));
var _Testimonials = _interopRequireDefault(require("@/components/sections/Home5/Testimonials"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function AboutPage() {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, {
    HeaderStyle: "nine"
  }, /*#__PURE__*/_react.default.createElement(_PageTitle.default, {
    pageName: "About Us"
  }), /*#__PURE__*/_react.default.createElement(_About.default, null), /*#__PURE__*/_react.default.createElement(_Marquee.default, null), /*#__PURE__*/_react.default.createElement(_Features.default, {
    className: "pb-0"
  }), /*#__PURE__*/_react.default.createElement(_Funfact.default, {
    className: "pt-120 pb-120"
  }), /*#__PURE__*/_react.default.createElement(_Testimonials.default, {
    className: "pt-0"
  }));
}