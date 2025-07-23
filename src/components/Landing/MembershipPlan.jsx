import React from 'react';
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  Button,
} from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa6";

export default function MembershipPlan() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
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
          <List.Root spacing="3">
      <List.Item>
        <List.Indicator color="green.500">
          <FaCheck />
        </List.Indicator>
        5.000 page views
      </List.Item>
      <List.Item>
        <List.Indicator color="green.500">
          <FaCheck />
        </List.Indicator>
        50 automation executions
      </List.Item>
      <List.Item>
        <List.Indicator color="green.500">
          <FaCheck />
        </List.Indicator>
        50 identified users
      </List.Item>
      <List.Item>
        <List.Indicator color="green.500">
          <FaCheck />
        </List.Indicator>
        All features
      </List.Item>
    </List.Root>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  )
}