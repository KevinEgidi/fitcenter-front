import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  Stack,
  Group,
  Input,
  Portal
} from '@chakra-ui/react'
import { IoMdMenu, IoMdAdd, IoMdClose } from "react-icons/io";

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <IoMdClose /> : <IoMdMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Box
                  key={link}
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                  }}
                  href={'#'}>
                  {link}
                </Box>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Group attached w="full" maxW="sm">
              <Input flex="1" placeholder="Enter your email" />
              <Button bg="bg.subtle" variant="outline">
                Submit
              </Button>
            </Group>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                Sign In
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign Up
              </Button>
            </Stack>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<IoMdAdd />}>
              Action
            </Button>
            <Menu.Root>
              <Menu.Trigger
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar.Root size="sm">
                  <Avatar.Fallback name="Segun Adebayo" />
                  <Avatar.Image src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                </Avatar.Root>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item>Link 1</Menu.Item>
                    <Menu.Item>Link 2</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Link 3</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box p={4}>Main Content Here</Box>
    </>
  )
}