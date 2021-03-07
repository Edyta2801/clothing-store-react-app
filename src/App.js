import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //    SecureRoute
} from 'react-router-dom';

import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import {LandingLayout} from './components/LandingLayout';
import {Flex} from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingLayout>
            <Header />
            <SideBar />
              <Route path="/">Home</Route>

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
          
          </LandingLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
