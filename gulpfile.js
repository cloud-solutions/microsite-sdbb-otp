var gulp = require('gulp');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var minify = require('gulp-cssnano');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');

var publicPath = 'public/';

gulp.task('default', ['prod']);

gulp.task('prod', [
    'compile-less'
]);
gulp.task('dev', []);

gulp.task('compile-less', function() {
    return gulp.src(publicPath + 'less/main.less')
        .pipe(less())
        .pipe(gulp.dest(publicPath + 'css'));
});

gulp.task('watch-less', function() {
    return gulp.src(publicPath + 'less/main.less')
        .pipe(watchLess(publicPath + 'less/main.less'))
        .pipe(less())
        .pipe(gulp.dest(publicPath + 'css'));
});