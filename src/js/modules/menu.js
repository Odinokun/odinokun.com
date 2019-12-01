module.exports = function () {

  // begin menu & burger
  const burger = document.getElementById('burger');
  const aside = document.getElementById('aside');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    aside.classList.toggle('active');
  });
  // end menu & burger

};