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
import {SingleProductPage} from './pages/SingleProductPage';
import {About} from './pages/About';
import {Products} from './pages/Products';
import {Footer} from './components/Footer';

import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import {ColorModeSwitcher} from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box
    textAlign={{base:'center', md:'right'}}
    mt='2'
    mr='2'
    >
    <ColorModeSwitcher/>
    </Box>
    <Router>
      <SideBar />
      <Switch>
        <LandingLayout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id" children={<SingleProductPage />} />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
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
        </LandingLayout>
      </Switch>
      <Footer />
    </Router>

    </ChakraProvider>
  );
}

export default App;
