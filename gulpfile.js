const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');

gulp.task('skyjs', function () {
  return gulp.src(['./src/javascript/*.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/javascript/'))
});

gulp.task('skycss', function () {
  return gulp.src(['./src/styles/*.css'])
    .pipe(concat('all.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./src/styles/'))
});