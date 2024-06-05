import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, unfollow } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

class UsersContainer extends React.Component {

    componentDidMount() {
        document.title = this.props.t('pageTitles.users')

        this.props.getUsers(this.props.pageSize, this.props.currentPageNumber)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }

    render() {
        const { getUsers, isFetching, ...usersProps } = this.props
        return <>
            {isFetching ? <Preloader /> : null}
            <Users {...usersProps} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPageNumber: state.usersPage.currentPageNumber,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
});

export default compose(
    connect(mapStateToProps, { follow, unfollow, getUsers }),
    withAuthRedirect,
    withTranslation()
)(UsersContainer);