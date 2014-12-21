'use strict';
var exec = require('child_process').exec;

exports.backup = function(timestamp) {
    var directory = '/tmp/' + timestamp;
    var command = 'mysqldump ' +
        '--host=$OPENSHIFT_MYSQL_DB_HOST ' +
        '--port=$OPENSHIFT_MYSQL_DB_PORT ' +
        '--user=$OPENSHIFT_MYSQL_DB_USERNAME --password=$OPENSHIFT_MYSQL_DB_PASSWORD ' +
        '$OPENSHIFT_APP_NAME > ${OPENSHIFT_APP_NAME}.sql';
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
