import { Container } from "@mui/material";
import { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CarSlider, Promo, MostPopular, Header } from "./components";

const Home: FC = () => (
  <>
    <Container maxWidth="xl">
      <Navbar />
    </Container>
    <Header />
    <Container maxWidth="xl">
      <Promo />
      <MostPopular />
      <CarSlider />
    </Container>
  </>
);

export default Home;
