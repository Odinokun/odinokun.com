module.exports = function () {

  // begin scroll-2-top
  window.addEventListener('scroll', function() {
    const btn = document.getElementById('scroll-2-top');

    if (pageYOffset > 1000) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  // end scroll-2-top

};