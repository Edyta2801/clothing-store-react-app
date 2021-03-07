import React from 'react';
import {Flex, Box} from '@chakra-ui/react';

import {ColorModeSwitcher} from '../../ColorModeSwitcher';

export default function LandingLayout(props) {
  return (
    <Box
      // textAlign="right"
      p={3}
      mr={2}
      textAlign={{md: 'right', sm: 'center'}}
    >
      <ColorModeSwitcher
      //  justifySelf="flex-end"
      />
      <Flex direction="column" align="center" maxW={{xl: '1200px'}} m="0 auto" {...props}>
        {props.children}
      </Flex>
    </Box>
  );
}
