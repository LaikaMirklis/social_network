import { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Field } from 'react-final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import styles from './Dialogs.module.css';
import MessageBubbleTriangle from '../../common/MessageBubbleTriangle/MessageBubbleTriangle';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);

const sendIfKeyPress = (event, form) => {
    if (event.key === 'Enter' && event.ctrlKey) {
        event.preventDefault();
        form.submit();
        // десь вліпити пояснення як надсилати повідомлення за допомогою клавіш Enter+Ctrl
    }
}

let AddMessageForm = ({ sendMessage, t, i18n }) => {
    const pickerRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [showPicker, setShowPicker] = useState(false);
    const currentLang = i18n.language.slice(0, -1);

    const addNewMessage = (values, form) => {
        sendMessage(values.newMessageBody);
        form.restart();
    };

    const handleEmojiSelect = (emoji, form) => {
        const formValue = form.getFieldState('newMessageBody').value || '';
        const position = cursorPosition;
        const newMessageBody = formValue.slice(0, position) + emoji.native + formValue.slice(position);
        form.change('newMessageBody', newMessageBody);
        setCursorPosition(position + emoji.native.length);
    };

    const handleSelect = (event) => {
        setCursorPosition(event.target.selectionStart);
    };

    const handleClickOutside = useCallback((event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    }, []);

    useEffect(() => {
        if (showPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPicker, handleClickOutside]);

    return (
        <Form onSubmit={addNewMessage}>
            {({ handleSubmit, form }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.fieldWrapper}>
                        <Field
                            name='newMessageBody'
                            component={Textarea}
                            placeholder={t('dialogsPage.textArea')}
                            onKeyDown={(e) => sendIfKeyPress(e, form)}
                            onSelect={handleSelect}
                            validate={(value) => required(value) || maxLength100(value)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPicker(!showPicker)}
                            className={styles.emojiButton}
                        >
                            <FontAwesomeIcon icon={faFaceSmileBeam} />
                        </button>
                        {showPicker && (
                            <div className={styles.pickerContainer} ref={pickerRef} >
                                <Picker data={data} onEmojiSelect={(e) => handleEmojiSelect(e, form)}
                                    previewPosition="none" navPosition='bottom' emojiButtonSize='24'
                                    emojiSize='16' locale={currentLang} exceptEmojis={['relaxed']}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button type="submit" title={t('dialogsPage.sendButton')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                        <MessageBubbleTriangle triangleClassName={styles.buttonTriangle} />
                    </div>
                </form>
            )}
        </Form>
    );
};

export default AddMessageForm;
