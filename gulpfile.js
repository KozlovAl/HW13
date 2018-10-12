var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('scripts', function() {
  return gulp.src('app/js/libs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/'));
});

/////Concat js

gulp.task('watch', ['browser-sync', 'scripts', 'concat-css'], function() {
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/css/assets/*.css', ['concat-css']);
})

//// Concat css/////

gulp.task('concat-css', function () {
  return gulp.src('app/css/assets/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('app/css/'));
});



gulp.task('default', ['watch']);
