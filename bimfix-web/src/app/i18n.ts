import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: {
      nav: {
        home: "Головна",
        poslugy: "Послуги",
        services: "Сервіси",
        about: "Про нас",
        contacts: "Контакти",
        login: "Вхід"
      },
      auth: {
        register: "Реєстрація"
      },
      home: {
        title: "BIMFIX — BMW кодування / програмування / дооснащення",
        subtitle: "Сучасний сервіс електроніки BMW у Рівному.",
      },
    },
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        poslugy: "Services",
        services: "Tools",
        about: "About",
        contacts: "Contacts",
        login: "Login"
      },
      auth: {
        register: "Register"
      },
      home: {
        title: "BIMFIX — BMW coding / programming / retrofit",
        subtitle: "Modern BMW electronics service in Rivne.",
      },
    },
  },

  ru: {
    translation: {
      nav: {
        home: "Главная",
        poslugy: "Услуги",
        services: "Сервисы",
        about: "О нас",
        contacts: "Контакты",
        login: "Вход"
      },
      auth: {
        register: "Регистрация"
      },
      home: {
        title: "BIMFIX — BMW кодирование / программирование / дооснащение",
        subtitle: "Современный сервис электроники BMW в Ровно.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ua",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});

export default i18n;