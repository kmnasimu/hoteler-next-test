"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RoomsDetails;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _react2 = require("swiper/react");
var _modules = require("swiper/modules");
require("swiper/css");
require("swiper/css/free-mode");
require("swiper/css/navigation");
require("swiper/css/thumbs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var roomImages = ['/images/resource/room-1.jpg', '/images/resource/room-2.jpg', '/images/resource/room-4.jpg', '/images/resource/room-2.jpg'];
function RoomsDetails() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    thumbsSwiper = _useState2[0],
    setThumbsSwiper = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "blog-details pt-120 pb-120"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-8 col-lg-7 product-details rd-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-details__left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-heading"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title mb-4"
  }, "Double Room"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "40-inch LED TV / Mini bar / Non-smoking / USB charging"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "kodelisting-room-basic-info g-3"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-classic fat fa-users"
  }), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "csrbi-text"
  }, "2 Guests")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-classic fa-thin fa-bed-front fa-fw"
  }), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "csrbi-text"
  }, "2 Bed")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-classic fa-thin fa-bath fa-fw"
  }), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "csrbi-text"
  }, "2 Bathroom"))))), /*#__PURE__*/_react.default.createElement("div", {
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
  }, roomImages.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: index
    }, /*#__PURE__*/_react.default.createElement("figure", {
      className: "image-box"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: image,
      className: "lightbox-image",
      "data-fancybox": "gallery"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: image,
      alt: "Room image ".concat(index + 1)
    }))));
  })), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [_modules.FreeMode, _modules.Navigation, _modules.Thumbs],
    className: "slider-pager thumb-slider"
  }, roomImages.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "thumb-box"
    }, /*#__PURE__*/_react.default.createElement("figure", null, /*#__PURE__*/_react.default.createElement("img", {
      src: image,
      alt: "Room thumbnail ".concat(index + 1),
      style: {
        width: '100px',
        height: '100%',
        objectFit: 'cover'
      }
    }))));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "room-details__left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Description of the Room"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Unwind in our spacious Hoteler King Room, thoughtfully designed for comfort and relaxation. Featuring a plush king-sized bed, elegant d\xE9cor, and modern amenities, this room offers the perfect retreat after a day of travel or exploration."), /*#__PURE__*/_react.default.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-details__content-right mb-40 mt-20"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-details__details-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text mb-0"
  }, "Room Size"), /*#__PURE__*/_react.default.createElement("h6", null, "600Sq")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text mb-0"
  }, "Rooms Bed"), /*#__PURE__*/_react.default.createElement("h6", null, "2 Single Bed")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text mb-0"
  }, "Occupancy"), /*#__PURE__*/_react.default.createElement("h6", null, "Three Persons")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text mb-0"
  }, "View"), /*#__PURE__*/_react.default.createElement("h6", null, "Sea View"))))))), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Enjoy natural light streaming through large windows, a cozy seating area, and a work-friendly desk. The private en-suite bathroom is equipped with a rain shower, soft towels, and premium toiletries.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-40"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Room Facilities"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row room-facility-list mb-40"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "far fa-air-conditioner"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Air Conditioner"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-swimming-pool"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Swimming Pool"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-dumbbell"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Gymnasium"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-parking-circle"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Parking"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-shield-check"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Security"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list-one d-flex align-items-center me-sm-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon text-theme-color1 mr-10 flex-shrink-0"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-child"
  })), /*#__PURE__*/_react.default.createElement("h6", {
    className: "title m-0"
  }, "Playground"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "my-sm-0"
  }, "Share Details"), /*#__PURE__*/_react.default.createElement("div", {
    className: "blog-details__social-list"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-x-twitter"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-pinterest-p"
  })), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-instagram"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-4 p-lg-5 bg-light"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "mt-0"
  }, "Send Us Your Question"), /*#__PURE__*/_react.default.createElement("form", {
    id: "contact_form",
    name: "contact_form",
    method: "post"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_name",
    className: "form-control bg-white",
    type: "text",
    placeholder: "Enter Name"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_email",
    className: "form-control bg-white required email",
    type: "email",
    placeholder: "Enter Email"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_phone",
    className: "form-control bg-white required phone",
    type: "number",
    placeholder: "Enter Phone"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "form_message",
    className: "form-control bg-white required",
    rows: 5,
    placeholder: "Enter Message"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-0"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_botcheck",
    className: "form-control",
    type: "hidden"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "theme-btn btn-style-one",
    "data-loading-text": "Please wait..."
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Submit Comment"))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-4 col-lg-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kodelisting-room-booking mb-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kodelisting-room-booking-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-booking-title d-flex align-items-end justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "title"
  }, "Reserve:"), /*#__PURE__*/_react.default.createElement("span", null, "From ", /*#__PURE__*/_react.default.createElement("span", {
    className: "base-price"
  }, "$299"), "/night")), /*#__PURE__*/_react.default.createElement("form", {
    className: "reservation-form",
    id: "contact_form2",
    name: "contact_form",
    method: "post"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    name: "checkin_date",
    className: "form-control",
    placeholder: "Check In"
  }), /*#__PURE__*/_react.default.createElement("label", null, "Check In"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-floating"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    name: "checkout_date",
    className: "form-control",
    placeholder: "Check Out"
  }), /*#__PURE__*/_react.default.createElement("label", null, "Check Out"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 mb-3"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select"
  }, /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    defaultValue: ""
  }, "Room"), /*#__PURE__*/_react.default.createElement("option", null, "1"), /*#__PURE__*/_react.default.createElement("option", null, "2"), /*#__PURE__*/_react.default.createElement("option", null, "3"), /*#__PURE__*/_react.default.createElement("option", null, "4"), /*#__PURE__*/_react.default.createElement("option", null, "More"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 mb-3"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select"
  }, /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    defaultValue: ""
  }, "Adults"), /*#__PURE__*/_react.default.createElement("option", null, "1"), /*#__PURE__*/_react.default.createElement("option", null, "2"), /*#__PURE__*/_react.default.createElement("option", null, "3"), /*#__PURE__*/_react.default.createElement("option", null, "4"), /*#__PURE__*/_react.default.createElement("option", null, "More"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6 mb-3"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select"
  }, /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    defaultValue: ""
  }, "Children"), /*#__PURE__*/_react.default.createElement("option", null, "1"), /*#__PURE__*/_react.default.createElement("option", null, "2"), /*#__PURE__*/_react.default.createElement("option", null, "3"), /*#__PURE__*/_react.default.createElement("option", null, "4"), /*#__PURE__*/_react.default.createElement("option", null, "More")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-booking-title mt-30"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "title"
  }, "Extra Services"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "laundry",
    value: "laundry"
  }), "Laundry"), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-price"
  }, "$10 / Night"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "car_rental",
    value: "Car Rental"
  }), "Car Rental"), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-price"
  }, "$10 / Night"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "breakfast",
    value: "Breakfast"
  }), "Breakfast"), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-price"
  }, "$10 / Night"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-row"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "sea_view",
    value: "Sea View"
  }), "Sea View"), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-price"
  }, "$10 / Night"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-row mb-30"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox-label custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "wifi",
    value: "Wifi"
  }), "Wifi"), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-price"
  }, "$10 / Night"))), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "room-booking-title d-flex align-items-end justify-content-between mt-20"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "title"
  }, "Total Cost"), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "base-price price-value"
  }, "$299")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "total-base-price"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "summary"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "price-content d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label"
  }, "Total Base Price ", /*#__PURE__*/_react.default.createElement("i", null, "i")), /*#__PURE__*/_react.default.createElement("div", {
    className: "amount"
  }, "$299")), /*#__PURE__*/_react.default.createElement("div", {
    className: "total d-flex justify-content-between mt-2"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Total"), /*#__PURE__*/_react.default.createElement("div", null, "$299")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 mt-2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_botcheck",
    className: "form-control",
    type: "hidden"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "theme-btn btn-style-one w-100",
    "data-loading-text": "Please wait..."
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Book Now")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__single sidebar__post"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "sidebar__title"
  }, "Compare Room"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sidebar__post-list list-unstyled"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/news-info-1.jpg",
    alt: "Economy Room"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "sidebar__post-content-meta"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-door-open"
  }), "Economy Room"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/"
  }, "$175/Night")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/news-info-2.jpg",
    alt: "Deluxe Room"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "sidebar__post-content-meta"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-door-open"
  }), "Deluxe Room"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/"
  }, "$250")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/resource/news-info-1.jpg",
    alt: "Super Deluxe Room"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar__post-content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "sidebar__post-content-meta"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-door-open"
  }), "Super Deluxe Room"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/"
  }, "$320"))))))))))));
}