var RouteConfig = require('./RouteConfig');

module.exports = function(options, imports, register) {
    var http = imports.HttpServer;
    var cf = imports.ControllerFactory;
    var routeConfig = new RouteConfig(http, cf);
    routeConfig.init();

    register();
};