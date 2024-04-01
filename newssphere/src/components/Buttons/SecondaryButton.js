import { Button } from "@mui/material";
import React from "react";

function SecondaryButton({
  title = "",
  variant = "outlined",
  disabled = false,
  onClick = () => {},
  size = "medium",
  customHeight = "100%",
  customWidth = "100%",
  customMargin = 0,
  borderRadius = 4,
}) {
  let bgcolor = variant === "contained" ? "#00488d" : "";
  let color = variant == "contained" ? "#FFF" : "#00488d";

  return (
    <Button
      size={size}
      variant={variant}
      disabled={disabled}
      style={{
        fontSize: "12px",
        height: customHeight,
        widows: customWidth,
        margin: customMargin,
        borderRadius: borderRadius,
      }}
      sx={{
        color: color,
        backgroundColor: bgcolor,
        textTransform: "none",
        ":hover": {
          color: color,
          backgroundColor: bgcolor,
        },
        ":focused": {},
        ":active": {},
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default SecondaryButton;
