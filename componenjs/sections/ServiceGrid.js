"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Room;
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _animations = require("@/lib/animations");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var rooms = [{
  id: 1,
  image: '/images/resource/room-service1-1.jpg',
  title: 'Junior Suite',
  price: '$150/ Night',
  link: '/room-details',
  facilities: {
    persons: '1-2 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}, {
  id: 2,
  image: '/images/resource/room-service1-2.jpg',
  title: 'Family Suite',
  price: '$250/ Night',
  link: '/room-details',
  facilities: {
    persons: '2-4 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}, {
  id: 3,
  image: '/images/resource/room-service1-3.jpg',
  title: 'Deluxe Suite',
  price: '$350/ Night',
  link: '/room-details',
  facilities: {
    persons: '2-4 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}, {
  id: 4,
  image: '/images/resource/room-service1-2.jpg',
  title: 'Family Suite',
  price: '$250/ Night',
  link: '/room-details',
  facilities: {
    persons: '2-4 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}, {
  id: 5,
  image: '/images/resource/room-service1-3.jpg',
  title: 'Deluxe Suite',
  price: '$350/ Night',
  link: '/room-details',
  facilities: {
    persons: '2-4 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}, {
  id: 6,
  image: '/images/resource/room-service1-1.jpg',
  title: 'Junior Suite',
  price: '$150/ Night',
  link: '/room-details',
  facilities: {
    persons: '1-2 Persons',
    bed: 'King Size Bed',
    bathtub: 'Bathtub',
    wifi: 'Free Wifi'
  }
}];
function Room() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "room-service-section pt-120 pb-60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, rooms.map(function (room, index) {
    return /*#__PURE__*/React.createElement(_animations.FadeInUp, {
      key: room.id,
      delay: index * 0.3,
      className: "room-service-block-one col-lg-4 col-sm-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "image-box"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "image mb-0"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: room.link
    }, /*#__PURE__*/React.createElement(_image.default, {
      src: room.image,
      alt: room.title,
      width: 400,
      height: 300
    })))), /*#__PURE__*/React.createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner-box"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "title"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: room.link
    }, room.title)), /*#__PURE__*/React.createElement("div", {
      className: "price"
    }, room.price)), /*#__PURE__*/React.createElement("div", {
      className: "facilities-box align-items-center d-flex justify-content-between"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "facilities-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
      className: "fal fa-circle-user me-2"
    }), room.facilities.persons), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
      className: "fal fa-bed me-2"
    }), room.facilities.bed)), /*#__PURE__*/React.createElement("ul", {
      className: "facilities-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
      className: "fal fa-bath me-2"
    }), room.facilities.bathtub), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
      className: "fal fa-wifi me-2"
    }), room.facilities.wifi))))));
  }))));
}