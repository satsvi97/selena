particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#b8b8ff", "#d4d4ff", "#ffffff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 2, "random": true },
    
    "line_linked": { 
      "enable": false 
    },
    
    "move": { 
      "enable": true, 
      "speed": 1, 
      "direction": "none", 
      "random": true, 
      "out_mode": "out" 
    }
  },
  
  "interactivity": { 
    "events": { 
      "onhover": { 
        "enable": true, 
        "mode": "repulse" 
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 120,
        "duration": 0.8
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Инициализация карусели Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});