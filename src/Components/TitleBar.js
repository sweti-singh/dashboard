import { Flex, Heading,Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import globe from "../Assets/noun-global-security-837240.png"
import user from "../Assets/noun-user-6605556.png"
import verticalBar from "../Assets/noun-alignment-786079.png"
import "../css/title.css"

const TitleBar = () => {
  return (
    <Flex className='title'>
        <Flex className='left-title'>
            <Box height={'1.8rem'}>
            <Image
              alt={"verticalBar"}
              src={verticalBar}
              objectFit="contain"
              w="100%"
              h="100%"
             backgroundColor={'white'}
            />
          </Box>
          <Text>Webapp</Text>
        </Flex>

        <Flex className='right-title'>
        <Box height={'1.8rem'}>
            <Image
              alt={"globe"}
              src={globe}
              objectFit="contain"
              w="100%"
              h="100%"
             backgroundColor={'white'}
            />
          </Box>
        <Box height={'1.8rem'} >
            <Image
              alt={"user"}
              src={user}
              objectFit="contain"
              w="100%"
              h="100%"
             backgroundColor={'white'}
            />
          </Box>
          <Text>user</Text>
          </Flex>
    </Flex>
  )
}

export default TitleBar
