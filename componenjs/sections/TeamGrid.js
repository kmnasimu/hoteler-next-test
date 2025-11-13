"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Team;
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _animations = require("@/lib/animations");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var teamMembers = [{
  id: 1,
  image: '/images/resource/team-1.jpg',
  name: 'Michael Dean',
  designation: 'CEO & Founder'
}, {
  id: 2,
  image: '/images/resource/team-2.jpg',
  name: 'Frank Burton',
  designation: 'Kitchen Manager'
}, {
  id: 3,
  image: '/images/resource/team-3.jpg',
  name: 'Mya Mullins',
  designation: 'Hotel Manager'
}, {
  id: 4,
  image: '/images/resource/team-4.jpg',
  name: 'Ralph Nguyen',
  designation: 'Room Service'
}];
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "team-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "anim-icons"
  }, /*#__PURE__*/React.createElement(_image.default, {
    className: "image-1",
    src: "/images/icons/shape-15.png",
    alt: "",
    width: 200,
    height: 200
  })), /*#__PURE__*/React.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, teamMembers.map(function (member, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: member.id,
      className: "team-block col-lg-3 col-sm-6"
    }, /*#__PURE__*/React.createElement(_animations.FadeInLeft, {
      delay: index * 0.2,
      className: "inner-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "image overlay-anim"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: "/team-details"
    }, /*#__PURE__*/React.createElement(_image.default, {
      src: member.image,
      alt: member.name,
      width: 300,
      height: 400
    })))), /*#__PURE__*/React.createElement("div", {
      className: "info-box"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "name"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: "/team-details"
    }, member.name)), /*#__PURE__*/React.createElement("span", {
      className: "designation"
    }, member.designation), /*#__PURE__*/React.createElement("div", {
      className: "social-links"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: "/"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-facebook"
    })), /*#__PURE__*/React.createElement(_link.default, {
      href: "/"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-x-twitter"
    })), /*#__PURE__*/React.createElement(_link.default, {
      href: "/"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-linkedin"
    })), /*#__PURE__*/React.createElement(_link.default, {
      href: "/"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-youtube"
    })))))));
  }))));
}