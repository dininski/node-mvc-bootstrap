var ControllerFactory = require('./ControllerFactory');

module.exports = function(options, imports, register) {
    var db = imports.Database;
    var httpServer = imports.HttpServer;
    var ws = imports.WebsocketCommunication;
    var controllerFactory = new ControllerFactory(db, httpServer, ws);

    register(null, {
        ControllerFactory: controllerFactory
    });
};