import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './Logo';

import {Flex, Stack, useColorMode, IconButton, Box, HStack} from '@chakra-ui/react';

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = {light: 'gray.300', dark: 'gray.600'};
  const textColor = {light: 'black', dark: 'gray.100'};

  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      align="center"
      color={textColor[colorMode]}
      justify="center"
      fontSize={['md', 'lg', 'xl', 'xl']}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={['100vw', '100vw', '80vw', '80vw']} justify="space-around">
        <Box>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Box>

        <Stack spacing={8} color={textColor[colorMode]} justify="center" align="center" isInline>
          <Box position="relative">
            <NavLink
              exact to="/"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Home
            </NavLink>
          </Box>
          <Box position="relative">
            <NavLink
              exact to="/about"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              About
            </NavLink>
          </Box>
          <Box position="relative">
            <NavLink
              exact to="/products"
              activeStyle={{
                fontWeight: 'bold',
                color: 'orange',
              }}
            >
              Products
            </NavLink>
          </Box>
        </Stack>

        <HStack spacing="24px">
          <Box>
            <IconButton>
              <NavLink exact to="/cart">
                <button>Cart</button>
              </NavLink>
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <NavLink exact to="/login">
                <button>login</button>
              </NavLink>
            </IconButton>
          </Box>
          <Box>
            <IconButton
              rounded="full"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? 'moon' : 'sun'}
            >
              Change Color Mode
            </IconButton>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
