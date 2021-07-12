import classes from "../Dialogs.module.css";
import React from "react";
import {Route} from "react-router-dom";

const Message = props => {
    return (
        <div className={classes.message}>
            <p>{props.text}</p>
            <div>
                <textarea name="message" id="2" cols="14" rows="4">Txt</textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>

    )
}

const Messages = (props) => {
    return (
        props.message.map(value => {
            return (
                <Route path={`/dialogs/${value.from}`} render={() => <Message text={value.message}/>}/>
            )
        })
    )
}

export default Messages