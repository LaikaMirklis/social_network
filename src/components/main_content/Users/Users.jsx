import React, { useMemo } from 'react';
import styles from './Users.module.css'
import User from './User/User';
import { useTranslation } from 'react-i18next';
import Pagination from './Pagination/Pagination';

const Users = ({ currentPageNumber, pageSize, totalUsersCount, users, onPageChanged, ...userProps }) => {
    const { t } = useTranslation();
    const paginationProps = useMemo(() => ({
        currentPageNumber,
        pageSize,
        totalUsersCount,
        onPageChanged,
    }), [currentPageNumber, pageSize, totalUsersCount, onPageChanged]);

    document.title = t('pageTitles.users')

    let usersElements = users.map(user =>
        <User
            key={user.id}
            user={user}
            {...userProps}
            t={t}
        />)

    return (
        <div className={styles.usersPage}>
            <h3>{t('usersPage.users')}</h3>
            <Pagination {...paginationProps} />
            <div className={styles.users}>
                {usersElements}
            </div>
            <Pagination {...paginationProps} />
        </div>
    )

}

export default Users;