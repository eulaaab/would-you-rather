import React from "react";
import "../App.css";
// import { BreadCrumbs, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/add" className="link">
        New Question
      </NavLink>
      <NavLink to="/leaderboard">Leader Board</NavLink>
      <p>{props.authedUser}</p>
      <Avatar src={props.authedUserAvatar} alt={props.authedUserAvatar} />
      <button>Logout</button>
    </div>
  );
}

export default connect()(Nav);
