import React from "react";
import "./styles.css";
import moment from "moment";
import { IconButton } from "@mui/material";
import {
  Refresh as RefreshIcon,
  AirOutlined as WindyIcon,
  StormOutlined as StormyIcon,
  WbSunnyOutlined as SunnyIcon,
  AcUnitOutlined as SnowyIcon,
  CycloneOutlined as CycloneIcon,
  FloodOutlined as FloodIcon,
  LandslideOutlined as LandslideIcon,
  ModeNightOutlined as ModeNightIcon,
  ThunderstormOutlined as ThunderIcon,
  TornadoOutlined as TornadoIcon,
  TsunamiOutlined as TsumaniIcon,
  SevereColdOutlined as SevereColdIcon,
  CloudOutlined as CloudyIcon,
  WaterDropOutlined as RainyIcon,
  ThermostatOutlined as TemperatureIcon,
  LocationCityOutlined as LocationIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const WeatherCard = ({ fetchWeather = () => {} }) => {
  const location = useSelector((state) => state.location);

  const renderWeatherIcon = (type) => {
    switch (type) {
      case "windy":
        return <WindyIcon fontSize="small" />;
      case "clouds":
        return <CloudyIcon fontSize="small" />;
      case "snow":
        return <SnowyIcon fontSize="small" />;
      case "rain":
        return <RainyIcon fontSize="small" />;
      case "clear":
      case "sunny":
        return <SunnyIcon fontSize="small" />;
      case "flood":
        return <FloodIcon fontSize="small" />;
      case "storm":
        return <StormyIcon fontSize="small" />;
      case "tsunami":
        return <TsumaniIcon fontSize="small" />;

      default:
        return <></>;
    }
  };
  return (
    <div className="weatherMain">
      <div className="top">
        <LocationIcon fontSize="small" />
        <p className="header">{location?.name}</p>
        <IconButton
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={fetchWeather}
        />
      </div>
      <div className="flex">
        <p className="day">
          {moment()?.format("dddd")}, <span>{moment()?.format("MMMM DD")}</span>
        </p>
        <p className="description">
          {renderWeatherIcon(location?.weather?.[0].main?.toLowerCase())}
          {location?.weather?.[0].main}
        </p>
        <br />
      </div>

      <div className="flex">
        <p className="temp">Temp. {location?.main?.temp} &deg;F</p>
        <p className="temp">Humidity {location?.main?.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(location?.sys?.sunrise * 1000)?.toLocaleTimeString("en-US")}
        </p>
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(location?.sys?.sunset * 1000)?.toLocaleTimeString("en-US")}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
