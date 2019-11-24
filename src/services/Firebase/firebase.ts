import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export class Firebase {
    private auth: any;
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    createUserWithEmailAndPassword = (email: string, password: string, displayName: string) =>
        this.auth.createUserWithEmailAndPassword(email, password).then((result: any) => {
            result.user.updateProfile({
                displayName,
            });
        });
    signInWithEmailAndPassword = (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password);
    signOut = () => this.auth.signOut();
    getUserInfo = () => {
        if (this.auth.currentUser) {
            return this.auth.currentUser;
        }
        return {};
    };
    getData = () => {
        const tutorials = app.database().ref('tutorials');
        tutorials.on('value', snapshot => {
            console.log(snapshot.val());
        });
    };
}
