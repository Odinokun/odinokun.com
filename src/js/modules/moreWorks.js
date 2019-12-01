module.exports = function () {

  // begin more works
  const moreBtn = document.getElementById('page-footer__more-btn');
  const secondGallery = document.getElementsByClassName('works-gallery--second');

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      secondGallery[0].classList.add('active');
    });
  }
  // end more works

};