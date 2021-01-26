import React from "react";
import styles from "./Users.module.css";
import {UsersPagination} from "./UsersPagination";
import {UsersList} from "./UsersList";

const UsersComponent = () => {
    return (
        <div className={styles.wrap}>
            <UsersPagination/>
            <UsersList/>
        </div>
    )
}

export default UsersComponent;