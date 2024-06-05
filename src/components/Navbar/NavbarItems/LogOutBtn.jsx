import styles from './NavbarItem.module.css'
import { connect } from 'react-redux';
import { logOutAuthUser } from '../../../redux/auth-reducer';

let LogOutBtn = (props) => (
    <button className={styles.button} onClick={props.logOutAuthUser}>
        {props.children}
    </button >)

LogOutBtn = connect(null, { logOutAuthUser })(LogOutBtn)

export default LogOutBtn;