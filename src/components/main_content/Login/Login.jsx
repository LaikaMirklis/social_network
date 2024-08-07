import styles from './Login.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { withTranslation } from 'react-i18next';
import { logInUser } from '../../../redux/auth-reducer';
import LoginForm from './LoginForm';
import BearFormContainer from '../../common/FormBear/BearFormContainer';

const Login = (props) => {
    const t = props.t;

    document.title = t('pageTitles.login');

    return (
        <div className={styles.loginPage}>
            <BearFormContainer styles={styles}
                Component={(componentProps) => <LoginForm {...props} {...componentProps} />} />

            <h1>{t('loginPage.login')}</h1>
        </div>
    );
};

export default compose(
    connect(null, { logInUser }),
    withAuthRedirect,
    withTranslation()
)(Login);