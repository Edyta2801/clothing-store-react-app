import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from './logo.png';
import {Box, Image} from '@chakra-ui/react';

// const styles = {
//   width: 150,
//   height: 'auto',
// };

function Logo() {
  return (
    <Box>
      <Link to="/">
        <Image h='4vh' src={logoImg} alt="logo"
        //  style={styles}

         />
      </Link>
    </Box>
  );
}

export default Logo;
