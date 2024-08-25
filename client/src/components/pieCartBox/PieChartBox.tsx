import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import useStoreDetails from "../../hooks/useStoreDetails";

const PieChartBox = () => {
  const { data } = useStoreDetails();

  const stores = data?.sort((a, b) => b.totalIncome - a.totalIncome);

  const sortedData = [
    {
      name: stores?.[0]?.city,
      value: stores?.[0]?.totalIncome,
      color: "#0088FE",
    },
    {
      name: stores?.[1]?.city,
      value: stores?.[1]?.totalIncome,
      color: "#00C49F",
    },
    {
      name: stores?.[2]?.city,
      value: stores?.[2]?.totalIncome,
      color: "#FFBB28",
    },
    {
      name: stores?.[3]?.city,
      value: stores?.[3]?.totalIncome,
      color: "#FF8042",
    },
  ];

  return (
    <div className="pieChartBox">
      <h1>Best Selling Stores</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={sortedData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {sortedData?.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {sortedData?.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
