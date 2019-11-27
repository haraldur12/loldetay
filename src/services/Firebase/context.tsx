import React from 'react';
export const withFirebase = function withComponent(Component: any) {
    return function withConsumer(props: object): any {
        return (
            <FirebaseContext.Consumer>
                {(firebase: any) => <Component {...props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    };
};

export const FirebaseContext = React.createContext({});
