"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * FUNCTION: Text COMPONENT
 * FUNCTIONALITY: COMPONENT FOR TEXT ELEMENT IN CARD
 * @param {Object} props : COMPONENT PROPS
 * @returns <Text/> (JSX)
 */
const Text = props => {
  //VARIABLES
  //GETTING PROP VALUES
  const id = props.id;
  const template = props.template;
  const inputStyle = props.inputStyle; //GETTING ELEMENT

  const element = template.element[id]; //ID OF THE CONTAINER ELEMENT
  //GETTING ELEMENT STYLES

  const textStyleId = element.text; //ID OF TEXT STYLE ELEMENT

  const designStyleId = element.design; //ID OF DESIGN STYLE ELEMENT

  const textStyle = template.text[textStyleId]; //TEXT STYLE OBJECT

  const designStyle = template.design[designStyleId]; //DESIGN STYLE OBJECT

  const styles = _objectSpread(_objectSpread(_objectSpread({}, inputStyle), textStyle), designStyle); //CONTAINER STYLE = (INPUT + TEXT + DESIGN) STYLE OBJECT
  //GETTING ELEMENT PROPERTIES (CLASSES)


  const properties = element['properties']; //CONTAINS CLASSES AND ATTRIBUTES

  const classes = properties.filter(property => !property.includes("=")).length > 0 ? properties.filter(property => !property.includes("=")).join(' ') : ''; //STORES CLASSES OF CONTAINER ELEMENT: ['a', 'b', 'c=d'] => 'a b'
  //GETTING LIST OF CHILDREN OF THE ELEMENT;

  const child = element.children.length > 0 ? element.children[0] : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    style: styles,
    className: classes //SECURITY RISK: NEED TO CHANGE THIS TO INCLUDE ICON ELEMENT
    ,
    dangerouslySetInnerHTML: {
      __html: child
    }
  });
}; //DEFINING DEFAULT PROPS


Text.defaultProps = {
  inputStyle: {}
}; //DEFINING PROP TYPES

Text.propTypes = {
  id: _propTypes.default.string,
  template: _propTypes.default.object,
  inputStyle: _propTypes.default.object
};
var _default = Text;
exports.default = _default;