particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#b8b8ff", "#d4d4ff", "#ffffff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 2, "random": true },
    
    // ОТКЛЮЧАЕМ ЛИНИИ МЕЖДУ ЧАСТИЦАМИ
    "line_linked": { 
      "enable": false 
    },
    
    "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "out_mode": "out" }
  },
  
  // ОТКЛЮЧАЕМ ЛИНИИ ПРИ НАВЕДЕНИИ МЫШКИ
  "interactivity": { 
    "events": { 
      "onhover": { "enable": false } 
    } 
  },
  "retina_detect": true
});

// Инициализация карусели Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // На телефоне показывать 1 картинку
    spaceBetween: 20,
    loop: true, // Зацикленная карусель
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // На больших экранах (ПК) показывать 2 картинки в ряд
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});
