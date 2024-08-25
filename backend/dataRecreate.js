const citiesAndRoutes = (data, storeID) => {
  const result = data
    .filter((cityData) => cityData.StoreID === storeID)
    .reduce((acc, obj) => {
      const existingCityEntry = acc.find((entry) => entry.city === obj.City);

      if (existingCityEntry) {
        const routeData = {
          RouteID: obj.RouteID,
          RouteName: obj.RouteName,
          ProductID: obj.ProductID,
          ProductName: obj.ProductName,
          Quantity: obj.Quantity,
        };
        existingCityEntry.Routes.push(routeData);
      } else {
        const newCityEntry = {
          city: obj.City,
          StoreID: obj.StoreID,
          Routes: [
            {
              RouteID: obj.RouteID,
              RouteName: obj.RouteName,
              ProductID: obj.ProductID,
              ProductName: obj.ProductName,
              Quantity: obj.Quantity,
            },
          ],
        };
        acc.push(newCityEntry);
      }

      return acc;
    }, []);
  return result;
};

const quaterSales = (data, quater) => {
  if (quater == 0) return data;
  return data.filter((d) => d.Quarter === quater);
};

module.exports = {
  citiesAndRoutes,
  quaterSales,
};
