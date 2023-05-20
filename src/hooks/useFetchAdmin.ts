import useDataFetch from "./useDataFetch";

interface IAdmin {
  _id: string;
  nameOfInstitution: string;
  address: string;
  firstName: string;
  lastName: string;
  patients: any[];
}

const useFetchAdmin = () => useDataFetch<IAdmin>("/admins");

export default useFetchAdmin;