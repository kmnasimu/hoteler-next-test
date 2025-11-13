"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ServiceDetails;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _Accordion = _interopRequireDefault(require("../elements/Accordion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var serviceListData = [{
  title: "Spa and Wellness",
  linkurl: "service-details"
}, {
  title: "Meeting Room",
  linkurl: "service-details"
}, {
  title: "Restaurant",
  linkurl: "service-details"
}, {
  title: "Free Wi-Fi",
  linkurl: "service-details"
}, {
  title: "Parking Facilities",
  linkurl: "service-details"
}, {
  title: "Room Service",
  linkurl: "service-details"
}];
function ServiceDetails() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "services-details pt-120 pb-120"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-4 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "service-sidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget service-sidebar-single"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-service-list"
  }, /*#__PURE__*/_react.default.createElement("ul", null, serviceListData.map(function (eachitem, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      className: index === 0 ? "current" : "",
      href: eachitem.linkurl
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fas fa-angle-right"
    }), /*#__PURE__*/_react.default.createElement("span", null, eachitem.title)));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "service-details-help"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "help-shape-1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "help-shape-2"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "help-title"
  }, "Contact with ", /*#__PURE__*/_react.default.createElement("br", null), " us for any ", /*#__PURE__*/_react.default.createElement("br", null), " advice"), /*#__PURE__*/_react.default.createElement("div", {
    className: "help-icon"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: " lnr-icon-phone-handset"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "help-contact"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Need help? Talk to an expert"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "tel:12463330079"
  }, "+892 ( 123 ) 112 - 9999"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-widget service-sidebar-single mt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "service-sidebar-single-btn wow fadeInUp",
    "data-wow-delay": "0.5s",
    "data-wow-duration": "1200m"
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/",
    className: "theme-btn btn-style-one d-grid"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fas fa-file-pdf"
  }), " download pdf file"))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-8 col-lg-8"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "services-details__content"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "images/resource/service-details.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "mt-4"
  }, "Service Overview"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "), /*#__PURE__*/_react.default.createElement("p", null, "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit  "), /*#__PURE__*/_react.default.createElement("div", {
    className: "content mt-40"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Service Center"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), /*#__PURE__*/_react.default.createElement("blockquote", {
    className: "blockquote-one"
  }, "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur")), /*#__PURE__*/_react.default.createElement("div", {
    className: "feature-list mt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row clearfix"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mb-3",
    src: "images/resource/service-d1.jpg",
    alt: "images"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 col-sm-12 column"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mb-3",
    src: "images/resource/service-d2.jpg",
    alt: "images"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: " mt-25"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Frequently Asked Question"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), /*#__PURE__*/_react.default.createElement(_Accordion.default, null))))))));
}
;