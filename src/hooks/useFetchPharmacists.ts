import useDataFetch from "./useDataFetch";

interface IPharmacists {
  _id: string;
  nameOfInstitution: string;
  address: string;
  firstName: string;
  lastName: string;
  patients: any[];
}

const useFetchPharmacists = () => useDataFetch<IPharmacists>("/online-pharmacy/super-admin");

export default useFetchPharmacists;