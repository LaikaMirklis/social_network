import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, requestUsers, unfollow } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {
    getCurrentPageNumber, getFollowingInProgress, getIsAuth,
    getIsFetching, getPageSize, getTotalUsersCount, getUsers
} from '../../../redux/users-selectors';

const UsersContainer = () => {
    const dispatch = useDispatch();

    const users = useSelector(getUsers);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPageNumber = useSelector(getCurrentPageNumber);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);
    const isAuth = useSelector(getIsAuth);

    useEffect(() => {
        dispatch(requestUsers(pageSize, currentPageNumber));
    }, []);

    const onPageChanged = (pageNumber) => {
        dispatch(requestUsers(pageSize, pageNumber));
    };

    const handleFollow = (userId) => {
        dispatch(follow(userId));
    };
    const handleUnfollow = (userId) => {
        dispatch(unfollow(userId));
    };

    return (
        <>
            {isFetching && <Preloader />}
            <Users
                users={users}
                totalUsersCount={totalUsersCount}
                followingInProgress={followingInProgress}
                isAuth={isAuth}
                currentPageNumber={currentPageNumber}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                follow={handleFollow}
                unfollow={handleUnfollow}
            />
        </>
    );
}

export default UsersContainer;