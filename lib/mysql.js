'use strict';
var exec = require('child_process').exec;

exports.backup = function() {
    var command = 'mysqldump ' +
        '--socket=$OPENSHIFT_MYSQL_DB_SOCKET ' +
        '--user=$OPENSHIFT_MYSQL_DB_USERNAME --password=$OPENSHIFT_MYSQL_DB_PASSWORD ' +
        '$OPENSHIFT_APP_NAME > ${OPENSHIFT_APP_NAME}.sql';
    exec(command, {
        cwd: '/tmp/'
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
