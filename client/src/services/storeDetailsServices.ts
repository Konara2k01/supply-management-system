import APIClient from "./api-client";

export interface StoreDetails {
  id: number;
  city: string;
  address: string;
  managerID: number;
  managerName: string;
  totalIncome: number;
}

export default new APIClient<StoreDetails>("/api/stores");
