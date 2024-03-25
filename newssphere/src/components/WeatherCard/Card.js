import React from "react";
import "./styles.css";
import moment from "moment";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => {
  const location = useSelector((state) => state.location);

  return (
    <div className="weatherMain">
      <div className="top">
        <p className="header">{location?.name}</p>
        <IconButton
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={refresh}
        />
      </div>
      <div className="flex">
        <p className="day">
          {moment()?.format("dddd")}, <span>{moment()?.format("LL")}</span>
        </p>
        <p className="description">{location?.weather?.[0].main}</p>
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
