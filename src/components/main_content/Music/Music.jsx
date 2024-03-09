import { useTranslation } from 'react-i18next';
import styles from './Music.module.css'

const Music = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.music')

    return (
        <div></div>
    )
}

export default Music;