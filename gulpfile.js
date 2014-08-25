/*
 * String.toURI() gulpfile.js
 */
'use strict';

var gulp = require('gulp'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    moment = require('moment');

var pkg = require('./package.json'),
    banner = function () { return '/*! String.toURI() by Annexare.com, v' + pkg.version + ' ' + moment().format('YYYY.MM.DD') + ' */\n';},
    src = 'lib/toURI.js';

gulp.task('uglify', function() {
    gulp.src(src)
        .pipe(uglify())
        .pipe(header(banner()))
        .pipe(rename(src.replace('.js', '.min.js')))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', ['uglify'], function() {
    gulp.watch(src, ['uglify']);
});

gulp.task('default', ['uglify']);
