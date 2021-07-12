import classes from './Navbar.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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
                    <NavLink to={'/music'} activeStyle={{color: 'gold'}}>Music</NavLink>
                </li>
                <li>
                    <strong>Friends online:</strong>
                    <div className={classes.friends}>
                        {props.friends.map(v => <NavLink to={`/dialogs/${v.name}`}><p>{v.name}</p></NavLink>)}
                    </div>
                </li>
                <li>
                    <NavLink to={'/other'} activeStyle={{color: 'gold'}}>Other</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar