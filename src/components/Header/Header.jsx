import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
import LangChange from './LangChange/LangChange';
import defaultPhoto from '../../assets/images/user.png';
import { useSelector } from 'react-redux';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const login = useSelector((state) => state.auth.login);
    const userPhoto = useSelector((state) => state.auth.userPhoto);

    return (
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                <img src={logo} className='App-logo' alt='logo' />
                <LangChange />
            </div>
            <div className={styles.rightBlock}>
                {isAuth &&
                    <div className={styles.authUser}>
                        <img src={userPhoto != null ? userPhoto : defaultPhoto}
                            className={styles.userPhoto}
                            alt={login} />
                        <p>{login}</p>
                    </div>
                }
            </div>
        </header >
    )
}

export default Header;