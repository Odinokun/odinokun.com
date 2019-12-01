module.exports = function () {

  // begin hide footer
  const moreBtn = document.getElementById('page-footer__more-btn');
  const footer = document.getElementById('page-footer');

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      footer.classList.add('hide');
    });
  }
  // end hide footer

};