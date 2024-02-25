import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { withRouter } from "../../common/functions/withRouter";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        document.title = "Profile"

        let userId = this.props.match.params.userId;
        if (!userId && this.props.userId) userId = this.props.userId;
        else if (!userId) userId = 2
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.match.params.userId && !this.props.isAuth)
            return <Navigate to="/login" />

        if (!this.props.match.params.userId && this.props.profile.userId !== this.props.userId) {
            this.props.getUserProfile(this.props.userId)
            return <Profile {...this.props.profile} />
        }

        if (!this.props.profile)
            return <Preloader />

        return <Profile {...this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);