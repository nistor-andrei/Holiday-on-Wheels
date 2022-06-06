import { Container } from "@mui/material";
import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Promo } from "./components";

const Rent: FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Promo />
    </Container>
  );
};

export default Rent;
