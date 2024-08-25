import "./emploees.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { getImg } from "../../data/data";
import useEmployees from "../../hooks/useEmployees";

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
    field: "Type",
    type: "string",
    headerName: "Customer Type",
    width: 200,
  },
  {
    field: "PhoneNumber",
    type: "string",
    headerName: "Contact",
    width: 200,
  },
];

const Products = () => {
  const { data: employees } = useEmployees();
  const rows = employees?.map((p) => ({
    ...p,
    img: getImg(p.id),
  }));
  console.log(employees);
  return (
    <div className="container">
      <div className="employees">
        <div className="table">
          {employees && employees.length > 0 ? (
            <DataTable slug="employees" columns={columns} rows={rows!} />
          ) : (
            <p>No employees available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
