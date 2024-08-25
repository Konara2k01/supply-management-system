import { useYearQuery } from "../store";
import useQuatarSales from "./useQuaterSales";

const useProductionCostPerQuatar = (quater: number) => {
  const { year } = useYearQuery();
  const sales = useQuatarSales(quater, year);
  return sales?.reduce((total, item) => total + item.ProductionCost, 0);
};

export default useProductionCostPerQuatar;
