import React from "react";
import BigBlockList from "../../../components/bigBlockList/BigBlockList";
import useAnnualSales from "../../../hooks/useAnnualSales";
import { useYearQuery } from "../../../store";

const BestSales = () => {
  const { data: inputData } = useAnnualSales({
    quater: 0,
    year: new Date().getFullYear(),
  });

  const aggregatedData: Record<
    number,
    {
      productID: number;
      productName: string;
      totalSales: number;
      totalProductionCost: number;
      totalIncome: number;
      totalProfit: number;
      quatar: number[];
    }
  > = {};

  inputData?.forEach((item) => {
    const {
      ProductID,
      ProductName,
      TotalSales,
      ProductionCost,
      ProductionIncome,
      Profit,
      Quarter,
    } = item;

    // Initialize or update the object for the product based on ProductID
    if (!aggregatedData[ProductID]) {
      aggregatedData[ProductID] = {
        productID: ProductID,
        productName: ProductName,
        totalSales: 0,
        totalProductionCost: 0,
        totalIncome: 0,
        totalProfit: 0,
        quatar: [0, 0, 0, 0],
      };
    }

    // Update the aggregated values
    const product = aggregatedData[ProductID];
    product.totalSales += TotalSales;
    product.totalProductionCost += ProductionCost;
    product.totalIncome += ProductionIncome;
    product.totalProfit += Profit;
    product.quatar[Quarter - 1] += TotalSales;
  });

  const outputArray = Object.values(aggregatedData);

  outputArray.sort((a, b) => b.totalSales - a.totalSales);
  const data = { products: outputArray };
  console.log(outputArray);

  return (
    <div>
      <BigBlockList {...data} />
    </div>
  );
};

export default BestSales;
