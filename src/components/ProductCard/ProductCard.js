import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Box, Image, Text, Stack} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons';
import './style.css';

const ProductCard = () => {
  return (
    <Box w='300px'>
      <Box className="container" w="300px"
       align="center" >
        <Image
          rounded="0.5rem"
          src="https://finalspaceapi.com/img/gary_goodspeed.webp"
          alt="Gary Goodspeed"
          w={300}
          h={200}
          objectFit="cover"
        />
        <Link className="link" to="products">
          <IconButton colorScheme="teal" icon={<Search2Icon />} rounded="full" size="md" />
        </Link>
      </Box>

      <Stack isInline justify="space-between" my="2">
        <Text fontWeight="semibold" fontSize="md" color="primary.800" opacity="0.8">
          Gary Goodspeed
        </Text>
        <Text fontWeight="semibold" fontSize="md" color="teal.500">
          $20
        </Text>
      </Stack>
    </Box>
  );
};
export default ProductCard;
