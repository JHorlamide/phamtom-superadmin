import SidebarWithHeader from "../../../components/Layout/SidebarWithHeader/SidebarWithHeader"
import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { useGetStatsQuery } from "../../../services/super-admin/superAdmin";
import AppLoader from "../../../components/AppLoader/AppLoader";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  isLoading?: boolean;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, isLoading } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>

          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {isLoading ? <AppLoader /> : stat}
          </StatNumber>
        </Box>

        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const DashBoard = () => {
  const { data, isLoading } = useGetStatsQuery();

  if (!data?.data) {
    return <AppLoader />
  }


  return (
    <SidebarWithHeader>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Registered Users'}
            stat={`${data.data.totalUsers}`}
            icon={<BsPerson size={'3em'} />}
          />

          <StatsCard
            isLoading={isLoading}
            title={'Registered Admins'}
            stat={`${data.data.totalAdmins}`}
            icon={<FiServer size={'3em'} />}
          />

          <StatsCard
            isLoading={isLoading}
            title={'Total Patient Record'}
            stat={`${data.data.totalPatientRecord}`}
            icon={<GoLocation size={'3em'} />}
          />

          <StatsCard
            isLoading={isLoading}
            title={'Approved Pharmacists'}
            stat={`${data.data.totalPharmacy.totalApprovedPharmacy}`}
            icon={<GoLocation size={'3em'} />}
          />

          <StatsCard
            isLoading={isLoading}
            title={'Registered Pharmacists'}
            stat={`${data.data.totalPharmacy.totalPharmacy}`}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </SidebarWithHeader>
  )
}

export default DashBoard
