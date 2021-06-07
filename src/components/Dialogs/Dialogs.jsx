import classes from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

const Dialogs = props => {

    // props.users
    const user = [
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Dimych'}
    ]

    const users = user.map((value, index) => {
       return <DialogItem id={value.id} name={value.name} />
    })

    const message = [
        {id: 1, text: 'Vadim'},
        {id: 2, text: 'Dimych'}
    ]

    const messages = message.map((value, index) => {
        return <Message text={value.text} />
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {users}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs