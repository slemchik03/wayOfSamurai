const initialState = {
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
                messages: []
            }

        ],
        currentMessage: '',
}


export const dialogsReducer = (state = initialState, action) => {
    const data = action.data
    const stateCopy = {...state, friends: [...state.friends].map(v => {
            return {...v, messages: [...v.messages].map(v => {
                    return [...v]
                })}
        })}
    switch (action.type) {
        case 'CHANGE-CURRENT-MESSAGE':
            stateCopy.currentMessage = data.value
            return stateCopy
        case 'SEND-CURRENT-MESSAGE':
            const id = data.id
            let text = stateCopy.currentMessage
            stateCopy.friends.filter(value => {
                if (value.id === id) {
                    value.messages.push([1, text])
                    stateCopy.currentMessage = ''
                }
            })
            return stateCopy
        default:
            return state
    }

}