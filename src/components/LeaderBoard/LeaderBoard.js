import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "../LeaderBoardCard/LeaderBoardCard";
class LeaderBoard extends Component {
  render() {
    const { leaderBoardData } = this.props;
    return (
      <div>
        <p>Leader Board</p>
        {leaderBoardData.map((id) => (
          <LeaderBoardCard key={id} id={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderBoardData = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    leaderBoardData,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
