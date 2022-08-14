import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";
import { useAppDispatch } from "../../../../../../rtk-store/hooks";
import { setTransmisionType } from "../../../../../../rtk-store/actions/filterSlice";

const TransmisionType: FC = () => {
  const dispatch = useAppDispatch();
  function setValue(event: any, value: string) {
    if (event.target.checked) {
      dispatch(setTransmisionType(value));
    } else {
      dispatch(setTransmisionType(""));
    }
  }
  return (
    <Accordion sx={{ backgroundColor: "transparent" }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: "#fff", marginLeft: "auto" }} />
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
          Transimision Type
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="boxFilter">
          <RadioGroup
            aria-labelledby="transmission"
            name="radio-buttons-transmission"
          >
            <FormControlLabel
              value="Manual"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Manual")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Manual"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              value="Automatic"
              control={
                <Radio
                  onClick={(e) => setValue(e, "Automatic")}
                  sx={{
                    color: "#2B2B2B",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
              }
              label="Automatic"
              sx={{ color: "#fff" }}
            />
          </RadioGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default TransmisionType;
