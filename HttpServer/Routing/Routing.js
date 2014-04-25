'use strict';

var Routing = function (db, http) {
    this._http = http;
    this._db = db;
};

Routing.prototype = {
    init: function() {
    }
}

module.exports = Routing;