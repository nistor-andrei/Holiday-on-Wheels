import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldGrey = styled(TextField)({
  "& label": {
    color: "white",
  },

  "& input": {
    backgroundColor: "#232323",
  },

  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#232323",
    "& fieldset": {
      borderColor: "#232323",
    },
    "&:hover fieldset": {
      borderColor: "#ff6600",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff6600",
    },
  },
});
