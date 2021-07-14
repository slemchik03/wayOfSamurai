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
        this._addPost = () => {
            if (this.getPostMessage.length <= 200 && this.getPostMessage.length >= 5) {
                this.getMyPosts.posts.unshift({
                    id: this.getMyPosts.posts.length,
                    text: this.getPostMessage,
                    likes: 1332
                })
                this._setPostMessage = ''
                this._render()
            }
        }
        this._changePostValue = data => {
            this._setPostMessage = data.message
            this._render()
        }

        this._changeCurrentMessage = data => {
            this.getDialogs.currentMessage = data.value
            console.log(this.getDialogs.currentMessage)
            this._render()
        }
        this._sendCurrentMessage = data => {
            const id = data.id
            let text = this.getDialogs.currentMessage
            this.getDialogs.friends.filter(value => {
                if (value.id === id) {
                    value.messages.push([1, text])
                    this.getDialogs.currentMessage = ''
                    this._render()
                }
            })
        }
        this.dispatch = (action) => { // action === {type: '...', ...otherProperty}
            if (action.type === 'ADD-POST') {
                this._addPost()
            } else if (action.type === 'CHANGE-POST-VALUE') {
                this._changePostValue(action.data)
            } else if (action.type === 'CHANGE-CURRENT-MESSAGE') {
                this._changeCurrentMessage(action.data)
            } else if (action.type === 'SEND-CURRENT-MESSAGE') {
                this._sendCurrentMessage(action.data)
            }
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

export const addPostCreateAction = () => {
    return {
        type: 'ADD-POST'
    }
}

export const changeAreaCreateAction = (text) => {
    return {
        type: 'CHANGE-POST-VALUE',
        data: {
            message: text
        }
    }
}

export default Store