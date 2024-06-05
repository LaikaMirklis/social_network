import MessageBubbleTriangle from '../../../common/MessageBubbleTriangle/MessageBubbleTriangle';
import styles from './Message.module.css'

const Message = (props) => (
    <div className={props.userId === 0 ? styles.myMessage : styles.otherMessage}>
        {props.message}
        <MessageBubbleTriangle triangleClassName={styles.messageTriangle} />
    </div>
)

export default Message;