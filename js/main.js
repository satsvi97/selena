function initParticles() {
    if (typeof particlesJS === 'undefined') {
        // particles.js ещё не загрузился — ждём
        setTimeout(initParticles, 100);
        return;
    }
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#b8b8ff", "#d4d4ff", "#ffffff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas", // важно: события на canvas, не на window
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "repulse": { "distance": 120, "duration": 0.8 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
}

// Запускаем когда DOM готов
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}

// Инициализация карусели Swiper (тоже после DOM)
function initSwiper() {
    if (typeof Swiper === 'undefined') {
        setTimeout(initSwiper, 100);
        return;
    }
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: { 768: { slidesPerView: 2, spaceBetween: 30 } }
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwiper);
} else {
    initSwiper();
}