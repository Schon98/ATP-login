"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _auth = require("../contexts/auth");

var useAuth = function useAuth() {
  var context = (0, _react.useContext)(_auth.AuthContext);
  return context;
};

var _default = useAuth;
exports["default"] = _default;