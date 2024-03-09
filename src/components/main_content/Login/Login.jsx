import { useTranslation } from 'react-i18next'
import styles from './Login.module.css'

const Login = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.login')

    return <h1 className={styles.message}>{t('loginPage.message')}</h1>
}

export default Login