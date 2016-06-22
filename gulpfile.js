const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-ruby-sass');
const babel = require('gulp-babel');
const uglifycss = require('gulp-uglifycss');
const server = require('gulp-server-livereload');

gulp.task('sass', () => {
return
     sass('/assets/styles/**/*.scss')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./public'))
   ;
})

gulp.task('babel', () => {
	return gulp.src('/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('/public'));
});

gulp.task('webserver', function() {
  gulp.src('/app.js')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['webserver', 'babel', 'sass']);
