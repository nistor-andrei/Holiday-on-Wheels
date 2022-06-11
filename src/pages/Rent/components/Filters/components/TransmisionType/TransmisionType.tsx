import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";

const TransmisionType: FC = () => {
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
            label="Manual"
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
            label="Auto"
            sx={{ color: "#fff" }}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default TransmisionType;
