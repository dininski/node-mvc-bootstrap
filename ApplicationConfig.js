var Config = require('./Common/Config');

module.exports = [
    { packagePath: "./HttpServer", http: Config.HttpServer},
    { packagePath: "./HttpServer/Routing"},
    { packagePath: "./WebsocketCommunication/"},
    { packagePath: "./ControllerFactory/"},
    { packagePath: "./Database", db: Config.Database},
    { packagePath: "./RouteConfig"},
    { packagePath: "./TemplateEngine"}
];