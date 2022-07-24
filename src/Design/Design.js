import React from "react";
import BottomBar from "./BottomBar/BottomBar";
import LoadingSc from "./LoadingSc/LoadingSc";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  //   const [t, setT] = React.useState(false);
  return (
    <div>
      <LoadingSc />
      {/* <TopBar /> */}
      {/* <BottomBar style={{ bottom: "0px" }} /> */}
    </div>
  );
}
