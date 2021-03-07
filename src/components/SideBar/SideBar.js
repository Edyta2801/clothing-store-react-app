import React from 'react';
import {Link, NavLink} from 'react-router-dom';
// import {Box, Flex, Text, Button, Stack} from '@chakra-ui/react';
import {Flex, Stack, useColorMode, Button, IconButton, Box, Icon, Text} from '@chakra-ui/react';
import Logo from '../Header/Logo';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const MenuItem = ({children, isLast, to = '/', ...rest}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = {light: 'gray.300', dark: 'gray.600'};
  const textColor = {light: 'black', dark: 'gray.100'};
  return (
    <Text
      mb={{base: isLast ? 0 : 8, sm: 0}}
      mr={{base: 0, sm: isLast ? 0 : 8}}
      display="block"
      {...rest}
    >
      {/* <Link to={to}>{children}</Link> */}
      <Stack spacing={6}

      // color={textColor[colorMode]}
      justify="center" align="center" isInline>
          <Box
            position="relative"
            _hover={{
              borderBottom: '2px solid rgb(49, 151, 149)',
            }}
          >
            <NavLink
              to={to}
              activeStyle={{
                fontWeight: 'bolder',
              }}
            >
              {children}
            </NavLink>
          </Box>
          </Stack>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502
       15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023
        2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="white">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const SideBar = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      // bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      // color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo w="100px" color={['white', 'white', 'primary.500', 'primary.500']} />
      </Flex>

      <Box display={{base: 'block', md: 'none'}} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{base: show ? 'block' : 'none', md: 'block'}}
        flexBasis={{base: '100%', md: 'auto'}}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-start', 'flex-start']}
          direction={['column', 'column', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/features">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/signup" isLast></MenuItem>
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
              }}
            >
              Create Account
            </Button>


        </Flex>
      </Box>
      {/* <ColorModeSwitcher /> */}
    </Flex>
  );
};

export default SideBar;
