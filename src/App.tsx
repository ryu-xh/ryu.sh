import React from "react";

import "./assets/fonts/pretendardvariable.css";
import "./assets/fonts/pretendardvariable-jp.css";

import "./locale/i18n";

import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
    <AppRouter />
  );
};

export default App;
