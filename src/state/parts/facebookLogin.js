const initialState = {
    user: null,

}

export default (state = initialState, action) => {
    setTimeout(function () {
        console.log(action.result)
    }, 10900)
    switch(action.type) {
        case 'FACEBOOK__LOGIN':
            return {

                ...state,
                user: action.result

            }

        case 'FACEBOOK_LOGOUT':
            return {
                ...state,
                user: action.result
            }
        default:
            return state
    }
}