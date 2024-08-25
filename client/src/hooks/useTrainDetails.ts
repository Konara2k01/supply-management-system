import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_Train } from "./constrains";
import trainServices, { TrainDetail } from "../services/trainServices";

const useTrainDetails = () => {
  return useQuery<TrainDetail[], Error>({
    queryKey: CACHE_KEY_Train,
    queryFn: trainServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTrainDetails;
