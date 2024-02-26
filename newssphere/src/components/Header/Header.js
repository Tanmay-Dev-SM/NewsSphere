import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { TextField, Grid } from "@mui/material";

import InputBase from "@mui/material/InputBase";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { SettingsOutlined } from "@mui/icons-material";

import MoreIcon from "@mui/icons-material/MoreVert";
import "./styles.css";
import { LogoPNG } from "src/constants/customIcons";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: "#F1F3F4",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F1F3F4",
  "& label": {
    transform: "translate(10px, 10px) scale(1)",
    fontSize: "11px",
  },
  "& label.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.85)",
  },
  "& input": {
    padding: "8px 10px",
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
  "& .MuiOutlinedInput-input": {},
  "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {},
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFF",
  flexWrap: "nowrap",
}));

export default function Header() {
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box className="main">
      <StyledAppBar position="static">
        <Grid container className="gridContainer">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Grid item md={1} sm={2} className="logoContainer">
            <LogoPNG />
          </Grid>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Grid item md={3} sm={3} />
          <Grid item md={7} sm={7}>
            <StyledTextField
              // label="Search"
              placeholder="Search for topics,location and sources"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </Grid>
          <Grid item md={1} sm={1}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleSettingsMenuOpen}
              // color="inherit"
            >
              <SettingsOutlined />
            </IconButton>
          </Grid>
          <Grid container sx={{ flexGrow: 1 }} />
          <Grid item md={1} sm={1} sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
          <Grid item md={1} sm={1} sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              //onClick={handleMobileMenuOpen}
              // color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid>
        </Grid>
      </StyledAppBar>
    </Box>
  );
}
