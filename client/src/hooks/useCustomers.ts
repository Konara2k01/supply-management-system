import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "./constrains";
import customerServices, { Customer } from "../services/customerServices";

const useEmployees = () => {
  return useQuery<Customer[], Error>({
    queryKey: CACHE_KEY_CUSTOMERS,
    queryFn: customerServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useEmployees;
