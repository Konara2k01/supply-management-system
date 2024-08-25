import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_Employee } from "./constrains";
import EmployeeServices, { Employee } from "../services/EmployeeServices";

const useEmployees = () => {
  return useQuery<Employee[], Error>({
    queryKey: CACHE_KEY_Employee,
    queryFn: EmployeeServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useEmployees;
