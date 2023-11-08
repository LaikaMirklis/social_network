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
import { LanguageProvider } from "./i18n/LanguageContext";

const App = (props) => {
  const { t } = useTranslation(); //without it button langChange don`t switch text (Ukr-Eng)

  return (
    <LanguageProvider t={t}>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/" element={<Profile />} />
            <Route path="/dialogs/" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
