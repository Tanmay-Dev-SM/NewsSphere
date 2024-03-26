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
  SettingsOutlined,
  AccountCircle,
  MoreVert as MoreIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { LogoPNG } from "src/constants/customIcons";
import SearchOptions from "./SearchOptions";
import {
  resetSearchStore,
  updateSearchStore,
} from "src/reducers/search/search";

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
const defaultSearchOptions = {
  query: "",
  exact_phrase: "",
  has_words: "",
  exclude_words: "",
  website: "",
  date: 0,
};
export default function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const [searchOptions, setSearchOptions] = React.useState({
    ...defaultSearchOptions,
  });
  const [anchorElForPopper, setAchorElForPopper] = useState(false);

  function handlePopperToggle(event) {
    setAchorElForPopper(!anchorElForPopper);
  }
  function clearSearchOptions() {
    setSearchOptions({ ...defaultSearchOptions });
  }
  // useEffect(() => {
  //   dispatch(updateSearchStore({ ...defaultSearchOptions }));
  // }, []);

  useEffect(() => {
    dispatch(updateSearchStore({ ...defaultSearchOptions }));

    return () => {
      dispatch(resetSearchStore({}));
    };
  }, []);

  return (
    <Box className="main">
      <StyledAppBar elevation={1}>
        <Grid container className="gridContainer">
          <Grid item md={1} sm={2}>
            <LogoPNG />
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
                placeholder="Search for topics,location and sources"
                variant="outlined"
                value={search.query ?? ""}
                onChange={(ev) => {
                  dispatch(
                    updateSearchStore({ ...search, query: ev.target.value })
                  );
                }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: <SearchIcon fontSize="small" />,
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
                      <ArrowDropDown fontSize="small" />
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
            <IconButton
              className="optionsIcon"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
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
