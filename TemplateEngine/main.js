var TemplateEngine = require('./TemplateEngine');

module.exports = function(options, imports, register) {
    var http = imports.HttpServer;
    var templateEngine = new TemplateEngine(http);
    templateEngine.init();

    register();
};