import "./topBox.scss";
import useMostOrders from "../../hooks/useMostOrders";
import { getImg } from "../../data/data";

const TopBox = () => {
  const { data: topProducts, error } = useMostOrders();
  return (
    <div className="topBox">
      <h1>Top Products</h1>
      <div className="list">
        {topProducts?.map((product) => (
          <div className="listItem" key={product.ProductID}>
            <div className="product">
              <img src={getImg(product.ProductID)} alt={product.ProductName} />
              <div className="userTexts">
                <span className="productName">{product.ProductName}</span>
              </div>
            </div>
            <span className="quantity">{product.Quantity} Sales</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
