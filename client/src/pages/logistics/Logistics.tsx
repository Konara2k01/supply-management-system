import { Outlet } from "react-router-dom";
import NavRibon from "../../components/navRibbon/NavRibon";
import "./logistics.scss";

const titles = [
  { id: 1, title: "Train Schedule", link: "/logistics" },
  { id: 2, title: "Truck Schedule", link: "/logistics/truckSchedule" },
  { id: 3, title: "Drivers and Assistant", link: "/logistics/driverAssistant" },
  { id: 4, title: "Used Hours of Trucks", link: "/logistics/trucks" },
];

const Logistics = () => {
  return (
    <div className="logistics">
      <NavRibon titles={titles} />
      <Outlet />
    </div>
  );
};

export default Logistics;
