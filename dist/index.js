"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Child", {
  enumerable: true,
  get: function get() {
    return _Child.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _Text.default;
  }
});

require("./Styles/style.css");

var _Text = _interopRequireDefault(require("./Components/Text"));

var _Child = _interopRequireDefault(require("./Components/Child"));

var _Image = _interopRequireDefault(require("./Components/Image"));

var _Container = _interopRequireDefault(require("./Components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }