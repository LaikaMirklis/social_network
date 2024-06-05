import styles from './Dialogs.module.css'
import MessageBubbleTriangle from '../../common/MessageBubbleTriangle/MessageBubbleTriangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
import { submit } from 'redux-form'

const AddMessageForm = (props) => {
    const { handleSubmit, dispatch, t } = props

    let sendIfKeyPress = (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            dispatch(submit('dialogAddMessageForm'))
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field name='newMessageBody' component='textarea' placeholder={t('dialogsPage.textArea')} onKeyDown={sendIfKeyPress} />
            <div className={styles.buttonWrapper}>
                <button title={t('dialogsPage.sendButton')}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
                <MessageBubbleTriangle triangleClassName={styles.buttonTriangle} />
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);