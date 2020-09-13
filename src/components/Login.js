import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Container,
  Button,
  CssBaseline,
  Grow,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import authedUser from "../actions/authedUser";
import users from "../actions/users";

class Login extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}
{
  /*
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));



const Login = () => {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <div className="login">
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="{classes.paper}">
          <Avatar className="{classes.avatar}">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="{classes.form}" noValidate>
          
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                
                    <Button
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    Select User
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Cake</MenuItem>
                    <MenuItem onClick={popupState.close}>Death</MenuItem>
                  </Menu>
                 
                  }
                </React.Fragment>
              )}
            </PopupState>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="{classes.submit}"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      
    </div>
  );
};
   */
}
function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default Login;
