# Ассеты профиля janitorAI

Все файлы — WebP с прозрачностью. Исходные PNG лежат локально в `H:\AI\Taverna\EXT\Janitor`.

| файл | что это | где использовать |
|---|---|---|
| [selena-sticker.webp](selena-sticker.webp) | Стикер Селены с Бруно и Луной | центральный арт профиля |
| [moon.webp](moon.webp) | Полная луна без свечения, 2200 px | диск за фигурой |
| [moon-glow.webp](moon-glow.webp) | Луна со свечением, 512 px | маленький акцент в панели |
| [cloud-white-01.webp](cloud-white-01.webp) | Белое кучевое облако, 1988×1290 | основной слой облаков |
| [cloud-white-02.webp](cloud-white-02.webp) | Белое облако, было 5000 px, сжато до 2200 | крупный слой у верха |
| [cloud-white-03.webp](cloud-white-03.webp) | Белое облако, 1260×605 | средний слой |
| [cloud-white-04.webp](cloud-white-04.webp) | Белое облако, 1024×1024 | небольшой акцент |
| [cloud-white-05.webp](cloud-white-05.webp) | Белое облако, 1260×605 | средний слой |
| [cloud-dark-01.webp](cloud-dark-01.webp) | Тёмная дымка, 1311×658 | низкая прозрачность, глубина |
| [cloud-dark-02.webp](cloud-dark-02.webp) | Тёмная дымка, 1851×865 | низкая прозрачность |
| [cloud-dark-03.webp](cloud-dark-03.webp) | Тёмная дымка, 1851×865 | низкая прозрачность |
| [cloud-mass.webp](cloud-mass.webp) | Плотная тёмная масса, 2000×1747 | крупное пятно у нижнего края |
| [cloud-row.webp](cloud-row.webp) | Полоса мелких облаков, 1883×538 | горизонтальная лента |

## Как подключать

```css
background-image: url("https://satsvi97.github.io/selena/img/janitorprofile/cloud-white-01.webp");
```

Облака лучше ставить с `opacity` 0.12–0.25 и `filter: blur(2px)`, иначе они спорят с текстом.