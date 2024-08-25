const Joi = require("joi");
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const { citiesAndRoutes } = require("./dataRecreate.js");
const { quaterSales } = require("./dataRecreate.js");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nokia@2k01",
  database: "supplychain",
  port: 3307,
});

app.get("/mostOrders", (req, res) => {
  const q =
    "call supplychain.item_with_most_orders('2023-01-01', '2024-01-01')";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data[0]);
  });
});

app.get("/api/citiesRoutes", (req, res) => {
  const q =
    "call supplychain.cities_and_routes_sales('2023-01-01', '2024-01-01');";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred." });
    }
    return res.send(citiesAndRoutes(data[0], parseInt(req.query.StoreID, 10)));
  });
});

app.get("/api/employees", (req, res) => {
  const q = "SELECT * FROM supplychain.employee_details;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.get("/api/orderDetailsCompressed", (req, res) => {
  const q = "SELECT * FROM supplychain.orderdetails;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/products", (req, res) => {
  const q = "SELECT * FROM supplychain.products;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/stores", (req, res) => {
  const q = "SELECT * FROM supplychain.store_details;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/trainTrip", (req, res) => {
  const q = "SELECT * FROM supplychain.train_trip;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/truckSchedule", (req, res) => {
  const q = "SELECT * FROM supplychain.scheduledetails;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/turckHours", (req, res) => {
  const q = "SELECT * FROM supplychain.truck_used_hours;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/diverAssistant", (req, res) => {
  const q = "SELECT * FROM supplychain.driver_assistant_details;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});
app.get("/api/customers", (req, res) => {
  const q = "SELECT * FROM supplychain.customers;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.get("/api/annualSales", (req, res) => {
  const q = `call supplychain.annual_sales('${req.query.year}');`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(quaterSales(data[0], parseInt(req.query.quater, 10)));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}..`));
