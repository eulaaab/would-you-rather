import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionCard extends Component {
  render() {
    console.log("props in question card", this.props.question);
    console.log("author", this.props.author.name);
    console.log("question option One", this.props.question.optionOne);
    const { author, question, id } = this.props;
    return (
      <div>
        <div>{author.name} asks</div>
        <div>
          <div>
            <div>Would you rather{question.optionOne.text}</div>
            <div>{question.optionOne.votes}...</div>
            <button>View Poll</button>
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
