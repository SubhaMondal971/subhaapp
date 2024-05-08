import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return <Box bgColor={'black'} minH={'40'} p='16' color={'white'} >
    <Stack direction={["column",'row']}>
      <VStack alignItems={'stretch'} w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
          Stay with me 
        </Heading>
        <HStack borderBottom={'2px solid white'}>
          <Input placeholder='Enter Email Here...' 
          border={'none'}
          borderRadius='none'
          outline={'none'}
          focusBorderColor='none'/>
          <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={20}/>
          </Button>
        </HStack>
      </VStack>

      <VStack w={'full'} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
        <Heading textTransform={'uppercase'} textAlign={"center"}> Video hub</Heading>
        <Text textTransform={"lowercase"} >All Right Received</Text>
      </VStack>

      <VStack w={'full'}>
        <Heading size={'md'} textTransform={"uppercase"}>
          Social media
        </Heading>
        <Button variant={"link"} colorScheme={"white"}>
          <a target='blank' href="https://www.youtube.com/channel/UCAUtPaN3LJ6DH2TGgxswm8g">Youtube</a>
        </Button>

        <Button variant={"link"} colorScheme={"white"}>
          <a target='blank' href="https://www.youtube.com/channel/UCAUtPaN3LJ6DH2TGgxswm8g">Instagram</a>
        </Button>

        <Button variant={"link"} colorScheme={"white"}>
          <a target='blank' href="https://www.youtube.com/channel/UCAUtPaN3LJ6DH2TGgxswm8g">Github</a>
        </Button>
      </VStack>
    </Stack>
  </Box>

  
}

export default Footer