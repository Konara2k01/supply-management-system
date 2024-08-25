import useAnnualSales from "../../../hooks/useAnnualSales";
import useProductionCostPerQuatar from "../../../hooks/useProductionCostPerQuatar";
import useProductionIncomePerQuatar from "../../../hooks/useProductionIncomePerQuatar";
import useProfitPerQuatar from "../../../hooks/useProfitPerQuatar";
import useSalesPerQuatar from "../../../hooks/useSalesPerQuatar";
import { useYearQuery } from "../../../store";

export const quatarSales = (quater: number) => {
  const { year } = useYearQuery();
  const { data: quatarSales, isLoading } = useAnnualSales({
    year: year,
    quater: quater,
  });

  console.log(quatarSales);

  return {
    img: "quaterReport.svg",
    title: `Quater ${
      quater === 1
        ? "One"
        : quater === 2
        ? "Two"
        : quater === 3
        ? "Three"
        : quater === 4
        ? "Four"
        : "invalid"
    }`,
    totalSales: useSalesPerQuatar(quater)!,
    data: quatarSales!,
    totalProducts: quatarSales?.length!,
    totalProductionCost: useProductionCostPerQuatar(quater)!,
    totalIncome: useProductionIncomePerQuatar(quater)!,
    totalProfit: useProfitPerQuatar(quater)!,
  };
};
