import logo from "./logo.png";
import styles from "./Header.module.css";
import LangChange from "./LangChange/LangChange";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo} className="App-logo" alt="logo" />
            <LangChange />
        </header >
    )
}

export default Header;