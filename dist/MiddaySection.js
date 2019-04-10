"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRequiredIf = _interopRequireDefault(require("react-required-if"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MiddaySection = function MiddaySection(_ref) {
  var sections = _ref.sections,
      children = _ref.children,
      tagName = _ref.tagName,
      className = _ref.className,
      id = _ref.id,
      name = _ref.name;
  var data = {};

  if (name) {
    data['data-midday'] = name;
  } else {
    (0, _forEach2["default"])(sections, function (name, section) {
      data["data-".concat(section)] = name;
    });
  }

  return _react["default"].createElement(tagName, _objectSpread({}, data, {
    className: className,
    id: id
  }), children);
};

MiddaySection.defaultProps = {
  sections: {
    midday: 'default'
  },
  tagName: 'div'
};
MiddaySection.propTypes = {
  className: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: (0, _reactRequiredIf["default"])(_propTypes["default"].string, function (props) {
    return !props.sections;
  }),
  sections: (0, _reactRequiredIf["default"])(_propTypes["default"].object, function (props) {
    return !props.name;
  }),
  tagName: _propTypes["default"].string.isRequired
};
var _default = MiddaySection;
exports["default"] = _default;