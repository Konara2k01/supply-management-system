import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_STORES } from "./constrains";
import storeDetailsServices, {
  StoreDetails,
} from "../services/storeDetailsServices";

const useStoreDetails = () => {
  return useQuery<StoreDetails[], Error>({
    queryKey: CACHE_KEY_STORES,
    queryFn: storeDetailsServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useStoreDetails;
