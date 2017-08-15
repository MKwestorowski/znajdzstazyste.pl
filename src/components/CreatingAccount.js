import React from 'react';
import {connect} from 'react-redux'

import {provider, auth} from './FirebaseConfig';

export default connect(
    state => ({
        user: state.facebookLogin

    }),
    dispatch => ({
        facebookLogin: result => dispatch({
            type: 'FACEBOOK__LOGIN',
            facebook: result,

        }),
        facebookLogout : result => dispatch({
                    type: 'FACEBOOK_LOGOUT',
                    facebook: result
                })



    })

)(
    class extends React.Component {




    async login() {
        const facebookLogin = this.props.facebookLogin
        const result = auth().signInWithPopup(provider)
      facebookLogin(result)



    }

    logout() {
        const result = null
         auth().signOut()
        this.props.facebookLogout(result)
    }

    render() {

        const user = this.props.user


        return (
            <div>
                <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
                <button onClick={this.login.bind(this)}>
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