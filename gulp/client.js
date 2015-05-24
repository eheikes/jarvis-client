var concat      = require('gulp-concat');
var config      = require('config');
var connect     = require('gulp-connect');
var del         = require('del');
var extend      = require('extend');
var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var mkdirp      = require('mkdirp');
var ngtemplates = require('gulp-angular-templatecache');
var parseArgs   = require('minimist')
var rename      = require('gulp-rename');
var rev         = require('gulp-rev');
var runSequence = require('run-sequence');
var template    = require('gulp-template');
var touch       = require('touch');
var usemin      = require('gulp-usemin');

var args = parseArgs(process.argv.slice(2));

gulp.task('clean:client', function(done) {
  del(['.tmp', 'dist/app'], done);
});

gulp.task('connect:client', function() {
  connect.server({
    root: 'dist/app',
    port: 9000,
    livereload: true
  });
});

gulp.task('copy:mocks', function() {
  if (args.mocks) {
    return gulp.src([
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/Faker/build/build/faker.js',
      'app/mockApiService.js'
    ])
      .pipe(concat('mocks.js'))
      .pipe(gulp.dest('.tmp'));
  } else {
    mkdirp.sync('.tmp');
    touch.sync('.tmp/mocks.js');
    return;
  }
});

gulp.task('ngconstant', function() {
  return gulp.src('app/config-template.js')
    .pipe(template({ config: extend({}, config, args) }))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('ngtemplates', function() {
  gulp.src('app/views/*.html')
    .pipe(ngtemplates({
      module: 'jarvis',
      filename: 'templates.js'
    }))
    .pipe(gulp.dest('.tmp'));
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
    ['ngconstant', 'ngtemplates', 'copy:mocks'],
    'usemin',
    done
  );
});

gulp.task('watch:client', function() {
  var files = ['app/**', 'config/**'];
  gulp.watch(files, ['build:client']);
  gulp.watch(files, connect.reload);
});

gulp.task('serve:client', function(done) {
  return runSequence(
    'build:client',
    ['connect:client', 'watch:client']
  );
});
