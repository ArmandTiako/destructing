import React, { Component } from "react";
import Users from "./Singers";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Musiciens Migos</h1>
        <Users name="Quavo Huncho" age="28" />
        <Users name="Offset YRN" age="26" />
        <Users name="TakeOff" age="25" />
        <Users name="Dj Durel" age="30" />
      </div>
    );
  }
}

export default Display;
