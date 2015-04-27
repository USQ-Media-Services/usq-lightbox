gulp = require('gulp');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
imagemin = require('gulp-imagemin');
sourcemaps = require('gulp-sourcemaps');
autoprefixer = require('gulp-autoprefixer');
gulpCssBase64 = require('gulp-css-base64');
minifyCSS = require('gulp-minify-css');
fs = require('fs');
del = require('del');
through = require('through2');
tap = require('gulp-tap');
path = require('path');



paths = {
	scripts: [
		//'bower_components/jquery/dist/jquery.min.js',
		'bower_components/fastdom/index.js',
		'sys/js/jsCommons.js',
		//'sys/js/fastdom-jquery.js',
		'sys/js/jsonfn.js',
		'sys/js/mule.js',
		'sys/js/insertAfter.js',
		'sys/js/menu.js'
	],
	styles: {
		menu: [
			'sys/css/styles.css',
			'sys/css/desktop.css',
			'sys/css/mobile.css'
		],
		page: [
			'sys/css/page.css'
		]

	}
};




gulp.task('Menu Scripts', ['Menu Styles'], function() {
  return gulp.src(['menu.styles.css'].concat(paths.scripts))
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(concat('menu.js'))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(''));
});



gulp.task('Menu Styles', ['Page Styles'], function() {
	var count = 0;
		return gulp.src(paths.styles.menu)
		.pipe(sourcemaps.init())
		.pipe(gulpCssBase64())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(concat('menu.styles.css'))
		.pipe(sourcemaps.write({
			sourceRoot: 'sys/css'
		}))
		.pipe(through.obj(function (file, enc, callbackStream) {
			if(file.contents.toString().indexOf('sources') === -1) {

			var src = file.contents;
				src = 'var stylesheet = "data:text/css;base64,'+src.toString('base64')+'";';
				count++;
				file.contents = new Buffer(src);
			}
				this.push(file);
			return callbackStream();
		}))
		.pipe(gulp.dest(''));
});


gulp.task('Page Styles', function() {
	return gulp.src(paths.styles.page)
	.pipe(sourcemaps.init())
	.pipe(gulpCssBase64())
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(concat('page.css'))
	.pipe(sourcemaps.write({
		sourceRoot: 'sys/css'
	}))
	.pipe(gulp.dest(''));
});




// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts.concat(paths.styles.menu).concat(paths.styles.page), ['Menu Scripts']);
});




// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'Menu Scripts']);
