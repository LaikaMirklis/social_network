import { useTranslation } from 'react-i18next';
import styles from './News.module.css'

const News = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.news')

    return (
        <div></div>
    )
}

export default News;