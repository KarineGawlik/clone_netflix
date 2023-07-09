const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'))


function styles() {
    return gulp.src('./src/styles/*.scss') /*função recupera os arquivos não está compilando sass*/
        .pipe(sass({ outputStyle: 'compressed'})) /*estilo de saida do CSS vai ser comprimido*/
        .pipe(gulp.dest('./dist/css'));
}


exports.default = styles
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}