import styles from "./Profile.module.css"
import defaultPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileInfo/ProfileStatus";

const Profile = (props) => {
    const t = props.t;
    const { profile, getUserProfile, getUserStatus, ...profileStatusProps } = props;

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileInfo}>

                <div className={styles.leftBlock}>
                    <img src={props.profile.photos.large != null
                        ? props.profile.photos.large
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt={props.profile.fullName} />

                    <h2 className={styles.fullName}>{props.profile.fullName}</h2>

                    <ProfileStatus {...profileStatusProps} />
                </div>

                <div className={styles.rightBlock}>
                    {props.profile.aboutMe && <p className={styles.aboutMe}>
                        <strong>{t('profilePage.aboutMe')}</strong> {props.profile.aboutMe}</p>}

                    {props.profile.lookingForAJob && (
                        <div className={styles.jobInfo}>
                            <p><strong>{t('profilePage.jobLooking')}</strong> </p>
                            <p><strong> {t('profilePage.jobDescription')}</strong>{props.profile.lookingForAJobDescription}</p>
                        </div>
                    )}

                    {Object.values(props.profile.contacts).some((value) => value) &&
                        (<div className={styles.contacts}>
                            <h3>{t('profilePage.contacts')}</h3>
                            <ul>
                                {Object.entries(props.profile.contacts).map(([key, value]) => (
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
