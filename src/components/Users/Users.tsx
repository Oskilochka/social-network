import React, {FunctionComponent} from "react";
import styles from "./Users.module.css";
import {UsersPagination} from "./UsersPagination";
import {UsersList} from "./UsersList";

export const Users: FunctionComponent = () => {
    return (
        <div className={styles.wrap}>
            <UsersPagination/>
            <UsersList/>
        </div>
    )
}
