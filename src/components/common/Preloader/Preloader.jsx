import "./Preloader.css";
import preloader from '../../../assets/images/preloader.svg'


const Preloader = () => {
    debugger

    return <div className="preloaderWrapper" >
        <img src={preloader} alt='preloader' className="preloader" />
    </div>
}

export default Preloader;