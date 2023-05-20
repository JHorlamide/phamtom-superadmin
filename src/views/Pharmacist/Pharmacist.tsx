import { Badge, Button } from '@chakra-ui/react'
import SidebarWithHeader from '../../components/Layout/SidebarWithHeader/SidebarWithHeader';
import { Column } from "react-table";
import CustomTable from '../../components/CustomTable/CustomTable';
import useFetchPharmacists from '../../hooks/useFetchPharmacists';
import AppLoader from '../../components/AppLoader/AppLoader';
import { Fragment } from 'react';

interface IPharmacyData {
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
  const { data, error, isLoading } = useFetchPharmacists();

  // Example columns
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
      Cell: ({ value }) => {
        return (
          <Fragment>
            {value ?
              <Button
                paddingX={3}
                padding={2} borderRadius="full"
              >
                Disable
              </Button>
              :
              <Button
                paddingX={3}
                padding={2} borderRadius="full"
              >
                Approve
              </Button>
            }

          </Fragment>
        )
      }
    }
  ];

  if (isLoading) {
    return <AppLoader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <SidebarWithHeader>
      <CustomTable tableHeading="Registered Pharmacists" columns={tableColumns} data={data} />
    </SidebarWithHeader>
  )
}

export default Pharmacist