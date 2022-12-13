import React, {useState} from 'react'
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const MySelect = () => {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ]
    const [selected, setSelected] = useState("");

    function handleChange(selected) {
        setSelected(selected)
    }

    return (
        <FormControl
            size="small"
            fullWidth
            sx={{
                width: "40vw",
                marginTop: "5px",
                fontSize: "medium",
                color: "gray",
                height: "30px",
            }}
        >
            <InputLabel>Курс</InputLabel>
            <Select
                onChange={handleChange}
            >
                {options.map((option, number) =>
                    <MenuItem value={option.value} key={number}> {option.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default MySelect;