import React from "react";
import "../App.css";
import "../App.scss";
import Login from "./Login/Login";
// import { BreadCrumbs, Link } from "@material-ui/core";
import { NavLink, Link, Redirect } from "react-router-dom";
import { Breadcrumbs, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { clearAuthedUser } from "../actions/authedUser";

function Nav(props) {
  const handleLogout = () => {
    props.dispatch(clearAuthedUser());
  };
  return (
    <div className="nav__container">
      <div className="nav__left">
        <Breadcrumbs aria-label="breadcrumb">
          <Button color="secondary">
            <NavLink to="/home">Home</NavLink>
          </Button>
          <Button color="secondary">
            <NavLink to="/add" className="link">
              NEW QUESTION
            </NavLink>
          </Button>
          <Button color="secondary">
            <NavLink to="/leaderboard">LEADER BOARD</NavLink>
          </Button>
        </Breadcrumbs>
      </div>
      <div className="nav__right">
        <Breadcrumbs aria-label="breadcrumb">
          <div>{props.authedUser} </div>
          <Avatar src={props.authedUserAvatar} alt={props.authedUserAvatar} />

          <Button onClick={handleLogout}>Logout</Button>
        </Breadcrumbs>
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
