'use strict';

var Routing = function (http, controllerFactory) {
    this._http = http;
    this._controllerFactory = controllerFactory;
}

Routing.prototype = {
    init: function () {
        this._http.registerRoute({
            method: 'GET',
            path: '/:controller/:action',
            handler: this.handleDefaultRoute.bind(this)
        })
    },

    handleDefaultRoute: function (req, res, next) {
        var controllerName = req.params.controller;
        var action = req.params.action;

        var controller = this._controllerFactory.get(controllerName);
        if(controller.hasOwnProperty(action)) {
            controller[action].apply(controller, arguments);
        } else {
            next();
        }
    }
}

module.exports = Routing;