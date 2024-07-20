import MessageBubbleTriangle from '../../../common/MessageBubbleTriangle/MessageBubbleTriangle';
import styles from './Message.module.css'

const Message = ({ userId, message }) => (
    <div className={userId === 0 ? styles.myMessage : styles.otherMessage}>
        {message}
        <MessageBubbleTriangle triangleClassName={styles.messageTriangle} />
    </div>
)

export default Message;