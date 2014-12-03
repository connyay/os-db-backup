'use strict';
var knox = require('knox');

var OpenShiftDB = function(options) {
    this.client = knox.createClient(options);
};

function has(db) {
    var DB = db.toUpperCase();
    return (typeof process.env['OPENSHIFT_' + DB + 'DB_HOST']);
}

OpenShiftDB.prototype.backup = function() {
    this._action('backup');
};

OpenShiftDB.prototype.restore = function() {
    this._action('restore');
};

OpenShiftDB.prototype._action = function(action) {
    if (has('mysql')) {
        require('./lib/mysql')[action]();
    }
    if (has('pg')) {
        require('./lib/pg')[action]();
    }
    if (has('mongodb')) {
        require('./lib/mongodb')[action]();
    }
};


module.exports = OpenShiftDB;
