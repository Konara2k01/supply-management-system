import "./availability.scss";
import DataTable from "../../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useDriverAssistant from "../../../hooks/useDriverAssistant";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },

  {
    field: "Name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "Type",
    type: "string",
    headerName: "Type",
    width: 100,
  },
  {
    field: "Store",
    type: "number",
    headerName: "Store",
    width: 200,
  },

  {
    field: "WorkHours",
    type: "string",
    headerName: "Worked Hours",
    width: 200,
  },
];

const Availability = () => {
  const { data: dA } = useDriverAssistant();
  console.log(dA);
  return (
    <div className="container">
      <div className="DA">
        <div className="table">
          {dA && dA.length > 0 ? (
            <DataTable slug="dA" columns={columns} rows={dA} />
          ) : (
            <p>No driver/Assistant available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
