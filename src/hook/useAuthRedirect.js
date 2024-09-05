import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LOGIN_PATH = '/login';
const PROFILE_PATH = '/profile';
const DIALOGS_PATH = '/dialogs';

export const useAuthRedirect = (initialized) => {
  let location = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (initialized) {
    if (!isAuth && location.pathname === (PROFILE_PATH || DIALOGS_PATH))
      return <Navigate to={LOGIN_PATH} />;

    if (isAuth && location.pathname === LOGIN_PATH)
      return <Navigate to={PROFILE_PATH} />;
  }
};
