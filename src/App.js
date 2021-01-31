import React from 'react';
import {BrowserRouter as Router, Route, Switch, SecureRoute} from 'react-router-dom';

import Header from './components/Header';


import './App.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <Content>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <SecureRoute path="/login">
            <Login />
          </SecureRoute>
        </Switch>
      </Content>
      <Footer /> */}
    </Router>
  );
}

export default App;
