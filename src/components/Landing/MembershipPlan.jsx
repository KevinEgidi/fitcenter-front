import { Box, Center, Stack, Text, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

export default function MembershipPlan() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack textAlign={'center'} p={6} align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            p={2}
            px={3}
            color={'blue.500'}
            rounded={'full'}
          >
            Hobby
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              79
            </Text>
            <Text color={'gray.500'}>/month</Text>
          </Stack>
        </Stack>

        <Box px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              5.000 page views
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              50 automation executions
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              50 identified users
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              All features
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'blue.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(6, 14, 158 / 63%)'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}
          >
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
