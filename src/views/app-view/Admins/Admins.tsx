import SidebarWithHeader from "../../../components/Layout/SidebarWithHeader/SidebarWithHeader"
import { Column } from "react-table";
import CustomTable from '../../../components/CustomTable/CustomTable';
import AppLoader from "../../../components/AppLoader/AppLoader";
import { useGetAllAdminsQuery } from "../../../services/super-admin/superAdmin";
import useNavigation from "../../../hooks/useNavigation";
import { APP_PREFIX_PATH } from "../../../config/AppConfig";

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
  const { handleNavigate } = useNavigation();
  const { data, isLoading, isError: error } = useGetAllAdminsQuery()

  if (isLoading) {
    return <AppLoader />
  }

  if (error) {
    return <div>{error}</div>
  }

  const handleRowClick = (rowData: any) => {
    const { _id } = rowData;
    handleNavigate(`${APP_PREFIX_PATH}/admins/${_id}`);
  };

  return (
    <SidebarWithHeader>
      <CustomTable
        tableHeading="Register Admins"
        columns={tableColumns}
        data={data?.data}
        onRowClick={(rowData) => handleRowClick(rowData)}
      />
    </SidebarWithHeader>
  )
}

export default Admins