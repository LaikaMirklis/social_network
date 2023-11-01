import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./i18n"; // localization
import { useTranslation } from "react-i18next"; // hook

import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/main_content/Profile/Profile";
import DialogsContainer from "./components/main_content/Dialogs/DialogsContainer";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";

const App = (props) => {
  const { t } = useTranslation();
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer store={props.store} t={t} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={<Profile store={props.store} t={t} />}
          />
          <Route
            path="/dialogs/"
            element={<DialogsContainer store={props.store} t={t} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
