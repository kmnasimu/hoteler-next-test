"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CounterUp = _interopRequireDefault(require("../../elements/CounterUp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Funfact(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "funfact-section style-two ".concat(className || '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fact-counter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-block-one col-lg-3 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-text"
  }, /*#__PURE__*/_react.default.createElement(_CounterUp.default, {
    end: 20
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-text"
  }, "Years Of ", /*#__PURE__*/_react.default.createElement("br", null), "Experience"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-block-one col-lg-3 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-text"
  }, /*#__PURE__*/_react.default.createElement(_CounterUp.default, {
    end: 10
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-text"
  }, "Online ", /*#__PURE__*/_react.default.createElement("br", null), "Booking"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-block-one col-lg-3 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-text"
  }, /*#__PURE__*/_react.default.createElement(_CounterUp.default, {
    end: 40
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-text"
  }, "Experience ", /*#__PURE__*/_react.default.createElement("br", null), "Hoteler"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-block-one col-lg-3 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-text"
  }, /*#__PURE__*/_react.default.createElement(_CounterUp.default, {
    end: 30
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-text"
  }, "Best Service ", /*#__PURE__*/_react.default.createElement("br", null), "Award"))))))));
}
var _default = exports.default = Funfact;