
/**
 * Module Dependencies
 */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');

/**
 * Gulp Tasks
 */


gulp.task('nodemon', () => {
  var called = false;
  return nodemon({
    script: 'server/app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  });
});

gulp.task('sass', function () {
  return gulp.src('public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
