import styles from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    debugger
    return (
        <div className={styles.profileInfo}>
            <div className={styles.column}>
                <div className={styles.userPhotos}>
                    <img src={props.photos.large} alt={props.fullName} />
                </div>
                <h2>{props.fullName}</h2>
                <p>{props.aboutMe}</p>
            </div>
            <div className={styles.column}>
                {props.lookingForAJob && (
                    <div>
                        <p>Looking for a job: Yes</p>
                        <p>Job Description: {props.lookingForAJobDescription}</p>
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
