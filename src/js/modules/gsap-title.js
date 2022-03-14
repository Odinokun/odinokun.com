module.exports = function () {

  // begin gsap title effects
  const title = document.getElementById("index__title");

  if (title) {
    title.addEventListener("mouseenter", () => {
      gsap.to(".index__filter feDisplacementMap", 1, {
        attr: {
          scale: 100
        },
        ease: "circ.out"
      });
      gsap.to(".index__filter feTurbulence", 1, {
        attr: {
          baseFrequency: '2.08 .08'
        },
        ease: "circ.out"
      }, 1);
      gsap.to(title, 1, {
        fontVariationSettings: "'wght' 650",
        ease: "back.out"
      });
    });
    title.addEventListener("mouseleave", () => {
      gsap.to(".index__filter feDisplacementMap", 1, {
        attr: {
          scale: 0
        },
        ease: "circ.out"
      }, 1);
      gsap.to(".index__filter feTurbulence", 1, {
        attr: {
          baseFrequency: '2.01 .01'
        },
        ease: "circ.out"
      }, 1);
      gsap.to(title, 1, {
        fontVariationSettings: "'wght' 700",
        ease: "back.out"
      }, 1);
    });
  }
  // end gsap title effects

};