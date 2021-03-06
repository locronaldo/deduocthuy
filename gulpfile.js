var gulp = require('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();
var baseDir = "./src";

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: baseDir
    },
  })
})

gulp.task('sass', function() {
  return gulp.src(baseDir + '/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(baseDir + '/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync'], function (){
  gulp.watch(baseDir + '/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch(baseDir + '/scss/*.scss', browserSync.reload);
  gulp.watch(baseDir + '/css/*.css', browserSync.reload);
  gulp.watch(baseDir + '/**/*.html', browserSync.reload);
  gulp.watch(baseDir + '/js/*.js', browserSync.reload);
});