import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/main_content/Profile/Profile";
import Dialogs from "./components/main_content/Dialogs/Dialogs";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
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
