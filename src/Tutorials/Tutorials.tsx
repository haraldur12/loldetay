import React, { FunctionComponent } from 'react';
import { withFirebase } from '../services/Firebase';
import './Tutorials.css';

const TutorialsPage: FunctionComponent<{ firebase: any }> = props => {
    console.log(props.firebase.getData());
    return <div className="tutorials-page">Tutorials</div>;
};

export const Tutorials = withFirebase(TutorialsPage);
