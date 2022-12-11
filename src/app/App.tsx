import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? "DARK" : "LIGHT"}
      </button>
      <Link to={"/"}>MAIN</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
