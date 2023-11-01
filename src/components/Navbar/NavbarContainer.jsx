import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import Navbar from './Navbar';

const NavbarContainer = (props) => {
    let t = props.t; //translation

    let state = props.store.getState().sidebar;

    return (
        <Navbar
            t={t}
            friends={state.friends}
        />
    )
}

export default NavbarContainer;