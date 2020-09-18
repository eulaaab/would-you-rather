import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    padding: 20,
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

const LeaderBoardCard = (props) => {
  const { user, classes } = props;
  const numQuestions = user.questions.length;
  const numAnswered = Object.keys(user.answers).length;
  return (
    <div>
      <TableBody>
        <TableRow>
          <TableCell>
            <Avatar src={user.avatarURL} />
          </TableCell>
        </TableRow>
        <TableCell>{user.name}</TableCell>

        <p>Questions asked:</p>
        <TableCell numeric>{numQuestions}</TableCell>

        <p>Questions answered:</p>
        <TableCell numeric>{numAnswered}</TableCell>
        <p>Score:</p>
        <TableCell numeric>{numQuestions + numAnswered}</TableCell>
      </TableBody>
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(withStyles(styles)(LeaderBoardCard));
