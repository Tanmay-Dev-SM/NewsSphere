import React from "react";
import { styled } from "@mui/system";

const HorizontalComponent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  height: "50px",
  margin: "20px auto",
});

const Title = styled("div")({
  fontSize: "20px",
  whiteSpace: "nowrap",
});

const Line = styled("div")({
  flexShrink: 0,
  borderBottom: "5px solid black",
  width: "100%",
  marginLeft: "10px",
});

const TitleDivider = () => {
  return (
    <HorizontalComponent>
      <Title>Your Briefing</Title>
      <Line />
    </HorizontalComponent>
  );
};

export default TitleDivider;

