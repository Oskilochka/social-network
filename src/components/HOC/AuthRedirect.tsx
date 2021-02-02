import React from 'react'
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../redux/selectors/auth-selectors";

export const withAuthRedirect = (Component: any) => (props: any) => {
    const isAuth = useSelector(getIsAuth);
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...props} />
}