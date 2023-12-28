import styles from "./ProfileInfo.module.css"
import userPhoto from '../../../../assets/images/user.png'

const ProfileInfo = (props) => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.column1}>
                <div className={styles.userPhoto}>
                    <img src={props.photos.large != null
                        ? props.photos.large
                        : userPhoto}
                        className={props.photos.large && styles.realUserPhoto}
                        alt={props.fullName} />
                </div>
                <h2 className={styles.fullName}>{props.fullName}</h2>
                <p className={styles.aboutMe}>{props.aboutMe}</p>
            </div>
            <div className={styles.column2}>
                {props.lookingForAJob && (
                    <div className={styles.jobInfo}>
                        <p><strong>Looking for a job:</strong> Yes</p>
                        <p><strong>Job Description: </strong>{props.lookingForAJobDescription}</p>
                    </div>
                )}
                <div className={styles.contacts}>
                    <h3>Contacts:</h3>
                    <ul>
                        {Object.entries(props.contacts).map(([key, value]) => (
                            value && (
                                <li key={key}>
                                    <strong>{key}:</strong>{' '}
                                    <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
