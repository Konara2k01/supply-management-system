import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CORDER } from "./constrains";
import customerServices, { Customer } from "../services/customerServices";
import {
  cOrders,
  compressedOrderDetailsServices,
} from "../services/orderDetailsServices";

const compressedOrderDetails = () => {
  return useQuery<cOrders[], Error>({
    queryKey: CACHE_KEY_CORDER,
    queryFn: compressedOrderDetailsServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default compressedOrderDetails;
