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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var _tableHead = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = exports.Table = function Table(data, statuses) {
  _classCallCheck(this, Table);

  this.element = document.createElement('table');
  var tHead = new _tableHead.TableHead(data, statuses);
  this.element.appendChild(tHead.element);
  // let tBody = new TableHead(data);
  // this.table.appendChild(tBody);
};

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData('text');
//   ev.target.appendChild(document.getElementById(data));
// }

// function getTableHeader(type) {
//   return `
//             <th>${type}
//               <span class="count">7</span>
//               <span class="hours" title="Estimated time">68.00h</span>
//             </th>

//     <h2 class='name'>
//       ${window.data[0].projName}
//       <span class='author'>by ${this.author}</span>
//     </h2>
//     <button class='edit'>edit</button>
//     <button class='remove'>remove</button>
//   `;
// }

// function buildTable() {

// }

// (function() {
//   window.statuses = window.statuses.split(' ');
//   // console.log(getHeadersTemplate());
// })();

// <th data-column-id="20">To Do
//   <span class="count">7</span>
//   <span class="hours" title="Estimated time">68.00h</span>
// </th>

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
  inStatus: '7 hours'
}, {
  projName: 'Setting mark up for the agile',
  projLink: 'https://www.vk.com/',
  customer: 'Jojo Mogo Toggle',
  country: 'Jamaica',
  manager: 'V. Drogan',
  status: 'PREVIEW',
  inStatus: '0'
}, {
  projName: 'DealerPoint JS update to ES7',
  projLink: 'https://learn.javascript.ru/',
  customer: 'Ilya Kantor',
  country: 'Russian Federation',
  manager: 'O. Romanenko',
  status: 'TEST',
  inStatus: '7 hours 23 minutes'
}];

var statuses = exports.statuses = 'TODO PREVIEW TEST FIX OFFER';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

var _table = __webpack_require__(0);

document.addEventListener('DOMContentLoaded', function () {
  var table = new _table.Table(_data.dataMock, _data.statuses);
  document.getElementById('table-wrapper').appendChild(table.element);
});

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData('text');
//   ev.target.appendChild(document.getElementById(data));
// }

// function getTableHeader(type) {
//   return `
//             <th>${type}
//               <span class="count">7</span>
//               <span class="hours" title="Estimated time">68.00h</span>
//             </th>

//     <h2 class='name'>
//       ${window.data[0].projName}
//       <span class='author'>by ${this.author}</span>
//     </h2>
//     <button class='edit'>edit</button>
//     <button class='remove'>remove</button>
//   `;
// }

// function buildTable() {

// }

// (function() {
//   window.statuses = window.statuses.split(' ');
//   // console.log(getHeadersTemplate());
// })();

// <th data-column-id="20">To Do
//   <span class="count">7</span>
//   <span class="hours" title="Estimated time">68.00h</span>
// </th>

/***/ }),
/* 3 */
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
    this.statuses = statuses.split(' ');

    this.parseData(data);

    this._buildHeader(statuses);
  }

  _createClass(TableHead, [{
    key: '_buildHeader',
    value: function _buildHeader(statuses) {
      var _this = this;

      var headers = '';
      this.statuses.forEach(function (status) {
        headers += _this.theadTemplate(status);
      });

      this.element.innerHTML = headers;
    }
  }, {
    key: 'parseData',
    value: function parseData(data) {
      var _this2 = this;

      var count = 0;

      this.statuses.forEach(function (status) {
        count = 0;

        data.forEach(function (deal) {
          if (deal.status == status) {
            count++;
          }
        });

        _this2.data[status] = count;
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
  }]);

  return TableHead;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmExZjNjMzg1NjdjYzlhMzA2YzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGFibGUtaGVhZC5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImRhdGEiLCJzdGF0dXNlcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0SGVhZCIsImFwcGVuZENoaWxkIiwiZGF0YU1vY2siLCJwcm9qTmFtZSIsInByb2pMaW5rIiwiY3VzdG9tZXIiLCJjb3VudHJ5IiwibWFuYWdlciIsInN0YXR1cyIsImluU3RhdHVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYmxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJUYWJsZUhlYWQiLCJzcGxpdCIsInBhcnNlRGF0YSIsIl9idWlsZEhlYWRlciIsImhlYWRlcnMiLCJmb3JFYWNoIiwidGhlYWRUZW1wbGF0ZSIsImlubmVySFRNTCIsImNvdW50IiwiZGVhbCIsImtleSIsImF0dHIiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7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YSxnQkFBUTtBQUNuQixjQUFHSSxLQUFLZCxNQUFMLElBQWVBLE1BQWxCLEVBQTBCO0FBQ3hCYTtBQUNEO0FBQ0YsU0FKRDs7QUFNQSxlQUFLMUIsSUFBTCxDQUFVYSxNQUFWLElBQW9CYSxLQUFwQjtBQUNELE9BVkQ7QUFXRDs7O2tDQUVhYixNLEVBQVE7QUFDcEIsOEJBQ1FBLE1BRFIsc0NBRTBCLEtBQUtiLElBQUwsQ0FBVWEsTUFBVixDQUYxQjtBQUtEOzs7b0NBRWViLEksRUFBTTtBQUNwQixXQUFJLElBQUk0QixHQUFSLElBQWU1QixJQUFmLEVBQXFCO0FBQ25CLFlBQUk2QixPQUFPQyxPQUFPRixHQUFQLENBQVg7QUFDRDtBQUNGIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZhMWYzYzM4NTY3Y2M5YTMwNmM1IiwiaW1wb3J0IHsgVGFibGVIZWFkIH0gZnJvbSAnLi90YWJsZS1oZWFkJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgc3RhdHVzZXMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIGxldCB0SGVhZCA9IG5ldyBUYWJsZUhlYWQoZGF0YSwgc3RhdHVzZXMpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0SGVhZC5lbGVtZW50KTtcbiAgICAvLyBsZXQgdEJvZHkgPSBuZXcgVGFibGVIZWFkKGRhdGEpO1xuICAgIC8vIHRoaXMudGFibGUuYXBwZW5kQ2hpbGQodEJvZHkpO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGFsbG93RHJvcChldikge1xuLy8gICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkcmFnKGV2KSB7XG4vLyAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZHJvcChldikge1xuLy8gICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4vLyAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFRhYmxlSGVhZGVyKHR5cGUpIHtcbi8vICAgcmV0dXJuIGBcbi8vICAgICAgICAgICAgIDx0aD4ke3R5cGV9XG4vLyAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj43PC9zcGFuPlxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgdGl0bGU9XCJFc3RpbWF0ZWQgdGltZVwiPjY4LjAwaDwvc3Bhbj5cbi8vICAgICAgICAgICAgIDwvdGg+XG5cbi8vICAgICA8aDIgY2xhc3M9J25hbWUnPlxuLy8gICAgICAgJHt3aW5kb3cuZGF0YVswXS5wcm9qTmFtZX1cbi8vICAgICAgIDxzcGFuIGNsYXNzPSdhdXRob3InPmJ5ICR7dGhpcy5hdXRob3J9PC9zcGFuPlxuLy8gICAgIDwvaDI+XG4vLyAgICAgPGJ1dHRvbiBjbGFzcz0nZWRpdCc+ZWRpdDwvYnV0dG9uPlxuLy8gICAgIDxidXR0b24gY2xhc3M9J3JlbW92ZSc+cmVtb3ZlPC9idXR0b24+XG4vLyAgIGA7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGJ1aWxkVGFibGUoKSB7XG5cbi8vIH1cblxuLy8gKGZ1bmN0aW9uKCkge1xuLy8gICB3aW5kb3cuc3RhdHVzZXMgPSB3aW5kb3cuc3RhdHVzZXMuc3BsaXQoJyAnKTtcbi8vICAgLy8gY29uc29sZS5sb2coZ2V0SGVhZGVyc1RlbXBsYXRlKCkpO1xuLy8gfSkoKTtcblxuICAgICAgICAgICAgLy8gPHRoIGRhdGEtY29sdW1uLWlkPVwiMjBcIj5UbyBEb1xuICAgICAgICAgICAgLy8gICA8c3BhbiBjbGFzcz1cImNvdW50XCI+Nzwvc3Bhbj5cbiAgICAgICAgICAgIC8vICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiIHRpdGxlPVwiRXN0aW1hdGVkIHRpbWVcIj42OC4wMGg8L3NwYW4+XG4gICAgICAgICAgICAvLyA8L3RoPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90YWJsZS5qcyIsImV4cG9ydCBjb25zdCBkYXRhTW9jayA9IFtcbiAge1xuICAgIHByb2pOYW1lOiAnTW9uZXlNb25leU1vbmV5JyxcbiAgICBwcm9qTGluazogJ2h0dHBzOi8vd3d3LnlhbmRleC5ydS8nLFxuICAgIGN1c3RvbWVyOiAnT2xobyBWb2lob3Zza2kgSnIuJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJyxcbiAgICBtYW5hZ2VyOiAnTy4gUm9tYW5lbmtvJyxcbiAgICBzdGF0dXM6ICdUT0RPJyxcbiAgICBpblN0YXR1czogJzcgaG91cnMnXG4gIH0sIHtcbiAgICBwcm9qTmFtZTogJ1NldHRpbmcgbWFyayB1cCBmb3IgdGhlIGFnaWxlJyxcbiAgICBwcm9qTGluazogJ2h0dHBzOi8vd3d3LnZrLmNvbS8nLFxuICAgIGN1c3RvbWVyOiAnSm9qbyBNb2dvIFRvZ2dsZScsXG4gICAgY291bnRyeTogJ0phbWFpY2EnLFxuICAgIG1hbmFnZXI6ICdWLiBEcm9nYW4nLFxuICAgIHN0YXR1czogJ1BSRVZJRVcnLFxuICAgIGluU3RhdHVzOiAnMCdcbiAgfSwge1xuICAgIHByb2pOYW1lOiAnRGVhbGVyUG9pbnQgSlMgdXBkYXRlIHRvIEVTNycsXG4gICAgcHJvakxpbms6ICdodHRwczovL2xlYXJuLmphdmFzY3JpcHQucnUvJyxcbiAgICBjdXN0b21lcjogJ0lseWEgS2FudG9yJyxcbiAgICBjb3VudHJ5OiAnUnVzc2lhbiBGZWRlcmF0aW9uJyxcbiAgICBtYW5hZ2VyOiAnTy4gUm9tYW5lbmtvJyxcbiAgICBzdGF0dXM6ICdURVNUJyxcbiAgICBpblN0YXR1czogJzcgaG91cnMgMjMgbWludXRlcydcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gJ1RPRE8gUFJFVklFVyBURVNUIEZJWCBPRkZFUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YS5qcyIsImltcG9ydCB7IGRhdGFNb2NrLCBzdGF0dXNlcyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4vYXBwL3RhYmxlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbGV0IHRhYmxlID0gbmV3IFRhYmxlKGRhdGFNb2NrLCBzdGF0dXNlcyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS13cmFwcGVyJykuYXBwZW5kQ2hpbGQodGFibGUuZWxlbWVudCk7XG59KTtcblxuLy8gZnVuY3Rpb24gYWxsb3dEcm9wKGV2KSB7XG4vLyAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGRyYWcoZXYpIHtcbi8vICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldi50YXJnZXQuaWQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkcm9wKGV2KSB7XG4vLyAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbi8vICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0VGFibGVIZWFkZXIodHlwZSkge1xuLy8gICByZXR1cm4gYFxuLy8gICAgICAgICAgICAgPHRoPiR7dHlwZX1cbi8vICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPjc8L3NwYW4+XG4vLyAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIiB0aXRsZT1cIkVzdGltYXRlZCB0aW1lXCI+NjguMDBoPC9zcGFuPlxuLy8gICAgICAgICAgICAgPC90aD5cblxuLy8gICAgIDxoMiBjbGFzcz0nbmFtZSc+XG4vLyAgICAgICAke3dpbmRvdy5kYXRhWzBdLnByb2pOYW1lfVxuLy8gICAgICAgPHNwYW4gY2xhc3M9J2F1dGhvcic+YnkgJHt0aGlzLmF1dGhvcn08L3NwYW4+XG4vLyAgICAgPC9oMj5cbi8vICAgICA8YnV0dG9uIGNsYXNzPSdlZGl0Jz5lZGl0PC9idXR0b24+XG4vLyAgICAgPGJ1dHRvbiBjbGFzcz0ncmVtb3ZlJz5yZW1vdmU8L2J1dHRvbj5cbi8vICAgYDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gYnVpbGRUYWJsZSgpIHtcblxuLy8gfVxuXG4vLyAoZnVuY3Rpb24oKSB7XG4vLyAgIHdpbmRvdy5zdGF0dXNlcyA9IHdpbmRvdy5zdGF0dXNlcy5zcGxpdCgnICcpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhnZXRIZWFkZXJzVGVtcGxhdGUoKSk7XG4vLyB9KSgpO1xuXG4gICAgICAgICAgICAvLyA8dGggZGF0YS1jb2x1bW4taWQ9XCIyMFwiPlRvIERvXG4gICAgICAgICAgICAvLyAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj43PC9zcGFuPlxuICAgICAgICAgICAgLy8gICA8c3BhbiBjbGFzcz1cImhvdXJzXCIgdGl0bGU9XCJFc3RpbWF0ZWQgdGltZVwiPjY4LjAwaDwvc3Bhbj5cbiAgICAgICAgICAgIC8vIDwvdGg+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiZXhwb3J0IGNsYXNzIFRhYmxlSGVhZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHN0YXR1c2VzKSB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICB0aGlzLnN0YXR1c2VzID0gc3RhdHVzZXMuc3BsaXQoJyAnKTtcblxuICAgIHRoaXMucGFyc2VEYXRhKGRhdGEpO1xuXG4gICAgdGhpcy5fYnVpbGRIZWFkZXIoc3RhdHVzZXMpO1xuICB9XG5cbiAgX2J1aWxkSGVhZGVyKHN0YXR1c2VzKSB7XG4gICAgbGV0IGhlYWRlcnMgPSAnJztcbiAgICB0aGlzLnN0YXR1c2VzLmZvckVhY2goc3RhdHVzID0+IHtcbiAgICAgIGhlYWRlcnMgKz0gdGhpcy50aGVhZFRlbXBsYXRlKHN0YXR1cyk7XG4gICAgfSlcblxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBoZWFkZXJzO1xuICB9XG5cbiAgcGFyc2VEYXRhKGRhdGEpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgdGhpcy5zdGF0dXNlcy5mb3JFYWNoKHN0YXR1cyA9PiB7XG4gICAgICBjb3VudCA9IDA7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChkZWFsID0+IHtcbiAgICAgICAgaWYoZGVhbC5zdGF0dXMgPT0gc3RhdHVzKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGF0YVtzdGF0dXNdID0gY291bnQ7XG4gICAgfSk7XG4gIH1cblxuICB0aGVhZFRlbXBsYXRlKHN0YXR1cykge1xuICAgIHJldHVybiBgXG4gICAgICA8dGg+JHtzdGF0dXN9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj4ke3RoaXMuZGF0YVtzdGF0dXNdfTwvc3Bhbj5cbiAgICAgIDwvdGg+XG4gICAgYDtcbiAgfVxuXG4gIHBhcnNlRGF0YUhlYWRlcihkYXRhKSB7XG4gICAgZm9yKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgbGV0IGF0dHIgPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGFibGUtaGVhZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=