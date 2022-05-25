import { Container } from "@mui/material";
import { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header/Header";

const Home: FC = () => (
  <>
    <Container maxWidth="xl">
      <Navbar />
    </Container>
    <Header />
  </>
);

export default Home;
