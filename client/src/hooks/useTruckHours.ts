import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRUCKHOURS } from "./constrains";
import { TruckHours, truckHours } from "../services/truckServices";

const useTruckHours = () => {
  return useQuery<TruckHours[], Error>({
    queryKey: CACHE_KEY_TRUCKHOURS,
    queryFn: truckHours.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTruckHours;
