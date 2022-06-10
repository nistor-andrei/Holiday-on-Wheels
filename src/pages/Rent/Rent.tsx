import {Container} from "@mui/material";
import {FC} from "react";
import {Navbar} from "../../components/Navbar";
import {Filters, Promo} from "./components";

const Rent: FC = () => {
    return (
        <Container maxWidth="xl">
            <Navbar/>
            <Promo/>
            <Filters/>
        </Container>
    );
};

export default Rent;
