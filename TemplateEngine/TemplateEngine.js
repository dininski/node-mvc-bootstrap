'use strict';
var path = require('path');

var directory = path.join(__dirname, '..', 'Views');

var TemplateEngine = function (http) {
    this._http = http;
}

TemplateEngine.prototype = {
    init: function () {
        this._http._app.set('views', directory);
        this._http._app.set('view engine', 'jade');
    }
}

module.exports = TemplateEngine;