import React from "react";
import Profile from "./Profile";
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


class ProfileContainer extends React.Component {

    debugger
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        if (!this.props.profile) return <Preloader />
        return <Profile {...this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);