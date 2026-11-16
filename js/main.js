// Пыль: собственная физика вместо particles.js.
// particles.js в режиме repulse давит на частицы радиально и непрерывно —
// отсюда ощущение воронки. Здесь ветер от курсора слабеет квадратично,
// есть лёгкий заворот и затухание, поэтому пыль просто расходится и успокаивается.
function initDust() {
    const host = document.getElementById('particles-js');
    if (!host) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    host.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const COLORS = ['184,184,255', '212,212,255', '255,255,255'];
    const RADIUS = 140;
    let W = 0;
    let H = 0;
    let motes = [];
    let frameId = null;
    let t = 0;

    const pointer = { x: -9999, y: -9999, active: false, timer: null };

    function makeMote(anywhere) {
        const r = 0.8 + Math.random() * 2.0;
        return {
            x: Math.random() * W,
            y: anywhere ? Math.random() * H : H + 12,
            vx: (Math.random() - 0.5) * 0.10,
            vy: (Math.random() - 0.5) * 0.10,
            r: r,
            base: 0.32 + Math.random() * 0.46,
            phase: Math.random() * Math.PI * 2,
            speed: 0.0006 + Math.random() * 0.0013,
            color: COLORS[(Math.random() * COLORS.length) | 0]
        };
    }

    function seed() {
        const count = Math.max(40, Math.min(140, Math.round((W * H) / 13000)));
        motes = new Array(count).fill(0).map(() => makeMote(true));
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = host.clientWidth;
        H = host.clientHeight;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        seed();
    }

    function puff(x, y, power) {
        for (const m of motes) {
            const dx = m.x - x;
            const dy = m.y - y;
            const d = Math.sqrt(dx * dx + dy * dy) || 1;
            if (d < RADIUS * 1.6) {
                const k = 1 - d / (RADIUS * 1.6);
                m.vx += (dx / d) * k * power * (0.6 + Math.random() * 0.6);
                m.vy += (dy / d) * k * power * (0.6 + Math.random() * 0.6);
            }
        }
    }

    function frame() {
        t += 1;
        ctx.clearRect(0, 0, W, H);

        for (const m of motes) {
            // собственное дыхание пыли
            m.x += m.vx + Math.sin(t * m.speed + m.phase) * 0.05;
            m.y += m.vy + Math.cos(t * m.speed * 1.3 + m.phase) * 0.045;

            // ветер от курсора: мягко, с квадратичным затуханием и лёгким заворотом
            if (pointer.active) {
                const dx = m.x - pointer.x;
                const dy = m.y - pointer.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < RADIUS * RADIUS) {
                    const d = Math.sqrt(d2) || 1;
                    const k = 1 - d / RADIUS;
                    const force = k * k * 0.4;
                    const nx = dx / d;
                    const ny = dy / d;
                    m.vx += nx * force - ny * force * 0.32;
                    m.vy += ny * force + nx * force * 0.32;
                }
            }

            // пыль успокаивается
            m.vx *= 0.965;
            m.vy *= 0.965;

            if (m.x < -20) m.x = W + 20;
            else if (m.x > W + 20) m.x = -20;
            if (m.y < -20) m.y = H + 20;
            else if (m.y > H + 20) m.y = -20;

            const twinkle = 0.68 + 0.32 * Math.sin(t * m.speed * 6 + m.phase);
            ctx.beginPath();
            ctx.fillStyle = 'rgba(' + m.color + ',' + (m.base * twinkle).toFixed(3) + ')';
            ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
            ctx.fill();
        }

        frameId = requestAnimationFrame(frame);
    }

    function start() {
        if (frameId === null) frameId = requestAnimationFrame(frame);
    }

    function stop() {
        if (frameId !== null) {
            cancelAnimationFrame(frameId);
            frameId = null;
        }
    }

    document.addEventListener('pointermove', function (e) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        pointer.active = true;
        clearTimeout(pointer.timer);
        pointer.timer = setTimeout(function () {
            pointer.active = false;
        }, 700);
    }, { passive: true });

    document.addEventListener('pointerdown', function (e) {
        puff(e.clientX, e.clientY, 1.1);
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
        pointer.active = false;
    });

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) stop();
        else start();
    });

    window.addEventListener('resize', resize, { passive: true });

    resize();
    start();
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

// Кнопки «Установить/Скопировать ссылку»: копируем URL в буфер обмена
function initCopyInstall() {
    const buttons = document.querySelectorAll('[data-copy]');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
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
    });
}

// Оглавление архива: счётчики карточек и дата обновления страницы
function initArchiveToc() {
    document.querySelectorAll('.cover__toc-count').forEach((el) => {
        const grid = document.getElementById(el.getAttribute('data-count'));
        if (grid) el.textContent = String(grid.children.length);
    });

    const stamp = document.getElementById('cover-updated');
    if (stamp) {
        const d = new Date(document.lastModified);
        if (!isNaN(d.getTime())) {
            const pad = (n) => String(n).padStart(2, '0');
            stamp.textContent = pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear();
        }
    }
}

// Туман: плавно застилает луну, когда уезжаем с обложки вниз
function initFog() {
    const fog = document.querySelector('.fog');
    if (!fog) return;

    let frame = null;
    const update = () => {
        frame = null;
        const trigger = Math.max(320, window.innerHeight * 0.62);
        const k = Math.min(1, Math.max(0, window.scrollY / trigger));
        fog.style.opacity = (k * 0.97).toFixed(3);
    };

    window.addEventListener('scroll', () => {
        if (frame === null) frame = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
}

function initAll() {
    initDust();
    initSwiper();
    initThemeGallery();
    initLightbox();
    initCopyInstall();
    initArchiveToc();
    initFog();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}