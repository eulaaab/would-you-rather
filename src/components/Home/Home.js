import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar, Tabs, Tab, Grid, Paper } from "@material-ui/core";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./Home.scss";

class Home extends Component {
  state = {
    value: 0,
  };

  toggleTab = (event, value) => {
    event.preventDefault();
    this.setState({
      value,
    });
  };
  render() {
    const { userQuestionsData } = this.props;
    const { answeredIds, unansweredIds } = userQuestionsData;
    const { value } = this.state;
    console.log("unanswered", unansweredIds);
    return (
      <div>
        <Paper>
          <Tabs value={value} onChange={this.toggleTab} centered>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </Paper>
        {value === 0 && (
          <div className="question__container">
            {unansweredIds.map((qID) => (
              <Paper>
                <QuestionCard id={qID} key={qID} />
              </Paper>
            ))}
          </div>
        )}
        {value === 1 && (
          <div className="question__container">
            {answeredIds.map((qID) => (
              <Paper>
                <QuestionCard id={qID} key={qID} />
              </Paper>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = Object.keys(users[authedUser].answers);
  //const answeredIds = Object.values(questions)
  //  .filter((question) => answeredIds.includes(question.id))
  // .sort((a, b) => b.timestamp - a.timestamp).id;
  const unansweredIds = Object.keys(questions).filter(
    (question) => !answeredIds.includes(question)
  );
  // .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionsData: {
      answeredIds,
      unansweredIds,
    },
  };
}

export default connect(mapStateToProps)(Home);
