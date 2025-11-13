"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactMap;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ContactMap() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "map-section"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    className: "map w-100",
    src: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    width: "100%",
    height: "600",
    frameBorder: "0",
    allowFullScreen: true,
    loading: "lazy",
    title: "Google Map"
  })));
}