"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var _Image = _interopRequireDefault(require("./Image"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//IMPORTING MODULES/PACKAGES

/**
 * FUNCTION: Child COMPONENT
 * FUNCTIONALITY : RENDERS A CHILD COMPONENT
 * @param {*} props PROPERTIES OF THE CHILD COMPONENT
 * @returns <Child/> (JSX)
 */
const Child = props => {
  //VARIABLES
  //GETTING PROP VALUES
  const id = props.id;
  const template = props.template;
  const inputStyle = props.inputStyle; //RETURNING APPROPRIATE COMPONENT BASED ON TYPE

  if (template.element[id].type === "container") {
    return /*#__PURE__*/_react.default.createElement(_Container.default, {
      id: id,
      template: template,
      inputStyle: inputStyle
    });
  } else if (template.element[id].type === "image") {
    return /*#__PURE__*/_react.default.createElement(_Image.default, {
      id: id,
      template: template,
      inputStyle: inputStyle
    });
  } else if (template.element[id].type === "text") {
    return /*#__PURE__*/_react.default.createElement(_Text.default, {
      id: id,
      template: template,
      inputStyle: inputStyle
    });
  }
}; //DEFINING DEFAULT PROPS


Child.defaultProps = {
  inputStyle: {}
}; //DEFINING PROP TYPES

Child.propTypes = {
  id: _propTypes.default.string.isRequired,
  template: _propTypes.default.object.isRequired,
  inputStyle: _propTypes.default.object
};
var _default = Child;
exports.default = _default;