import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { getImg } from "../../data/data";
import "./bigBlockList.scss";

interface Props {
  products: {
    productID: number;
    productName: string;
    quatar: number[];
    totalIncome: number;
    totalProductionCost: number;
    totalProfit: number;
    totalSales: number;
  }[];
}

const BigBlockList = ({ products }: Props) => {
  return (
    <div id="container">
      {products?.map((p) => (
        <div key={p.productID} id="ListItem">
          <div id="head">
            <div id="hInfo">
              <div id="nameID">
                <img src={`/${getImg(p.productID)}`} alt="" className="img" />
                <div className="nameInfo">
                  <span className="name">{p.productName}</span>
                  <span id="pid">{p.productID}</span>
                </div>
              </div>
              <div id="sales">
                <span id="noSales">{p.totalSales}</span>
                <span id="salesText">sales</span>
              </div>
            </div>
          </div>
          <div className="listItemBody">
            <div className="bodyInfo">
              <div className="income">Income: ${p.totalIncome}</div>
              <div id="cost">
                <span className="costText">Cost: ${p.totalProductionCost}</span>
                <img src="/down.svg" alt="cimg" className="costImg" />
              </div>
              <div id="profit">
                <span className="profitText">Profit: ${p.totalProfit}</span>
                <img src="/up.svg" alt="pimg" className="profitImg" />
              </div>
            </div>
            <div id="graph">
              <ResponsiveContainer width="99%" height={100}>
                <BarChart
                  data={[
                    { name: "Q1", sales: p.quatar[0] },
                    { name: "Q2", sales: p.quatar[1] },
                    { name: "Q3", sales: p.quatar[2] },
                    { name: "Q4", sales: p.quatar[3] },
                  ]}
                >
                  <Tooltip
                    contentStyle={{
                      background: "#2a3447",
                      borderRadius: "5px",
                    }}
                    labelStyle={{ display: "none" }}
                    cursor={{ fill: "none" }}
                  />
                  <Bar dataKey="sales" fill="aliceBlue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BigBlockList;
