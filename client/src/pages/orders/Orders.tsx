import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import useCompressedOrderDetails from "../../hooks/useCompressedOrderDetails";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 90 },
  {
    field: "ProductName",
    type: "string",
    headerName: "Product",
    width: 100,
  },
  {
    field: "CustomerName",
    type: "string",
    headerName: "Customer",
    width: 200,
    renderCell: (params) => <Link to={`/customers`}>{params.value}</Link>,
  },
  {
    field: "OrderDate",
    type: "date",
    headerName: "Order Date",
    width: 200,
    valueGetter: (params) => {
      return new Date(params.row.OrderDate);
    },
  },
  {
    field: "DeliveryDate",
    type: "date",
    headerName: "Delivery Date",
    width: 200,
    valueGetter: (params) => {
      return new Date(params.row.DeliveryDate);
    },
  },
  {
    field: "StoreID",
    type: "number",
    headerName: "Store",
    width: 100,
    renderCell: (params) => <Link to={`/stores`}>{params.value}</Link>,
  },
  {
    field: "State",
    type: "string",
    headerName: "State",
    width: 100,
    renderCell: (params) => {
      const state = params.value as string;
      let className = "";
      if (state === "Overdue") {
        className = "overdue";
      } else if (state === "Shipped") {
        className = "shipped";
      } else if (state === "Pending") {
        className = "pending";
      }
      return <div className={className}>{state}</div>;
    },
  },
];

const Products = () => {
  const { data: orders } = useCompressedOrderDetails();
  const rows = orders?.map((p) => ({
    ...p,
  }));
  console.log(orders);
  return (
    <div className="container">
      <div className="orders">
        <div className="table">
          {orders && orders.length > 0 ? (
            <DataTable slug="orders" columns={columns} rows={rows!} />
          ) : (
            <p>No orders available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
