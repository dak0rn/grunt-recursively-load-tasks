/**
 * A simple recursive task loader for grunt
 * Author: dak0rn <dak0rn.github.io>
 */

var path = require('path');

// Global stuff
var nd = 'node_modules';
var td = 'tasks';
var up = '..';

// Exposing
module.exports = function(grunt) {

    // Recursive loader
    var _load = function(taskname, directory, depth) {

        if( 0 > depth ) {
            grunt.log.error('Task '+taskname+' not found in parent directories with depth '+depth);
            return;
        }

        var taskDir = path.join(directory, nd, taskname);
        var target  = path.join(taskDir, td);

        if( grunt.file.exists(target) ) {
            grunt.loadTasks(taskDir);
            return;
        }

        _load(taskname, path.resolve(directory,up), depth-1);

    };

    // This function is exposed to grunt but only if it does not exist already
    if( 'undefined' != typeof grunt.recursivelyLoadTasks )

        grunt.recursivelyLoadTasks = function(task, directory, depth) {
            if( 'undefined' === typeof task ) {
                grunt.log.error('No task to load given');
                return;
            }

            depth || (depth = 10);
            directory || (directory = __dirname);

            _load(task,directory,depth);
        };

};
