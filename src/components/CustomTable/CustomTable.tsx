import { ChakraProps, Flex, Heading, Input, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import { Column, useTable } from "react-table";

type TableProps = {
  tableHeading: string;
  columns: Column<any>[];
  data: any[];
  tableProps?: ChakraProps;
};

const CustomTable = (props: TableProps) => {
  const { columns, data, tableProps, tableHeading } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Fragment>
      <Flex justifyContent="space-between">
        <Heading width="full" flexWrap="nowrap">{tableHeading}</Heading>

        <Input
          placeholder="Search..."
          value={""}
          onChange={(e) => console.log(e.target.value)}
          mb={4}
          borderRadius="full"
        />
      </Flex>

      <VStack align="stretch" spacing={4}>
        <Table {...getTableProps()} {...tableProps}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>
                      <Text>{cell.render("Cell")}</Text>
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </VStack>
    </Fragment>
  );
};

export default CustomTable;
