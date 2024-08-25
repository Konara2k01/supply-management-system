import "./annualRepot.scss";
import { Grid, GridItem } from "@chakra-ui/react";
import QuatarSalesBox from "../../../components/QuatarSalesBox/QuatarSalesBox";
import { quatarSales } from "./data";
import ChartBox from "../../../components/chartBox/ChartBox";
import {
  chartBoxQuatarProductionCost,
  chartBoxQuatarProductionIncome,
  chartBoxQuatarProfit,
  chartBoxQuatarSales,
} from "../../home/data";
import { useYearQuery } from "../../../store";

const annualReport = () => {
  const currentYear = new Date().getFullYear();
  const { year, setYear } = useYearQuery();
  console.log(year);
  return (
    <div>
      <div className="dropDownMenu">
        <label htmlFor="dropdown">Year:</label>
        <select
          id="dropdown"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value, 10))}
        >
          <option value="2023">{currentYear}</option>
          <option value="2022">{currentYear - 1}</option>
          <option value="2021">{currentYear - 2}</option>
          <option value="2020">Before {currentYear - 2}</option>
        </select>
      </div>
      <Grid
        className="grid"
        templateAreas={{
          base: `"box1"
            "box2"
            "box3"
            "box4"
            "box5"
            "box6"
            "box7"
            "box8"`,
          sm: `"box1 box1"
            "box1 box1"
            "box2 box2"
           "box2 box2"
            "box3 box3"
            "box3 box3"
            "box4 box4"
            "box4 box4"
            "box5 box6"
            "box7 box8"`,

          md: `"box1 box1 box2 box2"
              "box1 box1 box2 box2"
              "box3 box3 box4 box4"
              "box3 box3 box4 box4"
              "box5 box6 box7 box8"`,
          lg: `
              "box1 box2 box5"
              "box1 box2 box6"
              "box3 box4 box7"
              "box3 box4 box8"`,
        }}
        gap="10px"
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          lg: "2fr 2fr 1fr",
        }}
      >
        <GridItem area="box1">
          <QuatarSalesBox {...quatarSales(1, 2023)} />
        </GridItem>
        <GridItem area="box2">
          <QuatarSalesBox {...quatarSales(2, 2023)} />
        </GridItem>
        <GridItem area="box3">
          <QuatarSalesBox {...quatarSales(3, 2023)} />
        </GridItem>
        <GridItem area="box4">
          <QuatarSalesBox {...quatarSales(4, 2023)} />
        </GridItem>
        <GridItem area="box5" className="sBox">
          <ChartBox {...chartBoxQuatarSales()} />
        </GridItem>
        <GridItem area="box6" className="sBox">
          <ChartBox {...chartBoxQuatarProfit()} />
        </GridItem>
        <GridItem area="box7" className="sBox">
          <ChartBox {...chartBoxQuatarProductionCost()} />
        </GridItem>
        <GridItem area="box8" className="sBox">
          <ChartBox {...chartBoxQuatarProductionIncome()} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default annualReport;
