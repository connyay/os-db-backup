'use strict';
var exec = require('child_process').exec;

exports.backup = function(timestamp) {
    var directory = '/tmp/' + timestamp;
    var command = 'mongodump -h $OPENSHIFT_MONGODB_DB_HOST ' +
        '-u $OPENSHIFT_MONGODB_DB_USERNAME -p $OPENSHIFT_MONGODB_DB_PASSWORD -d $OPENSHIFT_APP_NAME';
    exec(command, {
        cwd: directory
    }, function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
};

exports.restore = function() {
    // restore
};
