import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CITYROUTES } from "./constrains";
import citiesAndRoutesServices, {
  CityAndRoutes,
} from "../services/citiesAndRoutesServices";

interface Params {
  StoreID: number;
}

const useCityAndRoutes = (p: Params) => {
  return useQuery<CityAndRoutes[], Error>({
    queryKey: [CACHE_KEY_CITYROUTES, p],
    queryFn: () =>
      citiesAndRoutesServices.getAll({
        params: {
          StoreID: p.StoreID,
        },
      }),

    staleTime: 10 * 1000,
  });
};

export default useCityAndRoutes;
