import React from 'react';
import {connect} from 'react-redux'

import {provider, auth} from './FirebaseConfig';

export default connect(
    state => ({
        user: state.facebookLogin.result

    }),
    dispatch => ({
        facebookLogin: event => dispatch({
            type: 'FACEBOOK__LOGIN',
            facebook: event

        }),
        facebookLogout : event => dispatch({
                    type: 'FACEBOOK_LOGOUT',
                    facebook: event
                })



    })

)(
    class extends React.Component {



    async login() {
        const result = auth().signInWithPopup(provider)
        return () => result

    }

    logout() {
        const result = null
         auth().signOut()
        return () => result;
    }

    render() {

        const user = this.props.user
        return (
            <div>
                <p>{user ? `Hi, ${user.ya.displayName}!` : 'Hi!'}</p>
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