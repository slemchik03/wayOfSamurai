import classes from './Dialogs.module.css'
import React from "react";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = props => {

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {
                        props.friends.map((value) => {
                            return <DialogItem name={value.name}/>
                        })
                    }
                </div>
                <div className={classes.messages}>

                    <Messages message={props.message}/>

                </div>
            </div>
    )
}

export default Dialogs