import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

class Store {
    constructor() {
        this._state = {
            _dialogs: {
                friends: [
                    {
                        id: 1,
                        name: 'Vadim',
                        lastName: 'Savin',
                        messages: [
                            [0, 'Hi how are u?'],
                            [1, 'Hi i`m nice what about u?']
                        ]
                    },
                    {
                        id: 2,
                        name: 'Dimych',
                        lastName: 'IT-kamasutra',
                        messages: [

                        ]
                    }

                ],
                currentMessage: '',
            },
            _myPosts: {
                posts: [],
                _postMessage: ''
            }
        }
        this._render = null

        this.dispatch = (action) => { // action === {type: '...', ...otherProperty}
            this._state._dialogs = dialogsReducer(this.getDialogs, action)
            this._state._myPosts = profileReducer(this.getMyPosts, action)
            this._render()
        }
    }
    get getState() {
        return this._state
    }
    get getDialogs() {
        return this._state._dialogs
    }
    get getMyPosts() {
        return this._state._myPosts
    }
    get getPostMessage() {
        return this.getMyPosts._postMessage
    }
    set setRender(callBack) {
        this._render = callBack
    }
    set _setPostMessage(value) {
        this.getMyPosts._postMessage = value
    }

}



export default Store