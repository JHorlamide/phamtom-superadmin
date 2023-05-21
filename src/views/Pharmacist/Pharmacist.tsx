import SidebarWithHeader from '../../components/Layout/SidebarWithHeader/SidebarWithHeader';
import CustomTable from '../../components/CustomTable/CustomTable';
import useFetchPharmacists from '../../hooks/useFetchPharmacists';
import AppLoader from '../../components/AppLoader/AppLoader';
import { tableColumns } from './TableColumns';

const Pharmacist = () => {
  const { data, error, isLoading } = useFetchPharmacists();

  if (isLoading) {
    return <AppLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <SidebarWithHeader>
      <CustomTable tableHeading="Registered Pharmacists" columns={tableColumns} data={data} />
    </SidebarWithHeader>
  )
}

export default Pharmacist