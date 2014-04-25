'use strict';

var util = require('util');
var BaseController = require('./BaseController');

var HomeController = function () {
};

util.inherits(HomeController, BaseController);

HomeController.prototype.Index = function (req, res, next) {
    this._http.respondJSON(req, res, {success: true});
};

module.exports = HomeController;

