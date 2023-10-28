import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/main_content/Profile/Profile";
import Dialogs from "./components/main_content/Dialogs/Dialogs";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";
import "./i18n"; // localization
import { useTranslation } from "react-i18next"; // hook

const App = (props) => {
  const { t } = useTranslation();
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} t={t} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                t={t}
              />
            }
          />
          <Route
            path="/dialogs/"
            element={<Dialogs store={props.store} t={t} />}
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
