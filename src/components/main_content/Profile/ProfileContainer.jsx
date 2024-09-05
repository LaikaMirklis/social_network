import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus, getUserProfile, getUserStatus } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const { userId: paramUserId } = useParams();
    const { t } = useTranslation();

    const profile = useSelector((state) => state.profilePage.profile);
    const authorizedUserId = useSelector((state) => state.auth.userId);
    const status = useSelector((state) => state.profilePage.status);
    const isFetching = useSelector((state) => state.profilePage.isFetching);

    const userId = paramUserId || authorizedUserId;

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId));
            dispatch(getUserStatus(userId));
        }
        return (() => dispatch(getUserProfile(0)))
    }, [userId]);

    const handleUpdateUserStatus = (status) => {
        dispatch(updateUserStatus(status))
    }

    if (!profile)
        return <Preloader />

    return (
        <Profile
            t={t}
            profile={profile}
            status={status}
            isFetching={isFetching}
            updateUserStatus={handleUpdateUserStatus}
            isAuthUserProfile={profile?.userId === authorizedUserId}
        />
    )
}

export default ProfileContainer;