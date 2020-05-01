import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Karachi from './pages/Karachi';
import KarachiRamazanTimings from './pages/KarachiRamazanTimings';
import RahimYarKhan from './pages/RahimYarKhan';
import RYKRamazanTimings from './pages/RYKRamazanTimings';
import ErrorPage from './pages/Error'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
          <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Karachi" exact component={Karachi} />
        <Route path="/KarachiRamazanTimings" exact component={KarachiRamazanTimings} />
        <Route path="/RahimYarKhan" exact component={RahimYarKhan} />
        <Route path="/RYKRamazanTimings" exact component={RYKRamazanTimings} />
        <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
