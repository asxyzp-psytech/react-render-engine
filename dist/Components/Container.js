"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _Child = _interopRequireDefault(require("./Child"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * FUNCTION: Container COMPONENT
 * FUNCTIONALITY: POST CARD CONTAINER ELEMENT
 * @param {Object} props : COMPONENT PROPS
 * @returns <Container/> (JSX)
 */
const Container = props => {
  //VARIABLES
  //GETTING PROP VALUES
  const id = props.id; //CONTAINER ID TO INITIATE RENDERING PROCESS

  const template = props.template; //TEMPLATE OBJECT WHICH CONTAINS DATA FOR RENDERING

  const inputStyle = props.inputStyle; //INPUT STYLE WHICH IS PASSED TO THE CONTAINER ELEMENT
  //GETTING ELEMENT DATA

  const element = template.element[id]; //ID OF THE CONTAINER ELEMENT
  //GETTING ELEMENT STYLES

  const textStyleId = element.text; //ID OF TEXT STYLE ELEMENT

  const designStyleId = element.design; //ID OF DESIGN STYLE ELEMENT

  const textStyle = template.text[textStyleId]; //TEXT STYLE OBJECT

  const designStyle = template.design[designStyleId]; //DESIGN STYLE OBJECT

  const styles = _objectSpread(_objectSpread(_objectSpread({}, inputStyle), textStyle), designStyle); //CONTAINER STYLE = (INPUT + TEXT + DESIGN) STYLE OBJECT
  //GETTING ELEMENT PROPERTIES (CLASSES)


  const properties = element['properties']; //CONTAINS CLASSES AND ATTRIBUTES

  const classes = properties.filter(property => !property.includes("=")).join(' '); //STORES CLASSES OF CONTAINER ELEMENT: ['a', 'b', 'c=d'] => 'a b'
  //GETTING LIST OF CHILDREN OF THE ELEMENT;

  const children = element.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles,
    className: classes
  }, children.map(child => {
    return /*#__PURE__*/_react.default.createElement(_Child.default, {
      key: child,
      id: child,
      template: template,
      inputStyle: inputStyle
    });
  }));
}; //DEFINING DEFAULT PROPS


Container.defaultProps = {
  inputStyle: {}
}; //DEFINING PROP TYPES

Container.propTypes = {
  id: _propTypes.default.string.isRequired,
  template: _propTypes.default.object.isRequired,
  inputStyle: _propTypes.default.object
};
var _default = Container;
exports.default = _default;