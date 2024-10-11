import styles from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { clearErrorData, logInUser } from '../../../redux/auth-reducer';
import LoginForm from './LoginForm';
import BearFormContainer from '../../common/FormBear/BearFormContainer';
import { useEffect, useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const formError = useSelector((state) => state.auth.formError);
    const captchaUrl = useSelector((state) => state.auth.captchaUrl);
    const { t } = useTranslation();

    const [isLegHidden, setIsLegHidden] = useState(false);

    const handleLogin = (logInData) => {
        dispatch(logInUser(logInData));
    };

    useEffect(() => {
        if (captchaUrl)
            setIsLegHidden(true)
    }, [captchaUrl]);

    useEffect(() => {
        return () => dispatch(clearErrorData())
    }, []);

    return (
        <div className={styles.loginPage}>
            <BearFormContainer styles={styles} isLegHidden={isLegHidden}
                Component={(componentProps) =>
                    <LoginForm
                        t={t}
                        logInUser={handleLogin}
                        captchaUrl={captchaUrl}
                        formError={formError}
                        {...componentProps}
                    />} />
        </div>
    );
};

export default Login;