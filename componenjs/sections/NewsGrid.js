"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogGrid;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function BlogGrid() {
  var data = [{
    img: "news-1.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Avalible Now Health <br />Club For Your Fitness",
    comment: "0 comments"
  }, {
    img: "news-2.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Retore Lighting Design <br />in The Hotel",
    comment: "0 comments"
  }, {
    img: "news-3.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Swiming Benefits is <br />Good For Your Health",
    comment: "0 comments"
  }, {
    img: "news-2.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Avalible Now Health <br />Club For Your Fitness",
    comment: "0 comments"
  }, {
    img: "news-3.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Swiming Benefits is <br />Good For Your Health",
    comment: "0 comments"
  }, {
    img: "news-1.jpg",
    date: "DEC<br /><small>20</small>",
    author: "Admin",
    title: "Retore Lighting Design <br />in The Hotel",
    comment: "0 comments"
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "news-section pb-90"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, data.map(function (item, NewsGrid) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: NewsGrid,
      className: "news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-box wow fadeInLeft"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "image-box"
    }, /*#__PURE__*/_react.default.createElement("figure", {
      className: "image overlay-anim"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/resource/".concat(item.img),
      alt: "Image"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      className: "date",
      dangerouslySetInnerHTML: {
        __html: item.date
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "post-info"
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-user"
    }), item.author), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-comments"
    }), item.comment)), /*#__PURE__*/_react.default.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details",
      dangerouslySetInnerHTML: {
        __html: item.title
      }
    })), /*#__PURE__*/_react.default.createElement(_link.default, {
      href: "/news-details",
      className: "read-more"
    }, "Read More", /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-arrow-right"
    })))));
  })))));
}
;