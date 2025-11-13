"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Error() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container pt-100 pb-150"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "error-page__inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "error-page__title-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/resource/404.jpg",
    alt: "Image"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "error-page__sub-title"
  }, "Page not found!")), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-page__text"
  }, "Sorry we can't find that page! The page you are looking  for was never existed."), /*#__PURE__*/_react.default.createElement("form", {
    className: "error-page__form",
    action: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "error-page__form-input"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: "Search here"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "lnr lnr-icon-magnifier"
  })))), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/",
    className: "theme-btn btn-style-one shop-now"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Back to Home"))))))));
}
;