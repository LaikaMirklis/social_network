import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginForm.module.scss';
import { Form, Field } from 'react-final-form'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

const hiddenPasswordConfig = {
    inputType: 'password',
    icon: faEyeSlash,
    buttonClass: styles.crossedEye,
    title: 'loginPage.showPassword'
};

const visiblePasswordConfig = {
    inputType: 'text',
    icon: faEye,
    buttonClass: '',
    title: 'loginPage.hidePassword'
};

const LoginForm = ({ logInUser, t, setIsHidden }) => {
    const [passwordConfig, setPasswordConfig] = useState(hiddenPasswordConfig);
    const [formError, setFormError] = useState(null);
    const [captchaImgUrl, setCaptchaImgUrl] = useState(null);

    const togglePasswordVisibility = () => {
        setPasswordConfig(prevConfig =>
            prevConfig.inputType === 'password'
                ? visiblePasswordConfig
                : hiddenPasswordConfig
        );
    };

    useEffect(() => {
        if (captchaImgUrl)
            setIsHidden(true);
    }, [captchaImgUrl, setIsHidden]);

    const { inputType, icon, buttonClass, title } = passwordConfig;

    return (
        <Form onSubmit={(values) => {
            logInUser(values, setFormError, setCaptchaImgUrl)
        }}>
            {({ handleSubmit }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputField}>
                        <Field name='email' component={Input} type='email'
                            placeholder={t('loginPage.email')} autoComplete='off' validate={required}
                        />
                    </div>
                    <div className={styles.inputField}>
                        <Field name='password' component={Input} type={inputType}
                            placeholder={t('loginPage.password')} autoComplete='off' validate={required}
                        />
                        <button title={t(title)} className={`${styles.showPasswordBtn} ${buttonClass}`}
                            onClick={togglePasswordVisibility} type='button'>
                            <FontAwesomeIcon icon={icon} />
                        </button>
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <Field name='rememberMe' component='input' type='checkbox' />
                        <label className={styles.checkboxLabel}>{t('loginPage.checkbox')}</label>
                    </div>
                    {captchaImgUrl &&
                        <>
                            <div className={styles.inputField}>
                                <img src={captchaImgUrl} alt='captcha' />
                            </div>
                            <div className={styles.inputField}>
                                <Field name='captcha' component='input' />
                            </div>
                        </>
                    }
                    {formError &&
                        <div className={styles.inputField}>
                            <div className={styles.formSummaryError}> {formError}</div>
                        </div>
                    }
                    <div className={styles.submitBtnWrapper}>
                        <button className={styles.submitBtn}>{t('loginPage.logIn')}</button>
                    </div>
                </form>
            )}
        </Form>
    );
};

export default LoginForm; 