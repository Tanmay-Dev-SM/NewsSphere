import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import { topics } from "src/constants/topics";
import "./styles.css";
import { useTranslation } from "react-i18next";

function TabBarNew({ selectedTab, handleChange }) {
  const { t } = useTranslation();
  return (
    <Grid
      container
      justifyContent="flex-start"
      flexWrap="nowrap"
      flexDirection="column"
      className="tabsContainer"
    >
      {topics.map((topic, index) => (
        <Grid
          item
          className="tab"
          key={index}
          sx={{
            background: selectedTab === index ? topic.color : "",
            color: selectedTab === index ? "#FFF" : "#222",
            ":hover": {
              transition: "ease-in 0.2s",
              color: "#fff",
              backgroundColor: topic.color,
            },
          }}
          onClick={(ev) => handleChange(ev, index)}
        >
          <span>{topic.icon}</span>
          <Grid sx={{ display: { xs: "none", md: "flex" } }}>
            {t(`topics.${topic.label}`)}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default TabBarNew;
