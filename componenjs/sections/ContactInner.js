"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactForm;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ContactForm() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "contact-details"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pt-110 pb-70"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-7 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sub-title before-none"
  }, "Send us email"), /*#__PURE__*/_react.default.createElement("h2", null, "Feel free to write")), /*#__PURE__*/_react.default.createElement("form", {
    id: "contact_form",
    name: "contact_form",
    action: "/contact",
    method: "get"
  }, /*#__PURE__*/_react.default.createElement("div", {
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
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_subject",
    className: "form-control required",
    type: "text",
    placeholder: "Enter Subject"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_phone",
    className: "form-control",
    type: "text",
    placeholder: "Enter Phone"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "form_message",
    className: "form-control required",
    rows: 7,
    placeholder: "Enter Message"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "form_botcheck",
    className: "form-control",
    type: "hidden",
    value: ""
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "theme-btn btn-style-one mb-3 mb-sm-0",
    "data-loading-text": "Please wait..."
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Send message")), /*#__PURE__*/_react.default.createElement("button", {
    type: "reset",
    className: "theme-btn btn-style-one bg-theme-color5 mx-3"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Reset"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-5 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-details__right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sub-title before-none"
  }, "Need any help?"), /*#__PURE__*/_react.default.createElement("h2", null, "Get in touch with us"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled contact-details__info"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "d-block d-sm-flex align-items-sm-center "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lnr-icon-phone-plus"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text ml-xs--0 mt-xs-10"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Have any question?"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/contact"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Free"), " +92 (020)-9850"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "d-block d-sm-flex align-items-sm-center "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lnr-icon-envelope1"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text ml-xs--0 mt-xs-10"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Write email"), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/contact"
  }, "needhelp@company.com"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "d-block d-sm-flex align-items-sm-center "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lnr-icon-location"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text ml-xs--0 mt-xs-10"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Visit anytime"), /*#__PURE__*/_react.default.createElement("span", null, "66 broklyn golden street. New York"))))))))));
}