import "./stores.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useStoreDetails from "../../hooks/useStoreDetails";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "city",
    type: "string",
    headerName: "City",
    width: 250,
  },
  {
    field: "address",
    type: "string",
    headerName: "Address",
    width: 250,
  },
  {
    field: "managerName",
    type: "string",
    headerName: "Manager",
    width: 200,
  },
  {
    field: "totalIncome",
    type: "number",
    headerName: "Income",
    width: 200,
  },
];

const Products = () => {
  const { data: stores } = useStoreDetails();
  return (
    <div className="container">
      <div className="stores">
        <div className="table">
          {stores && stores.length > 0 ? (
            <DataTable slug="stores" columns={columns} rows={stores} />
          ) : (
            <p>No stores available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
