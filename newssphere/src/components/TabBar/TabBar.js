import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import { topics } from "src/constants/topics";

function TabBar({ selectedTab, handleChange }) {
  return (
    <AppBar
      position="static"
      style={{
        display: 'flex',
        backgroundColor: "white",
        borderRadius: "20px",
        width: 'auto',
        minHeight: "0",
        height: "auto",
      }}
    >
      <Tabs value={selectedTab} onChange={handleChange}>
        {topics.map((topic, index) => (
          <Tab
            icon={topics.icon}
            label={topic.label}
            key={index}
            style={{
              color: "white",
              background: topic.color,
              margin: "5px 10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              minHeight: "0px",
              padding: "6px 12px",
              width: "auto",
              borderRadius: "20px",
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default TabBar;
