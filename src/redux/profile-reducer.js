const initialState = {
    myPosts: {
        posts: [],
        _postMessage: ''
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


export const profileReducer = (state = initialState, action) => {
    const data = action.data
    const stateCopy = {
        myPosts: {
            ...state.myPosts
        }
    }
    stateCopy.myPosts.posts = [...state.myPosts.posts]

    switch (action.type) {
        case 'ADD-POST':
            stateCopy.myPosts.posts.unshift({
                id: stateCopy.myPosts.posts.length,
                text: stateCopy.myPosts._postMessage,
                likes: 0
            })
            stateCopy.myPosts._postMessage = ''
            return stateCopy
        case 'CHANGE-POST-VALUE':
            stateCopy.myPosts._postMessage = data.message
            return stateCopy
        default:
            return state
    }
}