import { Link } from "react-router-dom";
import List from "../../components/List/List";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import TrainBox from "../../components/trainBox/TrainBox";
import {
  chartBoxQuatarProductionCost,
  chartBoxQuatarProductionIncome,
  chartBoxQuatarProfit,
  chartBoxQuatarSales,
} from "./data";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Link to="/reports/bestSales">
          <TopBox />
        </Link>
      </div>
      <div className="box box2">
        <Link to="/reports">
          <ChartBox {...chartBoxQuatarSales()} />
        </Link>
      </div>
      <div className="box box3">
        <Link to="/reports">
          <ChartBox {...chartBoxQuatarProfit()} />
        </Link>
      </div>
      <div className="box box4">
        <Link to="/reports/salesByCR">
          <PieChartBox />
        </Link>
      </div>
      <div className="box box5">
        <Link to="/reports">
          <ChartBox {...chartBoxQuatarProductionCost()} />
        </Link>
      </div>
      <div className="box box6">
        <Link to="/reports">
          <ChartBox {...chartBoxQuatarProductionIncome()} />
        </Link>
      </div>
      <div className="box box7">
        <Link to="/reports">
          <BigChartBox />
        </Link>
      </div>
      <div className="box box8">
        <Link to="/employees">
          <List />
        </Link>
      </div>
      <div className="box box9">
        <Link to="/logistics">
          <TrainBox />
        </Link>
      </div>
    </div>
  );
};

export default Home;
