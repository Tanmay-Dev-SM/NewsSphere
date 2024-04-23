import React, { useEffect, useState, useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  TextField,
  Grid,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  InputBase,
} from "@mui/material";
import {
  KeyboardArrowDown,
  ArrowDropDown,
  AccountCircle,
  MoreVert as MoreIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { LogoPNG } from "src/constants/customIcons";
import SearchOptions from "./SearchOptions";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import ProfileMenu from "../SettingsMenu/ProfileMenu";
import TabBar from "../TabBar/TabBar";
import {
  resetSearchStore,
  updateSearchStore,
} from "src/reducers/search/search";
import { useNavigate } from "react-router-dom";
const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F1F3F4",
  borderRadius: "6px",
  "& label": {
    transform: "translate(10px, 10px) scale(1)",
    fontSize: "13px",
    zIndex: 1,
  },
  "& label.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.85)",
  },
  "& input": {
    padding: "8px 10px",
    fontSize: "13px",
    zIndex: 1,
  },
  "& label.Mui-focused": {
    color: "#2981E9",
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
    // borderRadius: "60px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      // border: "none",
      // borderColor: "#transparent",
    },
    "&.Mui-focused fieldset": {
      //border: "solid",
      boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      zIndex: 0,
    },
  },
  "& .MuiOutlinedInput-input": {},
  "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {},
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFF",
  flexWrap: "nowrap",
}));

export default function Header({
  searchOptions = {},
  setSearchOptions = () => {},
}) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const [anchorElForPopper, setAchorElForPopper] = useState(false);

  function handlePopperToggle(event) {
    setAchorElForPopper(!anchorElForPopper);
  }
  function clearSearchOptions() {
    try {
      setSearchOptions({});
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box className="main">
      <StyledAppBar elevation={1}>
        <Grid container className="gridContainer">
          <Grid item md={1} sm={2}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <LogoPNG />
            </span>
          </Grid>
          <Grid
            md={5}
            sm={5}
            item
            style={{ alignItems: "center", display: "flex" }}
          >
            <Grid item md={11} sm={10} position="relative">
              <SearchOptions
                open={anchorElForPopper}
                onClose={handlePopperToggle}
                searchOptions={searchOptions}
                setSearchOptions={setSearchOptions}
                clearSearchOptions={clearSearchOptions}
              />
              <StyledTextField
                // label="Search"
                placeholder="Search for topics, location and sources"
                variant="outlined"
                value={search.query ?? ""}
                onChange={(ev) => {
                  dispatch(
                    updateSearchStore({ ...search, query: ev.target.value })
                  );
                }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <SearchIcon fontSize="small" sx={{ zIndex: 1 }} />
                  ),
                  endAdornment: (
                    <IconButton
                      sx={{
                        p: "0",
                        transform: anchorElForPopper ? "rotate(180deg)" : "",
                        transition: "ease 0.5s",
                      }}
                      disableFocusRipple={true}
                      disableTouchRipple={true}
                      disableRipple={true}
                      onClick={handlePopperToggle}
                    >
                      <ArrowDropDown fontSize="small" sx={{ zIndex: 1 }} />
                    </IconButton>
                  ),
                }}
                onKeyDown={(ev) => {
                  if (ev.key == "Enter") {
                    ev.preventDefault();
                  }
                }}
              />
            </Grid>
            <Grid item md={1} sm={2}>
              {/* Settings Menu */}
              <SettingsMenu aria-controls={menuId} />
            </Grid>
          </Grid>
          <Grid
            item
            md={1}
            sm={1}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            className="menuOptions"
          >
            <ProfileMenu />
          </Grid>
          <Grid
            item
            md={1}
            sm={1}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
            className="menuOptions"
          >
            <IconButton
              className="optionsIcon"
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              //onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Grid>
        </Grid>
      </StyledAppBar>
    </Box>
  );
}
