import APIClient from "./api-client";

export interface TrainDetail {
  id: number;
  DepartureCity: string;
  ArrivalCity: string;
  DepartureTime: Date;
  ArrivalTime: Date;
  Capacity: number;
}

export default new APIClient<TrainDetail>("/api/trainTrip");
