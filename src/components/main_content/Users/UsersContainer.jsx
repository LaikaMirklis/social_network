import { connect } from 'react-redux';
import Users from './Users';
import { useTranslation } from 'react-i18next';
import { followAC, setUsersAC, unfollowAC } from '../../../redux/users-reducer';


const UsersContainer = (props) => {
    const { t } = useTranslation();

    return <Users {...props} t={t} />;
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);