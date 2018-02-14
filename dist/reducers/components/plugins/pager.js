'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleActions;

var _immutable = require('immutable');

var _ActionTypes = require('../../../constants/ActionTypes');

var _handleActions2 = require('./../../../util/handleActions');

var _handleActions3 = _interopRequireDefault(_handleActions2);

var _pager = require('./../../actionHelpers/plugins/pager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = new _immutable.OrderedMap();

var _default = (0, _handleActions3.default)((_handleActions = {}, _defineProperty(_handleActions, _ActionTypes.PAGE_LOCAL, _pager.pageLocal), _defineProperty(_handleActions, _ActionTypes.PAGE_REMOTE, _pager.pageRemote), _handleActions), initialState);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/reducers/components/plugins/pager.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/components/plugins/pager.js');
}();

;