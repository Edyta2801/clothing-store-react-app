import React from 'react';
import {
  Box,
  InputGroup,
  Heading,
  InputRightElement,
  InputLeftElement,
  Input,
  Button,
Center,
  Stack
} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
// import {StandardButton} from '../StandardButton';

const Contact = buttonText => {
  return (
    // <Box
    <Stack spacing='8'
      display={{md: 'flex'}}
    h='380px'
      maxW="1200"
      direction={{base: 'column', md: 'row'}}
      align="center"
      wrap="no-wrap"
      // justify={{base: 'space-around', md: 'center', xl: 'space-between'}}
      mt={{base:20, md:0}}
      mx="10"
    >
      <Box flex="1">
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          opacity="0.9"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Join our newsletter and get 20% off
        </Heading>
        <Heading
          mt="5"
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione
          soluta veniam provident adipisci cumque eveniet tempore?
        </Heading>
      </Box>
      <Center
      flex="1"
      // mb={{base:50}}
      // mt={{base:20}}

      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon color="teal.500" />} />
          <Input isInvalid errorBorderColor="teal.500" type="tel" placeholder="Enter email" />
          <InputRightElement width="6rem">
            <Button variant="outline" colorScheme="teal">
              Subscribe
            </Button>
            {/* <StandardButton>{buttonText}</StandardButton> */}
          </InputRightElement>
        </InputGroup>
      </Center>
    {/* </Box> */}
    </Stack>
  );
};
// StandardButton.defaultProps = {
//   buttonText: 'SUBSCRIBE',
// };

export default Contact;
