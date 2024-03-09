import "./NotFound.css";
import errorImg from '../../../assets/images/Img404.png'
import { useTranslation } from "react-i18next";

const NotFound = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.notFound')

    return <div className="errorWrapper" >
        <div className="errorTextWrapper">
            <div className="errorCodeDiv">
                <h3 className="errorCode">{t('notFoundPage.errorCode')}</h3>
                <p className="errorDescription">{t('notFoundPage.errorDescription')}</p>
            </div>
            <p className="errorText">{t('notFoundPage.errorText')}</p>
        </div>
        <img src={errorImg} alt='not found' className="errorImg" />
    </div>
}

export default NotFound;