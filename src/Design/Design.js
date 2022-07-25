import React from "react";
import Body from "./Body/Body";
import BottomBar from "./BottomBar/BottomBar";
import LoadingSc from "./LoadingSc/LoadingSc";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  const [t, setT] = React.useState(false);
  setTimeout(() => {
    setT(true);
  }, 2000);
  return (
    <div>
      {!t && <LoadingSc />}
      {t && <TopBar />}
      {t && <Body />}
      {t && <BottomBar style={{ bottom: "0px" }} />}
    </div>
  );
}
