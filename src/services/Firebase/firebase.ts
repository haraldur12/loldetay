import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
    private database: any;
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.database = app.firestore();
    }
    public createUserWithEmailAndPassword = (email: string, password: string, displayName: string) =>
        this.auth.createUserWithEmailAndPassword(email, password).then((result: any) => {
            result.user.updateProfile({
                displayName,
            });
        });
    public signInWithEmailAndPassword = (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password);
    public signOut = () => this.auth.signOut();
    public getUserInfo = () => {
        if (this.auth.currentUser) {
            return this.auth.currentUser;
        }
        return {};
    };
    getData = async () => {
        return this.database
            .collection('tutorials')
            .get()
            .then((snapshot: any) => {
                const data = snapshot.docs.map((doc: { data: Function }) => doc.data());
                return data;
            });
    };
}
