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

    const changeMessage = (e) => props.changeArea(e.target.value)

    const sendMessage = () => props.sendMessage(props.id)
    console.log(props)
    return (
        <div className={classes.message}>
            <div>
                {messages}
            </div>

            <div>
                <textarea onChange={changeMessage} value={props.message} name="message" id="2" cols="14"
                          rows="4">2121</textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>

    )
}


export default Message