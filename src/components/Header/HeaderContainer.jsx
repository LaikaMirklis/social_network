import React from "react";
import axios from 'axios';
import Header from "./Header";
import { setAuthUserData, setUserPhoto } from "../../redux/auth-reducer";
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    this.props.setAuthUserData(id, login, email)
                    if (this.props.userId) {
                        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`);
                    }
                }
            })
            .then(response => {

                this.props.setUserPhoto(response.data.photos.small)
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