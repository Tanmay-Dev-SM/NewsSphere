import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import { topics } from "src/constants/topics";
import "./styles.css";

function TabBarNew({ selectedTab, handleChange }) {
  return (
    <Grid container flexWrap="nowrap" overflow="hidden" justifyContent="center">
      <Grid container className="tabs" md={10} xs={12}>
        {topics.map((topic, index) => (
          <Grid
            item
            className="tab"
            key={index}
            sx={{
              background: selectedTab === index ? topic.color : "#f1f1f1",
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
            <span>{topic.label}</span>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default TabBarNew;
