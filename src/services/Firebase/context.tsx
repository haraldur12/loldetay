import React from 'react';
export const withFirebase = function withComponent(Component: any) {
    return function withConsumer(props: object): any {
        return (
            <FirebaseContext.Consumer>
                {(firebase: any) => <Component {...props} firebase={firebase} currentUser={firebase.getUserInfo()} />}
            </FirebaseContext.Consumer>
        );
    };
};

export const FirebaseContext = React.createContext({});
