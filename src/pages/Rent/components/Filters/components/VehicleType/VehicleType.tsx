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
import { setVehicleType } from "../../../../../../rtk-store/actions/filterSlice";
import style from "./vehicleType.module.css";

const VehicleType: FC = () => {
  const dispatch = useAppDispatch();
  function setValue(event: any, value: string) {
    if (event.target.checked) {
      dispatch(setVehicleType(value));
    } else {
      dispatch(setVehicleType(""));
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
          Vehicle type
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={style.filter}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Luxury"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Luxury")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Luxury"
              sx={{ color: "#fff", width: "100%" }}
            />
            <FormControlLabel
              value="Sports"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Sports")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Sports"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              value="Economy"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Economy")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Economy"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              value="Compact"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Compact")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Compact"
              sx={{ color: "#fff" }}
            />
          </RadioGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default VehicleType;
