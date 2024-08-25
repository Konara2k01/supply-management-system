import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import useProducts from "../../hooks/useProducts";
import { getImg } from "../../data/data";

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
    headerName: "Product",
    width: 150,
  },
  {
    field: "capacityComsumption",
    type: "number",
    headerName: "capacity Consumption",
    width: 200,
  },
  {
    field: "description",
    type: "string",
    headerName: "Description",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 100,
  },
  {
    field: "productionCost",
    headerName: "Production Cost",
    width: 160,
    type: "number",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const { data: products } = useProducts();
  const rows = products?.map((p) => ({
    ...p,
    img: getImg(p.id),
  }));
  console.log(products);
  return (
    <div className="container">
      <div className="products">
        <div className="table">
          {products && products.length > 0 ? ( // Check if products is defined and not empty
            <DataTable slug="products" columns={columns} rows={rows!} />
          ) : (
            <p>No products available.</p> // Display a message when there are no products
          )}
        </div>
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Products;
