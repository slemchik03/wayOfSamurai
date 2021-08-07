import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    friends: state.dialogs.friends,
    message: state.dialogs.currentMessage
})

const mapDispatchToProps = dispatch => ({
    changeArea(text) {
        dispatch({
            type: 'CHANGE-CURRENT-MESSAGE', data: {
                value: text
            }
        })
    },
    sendMessage(id) {
        dispatch({
            type: 'SEND-CURRENT-MESSAGE', data: {
                id
            }
        })
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer