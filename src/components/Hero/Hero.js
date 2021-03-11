import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';
import {Carousel} from '../Carousel';

export default function Hero({title, subtitle, image, ctaLink, ctaText, ...rest}) {
  return (
    <Flex
      align="center"
      justify={{base: 'center', md: 'space-around', xl: 'space-between'}}
      direction={{base: 'column-reverse', md: 'row'}}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{base: '80%', md: '40%'}}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="sm"
          >
            {ctaText}
          </Button>
        </Link>
        <Text fontSize="xs" mt={2} textAlign="center" color="primary.800" opacity="0.6">
          No credit card required.
        </Text>
      </Stack>
      <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}>
        {/* TODO: Make this change every X secs */}
        {/* <Carousel
          carouselItems={[

            <Image
              src="https://images.unsplash.com/photo-1489509036949-f559c618e2f7?ixlib=rb-
              1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=
              667&q=80/800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />,
            <Image
              src="https://images.unsplash.com/photo-1555009393-39be6ef89604?ixlib=rb-1.2.1&ixid=
              MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80/
              800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />,
            <Image
              src="https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixid=MXwxMjA3fDB8M
              HxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80/
              800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />,
            <Image
              src="https://images.unsplash.com/photo-1542491218-cdf4a1eb1e0e?ixid=MXwxMjA3fDB8MH
              xwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/
              800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />,
            <Image
              src="https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&i
              xid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80
              /800x600"
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />,
          ]}
        /> */}
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Brands you know and love. Shopping made easy.',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis dolor, congue.',
  image: 'https://source.unsplash.com/collection/1160922/800x600',
  ctaText: 'SHOP NOW',
  ctaLink: '/products',
};
