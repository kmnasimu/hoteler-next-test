"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopCheckout1;
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ShopCheckout1() {
  var _useState = (0, _react.useState)({
      status: false,
      key: 1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var handleClick = function handleClick(key) {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: 0
      });
    } else {
      setIsActive({
        status: true,
        key: key
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "container pt-90 pb-120"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, /*#__PURE__*/React.createElement("form", {
    id: "checkout-form",
    action: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "billing-details"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-30"
  }, "Billing Details"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-fname"
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-fname",
    type: "email",
    className: "form-control",
    placeholder: "First Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-lname"
  }, "Last Name"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-lname",
    type: "email",
    className: "form-control",
    placeholder: "Last Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-cname"
  }, "Company Name"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-cname",
    type: "email",
    className: "form-control",
    placeholder: "Company Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-email"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-email",
    type: "email",
    className: "form-control",
    placeholder: "Email Address"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-address"
  }, "Address"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-address",
    type: "email",
    className: "form-control",
    placeholder: "Street address"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "form-control",
    placeholder: "Apartment, suite, unit etc. (optional)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-city"
  }, "City"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-city",
    type: "email",
    className: "form-control",
    placeholder: "City"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", null, "State/Province"), /*#__PURE__*/React.createElement("select", {
    className: "form-control"
  }, /*#__PURE__*/React.createElement("option", null, "Select Country"), /*#__PURE__*/React.createElement("option", null, "Australia"), /*#__PURE__*/React.createElement("option", null, "UK"), /*#__PURE__*/React.createElement("option", null, "USA"))), /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkuot-form-zip"
  }, "Zip/Postal Code"), /*#__PURE__*/React.createElement("input", {
    id: "checkuot-form-zip",
    type: "email",
    className: "form-control",
    placeholder: "Zip/Postal Code"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3 col-md-6"
  }, /*#__PURE__*/React.createElement("label", null, "Country"), /*#__PURE__*/React.createElement("select", {
    className: "form-control"
  }, /*#__PURE__*/React.createElement("option", null, "Select Country"), /*#__PURE__*/React.createElement("option", null, "Australia"), /*#__PURE__*/React.createElement("option", null, "UK"), /*#__PURE__*/React.createElement("option", null, "USA")))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("h3", null, "Additional information"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "order_comments",
    className: ""
  }, "Order notes\xA0", /*#__PURE__*/React.createElement("span", {
    className: "optional"
  }, "(optional)")), /*#__PURE__*/React.createElement("textarea", {
    id: "order_comments",
    className: "form-control",
    placeholder: "Notes about your order, e.g. special notes for delivery.",
    rows: 3
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-30"
  }, /*#__PURE__*/React.createElement("h3", null, "Your order"), /*#__PURE__*/React.createElement("table", {
    className: "table table-striped table-bordered tbl-shopping-cart"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Photo"), /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Total"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/1.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Headphone"), " x 2"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$36.00"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/2.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Lagage"), " x 3"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$115.00"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "product-thumbnail"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "product",
    src: "/images/resource/products/3.jpg"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "product-name"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-details"
  }, "Watch"), " x 1"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "$68.00"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Cart Subtotal"), /*#__PURE__*/React.createElement("td", null, "\xA0"), /*#__PURE__*/React.createElement("td", null, "$180.00")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Shipping and Handling"), /*#__PURE__*/React.createElement("td", null, "\xA0"), /*#__PURE__*/React.createElement("td", null, "Free Shipping")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Order Total"), /*#__PURE__*/React.createElement("td", null, "\xA0"), /*#__PURE__*/React.createElement("td", null, "$250.00"))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-method"
  }, /*#__PURE__*/React.createElement("h3", null, "Choose a Payment Method"), /*#__PURE__*/React.createElement("ul", {
    className: "accordion-box"
  }, /*#__PURE__*/React.createElement("li", {
    className: "accordion block active-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 1 ? "acc-btn active" : "acc-btn",
    onClick: function onClick() {
      return handleClick(1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-outer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lnr-icon-chevron-down"
  })), " Credir Card / Debit Card"), /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 1 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row clearfix"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-input mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "name",
    placeholder: "Name on the Card",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-input mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "number",
    placeholder: "Card Number",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-input mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "date",
    placeholder: "Expiry Date",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-input mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "code",
    placeholder: "Security Code",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-input message-btn"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "theme-btn btn-style-one",
    "data-loading-text": "Please wait..."
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-title"
  }, "Make Payment")))))))), /*#__PURE__*/React.createElement("li", {
    className: "accordion block"
  }, /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 2 ? "acc-btn active" : "acc-btn",
    onClick: function onClick() {
      return handleClick(2);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-outer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lnr-icon-chevron-down"
  })), " Direct Bank Transfer"), /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 2 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won\xE2\u20AC\u2122t be shipped until the funds have cleared in our account.")))), /*#__PURE__*/React.createElement("li", {
    className: "accordion block"
  }, /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 3 ? "acc-btn active" : "acc-btn",
    onClick: function onClick() {
      return handleClick(3);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-outer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lnr-icon-chevron-down"
  })), " Cheque Payment"), /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 3 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won\xE2\u20AC\u2122t be shipped until the funds have cleared in our account.")))), /*#__PURE__*/React.createElement("li", {
    className: "accordion block"
  }, /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 4 ? "acc-btn active" : "acc-btn",
    onClick: function onClick() {
      return handleClick(4);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-outer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lnr-icon-chevron-down"
  })), " Other Payment"), /*#__PURE__*/React.createElement("div", {
    className: isActive.key == 4 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won\xE2\u20AC\u2122t be shipped until the funds have cleared in our account.")))))))))))));
}
;