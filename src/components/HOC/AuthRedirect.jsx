import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectC extends React.Component {
        render () {
            if ( !this.props.isAuth ) return <Redirect to={ '/login' }/>
            return <Component {...this.props} />
        }
    }

    let authRedirectComponent = connect(mapStateToPropsRedirect)(RedirectC);

    return authRedirectComponent;
}