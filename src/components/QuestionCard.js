import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import QuestionDetail from "./QuestionDetail";

class QuestionCard extends Component {
  showDetails = (e) => {
    e.preventDefault();
  };
  render() {
    //console.log("props in question card", this.props.question);
    //console.log("author", this.props.author.name);
    //console.log("question option One", this.props.question.optionOne);
    const { author, question, id } = this.props;
    return (
      <div>
        <div>{author.name} asks</div>
        <div>
          <div>
            <div>Would you rather</div>
            <div>{question.optionOne.text}... OR</div>

            <button onClick={this.showDetails}>
              <Link to={`/questions/${id}`}>Answer Poll</Link>
            </button>
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
