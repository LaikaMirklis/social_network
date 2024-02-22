import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { withRouter } from "../../common/functions/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.userId) userId = this.props.userId;
        else if (!userId) userId = 2
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.profile) return <Preloader />
        return <Profile {...this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);