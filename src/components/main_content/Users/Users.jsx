import styles from './Users.module.css'
import User from './User/User';

const Users = (props) => {
    const t = props.t;

    let noImage = "https://images.emojiterra.com/openmoji/v14.0/512px/1f9da.png";

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: noImage,
                followed: true,
                fullName: "Dmitry K",
                status: "I am looking for a Job right now..",
                location: {
                    country: "Belarus",
                    city: "Minsk",
                },
            },
            {
                id: 2,
                photoUrl: noImage,
                followed: false,
                fullName: "David",
                status: "I like football!!!",
                location: {
                    country: "Ukraine",
                    city: "Kiev",
                },
            },
            {
                id: 3,
                photoUrl: noImage,
                followed: true,
                fullName: "Mark",
                status: "I am so pretty",
                location: {
                    country: "Belarus",
                    city: "Minsk",
                },
            },
            {
                id: 4,
                photoUrl: noImage,
                followed: false,
                fullName: "Polly",
                status: "I am looking for a Job right now..",
                location: {
                    country: "United States",
                    city: "Philadelphia",
                },
            },
            {
                id: 5,
                photoUrl: noImage,
                followed: false,
                fullName: "Rea",
                status: "I am so pretty",
                location: {
                    country: "Belarus",
                    city: "Minsk",
                },
            },
            {
                id: 6,
                photoUrl: noImage,
                followed: true,
                fullName: "Nate",
                status: "I am free to help you to create good Video Production",
                location: {
                    country: "Ukraine",
                    city: "Kiev",
                },
            },
        ])
    }

    let usersElements = props.users.map(u =>
        <User
            key={u.id}
            id={u.id}
            photoUrl={u.photoUrl}
            followed={u.followed}
            fullName={u.fullName}
            status={u.status}
            location={u.location}
            follow={props.follow}
            unfollow={props.unfollow}
            t={t}
        />)

    return (
        <div className={styles.findUsers}>
            <h3>{t('usersPage.users')}</h3>
            <div className={styles.users}>
                {usersElements}
            </div>
            <div className={styles.showMoreButtonWrapper}>
                <button className={styles.showMoreButton}>{t('usersPage.showMoreButton')}</button>
            </div>
        </div>
    )
}

export default Users;