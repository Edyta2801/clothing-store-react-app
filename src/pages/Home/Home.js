import React from 'react';
import {  Hero,
// FeaturedProducts,
  // Services,
//  Contact
 } from '../../components/Hero';
//  import {Carousel} from '../../components/Carousel';
//  import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';
 import {Services} from '../../components/Services';


const Home = () => {
  return (
    <main>
      <Hero />
      {/* <FeaturedProducts /> */}
      <Services />
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
