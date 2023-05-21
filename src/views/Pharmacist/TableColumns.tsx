import { Fragment } from 'react';
import { Badge } from '@chakra-ui/react'
import { Column } from "react-table";
import Button from '../../components/CustomBtn/Button';

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

export const tableColumns: Column<IPharmacyData>[] = [
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
              paddingX={10}
              padding={2}
              width="full"
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
            >
              Approve
            </Button>
          }

        </Fragment>
      )
    }
  }
];
