
export function play () {
    return {
        type: 'PLAY'
    }
}

export function pause () {
    return {
        type: 'PAUSE'
    }
}

export function setVideo (file) {
    return {
        type: 'SET_VIDEO',
        file
    }
}
