import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Box, Image, Text, Stack} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons';
import './style.css';

const ProductCard = ({product, title, price, image}) => {
  return (
    <Box
    // maxW="300px"
    >
      <Box className="container" flexShrink={0} align="center">
        <Image
          rounded="0.8rem"
          // src="https://finalspaceapi.com/img/gary_goodspeed.webp"
          src={image}
          alt="Gary Goodspeed"
          minW={{base: '80vw', md: '25vw'}}
          // maxW={{lg:200}}
          maxH={{base: 220, md: 150, lg: 220}}
          objectFit="cover"
        />
        <Link className="link" to="products/:id">
          <IconButton colorScheme="teal" icon={<Search2Icon />} rounded="full" size="md" />
        </Link>
      </Box>

      <Stack isInline justify="space-between" my="2">
        <Text
          maxWidth={{base: '250px', md: '130px', lg: '170px', xl: '250px'}}
          fontWeight="semibold"
          fontSize="md"
          color="primary.800"
          opacity="0.8"
          isTruncated
        >
          {title}
        </Text>
        <Text fontWeight="semibold" fontSize="md" color="teal.500">
          ${price}
        </Text>
      </Stack>
    </Box>
  );
};
export default ProductCard;
