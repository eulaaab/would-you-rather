import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        {!this.props.LoggedIn ? (
          <Login />
        ) : (
          <div>
            <Nav authedUser={authedUser} authedUserAvatar={authedUserAvatar} />
            <Route path="/" exact component={Home} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/questions/:id" component={QuestionDetail} />
            <Route path="/leaderboard" component={LeaderBoard} />
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
