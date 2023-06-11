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
  List,
  ListItem,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetPharmaciesDetailsQuery } from '../../../services/super-admin/superAdmin';
import AppLoader from '../../../components/AppLoader/AppLoader';
import DocumentViewer from "./DocumentViewer";
import Utils from '../../../utils';
import SidebarWithHeader from '../../../components/Layout/SidebarWithHeader/SidebarWithHeader';

interface LogisticItemProps {
  name: string;
  imageUrl: string;
}

const LogisticItem = (props: LogisticItemProps) => {
  const { name, imageUrl } = props;

  return (
    <HStack
      spacing={5}
      width="full"
      paddingY={2}
      paddingX={2}
      borderWidth={1}
      borderColor="blue.500"
      borderRadius={16}
    >
      <Image
        width={10}
        height={10}
        flexWrap="nowrap"
        borderRadius={10} src={imageUrl}
      />
      <Text whiteSpace="nowrap">{name}</Text>
    </HStack>
  )
}

const PharmacistDetails = () => {
  const { pharmacyId } = useParams();
  const id = String(pharmacyId);
  const { data, isLoading } = useGetPharmaciesDetailsQuery({ pharmacyId: id });

  if (isLoading) {
    return <AppLoader />
  }

  if (!data?.data) {
    return <Text>Error fetching pharmacy details</Text>
  }

  const {
    account_name,
    account_number,
    account_status,
    bank_name,
    logistics,
    name_of_pharmacy,
    name_of_superintendent_pharmacy,
    pharmacy_email,
    pharmacy_id,
    pharmacy_phone,
    pharmacy_physical_address,
    valid_document,
    admin_id: {
      address,
      email,
      name_of_institution,
      phone_number,
      subscription_type,
      registration_number
    }
  } = data.data;

  return (
    <SidebarWithHeader>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 40 }}
        >
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name_of_pharmacy}
              </Heading>

              <HStack spacing={5} marginTop={2}>
                <Text
                  color="gray.900"
                  fontWeight={300}
                  fontSize={'md'}>
                  {pharmacy_id}
                </Text>

                <Text fontWeight="semibold">
                  Account status:
                  {" "}
                  <Badge
                    fontStyle="italic"
                    borderRadius="full"
                    paddingY={1}
                    paddingX={2}
                    colorScheme={Utils.getAccountStatus(account_status)}
                  >
                    {account_status}
                  </Badge>
                </Text>

              </HStack>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={<StackDivider borderColor="gray.200" />}>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color="blue.500"
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Corresponding Admin
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={1}>
                  <List spacing={2}>
                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Name of institution:
                      </Text>{' '}
                      {name_of_institution}
                    </ListItem>

                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Email:
                      </Text>{' '}
                      {email}
                    </ListItem>

                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Phone:
                      </Text>{' '}
                      {phone_number}
                    </ListItem>
                  </List>

                  <List spacing={2}>
                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Address:
                      </Text>{' '}
                      {address}
                    </ListItem>

                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Registration Number:
                      </Text>{' '}
                      {registration_number}
                    </ListItem>

                    <ListItem whiteSpace="nowrap">
                      <Text as={'span'} fontWeight={'bold'}>
                        Subscription Plan:
                      </Text>{' '}
                      {subscription_type}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color='blue.500'
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
                    {name_of_pharmacy}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Name of superintendent pharmacy:
                    </Text>{' '}
                    {name_of_superintendent_pharmacy}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Pharmacy email:
                    </Text>{' '}
                    {pharmacy_email}
                  </ListItem>

                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Pharmacy physical address:
                    </Text>{' '}
                    {pharmacy_physical_address}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Pharmacy phone:
                    </Text>{' '}
                    {pharmacy_phone}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Account name:
                    </Text>{' '}
                    {account_name}
                  </ListItem>

                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Account number:
                    </Text>{' '}
                    {account_number}
                  </ListItem>

                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bank name:
                    </Text>{' '}
                    {bank_name}
                  </ListItem>
                </List>
              </Box>
            </Stack>


            <Stack width="full">
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color="blue.500"
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Logistics Services
              </Text>

              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 5 }}
                width="full"
              >
                {logistics.map((logistic: any) => (
                  <LogisticItem
                    name={logistic.logistics_name}
                    imageUrl={logistic.logistics_image && logistic.logistics_image.imageUrl}
                  />
                ))}
              </SimpleGrid>
            </Stack>

          </Stack>

          <Flex height="full" width="full" marginY={10}>
            <DocumentViewer pdfLink={valid_document.imageUrl} />
          </Flex>
        </SimpleGrid>
      </Container>
    </SidebarWithHeader>
  );
}


export default PharmacistDetails;