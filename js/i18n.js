/* Переключение языка сайта: RU / EN / UK / SV */
const I18N = {
  ru: {
    "page.index.title": "Selena's Tavern | Эфирная Луна",
    "page.ilion.title": "Илион | Selena's Tavern",

    "tagline": "Погрузись в мир, где песок времени встречается с лунным светом.",

    "nav.themes": "Мои Темы",
    "nav.extensions": "Мои Расширения",
    "nav.bots": "Мои Боты",
    "nav.lorebooks": "Мои Лорбуки",
    "nav.ilion": "Илион",

    "about.title": "Обо мне",
    "about.text": "Привет! Я Селена — родом из Киева, а теперь живу на юге Швеции с псом Бруно и кошкой Луной. Уже пару лет увлекаюсь ИИ и ролевыми играми: делаю темы и расширения для SillyTavern, а скоро выпущу первое расширение. Мой мир — это луна, пустыня и пески времени: всё началось с ролевой по ACOTAR, а выросло в собственную космологию, мифологию и целый мир. Эстетика песка и луны ведёт к Илиону — древнему городу из моих историй. Здесь я делюсь темами, расширениями и ботами для Таверны. 🖤🌙",

    "themes.title": "Мои Темы",
    "themes.subtitle": "Темы оформления для SillyTavern — от тёмных фэнтези до уютных таверн.",
    "theme.moonlit.desc": "Глубокий фиолетовый, золото, частицы лунного света. Полная перерисовка интерфейса.",
    "theme.runmouse.desc": "Готический дарк-роман: свеча на подоконнике, тёмная роза, полароид с фото и сердцебиение вместо кнопки отправки. У него и у неё — разные плашки.",
    "btn.themePage": "Страница темы",
    "tag.full": "Полная",
    "tag.duotone": "Duotone PNG",
    "tag.reaper": "REAPER-style",
    "btn.downloadJson": "Скачать .json",

    "ext.title": "Мои Расширения",
    "ext.subtitle": "Плагины и скрипты для SillyTavern — расширяют функционал таверны.",
    "ext.scene.desc": "Панель сцены: календарь, место, время, погода, кто рядом, открытые нити. ИИ обновляет тегом <code>[[scene: ...]]</code>.",
    "btn.github": "GitHub",
    "btn.install": "Установить",
    "tag.sillytavern": "SillyTavern",
    "tag.rptools": "RP Tools",
    "tag.mit": "MIT",
    "ext.lore.title": "Lorebook Sync",
    "ext.lore.desc": "Синхронизация лорбуков, персонажей, персон и чатов с Notion — у каждой категории своя база.",
    "btn.soon": "Скоро",
    "tag.wip": "WIP",
    "tag.lorebook": "Lorebook",
    "ext.new.title": "Новое расширение",
    "ext.new.desc": "Есть идея? Напиши мне.",

    "bots.title": "Мои Боты",
    "bots.subtitle": "Персонажи для SillyTavern. Пока пусто — наполняю по мере готовности.",
    "bots.soon.title": "Скоро...",
    "bots.soon.desc": "Новые персонажи появятся здесь.",

    "lorebooks.title": "Мои Лорбуки",
    "lorebooks.subtitle": "Лорбуки и миры для SillyTavern — персонажи, локации, события и правила.",
    "lorebooks.soon.title": "Скоро...",
    "lorebooks.soon.desc": "Первый лорбук уже на подходе.",
    "lorebook.devils.title": "Ночь Дьявола",
    "lorebook.devils.desc": "19 записей по вселенной Penelope Douglas «Devil's Night»: Меридиан Сити, Тандер Бей, Всадники, правила отыгрыша. World Info для SillyTavern.",
    "lorebook.devils.note": "Импорт: World Info → Import → выбрать JSON.",
    "tag.darkromance": "Дарк-роман",
    "tag.nsfw": "NSFW",

    "ilion.h1": "Илион",
    "ilion.tagline": "Мир песков времени, древних руин и луны, что никогда не заходит.",
    "ilion.nav.home": "На главную",
    "ilion.nav.world": "Мир",
    "ilion.nav.places": "Места",
    "ilion.nav.lore": "Лор",
    "ilion.world.title": "Мир песков времени",
    "ilion.world.text1": "Илион — исходный мир для моих историй и ботов. Древние руины, пески, что помнят каждый шаг, и луна, что никогда не заходит. Здесь время течёт иначе, а каждый выбор оставляет след на дюнах.",
    "ilion.world.text2": "Страница будет наполняться по мере разработки мира: карта, хроники, пантеон, расы, магия песков, фракции.",
    "ilion.places.title": "Места",
    "ilion.places.subtitle": "Локации Илиона — от сияющих дворцов до забытых гробниц.",
    "ilion.place.dunes.title": "Дюны Вечности",
    "ilion.place.dunes.desc": "Бескрайние пески, в которых погребены города, чьи имена уже никто не помнит.",
    "ilion.place.moon.title": "Дворец Луны",
    "ilion.place.moon.desc": "Резиденция правителей Илиона, где ночь длится дольше дня.",
    "ilion.place.tombs.title": "Гробницы Первых",
    "ilion.place.tombs.desc": "Подземелья, где спят те, кто создал пески и научил их помнить.",
    "ilion.place.new.title": "Новое место",
    "ilion.place.new.desc": "Скоро здесь появится ещё одна локация.",
    "ilion.lore.title": "Лор",
    "ilion.lore.subtitle": "Пантеон, расы, магия и фракции Илиона.",
    "ilion.lore.pantheon.title": "Пантеон",
    "ilion.lore.pantheon.desc": "Боги песков, луны и времени — их имена шепчут в караван-сараях.",
    "ilion.lore.races.title": "Расы",
    "ilion.lore.races.desc": "Люди дюн, лунные эльфы, стражи-полукровки и те, кто не стареет.",
    "ilion.lore.magic.title": "Магия песков",
    "ilion.lore.magic.desc": "Искусство читать следы и повелевать дюнами. Плата за неё всегда высока.",
    "ilion.lore.factions.title": "Фракции",
    "ilion.lore.factions.desc": "Караванщики, лунный двор, хранители гробниц — у каждого свой интерес.",
    "footer.telegram": "Мой Telegram",
    "footer.github": "GitHub",
    "footer.made": "автор",
    "tag.extension": "Расширение",
    "btn.copyLink": "Скопировать ссылку",
    "theme.devils.desc": "Шесть книжных режимов по серии «Ночь Дьявола» Пенелопы Дуглас: Corrupt, Hideaway, Kill Switch, Nightfall, Conclave и Punk 57. Один CSS-движок, переключение на лету.",
    "theme.devils.note": "Устанавливается как расширение SillyTavern: Extensions → Install extension → вставить ссылку."
  },

  en: {
    "page.index.title": "Selena's Tavern | Ethereal Moon",
    "page.ilion.title": "Ilion | Selena's Tavern",

    "tagline": "Step into a world where the sands of time meet moonlight.",

    "nav.themes": "My Themes",
    "nav.extensions": "My Extensions",
    "nav.bots": "My Bots",
    "nav.lorebooks": "My Lorebooks",
    "nav.ilion": "Ilion",

    "about.title": "About Me",
    "about.text": "Hi! I'm Selena — originally from Kyiv, now living in southern Sweden with my dog Bruno and cat Luna. I've been into AI and roleplay for a couple of years: I make themes and extensions for SillyTavern, and my first extension is coming soon. My world is moon, desert and sands of time: it began with an ACOTAR roleplay and grew into my own cosmology, mythology and a whole world. The sand-and-moon aesthetic leads to Ilion, an ancient city from my stories. Here I share my themes, extensions and bots for the Tavern. 🖤🌙",

    "themes.title": "My Themes",
    "themes.subtitle": "SillyTavern themes — from dark fantasy to cozy taverns.",
    "theme.moonlit.desc": "Deep purple, gold, moonlit particles. A full interface rework.",
    "theme.runmouse.desc": "Gothic dark romance: a candle on the windowsill, a dark rose, a polaroid portrait and a heartbeat instead of a send button. Separate message cards for him and her.",
    "btn.themePage": "Theme page",
    "tag.full": "Full",
    "tag.duotone": "Duotone PNG",
    "tag.reaper": "REAPER-style",
    "btn.downloadJson": "Download .json",

    "ext.title": "My Extensions",
    "ext.subtitle": "Plugins and scripts for SillyTavern that expand the tavern's features.",
    "ext.scene.desc": "Scene panel: calendar, place, time, weather, who is present, open threads. The AI updates it with the <code>[[scene: ...]]</code> tag.",
    "btn.github": "GitHub",
    "btn.install": "Install",
    "tag.sillytavern": "SillyTavern",
    "tag.rptools": "RP Tools",
    "tag.mit": "MIT",
    "ext.lore.title": "Lorebook Sync",
    "ext.lore.desc": "Sync lorebooks, characters, personas and chats to Notion — each category gets its own database.",
    "btn.soon": "Coming soon",
    "tag.wip": "WIP",
    "tag.lorebook": "Lorebook",
    "ext.new.title": "New extension",
    "ext.new.desc": "Got an idea? Tell me.",

    "bots.title": "My Bots",
    "bots.subtitle": "SillyTavern characters. Empty for now — I'll add them as they're ready.",
    "bots.soon.title": "Coming soon...",
    "bots.soon.desc": "New characters will appear here.",

    "lorebooks.title": "My Lorebooks",
    "lorebooks.subtitle": "Lorebooks and worlds for SillyTavern — characters, locations, events and rules.",
    "lorebooks.soon.title": "Coming soon...",
    "lorebooks.soon.desc": "The first lorebook is on its way.",
    "lorebook.devils.title": "Devil's Night",
    "lorebook.devils.desc": "19 entries set in Penelope Douglas' Devil's Night universe: Meridian City, Thunder Bay, the Horsemen, roleplay rules. World Info for SillyTavern.",
    "lorebook.devils.note": "Import: World Info → Import → choose the JSON file.",
    "tag.darkromance": "Dark Romance",
    "tag.nsfw": "NSFW",

    "ilion.h1": "Ilion",
    "ilion.tagline": "A world of sands of time, ancient ruins and a moon that never sets.",
    "ilion.nav.home": "Home",
    "ilion.nav.world": "World",
    "ilion.nav.places": "Places",
    "ilion.nav.lore": "Lore",
    "ilion.world.title": "World of the Sands of Time",
    "ilion.world.text1": "Ilion is the original world for my stories and bots. Ancient ruins, sands that remember every step, and a moon that never sets. Here time flows differently, and every choice leaves a mark on the dunes.",
    "ilion.world.text2": "This page will grow as the world is developed: map, chronicles, pantheon, races, sand magic, factions.",
    "ilion.places.title": "Places",
    "ilion.places.subtitle": "Locations of Ilion — from shining palaces to forgotten tombs.",
    "ilion.place.dunes.title": "Dunes of Eternity",
    "ilion.place.dunes.desc": "Endless sands where cities are buried, their names forgotten by all.",
    "ilion.place.moon.title": "Palace of the Moon",
    "ilion.place.moon.desc": "The residence of Ilion's rulers, where night lasts longer than day.",
    "ilion.place.tombs.title": "Tombs of the First",
    "ilion.place.tombs.desc": "Dungeons where those who created the sands and taught them to remember sleep.",
    "ilion.place.new.title": "New place",
    "ilion.place.new.desc": "Another location will appear here soon.",
    "ilion.lore.title": "Lore",
    "ilion.lore.subtitle": "Pantheon, races, magic and factions of Ilion.",
    "ilion.lore.pantheon.title": "Pantheon",
    "ilion.lore.pantheon.desc": "Gods of sand, moon and time — their names are whispered in caravanserais.",
    "ilion.lore.races.title": "Races",
    "ilion.lore.races.desc": "Dune folk, moon elves, half-blood guardians and those who never age.",
    "ilion.lore.magic.title": "Sand Magic",
    "ilion.lore.magic.desc": "The art of reading traces and commanding dunes. Its price is always high.",
    "ilion.lore.factions.title": "Factions",
    "ilion.lore.factions.desc": "Caravaneers, the moon court, tomb keepers — each has their own interest.",
    "footer.telegram": "My Telegram",
    "footer.github": "GitHub",
    "footer.made": "by",
    "tag.extension": "Extension",
    "btn.copyLink": "Copy link",
    "theme.devils.desc": "Six book modes for Penelope Douglas' Devil's Night series: Corrupt, Hideaway, Kill Switch, Nightfall, Conclave and Punk 57. One CSS engine, switch on the fly.",
    "theme.devils.note": "Installs as a SillyTavern extension: Extensions → Install extension → paste the link."
  },

  uk: {
    "page.index.title": "Selena's Tavern | Ефірний Місяць",
    "page.ilion.title": "Іліон | Selena's Tavern",

    "tagline": "Поринь у світ, де пісок часу зустрічається з місячним сяйвом.",

    "nav.themes": "Мої Теми",
    "nav.extensions": "Мої Розширення",
    "nav.bots": "Мої Боти",
    "nav.lorebooks": "Мої Лорбуки",
    "nav.ilion": "Іліон",

    "about.title": "Про мене",
    "about.text": "Привіт! Я Селена — родом з Києва, а зараз живу на півдні Швеції з псом Бруно та кішкою Луною. Уже кілька років захоплююся ШІ та рольовими іграми: роблю теми й розширення для SillyTavern, а скоро випущу перше розширення. Мій світ — це місяць, пустеля й піски часу: усе почалося з рольової гри за ACOTAR, а виросло у власну космологію, міфологію та цілий світ. Естетика піску й місяця веде до Іліону — давнього міста з моїх історій. Тут я ділюся темами, розширеннями та ботами для Таверни. 🖤🌙",

    "themes.title": "Мої Теми",
    "themes.subtitle": "Теми оформлення для SillyTavern — від темного фентезі до затишних таверн.",
    "theme.moonlit.desc": "Глибокий фіолетовий, золото, частинки місячного світла. Повна переробка інтерфейсу.",
    "theme.runmouse.desc": "Готичний дарк-роман: свічка на підвіконні, темна троянда, полароїд із фото і серцебиття замість кнопки надсилання. У нього й у неї — різні плашки.",
    "btn.themePage": "Сторінка теми",
    "tag.full": "Повна",
    "tag.duotone": "Duotone PNG",
    "tag.reaper": "REAPER-style",
    "btn.downloadJson": "Завантажити .json",

    "ext.title": "Мої Розширення",
    "ext.subtitle": "Плагіни та скрипти для SillyTavern, що розширюють функціонал таверни.",
    "ext.scene.desc": "Панель сцени: календар, місце, час, погода, хто поруч, відкриті нитки. ШІ оновлює її тегом <code>[[scene: ...]]</code>.",
    "btn.github": "GitHub",
    "btn.install": "Встановити",
    "tag.sillytavern": "SillyTavern",
    "tag.rptools": "RP Tools",
    "tag.mit": "MIT",
    "ext.lore.title": "Lorebook Sync (планується)",
    "ext.lore.desc": "Синхронізація лорбуків між чатами та експорт у Notion/Obsidian.",
    "btn.soon": "Скоро",
    "tag.wip": "WIP",
    "tag.lorebook": "Lorebook",
    "ext.new.title": "Нове розширення",
    "ext.new.desc": "Є ідея? Напиши мені.",

    "bots.title": "Мої Боти",
    "bots.subtitle": "Персонажі для SillyTavern. Поки порожньо — додаю в міру готовності.",
    "bots.soon.title": "Скоро...",
    "bots.soon.desc": "Нові персонажі з'являться тут.",

    "lorebooks.title": "Мої Лорбуки",
    "lorebooks.subtitle": "Лорбуки та світи для SillyTavern — персонажі, локації, події та правила.",
    "lorebooks.soon.title": "Скоро...",
    "lorebooks.soon.desc": "Перший лорбук уже на підході.",
    "lorebook.devils.title": "Ніч Диявола",
    "lorebook.devils.desc": "19 записів за всесвітом Penelope Douglas «Devil's Night»: Мерідіан Сіті, Тандер Бей, Вершники, правила відіграшу. World Info для SillyTavern.",
    "lorebook.devils.note": "Імпорт: World Info → Import → вибрати JSON.",
    "tag.darkromance": "Дарк-роман",
    "tag.nsfw": "NSFW",

    "ilion.h1": "Іліон",
    "ilion.tagline": "Світ пісків часу, давніх руїн і місяця, що ніколи не заходить.",
    "ilion.nav.home": "На головну",
    "ilion.nav.world": "Світ",
    "ilion.nav.places": "Місця",
    "ilion.nav.lore": "Лор",
    "ilion.world.title": "Світ пісків часу",
    "ilion.world.text1": "Іліон — вихідний світ для моїх історій і ботів. Давні руїни, піски, що пам'ятають кожен крок, і місяць, що ніколи не заходить. Тут час тече інакше, а кожен вибір залишає слід на дюнах.",
    "ilion.world.text2": "Сторінка наповнюватиметься в міру розробки світу: карта, хроніки, пантеон, раси, магія пісків, фракції.",
    "ilion.places.title": "Місця",
    "ilion.places.subtitle": "Локації Іліону — від сяючих палаців до забутих гробниць.",
    "ilion.place.dunes.title": "Дюни Вічності",
    "ilion.place.dunes.desc": "Безкраї піски, у яких поховані міста, чиї імена вже ніхто не пам'ятає.",
    "ilion.place.moon.title": "Палац Місяця",
    "ilion.place.moon.desc": "Резиденція правителів Іліону, де ніч триває довше за день.",
    "ilion.place.tombs.title": "Гробниці Перших",
    "ilion.place.tombs.desc": "Підземелля, де сплять ті, хто створив піски й навчив їх пам'ятати.",
    "ilion.place.new.title": "Нове місце",
    "ilion.place.new.desc": "Скоро тут з'явиться ще одна локація.",
    "ilion.lore.title": "Лор",
    "ilion.lore.subtitle": "Пантеон, раси, магія та фракції Іліону.",
    "ilion.lore.pantheon.title": "Пантеон",
    "ilion.lore.pantheon.desc": "Боги пісків, місяця й часу — їхні імена шепочуть у караван-сараях.",
    "ilion.lore.races.title": "Раси",
    "ilion.lore.races.desc": "Люди дюн, місячні ельфи, вартові-напівкровки й ті, хто не старіє.",
    "ilion.lore.magic.title": "Магія пісків",
    "ilion.lore.magic.desc": "Мистецтво читати сліди й керувати дюнами. Плата за неї завжди висока.",
    "ilion.lore.factions.title": "Фракції",
    "ilion.lore.factions.desc": "Караванники, місячний двір, охоронці гробниць — у кожного свій інтерес.",
    "footer.telegram": "Мій Telegram",
    "footer.github": "GitHub",
    "footer.made": "автор",
    "tag.extension": "Розширення",
    "btn.copyLink": "Скопіювати посилання",
    "theme.devils.desc": "Шість книжкових режимів за серією «Ніч Диявола» Пенелопи Дуглас: Corrupt, Hideaway, Kill Switch, Nightfall, Conclave і Punk 57. Один CSS-движок, перемикання на льоту.",
    "theme.devils.note": "Встановлюється як розширення SillyTavern: Extensions → Install extension → вставити посилання."
  },

  sv: {
    "page.index.title": "Selena's Tavern | Eteriska Månen",
    "page.ilion.title": "Ilion | Selena's Tavern",

    "tagline": "Kliv in i en värld där tidens sand möter månsken.",

    "nav.themes": "Mina Teman",
    "nav.extensions": "Mina Tillägg",
    "nav.bots": "Mina Botar",
    "nav.lorebooks": "Mina Lorebooks",
    "nav.ilion": "Ilion",

    "about.title": "Om Mig",
    "about.text": "Hej! Jag är Selena — från Kyiv, nu bosatt i södra Sverige med min hund Bruno och katt Luna. Jag har varit inne på AI och rollspel i ett par år: jag gör teman och tillägg för SillyTavern, och mitt första tillägg släpps snart. Min värld är måne, öken och tidens sand: allt började med ett ACOTAR-rollspel och växte till min egen kosmologi, mytologi och en hel värld. Sandens och månens estetik leder till Ilion, en uråldrig stad från mina berättelser. Här delar jag mina teman, tillägg och botar för Tavernan. 🖤🌙",

    "themes.title": "Mina Teman",
    "themes.subtitle": "SillyTavern-teman — från mörk fantasy till mysiga tavernor.",
    "theme.moonlit.desc": "Djup lila, guld, månskenspartiklar. En fullständig omdesign av gränssnittet.",
    "theme.runmouse.desc": "Gotisk dark romance: ett ljus på fönsterbrädan, en mörk ros, ett polaroidporträtt och ett hjärtslag i stället för skicka-knappen. Egna meddelandekort för honom och henne.",
    "btn.themePage": "Temasida",
    "tag.full": "Full",
    "tag.duotone": "Duotone PNG",
    "tag.reaper": "REAPER-stil",
    "btn.downloadJson": "Ladda ner .json",

    "ext.title": "Mina Tillägg",
    "ext.subtitle": "Plugins och skript för SillyTavern som utökar tavernans funktioner.",
    "ext.scene.desc": "Scenpanel: kalender, plats, tid, väder, vilka som är närvarande, öppna trådar. AI:n uppdaterar den med taggen <code>[[scene: ...]]</code>.",
    "btn.github": "GitHub",
    "btn.install": "Installera",
    "tag.sillytavern": "SillyTavern",
    "tag.rptools": "RP Tools",
    "tag.mit": "MIT",
    "ext.lore.title": "Lorebook Sync",
    "ext.lore.desc": "Synkronisera lorebooks, karaktärer, personer och chattar med Notion — varje kategori får en egen databas.",
    "btn.soon": "Kommer snart",
    "tag.wip": "WIP",
    "tag.lorebook": "Lorebook",
    "ext.new.title": "Nytt tillägg",
    "ext.new.desc": "Har du en idé? Skriv till mig.",

    "bots.title": "Mina Botar",
    "bots.subtitle": "SillyTavern-karaktärer. Tomt just nu — jag fyller på när de är klara.",
    "bots.soon.title": "Kommer snart...",
    "bots.soon.desc": "Nya karaktärer dyker upp här.",

    "lorebooks.title": "Mina Lorebooks",
    "lorebooks.subtitle": "Lorebooks och världar för SillyTavern — karaktärer, platser, händelser och regler.",
    "lorebooks.soon.title": "Kommer snart...",
    "lorebooks.soon.desc": "Den första lorebooken är på väg.",
    "lorebook.devils.title": "Devil's Night",
    "lorebook.devils.desc": "19 poster i Penelope Douglas Devil's Night-universum: Meridian City, Thunder Bay, Horsemen, rollspelsregler. World Info för SillyTavern.",
    "lorebook.devils.note": "Importera: World Info → Import → välj JSON-filen.",
    "tag.darkromance": "Dark Romance",
    "tag.nsfw": "NSFW",

    "ilion.h1": "Ilion",
    "ilion.tagline": "En värld av tidens sand, uråldriga ruiner och en måne som aldrig går ner.",
    "ilion.nav.home": "Hem",
    "ilion.nav.world": "Värld",
    "ilion.nav.places": "Platser",
    "ilion.nav.lore": "Lore",
    "ilion.world.title": "Tidens sandvärld",
    "ilion.world.text1": "Ilion är ursprungsvärlden för mina berättelser och botar. Uråldriga ruiner, sand som minns varje steg och en måne som aldrig går ner. Här flyter tiden annorlunda, och varje val lämnar ett spår i dynerna.",
    "ilion.world.text2": "Sidan kommer att fyllas på allt eftersom världen utvecklas: karta, krönikor, pantheon, raser, sandmagi, fraktioner.",
    "ilion.places.title": "Platser",
    "ilion.places.subtitle": "Platser i Ilion — från glänsande palats till glömda gravar.",
    "ilion.place.dunes.title": "Evighetens dyner",
    "ilion.place.dunes.desc": "Oändliga sandvidder där städer begravts, deras namn glömda av alla.",
    "ilion.place.moon.title": "Månpalatset",
    "ilion.place.moon.desc": "Ilions härskares residens, där natten varar längre än dagen.",
    "ilion.place.tombs.title": "De Förstas gravar",
    "ilion.place.tombs.desc": "Underjordiska valv där de som skapade sanden och lärde den minnas sover.",
    "ilion.place.new.title": "Ny plats",
    "ilion.place.new.desc": "Ännu en plats dyker upp här snart.",
    "ilion.lore.title": "Lore",
    "ilion.lore.subtitle": "Pantheon, raser, magi och fraktioner i Ilion.",
    "ilion.lore.pantheon.title": "Pantheon",
    "ilion.lore.pantheon.desc": "Sandens, månens och tidens gudar — deras namn viskas i karavanserajer.",
    "ilion.lore.races.title": "Raser",
    "ilion.lore.races.desc": "Dynfolk, månälvor, halvblods väktare och de som aldrig åldras.",
    "ilion.lore.magic.title": "Sandmagi",
    "ilion.lore.magic.desc": "Konsten att läsa spår och befalla dyner. Priset är alltid högt.",
    "ilion.lore.factions.title": "Fraktioner",
    "ilion.lore.factions.desc": "Karavanförare, månhovet, gravvårdare — var och en har sitt intresse.",
    "footer.telegram": "Min Telegram",
    "footer.github": "GitHub",
    "footer.made": "av",
    "tag.extension": "Tillägg",
    "btn.copyLink": "Kopiera länk",
    "theme.devils.desc": "Sex boklägen för Penelope Douglas serie Devil's Night: Corrupt, Hideaway, Kill Switch, Nightfall, Conclave och Punk 57. En CSS-motor, byte direkt.",
    "theme.devils.note": "Installeras som ett SillyTavern-tillägg: Extensions → Install extension → klistra in länken."
  }
};

const I18N_DEFAULT = "ru";

function i18nGetLang() {
  try {
    const saved = localStorage.getItem("selena_lang");
    if (saved && I18N[saved]) return saved;
  } catch (e) { /* localStorage may be unavailable */ }
  return I18N_DEFAULT;
}

function i18nApply(lang) {
  const dict = I18N[lang] || I18N[I18N_DEFAULT];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  const select = document.getElementById("lang-select");
  if (select) select.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = i18nGetLang();
  const select = document.getElementById("lang-select");
  if (select) {
    select.value = lang;
    select.addEventListener("change", (e) => {
      const next = e.target.value;
      try { localStorage.setItem("selena_lang", next); } catch (err) { /* ignore */ }
      i18nApply(next);
    });
  }
  i18nApply(lang);
});