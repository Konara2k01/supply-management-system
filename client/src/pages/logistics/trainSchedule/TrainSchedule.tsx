import "./trainSchedule.scss";
import DataTable from "../../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useTrainDetails from "../../../hooks/useTrainDetails";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "DepartureCity",
    type: "string",
    headerName: "Departure City",
    width: 200,
  },
  {
    field: "DepartureTime",
    type: "date",
    headerName: "Departure Time",
    width: 200,
    valueGetter: (params) => {
      return new Date(params.row.DepartureTime);
    },
  },
  {
    field: "ArrivalCity",
    type: "string",
    headerName: "Arrival City",
    width: 200,
  },
  {
    field: "ArrivalTime",
    type: "date",
    headerName: "Arrival Time",
    width: 200,
    valueGetter: (params) => {
      return new Date(params.row.ArrivalTime);
    },
  },
  {
    field: "Capacity",
    type: "string",
    headerName: "Capacity",
    width: 200,
  },
];

const Products = () => {
  const { data: trains } = useTrainDetails();
  console.log(trains);
  return (
    <div className="container">
      <div className="trainSchedule">
        <div className="table">
          {trains && trains.length > 0 ? (
            <DataTable slug="trains" columns={columns} rows={trains} />
          ) : (
            <p>No trains available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
