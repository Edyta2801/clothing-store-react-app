import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //    SecureRoute
} from 'react-router-dom';

import {Home} from './pages/Home';
import {SideBar} from './components/SideBar';
import {LandingLayout} from './components/LandingLayout';
import {Flex} from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <Router>
      <LandingLayout>
        {/* <Header /> */}
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

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

          {/* </Route> */}
        </Switch>
      </LandingLayout>
    </Router>
  );
}

export default App;
