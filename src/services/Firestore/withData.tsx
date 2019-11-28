import React, { ComponentType } from 'react';
import 'firebase/firestore';
import { FireStoreContext } from './context';
import { withFirebase } from '../Firebase';

import { compose } from 'recompose';

type AuthState = {
    authUser: object;
};
const withData = (Component: any): ComponentType => {
    class WithDataAccess extends React.Component<{ firebase: any }, AuthState> {
        public listener: any;
        public database: any;
        constructor(props: any) {
            super(props);
            this.state = {
                authUser: {},
            };
            this.database = props.firebase.database;
            this.listener = this.props.firebase.auth.onAuthStateChanged((authUser: any) => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser: {} });
                localStorage.setItem('authUser', JSON.stringify(authUser));
            });
        }
        getData = async () => {
            return this.database
                .collection('tutorials')
                .get()
                .then((snapshot: any) => {
                    const data = snapshot.docs.map((doc: { data: Function; id: string }) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    return data;
                });
        };
        getDocumentById = async (docId: string) => {
            return this.database
                .collection('tutorials')
                .doc(docId)
                .get()
                .then((doc: { data: Function }) => {
                    return doc.data();
                });
        };
        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <FireStoreContext.Provider
                    value={{
                        getData: this.getData,
                        getDocumentById: this.getDocumentById,
                    }}
                >
                    <Component
                        {...this.props}
                        firestore={{
                            getData: this.getData,
                            getDocumentById: this.getDocumentById,
                        }}
                    />
                </FireStoreContext.Provider>
            );
        }
    }
    return compose(withFirebase)(WithDataAccess);
};

export { withData };
