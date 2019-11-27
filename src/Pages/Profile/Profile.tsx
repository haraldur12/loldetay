import React, { FunctionComponent } from 'react';
import './Profile.css';
import { withAuthentication } from '../../services';
import { AuthUserContext } from '../../services';

const ProfilePage: FunctionComponent<{ firebase: any }> = props => {
    return (
        <AuthUserContext.Consumer>
            {authUser => {
                console.log(authUser);
                return (
                    <div className="profile-page" onClick={() => props.firebase.signOut()}>
                        Cikis Yap
                    </div>
                );
            }}
        </AuthUserContext.Consumer>
    );
};

const Profile = withAuthentication(ProfilePage);
export { Profile };
