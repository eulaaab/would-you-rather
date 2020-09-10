import React from "react";
import Home from "../pages/Home";
import LeaderBoard from "../pages/LeaderBoard";
import NewQuestion from "../pages/NewQuestion";

export default function Nav() {
  return (
    <div>
      <Home />
      <LeaderBoard />
      <NewQuestion />
    </div>
  );
}
