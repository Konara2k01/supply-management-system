const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3300;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nokia@2k01",
  database: "supplychain",
  port: 3307,
});

app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

app.get("/mostOrders", (req, res) => {
  const q =
    "call supplychain.item_with_most_orders('2023-01-01', '2024-01-01')";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`);
});
