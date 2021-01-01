import React from 'react'
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.navbar}>
                <div className={` ${classes.item} ${classes.active}`}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item } >
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item} >
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </div>
            <div className={classes.friends} >
                <h2 className={classes.header}>Friends</h2>
                <div className={classes.friendsWrap}>
                    <div className={classes.friend}>
                        <img className={classes.img} src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.JPG' />
                        <h3>Vadim</h3>
                    </div>
                    <div className={classes.friend}>
                        <img className={classes.img} src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.JPG' />
                        <h3>Julia</h3>
                    </div>
                    <div className={classes.friend}>
                        <img className={classes.img} src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.JPG' />
                        <h3>Sasha</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;