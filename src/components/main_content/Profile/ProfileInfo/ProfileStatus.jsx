import styles from "./ProfileStatus.module.css"
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        characterCount: this.props.status ? this.props.status.length : null,
        maxLength: 300
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deactivateEditMode = (e) => {
        let statusBody = e.target.value;
        if (this.props.status !== e.target.value) this.props.changeUserStatus(statusBody);
        this.setState({ editMode: false })
    }

    getDisplayText = () => {
        if (!this.props.status && this.props.isAuthUserProfile) return this.props.t('profilePage.statusPlaceholder')
        else return this.props.status
    }

    changeLocalStatus = (e) => {
        let statusBody = e.target.value;
        this.setState({ status: statusBody });
        this.trackCharacterInput(statusBody)
    }

    trackCharacterInput = (statusBody) => {
        if (statusBody) {
            let inputLength = statusBody.length
            this.setState({ characterCount: inputLength });
        }
    }

    moveCaretAtEnd(e) {
        var temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={styles.statusBlock}>
                        <span onDoubleClick={this.props.isAuthUserProfile ? this.activateEditMode : null}>{this.getDisplayText()} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.inputBlock}>
                        <div className={styles.statusBlock}>
                            <textarea type="text"
                                maxLength={this.state.maxLength}
                                onBlur={this.deactivateEditMode.bind(this)}
                                autoFocus={true}
                                value={this.state.status}
                                onChange={this.changeLocalStatus}
                                onFocus={this.moveCaretAtEnd}
                                placeholder={this.props.t('profilePage.statusPlaceholder')}
                            />
                        </div>
                        <div className={styles.inputCounter}> {`${this.state.characterCount}/${this.state.maxLength}`}</div>
                    </div>
                }
            </>
        );
    }
};

export default ProfileStatus;
