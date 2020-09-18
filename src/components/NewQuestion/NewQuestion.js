import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";

export default class NewQuestion extends Component {
  render() {
    return (
      <div>
        <p>Create New Poll:</p>
        <FormControl>
          Would You Rather:
          <TextField id="filled-basic" label="Option One" variant="filled" />
          OR
          <TextField id="filled-basic" label="Option Two" variant="filled" />
          <Button fullWidth variant="contained" color="primary">
            Submit New Poll
          </Button>
        </FormControl>
      </div>
    );
  }
}
