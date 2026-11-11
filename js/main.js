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
            "detect_on": "window", // ловим мышь по всему экрану, даже над карточками
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

// Старая галерея на главной (если где-то останется .mySwiper)
function initSwiper() {
    if (!document.querySelector('.mySwiper')) return;
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

// Карусель скриншотов внутри карточки темы
function initThemeGallery() {
    const galleries = document.querySelectorAll('.theme-gallery');
    if (!galleries.length) return;
    if (typeof Swiper === 'undefined') {
        setTimeout(initThemeGallery, 100);
        return;
    }
    galleries.forEach((el) => {
        new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 8,
            loop: true,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
        });
    });
}

// Лайтбокс: клик по скриншоту — открыть в большом формате
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    const img = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const open = (source) => {
        img.src = source.currentSrc || source.src;
        img.alt = source.alt || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
    };
    const close = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        img.src = '';
    };

    // Делегирование: работает и для клонов Swiper
    document.querySelectorAll('.theme-gallery').forEach((gallery) => {
        gallery.addEventListener('click', (e) => {
            const target = e.target.closest('img');
            if (target) open(target);
        });
    });

    lightbox.addEventListener('click', close);
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            close();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}

// Кнопка «Установить»: копируем URL расширения в буфер обмена
function initCopyInstall() {
    const btn = document.querySelector('.ext-install[data-copy]');
    if (!btn) return;
    const url = btn.getAttribute('data-copy');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const restoreText = btn.textContent;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                // Фоллбек для старых браузеров
                const ta = document.createElement('textarea');
                ta.value = url;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
            }
            btn.classList.add('is-copied');
            btn.textContent = '✓';
            setTimeout(() => {
                btn.classList.remove('is-copied');
                btn.textContent = restoreText;
            }, 1500);
        } catch (err) {
            // Если копирование недоступно — открываем ссылку
            window.open(url, '_blank', 'noopener');
        }
    });
}

function initAll() {
    initParticles();
    initSwiper();
    initThemeGallery();
    initLightbox();
    initCopyInstall();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}