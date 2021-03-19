import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Button, Flex, Image, Heading, Stack, Text} from '@chakra-ui/react';
import {Carousel} from '../Carousel';
import photo1 from '../Carousel/images/photo1.jpg';
import photo2 from '../Carousel/images/photo2.jpg';
import photo3 from '../Carousel/images/photo3.jpg';
import photo4 from '../Carousel/images/photo4.jpg';
import photo5 from '../Carousel/images/photo5.jpg';

export default function Hero({title, subtitle, image, ctaLink, ctaText, ...rest}) {
  return (
    <Flex
      align="center"
      justify={{base: 'space-around', md: 'center', xl: 'space-between'}}
      direction={{base: 'column-reverse', md: 'row'}}
      wrap="mo-wrap"
      minH={{base: '80vh', md: '50vh'}}
      minW={{base: '70vw', md: '80vw'}}
      px={8}
      mb={16}
      // maxH='100'
      {...rest}
    >
      <Stack
      // flex='1'
        spacing={4}
        w={{base: '60%', md: '40%'}}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          opacity="0.9"
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
      {/* <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}> */}
      <Box
      // flex='1'
      // display='flex'
      // alignItems='center'
      // justifyItems='start'
      w={{base: '50%', md: '50%'}}
      mt={{base: -105, md: -190}}
      mb={{base: 20, md: 40}}
      maxW={{ md: '35vw'}}>

        {/* TODO: Make this change every X secs */}
        <Carousel
          carouselItems={[
            <Image src={photo1} rounded="1rem" shadow="2xl" />,
            <Image src={photo2} rounded="1rem" shadow="2xl" />,
            <Image src={photo3} rounded="1rem" shadow="2xl" />,
            <Image src={photo4} rounded="1rem" shadow="2xl" />,
            <Image src={photo5} rounded="1rem" shadow="2xl" />,
          ]}
        />
        {/* <Image src={image} size="100%" rounded="1rem" shadow="2xl" /> */}
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
