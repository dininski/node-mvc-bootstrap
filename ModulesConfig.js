var Config = require('./Common/Config');

module.exports = [
    { packagePath: "./Modules/HttpServer", http: Config.HttpServer},
    { packagePath: "./Modules/HttpServer/Routing"},
    { packagePath: "./Modules/WebsocketCommunication/"},
    { packagePath: "./Modules/ControllerFactory/"},
    { packagePath: "./Modules/Database", db: Config.Database},
    { packagePath: "./Modules/RouteConfig"}
];