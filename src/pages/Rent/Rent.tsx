import { Container } from "@mui/material";
import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Filters, Promo, Brands } from "./components";
import style from "./rent.module.css";

const Rent: FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Promo />
      <div className={style.rentContainer}>
        <Filters />
        <Brands />
      </div>
    </Container>
  );
};

export default Rent;
