import SidebarWithHeader from '../../../components/Layout/SidebarWithHeader/SidebarWithHeader';
import CustomTable from '../../../components/CustomTable/CustomTable';
// import useFetchPharmacists from '../../../hooks/useFetchPharmacists';
import AppLoader from '../../../components/AppLoader/AppLoader';
import { Fragment } from 'react';
import { Badge } from '@chakra-ui/react'
import { Column } from "react-table";
import Button from '../../../components/CustomBtn/Button';
import { toast } from 'react-hot-toast';
import { useApprovePharmacyMutation, useGetAllPharmaciesQuery } from '../../../services/super-admin/superAdmin';

interface IPharmacyData {
  admin_id: string;
  name_of_pharmacy: string;
  name_of_superintendent_pharmacy: string;
  pharmacy_email: string;
  pharmacy_phone: string;
  account_status: string;
  is_verified: boolean
}

const accountStatus = (status: string) => {
  switch (status) {
    case "APPROVED":
      return "green"
    case "PENDING":
      return "blue"
    default:
      return "red"
  }
}

const Pharmacist = () => {
  const { data, isLoading, isError: error } = useGetAllPharmaciesQuery();
  const [approvePharmacy, { isLoading: isLoadingApprove }] = useApprovePharmacyMutation();

  if (data && data?.data) {
    console.log({ RES: data?.data });
  }

  const tableColumns: Column<IPharmacyData>[] = [
    { Header: "Pharmacy Name", accessor: "name_of_pharmacy" },
    { Header: "Superintendent Pharmacy", accessor: "name_of_superintendent_pharmacy" },
    { Header: "Email", accessor: "pharmacy_email" },
    { Header: "Phone", accessor: "pharmacy_phone" },
    {
      Header: "Status",
      accessor: "account_status",
      Cell: ({ value }) => {
        return (
          <Badge
            padding={2}
            borderRadius="full"
            width="full"
            textAlign="center"
            colorScheme={accountStatus(value)}
          >
            {value}
          </Badge>
        )
      }
    },
    {
      Header: "Action",
      accessor: "is_verified",
      Cell: ({ row: { original } }) => {
        return (
          <Fragment>
            {original.is_verified ?
              <Button
                paddingX={10}
                padding={2}
                width="full"
                isLoading={isLoadingApprove}
                borderRadius="full"
                bg="red.500"
                color="white"
                _hover={{
                  bg: "red.500"
                }}
              >
                Disable
              </Button>
              :
              <Button
                paddingX={10}
                padding={2}
                width="full"
                borderRadius="full"
                bg="blue.500"
                color="white"
                _hover={{
                  bg: "blue.500"
                }}
                onClick={() => approveAccount(original.admin_id)}
              >
                Approve
              </Button>
            }

          </Fragment>
        )
      }
    }
  ];

  const approveAccount = async (adminId: string) => {
    try {
      const response = await approvePharmacy({ adminId }).unwrap();
      const { data } = response;

      if (data.status === "Success") {
        toast.success("Pharmacy Approved");
        return;
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  if (!data) {
    return null
  }

  return (
    <SidebarWithHeader>
      {isLoading && <AppLoader />}
      {error && <div>{error}</div>}
      <CustomTable tableHeading="Registered Pharmacists" columns={tableColumns} data={data.data} />
    </SidebarWithHeader>
  )
}

export default Pharmacist