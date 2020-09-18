import React from "react";
import "../App.css";
import "../App.scss";
// import { BreadCrumbs, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Breadcrumbs, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div className="nav__container">
      <div className="nav__left">
        <Breadcrumbs aria-label="breadcrumb">
          <Button color="secondary">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </Button>

          <NavLink to="/add" className="link">
            NEW QUESTION
          </NavLink>
          <NavLink to="/leaderboard">LEADER BOARD</NavLink>
        </Breadcrumbs>
      </div>
      <div className="nav__right">
        <Breadcrumbs aria-label="breadcrumb">
          <div>{props.authedUser} </div>
          <Avatar src={props.authedUserAvatar} alt={props.authedUserAvatar} />
          <Button>Logout</Button>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default connect()(Nav);
