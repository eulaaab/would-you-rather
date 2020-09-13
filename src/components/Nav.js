import React from "react";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";

export default function Nav() {
  return (
    <div>
      <Home />
      <LeaderBoard />
      <NewQuestion />
    </div>
  );
}
