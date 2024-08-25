import APIClient from "./api-client";

export interface cOrders {
  id: number;
  ProductName: string;
  CustomerName: string;
  OrderDate: Date;
  DeliveryDate: Date;
  StoreID: number;
  State: string;
}

export interface fOrders {
  id: number;
  ProductName: string;
  CustomerName: string;
  OrderDate: Date;
  DeliveryDate: Date;
  StoreID: number;
  State: string;
}

export const compressedOrderDetailsServices = new APIClient<cOrders>(
  "/api/orderDetailsCompressed"
);
