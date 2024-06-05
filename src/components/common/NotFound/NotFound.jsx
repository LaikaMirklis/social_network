import './NotFound.css';
import errorImg from '../../../assets/images/elf-404.png'
import { useTranslation } from 'react-i18next';

const NotFound = (props) => {
    const { t } = useTranslation();
    document.title = t('pageTitles.notFound')

    return <div className='errorPage' >
        <div className='errorTextWrapper'>
            <div className='errorCodeDiv'>
                <h3 className='errorCode'>{t('notFoundPage.errorCode')}</h3>
                <p className='errorDescription'>{t('notFoundPage.errorDescription')}</p>
            </div>
            <p className='errorText'>{t('notFoundPage.errorText')}</p>
        </div>
        <div className='errorImgWrapper'>
            <img src={errorImg} alt='A smiling woman in a fantasy costume saying "Oops".' className='errorImg' />
        </div>
    </div>
}

export default NotFound;