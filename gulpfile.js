var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	gulp.src('./sass/**/*.{scss,sass}')
	.pipe(sass({
      errLogToConsole: true
     }))
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.{scss,sass}', ['sass'])
})

gulp.task('default', ['sass', 'watch']);