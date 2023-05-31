import SidebarWithHeader from '../../../components/Layout/SidebarWithHeader/SidebarWithHeader';
import { Column } from "react-table";
import CustomTable from '../../../components/CustomTable/CustomTable';
// import useFetchUsers from '../../../hooks/useFetchUsers';
import AppLoader from '../../../components/AppLoader/AppLoader';
import { useGetAllUsersQuery } from '../../../services/super-admin/superAdmin';

interface IUserData {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

const tableColumns: Column<IUserData>[] = [
  { Header: "First Name", accessor: "first_name" },
  { Header: "Last Name", accessor: "last_name" },
  { Header: "Phone Number", accessor: "phone_number" },
  { Header: "Email", accessor: "email" },
];

const Users = () => {
  const { data, isLoading, isError: error } = useGetAllUsersQuery();
  // const { data, isLoading, error } = useFetchUsers();

  if (isLoading) {
    return <AppLoader />
  }

  if(error) {
    return <div>{error}</div>
  }

  return (
    <SidebarWithHeader>
      <CustomTable tableHeading="Registered Users" columns={tableColumns} data={data?.data} />
    </SidebarWithHeader>
  )
}

export default Users