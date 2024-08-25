import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_ANNUALSALES } from "./constrains";
import annualSalesServices, { Sales } from "../services/annualSalesServices";

interface Params {
  year: number;
  quater: number;
}

const useAnnualSales = ({ year, quater }: Params) => {
  return useQuery<Sales[], Error>({
    queryKey: [CACHE_KEY_ANNUALSALES, year, quater],
    queryFn: () =>
      annualSalesServices.getAll({
        params: {
          year: year,
          quater: quater,
        },
      }),
    staleTime: 10 * 1000,
  });
};

export default useAnnualSales;
