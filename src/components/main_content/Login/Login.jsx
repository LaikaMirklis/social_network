import styles from './Login.module.css';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { withTranslation } from 'react-i18next';
import { logInUser } from '../../../redux/auth-reducer';
import LoginForm from './LoginForm';
import BearFormContainer from '../../common/FormBear/BearFormContainer';

const Login = (props) => {
    return (
        <div className={styles.loginPage}>
            <BearFormContainer styles={styles}>
                <LoginForm {...props} />
            </BearFormContainer>

            <h1>{props.t('loginPage.login')}</h1>
        </div>
    );
};

class LoginContainer extends React.Component {

    componentDidMount() {
        document.title = this.props.t('pageTitles.login');
    }

    onSubmit = (formData) => {
        this.props.logInUser(formData)
    }

    render() {
        return <Login onSubmit={this.onSubmit} t={this.props.t} />
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, { logInUser }),
    withAuthRedirect,
    withTranslation()
)(LoginContainer);