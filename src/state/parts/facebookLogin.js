const initialState = {
    user: null,

}

export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'FACEBOOK_LOGIN':
            return {
                ...state,
                user: 'japczko'

            }

        case 'FACEBOOK_LOGOUT':
            return {
                ...state,
                user: action
            }
        default:
            return state
    }
}