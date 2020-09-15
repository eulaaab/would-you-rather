import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionCard extends Component {
  render() {
    console.log("props in question card", this.props.question);
    console.log("author", this.props.author.name);
    console.log("question option One", this.props.question.optionOne);
    const { author, question, id } = this.props;
    return (
      <div className="tile-item">
        <div className="tile-header">{author.name} asks</div>
        <div className="tile-body">
          <div className="question-body">
            <div className="would-you">
              Would you rather{question.optionOne.text}
            </div>
            <div className="question-text">{question.optionOne.votes}...</div>
            <button className="btn-default">View Poll</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : "";

  return {
    question,
    author,
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionCard);
