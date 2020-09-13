import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Container,
  Button,
  CssBaseline,
  MenuItem,
  Typography,
} from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  NativeSelect,
} from "@material-ui/core";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { withStyles } from "@material-ui/core/styles";
import "../App.css";
// import authedUser from "../actions/authedUser";
// import users from "../actions/users";
import { setAuthedUser, clearAuthedUser } from "../actions/authedUser";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: "8px",
  },
  formControl: {
    margin: "8px",
    minWidth: "120px",
  },
  selectEmpty: {
    marginTop: "8px",
  },
});

class Login extends React.Component {
  state = {
    selectedUser: "",
  };

  handleLogin = (e) => {
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(user));
    this.setState(() => {
      return {
        user: user,
      };
    });
  };
  render() {
    console.log("props", this.props.users);
    const { users, classes, handleLogin } = this.props;
    return (
      <div className="login">
        <Container component="main" maxWidth="xs">
          <div className="{classes.paper}">
            <Avatar className="{classes.avatar}">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Select User</InputLabel>
              <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={users}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Select User
                </MenuItem>
                {users.map((user) => (
                  <MenuItem key={user.id}>
                    <ListItemAvatar>
                      <Avatar>{user.avatar}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="{classes.submit}"
            >
              Sign In
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users).map((user) => {
      return {
        id: user.id,
        name: user.name,
        avatar: user.avatarURL,
      };
    }),
    selectedUser: authedUser,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
