import React from "react";
import { connect } from "react-redux";
import "./LeaderBoardCard.scss";
import { Avatar } from "@material-ui/core";
import {
  TableBody,
  TableCell,
  TableRow,
  Typography,
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
  const { user } = props;
  const numQuestions = user.questions.length;
  const numAnswered = Object.keys(user.answers).length;
  return (
    <div>
      <TableBody>
        <TableRow>
          <TableCell>
            <Avatar src={user.avatarURL} />
          </TableCell>

          <TableCell>{user.name}</TableCell>
        </TableRow>
        <TableCell numeric>
          {" "}
          <p>Questions asked:</p> {numQuestions}
        </TableCell>

        <TableCell numeric>
          {" "}
          <p>Questions answered:</p>
          {numAnswered}
        </TableCell>
        <div className="leader-card__right">
          <Typography variant="h6">SCORE:</Typography>
          <Typography variant="h3" style={{ color: "#FF0000" }}>
            {numQuestions + numAnswered}
          </Typography>
        </div>
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
