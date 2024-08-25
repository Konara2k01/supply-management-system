import "./customers.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { getImg } from "../../data/data";
import useCustomers from "../../hooks/useCustomers";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row?.img || "/noavatar.png"}
          alt=""
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
      );
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "address",
    type: "number",
    headerName: "Address",
    width: 200,
  },
  {
    field: "type",
    type: "string",
    headerName: "Customer Type",
    width: 200,
  },
];

const Products = () => {
  const { data: customers } = useCustomers();
  const rows = customers?.map((p) => ({
    ...p,
    img: getImg(p.id),
  }));
  console.log(customers);
  return (
    <div className="container">
      <div className="customers">
        <div className="table">
          {customers && customers.length > 0 ? (
            <DataTable slug="customers" columns={columns} rows={rows!} />
          ) : (
            <p>No customers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
