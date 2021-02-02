import React, {FC} from "react";
import styles from "./Users.module.css";
import {UsersPagination} from "./UsersPagination";
import {UsersList} from "./UsersList";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";

const Users: FC = () => {
    return (
        <div className={styles.wrap}>
         {/*   <h2>Cosmonauts</h2>*/}
            <UsersList/>
            <UsersPagination/>


        </div>
    )
}

export default compose(
    withAuthRedirect
)(Users);
