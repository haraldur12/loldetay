import React, { FunctionComponent, useState } from 'react';
import { FirebaseContext } from '../services/Firebase';

import './Form.css';

const INITIAL_STATE = {
    displayName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

type User = {
    displayName: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: null;
};

const Register: FunctionComponent<{ firebase: any; history: any }> = props => {
    const [user, setUser] = useState<User>(INITIAL_STATE);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const userData = {
            ...user,
            [event.target.name]: event.target.value,
        };
        setUser(userData);
    };
    const onSubmit = async (firebase: any, event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const { displayName, email, passwordOne } = user;
        firebase
            .createUserWithEmailAndPassword(email, passwordOne, displayName)
            .then((authUser: any) => {
                const { history } = props;
                setUser({ ...INITIAL_STATE });
                history.push('/');
            })
            .catch((error: Error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    return (
        <FirebaseContext.Consumer>
            {firebase => {
                console.log(firebase);
                return (
                    <div className="box">
                        <h2>Kayit Ol</h2>
                        <form action="" onSubmit={e => onSubmit(firebase, e)}>
                            <div className="inputBox">
                                <input type="text" name="displayName" required onChange={onChange} />
                                <label htmlFor="">Kullanici Adi</label>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required onChange={onChange} />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="passwordOne" required onChange={onChange} />
                                <label htmlFor="">Sifre</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="passwordTwo" required onChange={onChange} />
                                <label htmlFor="">Sifre Tekrari</label>
                            </div>
                            <input type="submit" name="" value="Gonder" />
                        </form>
                    </div>
                );
            }}
        </FirebaseContext.Consumer>
    );
};

export { Register };
