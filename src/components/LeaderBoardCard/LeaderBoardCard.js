import React from "react";
import { connect } from "react-redux";
import "./LeaderBoardCard.scss";
import { Avatar, Typography } from "@material-ui/core";

const LeaderBoardCard = (props) => {
  const { user } = props;
  const numQuestions = user.questions.length;
  const numAnswered = Object.keys(user.answers).length;
  return (
    <div className="leader__card">
      {" "}
      <div className="leader__user">
        <Avatar
          src={user.avatarURL}
          alt={user.avatarURL}
          className="leader__image"
        />
        <Typography color="primary" variant="h5">
          {user.name}
        </Typography>
      </div>
      <div className="leader__data">
        <div className="leader__questions">
          <div className="leader__asked">
            <Typography variant="h6">QUESTIONS ASKED:</Typography>
            <Typography variant="h4">{numQuestions}</Typography>{" "}
          </div>
          <div className="leader__answered">
            <Typography variant="h6">QUESTIONS ANSWERED:</Typography>{" "}
            <Typography variant="h4">{numAnswered}</Typography>
          </div>
        </div>
        <div className="leader__right">
          <Typography variant="h2">SCORE:</Typography>
          <Typography
            variant="h1"
            style={{ color: "#FF0000", fontWeight: "bold" }}
            className="leader__score"
          >
            {numQuestions + numAnswered}
          </Typography>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(LeaderBoardCard);
