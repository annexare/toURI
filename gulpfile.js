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

var banner = function () { return '/*! String.toURI() by Annexare.com, ' + moment().format('YYYY.MM.DD') + ' */\n';},
    src = 'toURI.js';

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
