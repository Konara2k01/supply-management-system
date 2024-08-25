import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const layout = () => {
  return (
    <>
      <Grid
        width="100vw"
        minWidth="0"
        maxHeight="0"
        templateAreas={`"nav nav" "menu main" "footer footer"`}
        templateColumns={{ base: "75px 1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav" width="100vw">
          <Navbar />
        </GridItem>
        <GridItem area="menu">
          <Box paddingLeft={5}>
            <Menu />
          </Box>
        </GridItem>
        <GridItem area="main" minWidth="0">
          <Outlet />
        </GridItem>
        <GridItem area="footer" width="100vw">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default layout;
