import useDataFetch from "./useDataFetch";

interface Users {
  _id: string;
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string;
}

const useFetchUsers = () => useDataFetch<Users>("/users");

export default useFetchUsers;