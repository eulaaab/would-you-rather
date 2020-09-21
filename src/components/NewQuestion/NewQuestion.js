import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import "./NewQuestion.scss";
import { handleAddNewQuestion } from "../../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleInputOneChange = (e) => {
    const { optionOne } = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  handleInputTwoChange = (e) => {
    const { optionTwo } = e.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;

    this.props
      .dispatch(handleAddNewQuestion(optionOne, optionTwo))
      .then(() => ({
        // toHome: true,
        optionOne: "",
        optionTwo: "",
      }));
  };
  render() {
    const { handleInputOneChange, handleInputTwoChange } = this.props;
    const { optionOne, optionTwo, toHome } = this.state;
    console.log("handle input one", this.state.optionOne);
    console.log("handle input two", optionTwo);
    // if (toHome) {
    //   return <Redirect to="/" />;
    // }
    return (
      <>
        <Paper>
          <Tabs centered value="NEW QUESTION">
            <Tab label="NEW QUESTION" />
          </Tabs>
        </Paper>
        <div className="new-question__container">
          <Paper>
            <Typography variant="h4">CREATE NEW QUESTION:</Typography>
            <Paper className="new-question__form">
              <form onSubmit={this.handleSubmit}>
                <Typography variant="h5">Would You Rather:</Typography>
                <TextField
                  type="text"
                  id="optionOneText"
                  defaultValue={optionOne}
                  label="Option One"
                  variant="filled"
                  onChange={handleInputOneChange}
                />
                <Typography variant="h6">... OR ...</Typography>
                <TextField
                  type="text"
                  id="optionTwoText"
                  defaultValue={optionTwo}
                  label="Option Two"
                  variant="filled"
                  onChange={handleInputTwoChange}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="new-question__button"
                >
                  Add Question
                </Button>
              </form>
            </Paper>
          </Paper>
        </div>
      </>
    );
  }
}

export default connect()(NewQuestion);
