var connect     = require('gulp-connect');
var del         = require('del');
var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var rev         = require('gulp-rev');
var runSequence = require('run-sequence');
var usemin      = require('gulp-usemin');

gulp.task('clean:client', function(done) {
  del('dist/app', done);
});

gulp.task('connect:client', function() {
  connect.server({
    root: 'dist/app',
    port: 9000,
    livereload: true
  });
});

gulp.task('usemin', function () {
  return gulp.src('app/index.html')
    .pipe(usemin({
      css: [minifyCss(), rev()],
      js: [rev()]
    }))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('build:client', function(done) {
  return runSequence(
    'clean:client',
    'usemin',
    done
  );
});

gulp.task('watch:client', function() {
  var files = ['app/**'];
  gulp.watch(files, ['build:client']);
  gulp.watch(files, connect.reload);
});

gulp.task('serve:client', function(done) {
  return runSequence(
    'build:client',
    ['connect:client', 'watch:client']
  );
});
