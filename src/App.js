import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/common/Preloader/Preloader';
import AppRoutes from './AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { useEffect } from 'react';
import { useDocumentTitle } from './hook/useDocumentTitle';
import { useAuthRedirect } from './hook/useAuthRedirect';

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.app.initialized);
  const redirect = useAuthRedirect(initialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  useDocumentTitle(initialized);

  if (redirect) return redirect;

  if (!initialized) return <Preloader />;

  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />
      <div className="app-wrapper-content">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
