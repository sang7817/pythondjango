// @flow
import * as React from 'react';
// $FlowFixMe: do not complain about importing node_modules
import {hot} from 'react-hot-loader';
// $FlowFixMe: do not complain about importing node_modules
import {Switch, Route} from 'react-router-dom';
// $FlowFixMe: do not complain about importing node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import Variable from 'src/back/variable/';


const App = ({}) => (
    <div>
        <Switch>
            <Route path="/" component={Variable} />
        </Switch>
    </div>
);

export default hot(module)(App);
