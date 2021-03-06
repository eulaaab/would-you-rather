import React from "react";
import { connect } from "react-redux";
import "./Login.scss";
import {
  Avatar,
  Container,
  Button,
  MenuItem,
  Typography,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../../App.css";
import PropTypes from "prop-types";
import { setAuthedUser } from "../../actions/authedUser";

class Login extends React.Component {
  state = {
    selectedUser: "",
    toHome: false,
  };

  handleChangeUser = (value) => {
    this.setState(() => ({
      selectedUser: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if (this.state.selectedUser === "") {
      alert("Please select a user");
    } else {
      dispatch(setAuthedUser(this.state.selectedUser));
    }
  };

  render() {
    //console.log("selectedUser state", this.state.selectedUser);
    const { users } = this.props;
    //console.log("this is the user", this.state.selectedUser);
    //console.log("this is the the value", value);
    return (
      <div className="login">
        <Container component="main" maxWidth="xs">
          <Avatar className="{classes.avatar}">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormControl variant="filled">
            <Select
              value={this.state.selectedUser}
              inputProps={{
                name: "user",
              }}
              onChange={(e) => this.handleChangeUser(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users &&
                Object.keys(users).map((user) => (
                  <MenuItem value={user} key={user}>
                    <Avatar
                      alt={users[user].avatarURL}
                      src={users[user].avatarURL}
                    />
                    {users[user].name}
                  </MenuItem>
                ))}
            </Select>
            {this.state.selectedUser ? (
              <InputLabel></InputLabel>
            ) : (
              <InputLabel>Select User</InputLabel>
            )}
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            className="login__button"
          >
            Sign In
          </Button>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
