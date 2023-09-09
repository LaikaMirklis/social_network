import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/main_content/Profile/Profile";
import Dialogs from "./components/main_content/Dialogs/Dialogs";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route
              path="/dialogs/"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
