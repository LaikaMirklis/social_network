import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
import LangChange from './LangChange/LangChange';
import defaultPhoto from '../../assets/images/user.png'
import { connect } from 'react-redux'

// < header className = { styles.header } >//fixed position</header>
const Header = ({ userPhoto, login, isAuth }) => (
    <header className={styles.header}>
        <div className={styles.leftBlock}>
            <img src={logo} className='App-logo' alt='logo' />
            <LangChange />
        </div>
        <div className={styles.rightBlock}>
            {isAuth && <>
                <div className={styles.authUser}>
                    <img src={userPhoto != null ? userPhoto : defaultPhoto}
                        className={styles.userPhoto}
                        alt={login} />
                    <p>{login}</p>
                </div>
            </>}
        </div>
    </header >
)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    userPhoto: state.auth.userPhoto,
});

export default connect(mapStateToProps)(Header);