import { useContext } from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


const NavbarContainer = (props) => {

    let t = props.t; //translation
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