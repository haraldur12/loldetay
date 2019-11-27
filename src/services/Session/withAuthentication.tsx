import React, { ComponentType } from 'react';
import { AuthUserContext } from './context';
import { withFirebase } from '../Firebase';

import { compose } from 'recompose';

type AuthState = {
    authUser: object;
};
const withAuthentication = (Component: any): ComponentType => {
    class WithAuthentication extends React.Component<{ firebase: any }, AuthState> {
        public listener: any;
        constructor(props: any) {
            super(props);
            this.state = {
                authUser: {},
            };
            this.listener = this.props.firebase.auth.onAuthStateChanged((authUser: any) => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser: {} });
                localStorage.setItem('authUser', JSON.stringify(authUser));
            });
        }
        componentWillUnmount() {
            this.listener();
        }
        render() {
            const { authUser } = this.state;
            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    return compose(withFirebase)(WithAuthentication);
};

export { withAuthentication };
