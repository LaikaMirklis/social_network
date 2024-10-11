import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginForm.module.scss';
import { Form, Field } from 'react-final-form';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Input } from '../../common/FormsControls/FormsControls';
import { required, validateEmail } from '../../../utils/validators/validators';
import TestUserDataButton from './TestUser';

const passwordConfig = {
  hidden: {
    inputType: 'password',
    icon: faEyeSlash,
    buttonClass: styles.crossedEye,
    title: 'loginPage.showPassword',
  },
  visible: {
    inputType: 'text',
    icon: faEye,
    buttonClass: '',
    title: 'loginPage.hidePassword',
  },
};

const LoginForm = ({ formError, captchaUrl, logInUser, t }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const passwordField = isPasswordVisible
    ? passwordConfig.visible
    : passwordConfig.hidden;

  const { inputType, icon, buttonClass, title } = passwordField;

  return (
    <Form onSubmit={(values) => logInUser(values)}>
      {({ handleSubmit, form, invalid }) => (
        <>
          <TestUserDataButton
            form={form}
            t={t}
          />
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputField}>
              <Field
                name="email"
                component={Input}
                type="email"
                placeholder={t('loginPage.email')}
                autoComplete="off"
                validate={(value) => required(value) || validateEmail(value)}
              />
            </div>
            <div className={styles.inputField}>
              <Field
                name="password"
                component={Input}
                type={inputType}
                placeholder={t('loginPage.password')}
                autoComplete="off"
                validate={required}
              />
              <button
                title={t(title)}
                className={`${styles.showPasswordBtn} ${buttonClass}`}
                onClick={togglePasswordVisibility}
                type="button"
              >
                <FontAwesomeIcon icon={icon} />
              </button>
            </div>
            <div className={styles.checkboxWrapper}>
              <Field name="rememberMe" component="input" type="checkbox" />
              <label className={styles.checkboxLabel}>
                {t('loginPage.checkbox')}
              </label>
            </div>
            {captchaUrl && (
              <>
                <div className={styles.inputField}>
                  <img src={captchaUrl} alt="captcha" />
                </div>
                <div className={styles.inputField}>
                  <Field name="captcha" component="input" />
                </div>
              </>
            )}
            {formError && (
              <div className={styles.inputField}>
                <div className={styles.formSummaryError}> {formError}</div>
              </div>
            )}
            <div className={styles.submitBtnWrapper}>
              <button className={styles.submitBtn} disabled={invalid}>
                {t('loginPage.logIn')}
              </button>
            </div>
          </form>
        </>
      )}
    </Form>
  );
};

export default LoginForm;