"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopDetails;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
var _modules = require("swiper/modules");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
function ShopDetails() {
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var handleOnClick = function handleOnClick(index) {
    setActiveIndex(index);
  };
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    thumbsSwiper = _useState4[0],
    setThumbsSwiper = _useState4[1];
  var _useState5 = (0, _react.useState)({
      item1: 1,
      item2: 1,
      item3: 1
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    quantities = _useState6[0],
    setQuantities = _useState6[1];
  var handleQuantityChange = function handleQuantityChange(item, change) {
    setQuantities(function (prevQuantities) {
      var newQuantity = prevQuantities[item] + change;
      return _objectSpread(_objectSpread({}, prevQuantities), {}, _defineProperty({}, item, newQuantity > 0 ? newQuantity : 1));
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "product-details pt-120"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pb-70"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-xl-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bxslider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-content"
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 10,
    pagination: {
      clickable: true
    },
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
    },
    modules: [_modules.FreeMode, _modules.Navigation, _modules.Autoplay, _modules.Thumbs],
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    className: "slider-pager"
  }, /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details3.jpg",
    alt: "Image"
  })))), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [_modules.FreeMode, _modules.Navigation, _modules.Thumbs],
    className: "slider-pager"
  }, /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
    className: "product-thumb wide-100"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
    className: "product-thumb wide-100"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
    className: "product-thumb wide-100"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/product-details3.jpg",
    alt: "Image"
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-xl-6 product-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__top"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "product-details__title"
  }, "Backpack ", /*#__PURE__*/_react.default.createElement("span", null, "$76.00"), " ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__reveiw"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("span", null, "2 Customer Reviews")), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__content"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "product-details__content-text1"
  }, "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque."), /*#__PURE__*/_react.default.createElement("p", {
    className: "product-details__content-text2"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "REF."), " 4231/406 ", /*#__PURE__*/_react.default.createElement("br", null), " Available in store")), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__quantity"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "product-details__quantity-title"
  }, "Choose quantity"), /*#__PURE__*/_react.default.createElement("div", {
    className: "quantity-box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "sub",
    onClick: function onClick() {
      return handleQuantityChange('item1', -1);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-minus"
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    id: "1",
    value: quantities.item1,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "add",
    onClick: function onClick() {
      return handleQuantityChange('item1', 1);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-plus"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__buttons"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__buttons-1"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-cart",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Add to Cart"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__buttons-2"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details",
    className: "theme-btn btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Add to Wishlist")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details__social"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Share with friends")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "social-icon-one"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-facebook-f"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-pinterest"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-instagram"
  }))))))))), /*#__PURE__*/_react.default.createElement("section", {
    className: "product-description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pt-0 pb-90"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-discription"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-btn-box text-center"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "tab-btns tab-buttons clearfix"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: activeIndex === 1 ? "tab-btn active-btn" : "tab-btn",
    onClick: function onClick() {
      return handleOnClick(1);
    },
    "data-tab": "#tab1"
  }, "Description"), /*#__PURE__*/_react.default.createElement("li", {
    className: activeIndex === 2 ? "tab-btn active-btn" : "tab-btn",
    onClick: function onClick() {
      return handleOnClick(2);
    },
    "data-tab": "#tab2"
  }, "Reviews"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: activeIndex === 1 ? "tab active-tab" : "tab",
    id: "tab1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "product-description__title"
  }, "Description"), /*#__PURE__*/_react.default.createElement("p", {
    className: "product-description__text1"
  }, "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the "), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-description__list"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-arrow-right"
  }), " Nam at elit nec neque suscipit gravida.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-arrow-right"
  }), " Aenean egestas orci eu maximus tincidunt.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-arrow-right"
  }), " Curabitur vel turpis id tellus cursus laoreet.")))), /*#__PURE__*/_react.default.createElement("p", {
    className: "product-description__tex2"
  }, "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."))), /*#__PURE__*/_react.default.createElement("div", {
    className: activeIndex === 2 ? "tab active-tab" : "tab",
    id: "tab2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customer-comment"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row clearfix"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 comment-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-comment-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "comment-thumb"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/resource/testi-thumb1-1.png",
    alt: "Image"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "rating clearfix"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }))), /*#__PURE__*/_react.default.createElement("h5", null, "Jon D. William, ", /*#__PURE__*/_react.default.createElement("span", null, "10 Jan, 2023 . 4:00 pm")), /*#__PURE__*/_react.default.createElement("p", null, "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo."))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 comment-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-comment-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "comment-thumb"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/resource/testi-thumb1-2.png",
    alt: "Image"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "rating clearfix"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-star"
  }))), /*#__PURE__*/_react.default.createElement("h5", null, "Aleesha Brown, ", /*#__PURE__*/_react.default.createElement("span", null, "12 Feb, 2023 . 8:00 pm")), /*#__PURE__*/_react.default.createElement("p", null, "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo."))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-box"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Add Your Comments"), /*#__PURE__*/_react.default.createElement("form", {
    id: "contact_form",
    name: "contact_form",
    action: "/",
    method: "get"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "form_message",
    className: "form-control required",
    rows: 7,
    placeholder: "Enter Message"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_name",
    className: "form-control",
    type: "text",
    placeholder: "Enter Name"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_email",
    className: "form-control required email",
    type: "email",
    placeholder: "Enter Email"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "review-box clearfix"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Your Review"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "rating clearfix"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-star"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-star"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group clearfix"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-controls-stacked"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "custom-control material-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "material-control-input"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "material-control-indicator"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "description"
  }, " Save my name, email, and website in this browser for the next time I comment."))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_botcheck",
    className: "form-control",
    type: "hidden",
    value: ""
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "theme-btn btn-style-one",
    "data-loading-text": "Please wait..."
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Submit Comment"))))))))))), /*#__PURE__*/_react.default.createElement("section", {
    className: "related-product"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pt-0 pb-90"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Related Products"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-block col-lg-3 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/1.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Headphone")), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$32.00"), /*#__PURE__*/_react.default.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-block col-lg-3 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Lagage")), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$32.00"), /*#__PURE__*/_react.default.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-block col-lg-3 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/3.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, "Watch")), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$32.00"), /*#__PURE__*/_react.default.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-block col-lg-3 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/products/4.jpg",
    alt: "Image"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-box"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-heart"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-cart",
    className: "ui-btn"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/shop-product-details"
  }, "SD Card")), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$32.00"), /*#__PURE__*/_react.default.createElement("span", {
    className: "rating"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-star"
  })))))))));
}
;