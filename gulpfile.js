require('./gulp/tasks/styles.js');
require('./gulp/tasks/watch.js');
require('./gulp/tasks/sprites.js');
require('./gulp/tasks/scripts.js');
require('./gulp/tasks/modernizr.js');
require('./gulp/tasks/build.js');

// var gulp = require('gulp');
// var watch = require('gulp-watch');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var cssvars = require('postcss-simple-vars');
// var nested = require('postcss-nested');
// var cssImport = require('postcss-import');
// var browserSync = require('browser-sync').create();

// gulp.task("default", function(){
// 	console.log("HOORAY! - you created a gulp task");
// });

// gulp.task("html", function(){
// 	console.log("imagine something interesing here, why?");
// });

// gulp.task('styles', function(){
// 	console.log("IMAGINE Sass or PostCSS tasks running here!");
// });

// gulp.task('styles', function(){
// 	return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
// });

// gulp.task('styles', function(){
// 	console.log("GULP.TASK STYLES ACTIVATED!  A CSS file has been saved");

// 	return gulp.src('./app/assets/styles/styles.css')
		
// 		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		
// 		.pipe(gulp.dest('./app/temp/styles'));
// });


// gulp.task('watch', function(){
// 	console.log("GULP.TASK WATCH IS CURRENTLY ACTIVATE!");
	
// 	browserSync.init({
// 		notify: false,
// 		server: {
// 			baseDir: 'app'
// 		}
// 	});

// 	watch('./app/index.html', function(){
// 		browserSync.reload();
// 	});

// 	watch('./app/assets/styles/**/*.css', function(){
// 		gulp.start('cssInject');
// 	});
// });

// gulp.task('cssInject', ['styles'], function(){
// 	return gulp.src('./app/temp/styles/styles.css')
// 		.pipe(browserSync.stream());
// });