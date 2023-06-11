import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetAdminsDetailsQuery } from '../../../services/super-admin/superAdmin';
import AppLoader from '../../../components/AppLoader/AppLoader';
import SidebarWithHeader from '../../../components/Layout/SidebarWithHeader/SidebarWithHeader';

const AdminDetails = () => {
  const { adminId } = useParams();
  const id = String(adminId);
  const { data, isLoading } = useGetAdminsDetailsQuery({ adminId: id });

  if (isLoading) {
    return <AppLoader />
  }

  if (!data?.data) {
    return <Text>Error fetching admin details</Text>
  }

  const {
    address,
    email,
    name_of_institution,
    phone_number,
    subscription_type,
    registration_number,
    profile_image,
    patient_records
  } = data.data;

  const profileImage = profile_image && profile_image.imageUrl;

  return (
    <SidebarWithHeader>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 40 }}
        >
          {profileImage && (
            <Image
              src={profileImage}
              width="full"
              height="full"
              borderRadius={10}
            />
          )}

          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={<StackDivider borderColor="gray.200" />}>
              <Box>
                <Box
                  bg="blue.500"
                  color="white"
                  paddingY={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={10}
                  marginBottom={5}
                >
                  <Text
                    fontWeight="semibold"
                  >
                    Total Patient Record: {" "} {patient_records.length}
                  </Text>
                </Box>

                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color="blue.500"
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Admin Details
                </Text>
                <SimpleGrid columns={{ base: 1, md: 1 }}>
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
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </SidebarWithHeader>
  );
}


export default AdminDetails;