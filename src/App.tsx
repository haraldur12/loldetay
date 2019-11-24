import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './Main';
import { ChampionPage, Champions, ItemPage, Items, Register, Login, Tutorials } from './Pages';
import { withAuthorization } from './services/';

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
            <Route path="/tutorials" exact component={Tutorials} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
        </Router>
    );
};

export default withAuthorization(App);
