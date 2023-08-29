import styles from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={styles.messages}>
            <div className={styles.message}>Hi</div>
            <div className={styles.message}>How is your it-kamasutra?</div>
            <div className={styles.message}>Yo</div>
        </div>
    )
}

export default Messages;