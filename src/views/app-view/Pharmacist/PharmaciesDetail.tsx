import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Badge,
} from '@chakra-ui/react';

const LogisticItem = () => {
  return (
    <Box width="full" paddingY={2} paddingX={2} borderRadius={16}>
      <HStack spacing={5}>
        <Image src="Olamide Jubril" />
        <Text>Logistics Name</Text>
      </HStack>
    </Box>
  )
}

const PharmacistDetails = () => {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 12 }}
        py={{ base: 18, md: 24 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Pharmacy Name
            </Heading>

            <HStack spacing={5} marginTop={2}>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'md'}>
                Pharmacy short id
              </Text>

              <Badge
                borderRadius="full"
                paddingY={1}
                paddingX={1}
              >
                Account status: "Approved"
              </Badge>
            </HStack>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.500')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Corresponding Admin
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                <List spacing={2}>
                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Name of institution:
                    </Text>{' '}
                    Olamide Pharmacy
                  </ListItem>
                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Email:
                    </Text>{' '}
                    olamide_jubril@outlook.com
                  </ListItem>
                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Phone:
                    </Text>{' '}
                    +2347046821351
                  </ListItem>
                </List>

                <List spacing={2}>
                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Address:
                    </Text>{' '}
                    Lagos, Nigeria
                  </ListItem>

                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Registration Number:
                    </Text>{' '}
                    A303SDXAX4
                  </ListItem>
                  <ListItem flexWrap="nowrap">
                    <Text as={'span'} fontWeight={'bold'}>
                      Subscription Plan:
                    </Text>{' '}
                    Bronze
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.500')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Pharmacy Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Name of pharmacy:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Name of superintendent pharmacy:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Pharmacy email:
                  </Text>{' '}
                  Steel
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Pharmacy physical address:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Pharmacy phone:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Account name:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Account number:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bank name:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bank name:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 8, md: 5 }}
            py={{ base: 18, md: 24 }}
          >
            {[1, 2, 3, 4].map(() => (<LogisticItem />))}
          </SimpleGrid>

        </Stack>

        <Flex height="full" width="full" paddingY={10}>
          <Text>Show Document Here</Text>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}


export default PharmacistDetails;