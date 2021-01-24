import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {getUserProfileStatus, getUserProfileThunk, updateUserProfileStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserProfileStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile userProfile={this.props.userProfile}
                         status={this.props.status}
                         updateStatus={this.props.updateUserProfileStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getUserProfileStatus, updateUserProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)