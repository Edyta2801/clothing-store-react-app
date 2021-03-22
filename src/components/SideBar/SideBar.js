import React from 'react';
import {NavLink} from 'react-router-dom';
import {Flex, Stack, Box, Icon, Text} from '@chakra-ui/react';
import Logo from '../Header/Logo';
import {MdShoppingCart, MdAccountCircle} from 'react-icons/md';
// import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const MenuItem = ({children, isLast, to = '/', ...rest}) => {
  return (
    <Text
      mb={{base: isLast ? 0 : 8, sm: 0}}
      mr={{base: 0, sm: isLast ? 0 : 8}}
      display="block"
      fontSize='lg'
      {...rest}
    >
      {/* <Link to={to}>{children}</Link> */}
      <Stack
        spacing={6}
        // color={textColor[colorMode]}
        justify="center"
        align="center"
        isInline
      >
        <Box
          position="relative"
          _hover={{
            borderBottom: '2px solid rgb(49, 151, 149)',
          }}
        >
          <NavLink to={to}>{children}</NavLink>
        </Box>
      </Stack>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#319795">
    <title>Close</title>
    <path
      // fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502
       15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023
        2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#319795">
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
      // mb={8}
      p={8}
      {...props}
    >
      <Flex align="center">
        <Box>
          <NavLink to="/">
            <Logo w="100px" />
          </NavLink>
        </Box>
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
          <MenuItem exact to="/">
            Home
          </MenuItem>
          <MenuItem exact to="/about">
            About{' '}
          </MenuItem>
          <MenuItem exact to="/products">
            Products{' '}
          </MenuItem>
          <Flex />
          <Flex></Flex>
          <Stack spacing={2} justify="center" align="center" isInline>
            >
            <Box fontSize='lg'>
              <NavLink exact to="/cart">
                Cart
                <Icon
                  as={MdShoppingCart}
                  colorScheme="yellow"
                  w={6}
                  h={6}
                  mx="1"
                  color="teal.500"
                  _hover={{
                    color: 'teal.700',
                  }}
                ></Icon>
              </NavLink>
            </Box>
            <Box fontSize='lg'>
              <NavLink exact to="/login">
                Login
                <Icon
                  as={MdAccountCircle}
                  w={6}
                  h={6}
                  mx={1}
                  color="teal.500"
                  _hover={{
                    color: 'teal.700',
                  }}
                ></Icon>
              </NavLink>
            </Box>
            {/* <ColorModeSwitcher/> */}
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBar;
