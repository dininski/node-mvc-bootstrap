'use strict';

var util = require('util');
var Controller = require('./Controller');

var UsersController = function () {
};

util.inherits(UsersController, Controller);

UsersController.prototype.Register = function (req, res, next) {
    var userToRegister = req.body;
    var self = this;

    this._db.add('User', userToRegister, function(err) {
        self._http.respondJSON(req, res, 'Success');
    });
};

module.exports = UsersController;

