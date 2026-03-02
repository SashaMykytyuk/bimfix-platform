import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: {
      nav: {
        home: "Головна",
        services: "Сервіси",
        about: "Про нас",
        contacts: "Контакти",
        offer: "Публічна оферта",
        privacy: "Політика конфіденційності",
        login: "Вхід",
        auth: { register: "Реєстрація" }
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
        services: "Services",
        about: "About",
        contacts: "Contacts",
        offer: "Public offer",
        privacy: "Privacy policy",
        login: "Login",
        auth: { register: "Register" }
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
        services: "Сервисы",
        about: "О нас",
        contacts: "Контакты",
        offer: "Публичная оферта",
        privacy: "Политика конфиденциальности",
        login: "Вход",
        auth: { register: "Регистрация" }
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