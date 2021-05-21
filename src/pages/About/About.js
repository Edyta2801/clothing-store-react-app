import React from 'react';
import {Link} from 'react-router-dom';
// import {Wrap, WrapItem, Box, Heading, Button, Stack} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {Box, Flex, Image, Heading, Text} from '@chakra-ui/react';
import photo from '../../assets/show.jpg';

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

export default function About({title, subtitle, image, ctaLink, ctaText, ...rest}) {
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
            to="/about"
            color="teal.500"
            fontWeight="0.8"
            _hover={{
              textDecoration: 'none',
            }}
          >
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex
        align="center"
        justifyContent="space-around"
        // justify={{base: 'space-between', md: 'space-between', xl: 'space-between'}}
        direction={{base: 'column', md: 'row'}}
        wrap="no-wrap"
        // minH={{base: '100vh', md: '100vh'}}
        minW={{base: '90vw', md: '90vw'}}
        // w={{base: '90%', md: '100%'}}
        // px={8}
        mt={10}
        mb={16}
        {...rest}
      >
        <Box
          align="center"
          w={{base: '90%', md: '95%'}}
          // mb={{base: 12, md: 0}}
        >
          <Image src={photo}
          // size="100%"
          rounded="1rem" shadow="2xl" />
        </Box>

        <Box
          alignItems="flex-start"
          // textAlign="center"
          w={{base: '80%',
          md: '100%'
          }}
          mt={{base: '5', md: '0'}}
          mx='4'
        >
          <Heading
            textAlign="center"
            position="relative"
            as="h1"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            opacity="0.9"
            mb='10'
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
            Our Story
          </Heading>
          <Text
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente
            tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi,
            omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore,
            obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio
            eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam
            rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique
            amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

About.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

About.defaultProps = {
  title: 'Brands you know and love. Shopping made easy.',
  subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  image: 'https://source.unsplash.com/collection/1160922/800x600',
  ctaText: '',
  ctaLink: '/products',
};
