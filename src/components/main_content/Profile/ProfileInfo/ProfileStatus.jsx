import Preloader from "../../../common/Preloader/Preloader";
import styles from "./ProfileStatus.module.css"
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        characterCount: this.props.status ? this.props.status.length : 0,
        maxLength: 300
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deactivateEditMode = (e) => {
        let inputValueTrimmed = e.target.value.trim();
        if (this.props.status.trim() !== inputValueTrimmed)
            this.props.updateUserStatus(inputValueTrimmed);

        this.setState({
            editMode: false,
            status: inputValueTrimmed,
            characterCount: inputValueTrimmed.length
        })
    }

    getDisplayText = () => {
        if (!this.props.status && this.props.isAuthUserProfile)
            return this.props.t('profilePage.statusPlaceholder')
        else
            return this.state.status
    }

    onStatusChange = (e) => {
        let inputValue = e.target.value;
        this.setState({ status: inputValue });
        this.trackCharacterInput(inputValue);
    }

    trackCharacterInput = (inputValue) => {
        let inputLength = inputValue ? inputValue.length : 0;
        this.setState({ characterCount: inputLength });
    }

    moveCaretAtEnd(e) {
        var temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
    }

    render() {
        if (this.props.isFetching)
            return <div className={styles.statusBlock}>
                <Preloader />
            </div>

        return (
            <div className={styles.statusBlock}>
                {!this.state.editMode &&
                    <span onDoubleClick={this.props.isAuthUserProfile ? this.activateEditMode : null}>
                        {this.getDisplayText()} </span>
                }
                {this.state.editMode &&
                    <>
                        <textarea type="text"
                            maxLength={this.state.maxLength}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            onFocus={this.moveCaretAtEnd}
                            placeholder={this.props.t('profilePage.statusPlaceholder')}
                        />
                        <div className={styles.inputCounter}>
                            {`${this.state.characterCount}/${this.state.maxLength}`}
                        </div>
                    </>
                }
            </div>
        );
    }
};

export default ProfileStatus;
