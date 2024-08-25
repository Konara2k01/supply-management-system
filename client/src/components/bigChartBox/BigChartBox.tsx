import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";
import useSalesPerQuatar from "../../hooks/useSalesPerQuatar";
import useProductionCostPerQuatar from "../../hooks/useProductionCostPerQuatar";
import useProductionIncomePerQuatar from "../../hooks/useProductionIncomePerQuatar";
import useProfitPerQuatar from "../../hooks/useProfitPerQuatar";

const BigChartBox = () => {
  const data = [
    {
      name: "first Quatar",
      sales: useSalesPerQuatar(1),
      productionCost: useProductionCostPerQuatar(1),
      profit: useProfitPerQuatar(1),
      income: useProductionIncomePerQuatar(1),
    },
    {
      name: "second Quatar",
      sales: useSalesPerQuatar(2),
      productionCost: useProductionCostPerQuatar(2),
      profit: useProfitPerQuatar(2),
      income: useProductionIncomePerQuatar(2),
    },
    {
      name: "third Quatar",
      sales: useSalesPerQuatar(3),
      productionCost: useProductionCostPerQuatar(3),
      profit: useProfitPerQuatar(3),
      income: useProductionIncomePerQuatar(3),
    },
    {
      name: "fourth Quatar",
      sales: useSalesPerQuatar(4),
      productionCost: useProductionCostPerQuatar(4),
      profit: useProfitPerQuatar(4),
      income: useProductionIncomePerQuatar(4),
    },
  ];

  return (
    <div className="bigChartBox">
      <h1>Total Analysis</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="productionCost"
              stackId="1"
              stroke="#CD5C5C"
              fill="#CD5C5C"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stackId="1"
              stroke="#47f5f5"
              fill="#47f5f5"
            />
            <Area
              type="monotone"
              dataKey="income"
              stackId="1"
              stroke="gold"
              fill="gold"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
