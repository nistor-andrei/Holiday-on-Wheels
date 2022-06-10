import {Box, InputAdornment, TextField} from "@mui/material";
import {FC, useState} from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "./searchcar.module.css";
import {ButtonLogin} from "../../../../components/reusable/ButtonLogin";
import {DesktopDatePicker, LocalizationProvider,} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {grey} from "@mui/material/colors";
import {TextFieldGrey} from "./textFieldGrey";

const SearchCar: FC = () => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <section className={style.searchBox}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <h2>Let's find your ideal car</h2>
                <div className={style.form}>
                    <Box
                        className={style.inputs}
                        sx={{display: "flex", alignItems: "center"}}
                    >
                        <TextFieldGrey
                            id="outlined-basic"
                            label="Pick-up Location"
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{backgroundColor: "#232323"}}
                                    >
                                        <LocationOnIcon sx={{color: grey[50]}}/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box
                        className={style.inputs}
                        sx={{display: "flex", alignItems: "center"}}
                    >
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="DD/MM/yyyy"
                            value={value}
                            className={style.inputs}
                            onChange={handleChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    sx={{
                                        input: {
                                            color: "#fff",
                                        },
                                        label: {color: "#fff"},
                                        backgroundColor: "#232323",
                                        "& .MuiOutlinedInput-root:hover fieldset": {
                                            borderColor: "#ff6600",
                                        },
                                    }}
                                />
                            )}
                            InputAdornmentProps={{
                                position: "start",
                                sx: {
                                    svg: {color: "#fff"},
                                },
                            }}
                        />
                    </Box>
                    <Box
                        className={style.inputs}
                        sx={{display: "flex", alignItems: "center"}}
                    >
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="DD/MM/yyyy"
                            className={style.inputs}
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    sx={{
                                        input: {
                                            color: "#fff",
                                        },
                                        "& .MuiOutlinedInput-root:hover fieldset": {
                                            borderColor: "#ff6600",
                                        },
                                        label: {color: "#fff"},
                                        backgroundColor: "#232323",
                                    }}
                                />
                            )}
                            InputAdornmentProps={{
                                position: "start",
                                sx: {
                                    svg: {color: "#fff"},
                                    input: {color: "#fff"},
                                },
                            }}
                        />
                    </Box>
                </div>
            </LocalizationProvider>
            <ButtonLogin className={style.button}>Search</ButtonLogin>
        </section>
    );
};

export default SearchCar;
