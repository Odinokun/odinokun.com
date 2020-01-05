'use strict';

module.exports = function() {

  $.gulp.task('copy:xml', function() {
    return $.gulp.src('./src/*.xml')
      .pipe($.gulp.dest($.config.root + '/'));
  });

};