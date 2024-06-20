import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const LOGIN_PATH = '/login';
const PROFILE_PATH = '/profile';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = ({ isAuth, ...props }) => {
    let location = useLocation();

    if (!isAuth && location.pathname !== LOGIN_PATH)
      return <Navigate to={LOGIN_PATH} />;
    if (isAuth && location.pathname === LOGIN_PATH)
      return <Navigate to={PROFILE_PATH} />;

    return <Component {...props} />;
  };

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
