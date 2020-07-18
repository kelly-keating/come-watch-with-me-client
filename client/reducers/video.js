const initialState = 'videos/216.m4v'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VIDEO':
            return action.file
        default: 
            return state
    }
}

export default reducer