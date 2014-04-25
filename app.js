var path = require('path');
var architect = require('architect');
var Config = require('./Common/Config');

var configPath = path.join(__dirname, "ApplicationConfig.js");
var cluster = require('cluster');
var cpuCount = require('os').cpus().length;

if (cluster.isMaster && !Config.debug) {
    for (var i = 0; i <= cpuCount - 1; i++) {
        var worker = cluster.fork();
        console.log('Worker with pid: %s started', worker.process.pid);
        worker.on('message', function(msg) {
            console.log(msg);
        });
    };

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died. Respawning...');
        cluster.fork();
    });
} else {
    var config = architect.loadConfig(configPath);
    architect.createApp(config, function createArchitectAppDlg(err, app) {
        if (err) {
            console.log(err);
        } else {
            app.services.HttpServer.start();
            console.log('Server started on port ' + Config.HttpServer.port);
        }
    });
}