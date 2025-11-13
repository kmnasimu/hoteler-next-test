"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShopSidebar;
var _link = _interopRequireDefault(require("next/link"));
var _PortfolioFilter = _interopRequireDefault(require("../elements/PortfolioFilter2"));
var _PriceFilter = _interopRequireDefault(require("../elements/PriceFilter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ShopSidebar() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "featured-products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row clearfix"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-3 col-md-12 col-sm-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shop-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-search"
  }, /*#__PURE__*/React.createElement("form", {
    action: "shop-productsclassName=",
    method: "post",
    className: "search-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    name: "search-field",
    placeholder: "Search...",
    required: true
  }), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("i", {
    className: "lnr lnr-icon-search"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-widget category-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-title"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "widget-title"
  }, "Categories")), /*#__PURE__*/React.createElement("div", {
    className: "widget-content"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "category-list clearfix"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Cloud Solution")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Cyber Data")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "SEO Marketing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "UI/UX Design")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Web Development")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Artifical Intelligence"))))), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-widget price-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-title"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "widget-title"
  }, "Filter by Price")), /*#__PURE__*/React.createElement(_PriceFilter.default, null)), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-widget post-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-title"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "widget-title"
  }, "Popular Products")), /*#__PURE__*/React.createElement("div", {
    className: "post-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "post-thumb"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-detailsclassName="
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/resource/products/thumb-1.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Best Headset"), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$45.00")), /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "post-thumb"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-detailsclassName="
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/resource/products/thumb-2.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Quality Battery"), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$34.00")), /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "post-thumb"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-detailsclassName="
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/resource/products/thumb-3.jpg",
    alt: "Image"
  }))), /*#__PURE__*/React.createElement(_link.default, {
    href: "shop-product-detailsclassName="
  }, "Smart Watch"), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$29.00")))))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-9 col-md-12 col-sm-12 content-side mt-md-60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mixitup-gallery"
  }, /*#__PURE__*/React.createElement(_PortfolioFilter.default, null)))))));
}