import APIClient from "./api-client";

export interface CityAndRoutes {
  city: string;
  StoreID: number;
  Routes: {
    RouteID: number;
    RouteName: string;
    ProductID: number;
    ProductName: string;
    Quantity: number;
  }[];
}

export default new APIClient<CityAndRoutes>("/api/citiesRoutes");
