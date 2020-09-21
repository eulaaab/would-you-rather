import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./QuestionDetail.scss";
import { handleSaveQuestionAnswer } from "../../actions/questions";
import {
  Avatar,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  Typography,
  Tabs,
  Tab,
  Paper,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";

class QuestionDetail extends Component {
  state = {
    selected: "",
    toHome: false,
  };

  handleOptionChange = (value) => {
    //const { selectedAnswer } = e.target.value;
    this.setState(() => ({
      selected: value,
    }));
  };
  handleSubmitAnswer = (e) => {
    e.preventDefault();
    const { authedUser, id } = this.props;
    const { selected } = this.state;
    this.props.dispatch(handleSaveQuestionAnswer(id, selected));
    this.setState(() => ({
      selected: "",
      toHome: id ? false : true,
    }));
  };
  render() {
    const {
      id,
      question,
      author,
      authorImage,
      optionOnePercent,
      optionTwoPercent,
      authedUser,
      answeredQuestion,
      optionTwoVotes,
      optionOneVotes,
      totalVotes,
    } = this.props;
    const { optionOne, optionTwo } = question;
    console.log(" option one", optionOne);
    console.log("option two", optionTwo);
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        {answeredQuestion ? (
          <div>
            <Paper>
              <Tabs value={0} centered>
                <Tab label="ANSWERED QUESTION" />
              </Tabs>
            </Paper>
            <Paper style={{ margin: "5rem 20rem" }}>
              <div className="detail__card">
                <div className="detail__user" style={{ marginLeft: "1rem" }}>
                  <Avatar
                    src={authorImage}
                    alt={authorImage}
                    className="detail__avatar"
                  />{" "}
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      variant="static"
                      value={optionOnePercent}
                    />
                    <Box
                      top={-3}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                      >{`${optionOnePercent}%`}</Typography>
                    </Box>
                  </Box>
                  <Typography color="primary" variant="h5">
                    {author.name}
                  </Typography>{" "}
                </div>
                <FormControl>
                  <RadioGroup>
                    {question.optionOne.votes.includes(authedUser) ? (
                      <FormControlLabel
                        value="optionOne"
                        control={<Radio />}
                        label={question.optionOne.text}
                        checked
                      >
                        {" "}
                        {optionOnePercent}{" "}
                      </FormControlLabel>
                    ) : (
                      <FormControlLabel
                        value="optionOne"
                        control={<Radio />}
                        label={question.optionOne.text}
                        disabled
                      />
                    )}
                  </RadioGroup>
                </FormControl>
                {question.optionTwo.votes.includes(authedUser) ? (
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={question.optionTwo.text}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={question.optionTwo.text}
                    disabled
                  />
                )}
              </div>
            </Paper>
          </div>
        ) : (
          <div>
            <Paper>
              <Tabs value={0} centered>
                <Tab label="UNANSWERED QUESTION" />
              </Tabs>
            </Paper>
            <Paper style={{ margin: "5rem 20rem" }}>
              <div className="detail__card">
                <div className="detail__user" style={{ marginLeft: "1rem" }}>
                  <Avatar
                    src={authorImage}
                    alt={authorImage}
                    className="detail__avatar"
                  />
                  <Typography color="primary" variant="h5">
                    {author.name}
                  </Typography>{" "}
                </div>
                <form onSubmit={this.handleSubmitAnswer}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="question"
                      name="question"
                      value={this.state.selected}
                      onChange={(e) =>
                        this.handleOptionChange(e.currentTarget.value)
                      }
                    >
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
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: "2rem" }}
                    disabled={!this.state.selected}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Paper>
          </div>
        )}
        {/*
          <LinearProgress
          value={(optionTwoVotes / totalVotes) * 100}
          variant="determinate"
        />{" "}
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${optionOnePercent}%`}</Typography>
        */}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const authorImage = question ? users[question.author].avatarURL : null;
  const optionOneVotes = question ? question.optionOne.votes.length : 0;
  const optionTwoVotes = question ? question.optionTwo.votes.length : 0;
  const isOneAnswered = question.optionOne.votes.includes(authedUser);
  const isTwoAnswered = question.optionTwo.votes.includes(authedUser);
  const answeredQuestion = isOneAnswered || isTwoAnswered;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = question
    ? ((optionOneVotes / totalVotes) * 100).toFixed()
    : 0;
  const optionTwoPercent = question
    ? ((optionTwoVotes / totalVotes) * 100).toFixed()
    : 0;
  return {
    id,
    authedUser,
    question,
    authorImage,
    author,
    optionOneVotes,
    optionTwoVotes,
    answeredQuestion,
    optionOnePercent,
    optionTwoPercent,
    totalVotes,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionDetail));
