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
                  boxSize="200px"
                  fit="cover"
                  src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/
                  300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
                />
              </TabPanel>
              <TabPanel>
                <Image
                  boxSize="200px"
                  fit="cover"
                  src="https://vignette.wikia.nocookie.net/naruto/images/2/21/
                  Sasuke_Part_1.png/revision/latest?cb=20170716092103"
                />
              </TabPanel>
            </TabPanels>
            <TabList>
              <Tab><Image
                  boxSize="50px"
                  fit="cover"
                  src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/
                  300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
                /></Tab>
              <Tab>Sasuke</Tab>
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
