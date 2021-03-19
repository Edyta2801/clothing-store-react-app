import React from 'react';
import {Flex, Box, Text, Stack, Heading} from '@chakra-ui/react';

const Contact = () => {
  return (

    <Box
    display='flex'
      minH="50vh"
      maxW='1200'
      direction={{base: 'column', md: 'row'}}
      // align="center"
      justify={{base: 'space-around', md: 'space-around', xl: 'space-between'}}
      // flexWrap='no-wrap'
    >
      <Box flex="1">
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          opacity="0.9"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Join our newsletter and get 20% off
        </Heading>
        <Heading
        mt='5'
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione
          soluta veniam provident adipisci cumque eveniet tempore?
        </Heading>
      </Box>
      <Box flex="1">Form</Box>
    </Box>

  );
};

export default Contact;
