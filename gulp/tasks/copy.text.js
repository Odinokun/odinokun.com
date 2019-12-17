'use strict';

module.exports = function() {

  $.gulp.task('copy:text', function() {
    return $.gulp.src('./src/text/*.pdf')
      .pipe($.gulp.dest($.config.root + '/assets/text'));
  });

};