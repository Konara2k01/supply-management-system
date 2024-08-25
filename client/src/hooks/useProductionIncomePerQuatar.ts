import { useYearQuery } from "../store";
import useQuatarSales from "./useQuaterSales";

const useProductionIncomePerQuatar = (quater: number) => {
  const { year } = useYearQuery();

  const sales = useQuatarSales(quater, year);
  return sales?.reduce((total, item) => total + item.ProductionIncome, 0);
};

export default useProductionIncomePerQuatar;
