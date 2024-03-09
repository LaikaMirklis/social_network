import { useTranslation } from "react-i18next";
import styles from './Settings.module.css'


const Settings = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.settings')

    return (
        <div></div>
    )
}

export default Settings;