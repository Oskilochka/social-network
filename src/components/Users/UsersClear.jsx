import React from "react";
import {useSelector} from "react-redux";
import {getUsers} from "../../redux/user-selectors";


const Users = () => {
    let users = useSelector(getUsers)

    return (
        <div>
            fmdsfsdlkfm
        </div>
    )
}