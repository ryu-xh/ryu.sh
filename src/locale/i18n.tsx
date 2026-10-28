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

// Guard browser-only globals so this module also runs during SSR/prerender.
const isBrowser = typeof window !== "undefined";
const storedLanguage = isBrowser ? localStorage.getItem("language") : null;
const userLanguage = isBrowser ? window.navigator.language : undefined;

i18n.use(initReactI18next).init({
  resources,
  // Server prerenders in the default language (ko); the client re-resolves.
  lng: storedLanguage || userLanguage || "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

if (isBrowser) {
  document.documentElement.lang = i18n.language;
}

// Fonts are self-hosted via @font-face in index.css. The JP subset is fetched
// lazily by the browser only when a :lang(ja) glyph is actually rendered, so
// Korean visitors never download it — no manual injection needed here.
i18n.on("languageChanged", (lng) => {
  if (isBrowser) document.documentElement.lang = lng;
});

export default i18n;
