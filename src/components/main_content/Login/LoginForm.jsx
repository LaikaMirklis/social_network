import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginForm.module.scss';
import { Field, reduxForm } from 'redux-form';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LoginForm = (props) => {
    const { handleSubmit, t } = props

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

    const [passwordConfig, setPasswordConfig] = useState(hiddenPasswordConfig);

    const togglePasswordVisibility = () => {
        setPasswordConfig(prevConfig =>
            prevConfig.inputType === 'password'
                ? visiblePasswordConfig
                : hiddenPasswordConfig
        );
    };

    const { inputType, icon, buttonClass, title } = passwordConfig;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputField}>
                <Field name='email' component='input' type='email'
                    placeholder={t('loginPage.email')} autoComplete='off' />
            </div>
            <div className={styles.inputField}>
                <Field name='password' component='input' type={inputType}
                    placeholder={t('loginPage.password')} autoComplete='off' />
                <button title={t(title)} className={`${styles.showPasswordBtn} ${buttonClass}`}
                    onClick={togglePasswordVisibility} type='button'>
                    <FontAwesomeIcon icon={icon} />
                </button>
            </div>
            <div className={styles.checkboxWrapper}>
                <Field name='rememberMe' component='input' type='checkbox' />
                <label className={styles.checkboxLabel}>{t('loginPage.checkbox')}</label>
            </div>
            <div className={styles.submitBtnWrapper}>
                <button className={styles.submitBtn}>{t('loginPage.logIn')}</button>
            </div>
        </form>
    );
};

export default reduxForm({ form: 'login' })(LoginForm); 