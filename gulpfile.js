const { src, dest, watch, series} = require('gulp');
var less = require('gulp-less');
const concat = require('gulp-concat');
const pug = require('gulp-pug-3');


function less1(){
	return src("./src/less/*.less")
		.pipe(less())
		.pipe(dest("./src/less/css"))
}
function concatCSSexport(){
	return src('./src/less/css/*.css')
		.pipe(concat("style.min.css"))
		.pipe(dest("./dest/css"))
}
function pugCompile(){
	return src("./src/pug/index.pug")
		.pipe(pug())
		.pipe(dest("./dest"))
}



exports.build = series(less1, concatCSSexport, pugCompile);