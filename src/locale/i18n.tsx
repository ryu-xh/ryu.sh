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

// The default (ko) font is loaded via <link> in index.html.
// Load the Japanese font subset only when the resolved language is Japanese,
// so Korean visitors never download the JP font set.
const loadJapaneseFont = () => {
  const id = "pretendard-jp-font";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.crossOrigin = "anonymous";
  link.href =
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard-jp/dist/web/variable/pretendardvariable-jp-dynamic-subset.css";
  document.head.appendChild(link);
};

if (i18n.language?.startsWith("ja")) {
  loadJapaneseFont();
}

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  if (lng?.startsWith("ja")) loadJapaneseFont();
});

export default i18n;
