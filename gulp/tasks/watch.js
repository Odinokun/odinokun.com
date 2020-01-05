'use strict';

module.exports = function() {

  $.gulp.task('watch', function() {
    $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));

    $.gulp.watch('./src/style/**/*.scss', $.gulp.series('sass'));

    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:app-browserify', 'copy:js'));

    $.gulp.watch('./src/img/**/*.*', $.gulp.series('image:min'));
    $.gulp.watch('./src/sprite/*.svg', $.gulp.series('sprite:svg'));
    $.gulp.watch('./src/text/*.*', $.gulp.series('copy:text'));
    $.gulp.watch('./src/*.xml', $.gulp.series('copy:xml'));
  });

};
