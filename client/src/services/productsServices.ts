import APIClient from "./api-client";

export interface Product {
  id: number;
  name: string;
  capacityConsumption: number;
  description: string;
  price: number;
  productionCost: number;
}

export default new APIClient<Product>("/api/products");
