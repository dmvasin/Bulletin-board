const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
       
        thumbs: {
          swiper: swiper,
        },
      });

const menuBtn = document.querySelector(".menu-button");     
menuBtn.addEventListener("click", () => {
  alert("123")
})