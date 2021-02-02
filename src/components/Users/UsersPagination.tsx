import React, {FC, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCount, getPage, getTotalUserCount} from "../../redux/selectors/user-selectors";
import {getUsersThunk} from "../../redux/users-reducer";
import styles from "./Users.module.css";

export const UsersPagination: FC = () => {
    const totalUsersCount = useSelector(getTotalUserCount)
    const count = useSelector(getCount)
    const page = useSelector(getPage)

    const dispatch = useDispatch()

    const onPageChange = (pageNumber: number) => {
        dispatch(getUsersThunk(pageNumber, count))
    }

    useEffect(() => {
        dispatch(getUsersThunk(page, count))
    }, [])

    /* let pagesCount = Math.ceil(props.totalUsersCount / props.count);*/
    let pages = [];
    for (let i = 136; i <= 150; i++) {
        pages.push(i);
    }

    return (

        <div className={styles.pagination}>
            {pages.map(p => {
                return <button onClick={() => {
                    onPageChange(p)
                }} className={styles.changePageBtn + ' ' + (page === p && styles.selected)}> {p} </button>
            })}
        </div>
    )
}

