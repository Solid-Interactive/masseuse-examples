module.exports = function(grunt) {
    'use strict';
    grunt.config('jshint', {
        files : [
            'app/**/*.js',
            'tests/**/*.js',
            '!app/vendor/**/*.js',
            '!app/drag-and-drop/js/**',
            '!app/vendor/**/*.js',
        ],
        options : {
            jshintrc : '.jshintrc'
        }
    });
};