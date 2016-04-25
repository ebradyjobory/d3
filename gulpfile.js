var gulp = require('gulp')
var webpack = require('webpack-stream')

gulp.task('scripts', function() {
  return gulp.src('./src/index.js')
              .pipe(webpack(require('./webpack.config.js')))
              .pipe(gulp.dest('./bundle'))
})

gulp.task('html', function() {
  return gulp.src('./index.html')
              .pipe(gulp.dest('./bundle'))
})

gulp.task('css', function() {
  return gulp.src('./main.css')
              .pipe(gulp.dest('./bundle'))
})

gulp.task('default', ['scripts', 'html', 'css'], function () {
  gulp.watch('./src/**.js', ['scripts'])
  gulp.watch('./index.html', ['html'])
  gulp.watch('./**.css', ['css'])
})
