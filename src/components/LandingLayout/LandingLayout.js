import React from 'react';
import {Flex, Box, Stack} from '@chakra-ui/react';

import {ColorModeSwitcher} from '../../ColorModeSwitcher';

export default function LandingLayout(props) {
  return (

      <Box
        // p={-1}
        mr={1}
        textAlign={{md: 'right', sm: 'center'}}
        h='0'
      >
        <ColorModeSwitcher
          //  p={-1}
          // mt={-1}
          // textAlign={{md: 'right', sm: 'center'}}
          //  justifySelf="flex-end"
        />

        <Flex direction="column" align="center" maxW={{xl: '1200px'}} m="0 auto" {...props}>

          {props.children}

        </Flex>
      </Box>

  );
}
