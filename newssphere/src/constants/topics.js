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
  { label: "Top", icon: <HomeIcon fontSize="small" />, color: "#3478BC" },
  {
    label: "Sports",
    icon: <SoccerIcon fontSize="small" />,
    color: "#AF640D",
  },
  { label: "Local", icon: <LocationIcon fontSize="small" />, color: "#6B6B6B" },
  { label: "World", icon: <PublicIcon fontSize="small" />, color: "#697E30" },
  {
    label: "Science",
    icon: <ScienceIcon fontSize="small" />,
    color: "#7B2D00",
  },
  {
    label: "Technology",
    icon: <ComputerIcon fontSize="small" />,
    color: "#00809D",
  },
  {
    label: "Entertainment",
    icon: <MovieIcon fontSize="small" />,
    color: "#6E5C96",
  },
  {
    label: "Politics",
    icon: <AccBalIcon size="small" />,
    color: "#A62D76",
  },
  {
    label: "Business",
    icon: <BusinessIcon size="small" />,
    color: "#363E62",
  },
  { label: "Tourism", icon: <FlightIcon size="small" />, color: "#FF4F4B" },
];
