import styles from './Login.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { logInUser } from '../../../redux/auth-reducer';
import LoginForm from './LoginForm';
import BearFormContainer from '../../common/FormBear/BearFormContainer';
import { useTranslation } from 'react-i18next';

const Login = (props) => {
    const { t } = useTranslation();

    document.title = t('pageTitles.login');

    return (
        <div className={styles.loginPage}>
            <BearFormContainer styles={styles}
                Component={(componentProps) => <LoginForm {...props} {...componentProps} t={t} />} />

            <h1>{t('loginPage.login')}</h1>
        </div>
    );
};

export default compose(
    connect(null, { logInUser }),
    withAuthRedirect
)(Login);