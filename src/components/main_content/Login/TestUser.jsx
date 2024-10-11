import styles from './TestUser.module.scss';

const testUserConfig = {
    email: 'nimase5473@obisims.com',
    password: '11111111'
};

const TestUserDataButton = ({ form, t }) => {

    const logInWithTestUser = () => {
        form.initialize(testUserConfig);
        form.submit()
    }

    return (
        <div className={styles.messageBubble} >
            <div>{t('loginPage.bearMessage')}</div>
            <button className={styles.fillFormBtn}
                onClick={logInWithTestUser} type='submit'>
                {t('loginPage.logInAsTestUser')}
            </button>
        </div>
    )

}

export default TestUserDataButton; 