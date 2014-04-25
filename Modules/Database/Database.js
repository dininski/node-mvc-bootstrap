'use strict';

var mongoose = require('mongoose');
var User = require('./Models/User');

var Database = function(options) {
    this._options = options;
    this._models = {};
}

Database.prototype = {
    init: function() {
        mongoose.connect(this._options.host);
        this._models.User = User;
    },

    /**
     * Returns all entries for the specified type
     * @param type
     * @param callback
     */
    getAll: function(type, callback) {
        var DataType = this._getDataType(type);
        DataType.find(callback);
    },

    /**
     * Adds a record for the specified type
     * @param type
     * @param data
     * @param callback
     */
    add: function(type, data, callback) {
        var DataType = this._getDataType(type);
        var typeModel = new DataType(data);
        typeModel.save(callback);
    },

    /**
     * Returns a record based on the provided expression
     * @param type
     * @param expression
     * @param callback
     */
    getOne: function(type, expression, callback){
        var DataType = this._getDataType(type);
        DataType.findOne(expression, function(err, result){
            callback(err, result);
        });
    },

    /**
     * Gets the last entry ordered chronologically
     * @param type
     * @param callback
     */
    getLast: function(type, callback) {
        var DataType = this._getDataType(type);
        DataType.findOne({}, {}, { sort: { 'created_on' : -1 } }, function(err, result) {
            callback(err, result);
        });
    },

    _getDataType: function(type) {
        return this._models[type];
    }
};

module.exports = Database;