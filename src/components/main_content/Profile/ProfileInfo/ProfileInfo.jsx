import styles from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src="https://cdnb.artstation.com/p/assets/images/images/046/499/745/large/l-y-hyun-fantasy-forest-secret-village.jpg?1645264603"
                className={styles.background}
                alt="background"
            />
            <div className={styles.descriptionBlock}>
                <img src='https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg' className={styles.avatar} alt="avatar" />
                <p>ava + description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
