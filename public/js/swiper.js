var swiper = new Swiper(".swiper-container", {
  loop: true, // Infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Auto-slide every 3 seconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
});
