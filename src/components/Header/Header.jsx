import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
import LangChange from './LangChange/LangChange';
import { NavLink } from 'react-router-dom';
import defaultPhoto from '../../assets/images/user.png'

// локалізація для кнопки
const Header = (props) => {
    const { userPhoto, login, isAuth } = props

    // < header className = { styles.header } >//fixed position</header>
    return (
        <header className={styles.header}>

            <div className={styles.leftBlock}>
                <img src={logo} className='App-logo' alt='logo' />
                <LangChange />
            </div>
            <div className={styles.rightBlock}>
                {isAuth ?
                    <>
                        <div className={styles.authUser}>
                            <img src={userPhoto != null ? userPhoto : defaultPhoto}
                                className={styles.userPhoto}
                                alt={login} />
                            <p>{login}</p>
                        </div>
                    </>
                    : <NavLink to={'/login'}>Log In</NavLink>}
            </div>
        </header >
    )
}

export default Header;