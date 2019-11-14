import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Champions } from './Champions';
import { ChampionPage } from './ChampionPage/ChampionPage';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Route path="/" exact component={Champions} />
            <Route path="/champion/:name" exact component={ChampionPage} />
        </Router>
    );
};

export default App;
