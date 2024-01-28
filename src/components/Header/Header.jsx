import logo from "./logo.png";
import styles from "./Header.module.css";
import LangChange from "./LangChange/LangChange";
import { NavLink } from "react-router-dom";
import defaultPhoto from '../../assets/images/user.png'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                <img src={logo} className="App-logo" alt="logo" />
                <LangChange />
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <>
                        <img src={props.userPhoto != null ? props.userPhoto : defaultPhoto}
                            className={styles.userPhoto}
                            alt={props.login} />
                        <p>{props.login}</p>
                    </>
                    : <NavLink to={'/login'}>Log In</NavLink>}
            </div>
        </header >
    )
}

export default Header;