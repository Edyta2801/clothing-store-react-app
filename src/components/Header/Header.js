import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';

// import Button from '../Button';
import {Flex, Stack, PseudoBox, useColorMode, IconButton, Box} from '@chakra-ui/react';

function Header() {
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
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Stack spacing={8} color={textColor[colorMode]} justify="center" align="center" isInline>
          <PseudoBox position="relative"
          // opacity={router.pathname !== '/' ? 0.4 : 1}
          >
            <Link
              to="/"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Home
            </Link>
          </PseudoBox>
          <PseudoBox position="relative"
          // opacity={router.pathname !== '/form' ? 0.4 : 1}
          >
            <Link to="/about">
              About
            </Link>
          </PseudoBox>
          <PseudoBox position="relative"
          // opacity={router.pathname !== '/card' ? 0.4 : 1}
          >
            <Link to="/products">
            Products
            </Link>
          </PseudoBox>
          {/* <PseudoBox
						position='relative'
						opacity={router.pathname !== '/list' ? 0.4 : 1}>
						<Link href='/list'>
							<a>List</a>
						</Link>
					</PseudoBox> */}
        </Stack>
        <Box>
          <IconButton>
            <Link to="/cart">
              <button>Cart</button>
            </Link>
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <Link to="/login">
              <button>login</button>
            </Link>
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
      </Flex>
    </Flex>
  );
}

export default Header;
