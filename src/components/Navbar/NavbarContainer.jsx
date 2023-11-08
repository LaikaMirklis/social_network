import { useContext } from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';
import LanguageContext from '../../i18n/LanguageContext';

const NavbarContainer = (props) => {

    let t = useContext(LanguageContext); //translation
    const store = useContext(StoreContext);

    let state = store.getState().sidebar;

    return (
        <Navbar
            t={t}
            friends={state.friends}
        />
    )
}

export default NavbarContainer;