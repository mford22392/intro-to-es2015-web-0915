"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Job = function Job(title) {
  _classCallCheck(this, Job);

  this.title = title;
};

var validJobs = exports.validJobs = ["programmer", "that's it"];
exports.default = Job;
