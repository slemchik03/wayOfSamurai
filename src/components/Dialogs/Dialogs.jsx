import classes from './Dialogs.module.css'
import React from "react";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {Route} from "react-router-dom";

const Dialogs = props => {
    const friends = props.friends

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    friends.map((value) => {
                        return <DialogItem name={value.name} id={value.id}/>
                    })
                }
            </div>
            <div className={classes.messages}>

                {
                    friends.map(value => {
                        return <Route path={`/dialogs/${value.id}`}
                                      render={() => <Message message={props.currentMessage} dispatch={props.dispatch} value={value}/>}/>
                    })
                }

            </div>
        </div>
    )
}

export default Dialogs