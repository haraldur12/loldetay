import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './Main';
import { ChampionPage, Champions } from './Champions';
import { ItemPage, Items } from './Items';

import { Navbar } from './components/Navbar/';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Main} />
            <Route path="/items" exact component={Items} />
            <Route path="/item/:itemId" exact component={ItemPage} />
            <Route path="/champions" exact component={Champions} />
            <Route path="/champion/:name" exact component={ChampionPage} />
        </Router>
    );
};

export default App;
