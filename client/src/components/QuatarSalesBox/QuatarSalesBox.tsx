import { Link } from "react-router-dom";
import "./quatarSalesBox.scss";

interface Props {
  img: string;
  title: string;
  totalSales: number;
  data: {
    Quarter: number;
    ProductID: number;
    ProductName: string;
    TotalSales: number;
    ProductionCost: number;
    ProductionIncome: number;
    Profit: number;
  }[];
  totalProducts: number;
  totalProductionCost: number;
  totalIncome: number;
  totalProfit: number;
}

const QuatarSalesBox = (props: Props) => {
  return (
    <div className="outerBox">
      <div className="quatarSalesBox">
        <div className="titleBox">
          <div className="title">
            <img src={props.img} alt="img" />
            <span className="title">{props.title}</span>
          </div>
          <div className="totalSalesTitle">
            <span className="sales">{props.totalSales}</span>
            <span className="text">Sales</span>
          </div>
        </div>
        <div className="salesList">
          <div className="header">
            <span className="product">Product</span>
            <span className="sales">Sales</span>
            <span className="hcost">Cost</span>
            <span className="income">Income</span>
            <span className="hprofit">Profit</span>
          </div>
          <div className="body">
            {props.data &&
              props.data.map((p) => (
                <Link key={p.ProductID} to="/products">
                  <div key={p.ProductID} className="itemList">
                    <span>{p.ProductName}</span>
                    <span>{p.TotalSales}</span>
                    <span className="cost">$ {p.ProductionCost}</span>
                    <span>$ {p.ProductionIncome}</span>
                    <span className="profit">$ {p.Profit}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="info">
          <span className="totalProducts">{props.totalProducts}</span>
          <span className="totalSales">{props.totalSales}</span>
          <span className="totalPCost cost">$ {props.totalProductionCost}</span>
          <span className="totalPIncome">$ {props.totalIncome}</span>
          <span className="totalProfit profit">
            <span>$ {props.totalProfit}</span>
            <img src="up.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuatarSalesBox;
