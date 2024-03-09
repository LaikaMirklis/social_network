import { sendMessage, updateNewMessageBody } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from 'redux'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { withTranslation } from "react-i18next";

const DialogsContainer = (props) => {
    document.title = props.t('pageTitles.dialogs')

    return <Dialogs {...props} />;
};

let mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage })

export default compose(
    connect(mapStateToProps, { updateNewMessageBody, sendMessage }),
    withAuthRedirect,
    withTranslation(),
)(DialogsContainer);