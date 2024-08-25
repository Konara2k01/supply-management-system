import APIClient from "./api-client";

export interface Sales {
  Quarter: number;
  ProductID: number;
  ProductName: string;
  TotalSales: number;
  ProductionCost: number;
  ProductionIncome: number;
  Profit: number;
}

export default new APIClient<Sales>("/api/annualSales");
