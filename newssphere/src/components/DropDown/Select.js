import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material";

const CustomSelect = styled(Select)((theme) => ({
  fontSize: 12,
  "& .MuiSelect-outlined": {
    padding: "8px 12px",
  },
  "& .MuiMenuItem-root": {
    fontSize: 12,
    ":hover": {
      backgroundColor: "",
    },
  },
  "& .MuiMenuItem-root.Mui-selected": {
    backgroundColor: "#f6f6f6",
    ":hover": {
      backgroundColor: "",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    ":active": {
      border: "none",
    },
  },
}));
function StyledSelect({
  variant = "outlined",
  margin = "dense",
  options = [],
  InputLabelProps = {},
  MenuProps = {},
  optionStyles = {},
  value = "",
  onChange = () => {},
}) {
  return (
    <FormControl fullWidth>
      <CustomSelect
        native={false}
        variant={variant}
        margin={margin}
        InputLabelProps={{ ...InputLabelProps }}
        MenuProps={{ ...MenuProps }}
        value={value}
        onChange={onChange}
      >
        {options?.map((option) => (
          <MenuItem style={{ ...optionStyles }} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
}

export default StyledSelect;
