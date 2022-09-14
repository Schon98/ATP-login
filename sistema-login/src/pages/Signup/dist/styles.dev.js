"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strong = exports.labelError = exports.LabelSignin = exports.Label = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  a {\n    text-decoration: none;\n    color: #676767;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: red;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: #676767;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 600;\n  color: #676767;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  gap: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0 1px 2px #0003;\n  background-color: white;\n  max-width: 350px;\n  padding: 20px;\n  border-radius: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Content = _styledComponents["default"].div(_templateObject2());

exports.Content = Content;

var Label = _styledComponents["default"].label(_templateObject3());

exports.Label = Label;

var LabelSignin = _styledComponents["default"].label(_templateObject4());

exports.LabelSignin = LabelSignin;

var labelError = _styledComponents["default"].label(_templateObject5());

exports.labelError = labelError;

var Strong = _styledComponents["default"].strong(_templateObject6());

exports.Strong = Strong;