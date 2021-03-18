import React from 'react';
import {Link} from 'react-router-dom';
// import {Wrap, WrapItem, Box, Heading, Button, Stack} from '@chakra-ui/react';

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/"
          _hover={{
              color: 'teal.500',
              fontWeight: '0.8',
              textDecoration: 'none',
            }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/about"
          color="teal.500"
            fontWeight="0.8"
            _hover={{
              textDecoration: 'none',
            }}>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div>About Page </div>
    </>
  );
};
export default About;
