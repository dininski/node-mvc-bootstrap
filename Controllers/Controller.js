'use strict';

var BaseController = function() {
    this._db = null;
    this._http = null;
    this._ws = null;
    this._templateEngine = null;
};

BaseController.prototype = {
    init: function(db, http, ws, templateEngine) {
        this._db = db;
        this._http = http;
        this._ws = ws;
        this._templateEngine = templateEngine;
    },

    getControllerName: function() {
        var fileName = __filename;
        var controllerName = fileName.substring(0, fileName.indexOf('Controller.js'));
        return controllerName;
    },

    get: function() {

    },

    post: function() {

    },

    View: function(args, view, data) {
        args[1].render(view, data);
    },

    Json: function(args, obj) {
        this._http.respondJSON(args[0], args[1], obj);
    }
};

module.exports = BaseController;