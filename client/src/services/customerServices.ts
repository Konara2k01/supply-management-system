import APIClient from "./api-client";

export interface Customer {
  id: number;
  name: string;
  address: string;
  Type: string;
}

export default new APIClient<Customer>("/api/customers");
