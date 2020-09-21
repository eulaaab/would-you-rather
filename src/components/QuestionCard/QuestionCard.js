import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./QuestionCard.scss";
import { Typography, Button, Avatar } from "@material-ui/core";

class QuestionCard extends Component {
  showDetails = (e) => {
    e.preventDefault();
  };
  render() {
    //console.log("props in question card", this.props.question);
    //console.log("author", this.props.author.name);
    //console.log("question option One", this.props.question.optionOne);
    const { author, question, id } = this.props;
    //const answeredQuestions =
    return (
      <div className="question__card">
        <div className="question__user">
          <Avatar
            src={author.avatarURL}
            alt={author.avatarURL}
            className="question__avatar"
          />
          <Typography color="primary" variant="h5">
            {author.name}
          </Typography>{" "}
        </div>
        <Typography variant="h6">asks WOULD YOU RATHER:</Typography>

        <div>
          <Typography variant="h6" style={{ color: "#FF0000" }}>
            {question ? question.optionOne.text : ""}
          </Typography>
          <Typography>OR ...</Typography>
          <Button
            onClick={this.showDetails}
            variant="contained"
            color="default"
            className="question__button"
          >
            <Link to={`/questions/${id}`}>VIEW POLL</Link>
          </Button>
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
