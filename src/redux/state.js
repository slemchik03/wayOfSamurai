class Store {
    constructor() {
        this._state = {
            _dialogs: {
                friends: [
                    {id: 1, name: 'Vadim'},
                    {id: 2, name: 'Dimych'}
                ],
                messages: [
                    {from: 'Vadim', message: 'Today i learn React'},
                    {from: 'Dimych', message: 'Today i learn TypeScript'}
                ]
            },
            _myPosts: {
                posts: [],
                _postMessage: ''
            }
        }
        this._render = null

        this.dispatch = (action) => { // action === {type: '...', ...otherProperty}
            if (action.type === 'ADD-POST') {
                if (this.getPostMessage.length <= 200 && this.getPostMessage.length >= 5) {
                    this.getMyPosts.posts.unshift({
                        id: this.getMyPosts.posts.length,
                        text: this.getPostMessage,
                        likes: 1332
                    })
                    this._setPostMessage = ''
                    this._render()
                }
            } else if (action.type === 'CHANGE-POST-VALUE'){
                this._setPostMessage = action.message
                this._render()
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

debugger

export default Store