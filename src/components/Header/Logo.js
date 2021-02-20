import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from './logo.png';
import {Stack, Image, Box} from '@chakra-ui/react';

// const styles = {
//   width: 150,
//   height: 'auto',
// };
const styles = {
  fontFamily: 'Lobster',
  color: 'rgb(49, 151, 149)',
  fontSize:'20px',
  display:'inline',
 fontStyle:'italic'
};

function Logo() {
  return (
    <Box>
      <Link to="/">
        <Stack justify="center" align="center" spacing="-2" isInline>
          <Image
            src={logoImg}
            alt="logo"
            h="6vh"
            //  style={styles}
          />
          <span style={styles}>Clothes ForYou </span>
        </Stack>
      </Link>
    </Box>
  );
}

export default Logo;
