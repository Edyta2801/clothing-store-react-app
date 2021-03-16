import React from 'react';
import {Link} from 'react-router-dom';
import {Wrap, WrapItem, Flex, Text, Box, Heading, Button, Stack} from '@chakra-ui/react';
import {ProductCard} from '../ProductCard';

const FeaturedProducts = () => {
  return (
    <>
      <Box w="100%" textAlign="center" mt={{base: '0', md: '20'}} mb="45">
        <Heading
          position="relative"
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          opacity="0.9"
          // textAlign={['center', 'center', 'left', 'left']}
          _after={{
            position: 'absolute',
            content: `""`,
            bottom: '-10px',
            left: '50%',
            width: '80px',
            height: '4px',
            transform: 'translateX(-50%)',
            background: 'teal.500',
          }}
        >
          Featured Products
        </Heading>
      </Box>

      <Wrap
        w="100%"
        // spacing="1vw"
        justify="space-around"
        my='10'
        // mt={{base: '0', md: '20'}}
        // mb={{base: '10', md: '0'}}
      >
        <WrapItem>
          <ProductCard />
        </WrapItem>
        <WrapItem>
          <ProductCard />
        </WrapItem>
        <WrapItem>
          <ProductCard />
        </WrapItem>
      </Wrap>
      <Stack align="center" mb={{base: '10', md: '10'}}>
        <Link to="/products">
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="sm"
          >
            ALL PRODUCTS
          </Button>
        </Link>
      </Stack>
    </>
  );
};
export default FeaturedProducts;
