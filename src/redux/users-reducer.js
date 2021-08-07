const initialState = {
    users: [],
    totalUsersCount: 100,
    pageSize: 50,
    currentPage: 1,
    progressBarWidth: 0,
    isLoading: false
}

export const usersReducer = (state = initialState, action) => {
    const stateCopy = {...state, users: [...state.users]}

    switch (action.type) {
        case 'SET-USER':
            stateCopy.users = [...action.data]
            return stateCopy
        case 'SET-CURRENT-PAGE':
            stateCopy.currentPage = action.data
            return stateCopy
        case 'SET-IS-LOADING':
            stateCopy.isLoading = action.data
            return stateCopy
        default:
            return state
    }

}

export const setUser = data => ({type: 'SET-USER', data})
export const setCurrentPage = data => ({type: 'SET-CURRENT-PAGE', data})
export const setLoading = data => ({type: 'SET-IS-LOADING', data})

