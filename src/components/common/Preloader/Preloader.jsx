import './Preloader.css';
import preloader from '../../../assets/images/preloader.svg'

const Preloader = ({ customStyles }) => {
    let styles = {
        wrapper: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
        preloader: { position: 'fixed' }
    };

    if (customStyles === 'preloaderInBlock') {
        styles.wrapper.backgroundColor = 'transparent';
        styles.preloader = { padding: '0' };
    }

    return <div className='preloaderWrapper' style={styles.wrapper} >
        <img src={preloader} alt='Cat-shaped preloader.' className='preloader' style={styles.preloader} />
    </div>
}

export default Preloader;