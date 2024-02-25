import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // hook

import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/main_content/Profile/ProfileContainer";
import DialogsContainer from "./components/main_content/Dialogs/DialogsContainer";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";
import UsersContainer from "./components/main_content/Users/UsersContainer";
import NotFound from "./components/common/NotFound/NotFound";
import LoginPage from "./components/main_content/Login/Login";

const App = (props) => {
  const { t } = useTranslation(); //without it button langChange don`t switch text (Ukr-Eng)

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
