// import productsSearching from './parts/productsSearching'
import facebookLogin from './parts/facebookLogin'



export default (state = {}, action) => {
    return {

        facebookLogin: facebookLogin(state.facebookLogin, action)


    }
}
