import React from 'react';
import styles from './Users.module.css'
import User from './User/User';

const Users = (props) => {
    const t = props.t

    const renderPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case 0: //pages that hide in "..."
                return <span className={styles.ellipsis}>...</span>
            case props.currentPageNumber:
                return <span className={styles.selectedPage}>{pageNumber}</span>
            default:
                return <span className={styles.pages} onClick={(e) => props.onPageChanged(pageNumber)}>{pageNumber}</span>
        }
    }

    const renderPagesControl = () => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let currentPageNumber = props.currentPageNumber
        let pages = [];
        if (currentPageNumber < 5) {
            for (let i = 1; i <= 5; i++) {
                pages.push({
                    number: i,
                })
            }
            pages.push(
                { number: 0, },
                { number: pagesCount, }
            )
        }
        else if (currentPageNumber > pagesCount - 3) {
            pages.push(
                { number: 1, },
                { number: 0, }
            )
            for (let i = pagesCount - 4; i <= pagesCount; i++) {
                pages.push({
                    number: i,
                })
            }
        }
        else {
            pages.push(
                { number: 1, },
                { number: 0, }
            )
            for (let i = currentPageNumber - 1; i <= currentPageNumber + 1; i++) {
                pages.push({
                    number: i,
                })
            }
            pages.push(
                { number: 0, },
                { number: pagesCount, }
            )
        }
        return pages.map(p => renderPageNumber(p.number))

    }

    let renderedPageControl = renderPagesControl();

    let usersElements = props.users.map(u =>
        <User
            key={u.id}
            id={u.id}
            photos={u.photos}
            followed={u.followed}
            name={u.name}
            status={u.status}
            follow={props.follow}
            unfollow={props.unfollow}
            t={t}
            followingInProgress={props.followingInProgress}
            toggleFollowingProgress={props.toggleFollowingProgress}
        />)

    return (
        <div className={styles.findUsers}>
            <h3>{t('usersPage.users')}</h3>
            <div>
                {renderedPageControl}
            </div>
            <div className={styles.users}>
                {usersElements}
            </div>
            <div>
                {renderedPageControl}
            </div>
        </div>
    )

}

export default Users;