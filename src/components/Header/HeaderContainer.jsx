import React from "react";
import Header from "./Header";
import { setAuthUserData, setUserPhoto } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import { authAPI, profileAPI } from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                this.props.setAuthUserData(id, login, email)
                if (this.props.userId) {
                    return profileAPI.getUserInfo(this.props.userId)
                }
            }
        })
            .then(data => {
                if (data) this.props.setUserPhoto(data.photos.small)
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    userPhoto: state.auth.userPhoto,
});

export default connect(mapStateToProps, { setAuthUserData, setUserPhoto })(HeaderContainer);