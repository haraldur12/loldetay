import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './Main';
import { ChampionPage, Champions } from './Champions';
import { ItemPage, Items } from './Items';
import { withAuthorization } from './services/Session/withAuthHOC';

import { Navbar } from './components/Navbar/';
import { Tutorials } from './Tutorials';
import { Register, Login } from './Users';

const App: FunctionComponent = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Main} />
            <Route path="/items" exact component={Items} />
            <Route path="/item/:itemId" exact component={ItemPage} />
            <Route path="/champions" exact component={Champions} />
            <Route path="/champion/:name" exact component={ChampionPage} />
            <Route path="/tutorials" exact component={Tutorials} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
        </Router>
    );
};

export default withAuthorization(App);
