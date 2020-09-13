import React, { Component } from "react";
import loadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionDetail from "./components/QuestionDetail";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log();
    return (
      <Router>
        <Login />
        <Home />
        <NewQuestion />
        <LeaderBoard />
        <QuestionDetail />
      </Router>
    );
  }
}

export default connect()(App);

// import React from "react";
// import "./App.css";
// import Login from "./components/Login";
// import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";

// function App() {
//   let history = useHistory()

//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;
