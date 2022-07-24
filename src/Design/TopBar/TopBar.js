import React from "react";
import AddNewWindow from "../AddNewWindow/AddNewWindow";

export default function TopBar() {
  return (
    <div
      style={{
        background: "#ff642f",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          margin: "0px",
          fontSize: "5vh",
          fontWeight: "bold",
          padding: "1vh",
          paddingLeft: "3vh",
          color: "white",
          textShadow: "3px 3px black",
        }}
      >
        To Do Application
      </p>
      <div  style={{padding:"1vh"}}>
        <AddNewWindow />
      </div>
    </div>
  );
}
