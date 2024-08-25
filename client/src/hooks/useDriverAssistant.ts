import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_DA } from "./constrains";
import { DriverAssistant, DAService } from "../services/EmployeeServices";

const useDriverAssistant = () => {
  return useQuery<DriverAssistant[], Error>({
    queryKey: CACHE_KEY_DA,
    queryFn: DAService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useDriverAssistant;
