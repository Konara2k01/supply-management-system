import APIClient from "./api-client";

export interface Employee {
  id: number;
  name: string;
  address: string;
  Type: string;
  PhoneNumber: string;
}

export interface DriverAssistant {
  id: number;
  Name: string;
  Store: string;
  Type: string;
  WorkHours: number;
}

export const DAService = new APIClient<DriverAssistant>("/api/diverAssistant");

export default new APIClient<Employee>("/api/employees");
