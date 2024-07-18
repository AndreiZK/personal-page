import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import AnimatedPath from "./components/AnimatedPath/index";
import Typewriter from "./components/Typewriter";
import ExperienceSection from "./components/Experience";
import Contacts from "./components/Contacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { t } = useTranslation();

  const isMobile = window.innerWidth < 768;

  const currentLanguage = i18next.language;
  const [language, setLanguage] = useState(currentLanguage);

  const changeLanguage = () => {
    i18next.changeLanguage(language === "en" ? "ru" : "en");
    setLanguage(language === "en" ? "ru" : "en");
  };

  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(preferredTheme);

  const imgSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  const themeSwitchSpring = useSpring({
    transform: theme === "dark" ? "translateX(100%)" : "translateX(0%)",
  });

  const languageSwitchSpring = useSpring({
    transform: language === "en" ? "translateX(100%)" : "translateX(0%)",
  });

  const darkIconSpring = useSpring({
    color: theme === "dark" ? "white" : "#22b573",
  });

  const languageEnSpring = useSpring({
    color: theme === "dark" ? "white" : "#226fb5",
  });

  const gitHubLinkSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: { duration: 1500 },
  });

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <animated.img
        className="hero-img"
        style={imgSpring}
        src="/hero-photo.png"
      />
      <Typewriter
        style={{ marginBlock: "15px" }}
        text={t("hero-typewriter.first")}
        fontSize={isMobile ? "1.8rem" : "3em"}
      />
      <Typewriter
        delay={3}
        text={t("hero-typewriter.second")}
        fontSize={isMobile ? "1.6rem" : "2.5em"}
      />
      <animated.a
        target="blank"
        href="https://github.com/AndreiZK?tab=repositories"
        className="github-link"
        style={gitHubLinkSpring}
      >
        {t("github")} <i className="fa-brands fa-github"></i>
      </animated.a>
      <div className="theme-switch">
        <label className="theme-switch-label">
          <input
            type="checkbox"
            className="theme-switch-checkbox"
            checked={theme === "dark"}
            onChange={switchTheme}
          />
          <div className="theme-slider">
            <i className="fa-regular fa-sun theme-light"></i>
            <animated.div
              style={themeSwitchSpring}
              className="theme-slider-handle"
            ></animated.div>
            <animated.i
              style={darkIconSpring}
              className="fa-solid fa-moon theme-dark"
            ></animated.i>
          </div>
        </label>
      </div>
      <div className="language-switch">
        <label className="theme-switch-label">
          <input
            type="checkbox"
            className="theme-switch-checkbox"
            checked={language === "en"}
            onChange={changeLanguage}
          />
          <div className="theme-slider">
            <span className="language-val language-ru">RU</span>
            <animated.div
              style={languageSwitchSpring}
              className="language-slider-handle"
            ></animated.div>
            <animated.span
              style={languageEnSpring}
              className="language-val language-en"
            >
              EN
            </animated.span>
          </div>
        </label>
      </div>
      <AnimatedPath />
      <ExperienceSection />
      <Contacts />
      <ToastContainer />
    </div>
  );
}

export default App;
