import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const VehicleType: FC = () => {
  return (
    <Accordion sx={{ backgroundColor: "transparent" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            width: "33%",
            flexShrink: 0,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Vehicle type
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#2B2B2B",
                  "&.Mui-checked": {
                    color: "var(--orange)",
                  },
                }}
              />
            }
            label="Luxury"
            sx={{ color: "#fff" }}
          />
          <FormControlLabel
            control={
              <Checkbox
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
            control={
              <Checkbox
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
            control={
              <Checkbox
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
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default VehicleType;
