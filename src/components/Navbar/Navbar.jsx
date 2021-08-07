import classes from './Navbar.module.css'
import {
    NavLink
} from "react-router-dom";
import React from "react";


const Navbar = props => {
    return (
        <div className={classes.nav}>
            <ul>
                <li>
                    <NavLink to={'/profile'} activeStyle={{color: 'gold'}}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/dialogs'} activeStyle={{color: 'gold'}}>Message</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'} activeStyle={{color: 'gold'}}>Users</NavLink>
                </li>
                <li>
                    <NavLink to={'/music'} activeStyle={{color: 'gold'}}>Music</NavLink>
                </li>
                <li>
                    <NavLink to={'/other'} activeStyle={{color: 'gold'}}>Other</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar