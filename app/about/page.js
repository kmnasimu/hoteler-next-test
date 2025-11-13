"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutPage;
var _react = _interopRequireDefault(require("react"));
var _Layout = _interopRequireDefault(require("@/components/layout/Layout"));
var _PageTitle = _interopRequireDefault(require("@/components/sections/PageTitle"));
var _About = _interopRequireDefault(require("@/components/sections/Home4/About"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function AboutPage() {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, {
    HeaderStyle: "nine"
  }, /*#__PURE__*/_react.default.createElement(_PageTitle.default, {
    pageName: "About Us"
  }), /*#__PURE__*/_react.default.createElement(_About.default, null));
}