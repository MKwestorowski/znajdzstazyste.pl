import React from 'react';
import { connect } from 'react-redux'

import { provider, auth} from './FirebaseConfig';

export default connect(
    state => ({
        user: state.fejsLogin

    }),
    dispatch => ({
        fejsLogin: result => dispatch({
            type: 'FACEBOOK_LOGIN',
            facebook: result,

        }),
        fejsLogout : result => dispatch({
                    type: 'FACEBOOK_LOGOUT',
                    facebook: result
                })



    })

)(
    class extends React.Component {





    logout() {
        const result = null
         auth().signOut()
        this.props.fejsLogout(result)
    }

    render() {

         const fejsLogin = this.props.fejsLogin
        const user = this.props.user
        const result = auth().signInWithPopup(provider)
        setTimeout(function () {
            console.log(user.facebook)

        }, 10000)
        return (
            <div>
                <p>{user ? `Hi, ${user.facebook}!` : 'Hi!'}</p>
                <button onClick={() => fejsLogin(result)}>
                    Login with Facebook
                </button>

                <button onClick={this.logout.bind(this)}>
                    Logout
                </button>

            </div>
        );
    }

 }
)