import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    debugger;

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13863;
        }
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <div>
                <Profile userProfile={this.props.userProfile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileThunk}),
        withRouter,
        withAuthRedirect)
    (ProfileContainer)