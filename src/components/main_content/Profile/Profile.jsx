import styles from './Profile.module.css'
import defaultPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileInfo/ProfileStatus';

const Profile = (props) => {
    const { profile, getUserProfile, getUserStatus, ...profileStatusProps } = props;
    const { photos, fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = props.profile
    const t = props.t;

    document.title = props.t('pageTitles.profile');

    return (
        <div className={styles.profilePage}>
            <div className={styles.profileInfo}>

                <div className={styles.leftBlock}>
                    <img src={photos.large != null
                        ? photos.large
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt={fullName} />

                    <h2 className={styles.fullName}>{fullName}</h2>

                    <ProfileStatus {...profileStatusProps} />
                </div>

                <div className={styles.rightBlock}>
                    {aboutMe && <p className={styles.aboutMe}>
                        <strong>{t('profilePage.aboutMe')}</strong>{aboutMe}</p>}

                    {lookingForAJob && (
                        <div className={styles.jobInfo}>
                            <p><strong>{t('profilePage.jobLooking')}</strong></p>
                            <p><strong> {t('profilePage.jobDescription')}</strong>{lookingForAJobDescription}</p>
                        </div>
                    )}

                    {Object.values(contacts).some((value) => value) &&
                        (<div className={styles.contacts}>
                            <h3>{t('profilePage.contacts')}</h3>
                            <ul>
                                {Object.entries(contacts).map(([key, value]) => (
                                    value && (
                                        <li key={key}>
                                            <strong>{key}:</strong>{' '}
                                            <a href={value}>{value}</a>
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
