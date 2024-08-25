import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_MOSTORDERS } from "./constrains";
import orderItemsServices, { OrderItem } from "../services/orderItemsServices";

const useMostOrders = () => {
  return useQuery<OrderItem[], Error>({
    queryKey: CACHE_KEY_MOSTORDERS,
    queryFn: orderItemsServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useMostOrders;
