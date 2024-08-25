import APIClient from "./api-client";

export interface TruckSchedule {
  id: number;
  TruckID: number;
  truckUsedHours: number;
  Driver: string;
  Assistant: string;
  StoreInfo: string;
  Date: Date;
  RouteName: string;
}

export interface TruckHours {
  id: number;
  Store: string;
  UsedHours: number;
}

export const truckHours = new APIClient<TruckHours>("/api/turckHours");

export default new APIClient<TruckSchedule>("/api/truckSchedule");
