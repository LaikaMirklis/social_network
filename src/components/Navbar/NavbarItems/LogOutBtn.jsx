import styles from './NavbarItem.module.css';
import { useDispatch } from 'react-redux';
import { logOutAuthUser } from '../../../redux/auth-reducer';

let LogOutBtn = ({ children }) => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOutAuthUser())
    }

    return (
        <button className={styles.button} onClick={handleLogOut}>
            {children}
        </button >
    )
}

export default LogOutBtn;