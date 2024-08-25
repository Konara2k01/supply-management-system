import { useYearQuery } from "../store";
import useQuatarSales from "./useQuaterSales";

const useSalesPerQuatar = (quater: number) => {
  const { year } = useYearQuery();
  const sales = useQuatarSales(quater, year);
  return sales?.reduce((total, item) => total + item.TotalSales, 0);
};

export default useSalesPerQuatar;
