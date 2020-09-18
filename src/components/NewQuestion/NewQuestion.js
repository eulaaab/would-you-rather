import React, { Component } from "react";
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

export default class NewQuestion extends Component {
  render() {
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
              <FormControl>
                <Typography variant="h5">Would You Rather:</Typography>
                <TextField
                  id="filled-basic"
                  label="Option One"
                  variant="filled"
                />
                <Typography variant="h6">... OR ...</Typography>
                <TextField
                  id="filled-basic"
                  label="Option Two"
                  variant="filled"
                  centered
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="new-question__button"
                >
                  Submit New Poll
                </Button>
              </FormControl>
            </Paper>
          </Paper>
        </div>
      </>
    );
  }
}
