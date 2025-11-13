"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FaqsInner;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function FaqsInner() {
  var _useState = (0, _react.useState)({
      status: false,
      key: 1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var handleToggle = function handleToggle(key) {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: null
      });
    } else {
      setIsActive({
        status: true,
        key: key
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "faqs-section-home1 mt-0 pt-120 pb-60 pb-md-20",
    style: {
      backgroundImage: 'url(images/background/1.jpg)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-column col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-column"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "accordion-box style-two wow fadeInLeft"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 1 ? "accordion block active-block" : "accordion block",
    onClick: function onClick() {
      return handleToggle(1);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 1 ? "acc-btn active" : "acc-btn"
  }, "What warranties do I have for installation?", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 1 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "There are many variations of passages of available, but the majority have suffered alteration in some form.")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 2 ? "accordion block active-block" : "accordion block",
    onClick: function onClick() {
      return handleToggle(2);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 2 ? "acc-btn active" : "acc-btn"
  }, "What is included in your services?", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 2 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "There are many variations of passages of available, but the majority have suffered alteration in some form.")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 3 ? "accordion block active-block" : "accordion block",
    onClick: function onClick() {
      return handleToggle(3);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 3 ? "acc-btn active" : "acc-btn"
  }, "What are the payment methods?", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 3 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "There are many variations of passages of available, but the majority have suffered alteration in some form.")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 4 ? "accordion block active-block" : "accordion block",
    onClick: function onClick() {
      return handleToggle(4);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 4 ? "acc-btn active" : "acc-btn"
  }, "How fast I get my order?", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 4 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "There are many variations of passages of available, but the majority have suffered alteration in some form."))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-column col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-column mb-md-50"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "accordion-box style-two bg-transparent p-0 wow fadeInLeft"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 5 ? "accordion block active-block pl-30 pr-30" : "accordion block pl-30 pr-30",
    onClick: function onClick() {
      return handleToggle(5);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 5 ? "acc-btn border-bottom-0 active" : "acc-btn border-bottom-0"
  }, "Produce Your Own Clean Save The Environment", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 5 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content border-bottom-0 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 6 ? "accordion block active-block pl-30 pr-30" : "accordion block pl-30 pr-30",
    onClick: function onClick() {
      return handleToggle(6);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 6 ? "acc-btn border-bottom-0 active" : "acc-btn border-bottom-0"
  }, "On-Site Service And Support For Certification", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 6 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content border-bottom-0 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "On-site service and support for certification refers to the assistance provided to companies or organizations that are seeking certification for their products, services, or processes. This assistance can include everything from helping companies understand the certification requirements to providing on-site training and support during the certification process.")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 7 ? "accordion block active-block pl-30 pr-30" : "accordion block pl-30 pr-30",
    onClick: function onClick() {
      return handleToggle(7);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 7 ? "acc-btn border-bottom-0 active" : "acc-btn border-bottom-0"
  }, "Light Source For Stable Conversion Efficiency", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 7 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content border-bottom-0 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements")))), /*#__PURE__*/_react.default.createElement("li", {
    className: isActive.key == 8 ? "accordion block active-block pl-30 pr-30" : "accordion block pl-30 pr-30",
    onClick: function onClick() {
      return handleToggle(8);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 8 ? "acc-btn border-bottom-0 active" : "acc-btn border-bottom-0"
  }, "Do You Give Guarantee And After Sales Service?", /*#__PURE__*/_react.default.createElement("div", {
    className: "icon fa fa-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: isActive.key == 8 ? "acc-content current" : "acc-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content border-bottom-0 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "As an AI language model, I do not provide products or services, so I do not offer guarantees or after-sales service. However, many companies that offer products or services do provide guarantees and after-sales service to their customers."), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Guarantees are a form of assurance that a product or service will meet certain expectations or standards, and if they don't, the company will either repair or replace the product or provide a refund. Guarantees can vary depending on the product or service, and may be limited by certain terms and conditions.")))))))))));
}
;