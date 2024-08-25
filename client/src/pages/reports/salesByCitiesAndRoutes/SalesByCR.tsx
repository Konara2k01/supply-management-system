import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import "./salesbyCR.scss";
import { Outlet } from "react-router-dom";
import useCityAndRoutes from "../../../hooks/usecCityAndRoutes";
import { useState } from "react";

const cities = [
  { id: 300, city: "Colombo", routes: [1, 6] },
  { id: 301, city: "Badulla", routes: [2, 7] },
  { id: 302, city: "Galle", routes: [4, 8] },
  { id: 303, city: "Rathnapura", routes: [5, 10] },
  { id: 304, city: "Negombo", routes: [3, 9] },
];

const SalesByCR = () => {
  const [cityID, setCityID] = useState(300);
  const [route, setRoute] = useState(Number(1));

  const {
    data: city,
    isLoading,
    isError,
  } = useCityAndRoutes({ StoreID: cityID });

  while (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: Unable to fetch data.</div>;
  }

  const currentCity = city![0];
  const currentProducts = currentCity.Routes;
  const currentRoutes = cities.find(
    (c) => c.id === currentCity.StoreID
  )?.routes;

  return (
    <div className="salesByCR">
      <Grid
        width="100%"
        templateAreas={`"null nav nav nav" "side body body body"`}
        templateColumns={"1fr 1fr 1fr 1fr"}
      >
        <GridItem area="nav" height="100%">
          <div className="nav">
            {currentRoutes &&
              currentRoutes.map((id) => (
                <div
                  className="route"
                  key={id}
                  onClick={() => setRoute(id)}
                  style={{
                    fontWeight: id === route ? "bold" : "normal",
                    fontSize: id === route ? "110%" : "100%",
                  }}
                >
                  {`Route ${id}`}
                </div>
              ))}
          </div>
        </GridItem>
        <GridItem area="side">
          <div className="side">
            {cities &&
              cities.map((d) => (
                <div
                  key={d.id}
                  className="city"
                  onClick={() => {
                    setCityID(d.id);
                    setRoute(d.routes[0]);
                  }}
                  style={{
                    fontWeight: d.id === cityID ? "bold" : "normal",
                    fontSize: d.id === cityID ? "110%" : "100%",
                  }}
                >
                  {d.city}
                </div>
              ))}
          </div>
        </GridItem>
        <GridItem area="body">
          <div className="routes">
            <div className="routesHeader">
              <span className="headerItem">Product ID</span>
              <span className="headerItem">Product</span>
              <span className="headerItem">Sales</span>
            </div>
            {currentProducts
              .filter((r) => r.RouteID === route)
              .map((r) =>
                r.ProductID !== null ? (
                  <div className="productItem" key={r.ProductID}>
                    <span className="RproductID">{r.ProductID}</span>
                    <span className="RproductName">{r.ProductName}</span>
                    <span className="RproductQ">{r.Quantity}</span>
                  </div>
                ) : route !== 1 ? (
                  <div className="noProducts">
                    No Sales to show {r.ProductID}
                  </div>
                ) : null
              )}
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default SalesByCR;
