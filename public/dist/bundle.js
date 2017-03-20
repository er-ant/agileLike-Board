var table =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _tableHead = __webpack_require__(2);

var _tableBody = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = exports.Table = function Table(data, statuses) {
  _classCallCheck(this, Table);

  var statusesArray = statuses.split(' ');
  this.element = document.createElement('table');

  var tHead = new _tableHead.TableHead(data, statusesArray);
  this.element.appendChild(tHead.element);

  var tBody = new _tableBody.TableBody(data, statusesArray);
  this.element.appendChild(tBody.element);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataMock = exports.dataMock = [{
  projName: 'MoneyMoneyMoney',
  projLink: 'https://www.yandex.ru/',
  customer: 'Olho Voihovski Jr.',
  country: 'United States of America',
  manager: 'O. Romanenko',
  status: 'TODO',
  inStatus: '7 hours',
  contact: 'tomorrow'
}, {
  projName: 'Setting mark up for the agile',
  projLink: 'https://www.vk.com/',
  customer: 'Jojo Mogo Toggle',
  country: 'Jamaica',
  manager: 'V. Drogan',
  status: 'TODO',
  inStatus: '0',
  contact: 'today'
}, {
  projName: 'DealerPoint JS update to ES7',
  projLink: 'https://learn.javascript.ru/',
  customer: 'Ilya Kantor',
  country: 'Russian Federation',
  manager: 'O. Romanenko',
  status: 'TEST',
  inStatus: '7 hours 23 minutes',
  contact: 'now'
}];

var statuses = exports.statuses = 'TODO PREVIEW TEST FIX OFFER';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableHead = exports.TableHead = function () {
  function TableHead(data, statuses) {
    _classCallCheck(this, TableHead);

    this.data = {};
    this.element = document.createElement('thead');
    this.statuses = statuses;

    this.parseData(data);

    this._buildHeader();
  }

  _createClass(TableHead, [{
    key: 'parseData',
    value: function parseData(data) {
      var _this = this;

      var count = 0;

      this.statuses.forEach(function (status) {
        count = 0;

        data.forEach(function (deal) {
          if (deal.status == status) {
            count++;
          }
        });

        _this.data[status] = count;
      });
    }
  }, {
    key: 'theadTemplate',
    value: function theadTemplate(status) {
      return '\n      <th>' + status + '\n        <span class="count">' + this.data[status] + '</span>\n      </th>\n    ';
    }
  }, {
    key: 'parseDataHeader',
    value: function parseDataHeader(data) {
      for (var key in data) {
        var attr = object[key];
      }
    }
  }, {
    key: '_buildHeader',
    value: function _buildHeader() {
      var _this2 = this;

      var headers = '';
      this.statuses.forEach(function (status) {
        headers += _this2.theadTemplate(status);
      });
      this.element.innerHTML = headers;
    }
  }]);

  return TableHead;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowDrop = allowDrop;
exports.drag = drag;
exports.drop = drop;

var _data = __webpack_require__(1);

var _table = __webpack_require__(0);

document.addEventListener('DOMContentLoaded', function () {
  var table = new _table.Table(_data.dataMock, _data.statuses);
  document.getElementById('table-wrapper').appendChild(table.element);
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableBody = exports.TableBody = function () {
  function TableBody(data, statuses) {
    _classCallCheck(this, TableBody);

    this.element = document.createElement('tbody');
    this.statuses = statuses;

    this._buildBody(data);
  }

  _createClass(TableBody, [{
    key: 'tDealTemplate',
    value: function tDealTemplate(deal) {
      return '\n      <div class="deal ' + this.callStatus(deal) + '">\n        <p class="deal-header">\n          <a href="/' + deal.projLink + '" target="_blank"><strong>' + deal.projName + '</strong></a>\n        </p>\n        <p class="attributes">\n          <b>\u041A\u043B\u0438\u0435\u043D\u0442</b>: ' + deal.customer + '<br>\n          <b>\u0421\u0442\u0440\u0430\u043D\u0430</b>: ' + deal.country + '<br>\n        </p>\n        <p class="assigned-manager">\n          <b>\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440</b>: ' + deal.manager + '<br>\n          <b>\u0412 \u0441\u0442\u0430\u0442\u0443\u0441\u0435</b>: ' + deal.inStatus + '<br>\n        </p>\n      </div>\n    ';
    }
  }, {
    key: 'callStatus',
    value: function callStatus(deal) {
      if (deal.contact == 'tomorrow') {
        return 'intime';
      } else {
        return 'overdue';
      }
    }
  }, {
    key: '_buildBody',
    value: function _buildBody(data) {
      var _this = this;

      var cells = {};
      var row = document.createElement('tr');

      this.statuses.forEach(function (item) {
        cells[item] = document.createElement('td');
        cells[item].setAttribute('class', 'deal-status-col');
      });

      data.forEach(function (deal) {
        var divContainer = document.createElement('div');
        divContainer.innerHTML = _this.tDealTemplate(deal);
        cells[deal.status].appendChild(divContainer.childNodes[1]);
      });

      Object.keys(cells).map(function (objectKey, index) {
        var value = cells[objectKey];
        row.appendChild(value);
      });

      this.element.appendChild(row);
    }
  }]);

  return TableBody;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzUwNWY5YzhiZDgwZTU2OWNkYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RhYmxlLWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RhYmxlLWJvZHkuanMiXSwibmFtZXMiOlsiVGFibGUiLCJkYXRhIiwic3RhdHVzZXMiLCJzdGF0dXNlc0FycmF5Iiwic3BsaXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidEhlYWQiLCJhcHBlbmRDaGlsZCIsInRCb2R5IiwiZGF0YU1vY2siLCJwcm9qTmFtZSIsInByb2pMaW5rIiwiY3VzdG9tZXIiLCJjb3VudHJ5IiwibWFuYWdlciIsInN0YXR1cyIsImluU3RhdHVzIiwiY29udGFjdCIsIlRhYmxlSGVhZCIsInBhcnNlRGF0YSIsIl9idWlsZEhlYWRlciIsImNvdW50IiwiZm9yRWFjaCIsImRlYWwiLCJrZXkiLCJhdHRyIiwib2JqZWN0IiwiaGVhZGVycyIsInRoZWFkVGVtcGxhdGUiLCJpbm5lckhUTUwiLCJhbGxvd0Ryb3AiLCJkcmFnIiwiZHJvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJsZSIsImdldEVsZW1lbnRCeUlkIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJpZCIsImdldERhdGEiLCJUYWJsZUJvZHkiLCJfYnVpbGRCb2R5IiwiY2FsbFN0YXR1cyIsImNlbGxzIiwicm93IiwiaXRlbSIsInNldEF0dHJpYnV0ZSIsImRpdkNvbnRhaW5lciIsInREZWFsVGVtcGxhdGUiLCJjaGlsZE5vZGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm9iamVjdEtleSIsImluZGV4IiwidmFsdWUiXSwibWFwcGluZ3Mi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RDs7QUFNQUMsYUFBT0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CUyxHQUFuQixDQUF1QixVQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBc0I7QUFDM0MsWUFBSUMsUUFBUVosTUFBTVUsU0FBTixDQUFaO0FBQ0FULFlBQUl4QyxXQUFKLENBQWdCbUQsS0FBaEI7QUFDRCxPQUhEOztBQUtBLFdBQUt2RCxPQUFMLENBQWFJLFdBQWIsQ0FBeUJ3QyxHQUF6QjtBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1MDVmOWM4YmQ4MGU1NjljZGIxIiwiaW1wb3J0IHsgVGFibGVIZWFkIH0gZnJvbSAnLi90YWJsZS1oZWFkJztcbmltcG9ydCB7IFRhYmxlQm9keSB9IGZyb20gJy4vdGFibGUtYm9keSc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHN0YXR1c2VzKSB7XG4gICAgbGV0IHN0YXR1c2VzQXJyYXkgPSBzdGF0dXNlcy5zcGxpdCgnICcpO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBsZXQgdEhlYWQgPSBuZXcgVGFibGVIZWFkKGRhdGEsIHN0YXR1c2VzQXJyYXkpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0SGVhZC5lbGVtZW50KTtcblxuICAgIGxldCB0Qm9keSA9IG5ldyBUYWJsZUJvZHkoZGF0YSwgc3RhdHVzZXNBcnJheSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRCb2R5LmVsZW1lbnQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3RhYmxlLmpzIiwiZXhwb3J0IGNvbnN0IGRhdGFNb2NrID0gW1xuICB7XG4gICAgcHJvak5hbWU6ICdNb25leU1vbmV5TW9uZXknLFxuICAgIHByb2pMaW5rOiAnaHR0cHM6Ly93d3cueWFuZGV4LnJ1LycsXG4gICAgY3VzdG9tZXI6ICdPbGhvIFZvaWhvdnNraSBKci4nLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnLFxuICAgIG1hbmFnZXI6ICdPLiBSb21hbmVua28nLFxuICAgIHN0YXR1czogJ1RPRE8nLFxuICAgIGluU3RhdHVzOiAnNyBob3VycycsXG4gICAgY29udGFjdDogJ3RvbW9ycm93J1xuICB9LCB7XG4gICAgcHJvak5hbWU6ICdTZXR0aW5nIG1hcmsgdXAgZm9yIHRoZSBhZ2lsZScsXG4gICAgcHJvakxpbms6ICdodHRwczovL3d3dy52ay5jb20vJyxcbiAgICBjdXN0b21lcjogJ0pvam8gTW9nbyBUb2dnbGUnLFxuICAgIGNvdW50cnk6ICdKYW1haWNhJyxcbiAgICBtYW5hZ2VyOiAnVi4gRHJvZ2FuJyxcbiAgICBzdGF0dXM6ICdUT0RPJyxcbiAgICBpblN0YXR1czogJzAnLFxuICAgIGNvbnRhY3Q6ICd0b2RheSdcbiAgfSwge1xuICAgIHByb2pOYW1lOiAnRGVhbGVyUG9pbnQgSlMgdXBkYXRlIHRvIEVTNycsXG4gICAgcHJvakxpbms6ICdodHRwczovL2xlYXJuLmphdmFzY3JpcHQucnUvJyxcbiAgICBjdXN0b21lcjogJ0lseWEgS2FudG9yJyxcbiAgICBjb3VudHJ5OiAnUnVzc2lhbiBGZWRlcmF0aW9uJyxcbiAgICBtYW5hZ2VyOiAnTy4gUm9tYW5lbmtvJyxcbiAgICBzdGF0dXM6ICdURVNUJyxcbiAgICBpblN0YXR1czogJzcgaG91cnMgMjMgbWludXRlcycsXG4gICAgY29udGFjdDogJ25vdydcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gJ1RPRE8gUFJFVklFVyBURVNUIEZJWCBPRkZFUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YS5qcyIsImV4cG9ydCBjbGFzcyBUYWJsZUhlYWQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdGF0dXNlcykge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgdGhpcy5zdGF0dXNlcyA9IHN0YXR1c2VzO1xuXG4gICAgdGhpcy5wYXJzZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLl9idWlsZEhlYWRlcigpO1xuICB9XG5cbiAgcGFyc2VEYXRhKGRhdGEpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgdGhpcy5zdGF0dXNlcy5mb3JFYWNoKHN0YXR1cyA9PiB7XG4gICAgICBjb3VudCA9IDA7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChkZWFsID0+IHtcbiAgICAgICAgaWYoZGVhbC5zdGF0dXMgPT0gc3RhdHVzKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGF0YVtzdGF0dXNdID0gY291bnQ7XG4gICAgfSk7XG4gIH1cblxuICB0aGVhZFRlbXBsYXRlKHN0YXR1cykge1xuICAgIHJldHVybiBgXG4gICAgICA8dGg+JHtzdGF0dXN9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj4ke3RoaXMuZGF0YVtzdGF0dXNdfTwvc3Bhbj5cbiAgICAgIDwvdGg+XG4gICAgYDtcbiAgfVxuXG4gIHBhcnNlRGF0YUhlYWRlcihkYXRhKSB7XG4gICAgZm9yKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgbGV0IGF0dHIgPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cblxuICBfYnVpbGRIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSAnJztcbiAgICB0aGlzLnN0YXR1c2VzLmZvckVhY2goc3RhdHVzID0+IHtcbiAgICAgIGhlYWRlcnMgKz0gdGhpcy50aGVhZFRlbXBsYXRlKHN0YXR1cyk7XG4gICAgfSlcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaGVhZGVycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90YWJsZS1oZWFkLmpzIiwiaW1wb3J0IHsgZGF0YU1vY2ssIHN0YXR1c2VzIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi9hcHAvdGFibGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsZXQgdGFibGUgPSBuZXcgVGFibGUoZGF0YU1vY2ssIHN0YXR1c2VzKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXdyYXBwZXInKS5hcHBlbmRDaGlsZCh0YWJsZS5lbGVtZW50KTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEcm9wKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnKGV2KSB7XG4gIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3AoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImV4cG9ydCBjbGFzcyBUYWJsZUJvZHkge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdGF0dXNlcykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgdGhpcy5zdGF0dXNlcyA9IHN0YXR1c2VzO1xuXG4gICAgdGhpcy5fYnVpbGRCb2R5KGRhdGEpO1xuICB9XG5cbiAgdERlYWxUZW1wbGF0ZShkZWFsKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJkZWFsICR7dGhpcy5jYWxsU3RhdHVzKGRlYWwpfVwiPlxuICAgICAgICA8cCBjbGFzcz1cImRlYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi8ke2RlYWwucHJvakxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHN0cm9uZz4ke2RlYWwucHJvak5hbWV9PC9zdHJvbmc+PC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiYXR0cmlidXRlc1wiPlxuICAgICAgICAgIDxiPtCa0LvQuNC10L3RgjwvYj46ICR7ZGVhbC5jdXN0b21lcn08YnI+XG4gICAgICAgICAgPGI+0KHRgtGA0LDQvdCwPC9iPjogJHtkZWFsLmNvdW50cnl9PGJyPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiYXNzaWduZWQtbWFuYWdlclwiPlxuICAgICAgICAgIDxiPtCc0LXQvdC10LTQttC10YA8L2I+OiAke2RlYWwubWFuYWdlcn08YnI+XG4gICAgICAgICAgPGI+0JIg0YHRgtCw0YLRg9GB0LU8L2I+OiAke2RlYWwuaW5TdGF0dXN9PGJyPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY2FsbFN0YXR1cyhkZWFsKSB7XG4gICAgaWYoZGVhbC5jb250YWN0ID09ICd0b21vcnJvdycpIHtcbiAgICAgIHJldHVybiAnaW50aW1lJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdvdmVyZHVlJztcbiAgICB9XG4gIH1cblxuICBfYnVpbGRCb2R5KGRhdGEpIHtcbiAgICBsZXQgY2VsbHMgPSB7fTtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIHRoaXMuc3RhdHVzZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNlbGxzW2l0ZW1dID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIGNlbGxzW2l0ZW1dLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVhbC1zdGF0dXMtY29sJyk7XG4gICAgfSk7XG5cbiAgICBkYXRhLmZvckVhY2goZGVhbCA9PiB7XG4gICAgICBsZXQgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy50RGVhbFRlbXBsYXRlKGRlYWwpO1xuICAgICAgY2VsbHNbZGVhbC5zdGF0dXNdLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lci5jaGlsZE5vZGVzWzFdKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKGNlbGxzKS5tYXAoKG9iamVjdEtleSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGNlbGxzW29iamVjdEtleV07XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGFibGUtYm9keS5qcyJdLCJzb3VyY2VSb290IjoiIn0=