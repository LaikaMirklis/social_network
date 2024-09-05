import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { sendMessage } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const dialogsPage = useSelector((state) => state.dialogsPage);

    const handleSendMessage = (newMessageBody) => {
        dispatch(sendMessage(newMessageBody))
    }

    return (
        <Dialogs
            t={t}
            i18n={i18n}
            dialogsPage={dialogsPage}
            sendMessage={handleSendMessage}
        />
    )
};

export default DialogsContainer;