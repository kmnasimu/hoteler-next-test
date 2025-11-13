"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageTitle;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function PageTitle(_ref) {
  var pageName = _ref.pageName;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "page-title",
    style: {
      backgroundImage: 'url(images/background/page-title-bg.png)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-outer text-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "title"
  }, pageName), /*#__PURE__*/_react.default.createElement("ul", {
    className: "page-breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: ""
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, pageName)))));
}
;