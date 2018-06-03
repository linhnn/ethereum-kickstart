'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nngoc2/Documents/GitHub/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          request: request,
          id: index,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Found ', this.props.requestCount, ' requests'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approvresCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImFwcHJvdnJlc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7Z0NBaUJRO21CQUNWOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUFPLEFBQUM7ZUFBRCxBQUNNLEFBQ0w7bUJBRkQsQUFFVSxBQUNUO2NBSEQsQUFHSyxBQUNKO21CQUFTLE9BQUEsQUFBSyxNQUpmLEFBSXFCLEFBQ3BCOzBCQUFnQixPQUFBLEFBQUssTUFMdEIsQUFLNEI7O3NCQUw1Qjt3QkFBUCxBQUFPLEFBT1I7QUFQUTtBQUNDLFNBREQ7QUFEVCxBQUFPLEFBU1IsT0FUUTs7Ozs2QkFXQTtVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUUsY0FBekMsQUFBdUMsQUFBZ0I7b0JBQXZEO3NCQUFBO0FBQUE7U0FKTixBQUVFLEFBQ0UsQUFDRSxBQUdKLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0osK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDSztBQURMO0FBQUEsY0FuQkosQUFPRSxBQVlFLEFBQ0ssQUFBSyxBQUdaLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixjQXhCM0IsQUFDRSxBQXVCRSxBQUdMOzs7OzsyRyxBQTFENEI7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNQUFsQixBLEFBQ0Y7QSwyQkFBVyx3QkFBQSxBLEFBQVM7O3VCQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCQUFqQixBQUFtQyxBOzttQkFBeEQ7QTs7dUJBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOzttQkFBekQ7QTs7eUNBRWlCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMzRDt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0FBSG9CLEFBQ3JCLEEsaUJBQUEsQ0FEcUI7O21CQUFqQjtBO2lEQU9DLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0JBQW5DLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkZ0IsQSxBQThEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL25uZ29jMi9Eb2N1bWVudHMvR2l0SHViL2tpY2tzdGFydCJ9