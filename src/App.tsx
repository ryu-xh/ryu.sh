import React from "react";
import {ParallaxProvider} from "react-scroll-parallax";

import "./assets/fonts/pretendardvariable.css";
import "./assets/fonts/pretendardvariable-jp.css";

import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
      <ParallaxProvider>
        <AppRouter />
      </ParallaxProvider>
  );
};

export default App;
