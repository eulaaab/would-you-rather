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
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  handleInputOneChange = (e) => {
    const { optionOneText } = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  };

  handleInputTwoChange = (e) => {
    const { optionTwoText } = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;

    this.props
      .dispatch(handleAddNewQuestion(optionOneText, optionTwoText))
      .then(() => ({
        // toHome: true,
        optionOneText: "",
        optionTwoText: "",
      }));
  };
  render() {
    const { handleInputOneChange, handleInputTwoChange } = this.props;
    const { optionOneText, optionTwoText, toHome } = this.state;
    console.log("handle input one", this.state.optionOneText);
    console.log("handle input two", optionTwoText);
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
                  defaultValue={optionOneText}
                  label="Option One"
                  variant="filled"
                  onChange={handleInputOneChange}
                />
                <Typography variant="h6">... OR ...</Typography>
                <TextField
                  type="text"
                  id="optionTwoText"
                  defaultValue={optionTwoText}
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
