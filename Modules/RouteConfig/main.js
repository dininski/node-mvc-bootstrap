var HttpServer = require('./Routing');

module.exports = function(options, imports, register) {
    var httpOptions = options.http;
    var server = new Routing(httpOptions);
    server.init();

    register(null, {
        HttpServer: server
    });
};