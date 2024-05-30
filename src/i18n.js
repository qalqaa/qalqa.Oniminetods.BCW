import { createI18n } from "vue-i18n";

const messages = {
  en: {
    headerTranslate: " Language",
    headerAbout: "About",
    headerStack: "Stack",
    headerContacts: "Contacts",
    headerFeature: "Feature",
    headerFooter: "Footer",
    footerHeader: "Header",
    footerSecretLink: "Secret Link",

    aboutTitle: "About",
    aboutName: "qalqa / Andrey Bastun",
    aboutDescr: "Frontend Developer",
    aboutAbout:
      "About myself: I've been working for an IT (SoftwareOne) company for a year now. During this time, I improved both my hard and soft skills, and also learned the basics of working practice. And for me this is just the beginning of the journey. I've a main goal to become a full stack developer and I'm moving towards this day after day!",

    stackTitle: "Stack",
    stackHtml: "I advanced skills in html layout, so it's baaaase...",
    stackCss: "It's also base like html, so who can't bruh",
    stackJS:
      "It's my main code intrument, thereby i can use any frameworks and make another",
    stackAngular:
      "My favorite framework, i've been studying it for a year, and i feel confident",
    stackReact:
      "Tried it framework a few times, it's easy and floaty, but not liked it.",
    stackVueJS: "It's my first project on Vue sooo...",
    stackDescr:
      "It's a bit about tech's that i can do, well or not at all, but i'm studying.",
    stackProjectsTitle: "That some links to my projects:",
    stackObject: "Object",
    stackObjectDescr: "(Some shit)",

    contactsTitle: "Contacts",
  },
  ru: {
    headerAbout: "Обо мне",
    headerStack: "Стак",
    headerContacts: "Контакты",
    headerFeature: "Фича",
    headerFooter: "Футтер",
    footerHeader: "Хеддер",
    footerSecretLink: "Секрет",

    aboutTitle: "Обо мне",
    aboutName: "qalqa / Андрей Бастун",
    aboutDescr: "Frontend-Разработчик",
    aboutAbout:
      "О себе: Я работаю в IT-компании (SoftwareOne) уже год. За это время я усовершенствовал свои Soft и Hard скиллы, а также освоил основы рабочей практики. И для меня это только начало пути. У меня есть главная цель – стать Senior Full Stack разработчиком и я иду к этому день за днем!",
    stackTitle: "Стак",
    stackHtml: "У меня продвинутые навыки в верстке HTML, так что это база...",
    stackCss: "Это тоже самое что и HTML, так что кто это не может :/",
    stackJS:
      "Это мой основной инструмент, благодоря ему я могу использовать любые фреймворки и создавать другие технологии",
    stackAngular:
      "Мой любимый фреймворк, изучаю его уже год и чувствую себя уверенно в нем",
    stackReact:
      "Пробовал несколько раз, он легкий и плавный, но не очень понравился, т.к основая идея слишком отличается от того к чему я привык.",
    stackVueJS: "Первый раз пишу на Vue так что...",
    stackDescr:
      "Немного о технологиях, которыми я владею, хорошо или не совсем, но учусь.",
    stackProjectsTitle: "Это ссылки на мои проекты:",
    stackObject: "Проект",
    stackObjectDescr: "Описание проекта",

    contactsTitle: "Контакты",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en", // язык по умолчанию
  fallbackLocale: "en",
  messages,
});

export default i18n;
