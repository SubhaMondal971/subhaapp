import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiAlignLeft } from 'react-icons/bi';

const Header = () => {
  const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiAlignLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos'}>videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
              <Button onClick={onClose} colorScheme='purple'>
                <Link to={"/login"}>Log in</Link>
              </Button>

              <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                <Link to={"/singup"}>Sing Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
