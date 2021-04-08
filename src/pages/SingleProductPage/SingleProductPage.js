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
  Stack,
  Button,
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

      <Stack w="100%" align="flex-start" mt={{base: '10', md: '10'}} pl="2rem">
        <Link to="/products" w="100%">
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="sm"
          >
            BACK TO PRODUCTS
          </Button>
        </Link>
      </Stack>

      <Box
        p={4}
        display={{md: 'flex'}}
        align={{base: 'center'}}
        // justify={{base: 'space-around', md: 'space-around', xl: 'space-between'}}
        // direction={{base: 'column-reverse', md: 'row'}}
        // wrap="no-wrap"
      >
        <Box flexShrink={0}>
          <Tabs
            align={{base: 'center'}}
            // isFitted
            defaultIndex={0}
          >
            <TabPanels align="center">
              <TabPanel>
                <Image rounded="0.5rem" boxSize="430px" fit="cover" src={clothes} />
              </TabPanel>
              <TabPanel>
                <Image rounded="0.5rem" boxSize="430px" fit="cover" src={draft} />
              </TabPanel>
              <TabPanel>
                <Image rounded="0.5rem" boxSize="430px" fit="cover" src={sewing} />
              </TabPanel>
              <TabPanel>
                <Image rounded="0.5rem" boxSize="430px" fit="cover" src={manekin} />
              </TabPanel>
              <TabPanel>
                <Image rounded="0.5rem" boxSize="430px" fit="cover" src={show} />
              </TabPanel>
            </TabPanels>
            <TabList justifyContent="center">
              <Tab>
                <Image rounded="0.5rem" boxSize="60px" fit="cover" src={clothes} />
              </Tab>
              <Tab>
                <Image rounded="0.5rem" boxSize="60px" fit="cover" src={draft} />
              </Tab>
              <Tab>
                <Image rounded="0.5rem" boxSize="60px" fit="cover" src={sewing} />
              </Tab>
              <Tab>
                <Image rounded="0.5rem" boxSize="60px" fit="cover" src={manekin} />
              </Tab>
              <Tab>
                <Image rounded="0.5rem" boxSize="60px" fit="cover" src={show} />
              </Tab>
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
