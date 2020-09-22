import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Home from "./components/Home/Home";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";
import Login from "./components/Login/Login";
import Nav from "./components/Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser, authedUserAvatar, LoggedIn } = this.props;
    return (
      <Router>
        {this.props.LoggedIn && (
          <>
            <Nav authedUser={authedUser} authedUserAvatar={authedUserAvatar} />
          </>
        )}
        {!this.props.LoggedIn ? (
          <Login />
        ) : (
          <div>
            <Route path="/" exact component={Home} LoggedIn={LoggedIn} />
            <Route path="/add" component={NewQuestion} LoggedIn={LoggedIn} />
            <Route
              path="/questions/:id"
              component={QuestionDetail}
              LoggedIn={LoggedIn}
            />
            <Route
              path="/leaderboard"
              component={LeaderBoard}
              LoggedIn={LoggedIn}
            />
            {/*
  <Route path="/" exact component={Login} />
              */}
          </div>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    LoggedIn: authedUser !== null,
    authedUser: authedUser ? users[authedUser].name : "",
    authedUserAvatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(App);
