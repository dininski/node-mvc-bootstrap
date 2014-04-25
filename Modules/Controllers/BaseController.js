'use strict';

var BaseController = function() {
    this._db = null;
    this._http = null;
    this._ws = null;
};

BaseController.prototype = {
    init: function(db, http, ws) {
        this._db = db;
        this._http = http;
        this._ws = ws;
    }
};

module.exports = BaseController;