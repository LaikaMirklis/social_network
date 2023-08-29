import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/main_content/Profile/Profile";
import Dialogs from "./components/main_content/Dialogs/Dialogs";
import News from "./components/main_content/News/News";
import Music from "./components/main_content/Music/Music";
import Settings from "./components/main_content/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes className="app-wrapper-content">
          <Route path="/profile" Component={Profile} />
          <Route path="/dialogs" Component={Dialogs} />
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
