import React from 'react';
import {
  BrowserRouter as Router,
  //  Route,
  //   Switch,
  //    SecureRoute
} from 'react-router-dom';

import {ChakraProvider} from '@chakra-ui/react';

import {Header} from './components/Header';
import {Flex} from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" align="center" justify="center">
          <Header/>
          <Flex justify="center" align="center" w="100%" h="93vh">
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
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
