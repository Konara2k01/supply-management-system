import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";
import Stores from "./pages/stores/Stores";
import Logistics from "./pages/logistics/Logistics";
import Reports from "./pages/reports/Reports";
import Customers from "./pages/customers/Customers";
import Employees from "./pages/employees/Employees";
import TrainSchedule from "./pages/logistics/trainSchedule/TrainSchedule";
import TruckSchedule from "./pages/logistics/truckSchedule/TruckSchedule";
import Availability from "./pages/logistics/availability/Availability";
import Trucks from "./pages/logistics/Trucks/Trucks";
import AnnualReport from "./pages/reports/annualReport/AnnualReport";
import BestSales from "./pages/reports/bestSales/BestSales";
import SalesByCR from "./pages/reports/salesByCitiesAndRoutes/SalesByCR";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/customers", element: <Customers /> },
      { path: "/orders", element: <Orders /> },
      { path: "/products", element: <Products /> },
      { path: "/employees", element: <Employees /> },
      { path: "/stores", element: <Stores /> },
      {
        path: "/logistics",
        element: <Logistics />,
        children: [
          { index: true, element: <TrainSchedule /> },
          { path: "/logistics/truckSchedule", element: <TruckSchedule /> },
          { path: "/logistics/driverAssistant", element: <Availability /> },
          { path: "/logistics/trucks", element: <Trucks /> },
        ],
      },
      {
        path: "/reports",
        element: <Reports />,
        children: [
          { index: true, element: <AnnualReport /> },
          { path: "/reports/bestSales", element: <BestSales /> },
          { path: "/reports/salesByCR", element: <SalesByCR /> },
        ],
      },
    ],
  },
]);

export default router;
