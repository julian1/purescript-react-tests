var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require("vinyl-source-stream");

// i suspect it's only running reactify on .jsx files.
// need to modify...

// https://truongtx.me/2014/07/18/using-reactjs-with-browserify-and-gulp/
// https://viget.com/extend/gulp-browserify-starter-faq
// http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html

gulp.task('browserify', function(){
  var b = browserify();
  b.transform({ global: true }, reactify); // use the reactify transform
  b.add('./src/js/main.jsx');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('copy', function() {
    gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

//gulp.task('watch', function() {
//    gulp.watch('src/**/*.*', ['default']);
//});
