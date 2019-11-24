import React, { FunctionComponent, useState } from 'react';
import { withFirebase } from '../../services';
import { Link } from 'react-router-dom';

import './Form.css';

const LoginPage: FunctionComponent<{ history: any; firebase: any }> = props => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const userData = {
            ...user,
            [event.target.name]: event.target.value,
        };
        setUser(userData);
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const { email, password } = user;
        props.firebase
            .signInWithEmailAndPassword(email, password)
            .then((authUser: any) => {
                const { history } = props;
                history.push('/');
            })
            .catch((error: Error) => {
                console.log(error);
            });
        event.preventDefault();
    };
    return (
        <div className="box">
            <h2>Giris Yap</h2>
            <form action="" onSubmit={e => onSubmit(e)}>
                <div className="inputBox">
                    <input type="email" name="email" required onChange={onChange} />
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" required onChange={onChange} />
                    <label htmlFor="">Sifre</label>
                </div>
                <input type="submit" name="" value="Gonder" />
            </form>
            <Link to="/register">
                <div>Kayit Ol</div>
            </Link>
        </div>
    );
};
const Login = withFirebase(LoginPage);
export { Login };
