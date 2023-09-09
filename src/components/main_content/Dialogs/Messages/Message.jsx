import styles from './Message.module.css'

const Message = (props) => {
    if (props.userId === 0) {
        return < div className={styles.myMessage}  > {props.message}</div >
    }
    else { return < div className={styles.otherMessage} > {props.message}</div > }

}

export default Message;