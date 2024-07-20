import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { updateUserStatus, getUserProfile, getUserStatus } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import { withRouter } from '../../../hoc/withRouter';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const { match, authorizedUserId, getUserProfile, getUserStatus } = this.props;
        let userId = match.params.userId || authorizedUserId;

        if (userId) {
            getUserProfile(userId);
            getUserStatus(userId);
        }
    }

    componentWillUnmount() {
        this.props.getUserProfile(0);
    }

    compareIds() {
        const { profile, authorizedUserId } = this.props;

        if (profile)
            return profile.userId === authorizedUserId
    }

    getProfileWithProps() {
        const { match, authorizedUserId, getUserProfile, getUserStatus, ...profileProps } = this.props;

        return <Profile  {...profileProps} isAuthUserProfile={this.compareIds()} />
    }

    render() {
        const { profile, match, getUserProfile, getUserStatus, authorizedUserId } = this.props;

        if (!profile)
            return <Preloader />

        if (!match.params.userId && !this.compareIds()) {
            getUserProfile(0)
            getUserProfile(authorizedUserId);
            getUserStatus(authorizedUserId);
        }

        return this.getProfileWithProps()
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect)(ProfileContainer);