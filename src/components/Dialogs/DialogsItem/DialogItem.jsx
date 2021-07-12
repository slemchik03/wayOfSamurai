import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.name}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem