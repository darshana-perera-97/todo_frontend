import React from "react";

export default function BottomBar() {
  return (
    <div
      style={{
        background: "#ff642f",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <p
        style={{
          margin: "0px",
          fontSize: "2vh",
          //   fontWeight: "bold",
          padding: "1vh",
          paddingRight: "3vh",
          textAlign: "right",
          color: "rgba(0,0,0,1)",
          //   textShadow: "3px 3px black",
        }}
      >
        Powered By Darshana Perera
      </p>
    </div>
  );
}
