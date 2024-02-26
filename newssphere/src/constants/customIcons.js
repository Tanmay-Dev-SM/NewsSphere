import React from "react";
import NewsSphereLogo from "src/constants/images/NewsSphereLogo.png";
import "./styles.css";

export class LogoPNG extends React.Component {
  render() {
    return (
      <div className="logoContainer">
        <img className="logo" src={NewsSphereLogo} />
      </div>
    );
  }
}
