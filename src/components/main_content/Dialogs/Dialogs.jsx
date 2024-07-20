import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import AddMessageForm from './AddMessageForm';
import { sendMessage } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { useTranslation } from 'react-i18next';

const Dialogs = ({ dialogsPage, ...formProps }) => {
    const { t } = useTranslation();

    document.title = t('pageTitles.dialogs')

    let dialogsElements = dialogsPage.dialogs.map(dialog =>
        <DialogItem
            key={dialog.id}
            {...dialog}
            t={t}
        />)

    let messageElements = dialogsPage.messages.map(message => {
        let { id, ...rest } = message
        return <Message
            key={id}
            {...rest}
        />
    })

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <AddMessageForm {...formProps} t={t} />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage })

export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect,
)(Dialogs);