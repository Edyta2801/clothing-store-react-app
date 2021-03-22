import React from 'react';
import {Link} from 'react-router-dom';
// import {Wrap, WrapItem, Box, Heading, Button, Stack} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Box,
  Image,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
} from '@chakra-ui/react';


import clothes from './images/clothes.jpg';
import draft from './images/draft.jpg';
import sewing from './images/sewing.jpg';
// import material from './images/material.jpg';
import manekin from './images/manekin.jpg';
import show from './images/show.jpg';
// import clothes from './images/clothes.jpg';


const SingleProductPage = () => {
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
            _hover={{
              color: 'teal.500',
              fontWeight: '0.8',
              textDecoration: 'none',
            }}
          >
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/products/:id"
            color="teal.500"
            fontWeight="0.8"
            _hover={{
              textDecoration: 'none',
            }}
          >
            SingleProducts
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box p={4} display={{md: 'flex'}}>
        <Box flexShrink={0}>
          <Tabs defaultIndex={1}>
            <TabPanels>
              <TabPanel>
                <Image
                rounded="0.5rem"
                  boxSize="430px"
                  fit="cover"
                  src={clothes}
                />
              </TabPanel>
              <TabPanel>
                <Image
                rounded="0.5rem"
                  boxSize="430px"
                  fit="cover"
                  src={draft}
                />
              </TabPanel>
              <TabPanel>
                <Image
                rounded="0.5rem"
                  boxSize="430px"
                  fit="cover"
                  src={sewing}
                />
              </TabPanel>
              <TabPanel>
                <Image
                rounded="0.5rem"
                  boxSize="430px"
                  fit="cover"
                  src={manekin}
                />
              </TabPanel>
              <TabPanel>
                <Image
                rounded="0.5rem"
                  boxSize="430px"
                  fit="cover"
                  src={show}
                />
              </TabPanel>
            </TabPanels>
            <TabList>
              <Tab><Image
              rounded="0.5rem"
                  boxSize="60px"
                  fit="cover"
                  src={clothes}
                /></Tab>
              <Tab><Image
              rounded="0.5rem"
                  boxSize="60px"
                  fit="cover"
                  src={draft}
                /></Tab>
                 <Tab><Image
                 rounded="0.5rem"
                  boxSize="60px"
                  fit="cover"
                  src={sewing}
                /></Tab>
                 <Tab><Image
                 rounded="0.5rem"
                  boxSize="60px"
                  fit="cover"
                  src={manekin}
                /></Tab>
                 <Tab><Image
                 rounded="0.5rem"
                  boxSize="60px"
                  fit="cover"
                  src={show}
                /></Tab>
            </TabList>
          </Tabs>
        </Box>
        <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can
            use to find your first customers.
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default SingleProductPage;
