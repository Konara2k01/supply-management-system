import useProductionCostPerQuatar from "../../hooks/useProductionCostPerQuatar";
import useProductionIncomePerQuatar from "../../hooks/useProductionIncomePerQuatar";
import useProfitPerQuatar from "../../hooks/useProfitPerQuatar";
import useSalesPerQuatar from "../../hooks/useSalesPerQuatar";

const growthRate = (start: number, end: number) =>
  parseFloat((((end - start) / start) * 100).toFixed(2));

export const chartBoxQuatarSales = () => {
  const quatar1 = useSalesPerQuatar(1);
  const quatar2 = useSalesPerQuatar(2);
  const quatar3 = useSalesPerQuatar(3);
  const quatar4 = useSalesPerQuatar(4);
  const total = quatar1! + quatar2! + quatar3! + quatar4!;

  return {
    color: "#8884d8",
    icon: "/sales.svg",
    title: "Sales",
    desc: "Total Sales",
    number: `${total}`,
    dataKey: "sales",
    percentage: growthRate(quatar1!, quatar4!),
    chartData: [
      { quatar: "1", sales: quatar1 },
      { quatar: "2", sales: quatar2 },
      { quatar: "3", sales: quatar3 },
      { quatar: "4", sales: quatar4 },
    ],
  };
};

export const chartBoxQuatarProfit = () => {
  const quatar1 = useProfitPerQuatar(1);
  const quatar2 = useProfitPerQuatar(2);
  const quatar3 = useProfitPerQuatar(3);
  const quatar4 = useProfitPerQuatar(4);

  const total = quatar1! + quatar2! + quatar3! + quatar4!;

  return {
    color: "skyblue",
    icon: "/profit.svg",
    title: "Profit",
    desc: "Total Profit",
    number: `$${total}`,
    dataKey: "profit",
    percentage: growthRate(quatar1!, quatar4!),
    chartData: [
      { quatar: "1", profit: quatar1 },
      { quatar: "2", profit: quatar2 },
      { quatar: "3", profit: quatar3 },
      { quatar: "4", profit: quatar4 },
    ],
  };
};

export const chartBoxQuatarProductionCost = () => {
  const quatar1 = useProductionCostPerQuatar(1);
  const quatar2 = useProductionCostPerQuatar(2);
  const quatar3 = useProductionCostPerQuatar(3);
  const quatar4 = useProductionCostPerQuatar(4);

  const total = quatar1! + quatar2! + quatar3! + quatar4!;

  return {
    color: "teal",
    icon: "/productionCost.svg",
    title: "Production Cost",
    desc: "Total Cost",
    number: `$${total}`,
    dataKey: "cost",
    percentage: growthRate(quatar1!, quatar4!),
    chartData: [
      { quatar: "1", cost: quatar1 },
      { quatar: "2", cost: quatar2 },
      { quatar: "3", cost: quatar3 },
      { quatar: "4", cost: quatar4 },
    ],
  };
};

export const chartBoxQuatarProductionIncome = () => {
  const quatar1 = useProductionIncomePerQuatar(1);
  const quatar2 = useProductionIncomePerQuatar(2);
  const quatar3 = useProductionIncomePerQuatar(3);
  const quatar4 = useProductionIncomePerQuatar(4);

  const total = quatar1! + quatar2! + quatar3! + quatar4!;

  return {
    color: "gold",
    icon: "/income.svg",
    title: "Income",
    desc: "Total Income",
    number: `$${total}`,
    dataKey: "income",
    percentage: growthRate(quatar1!, quatar4!),
    chartData: [
      { quatar: "1", income: quatar1 },
      { quatar: "2", income: quatar2 },
      { quatar: "3", income: quatar3 },
      { quatar: "4", income: quatar4 },
    ],
  };
};
