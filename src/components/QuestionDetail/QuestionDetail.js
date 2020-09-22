import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./QuestionDetail.scss";
import { handleSaveQuestionAnswer } from "../../actions/questions";
import NotFound from "../NotFound/NotFound";
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
  CircularProgress,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

class QuestionDetail extends Component {
  state = {
    selected: "",
  };

  handleOptionChange = (value) => {
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

    if (this.props.isWrongID === true) {
      return <NotFound />;
    }

    // if (question[id] !== this.props.match.params.id) {
    //   return <NotFound />;
    // }
    return (
      <>
        {question ? (
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
                    <div
                      className="detail__user"
                      style={{ marginLeft: "1rem" }}
                    >
                      <Typography variant="h6">Asked by</Typography>{" "}
                      <Avatar
                        src={authorImage}
                        alt={authorImage}
                        className="detail__avatar"
                      />{" "}
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
                      </RadioGroup>{" "}
                      <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                          <LinearProgress
                            variant="determinate"
                            value={(optionOneVotes / totalVotes) * 100}
                          />{" "}
                          <Typography variant="body2" color="textSecondary">
                            {optionOnePercent} %
                          </Typography>
                          <Box>
                            {" "}
                            <Typography variant="body2" color="textSecondary">
                              {optionOneVotes} out of {totalVotes} votes
                            </Typography>{" "}
                          </Box>
                        </Box>
                      </Box>
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
                      <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                          <LinearProgress
                            variant="determinate"
                            value={(optionTwoVotes / totalVotes) * 100}
                          />{" "}
                          <Typography variant="body2" color="textSecondary">
                            {optionTwoPercent} %
                          </Typography>
                          <Box>
                            {" "}
                            <Typography variant="body2" color="textSecondary">
                              {optionTwoVotes} out of {totalVotes} votes
                            </Typography>{" "}
                          </Box>
                        </Box>
                      </Box>
                    </FormControl>
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
                    <div
                      className="detail__user"
                      style={{ marginLeft: "1rem" }}
                    >
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
          </div>
        ) : (
          ""
        )}
      </>
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
  const isOneAnswered = question
    ? question.optionOne.votes.includes(authedUser)
    : "";
  const isTwoAnswered = question
    ? question.optionTwo.votes.includes(authedUser)
    : "";
  const answeredQuestion = isOneAnswered || isTwoAnswered;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = question
    ? ((optionOneVotes / totalVotes) * 100).toFixed()
    : 0;
  const optionTwoPercent = question
    ? ((optionTwoVotes / totalVotes) * 100).toFixed()
    : 0;

  if (question === undefined) {
    return {
      isWrongID: true,
    };
  }

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
