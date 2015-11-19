'use strict';

var _job = require('./job.js');

var _job2 = _interopRequireDefault(_job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, job) {
  _classCallCheck(this, Person);

  this.name = name;
  this.job = job;
};

;

var programmer = new _job2.default("Programmer");
var bob = new Person("Bobby", programmer);
console.log('validJobs are ' + _job.validJobs);
console.log(bob.name + ' is a ' + bob.job.title);
