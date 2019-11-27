import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './Main';
import { ChampionPage, Champions, ItemPage, Items, Register, Login, Tutorials, Tutorial } from './Pages';

import { Navbar } from './components/Navbar/';
import { Profile } from './Pages/Profile';
import { withAuthentication } from './services';

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
            <Route path="/tutorial/:id" exact component={Tutorial} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={Profile} />
        </Router>
    );
};

export default withAuthentication(App);
