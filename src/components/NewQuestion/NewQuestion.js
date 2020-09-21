import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleInputOneChange = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  handleInputTwoChange = (e) => {
    const optionTwo = e.target.value;
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
        optionOne: "",
        optionTwo: "",
      }));
    this.setState({
      toHome: true,
    });
  };
  render() {
    //const { handleInputOneChange, handleInputTwoChange } = this.props;
    //const { toHome } = this.state;
    // console.log("handle input one", this.state.optionOne);
    // console.log("handle input two", optionTwo);
    if (this.state.toHome === true) {
      return <Redirect to="/home" />;
    }
    return (
      <>
        <Paper>
          <Tabs centered value={0}>
            <Tab label="NEW QUESTION" />
          </Tabs>
        </Paper>

        <div className="new-question__container">
          <Paper>
            <Typography variant="h4">CREATE NEW QUESTION:</Typography>
            <Paper className="new-question__form">
              <form onSubmit={this.handleSubmit}>
                <FormControl>
                  <Typography variant="h5">Would You Rather:</Typography>
                  <TextField
                    type="text"
                    id="optionOneText"
                    label="Option One"
                    defaultValue={this.state.optionOne}
                    variant="filled"
                    onChange={this.handleInputOneChange}
                  />
                  <Typography variant="h6">... OR ...</Typography>
                  <TextField
                    type="text"
                    id="optionTwoText"
                    defaultValue={this.state.optionTwo}
                    label="Option Two"
                    variant="filled"
                    onChange={this.handleInputTwoChange}
                  />
                </FormControl>
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
