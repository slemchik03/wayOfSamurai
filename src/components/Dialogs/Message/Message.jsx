import classes from "../Dialogs.module.css";
import React from "react";


const Message = props => {
    const hasMessage = props.value.messages.length >= 1
    const messages = hasMessage ? props.value.messages.map(value => {
        if (value[0]) {
            return <p style={{color: 'green'}}>{'Ви: ' + value[1]}</p>
        }
        return <p style={{color: 'red'}}>{`${props.value.name}: ` + value[1]}</p>
    }) : `Це початок вашої легендарної бесіди з ${props.value.name}`

    const changeArea = e => props.dispatch({
        type: 'CHANGE-CURRENT-MESSAGE', data: {
            value: e.target.value
        }
    })

    const sendMessage = () => props.dispatch({
        type: 'SEND-CURRENT-MESSAGE', data: {
            id: props.value.id
        }
    })
    return (
        <div className={classes.message}>
            <div>
                {messages}
            </div>

            <div>
                <textarea onChange={changeArea} value={props.message} name="message" id="2" cols="14"
                          rows="4">2121</textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>

    )
}


export default Message