import {Box, Heading, Text, Flex, useColorMode, Divider, Icon} from '@chakra-ui/react';
// import icon1 from './icon.png';
// import icon2 from './icon2.png';
// import icon3 from './icon3.png';
// import {GrMail} from 'react-icons/gr';
import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi';
const Services = () => {
  const {colorMode} = useColorMode();
  const bgColor = {light: 'gray.100', dark: 'gray.700'};
  return (
    <>
      <Box w="100%" textAlign="center" mt={{base: '20', md: '20'}} mb={{base: '50', md: '0'}}>
        <Heading
          position="relative"
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          opacity="0.9"
          // textAlign={['center', 'center', 'left', 'left']}
          _after={{
            position: 'absolute',
            content: `""`,
            bottom: '-10px',
            left: '50%',
            width: '80px',
            height: '4px',
            transform: 'translateX(-50%)',
            background: 'teal.500',
          }}
        >
          Unique Clothes Sew Only For You
        </Heading>
      </Box>

      <Flex
        justify="center"
        align="center"
        w="100%"
        //  h='93vh'
        // my='20'
        mt={{base: 20, md: 0}}
      >
        <Flex
          // align='center'
          // w='100%'
          // maxW="1050px"
          w={['90vw', '80vw', '90vw', '90vw']}
          direction={['column', 'column', 'row', 'row']}
          justify="center"
          bg={bgColor[colorMode]}
          boxShadow="md"
          rounded="lg"
          p="4"
          my={{base: -10, md: 50}}
          // mx={{base: 30, md: 10}}
        >
          <Flex align="center" mx="2">
            <Icon as={GiCompass} w={16} h={16} color="teal.500" mx="2" />
            <Box mx="4" align="start">
              <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
                Mission
              </Text>
              <Text as="h3" fontWeight="light" fontSize="lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.
                Perferendis corrupti reiciendis
              </Text>
            </Box>
          </Flex>
          <Divider orientation="vertical" borderColor="gray.500" h="auto" my="2" />
          <Flex align="center" mx="2">
            <Icon as={GiDiamondHard} w={16} h={16} color="teal.500" mx="2" />
            <Box m="4" align="start">
              <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
                Vision
              </Text>
              <Text as="h3" fontWeight="light" fontSize="lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.
                Perferendis corrupti reiciendis
              </Text>
            </Box>
          </Flex>
          <Divider orientation="vertical" borderColor="gray.500" h="auto" my="2" />
          <Flex align="center" mx="2">
            <Icon as={GiStabbedNote} w={16} h={16} color="teal.500" mx="2" />
            <Box mx="4" align="start">
              <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
                History
              </Text>
              <Text as="h3" fontWeight="light" fontSize="lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.
                Perferendis corrupti reiciendis
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
