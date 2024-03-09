import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { withRouter } from "../../../hoc/withRouter";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux'
import { withTranslation } from "react-i18next";

class ProfileContainer extends React.Component {

    componentDidMount() {
        document.title = this.props.t('pageTitles.profile')

        let userId = this.props.match.params.userId;
        if (!userId && this.props.userId) userId = this.props.userId;
        if (userId) this.props.getUserProfile(userId);
    }

    componentWillUnmount() {
        this.props.getUserProfile(0);
    }

    render() {
        if (!this.props.profile) return <Preloader />

        if (!this.props.match.params.userId && this.props.profile.userId !== this.props.userId) {
            this.props.getUserProfile(0); // to see Preloader
            this.props.getUserProfile(this.props.userId)
            return <Profile {...this.props.profile} t={this.props.t} />
        }

        return <Profile {...this.props.profile} t={this.props.t} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect,
    withTranslation()
)(ProfileContainer);