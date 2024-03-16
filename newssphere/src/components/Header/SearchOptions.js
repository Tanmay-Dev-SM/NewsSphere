import React from "react";
import {
  Grid,
  TextField,
  ClickAwayListener,
  MenuItem,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./styles.css";

// OUR COMPONENTS
import StyledSelect from "src/components/DropDown/Select";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  borderWidth: 0,
  borderColor: 0,
  // backgroundColor: "#F1F3F4",
  "& label": {
    transform: "translate(10px, 10px) scale(1)",
    fontSize: "11px",
  },
  "& label.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.85)",
  },
  "& input": {
    padding: "8px 0px",
    fontSize: "11px",
  },
  "& label.Mui-focused": {
    color: "#2981E9",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    "& fieldset": {
      borderColor: "#A5ADB0",
    },
    "&:hover fieldset": {
      borderColor: "#6A6A7D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2981E9",
      borderWidth: "2px",
    },
  },
  "& .MuiInput-root": {
    borderRadius: "6px",
    "& input": {
      borderColor: "#A5ADB0",
    },
    "&:hover input": {
      borderColor: "#6A6A7D",
    },
    "&.Mui-focused input": {
      borderColor: "#2981E9",
      borderWidth: "2px",
    },
  },
  "& .MuiInput-underline": {
    ":before": {
      borderBottom: "1px solid #d6d6d6",
    },
    // ":after": {
    //   borderBottom: "2px solid #f5f5f5",
    // },
  },
  "&& .MuiInput-underline:hover:before": {
    borderBottom: "1px solid #d6d6d6",
  },

  "& .MuiInput-input": {},
  "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {},
}));

const dateOptions = [
  { value: 0, label: "Anytime" },
  { value: 1, label: "Past Hour" },
  { value: 2, label: "Past 24 Hours" },
  { value: 3, label: "Past Week" },
  { value: 4, label: "Past Year" },
];

function SearchOptions({
  open = false,
  onClose = () => {},
  searchOptions,
  setSearchOptions = () => {},
  clearSearchOptions = () => {},
}) {
  return (
    open && (
      <ClickAwayListener onClickAway={onClose}>
        <Grid container className="searchOptions">
          <Grid item className="rowContainer">
            <Grid item md={3} sm={3}>
              <p className="optionsHeader">Exact Phrase</p>
            </Grid>
            <Grid item md={9} sm={9}>
              <StyledTextField
                className="margin"
                variant="standard"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                value={searchOptions?.exact_phrase ?? ""}
                onChange={(ev) => {
                  setSearchOptions({
                    ...searchOptions,
                    exact_phrase: ev.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid item className="rowContainer">
            <Grid item md={3} sm={3}>
              <p className="optionsHeader">Has Words</p>
            </Grid>
            <Grid item md={9} sm={9}>
              <StyledTextField
                className="margin"
                variant="standard"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                value={searchOptions?.has_words ?? ""}
                onChange={(ev) => {
                  setSearchOptions({
                    ...searchOptions,
                    has_words: ev.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid item className="rowContainer">
            <Grid item md={3} sm={3}>
              <p className="optionsHeader">Exclude Words</p>
            </Grid>
            <Grid item md={9} sm={9}>
              <StyledTextField
                className="margin"
                variant="standard"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                value={searchOptions?.exclude_words ?? ""}
                onChange={(ev) => {
                  setSearchOptions({
                    ...searchOptions,
                    exclude_words: ev.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid item className="rowContainer">
            <Grid item md={3} sm={3}>
              <p className="optionsHeader">Website</p>
            </Grid>
            <Grid item md={9} sm={9}>
              <StyledTextField
                className="margin"
                variant="standard"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                value={searchOptions?.website ?? ""}
                onChange={(ev) => {
                  setSearchOptions({
                    ...searchOptions,
                    website: ev.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid item className="rowContainer" style={{ margin: "16px 0 0" }}>
            <Grid item md={3} sm={3}>
              <p className="optionsHeader">Date</p>
            </Grid>
            <Grid item md={6} sm={6}>
              <FormControl fullWidth>
                <StyledSelect
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{ shrink: true }}
                  options={dateOptions}
                  MenuProps={{
                    disablePortal: true,
                  }}
                  value={searchOptions?.date ?? ""}
                  onChange={(ev) => {
                    setSearchOptions({
                      ...searchOptions,
                      date: ev.target.value,
                    });
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            className="rowContainer"
            style={{ justifyContent: "flex-end", gap: "16px" }}
          >
            <Grid item>
              <SecondaryButton
                title="Clear"
                variant="text"
                customHeight="32px"
                customWidth="96px"
                borderRadius="16px"
                onClick={clearSearchOptions}
              />
            </Grid>
            <Grid item>
              <PrimaryButton
                title="Search"
                customHeight="32px"
                customWidth="96px"
                borderRadius="16px"
                // onClick={handleSearch}
              />
            </Grid>
          </Grid>
        </Grid>
      </ClickAwayListener>
    )
  );
}

export default SearchOptions;
