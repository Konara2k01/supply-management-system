import "./trucks.scss";
import DataTable from "../../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useTruckHours from "../../../hooks/useTruckHours";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },

  {
    field: "Store",
    type: "string",
    headerName: "Store",
    width: 300,
  },
  {
    field: "UsedHours",
    type: "string",
    headerName: "Used Hours",
    width: 300,
  },
];

const Availability = () => {
  const { data: truckHours } = useTruckHours();
  return (
    <div className="container">
      <div className="truckHours">
        <div className="table">
          {truckHours && truckHours.length > 0 ? (
            <DataTable slug="truckHours" columns={columns} rows={truckHours} />
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
