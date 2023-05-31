import SidebarWithHeader from "../../../components/Layout/SidebarWithHeader/SidebarWithHeader"
import { Column } from "react-table";
import CustomTable from '../../../components/CustomTable/CustomTable';
import AppLoader from "../../../components/AppLoader/AppLoader";
import { useGetAllAdminsQuery } from "../../../services/super-admin/superAdmin";

interface IAdminData {
  email: string;
  name_of_institution: string;
  address: string;
  phone_number: string;
}

const tableColumns: Column<IAdminData>[] = [
  { Header: "Name Of Institution", accessor: "name_of_institution" },
  { Header: "Address", accessor: "address" },
  { Header: "Email", accessor: "email" },
  { Header: "Phone Number", accessor: "phone_number" },
];

const Admins = () => {
  const { data, isLoading, isError: error } = useGetAllAdminsQuery()
  // const { data, isLoading, error } = useFetchAdmin();

  if (isLoading) {
    return <AppLoader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <SidebarWithHeader>
      <CustomTable tableHeading="Register Admins" columns={tableColumns} data={data?.data} />
    </SidebarWithHeader>
  )
}

export default Admins