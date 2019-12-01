const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
// js => js
gulp.task('dispose-js', () => {
  const path =  '../src/**/*.js';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

gulp.task('dispose-wxss', () => {
  const path = '../src/**/*.less',
    remainPath =   '!../src/**/_*.less';
  return gulp.src([path, remainPath])
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('../dist/'));
});

// wxs => wxs
gulp.task('dispose-wxs', () => {
  const path =  '../src/**/*.wxs';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// json => json
gulp.task('dispose-json', () => {
  const path =  '../src/**/*.json';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// wxml => wxml
gulp.task('dispose-wxml', () => {
  const path = '../src/**/*.wxml';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// copy
gulp.task('dispose-copy', () => {
  const path =  '../src/**/image/**';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

gulp.task('default', gulp.series(
  'dispose-js',
  'dispose-wxss',
  'dispose-wxml',
  'dispose-wxs',
  'dispose-copy',
  'dispose-json'
));