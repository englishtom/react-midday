"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MiddaySection = function MiddaySection(_ref) {
  var sections = _ref.sections,
      children = _ref.children;
  var data = {};
  (0, _forEach2["default"])(sections, function (section, name) {
    data["data-".concat(section)] = name;
  });
  return _react["default"].createElement("div", data, children);
};

MiddaySection.defaultProps = {
  sections: {
    midday: 'default'
  }
};
MiddaySection.propTypes = {
  sections: _propTypes["default"].object.isRequired
};
var _default = MiddaySection;
exports["default"] = _default;