'use strict';

var util = require('util');
var Controller = require('./Controller');

var HomeController = function () {
};

util.inherits(HomeController, Controller);

HomeController.prototype.Index = function () {
    this.Json(arguments, {'success': true});
};

module.exports = HomeController;

