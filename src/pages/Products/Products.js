import React, {useState, useEffect} from 'react';
import api from '../../api';

import {Link} from 'react-router-dom';
// import {Wrap, WrapItem, Box, Heading, Button, Stack} from '@chakra-ui/react';
import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(response => setProducts(response.data));
  }, []);

  return (
    <>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/"
            _hover={{
              color: 'teal.500',
              fontWeight: '0.8',
              textDecoration: 'none',
            }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/products"
            color="teal.500"
            fontWeight="0.8"
            _hover={{
              textDecoration: 'none',
            }}
          >
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>
              {product.title} {product.price}
            </h2>
          </div>
        ))}
      </div>
      <Flex
        align="center"
        direction={{base: 'column', md: 'row'}}
        wrap="no-wrap"
        minW={{base: '95vw', md: '95vw'}}
        mt={10}
        mb={16}
      >
        <Box flex="1" align="center" w={{base: '95%', md: '95%'}} backgroundColor="pink">
          Filter
          {/* <Filter/> */}
        </Box>

        <Box flex="3" align="center" w={{base: '95%', md: '95%'}} mx="2" backgroundColor="yellow">
          <Heading>
            Sort
            {/* <Sort/> */}
          </Heading>

          <Text>
            ProductList
            {/* <ProductList/> */}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
export default Products;
