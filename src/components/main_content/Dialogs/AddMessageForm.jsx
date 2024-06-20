import React, { useEffect, useRef, useState } from 'react';
import { Field, reduxForm, change, submit } from 'redux-form';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
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

let AddMessageForm = (props) => {
    const { handleSubmit, dispatch, t, formValues, i18n } = props;
    const textareaRef = useRef(null);
    const pickerRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [showPicker, setShowPicker] = useState(false);
    const currentLang = i18n.language.slice(0, -1);

    const sendIfKeyPress = (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            dispatch(submit('dialogAddMessageForm'));
            // десь вліпити пояснення як надсилати повідомлення за допомогою клавіш Enter+Ctrl
        }
    };

    const handleEmojiSelect = (emoji) => {
        const currentMessageBody = formValues || '';
        const position = cursorPosition;
        const newMessageBody = currentMessageBody.slice(0, position) + emoji.native + currentMessageBody.slice(position);
        dispatch(change('dialogAddMessageForm', 'newMessageBody', newMessageBody));
        setCursorPosition(prevPosition => prevPosition + emoji.native.length)
    };

    const handleSelect = (event) => {
        setCursorPosition(event.target.selectionStart);
    };

    const handleTextareaChange = (event) => {
        setCursorPosition(textareaRef.current.selectionStart);
    };

    const handleClickOutside = (event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        if (showPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPicker]);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldWrapper}>
                <Field
                    name='newMessageBody'
                    component={Textarea}
                    placeholder={t('dialogsPage.textArea')}
                    onKeyDown={sendIfKeyPress}
                    onSelect={handleSelect}
                    ref={textareaRef}
                    onChange={handleTextareaChange}
                    validate={[required, maxLength100]}
                />

                <button
                    type="button"
                    // title={t('dialogsPage.emojiButton')}
                    onClick={() => setShowPicker(!showPicker)}
                    className={styles.emojiButton}
                >
                    <FontAwesomeIcon icon={faFaceSmileBeam} />
                </button>
                {showPicker && (
                    <div className={styles.pickerContainer} ref={pickerRef} >
                        <Picker data={data} onEmojiSelect={handleEmojiSelect}
                            previewPosition="none" navPosition='bottom'
                            emojiButtonSize='24'
                            emojiSize='16'
                            locale={currentLang}
                            exceptEmojis={['relaxed']}
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
    );
};

const selector = formValueSelector('dialogAddMessageForm');

const mapStateToProps = (state) => {
    return {
        formValues: selector(state, 'newMessageBody')
    };
};

export default connect(mapStateToProps)(reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm));
