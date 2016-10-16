'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gulpRename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const vinylSource = require('vinyl-source-stream');
const browserify = require('browserify');
const sourceMaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const cached  = require('gulp-cached');


gulp.task('default', ['js', 'css', 'watch']);

gulp.task('js', function () {
  return browserify('./assets/js/enter.js',
      {
        debug: true,
      })
    .bundle().on('error', function errorHandlerForBrowserify(error) {
      var args = Array.prototype.slice.call(arguments);
      notify.onError('BROWSERIFY error:' + error)
        .apply(this, args);
      this.emit('end');
    })
    .pipe(vinylSource('combined.js'))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('css', function () {
  return gulp.src('./assets/styles/enter.scss')
    .pipe(plumber({
      errorHandler: notify.onError('SASS error: <%= error.message %>')
    }))
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions']
    }))
    .pipe(gulpRename('combined.css'))
    .pipe(sourceMaps.write())
    //.pipe(cssnano())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    proxy: 'localhost:8888',
    port: 3000,
    open: true,
    notify: false,
  });

  gulp.watch([
    './index.html','./assets/js/**/*.html','./templates/**/*.html'
  ], browserSync.reload);

  gulp.watch([
    './assets/styles/**/*.scss'
  ], ['css']);

  gulp.watch([
    './assets/js/**/*.js'
  ], ['js']);
});
