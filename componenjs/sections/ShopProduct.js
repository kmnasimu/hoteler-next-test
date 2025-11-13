"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopProduct;
var _PortfolioFilter = _interopRequireDefault(require("../elements/PortfolioFilter1"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ShopProduct() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "featured-products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mixitup-gallery"
  }, /*#__PURE__*/React.createElement(_PortfolioFilter.default, null)))));
}