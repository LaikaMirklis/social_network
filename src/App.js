import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/main_content/Profile/ProfileContainer';
import DialogsContainer from './components/main_content/Dialogs/DialogsContainer';
import News from './components/main_content/News/News';
import Music from './components/main_content/Music/Music';
import Settings from './components/main_content/Settings/Settings';
import UsersContainer from './components/main_content/Users/UsersContainer';
import NotFound from './components/common/NotFound/NotFound';
import Login from './components/main_content/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <Navbar />
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
