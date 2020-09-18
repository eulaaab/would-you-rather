import React, { Component } from "react";
import { Link, withRouther } from "react-router-dom";
import { connect } from "react-redux";
import {
  Avatar,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
} from "@material-ui/core";

class QuestionDetail extends Component {
  render() {
    // const { questionData } = this.props;
    const {
      id,
      question,
      author,
      authorImage,
      optionOneVotes,
      optionTwoVotes,
      isOneAnswered,
      isTwoAnswered,
      answeredQuestion,
    } = this.props;
    console.log("answered", answeredQuestion);

    return (
      <div>
        <p>Poll</p>

        {answeredQuestion ? (
          <div>
            <span className={isOneAnswered ? answeredQuestion : ""}>
              {isOneAnswered ? <div>check</div> : null}{" "}
              {question.optionOne.text}
            </span>

            <span className={isTwoAnswered ? answeredQuestion : ""}>
              {isTwoAnswered ? <div>boom</div> : null} {question.optionTwo.text}
            </span>
          </div>
        ) : (
          <div>
            <p>Poll</p>
            {author.name}
            <Avatar src={authorImage} alt={authorImage} />
            <FormControl>
              <RadioGroup>
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={question.optionOne.text}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={question.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
            <Button fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const authorImage = question ? users[question.author].avatarURL : null;
  //const optionOneText = questions[id].optionOne.text
  //const optionTwoText = questions[id].optionTwo.text
  const optionOneVotes = question.optionOne.votes
    ? question.optionOne.votes.length
    : 0;
  const optionTwoVotes = question.optionTwo.votes
    ? question.optionTwo.votes.length
    : 0;
  const isOneAnswered = question.optionOne.votes.includes(authedUser);
  const isTwoAnswered = question.optionTwo.votes.includes(authedUser);
  const answeredQuestion = isOneAnswered || isTwoAnswered;

  return {
    id,
    authedUser,
    question,
    authorImage,
    author,
    optionOneVotes,
    optionTwoVotes,
    answeredQuestion,
  };
}

export default connect(mapStateToProps)(QuestionDetail);
