import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

class LeaderBoardCard extends Component {
  render() {
    const { user } = this.props;
    const numQuestions = user.questions.length;
    const numAnswered = Object.keys(user.answers).length;
    return (
      <div>
        <p>USER</p>
        {user.name}
        <Avatar src={user.avatarURL} />
        <p>Questions asked:</p>
        <div>{numQuestions}</div>
        <p>Questions answered:</p>
        <div>numAnswered</div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(LeaderBoardCard);
