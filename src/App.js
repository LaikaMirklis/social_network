import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next"; // hook

import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/main_content/Profile/ProfileContainer";
import DialogsContainer from "./components/main_content/Dialogs/DialogsContainer";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";
import UsersContainer from "./components/main_content/Users/UsersContainer";
import Profile from "./components/main_content/Profile/Profile";

const App = (props) => {
  const { t } = useTranslation(); //without it button langChange don`t switch text (Ukr-Eng)

  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route path="/dialogs/" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
