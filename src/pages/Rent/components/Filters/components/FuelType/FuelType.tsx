import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch } from "../../../../../../rtk-store/hooks";
import { setFuelType } from "../../../../../../rtk-store/actions/filterSlice";

const FuelType: FC = () => {
  const dispatch = useAppDispatch();
  function setValue(event: any, value: string) {
    if (event.target.checked) {
      dispatch(setFuelType(value));
    } else {
      dispatch(setFuelType(""));
    }
  }
  return (
    <Accordion sx={{ backgroundColor: "transparent" }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: "#fff", marginLeft: "1rem" }} />
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            flexShrink: 0,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Fuel Type
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="boxFilter">
          <RadioGroup aria-labelledby="fuelType" name="radio-buttons-fuelType">
            <FormControlLabel
              value="Diesel"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Diesel")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Diesel"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              value="Petrol"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Petrol")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Petrol"
              sx={{ color: "#fff" }}
            />
          </RadioGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default FuelType;
