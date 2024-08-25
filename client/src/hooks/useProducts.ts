import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PRODUCTS } from "./constrains";
import productsServices, { Product } from "../services/productsServices";

const useTrainDetails = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: productsServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTrainDetails;
