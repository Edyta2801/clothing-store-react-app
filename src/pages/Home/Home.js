import React from 'react';
import {  Hero,
// FeaturedProducts,
  // Services,
//  Contact
 } from '../../components/Hero';
//  import {Carousel} from '../../components/Carousel';
//  import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';
 import {Services} from '../../components/Services';
// import {ProductCard} from '../../components/ProductCard';
import {FeaturedProducts} from '../../components/FeaturedProducts';
import {Contact} from '../../components/Contact';
// import {Footer} from '../../components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <ProductCard/> */}
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
