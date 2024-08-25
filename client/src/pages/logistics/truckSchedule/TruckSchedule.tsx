import "./truckSchedule.scss";
import DataTable from "../../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useTruckSchedule from "../../../hooks/useTruckSchedule";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "TruckID",
    type: "string",
    headerName: "Truck ID",
    width: 100,
  },
  {
    field: "truckUsedHours",
    type: "number",
    headerName: "Truck Hours",
    width: 100,
  },
  {
    field: "Driver",
    type: "string",
    headerName: "Driver",
    width: 200,
  },
  {
    field: "Assistant",
    type: "string",
    headerName: "Assistant",
    width: 200,
  },
  {
    field: "Date",
    type: "date",
    headerName: "Date",
    width: 200,
    valueGetter: (params) => {
      return new Date(params.row.Date);
    },
  },
  {
    field: "RouteName",
    type: "string",
    headerName: "RouteName",
    width: 100,
  },
];

const TruckSchedule = () => {
  const { data: trucks } = useTruckSchedule();
  console.log(trucks);
  return (
    <div className="container">
      <div className="truckSchedule">
        <div className="table">
          {trucks && trucks.length > 0 ? (
            <DataTable slug="trucks" columns={columns} rows={trucks} />
          ) : (
            <p>No trucks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TruckSchedule;
