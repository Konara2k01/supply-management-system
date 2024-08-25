import { useYearQuery } from "../store";
import useQuatarSales from "./useQuaterSales";

const useProfitPerQuatar = (quater: number) => {
  const { year } = useYearQuery();

  const sales = useQuatarSales(quater, year);
  return sales?.reduce((total, item) => total + item.Profit, 0);
};

export default useProfitPerQuatar;
