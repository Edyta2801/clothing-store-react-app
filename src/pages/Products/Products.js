import React, {useState, useEffect} from 'react';
import api from '../../api';

import {Link} from 'react-router-dom';
// import {Wrap, WrapItem, Box, Heading, Button, Stack} from '@chakra-ui/react';

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
    </>
  );
}
export default Products;
