import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LOGIN_PATH = '/login';
const PROFILE_PATH = '/profile';

export const withAuthRedirect = (WrappedComponent) => (props) => {
  let location = useLocation();
  const params = useParams();
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    if (params.userId) return <WrappedComponent {...props} />;
    if (location.pathname !== LOGIN_PATH) return <Navigate to={LOGIN_PATH} />;
  }
  if (isAuth && location.pathname === LOGIN_PATH)
    return <Navigate to={PROFILE_PATH} />;

  return <WrappedComponent {...props} />;
};
