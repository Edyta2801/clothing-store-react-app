import React from 'react';
import {  Hero,
// FeaturedProducts,
//   Services, Contact
 } from '../../components/Hero';
 import {Carousel} from '../../components/Carousel';
 import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';

const Home = () => {
  return (
    <main>
      <Hero />

      {/* <Carousel
            carouselItems={[
              <Image src='https://images.unsplash.com/photo-1489509036949-f559c618e2f7?ixlib=rb-
              1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=
              667&q=80' size="100%"
 rounded="1rem" shadow="2xl" />,
 <Image src='https://images.unsplash.com/photo-1555009393-39be6ef89604?ixlib=rb-1.2.1&ixid=MXwxMjA
 3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' size="100%"
 rounded="1rem" shadow="2xl" />,
 <Image src= 'https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixid=MXwxMjA3fDB8MHxwa
 G90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' size="100%"
 rounded="1rem" shadow="2xl" />,
 <Image src= 'https://images.unsplash.com/photo-1542491218-cdf4a1eb1e0e?ixid=MXwxMjA3fDB8MHxwaG90
 by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' size="100%"
 rounded="1rem" shadow="2xl" />,
 <Image src='https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=MXwxM
 jA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' size="100%"
 rounded="1rem" shadow="2xl" />
            ]}
          /> */}
      {/* <FeaturedProducts />
      <Services />
      <Contact /> */}
    </main>
  );
};

export default Home;
