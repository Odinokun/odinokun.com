module.exports = function () {

  // begin menu & burger
  const burger = document.getElementById('burger');
  const aside = document.getElementById('aside');
  const body = document.body;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    aside.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });
  // end menu & burger

};