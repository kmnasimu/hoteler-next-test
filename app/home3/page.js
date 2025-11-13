"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home3;
var _react = _interopRequireDefault(require("react"));
var _Layout = _interopRequireDefault(require("@/components/layout/Layout"));
var _Banner = _interopRequireDefault(require("@/components/sections/Home3/Banner"));
var _About = _interopRequireDefault(require("@/components/sections/Home3/About"));
var _Pricing = _interopRequireDefault(require("@/components/sections/Home3/Pricing"));
var _Services = _interopRequireDefault(require("@/components/sections/Home3/Services"));
var _Video = _interopRequireDefault(require("@/components/sections/Home3/Video"));
var _Testimonials = _interopRequireDefault(require("@/components/sections/Home3/Testimonials"));
var _Contact = _interopRequireDefault(require("@/components/sections/Home3/Contact"));
var _Clients = _interopRequireDefault(require("@/components/sections/Home3/Clients"));
var _News = _interopRequireDefault(require("@/components/sections/Home3/News"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home3() {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, {
    HeaderStyle: "three"
  }, /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_About.default, null), /*#__PURE__*/_react.default.createElement(_Pricing.default, null), /*#__PURE__*/_react.default.createElement(_Services.default, null), /*#__PURE__*/_react.default.createElement(_Video.default, null), /*#__PURE__*/_react.default.createElement(_Testimonials.default, null), /*#__PURE__*/_react.default.createElement(_Contact.default, null), /*#__PURE__*/_react.default.createElement(_Clients.default, null), /*#__PURE__*/_react.default.createElement(_News.default, {
    className: "pt-40"
  }));
}