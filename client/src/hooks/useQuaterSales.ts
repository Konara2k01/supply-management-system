import useAnnualSales from "./useAnnualSales";

const useQuatarSales = (quatar: number, year: number) => {
  const { data: sales } = useAnnualSales({ quater: quatar, year: year });
  return sales;
};

export default useQuatarSales;
