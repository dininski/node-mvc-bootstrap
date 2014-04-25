var Config = {};

Config.HttpServer = {
    port: 8080
};

Config.Database = {
    host: process.env.MONGOHQ_URL || 'localhost:27017'
};

Config.debug = false;

module.exports = Config;