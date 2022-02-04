"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * FUNCTION: Image COMPONENT
 * FUNCTIONALITY: COMPONENT FOR IMAGE ELEMENT IN CARD 
 * @param {Object} props : COMPONENT PROPS
 * @returns <Image/> (JSX)
 */
const Image = props => {
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
  //GETTING ELEMENT PROPERTIES (CLASSES & ATTRIBUTES)


  const properties = element['properties']; //CONTAINS CLASSES AND ATTRIBUTES

  const classes = properties.filter(property => !property.includes("=")).join(' '); //STORES CLASSES OF CONTAINER ELEMENT: ['a', 'b', 'c=d'] => 'a b'

  const alt = properties.filter(property => property.includes("alt")).length === 0 ? '' : properties.filter(property => property.includes("alt"))[0].split('=')[1]; //GETTING ALT ATTRIBUTE's VALUE

  const src = properties.filter(property => property.includes("src")).length === 0 ? '' : properties.filter(property => property.includes("src"))[0].split('=')[1]; //GETTING SRC ATTRIBUTE's VALUE
  //METHODS

  /**
   * FUNCTION : changeSrc(event)
   * FUNCTIONALITY : CHANGING IMAGE SOURCE TO DEFAULT IMAGE SOURCE VALUE
   * @param {*} event : event OBJECT
   * RETURN : UNDEFINED
   */

  const changeSrc = event => {
    event.target.src = "https://i.ibb.co/HBYg58n/psytech-err-img.png";
  };

  return /*#__PURE__*/_react.default.createElement("img", {
    id: id,
    src: src,
    alt: alt,
    style: styles,
    className: classes,
    onError: changeSrc
  });
}; //DEFINING DEFAULT PROPS


Image.defaultProps = {
  inputStyle: {}
}; //DEFINING PROP TYPES

Image.propTypes = {
  id: _propTypes.default.string,
  template: _propTypes.default.object,
  inputStyle: _propTypes.default.object
};
var _default = Image;
exports.default = _default;