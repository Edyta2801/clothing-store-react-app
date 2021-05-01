import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './Logo';

import {Flex, Stack, useColorMode, IconButton, Box, Icon} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {MdShoppingCart, MdAccountCircle} from 'react-icons/md';

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

        <Stack spacing={6} color={textColor[colorMode]} justify="center" align="center" isInline>
          <Box
            position="relative"
            _hover={{
              borderBottom: '2px solid rgb(49, 151, 149)',
            }}
          >
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: 'bolder',
              }}
            >
              Home
            </NavLink>
          </Box>
          <Box
            position="relative"
            _hover={{
              borderBottom: '2px solid rgb(49, 151, 149)',
            }}
          >
            <NavLink
              exact
              to="/about"
              activeStyle={{
                fontWeight: 'bolder',
              }}
            >
              About
            </NavLink>
          </Box>
          <Box
            position="relative"
            _hover={{
              borderBottom: '2px solid rgb(49, 151, 149)',
            }}
          >
            <NavLink
              exact
              to="/products"
              activeStyle={{
                fontWeight: 'bolder',
              }}
            >
              Products
            </NavLink>
          </Box>
        </Stack>

        <Stack spacing={2} color={textColor[colorMode]} justify="center" align="center" isInline>
          >
          <Box>
            <NavLink exact to="/cart">
              Cart
              <Icon
                as={MdShoppingCart}
                colorScheme="yellow"
                w={6}
                h={6}
                mx="1"
                _hover={{
                  color: 'teal.500',
                }}
              ></Icon>
            </NavLink>
          </Box>
          <Box>
            <NavLink exact to="/login">
              Login
              <Icon
                as={MdAccountCircle}
                w={6}
                h={6}
                mx={1}
                _hover={{
                  color: 'teal.500',
                }}
              ></Icon>
            </NavLink>
          </Box>
          {/* <Box> */}
            {/* <IconButton
              rounded="full"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            >
              Change Color Mode
            </IconButton> */}
          {/* </Box> */}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Header;
