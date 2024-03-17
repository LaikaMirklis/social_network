import styles from "./Profile.module.css"
import defaultPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileInfo/ProfileStatus";

const Profile = (props) => {
    const t = props.t;

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileInfo}>

                <div className={styles.leftBlock}>
                    <img src={props.photos.large != null
                        ? props.photos.large
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt={props.fullName} />

                    <h2 className={styles.fullName}>{props.fullName}</h2>

                    <ProfileStatus status={props.status} isAuthUserProfile={props.isAuthUserProfile}
                        changeUserStatus={props.changeUserStatus} t={props.t} />
                </div>

                <div className={styles.rightBlock}>
                    {props.aboutMe && <p className={styles.aboutMe}>
                        <strong>{t('profilePage.aboutMe')}</strong> {props.aboutMe}</p>}

                    {props.lookingForAJob && (
                        <div className={styles.jobInfo}>
                            <p><strong>{t('profilePage.jobLooking')}</strong> </p>
                            <p><strong> {t('profilePage.jobDescription')}</strong>{props.lookingForAJobDescription}</p>
                        </div>
                    )}

                    {Object.values(props.contacts).some((value) => value) &&
                        (<div className={styles.contacts}>
                            <h3>{t('profilePage.contacts')}</h3>
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
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
