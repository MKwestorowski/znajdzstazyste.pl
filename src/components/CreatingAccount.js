import React from 'react';
import firebase from 'firebase';

import {provider, auth} from './FirebaseConfig';

export default class extends React.Component {

    state = {
    user: null
}


    async login() {
        const result = auth().signInWithPopup(provider)
        this.setState({user: result.user});
    }

    logout() {
         auth().signOut()
        this.setState({user: null});
    }

    render() {

        const user = this.state.user
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