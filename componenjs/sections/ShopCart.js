"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopCart;
var _react = require("react");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ShopCart() {
  var _useState = (0, _react.useState)({
      item1: 1,
      item2: 1,
      item3: 1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    quantities = _useState2[0],
    setQuantities = _useState2[1];
  var handleQuantityChange = function handleQuantityChange(item, change) {
    setQuantities(function (prevQuantities) {
      var newQuantity = prevQuantities[item] + change;
      return _objectSpread(_objectSpread({}, prevQuantities), {}, _defineProperty({}, item, newQuantity > 0 ? newQuantity : 1));
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container pt-120 pb-90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-striped table-bordered tbl-shopping-cart"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, "Photo"), /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Quantity"), /*#__PURE__*/React.createElement("th", null, "Total"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    className: "cart_item"
  }, /*#__PURE__*/React.createElement("td", {
    className: "product-remove"
  }, /*#__PURE__*/React.createElement(_link.default, {
    title: "Remove this item",
    className: "remove",
    href: "#"
  }, "\xD7")), /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/1.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Winter Black Jacket"), /*#__PURE__*/React.createElement("ul", {
    className: "variation"
  }, /*#__PURE__*/React.createElement("li", {
    className: "variation-size"
  }, "Size: ", /*#__PURE__*/React.createElement("span", null, "Medium")))), /*#__PURE__*/React.createElement("td", {
    className: "product-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$36.00")), /*#__PURE__*/React.createElement("td", {
    className: "product-quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-details__quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity-box"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sub",
    onClick: function onClick() {
      return handleQuantityChange('item1', -1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-minus"
  })), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "1",
    value: quantities.item1,
    readOnly: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add",
    onClick: function onClick() {
      return handleQuantityChange('item1', 1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  }))))), /*#__PURE__*/React.createElement("td", {
    className: "product-subtotal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$", 36.00 * quantities.item1))), /*#__PURE__*/React.createElement("tr", {
    className: "cart_item"
  }, /*#__PURE__*/React.createElement("td", {
    className: "product-remove"
  }, /*#__PURE__*/React.createElement(_link.default, {
    title: "Remove this item",
    className: "remove",
    href: "#"
  }, "\xD7")), /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/2.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Swan Crop V-Neck Tee"), /*#__PURE__*/React.createElement("ul", {
    className: "variation"
  }, /*#__PURE__*/React.createElement("li", {
    className: "variation-size"
  }, "Size: ", /*#__PURE__*/React.createElement("span", null, "Small")))), /*#__PURE__*/React.createElement("td", {
    className: "product-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$115.00")), /*#__PURE__*/React.createElement("td", {
    className: "product-quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-details__quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity-box"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sub",
    onClick: function onClick() {
      return handleQuantityChange('item2', -1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-minus"
  })), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "1",
    value: quantities.item2,
    readOnly: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add",
    onClick: function onClick() {
      return handleQuantityChange('item2', 1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  }))))), /*#__PURE__*/React.createElement("td", {
    className: "product-subtotal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$", 115.00 * quantities.item2))), /*#__PURE__*/React.createElement("tr", {
    className: "cart_item"
  }, /*#__PURE__*/React.createElement("td", {
    className: "product-remove"
  }, /*#__PURE__*/React.createElement(_link.default, {
    title: "Remove this item",
    className: "remove",
    href: "#"
  }, "\xD7")), /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/3.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Blue Solid Casual Shirt"), /*#__PURE__*/React.createElement("ul", {
    className: "variation"
  }, /*#__PURE__*/React.createElement("li", {
    className: "variation-size"
  }, "Size: ", /*#__PURE__*/React.createElement("span", null, "Large")))), /*#__PURE__*/React.createElement("td", {
    className: "product-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$68.00")), /*#__PURE__*/React.createElement("td", {
    className: "product-quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-details__quantity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity-box"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sub",
    onClick: function onClick() {
      return handleQuantityChange('item3', -1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-minus"
  })), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "1",
    value: quantities.item3,
    readOnly: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add",
    onClick: function onClick() {
      return handleQuantityChange('item3', 1);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  }))))), /*#__PURE__*/React.createElement("td", {
    className: "product-subtotal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$", 68.00 * quantities.item3))), /*#__PURE__*/React.createElement("tr", {
    className: "cart_item"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: 3
  }, /*#__PURE__*/React.createElement("form", {
    className: "row g-3 coupon-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "coupon_code",
    className: "input-text form-control mr-1",
    id: "coupon_code",
    defaultValue: "",
    placeholder: "Coupon code"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "apply-button",
    name: "apply_coupon",
    defaultValue: "Apply Coupon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-title"
  }, "Apply Coupon"))))), /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, "\xA0"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-title"
  }, "Update Cart")))))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/React.createElement("h4", null, "Calculate Shipping"), /*#__PURE__*/React.createElement("form", {
    className: "form",
    action: "/"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-control"
  }, /*#__PURE__*/React.createElement("option", null, "Select Country"), /*#__PURE__*/React.createElement("option", null, "Australia"), /*#__PURE__*/React.createElement("option", null, "UK"), /*#__PURE__*/React.createElement("option", null, "USA"))), /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "State/country"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Postcode/zip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-30"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-title"
  }, "Update Totals"))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/React.createElement("h4", null, "Cart Totals"), /*#__PURE__*/React.createElement("table", {
    className: "table table-bordered cart-total"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Cart Subtotal"), /*#__PURE__*/React.createElement("td", null, "$", 36 * quantities.item1 + 115 * quantities.item2 + 68 * quantities.item3)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Shipping and Handling"), /*#__PURE__*/React.createElement("td", null, "$70.00")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Order Total"), /*#__PURE__*/React.createElement("td", null, "$", 36 * quantities.item1 + 115 * quantities.item2 + 68 * quantities.item3 + 70)))), /*#__PURE__*/React.createElement(_link.default, {
    className: "theme-btn btn-style-one",
    href: "/shop-checkout"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-title"
  }, "Proceed to Checkout"))))))))));
}
;