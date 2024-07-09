// ScrollReveal().reveal('body', { delay: 500 });
// ScrollReveal (https://github.com/jlmakes/scrollreveal)

// (function scrollReveal() {
//   window.sr = ScrollReveal();

//   sr.reveal('.card-box', {
//     duration   : 600,
//     distance   : '20px',
//     easing     : 'ease-out',
//     origin     : 'bottom',
//     reset      : true,
//     scale      : 1,
//     viewFactor : 0,
//     afterReveal  : revealChildren,
//   }, 150);

//     var revealChildren = sr.reveal('.musbetleri__right__card', {
//     duration   : 500,
//     scale      : 1,
//     distance   : '20px',
//     origin     : 'bottom',
//     reset      : true,
//     easing     : 'ease-out',
//     viewFactor : 1,
//   }, 75);
// })();

const loading = document.querySelector(".loading");

function hideContainerAfterDelay() {
  setTimeout(() => {
      const loading = document.querySelector('.loading');
      loading.style.transition = "opacity 0.5s ease"; 
      loading.style.opacity = "0";
      setTimeout(() => {
          loading.style.display = "none";

      }, 500);
  }, 3000);
}

hideContainerAfterDelay()


// Slider
const swiper = new Swiper(document.querySelector(".swiper"), {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
