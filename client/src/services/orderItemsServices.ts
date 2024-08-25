import APIClient from "./api-client";

export interface OrderItem {
  ProductID: number;
  ProductName: string;
  Quantity: number;
}

export default new APIClient<OrderItem>("/mostOrders");
