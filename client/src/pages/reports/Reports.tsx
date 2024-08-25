import { Outlet } from "react-router-dom";
import NavRibbon from "../../components/navRibbon/NavRibon";
import "./reports.scss";

const titles = [
  { id: 1, title: "Annual Sales", link: "/reports" },
  { id: 2, title: "Best Sales", link: "/reports/bestSales" },
  { id: 3, title: "Sales By Cities And Routes", link: "/reports/salesByCR" },
];

const Reports = () => {
  return (
    <div className="reports">
      <NavRibbon titles={titles} />
      <Outlet />
    </div>
  );
};

export default Reports;
