import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import ja from "./translation/ja.json";
import ko from "./translation/ko.json";

const resources = {
  ko: {
    translation: ko,
  },
  ja: {
    translation: ja,
  },
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || userLanguage || "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = i18n.language;

// Fonts are self-hosted via @font-face in index.css. The JP subset is fetched
// lazily by the browser only when a :lang(ja) glyph is actually rendered, so
// Korean visitors never download it — no manual injection needed here.
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
