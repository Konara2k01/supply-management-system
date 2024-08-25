import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRUCKSCHEDULE } from "./constrains";
import truckServices, { TruckSchedule } from "../services/truckServices";

const useTruckSchedule = () => {
  return useQuery<TruckSchedule[], Error>({
    queryKey: CACHE_KEY_TRUCKSCHEDULE,
    queryFn: truckServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTruckSchedule;
