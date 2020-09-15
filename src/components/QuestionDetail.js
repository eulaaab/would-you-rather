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
    const { id, question, author, authorImage } = this.props;

    return (
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

  return {
    id,
    authedUser,
    question,
    authorImage,
    author,
  };
}

export default connect(mapStateToProps)(QuestionDetail);
