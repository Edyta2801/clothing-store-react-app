import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
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
  Heading,
} from '@chakra-ui/react';

import clothes from './images/clothes.jpg';
import draft from './images/draft.jpg';
import sewing from './images/sewing.jpg';
// import material from './images/material.jpg';
import manekin from './images/manekin.jpg';
import show from './images/show.jpg';
// import clothes from './images/clothes.jpg';
import {StarIcon} from '@chakra-ui/icons';

function SingleProductPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
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
          {/* <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xl"
            letterSpacing="wide"
            color="teal.600"
          >
            Modern Clothes
          </Text> */}
          <Heading
            as="h1"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            opacity="0.9"
            textAlign="left"
          >
            Modern Clothes
          </Heading>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon key={i} color={i < 4 ? 'teal.500' : 'gray.300'} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              34 reviews
            </Box>
          </Box>

          <Box color="primary.800" opacity="0.9" fontSize="lg" my="5" fontWeight="bold">
            $ 350.00
          </Box>

          <Text mt={2} color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante diam, eleifend et
            magna vitae, venenatis dictum ex. Praesent id ornare metus. Nam in posuere libero.
            Vivamus sit amet tortor non orci venenatis pretium eget eu quam. Donec sollicitudin ex
            nunc, vel rhoncus lorem vulputate sed.
          </Text>
        </Box>
      </Box>
    </>
  );
}
export default SingleProductPage;
