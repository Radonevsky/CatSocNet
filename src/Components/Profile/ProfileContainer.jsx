import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfileInfo, getStatus, getUserProfile, saveNewAva, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authoraizedUserId;
            if (!this.props.authoraizedUserId) {
                this.props.history.push('login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}
                     changeProfileInfo={this.props.changeProfileInfo} userId={this.props.authoraizedUserId}/>
        )

    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authoraizedUserId: state.auth.userId
    }
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile, getStatus, updateStatus, saveNewAva,
        changeProfileInfo
    }),
    withRouter, withAuthRedirect)(ProfileContainer)
