import styles from './Login.module.css'

const Login = (props) => {
    document.title = "Login"

    return <h1 className={styles.message}>You are not authorized</h1>
}
export default Login