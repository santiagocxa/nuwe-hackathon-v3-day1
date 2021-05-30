import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import User from '../../components/User'
import Home from '../../containers/Home';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
    </Router>
  )
}

export default App;