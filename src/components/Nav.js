import React from "react";
import "../App.css";
import "../App.scss";
import { NavLink } from "react-router-dom";
import { Breadcrumbs, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  const handleLogout = () => {
    props.dispatch(setAuthedUser(null));
  };
  return (
    <div className="nav__container">
      <div className="nav__left">
        <Breadcrumbs aria-label="breadcrumb">
          <Button color="secondary">
            <NavLink to="/">Home</NavLink>
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
          <Button onClick={handleLogout}>
            <NavLink to="/">Logout</NavLink>
          </Button>
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
