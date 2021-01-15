import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunk, setCurrentPage, setFollowingProgress, unfollowThunk
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";

class UsersApiRequest extends React.Component {

    //for side effects, run once
    componentDidMount() {
       this.props.getUsersThunk(this.props.page, this.props.count);
    }

    //render new list of users when number of page is change
    onPageChange = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.count);
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   count={this.props.count}
                   page={this.props.page}
                   users={this.props.users}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   onPageChange={this.onPageChange}
                   followingProgress={this.props.followingProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUsersThunk, followThunk, unfollowThunk, setCurrentPage, setFollowingProgress})
)(UsersApiRequest);