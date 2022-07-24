import React from "react";
import logo from "./app.png";

export default function LoadingSc() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="20vh" />
        <p style={{ textShadow: "2px 2px black" }}>To Do Application</p>
      </header>
    </div>
  );
}
