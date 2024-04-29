import React from "react";
import {
  Home as HomeIcon,
  SportsSoccer as SoccerIcon,
  LocationOn as LocationIcon,
  Public as PublicIcon,
  Science as ScienceIcon,
  Computer as ComputerIcon,
  Movie as MovieIcon,
  AccountBalance as AccBalIcon,
  BusinessCenter as BusinessIcon,
  Flight as FlightIcon,
} from "@mui/icons-material";

export const topics = [
  {
    value: 0,
    label: "top",
    icon: <HomeIcon fontSize="small" />,
    color: "#3478BC",
  },
  {
    value: 1,
    label: "sports",
    icon: <SoccerIcon fontSize="small" />,
    color: "#AF640D",
  },
  {
    value: 2,
    label: "entertainment",
    icon: <MovieIcon fontSize="small" />,
    color: "#6E5C96",
  },
  {
    value: 3,
    label: "business",
    icon: <BusinessIcon size="small" />,
    color: "#363E62",
  },
];
