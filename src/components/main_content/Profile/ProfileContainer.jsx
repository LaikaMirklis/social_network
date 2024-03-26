import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { updateUserStatus, getUserProfile, getUserStatus } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { withRouter } from "../../../hoc/withRouter";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux'
import { withTranslation } from "react-i18next";

class ProfileContainer extends React.Component {

    componentDidMount() {
        document.title = this.props.t('pageTitles.profile')

        let userId = this.props.match.params.userId;
        if (!userId && this.props.userId)
            userId = this.props.userId;
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentWillUnmount() {
        this.props.getUserProfile(0);
    }

    compareIds() {
        if (this.props.profile)
            return this.props.profile.userId === this.props.userId
    }

    getProfileWithProps() {
        const { match, userId, getUserProfile, getUserStatus, ...profileProps } = this.props;
        return <Profile  {...profileProps} isAuthUserProfile={this.compareIds()} />
    }

    render() {
        if (!this.props.profile)
            return <Preloader />

        if (!this.props.match.params.userId && !this.compareIds()) {
            this.props.getUserProfile(0); // to see Preloader
            this.props.getUserProfile(this.props.userId)
            this.props.getUserStatus(this.props.userId)
            return this.getProfileWithProps()
        }

        return this.getProfileWithProps()
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    // withAuthRedirect,
    withTranslation()
)(ProfileContainer);