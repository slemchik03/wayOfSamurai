import classes from './UserInfo.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

export const UserInfo = props => {
    return (
        <NavLink to={'/users/userId=' + props.id}>
            <div className={classes.card}>
                <img src={`${props.photoSrc}`} alt=""/>
                <h4>{props.firstName + props.lastName}</h4>
                <small>{props.email}</small>
                <button>{props.subscribe ? 'Відписатися' : 'Підписатися'}</button>
            </div>
        </NavLink>
    )
}