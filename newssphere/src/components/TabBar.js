import React from "react"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import {
  Home,
  SportsSoccer,
  LocationOn,
  Public,
  Science,
  Computer,
  Movie,
  AccountBalance,
  BusinessCenter,
} from "@mui/icons-material"

const topics = [
  { label: "Top Stories", Icon: Home, color: "#3478BC" },
  { label: "Sports", Icon: SportsSoccer, color: "#AF640D" },
  { label: "Local", Icon: LocationOn, color: "#6B6B6B" },
  { label: "World", Icon: Public, color: "#697E30" },
  { label: "Science", Icon: Science, color: "#7B2D00" },
  { label: "Technology", Icon: Computer, color: "#00809D" },
  { label: "Entertainment", Icon: Movie, color: "#6E5C96" },
  { label: "Politics", Icon: AccountBalance, color: "#A62D76" },
  { label: "Business", Icon: BusinessCenter, color: "#363E62" },
]

function TabBar() {
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  console.log(selectedTab)
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",

        borderRadius: "20px",
        minHeight: "0",
        height: "50px",
      }}
    >
      <Tabs value={selectedTab} onChange={handleChange}>
        {topics.map((topic, index) => (
          <Tab
            icon={<topic.Icon />}
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
              minHeight: "0",
              padding: "6px 12px",
              width: "auto",
              borderRadius: "20px",
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default TabBar
