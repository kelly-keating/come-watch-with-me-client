const initialState = false

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAY':
            return true
        case 'PAUSE':
            return false
        default: 
            return state
    }
}

export default reducer