import React from 'react';
import styles from './Users.module.css'
import User from './User/User';

const Users = (props) => {
    const { currentPageNumber, pageSize, totalUsersCount, users, onPageChanged, ...userProps } = props

    document.title = props.t('pageTitles.users')

    const renderPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case 0: //pages that hide in "..."
                return <span className={styles.ellipsis}>...</span>
            case currentPageNumber:
                return <span className={styles.selectedPage}>{pageNumber}</span>
            default:
                return <span className={styles.pages} onClick={(e) => onPageChanged(pageNumber)}>{pageNumber}</span>
        }
    }

    const renderPagesControl = () => {
        let pagesCount = Math.ceil(totalUsersCount / pageSize);
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

    let usersElements = users.map(user =>
        <User
            key={user.id}
            {...user}
            {...userProps}
        />)

    return (
        <div className={styles.usersPage}>
            <h3>{props.t('usersPage.users')}</h3>
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